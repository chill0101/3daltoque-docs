---
title: "Contratos de API y eventos de dominio"
description: "Entregable #14 Diseño de las Interfaces entre Sistemas: endpoints REST propuestos (/api/v1), payloads JSON, códigos de estado, idempotencia y eventos de dominio."
---

Versión: 2.0-borrador. Fecha: 25 de octubre de 2026. Prefijo común propuesto: `/api/v1`.

Este documento forma parte del **Entregable #14 (Diseño de las Interfaces entre Sistemas)** y define el contrato de comunicación entre los clientes **Web (`Next.js`)** y **Mobile (`React Native / Expo`)** y el backend **FastAPI**, así como los eventos internos de dominio y el contrato de webhooks con Mercado Pago.

---

## 1. Endpoints REST del flujo operativo de impresión (`/api/v1`)

| Operación | Método y Ruta | Actor / Permiso | Códigos HTTP | Regla de negocio / Condición |
| --- | --- | --- | --- | --- |
| **Registrar cuenta** | `POST /api/v1/auth/register` | Público | `201`, `409`, `422` | Registra usuario, rol inicial (`CLIENTE`/`MAKER`) y aceptación de términos (`RF-01.1`). |
| **Iniciar sesión** | `POST /api/v1/auth/login` | Público (con rate limit) | `200`, `401`, `429` | Devuelve par `access_token` + `refresh_token` (`RF-01.4`). |
| **Cerrar sesión** | `POST /api/v1/auth/logout` | Autenticado | `204`, `401` | Revoca la sesión actual en `user_sessions` (`RF-01.5`). |
| **Autorizar carga de archivo privado** | `POST /api/v1/archivos/intencion-carga` | `Cliente` / `Maker` | `201`, `400`, `413` | Valida extensión (`.STL`, `.OBJ`, `.3MF`, `.JPG`, `.PNG`, `.MP4`) y límite de tamaño antes de emitir URL pre-firmada (`RF-02.2`, `RF-10.1`). |
| **Confirmar archivo subido** | `POST /api/v1/archivos/{id}/confirmar` | Propietario del archivo | `200`, `404`, `422` | Verifica integridad del objeto en S3/MinIO y habilita su asociación (`RF-10.2`). |
| **Crear solicitud de impresión** | `POST /api/v1/solicitudes` | `Cliente` | `201`, `422` | Requiere archivo confirmado y ubicación de referencia; calcula estimación orientativa y dispara matching (`CU-01`). |
| **Consultar candidatos / estado de solicitud** | `GET /api/v1/solicitudes/{id}` | `Cliente` propietario / `Maker` invitado | `200`, `403`, `404` | Devuelve versión vigente, estado, estimación orientativa y resumen de compatibilidad (`RF-02.4`, `RF-02.5`). |
| **Listar solicitudes compatibles** | `GET /api/v1/makers/me/solicitudes` | `Maker` con membresía vigente | `200`, `403` | Filtra por capacidad técnica, radio y membresía activa (`RF-03.2`, `RF-12.10`). |
| **Publicar oferta** | `POST /api/v1/solicitudes/{id}/ofertas` | `Maker` compatible con membresía vigente | `201`, `403`, `409` | Exige `MakerMembershipGuard` activo según reloj del servidor (`CU-02`, `RF-04.1`). |
| **Publicar nueva versión de oferta** | `POST /api/v1/ofertas/{id}/versiones` | `Maker` autor de la oferta | `201`, `403`, `409` | Conserva versiones previas y actualiza precio, plazo y validez (`RF-04.2`). |
| **Comparar ofertas de una solicitud** | `GET /api/v1/solicitudes/{id}/ofertas` | `Cliente` propietario | `200`, `403` | Lista ofertas con distancia aproximada, plazo, importe y fecha de expiración (`RF-04.3`). |
| **Aceptar oferta y confirmar pedido** | `POST /api/v1/ofertas/{id}/aceptar` | `Cliente` propietario (`Idempotency-Key`) | `201`, `409`, `422` | Transacción atómica: verifica `expected_version`, crea un único `Pedido` y cierra ofertas competidoras (`CU-03`, `RF-04.4`). |
| **Consultar detalle del pedido** | `GET /api/v1/pedidos/{id}` | `Cliente` o `Maker` del pedido / `Admin` | `200`, `403`, `404` | **No exige membresía vigente** para pedidos ya confirmados (`RF-12.10`). |
| **Actualizar avance de producción** | `PATCH /api/v1/pedidos/{id}/avance` | `Maker` del pedido | `200`, `403`, `409` | Registra hito en `production_updates` y audita transición (`CU-04`, `RF-06.5`). |
| **Presentar evidencia de pieza terminada** | `POST /api/v1/pedidos/{id}/evidencias` | `Maker` del pedido | `201`, `403`, `409` | Vincula fotos/videos privados al ciclo de revisión y pasa el pedido a `EN_REVISION` (`CU-04`, `RF-06.1`, `RF-06.2`). |
| **Revisar resultado (Aprobar u Observar)** | `POST /api/v1/pedidos/{id}/revisiones/{revId}/decision` | `Cliente` del pedido | `200`, `403`, `409` | Decisión expresa vinculada a `revId` (`APPROVE` o `OBSERVE` con motivo). El silencio nunca aprueba (`CU-05`, `RF-06.3`, `RF-06.4`). |
| **Coordinar entrega personal** | `POST /api/v1/pedidos/{id}/entrega` | `Cliente` o `Maker` del pedido | `200`, `403`, `409` | Bloqueado con `409 Conflict` si no existe revisión en estado `APROBADA` (`CU-06`, `RF-06.6`). |
| **Confirmar recepción y cerrar entrega** | `POST /api/v1/entregas/{id}/completar` | `Cliente` del pedido | `200`, `403`, `409` | Marca la entrega `COMPLETADA` y el pedido `ENTREGADO` (`CU-06`, `RF-06.7`). |
| **Enviar mensaje en el pedido** | `POST /api/v1/conversaciones/{id}/mensajes` | `Cliente` o `Maker` del pedido | `201`, `403`, `422` | Persiste mensaje y adjuntos privados autorizados (`CU-EXT-02`, `RF-05.1`, `RF-05.2`). |

---

## 2. Endpoints REST de Membresías, Makers Fundadores y Administración (`ADR-002`)

| Operación | Método y Ruta | Actor / Permiso | Códigos HTTP | Regla de negocio / Condición |
| --- | --- | --- | --- | --- |
| **Consultar plan de membresía vigente** | `GET /api/v1/planes/membresia` | Público / `Maker` | `200` | Devuelve importe mensual, moneda, duración (`30d`), condiciones de prueba y cupo fundador (`RF-12.1`, `RF-12.15`). |
| **Habilitar perfil maker e iniciar prueba** | `POST /api/v1/makers/me/habilitar` | `Maker` | `200`, `422` | En la 1ra habilitación activa la prueba única (`30 días` generales o `90 días` si es Fundador) sin pedir tarjeta (`CU-09`, `RF-12.2`). |
| **Consultar estado de membresía propia** | `GET /api/v1/makers/me/membresia` | `Maker` | `200` | Devuelve estado (`TRIAL`, `ACTIVE`, `EXPIRING_SOON`, `EXPIRED`), fecha de vencimiento y beneficio aplicado (`CU-08`, `RF-12.4`). |
| **Crear orden de compra de abono** | `POST /api/v1/makers/me/membresia/compras` | `Maker` (`Idempotency-Key`) | `201`, `409` | Congela versión del plan, importe y moneda en `membership_checkout_orders` (`CU-11`, `RF-12.5`). |
| **Iniciar preferencia Checkout Pro** | `POST /api/v1/compras-membresia/{id}/checkout` | `Maker` propietario | `200`, `403`, `502` | Crea preferencia en Mercado Pago con cuenta receptora propia de 3DAltoque y devuelve `checkout_url` (`CU-11`, `RF-12.5`). |
| **Recibir notificación de Mercado Pago** | `POST /api/v1/webhooks/mercadopago` | Mercado Pago (`x-signature` HMAC) | `200`, `401` | Verifica firma, persiste evento idempotente, consulta pago en API del proveedor y concede a lo sumo 1 período (`CU-INC-03`, `RF-12.6`, `RF-12.8`). |
| **Configurar plan y promociones** | `PATCH /api/v1/admin/configuracion/membresia` | `Administrador` | `200`, `403`, `422` | Publica nueva `PlanVersion` auditada sin afectar períodos ya pagados (`CU-12`, `RF-12.1`, `RF-12.13`). |
| **Asignar beneficio Maker Fundador** | `POST /api/v1/admin/makers/{id}/fundador` | `Administrador` | `200`, `403`, `409` | Consume cupo atómicamente, aplica `90 días` totales no acumulables y registra auditoría (`CU-10`, `RF-12.3`, `RF-12.13`). |
| **Conciliar compra o autorizar devolución** | `POST /api/v1/admin/compras-membresia/{id}/conciliar` | `Administrador` | `200`, `403`, `409` | Consulta estado real en el proveedor y audita la resolución (`CU-12`, `RF-12.7`, `RF-12.12`). |

---

## 3. Ejemplos de Payloads JSON y Manejo Estándar de Errores

### 3.1 Ejemplo de solicitud y respuesta: Aceptación atómica de oferta (`POST /api/v1/ofertas/{id}/aceptar`)

**Request (`Headers` + `Body`):**
```http
POST /api/v1/ofertas/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d/aceptar HTTP/1.1
Authorization: Bearer <jwt_token>
Idempotency-Key: accept-req101-of01-v2
Content-Type: application/json

{
  "expected_version": 2,
  "confirm_external_payment_terms": true
}
```

**Response (`201 Created`):**
```json
{
  "order_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "request_id": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
  "accepted_offer_id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  "accepted_offer_version": 2,
  "status": "CONFIRMADO",
  "snapshot": {
    "agreed_price": "17000.00",
    "currency": "ARS",
    "delivery_days": 2,
    "material": "PETG Negro",
    "payment_modality": "DIRECT_CLIENT_TO_MAKER"
  },
  "closed_competing_offers_count": 1,
  "confirmed_at": "2026-10-25T21:15:00Z"
}
```

### 3.2 Estructura uniforme de errores (`RFC 9457 / Problem Details`)

Todas las respuestas de error (`4xx` y `5xx`) siguen un contrato JSON consistente para Web y Mobile:

```json
{
  "type": "https://chill0101.github.io/3daltoque-docs/errores/offer-version-mismatch",
  "title": "La versión de la oferta fue actualizada",
  "status": 409,
  "code": "OFFER_VERSION_MISMATCH",
  "detail": "La oferta seleccionada tiene una nueva versión vigente (v2). Revisá las condiciones actualizadas antes de confirmar.",
  "correlation_id": "req-88412a9c-0012"
}
```

### 3.3 Catálogo de códigos de error de dominio (`403` / `409` / `422`)

| Código de error (`code`) | HTTP | Significado y acción en cliente Web / Mobile |
| --- | --- | --- |
| `OFFER_EXPIRED` | `409` | La oferta superó su fecha de validez (`valida_hasta`). Refrescar listado de ofertas. |
| `OFFER_VERSION_MISMATCH` | `409` | El maker actualizó la oferta mientras el cliente la veía. Mostrar la nueva versión antes de aceptar. |
| `REQUEST_ALREADY_CONFIRMED` | `409` | La solicitud ya tiene un pedido confirmado (prevención de doble aceptación concurrente). |
| `EVIDENCE_APPROVAL_REQUIRED` | `409` | Intento de coordinar o cerrar entrega sin una revisión con estado `APROBADA`. |
| `MEMBERSHIP_EXPIRED` | `403` | Maker intenta ofertar en un trabajo nuevo con membresía vencida. Redirigir a renovación de abono (`CU-11`). |
| `FOUNDER_QUOTA_EXHAUSTED` | `409` | El cupo configurado para el programa `Makers Fundadores` ya fue alcanzado. |
| `SIMULATION_NOT_ALLOWED` | `403` | Intento de invocar el adaptador de cobro simulado fuera del entorno de demostración. |

---

## 4. Catálogo de Eventos Internos de Dominio (Patrón Outbox)

Cada evento se persiste en la tabla `outbox_events` dentro de la misma transacción SQL que modifica el agregado de dominio, garantizando entrega *at-least-once* hacia el módulo de notificaciones y auditoría:

| Evento de Dominio | Agregado Emisor | Consumidores Internos | Efecto Operativo |
| --- | --- | --- | --- |
| `PerfilMakerHabilitado` | `Maker` / `MembresiaMaker` | `ModuloMembresias`, `AuditService` | Inicia por única vez el período gratuito (`30d` general o `90d` fundador). |
| `FundadorAsignado` | `MembresiaMaker` | `ModuloNotificaciones`, `AuditService` | Registra consumo de cupo, aplica beneficio de `90 días` totales y notifica al maker. |
| `CompraMembresiaCreada` | `CompraMembresia` | `AuditService` | Deja trazabilidad del intento de compra con importe y versión del plan congelados. |
| `PagoAbonoVerificado` | `PagoAbono` | `ModuloMembresias`, `ModuloNotificaciones` | Concede de forma idempotente un único `PeriodoAcceso` y envía comprobante in-app/email. |
| `AccesoMakerVencido` | `Scheduler` / `MembresiaMaker` | `ModuloNotificaciones` | Emite aviso de vencimiento; la guarda real actúa siempre por reloj del servidor. |
| `SolicitudPublicada` | `Solicitud` | `ModuloMatching`, `ModuloNotificaciones` | Ejecuta el filtrado geoespacial/técnico y notifica a los makers compatibles con membresía activa. |
| `OfertaVersionPublicada` | `Oferta` | `ModuloNotificaciones` | Avisa al cliente que recibió una nueva oferta o una actualización de condiciones. |
| `PedidoConfirmado` | `Pedido` | `ModuloNotificaciones`, `ModuloComunicacion` | Habilita el hilo de conversación del pedido y avisa al maker ganador y a los no seleccionados. |
| `EvidenciaPresentada` | `RevisionResultado` | `ModuloNotificaciones`, `Scheduler` | Notifica al cliente para que revise la pieza y programa recordatorio en caso de silencio (`RF-07.4`). |
| `RevisionRegistrada` | `RevisionResultado` | `ModuloPedidos`, `ModuloNotificaciones` | Si es `APROBADA`, habilita la entrega personal (`CU-06`); si es `OBSERVADA`, reabre el ajuste (`CU-04`). |
| `EntregaConfirmada` | `Entrega` | `ModuloPedidos`, `AuditService` | Marca el pedido como `ENTREGADO` y cierra el ciclo operativo. |
