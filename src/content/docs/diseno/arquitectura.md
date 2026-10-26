---
title: "Arquitectura y diseño de componentes"
description: "Entregable #11 Diseño de la Arquitectura y Entregable #13 Diseño de Componentes lógicos, puertos y adaptadores."
---

# Arquitectura y diseño de componentes

Versión 2.0-borrador. Fecha: 25 de octubre de 2026.

Este documento desarrolla el **Entregable #11 (Diseño de la Arquitectura)** y el **Entregable #13 (Diseño de Componentes)** de la planificación académica de **3DAltoque**.

---

## 1. Enfoque arquitectónico adoptado (Entregable #11)

**3DAltoque** adopta una arquitectura de **monolito modular en Python + FastAPI** estructurada bajo el patrón de **Puertos y Adaptadores (Arquitectura Hexagonal)**, con persistencia relacional y geoespacial en **PostgreSQL + PostGIS** y una única **API REST común (`/api/v1`)** consumida por los clientes **Web (React / Next.js)** y **Mobile (React Native / Expo)**.

El módulo comercial cobra exclusivamente el servicio de **membresía mensual prepaga del maker** mediante **Mercado Pago Checkout Pro** (con renovación manual) y concede períodos temporales de acceso, conforme a la decisión [ADR-002 (Modelo comercial de membresías)](/3daltoque-docs/proyecto/modelo-comercial/) y los requisitos [RF-12.1 a RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1).

### 1.1 Fundamento de las decisiones arquitectónicas

- **Transaccionalidad ACID sin sobrecarga distribuida:** El monolito modular mantiene dentro del mismo motor transaccional las operaciones que exigen atomicidad estricta: aceptación de una oferta vigente, creación del único pedido y cierre automático de las ofertas alternativas ([RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05)).
- **Desacoplamiento de integraciones externas mediante Puertos:** Los puertos aíslan las reglas del dominio de los proveedores externos de cobro (`INT-01`), geocodificación y mapas (`INT-02`), almacenamiento privado de archivos (`INT-03`), notificaciones (`INT-04`) y simulador académico (`INT-06`), especificados en el [Plan de integraciones](/3daltoque-docs/diseno/integraciones/).
- **Paridad y seguridad por canal (`API-First`):** Web y Mobile consumen el mismo contrato [API y eventos](/3daltoque-docs/diseno/api-eventos/) ([RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1), [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14)), delegando al backend toda validación de permisos por recurso, vigencia de membresía y ocultamiento de ubicaciones exactas.
- **Separación de dominios entre Pedido y Membresía:** El ciclo de vida de un pedido ya confirmado está desacoplado de la vigencia futura de la membresía del maker, garantizando que el vencimiento del abono impida tomar trabajos nuevos pero **nunca** bloquee la producción, revisión o entrega de pedidos activos ([RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10)).

---

<a id="componentes"></a>
## 2. Diseño de Componentes (Entregable #13)

![Componentes lógicos](/3daltoque-docs/documentos/44ac08b2bfc6-componentes.svg)

[Abrir SVG](/3daltoque-docs/documentos/44ac08b2bfc6-componentes.svg) · [Fuente editable](/3daltoque-docs/documentos/410048d78c61-componentes.mmd)

El sistema se descompone en **12 componentes lógicos** (2 canales de presentación, 9 módulos de negocio dentro del backend FastAPI y 1 componente de ejecución asíncrona / worker de tareas y outbox):

### 2.1 Catálogo de componentes, responsabilidades e interfaces

| ID Comp. | Componente Lógico | Responsabilidad Principal | Interfaces Provistas (Expuestas) | Interfaces Requeridas (Consumidas) | Tablas Propietarias Principales |
| --- | --- | --- | --- | --- | --- |
| `CMP-01` | **Cliente Web (`Next.js`)** | Interfaz para Clientes, Makers y Administradores (`WEB-01` a `WEB-32`). | Rutas de navegación web, formularios accesibles y paneles de administración. | API REST `/api/v1/*`, URLs pre-firmadas de Object Storage y redirección a Checkout Pro. | — (Estado en servidor + sesión HTTP) |
| `CMP-02` | **Cliente Mobile (`React Native / Expo`)** | Experiencia móvil para Clientes y Makers (`MOB-01` a `MOB-30`) con foco en seguimiento, cámara de evidencia y entrega. | Pantallas nativas, captura de fotos de evidencia y notificaciones push/in-app. | API REST `/api/v1/*`, URLs pre-firmadas de Object Storage. | — (Almacenamiento seguro de sesión) |
| `CMP-03` | **Módulo de Identidad y Perfiles (`identity`)** | Registro, autenticación JWT, gestión de roles coexistentes (`Cliente`, `Maker`, `Admin`), capacidades técnicas y zonas de referencia. | `AuthAPI` (`/auth/*`), `ProfileAPI` (`/profiles/*`), `IdentityGuard` (validación de sesión y rol). | `PasswordHasherPort`, `GeolocationPort` (`INT-02`), `MembresiaInternalFacade` (para 1ra habilitación). | `users`, `roles`, `user_roles`, `client_profiles`, `maker_profiles`, `maker_printers`, `maker_capabilities`, `terms_acceptances` |
| `CMP-04` | **Módulo de Archivos Privados (`files`)** | Autorización de subida/descarga mediante URLs firmadas temporales, validación de formato/tamaño (`.STL`, `.OBJ`, `.3MF`, imágenes/video) y política de retención/retiro. | `FileAPI` (`/files/upload-intent`, `/files/{id}/download-url`), `FileAccessInternalService`. | `PrivateStoragePort` (`INT-03` S3/MinIO), `ResourcePermissionGuard`. | `private_files`, `file_access_grants`, `file_validation_logs`, `file_retention_events` |
| `CMP-05` | **Módulo de Solicitudes y Matching (`requests_matching`)** | Publicación de solicitudes de impresión, cálculo de estimación orientativa no vinculante y búsqueda geoespacial/técnica de makers compatibles con membresía activa. | `SolicitudAPI` (`/solicitudes/*`), `MatchingEngineService`. | `FileAccessInternalService`, `GeolocationPort` (`PostGIS` + `INT-02`), `MakerMembershipGuard`, `OutboxPublisher`. | `print_requests`, `request_versions`, `request_items`, `request_estimates`, `request_matches`, `quote_invitations` |
| `CMP-06` | **Módulo de Ofertas y Cotizaciones (`quotes`)** | Emisión, actualización versionada, expiración, comparación y aceptación atómica de una única oferta ganadora. | `OfertaAPI` (`/solicitudes/{id}/ofertas`, `/ofertas/{id}/aceptar`). | `MakerMembershipGuard`, `PedidoInternalFacade`, `UnitOfWorkPort`, `OutboxPublisher`. | `offers`, `offer_versions`, `offer_status_history` |
| `CMP-07` | **Módulo de Pedidos y Revisión (`orders_reviews`)** | Ciclo de vida del pedido confirmado, hitos de producción, carga de evidencia de pieza terminada y decisión expresa del cliente (`Aprobar` u `Observar`). | `PedidoAPI` (`/pedidos/{id}`, `/pedidos/{id}/evidencias`, `/pedidos/{id}/revisiones`), `PedidoInternalFacade`. | `FileAccessInternalService`, `OutboxPublisher`, `AuditLogPort`. | `orders`, `order_snapshots`, `order_status_history`, `production_updates`, `evidence_reviews`, `delivery_evidences`, `review_decisions` |
| `CMP-08` | **Módulo de Entregas (`deliveries`)** | Coordinación del encuentro personal en punto neutral una vez aprobada la evidencia y registro de recepción final. | `EntregaAPI` (`/pedidos/{id}/entrega`, `/entregas/{id}/completar`). | `PedidoInternalFacade` (verifica evidencia `APROBADA`), `GeolocationPort`, `OutboxPublisher`. | `deliveries`, `meeting_proposals`, `delivery_confirmations` |
| `CMP-09` | **Módulo de Conversaciones (`conversations`)** | Mensajería contextual dentro del pedido con adjuntos autorizados y control de acceso exclusivo para las partes. | `ConversacionAPI` (`/conversaciones/{id}/mensajes`). | `FileAccessInternalService`, `OutboxPublisher`. | `order_threads`, `thread_messages`, `message_attachments` |
| `CMP-10` | **Módulo de Membresías y Cobros (`memberships`)** | Configuración del plan único, inicio de prueba gratuita (`30d`) o beneficio `Makers Fundadores` (`90d` totales), compra manual por Checkout Pro, verificación idempotente de webhooks y guarda de vigencia. | `MembresiaAPI` (`/planes/membresia`, `/makers/me/membresia/*`), `WebhookAPI` (`/webhooks/mercadopago`), `MakerMembershipGuard`. | `PaymentGatewayPort` (`INT-01` Checkout Pro / `INT-06` Simulador), `ServerClockPort`, `AuditLogPort`, `OutboxPublisher`. | `membership_plans`, `membership_plan_versions`, `maker_memberships`, `founder_benefits`, `membership_checkout_orders`, `membership_periods`, `membership_payments`, `payment_webhook_events` |
| `CMP-11` | **Módulo de Notificaciones y Worker Outbox (`notifications_worker`)** | Consumo de eventos de dominio desde tabla `outbox_events`, despacho de notificaciones in-app/externas y ejecución de recordatorios programados (revisiones pendientes y vencimientos de membresía). | `NotificacionAPI` (`/notificaciones/*`), `SchedulerWorker`. | `NotificationChannelPort` (`INT-04`), `OutboxRepository`. | `outbox_events`, `notifications`, `notification_deliveries`, `notification_preferences`, `scheduled_reminders` |
| `CMP-12` | **Módulo de Administración y Auditoría (`admin_audit`)** | Moderación de incidentes, gestión de parámetros del plan, asignación auditada del cupo de fundadores, conciliación de pagos de abono y consulta de bitácora inmutable. | `AdminAPI` (`/admin/*`), `AuditLogPort`. | Interfaces administrativas de `CMP-04`, `CMP-07`, `CMP-10`. | `support_tickets`, `moderation_actions`, `audit_logs` |

---

## 3. Núcleo, Puertos y Adaptadores

El dominio expresa las reglas puras de ofertas, revisión expresa y acceso comercial. La capa de aplicación coordina casos de uso, permisos y límites transaccionales. FastAPI, SQLAlchemy/PostgreSQL y los clientes HTTP de proveedores externos residen en la capa de adaptadores.

![Puertos y adaptadores](/3daltoque-docs/documentos/a44c2fd72ab2-diseno-hexagonal.svg)

[Abrir SVG](/3daltoque-docs/documentos/a44c2fd72ab2-diseno-hexagonal.svg) · [Fuente editable](/3daltoque-docs/documentos/1061d2163efb-diseno-hexagonal.mmd)

### 3.1 Contratos de los Puertos de Salida (`Outbound Ports`)

| Puerto (`Interface`) | Adaptador Productivo / Piloto | Adaptador Local / Contingencia | Requisitos y RNF asociados |
| --- | --- | --- | --- |
| `PaymentGatewayPort` | `MercadoPagoCheckoutProAdapter` (`INT-01`) — cuenta receptora propia de 3DAltoque | `SimulatedPaymentAdapter` (`INT-06`) — etiquetado como `DEMO`, bloqueado en producción | `RF-12.5..12.8`, `RF-12.14`, `RNF-09`, `RNF-10` |
| `GeolocationPort` | `PostGisGeolocationAdapter` + proveedor de geocodificación (`INT-02`) | Selección manual de barrio/zona catalogada + cálculo sobre centroides locales | `RF-09.1`, `RF-09.2`, `RNF-02`, `RNF-15` |
| `PrivateStoragePort` | `S3CompatibleStorageAdapter` (`INT-03`) con buckets privados y URLs pre-firmadas de corta vida | `MinIOStorageAdapter` en contenedor local con idéntica firma S3 | `RF-10.1..10.4`, `RNF-04`, `RNF-16` |
| `NotificationChannelPort` | `EmailAndPushNotificationAdapter` (`INT-04`) + persistencia in-app | Bandeja in-app persistida en PostgreSQL + consola de correo local (`Mailpit`) | `RF-07.1`, `RF-07.3`, `RF-07.4`, `RNF-15` |
| `ServerClockPort` | `UtcSystemClockAdapter` (autoridad única para expiración de ofertas y membresías) | `FrozenTestClockAdapter` para pruebas deterministas de vencimiento y silencio | `RF-04.2`, `RF-06.4`, `RF-12.4`, `RF-12.10` |

---

## 4. Límites de consistencia e invariantes transaccionales

- **Aceptación atómica de oferta (`CU-03`):** Aceptación de la versión vigente, cierre de ofertas competidoras y creación del único pedido se ejecutan en una única transacción con bloqueo de fila sobre la solicitud.
- **Cupo de Makers Fundadores (`CU-10`):** Una asignación concurrente nunca supera el cupo máximo configurado gracias al control transaccional sobre `founder_benefits`.
- **Beneficio inicial único (`CU-09`, `CU-10`):** La prueba general (`30 días`) y el beneficio fundador (`90 días` totales) no se acumulan entre sí ni se reinician al editar el perfil del maker.
- **Idempotencia de cobro y concesión (`CU-11`):** Una misma `CompraMembresia` concede como máximo un `PeriodoAcceso`; recibir repetidamente el mismo webhook de Mercado Pago no duplica meses ni pagos.
- **Autoridad del reloj del servidor (`CU-02`, `CU-08`):** La guarda de acceso (`MakerMembershipGuard`) evalúa `vigente_hasta` contra el reloj del servidor en cada intento de ofertar o recibir solicitudes nuevas; una demora del worker de recordatorios jamás extiende la vigencia de hecho.
- **Continuidad de pedidos activos (`RF-12.10`):** Vencer la membresía bloquea nuevas solicitudes y ofertas, pero preserva intactas todas las operaciones sobre pedidos ya confirmados hasta su entrega final.

---

## 5. Vistas relacionadas

- [Requisitos funcionales y no funcionales](/3daltoque-docs/analisis/requisitos/)
- [Documento de trazabilidad y justificación de RNF](/3daltoque-docs/specs/02-matriz-de-cobertura/)
- [Clases de dominio y de diseño](/3daltoque-docs/modelado/clases-y-arquitectura/)
- [Arquitectura de implementación](/3daltoque-docs/diseno/implementacion/)
- [Modelo comercial, prueba y fundadores](/3daltoque-docs/proyecto/modelo-comercial/)
- [Modelo lógico (50 tablas)](/3daltoque-docs/modelado/modelo-logico/)
- [Contratos de API y eventos](/3daltoque-docs/diseno/api-eventos/)
- [Plan de integraciones entre sistemas](/3daltoque-docs/diseno/integraciones/)
- [Convenciones y contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/)
