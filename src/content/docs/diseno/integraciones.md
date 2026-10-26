---
title: "Diseño de interfaces entre sistemas e integraciones"
description: "Entregable #14 Diseño de las Interfaces entre Sistemas: catálogo de integraciones INT-01 a INT-06, protocolos, seguridad, manejo de fallas y secuencia de pago."
---

Versión: 2.0-borrador. Fecha: 25 de octubre de 2026.

Este documento forma parte del **Entregable #14 (Diseño de las Interfaces entre Sistemas)** junto con los [Contratos de API y eventos](/3daltoque-docs/diseno/api-eventos/) y las [Convenciones compartidas](/3daltoque-docs/specs/00-contratos-y-convenciones/). Especifica los contratos técnicos, protocolos, formatos de intercambio, seguridad y políticas de tolerancia a fallos entre el backend de **3DAltoque** y los sistemas externos.

---

## 1. Catálogo de interfaces entre sistemas (`INT-01` a `INT-06`)

| ID | Sistema / Interfaz Externa | Dirección y Protocolo | Puerto en el Dominio (`Hexagonal Port`) | Propósito en 3DAltoque | Requisitos vinculados |
| --- | --- | --- | --- | --- | --- |
| `INT-01` | **Mercado Pago Checkout Pro y Webhooks** | Saliente (`HTTPS REST JSON`) + Entrante (`Webhook HTTPS POST` firmado con HMAC-SHA256) | `PaymentGatewayPort` (`MercadoPagoCheckoutProAdapter`) | Cobro manual del abono mensual del maker a favor de la cuenta receptora de 3DAltoque y verificación servidor a servidor del estado del pago. | `RF-12.5` a `RF-12.9`, `RNF-09`, `RNF-15` |
| `INT-02` | **Servicio de Mapas y Geocodificación** | Saliente (`HTTPS REST GeoJSON`) + Consulta espacial interna en `PostGIS` | `GeolocationPort` (`PostGisGeolocationAdapter`) | Normalización de ubicaciones aproximadas de referencia, cálculo de distancias por radio y visualización de zonas sin exponer domicilios exactos. | `RF-03.1`, `RF-09.1`, `RF-09.2`, `RNF-02`, `RNF-04` |
| `INT-03` | **Almacenamiento Privado de Objetos (S3 / MinIO)** | Saliente (`AWS S3 Signature v4`) + Transferencia directa autorizada por URL pre-firmada (`PUT`/`GET`) | `PrivateStoragePort` (`S3CompatibleStorageAdapter`) | Custodia privada de modelos 3D (`.STL`, `.OBJ`, `.3MF`) y evidencias fotográficas/video de piezas terminadas, con expiración corta de enlaces y retiro programado. | `RF-02.1`, `RF-02.2`, `RF-06.1`, `RF-10.1` a `RF-10.4`, `RNF-04`, `RNF-11` |
| `INT-04` | **Proveedores de Notificaciones Externas (Email / Push)** | Saliente (`SMTP/HTTPS REST` vía worker asíncrono sobre `outbox_events`) | `NotificationChannelPort` (`MultiChannelNotificationAdapter`) | Envío de avisos externos por nuevas solicitudes compatibles, ofertas recibidas, evidencias listas para revisión y recordatorios de vencimiento. | `RF-07.1`, `RF-07.3`, `RF-07.4`, `RF-12.11`, `RNF-15` |
| `INT-05` | **Interfaz entre Clientes (`Web Next.js` / `Mobile Expo`) y API Backend** | Entrante (`HTTPS REST JSON / OpenAPI 3.1` sobre `/api/v1` con `Bearer JWT`) | Controladores HTTP FastAPI + esquemas Pydantic v2 | Contrato único compartido por Web y Mobile para la totalidad de operaciones de negocio, sincronización de estados y errores tipados. | `RF-11.1`, `RF-11.2`, `RNF-14`, `RNF-16`, `RNF-17` |
| `INT-06` | **Adaptador Simulado de Cobros (Contingencia Demo)** | Interno / Entorno de prueba (`PAYMENT_MODE=simulated`) | `PaymentGatewayPort` (`SimulatedPaymentAdapter`) | Ejecución controlada de escenarios de aprobación, rechazo o demora de pago de membresía durante evaluaciones académicas sin tarjetas reales. | `RF-12.14`, `RNF-10` |

---

## 2. Especificación detallada por interfaz

### 2.1 `INT-01` — Interfaz con Mercado Pago Checkout Pro y Webhooks

La compra de membresía conserva en el backend el maker, la versión del plan, el importe, la moneda, la duración, el modo (`REAL` vs `SIMULATED`) y el entorno. El backend crea la preferencia de **Checkout Pro** utilizando las credenciales de la cuenta propia de **3DAltoque** (nunca el cliente frontend).

![Secuencia de pago del abono](/3daltoque-docs/documentos/5b550fb39979-secuencia-pago.svg)

[Abrir SVG](/3daltoque-docs/documentos/5b550fb39979-secuencia-pago.svg) · [Fuente editable (`.mmd`)](/3daltoque-docs/documentos/2d10cc2b1ebd-secuencia-pago.mmd)

- **Creación de preferencia (`Outbound`):**
  - Endpoint externo: `POST https://api.mercadopago.com/checkout/preferences`
  - Payload enviado por el backend: `external_reference` (`compra_membresia_id`), `items` (título del plan mensual, `quantity: 1`, `currency_id: "ARS"`, `unit_price` fijado desde `membership_plan_versions`), `back_urls` (`success`, `pending`, `failure`) y `notification_url` (`/api/v1/webhooks/mercadopago`).
- **Recepción y verificación de notificación (`Inbound Webhook` + `Outbound Verification`):**
  1. Mercado Pago invoca `POST /api/v1/webhooks/mercadopago` enviando las cabeceras `x-signature` y `x-request-id`.
  2. El backend valida la firma criptográfica HMAC-SHA256 con `PAYMENT_WEBHOOK_SECRET` y persiste el evento en `payment_webhook_events` usando `provider_event_id` como clave de idempotencia.
  3. El backend consulta servidor a servidor `GET https://api.mercadopago.com/v1/payments/{id}` para contrastar `external_reference`, `status`, `transaction_amount`, `currency_id` y `collector_id` (cuenta propia).
  4. Solo si el pago está `approved` y coincide con la orden local, se acredita `PagoAbono` y se genera **como máximo un** `PeriodoAcceso` ([CP-023](/3daltoque-docs/planificacion/pruebas/#cp-023), [CP-024](/3daltoque-docs/planificacion/pruebas/#cp-024)).

---

### 2.2 `INT-02` — Interfaz con Servicio de Mapas, Geocodificación y PostGIS

- **Propósito:** Convertir referencias de barrio/zona ingresadas por clientes y makers en coordenadas normalizadas y resolver consultas de cercanía sin revelar nunca la dirección exacta del taller del maker ([CP-020](/3daltoque-docs/planificacion/pruebas/#cp-020)).
- **Intercambio de datos:**
  - Las coordenadas internas de `maker_profiles` se almacenan con tipo `GEOGRAPHY(Point, 4326)` en PostgreSQL/PostGIS para ejecutar `ST_DWithin` en `< 50 ms` durante el matching ([RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02)).
  - Hacia el exterior (`Cliente Web` y `Mobile`), el adaptador devuelve únicamente el nombre de la zona/barrio (`zone_label`), la distancia aproximada redondeada en kilómetros (`approx_distance_km`) y el centroide público de la zona (`public_centroid_lat`, `public_centroid_lng`).
- **Tolerancia a fallas ([RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15)):** Si el geocodificador externo devuelve timeout (`> 2.5 s`) o error `5xx`, el usuario puede seleccionar directamente su localidad/barrio desde el catálogo precargado en la tabla `zones`.

---

### 2.3 `INT-03` — Interfaz con Almacenamiento Privado de Objetos (S3 / MinIO)

- **Propósito:** Evitar que archivos 3D de clientes y evidencias de pedidos queden expuestos en URLs públicas predecibles o saturen los workers HTTP de FastAPI.
- **Flujo de intercambio en tres pasos ([CU-INC-01](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-01)):**
  1. **Autorización (`POST /api/v1/archivos/intencion-carga`):** El cliente informa nombre, extensión, tipo MIME, tamaño en bytes y finalidad (`REQUEST_MODEL`, `DELIVERY_EVIDENCE`, `CHAT_ATTACHMENT`). El backend valida las reglas ([RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2)), crea el registro en `private_files` (`estado = PENDING_UPLOAD`) y devuelve una URL pre-firmada `PUT` con expiración de `10 minutos`.
  2. **Confirmación (`POST /api/v1/archivos/{id}/confirmar`):** Finalizada la subida, el backend verifica mediante `HEAD Object` en S3/MinIO la existencia, tamaño real y hash `ETag/SHA-256` antes de pasar el archivo a `AVAILABLE`.
  3. **Descarga controlada (`GET /api/v1/archivos/{id}/url-descarga`):** Solo el cliente propietario, un maker con invitación/oferta vigente o el participante del pedido recibe una URL pre-firmada `GET` con TTL de `5 minutos`, registrando el acceso en `file_download_logs` ([CP-005](/3daltoque-docs/planificacion/pruebas/#cp-005), [CP-014](/3daltoque-docs/planificacion/pruebas/#cp-014)).

---

### 2.4 `INT-04` — Interfaz con Canales de Notificación Externa y Outbox

- **Desacoplamiento transaccional:** Toda operación de negocio (nueva solicitud compatible, nueva oferta, pedido confirmado, evidencia presentada, recordatorio de revisión o aviso de próximo vencimiento de abono) persiste primero la notificación interna (`notifications`) y un evento en `outbox_events` dentro de la misma transacción SQL.
- **Despacho asíncrono:** El worker consume `outbox_events` y despacha el aviso hacia el proveedor de correo/push (`INT-04`) con política de hasta `3 reintentos` con *exponential backoff*. Si el proveedor externo falla, la notificación in-app (`WEB-11` / `MOB-10`) ya está disponible para el usuario y el hecho de negocio nunca se revierte ([PNF-003](/3daltoque-docs/planificacion/pruebas/#pnf-003)).

---

### 2.5 `INT-06` — Interfaz del Adaptador Simulado de Cobros (`PAYMENT_MODE=simulated`)

- Implementa exactamente la misma interfaz `PaymentGatewayPort` que `INT-01`, pero resuelve el ciclo de pago dentro del entorno local/académico de demostración.
- Marca obligatoriamente `is_simulated = true` en `membership_checkout_orders` y `membership_payments`, muestra un distintivo visible `MODO DEMO / SIMULADO` en la interfaz y se desactiva por configuración en producción ([RF-12.14](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-14), [CP-027](/3daltoque-docs/planificacion/pruebas/#cp-027)).
