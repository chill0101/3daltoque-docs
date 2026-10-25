---
title: "Definición de casos de prueba"
description: "Plan de pruebas, catálogo general y fichas detalladas de casos de prueba funcionales, de integración, concurrencia, seguridad y no funcionales."
---

Versión: 2.0-borrador. Fecha: 25 de octubre de 2026.

Este documento constituye el entregable **9) Definición de los casos de Prueba** de la planificación académica de **3DAltoque**. Reúne la estrategia de verificación del sistema, el catálogo general y las **fichas detalladas de casos de prueba (`CP-001` a `CP-028` y `PNF-001` a `PNF-008`)** estructuradas según la plantilla de la cátedra (`Ejemplo de Casos de prueba.xlsx`).

> **Criterio de estado:** Todos los casos de prueba se encuentran en estado **`Diseñado`** (especificados sobre los contratos, reglas de negocio y prototipos vigentes). Ningún caso se marca como `Ejecutado` o `Aprobado` hasta contar con el registro de ejecución sobre el build desplegado en el entorno de pruebas.

---

## 1. Estrategia y niveles de prueba

La verificación de **3DAltoque** se organiza en cinco niveles complementarios sobre la arquitectura modular en **FastAPI + PostgreSQL/PostGIS** y los clientes **Web (React/Next.js)** y **Mobile (React Native/Expo)**:

| Nivel de prueba | Alcance principal | Herramientas previstas | Requisitos cubiertos |
| --- | --- | --- | --- |
| **1. Pruebas unitarias de dominio** | Invariantes de negocio puras: transiciones válidas de `Solicitud`, `Oferta`, `Pedido`, `EvidenciaEntrega`, `Entrega` y `MembresiaMaker`; cálculo de vigencia (`30` días generales vs `90` días fundadores no acumulables) y estimación orientativa. | `pytest` | `RF-02.2`, `RF-02.5`, `RF-04.2`, `RF-06.3`, `RF-06.4`, `RF-12.2`, `RF-12.3`, `RF-12.10` |
| **2. Pruebas de integración (API, BD y adaptadores)** | Contratos HTTP REST (`/api/v1/...`), persistencia transaccional en PostgreSQL/PostGIS, URLs firmadas de Object Storage (`INT-03`), geocodificación (`INT-02`) y notificaciones de pago de Mercado Pago Checkout Pro (`INT-01`) en sandbox o adaptador simulado (`PAYMENT_MODE=simulated`). | `pytest` + `httpx.AsyncClient` + base PostgreSQL de test | `RF-01.1` a `RF-12.15`, `RNF-09`, `RNF-10`, `RNF-14`, `RNF-15` |
| **3. Pruebas de concurrencia e idempotencia** | Aceptación simultánea de ofertas sobre una misma solicitud (`SELECT ... FOR UPDATE` / restricción única de pedido activo por solicitud) y recepción repetida del mismo webhook de pago de abono (`idempotency_key` / `provider_event_id`). | `pytest-asyncio` (corrutinas paralelas) | `RF-04.4`, `RF-12.6`, `RF-12.7`, `RNF-05`, `RNF-09` |
| **4. Pruebas de seguridad y control de acceso** | Autorización por rol (`Cliente`, `Maker`, `Administrador`) y pertenencia al recurso (archivos 3D privados, fotos de evidencia, mensajes del pedido, ocultamiento de dirección exacta del maker y validación de firma HMAC en webhooks). | `pytest` + suite de casos negativos de API | `RF-09.2`, `RF-10.1`, `RF-10.3`, `RNF-04`, `RNF-06`, `RNF-16` |
| **5. Pruebas de extremo a extremo (E2E) y no funcionales** | Recorridos completos en interfaz Web (`WEB-01..32`) y Mobile (`MOB-01..30`), más ensayos de rendimiento y disponibilidad bajo el perfil [PERF-01](/3daltoque-docs/analisis/requisitos/#perfil-de-medicion). | Playwright (Web), Maestro/Detox (Mobile), k6 / Locust (`PERF-01`) | `RNF-01`, `RNF-02`, `RNF-03`, `RNF-07`, `RNF-08`, `RNF-17`, `RNF-19` |

---

## 2. Resumen del catálogo de casos de prueba

### 2.1 Casos de prueba funcionales, de integración, concurrencia y seguridad (`CP-001` a `CP-028`)

| ID | Nombre del caso de prueba | Caso de Uso | Requisitos principales | Pantallas | Tipo | Prioridad | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [CP-001](#cp-001) | Registro exitoso de nuevo usuario y asignación de rol inicial | `CU-13` | `RF-01.1`, `RF-01.3` | `WEB-02`, `MOB-02` | Funcional | Alta | Diseñado |
| [CP-002](#cp-002) | Inicio de sesión con credenciales inválidas y control de bloqueo | `CU-13` | `RF-01.4`, `RNF-04`, `RNF-16` | `WEB-02`, `MOB-02` | Seguridad | Alta | Diseñado |
| [CP-003](#cp-003) | Publicación de solicitud válida con archivo STL y ubicación aproximada | `CU-01`, `CU-INC-01`, `CU-INC-02` | `RF-02.1`, `RF-02.3`, `RF-09.1`, `RF-10.1`, `RF-10.2` | `WEB-03`, `MOB-03` | Funcional / Integración | Alta | Diseñado |
| [CP-004](#cp-004) | Rechazo de publicación de solicitud con campos obligatorios faltantes | `CU-01` | `RF-02.3`, `RNF-08` | `WEB-03`, `MOB-03` | Funcional | Media | Diseñado |
| [CP-005](#cp-005) | Rechazo de carga de archivo por formato no permitido o exceso de tamaño | `CU-01`, `CU-INC-01` | `RF-02.2`, `RF-10.1`, `RNF-16` | `WEB-03`, `MOB-03` | Seguridad / Funcional | Alta | Diseñado |
| [CP-006](#cp-006) | Cálculo de estimación orientativa marcada como no vinculante | `CU-01`, `CU-EXT-01` | `RF-02.5` | `WEB-03`, `MOB-03` | Funcional | Media | Diseñado |
| [CP-007](#cp-007) | Matching de solicitud hacia makers compatibles con membresía vigente | `CU-01`, `CU-INC-02`, `CU-02` | `RF-03.1`, `RF-03.2`, `RF-09.2`, `RF-12.10` | `WEB-04`, `WEB-12`, `MOB-11` | Integración | Alta | Diseñado |
| [CP-008](#cp-008) | Emisión y actualización de oferta de precio y plazo por maker elegible | `CU-02` | `RF-04.1`, `RF-04.2`, `RF-04.5` | `WEB-13`, `MOB-12` | Funcional | Alta | Diseñado |
| [CP-009](#cp-009) | Bloqueo de emisión de oferta para maker no compatible o con membresía vencida | `CU-02`, `CU-08` | `RF-04.1`, `RF-12.4`, `RF-12.10` | `WEB-12`, `WEB-18`, `MOB-11` | Seguridad / Regla de negocio | Alta | Diseñado |
| [CP-010](#cp-010) | Aceptación de oferta vigente, creación de pedido único y cierre de competidoras | `CU-03` | `RF-04.3`, `RF-04.4`, `RF-05.3` | `WEB-05`, `WEB-06`, `MOB-05` | Integración | Alta | Diseñado |
| [CP-011](#cp-011) | Rechazo al intentar aceptar una oferta vencida o cuya versión fue modificada | `CU-03` | `RF-04.2`, `RF-04.4` | `WEB-05`, `MOB-05` | Funcional | Alta | Diseñado |
| [CP-012](#cp-012) | Control de concurrencia ante dos intentos simultáneos de aceptación sobre la misma solicitud | `CU-03` | `RF-04.4`, `RNF-05` | `WEB-06`, `MOB-05` | Concurrencia | Alta | Diseñado |
| [CP-013](#cp-013) | Avance de producción, carga de evidencia privada y paso a `EN_REVISION` | `CU-04`, `CU-INC-01` | `RF-06.1`, `RF-06.2`, `RF-06.5`, `RF-10.2` | `WEB-15`, `MOB-14` | Funcional / Integración | Alta | Diseñado |
| [CP-014](#cp-014) | Conversación contextual del pedido y bloqueo de acceso a terceros no participantes | `CU-EXT-02` | `RF-05.1`, `RF-05.2`, `RF-10.3`, `RNF-04` | `WEB-09`, `MOB-08` | Seguridad / Funcional | Alta | Diseñado |
| [CP-015](#cp-015) | Aprobación expresa de la evidencia por el cliente y habilitación de entrega | `CU-05` | `RF-06.3`, `RF-05.3` | `WEB-08`, `MOB-07` | Funcional | Alta | Diseñado |
| [CP-016](#cp-016) | Bloqueo de coordinación de entrega cuando la evidencia aún no fue aprobada | `CU-05`, `CU-06` | `RF-06.3`, `RF-06.6`, `RNF-05` | `WEB-08`, `WEB-10`, `MOB-09` | Seguridad / Regla de negocio | Alta | Diseñado |
| [CP-017](#cp-017) | Registro de observaciones sobre la evidencia y reapertura de ajuste | `CU-05`, `CU-EXT-03` | `RF-06.3`, `RF-05.3` | `WEB-08`, `MOB-07` | Funcional | Alta | Diseñado |
| [CP-018](#cp-018) | Silencio del cliente ante revisión pendiente: envío de recordatorio sin aprobación automática | `CU-05` | `RF-06.4`, `RF-07.4` | `WEB-08`, `MOB-07` | Funcional | Alta | Diseñado |
| [CP-019](#cp-019) | Coordinación de entrega personal en punto de encuentro y confirmación de recepción | `CU-06` | `RF-06.6`, `RF-06.7`, `RF-09.2` | `WEB-10`, `WEB-16`, `MOB-09`, `MOB-15` | Funcional | Alta | Diseñado |
| [CP-020](#cp-020) | Preservación de privacidad del domicilio exacto del maker en mapas y entregas | `CU-01`, `CU-06`, `CU-09` | `RF-09.1`, `RF-09.2`, `RNF-04` | `WEB-04`, `WEB-10`, `MOB-04` | Seguridad / Privacidad | Alta | Diseñado |
| [CP-021](#cp-021) | Primera habilitación del perfil maker e inicio de prueba gratuita general (`30 días`) | `CU-09`, `CU-08` | `RF-01.2`, `RF-12.2`, `RF-12.4` | `WEB-17`, `WEB-18`, `MOB-16`, `MOB-17` | Funcional | Alta | Diseñado |
| [CP-022](#cp-022) | Asignación administrativa del beneficio `Makers Fundadores` (`90 días` totales no acumulables) | `CU-10`, `CU-09` | `RF-12.3`, `RF-12.13`, `RF-12.15` | `WEB-23`, `WEB-18` | Funcional / Regla de negocio | Alta | Diseñado |
| [CP-023](#cp-023) | Pago manual de abono mensual por Checkout Pro y activación tras verificación servidor a servidor | `CU-11`, `CU-INC-03` | `RF-12.5`, `RF-12.6`, `RF-12.7`, `RF-12.8`, `RF-12.9` | `WEB-19`, `WEB-20`, `MOB-18`, `MOB-19` | Integración | Alta | Diseñado |
| [CP-024](#cp-024) | Idempotencia ante webhook de pago de abono duplicado y rechazo de webhook sin firma válida | `CU-11`, `CU-INC-03` | `RF-12.6`, `RF-12.7`, `RNF-09` | `WEB-20`, `WEB-24` | Concurrencia / Seguridad | Alta | Diseñado |
| [CP-025](#cp-025) | Continuidad operativa de pedidos activos cuando vence la membresía del maker | `CU-08`, `CU-04`, `CU-06` | `RF-12.10` | `WEB-14`, `WEB-18`, `MOB-13`, `MOB-17` | Regla de negocio | Alta | Diseñado |
| [CP-026](#cp-026) | Actualización administrativa del plan de membresía sin afectar períodos ya pagados | `CU-12` | `RF-12.1`, `RF-12.12`, `RF-12.13`, `RNF-13` | `WEB-22`, `WEB-24` | Funcional / Auditoría | Media | Diseñado |
| [CP-027](#cp-027) | Separación estricta entre cobro simulado (`demo`) y cobro real de membresía | `CU-11`, `CU-12` | `RF-12.14`, `RNF-10` | `WEB-19`, `WEB-24` | Seguridad / Integración | Alta | Diseñado |
| [CP-028](#cp-028) | Moderación administrativa de incidente y registro inalterable en bitácora de auditoría | `CU-07` | `RF-07.2`, `RF-05.3`, `RNF-06` | `WEB-21`, `WEB-25` | Funcional / Seguridad | Media | Diseñado |

---

### 2.2 Casos de prueba no funcionales y de arquitectura (`PNF-001` a `PNF-008`)

| ID | Nombre del ensayo | RNF verificados | Meta propuesta (`PERF-01`) | Método de verificación | Estado |
| --- | --- | --- | --- | --- | --- |
| [PNF-001](#pnf-001) | Monitoreo de disponibilidad continua en ventana de evaluación | `RNF-01`, `RNF-07` | `>= 99%` en ventana de 24 h con sondas cada 60 s (`/health/ready`) | Sonda sintética HTTP verificando API + PostgreSQL | Diseñado |
| [PNF-002](#pnf-002) | Rendimiento de búsqueda geoespacial y filtrado de makers compatibles | `RNF-02`, `RNF-03` | `p95 <= 2.0 s` y `< 1%` de errores técnicos con dataset de 200 makers | Ensayo de carga con `k6` sobre `GET /api/v1/requests/{id}/matches` | Diseñado |
| [PNF-003](#pnf-003) | Degradación controlada ante indisponibilidad de proveedores externos | `RNF-15`, `RNF-07` | Falla aislada sin caída del núcleo; reintento o modo manual habilitado | Inyección de timeouts/503 en adaptadores `INT-01..INT-04` | Diseñado |
| [PNF-004](#pnf-004) | Cumplimiento de contrato OpenAPI y paridad funcional Web/Mobile | `RNF-14`, `RNF-17`, `RF-11.1`, `RF-11.2` | `100%` de respuestas conformes al esquema JSON y sincronización de estados | Validación automática de esquemas Pydantic/OpenAPI en CI | Diseñado |
| [PNF-005](#pnf-005) | Protección contra abuso de tasa (*rate limiting*) y payloads fuera de límite | `RNF-16`, `RNF-04` | Respuesta controlada `429 Too Many Requests` / `413 Content Too Large` | Prueba automatizada de ráfagas sobre login, creación y subida | Diseñado |
| [PNF-006](#pnf-006) | Accesibilidad, claridad de estados y advertencias comerciales en UI | `RNF-08`, `RNF-12`, `RF-12.15` | Comprensión sin ambigüedad de estados, carácter orientativo y pago externo del pedido | Evaluación heurística + auditoría Lighthouse / axe-core en vistas críticas | Diseñado |
| [PNF-007](#pnf-007) | Retención, retiro de archivos privados y borrado/anonimización de datos personales | `RNF-11`, `RF-10.4` | Revocación efectiva de acceso a objetos vencidos/retirados y preservación de auditoría mínima | Ejecución del job de retención sobre archivos y cuentas de prueba | Diseñado |
| [PNF-008](#pnf-008) | Reproducción limpia del entorno desde cero y restauración de backup de base de datos | `RNF-18`, `RNF-19` | Levante reproducible con migraciones y restauración íntegra de `pg_dump` en base limpia | Prueba de `docker compose` + Alembic + `pg_restore` con conteo de integridad | Diseñado |

---

## 3. Fichas detalladas de casos de prueba (`CP-001` a `CP-028`)

Cada ficha sigue el modelo de la cátedra (`Ejemplo de Casos de prueba.xlsx`), detallando precondiciones, datos de entrada ficticios, pasos numerados reproducibles y resultados observables.

<a id="cp-001"></a>
### CP-001 — Registro exitoso de nuevo usuario y asignación de rol inicial

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-001` — Registro exitoso de nuevo usuario y asignación de rol inicial |
| **Caso de Uso / Requisitos** | [CU-13](/3daltoque-docs/analisis/casos-de-uso/#cu-13) · [RF-01.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-1), [RF-01.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-3), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12) |
| **Pantallas asociadas** | `WEB-02` (Acceso, registro y elección inicial de rol), `MOB-02` (Acceso y registro) |
| **Tipo y Prioridad** | Funcional · **Alta** |
| **Precondiciones** | 1. El servicio de identidad está disponible.<br>2. El correo `cliente.demo01@test.3daltoque.local` no existe en la tabla `users`. |
| **Datos de prueba** | `nombre`: `"Lucía Gómez"`, `email`: `"cliente.demo01@test.3daltoque.local"`, `password`: `" Demo3D!2026 "`, `rol_inicial`: `"CLIENTE"`, `acepta_terminos`: `true`, `zona_referencia`: `"Caballito, CABA"`. |
| **Pasos de ejecución** | 1. Abrir la vista de registro (`WEB-02` o `MOB-02`).<br>2. Seleccionar el rol inicial `Cliente`.<br>3. Completar nombre, correo electrónico, contraseña y zona aproximada de referencia.<br>4. Marcar la casilla de aceptación de términos, privacidad y alcance del servicio.<br>5. Presionar `"Crear cuenta"`. |
| **Resultado esperado** | 1. El sistema responde `201 Created`, crea el registro en `users` con contraseña hasheada y asigna el rol `CLIENTE` en `user_roles`.<br>2. Se registra la aceptación de términos con fecha/hora y versión.<br>3. El usuario ingresa autenticado a su panel inicial según el rol elegido. |
| **Estado** | `Diseñado` |

---

<a id="cp-002"></a>
### CP-002 — Inicio de sesión con credenciales inválidas y control de bloqueo

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-002` — Inicio de sesión con credenciales inválidas y control de bloqueo |
| **Caso de Uso / Requisitos** | [CU-13](/3daltoque-docs/analisis/casos-de-uso/#cu-13) · [RF-01.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-4), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16) |
| **Pantallas asociadas** | `WEB-02`, `MOB-02` |
| **Tipo y Prioridad** | Seguridad · **Alta** |
| **Precondiciones** | Existe la cuenta activa `cliente.demo01@test.3daltoque.local`. |
| **Datos de prueba** | `email`: `"cliente.demo01@test.3daltoque.local"`, `password_invalida`: `"ClaveIncorrecta99"`. |
| **Pasos de ejecución** | 1. Ingresar el correo válido y la contraseña incorrecta en `WEB-02`.<br>2. Presionar `"Ingresar"`.<br>3. Repetir el intento fallido superando el umbral de intentos por minuto configurado para la ruta de login. |
| **Resultado esperado** | 1. Ante cada intento inválido, el sistema responde `401 Unauthorized` con un mensaje genérico (`"Correo o contraseña inválidos"`) sin revelar si el correo existe.<br>2. No se emite sesión ni token.<br>3. Al superar el umbral de intentos seguidos, responde `429 Too Many Requests` aplicando enfriamiento temporal y registrando el evento de seguridad. |
| **Estado** | `Diseñado` |

---

<a id="cp-003"></a>
### CP-003 — Publicación de solicitud válida con archivo STL y ubicación aproximada

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-003` — Publicación de solicitud válida con archivo STL y ubicación aproximada |
| **Caso de Uso / Requisitos** | [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01), [CU-INC-01](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-01), [CU-INC-02](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-02) · [RF-02.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-1), [RF-02.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-3), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2) |
| **Pantallas asociadas** | `WEB-03` (Nueva solicitud de impresión), `MOB-03` (Crear solicitud) |
| **Tipo y Prioridad** | Funcional / Integración · **Alta** |
| **Precondiciones** | Cliente autenticado con sesión activa; servicio de almacenamiento privado (`INT-03`) disponible. |
| **Datos de prueba** | `titulo`: `"Soporte articulado para sensor ultrasónico"`, `descripcion`: `"Requiero rigidez media para interior, color negro"`, `archivo`: `soporte_sensor_v2.stl` (`4.2 MB`, malla válida), `dimensiones_mm`: `85 x 45 x 30`, `cantidad`: `2`, `material_sugerido`: `"PLA o PETG"`, `ubicacion_referencia`: `"Almagro, CABA (-34.609, -58.421)"`, `plazo_deseado_dias`: `5`. |
| **Pasos de ejecución** | 1. En `WEB-03` / `MOB-03`, adjuntar `soporte_sensor_v2.stl`.<br>2. Completar descripción de uso, cantidad (`2`), dimensiones de referencia y material sugerido.<br>3. Seleccionar y confirmar la zona de referencia `"Almagro, CABA"`.<br>4. Presionar `"Publicar solicitud"`. |
| **Resultado esperado** | 1. El archivo se sube mediante autorización temporal al almacenamiento privado (`private_files`) sin URL pública libre.<br>2. La solicitud se persiste en `print_requests` en estado `PUBLICADA` (o `EN_COTIZACION` tras el matching inicial).<br>3. Se dispara la búsqueda de makers compatibles (`CU-INC-02`) y el cliente visualiza su solicitud activa con el listado de makers compatibles encontrados. |
| **Estado** | `Diseñado` |

---

<a id="cp-004"></a>
### CP-004 — Rechazo de publicación de solicitud con campos obligatorios faltantes

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-004` — Rechazo de publicación de solicitud con campos obligatorios faltantes |
| **Caso de Uso / Requisitos** | [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01) · [RF-02.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-3), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08) |
| **Pantallas asociadas** | `WEB-03`, `MOB-03` |
| **Tipo y Prioridad** | Funcional · **Media** |
| **Precondiciones** | Cliente autenticado en el formulario de nueva solicitud. |
| **Datos de prueba** | `descripcion`: `""` (vacía), `cantidad`: `0`, `ubicacion_referencia`: `null`. |
| **Pasos de ejecución** | 1. Dejar la descripción vacía, cantidad en `0` y sin ubicación confirmada.<br>2. Intentar enviar el formulario (`"Publicar solicitud"`). |
| **Resultado esperado** | 1. El sistema rechaza la operación (`422 Unprocessable Entity` si se invoca por API / validación inline en UI).<br>2. Señala específicamente cada campo obligatorio faltante sin perder los datos ya cargados ni crear registros parciales en `print_requests`. |
| **Estado** | `Diseñado` |

---

<a id="cp-005"></a>
### CP-005 — Rechazo de carga de archivo por formato no permitido o exceso de tamaño

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-005` — Rechazo de carga de archivo por formato no permitido o exceso de tamaño |
| **Caso de Uso / Requisitos** | [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01), [CU-INC-01](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-01) · [RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2), [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16) |
| **Pantallas asociadas** | `WEB-03`, `MOB-03` |
| **Tipo y Prioridad** | Seguridad / Funcional · **Alta** |
| **Precondiciones** | Cliente autenticado en creación de solicitud. |
| **Datos de prueba** | Caso A: `script_malicioso.exe` renombrado a `pieza.stl` (`MIME` ejecutable).<br>Caso B: `escaneo_gigante.stl` de `250 MB` (supera el límite máximo permitido). |
| **Pasos de ejecución** | 1. Intentar solicitar autorización de carga (`POST /api/v1/files/upload-intent`) o adjuntar en UI el archivo del Caso A.<br>2. Repetir con el archivo del Caso B. |
| **Resultado esperado** | 1. Ambos intentos son rechazados antes de habilitar el archivo en el sistema (`400 Bad Request` / `413 Content Too Large`).<br>2. Ningún archivo inválido queda asociado a una solicitud ni accesible por terceros.<br>3. Se informa al usuario la causa exacta (extensión/tipo no admitido o tamaño máximo superado). |
| **Estado** | `Diseñado` |

---

<a id="cp-006"></a>
### CP-006 — Cálculo de estimación orientativa marcada como no vinculante

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-006` — Cálculo de estimación orientativa marcada como no vinculante |
| **Caso de Uso / Requisitos** | [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01), [CU-EXT-01](/3daltoque-docs/analisis/casos-de-uso/#cu-ext-01) · [RF-02.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-5), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08) |
| **Pantallas asociadas** | `WEB-03`, `MOB-03` |
| **Tipo y Prioridad** | Funcional · **Media** |
| **Precondiciones** | Cliente cargó un archivo `.STL` con dimensiones válidas (`85 x 45 x 30 mm`), material `PLA` y cantidad `2`. |
| **Datos de prueba** | `volumen_cm3`: `28.5`, `material`: `"PLA"`, `cantidad`: `2`. |
| **Pasos de ejecución** | 1. Completar los parámetros técnicos suficientes en `WEB-03` / `MOB-03`.<br>2. Consultar el bloque de estimación orientativa generado por el sistema. |
| **Resultado esperado** | 1. El sistema muestra un rango orientativo de referencia junto con los supuestos utilizados.<br>2. Incluye una leyenda visible que advierte expresamente que **no constituye una cotización final vinculante** y que el precio y plazo reales serán propuestos por cada maker en su oferta. |
| **Estado** | `Diseñado` |

---

<a id="cp-007"></a>
### CP-007 — Matching de solicitud hacia makers compatibles con membresía vigente

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-007` — Matching de solicitud hacia makers compatibles con membresía vigente |
| **Caso de Uso / Requisitos** | [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01), [CU-INC-02](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-02), [CU-02](/3daltoque-docs/analisis/casos-de-uso/#cu-02) · [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RF-03.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-2), [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10) |
| **Pantallas asociadas** | `WEB-04` (Explorar makers compatibles), `WEB-12` (Bandeja de solicitudes compatibles), `MOB-04`, `MOB-11` |
| **Tipo y Prioridad** | Integración · **Alta** |
| **Precondiciones** | Existen 4 makers registrados en el radio de búsqueda:<br>- `Maker A`: tecnología `FDM`, material `PLA`, volumen `220x220x250`, disponibilidad `ACTIVA`, membresía `ACTIVA`.<br>- `Maker B`: tecnología `FDM`, material `PLA`, membresía `EN_PRUEBA` vigente (`Fundador`).<br>- `Maker C`: solo tecnología `SLA` (resina), sin `PLA`.<br>- `Maker D`: tecnología `FDM`, material `PLA`, pero con membresía `VENCIDA`. |
| **Datos de prueba** | Solicitud publicada que requiere `FDM`, material `PLA`, pieza de `85 x 45 x 30 mm` en radio de `10 km`. |
| **Pasos de ejecución** | 1. Ejecutar el proceso de matching (`CU-INC-02`) al publicar la solicitud.<br>2. Consultar las bandejas de solicitudes compatibles de `Maker A`, `Maker B`, `Maker C` y `Maker D`. |
| **Resultado esperado** | 1. `Maker A` y `Maker B` reciben la solicitud en su bandeja (`WEB-12` / `MOB-11`) y reciben la notificación correspondiente (`RF-07.1`).<br>2. `Maker C` queda excluido por incompatibilidad técnica de material/tecnología.<br>3. `Maker D` queda excluido de recibir nuevas solicitudes por tener la membresía `VENCIDA` (`RF-12.10`). |
| **Estado** | `Diseñado` |

---

<a id="cp-008"></a>
### CP-008 — Emisión y actualización de oferta de precio y plazo por maker elegible

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-008` — Emisión y actualización de oferta de precio y plazo por maker elegible |
| **Caso de Uso / Requisitos** | [CU-02](/3daltoque-docs/analisis/casos-de-uso/#cu-02) · [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1), [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2), [RF-04.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-5) |
| **Pantallas asociadas** | `WEB-13` (Detalle de solicitud y enviar oferta), `MOB-12` (Revisar solicitud y ofertar) |
| **Tipo y Prioridad** | Funcional · **Alta** |
| **Precondiciones** | `Maker A` tiene membresía vigente y una solicitud compatible en estado `EN_COTIZACION`. |
| **Datos de prueba** | Oferta v1: `precio`: `18500 ARS`, `plazo_dias`: `3`, `material`: `"PETG Negro"`, `vigencia_horas`: `48`, `notas`: `"Incluye remoción de soportes"`.<br>Oferta v2 (actualización): `precio`: `17000 ARS`, `plazo_dias`: `2`. |
| **Pasos de ejecución** | 1. `Maker A` abre `WEB-13`, descarga/inspecciona el archivo autorizado y envía la Oferta v1.<br>2. Antes de que el cliente elija una oferta, `Maker A` edita su propuesta con los datos de la Oferta v2. |
| **Resultado esperado** | 1. La Oferta v1 se crea en estado `EMITIDA` con fecha de vencimiento calculada.<br>2. Al actualizarla, el sistema registra la nueva versión vigente (`v2`: `17000 ARS`, `2 días`), conserva la trazabilidad de la versión anterior y notifica al cliente. |
| **Estado** | `Diseñado` |

---

<a id="cp-009"></a>
### CP-009 — Bloqueo de emisión de oferta para maker no compatible o con membresía vencida

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-009` — Bloqueo de emisión de oferta para maker no compatible o con membresía vencida |
| **Caso de Uso / Requisitos** | [CU-02](/3daltoque-docs/analisis/casos-de-uso/#cu-02), [CU-08](/3daltoque-docs/analisis/casos-de-uso/#cu-08) · [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1), [RF-12.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-4), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10) |
| **Pantallas asociadas** | `WEB-12`, `WEB-18`, `MOB-11`, `MOB-17` |
| **Tipo y Prioridad** | Seguridad / Regla de negocio · **Alta** |
| **Precondiciones** | `Maker D` tenía una invitación previa, pero su membresía pasó a estado `VENCIDA` según el reloj del servidor. |
| **Datos de prueba** | `request_id`: `REQ-101`, `maker_id`: `MAKER-D` (`membership_status = EXPIRED`), `precio`: `15000 ARS`. |
| **Pasos de ejecución** | 1. `Maker D` intenta enviar una oferta hacia `REQ-101` mediante la interfaz o invocando `POST /api/v1/requests/REQ-101/offers`. |
| **Resultado esperado** | 1. El backend rechaza la operación con `403 Forbidden` (`code: "MEMBERSHIP_EXPIRED"`).<br>2. No se persiste la oferta y la interfaz invita al maker a renovar su abono mensual (`CU-11`). |
| **Estado** | `Diseñado` |

---

<a id="cp-010"></a>
### CP-010 — Aceptación de oferta vigente, creación de pedido único y cierre de competidoras

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-010` — Aceptación de oferta vigente, creación de pedido único y cierre de competidoras |
| **Caso de Uso / Requisitos** | [CU-03](/3daltoque-docs/analisis/casos-de-uso/#cu-03) · [RF-04.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-3), [RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4), [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15) |
| **Pantallas asociadas** | `WEB-05` (Comparar ofertas recibidas), `WEB-06` (Confirmar oferta y generar pedido), `MOB-05` |
| **Tipo y Prioridad** | Integración · **Alta** |
| **Precondiciones** | La solicitud `REQ-101` del cliente tiene dos ofertas en estado `EMITIDA` y vigentes: `OF-01` (`Maker A`, `17000 ARS`, `2 días`) y `OF-02` (`Maker B`, `19500 ARS`, `3 días`). |
| **Datos de prueba** | Selección de `OF-01` (`version = 2`). |
| **Pasos de ejecución** | 1. El cliente abre `WEB-05` y compara precio, plazo, material, zona y vencimiento de `OF-01` y `OF-02`.<br>2. Selecciona `OF-01` y avanza al paso de confirmación (`WEB-06`), donde se informa que el pago de la impresión se acuerda directamente con el maker.<br>3. Confirma la aceptación de `OF-01`. |
| **Resultado esperado** | 1. En una única transacción atómica, `OF-01` pasa a `ACEPTADA`, `OF-02` pasa automáticamente a `CERRADA_POR_SELECCION`, la solicitud `REQ-101` pasa a `CONFIRMADA` y se crea un único `Pedido` (`ORD-501`) en estado `CONFIRMADO` con snapshot inmutable de las condiciones de `OF-01` (`17000 ARS`, `2 días`, `PETG Negro`).<br>2. Se habilita el canal de conversación del pedido y se notifica a ambos makers. |
| **Estado** | `Diseñado` |

---

<a id="cp-011"></a>
### CP-011 — Rechazo al intentar aceptar una oferta vencida o cuya versión fue modificada

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-011` — Rechazo al intentar aceptar una oferta vencida o cuya versión fue modificada |
| **Caso de Uso / Requisitos** | [CU-03](/3daltoque-docs/analisis/casos-de-uso/#cu-03) · [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2), [RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4) |
| **Pantallas asociadas** | `WEB-05`, `MOB-05` |
| **Tipo y Prioridad** | Funcional · **Alta** |
| **Precondiciones** | Escenario A: `OF-03` superó su `expires_at`.<br>Escenario B: El cliente dejó abierta en pantalla la `version = 1` de `OF-01`, pero el maker ya publicó la `version = 2`. |
| **Datos de prueba** | `offer_id`: `OF-03` (vencida) / `OF-01` con `expected_version = 1`. |
| **Pasos de ejecución** | 1. Intentar confirmar `OF-03` una vez cumplida su fecha/hora de expiración.<br>2. Intentar confirmar `OF-01` enviando `expected_version = 1`. |
| **Resultado esperado** | 1. El sistema rechaza la operación con `409 Conflict` (`OFFER_EXPIRED` u `OFFER_VERSION_MISMATCH`).<br>2. No se crea ningún pedido y la interfaz refresca las ofertas vigentes para que el cliente decida con información actualizada. |
| **Estado** | `Diseñado` |

---

<a id="cp-012"></a>
### CP-012 — Control de concurrencia ante dos intentos simultáneos de aceptación sobre la misma solicitud

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-012` — Control de concurrencia ante dos intentos simultáneos de aceptación sobre la misma solicitud |
| **Caso de Uso / Requisitos** | [CU-03](/3daltoque-docs/analisis/casos-de-uso/#cu-03) · [RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05) |
| **Pantallas asociadas** | `WEB-06`, `MOB-05` |
| **Tipo y Prioridad** | Concurrencia · **Alta** |
| **Precondiciones** | Solicitud `REQ-102` en estado `EN_COTIZACION` con dos ofertas vigentes (`OF-10` y `OF-11`). El cliente tiene sesión abierta en Web y Mobile simultáneamente. |
| **Datos de prueba** | Petición 1 (`POST /api/v1/requests/REQ-102/accept-offer` con `OF-10`) y Petición 2 (`POST /api/v1/requests/REQ-102/accept-offer` con `OF-11`) disparadas en el mismo instante (`t = 0 ms`). |
| **Pasos de ejecución** | 1. Ejecutar ambas peticiones concurrentes contra la API.<br>2. Consultar la tabla `orders` y el estado de `OF-10` y `OF-11` al finalizar ambas transacciones. |
| **Resultado esperado** | 1. Exactamente **una** petición finaliza con `201 Created` y genera el único registro en `orders` para `REQ-102`.<br>2. La segunda petición recibe `409 Conflict` (`REQUEST_ALREADY_CONFIRMED`).<br>3. En ningún caso se crean dos pedidos activos para la misma solicitud. |
| **Estado** | `Diseñado` |

---

<a id="cp-013"></a>
### CP-013 — Avance de producción, carga de evidencia privada y paso a `EN_REVISION`

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-013` — Avance de producción, carga de evidencia privada y paso a `EN_REVISION` |
| **Caso de Uso / Requisitos** | [CU-04](/3daltoque-docs/analisis/casos-de-uso/#cu-04), [CU-INC-01](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-01) · [RF-06.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1), [RF-06.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-2), [RF-06.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-5), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2) |
| **Pantallas asociadas** | `WEB-14` (Pedidos activos del maker), `WEB-15` (Subir evidencia de pieza terminada), `MOB-13`, `MOB-14` |
| **Tipo y Prioridad** | Funcional / Integración · **Alta** |
| **Precondiciones** | Pedido `ORD-501` en estado `CONFIRMADO` asignado a `Maker A`. |
| **Datos de prueba** | Paso 1: cambio a `EN_PRODUCCION` con nota `"Impresión iniciada en PETG Negro"`.<br>Paso 2: carga de `evidencia_frontal.jpg` (`1.8 MB`), `evidencia_calibre.jpg` (`1.5 MB`) y observación `"Piezas terminadas según medidas solicitadas"`. |
| **Pasos de ejecución** | 1. `Maker A` marca el inicio de fabricación (`EN_PRODUCCION`).<br>2. Al finalizar la pieza, abre `WEB-15` / `MOB-14`, sube las fotografías de evidencia y envía la solicitud de revisión al cliente. |
| **Resultado esperado** | 1. Las imágenes se almacenan como objetos privados vinculados a `ORD-501` (`delivery_evidences`).<br>2. El pedido transiciona a `EN_REVISION` registrando fecha, hora y actor en el historial auditable (`RF-05.3`).<br>3. El cliente recibe notificación inmediata para revisar la evidencia (`RF-06.2`, `RF-07.1`). |
| **Estado** | `Diseñado` |

---

<a id="cp-014"></a>
### CP-014 — Conversación contextual del pedido y bloqueo de acceso a terceros no participantes

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-014` — Conversación contextual del pedido y bloqueo de acceso a terceros no participantes |
| **Caso de Uso / Requisitos** | [CU-EXT-02](/3daltoque-docs/analisis/casos-de-uso/#cu-ext-02) · [RF-05.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-1), [RF-05.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2), [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04) |
| **Pantallas asociadas** | `WEB-09` (Chat contextual del pedido), `MOB-08` |
| **Tipo y Prioridad** | Seguridad / Funcional · **Alta** |
| **Precondiciones** | Pedido `ORD-501` activo entre `Cliente 1` y `Maker A`. Existe un usuario autenticado ajeno (`Cliente 2` o `Maker B`). |
| **Datos de prueba** | Mensaje de `Cliente 1`: `"¿Podés confirmar si el encastre quedó de 5 mm?"`. Intento de lectura por `Maker B` sobre `/api/v1/orders/ORD-501/messages` y sobre el archivo STL/evidencia de `ORD-501`. |
| **Pasos de ejecución** | 1. `Cliente 1` envía el mensaje en `WEB-09`; `Maker A` lo visualiza y responde.<br>2. `Maker B` (no adjudicatario del pedido) intenta consultar los mensajes o pedir URL de descarga de la evidencia de `ORD-501`. |
| **Resultado esperado** | 1. Entre `Cliente 1` y `Maker A`, los mensajes quedan registrados con autor y marca temporal en el hilo de `ORD-501`.<br>2. La petición de `Maker B` es rechazada con `403 Forbidden` / `404 Not Found` sin exponer mensajes ni generar URLs firmadas para los archivos privados. |
| **Estado** | `Diseñado` |

---

<a id="cp-015"></a>
### CP-015 — Aprobación expresa de la evidencia por el cliente y habilitación de entrega

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-015` — Aprobación expresa de la evidencia por el cliente y habilitación de entrega |
| **Caso de Uso / Requisitos** | [CU-05](/3daltoque-docs/analisis/casos-de-uso/#cu-05) · [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3), [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3) |
| **Pantallas asociadas** | `WEB-08` (Revisar y aprobar evidencia), `MOB-07` |
| **Tipo y Prioridad** | Funcional · **Alta** |
| **Precondiciones** | Pedido `ORD-501` en estado `EN_REVISION` con evidencia #1 vigente. |
| **Datos de prueba** | Acción: `APPROVE`, comentario opcional: `"Se ve excelente, coordinemos la entrega"`. |
| **Pasos de ejecución** | 1. El cliente abre `WEB-08` / `MOB-07` e inspecciona las fotografías subidas por el maker.<br>2. Presiona `"Aprobar resultado"` y confirma su decisión. |
| **Resultado esperado** | 1. La revisión queda vinculada de forma inmutable al identificador de la evidencia #1 (`evidence_id`).<br>2. El pedido pasa a estado `RESULTADO_APROBADO` (`LISTO_PARA_ENTREGA`).<br>3. Se desbloquea la etapa de coordinación de entrega personal (`CU-06`) y se notifica al maker. |
| **Estado** | `Diseñado` |

---

<a id="cp-016"></a>
### CP-016 — Bloqueo de coordinación de entrega cuando la evidencia aún no fue aprobada

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-016` — Bloqueo de coordinación de entrega cuando la evidencia aún no fue aprobada |
| **Caso de Uso / Requisitos** | [CU-05](/3daltoque-docs/analisis/casos-de-uso/#cu-05), [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06) · [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3), [RF-06.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-6), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05) |
| **Pantallas asociadas** | `WEB-08`, `WEB-10`, `MOB-07`, `MOB-09` |
| **Tipo y Prioridad** | Seguridad / Regla de negocio · **Alta** |
| **Precondiciones** | Pedido `ORD-502` en estado `EN_PRODUCCION` o `EN_REVISION` (sin aprobación expresa del cliente). |
| **Datos de prueba** | Intento de invocar `POST /api/v1/orders/ORD-502/delivery/schedule` o marcar el pedido como `ENTREGADO`. |
| **Pasos de ejecución** | 1. El maker (o el cliente) intenta proponer/confirmar la entrega o cerrar el pedido antes de que exista una evidencia aprobada. |
| **Resultado esperado** | 1. El backend rechaza la transición con `409 Conflict` (`EVIDENCE_APPROVAL_REQUIRED`).<br>2. El pedido permanece en su estado actual y la coordinación de entrega continúa bloqueada hasta que se cumpla la aprobación expresa (`RF-06.3`). |
| **Estado** | `Diseñado` |

---

<a id="cp-017"></a>
### CP-017 — Registro de observaciones sobre la evidencia y reapertura de ajuste

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-017` — Registro de observaciones sobre la evidencia y reapertura de ajuste |
| **Caso de Uso / Requisitos** | [CU-05](/3daltoque-docs/analisis/casos-de-uso/#cu-05), [CU-EXT-03](/3daltoque-docs/analisis/casos-de-uso/#cu-ext-03) · [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3), [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3) |
| **Pantallas asociadas** | `WEB-08`, `MOB-07` |
| **Tipo y Prioridad** | Funcional · **Alta** |
| **Precondiciones** | Pedido `ORD-503` en estado `EN_REVISION` con evidencia #1 presentada. |
| **Datos de prueba** | Acción: `OBSERVE`, `motivo`: `"Falta una de las dos unidades acordadas en la foto y se observa warping en la base"`. |
| **Pasos de ejecución** | 1. El cliente selecciona `"Registrar observaciones / Solicitar ajuste"` en `WEB-08`.<br>2. Ingresa el motivo detallado y confirma. |
| **Resultado esperado** | 1. La evidencia #1 queda en estado `OBSERVADA` conservando el motivo y la fecha.<br>2. El pedido pasa a `OBSERVADO` / vuelve a habilitar la carga de una nueva evidencia corregida por el maker (`CU-04`) sin borrar la evidencia #1 del historial. |
| **Estado** | `Diseñado` |

---

<a id="cp-018"></a>
### CP-018 — Silencio del cliente ante revisión pendiente: envío de recordatorio sin aprobación automática

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-018` — Silencio del cliente ante revisión pendiente: envío de recordatorio sin aprobación automática |
| **Caso de Uso / Requisitos** | [CU-05](/3daltoque-docs/analisis/casos-de-uso/#cu-05) · [RF-06.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-4), [RF-07.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-4) |
| **Pantallas asociadas** | `WEB-08`, `MOB-07` |
| **Tipo y Prioridad** | Funcional · **Alta** |
| **Precondiciones** | Pedido `ORD-504` en estado `EN_REVISION` desde hace más que el umbral de recordatorio configurado (`ej. 48 h`), sin respuesta del cliente. |
| **Datos de prueba** | Avance del reloj del job programado (`scheduler`) a `+48 h` y `+96 h` desde la carga de evidencia. |
| **Pasos de ejecución** | 1. Ejecutar el job de verificación de revisiones pendientes.<br>2. Consultar el estado de `ORD-504` y las notificaciones emitidas. |
| **Resultado esperado** | 1. Se emite un recordatorio al cliente (`RF-07.4`) indicando que tiene una revisión pendiente.<br>2. **En ningún caso** el pedido pasa automáticamente a `RESULTADO_APROBADO` ni a `ENTREGADO` por el mero transcurso del tiempo (`RF-06.4`). |
| **Estado** | `Diseñado` |

---

<a id="cp-019"></a>
### CP-019 — Coordinación de entrega personal en punto de encuentro y confirmación de recepción

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-019` — Coordinación de entrega personal en punto de encuentro y confirmación de recepción |
| **Caso de Uso / Requisitos** | [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06) · [RF-06.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-6), [RF-06.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-7), [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2) |
| **Pantallas asociadas** | `WEB-10` (Coordinar encuentro y confirmar recepción), `WEB-16` (Coordinar entrega personal), `MOB-09`, `MOB-15` |
| **Tipo y Prioridad** | Funcional · **Alta** |
| **Precondiciones** | Pedido `ORD-501` en estado `RESULTADO_APROBADO`. |
| **Datos de prueba** | `punto_encuentro`: `"Café Martínez - Av. Rivadavia y Acoyte (Caballito)"`, `fecha_hora_acordada`: `"2026-10-28T17:30:00-03:00"`, `notas`: `"Mesa junto a la entrada"`. |
| **Pasos de ejecución** | 1. El maker (o cliente) propone el punto de encuentro neutral y la franja horaria en `WEB-16` / `WEB-10`.<br>2. La contraparte confirma la propuesta (`ENTREGA_COORDINADA`).<br>3. Realizado el encuentro físico, el cliente confirma la recepción de la pieza en `WEB-10` / `MOB-09`. |
| **Resultado esperado** | 1. El acuerdo de entrega queda registrado con lugar, fecha y hora.<br>2. Al confirmar la recepción, la entrega pasa a `COMPLETADA` y el pedido pasa a `ENTREGADO` con fecha/hora de cierre auditable. |
| **Estado** | `Diseñado` |

---

<a id="cp-020"></a>
### CP-020 — Preservación de privacidad del domicilio exacto del maker en mapas y entregas

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-020` — Preservación de privacidad del domicilio exacto del maker en mapas y entregas |
| **Caso de Uso / Requisitos** | [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01), [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06), [CU-09](/3daltoque-docs/analisis/casos-de-uso/#cu-09) · [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04) |
| **Pantallas asociadas** | `WEB-04`, `WEB-10`, `MOB-04`, `MOB-09` |
| **Tipo y Prioridad** | Seguridad / Privacidad · **Alta** |
| **Precondiciones** | `Maker A` cargó su ubicación operativa interna en la base de datos. |
| **Datos de prueba** | Consulta de un cliente autenticado a los endpoints de exploración de makers, detalle de oferta y detalle de pedido. |
| **Pasos de ejecución** | 1. Inspeccionar la respuesta JSON de `GET /api/v1/requests/{id}/matches`, `GET /api/v1/requests/{id}/offers` y `GET /api/v1/orders/{id}`.<br>2. Verificar la representación visual en el mapa (`WEB-04` / `MOB-04`). |
| **Resultado esperado** | 1. Las respuestas de API exponen únicamente zona/barrio, distancia aproximada y coordenadas redondeadas/desplazadas al centroide de zona.<br>2. La calle, altura, piso, departamento y coordenadas exactas del domicilio del maker **nunca** se serializan hacia clientes ni terceros. |
| **Estado** | `Diseñado` |

---

<a id="cp-021"></a>
### CP-021 — Primera habilitación del perfil maker e inicio de prueba gratuita general (`30 días`)

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-021` — Primera habilitación del perfil maker e inicio de prueba gratuita general (`30 días`) |
| **Caso de Uso / Requisitos** | [CU-09](/3daltoque-docs/analisis/casos-de-uso/#cu-09), [CU-08](/3daltoque-docs/analisis/casos-de-uso/#cu-08) · [RF-01.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2), [RF-12.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2), [RF-12.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-4) |
| **Pantallas asociadas** | `WEB-17` (Perfil técnico del maker), `WEB-18` (Estado de membresía), `MOB-16`, `MOB-17` |
| **Tipo y Prioridad** | Funcional · **Alta** |
| **Precondiciones** | Usuario con rol `MAKER` recién registrado, sin habilitación previa (`first_enabled_at IS NULL`) y sin asignación al programa `Makers Fundadores`. |
| **Datos de prueba** | `tecnologias`: `["FDM"]`, `materiales`: `["PLA", "PETG"]`, `volumen_max_mm`: `220 x 220 x 250`, `zona_operativa`: `"Villa Crespo, CABA"`, `disponibilidad`: `ACTIVA`. |
| **Pasos de ejecución** | 1. Completar los datos técnicos y de ubicación en `WEB-17` / `MOB-16` y solicitar la primera habilitación del perfil.<br>2. Una vez habilitado, abrir `WEB-18` / `MOB-17` para consultar la membresía.<br>3. Deshabilitar y volver a habilitar el perfil posteriormente para verificar que la prueba no se reinicia. |
| **Resultado esperado** | 1. Con la primera habilitación se activa por única vez el período de prueba gratuita general de **`30 días` corridos** (`status = TRIAL`, `benefit_type = GENERAL_30D`) calculado con el reloj del servidor.<br>2. Al editar o rehabilitar el perfil más adelante, el sistema **no** otorga una segunda prueba gratuita. |
| **Estado** | `Diseñado` |

---

<a id="cp-022"></a>
### CP-022 — Asignación administrativa del beneficio `Makers Fundadores` (`90 días` totales no acumulables)

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-022` — Asignación administrativa del beneficio `Makers Fundadores` (`90 días` totales no acumulables) |
| **Caso de Uso / Requisitos** | [CU-10](/3daltoque-docs/analisis/casos-de-uso/#cu-10), [CU-09](/3daltoque-docs/analisis/casos-de-uso/#cu-09) · [RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3), [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15) |
| **Pantallas asociadas** | `WEB-23` (Programa Makers Fundadores), `WEB-18`, `MOB-17` |
| **Tipo y Prioridad** | Funcional / Regla de negocio · **Alta** |
| **Precondiciones** | Administrador autenticado; cupo y ventana del programa `Makers Fundadores` vigentes; `Maker F` elegible. |
| **Datos de prueba** | `maker_id`: `MAKER-F`, `motivo`: `"Camada inicial de lanzamiento - Cohorte Fundadores #12"`. |
| **Pasos de ejecución** | 1. El administrador asigna el beneficio `Makers Fundadores` a `MAKER-F` desde `WEB-23`.<br>2. `MAKER-F` completa su primera habilitación de perfil (`CU-09`).<br>3. Verificar la fecha de vencimiento resultante y comprobar que no se sumen `30 + 90 = 120` días. |
| **Resultado esperado** | 1. La membresía de `MAKER-F` queda activa con `benefit_type = FOUNDER_90D` y una vigencia exacta de **`90 días` totales** desde la primera habilitación (reemplazando los 30 días generales, **nunca acumulando 120 días**).<br>2. La asignación queda registrada en auditoría (`RF-12.13`) y descuenta 1 lugar del cupo de fundadores. |
| **Estado** | `Diseñado` |

---

<a id="cp-023"></a>
### CP-023 — Pago manual de abono mensual por Checkout Pro y activación tras verificación servidor a servidor

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-023` — Pago manual de abono mensual por Checkout Pro y activación tras verificación servidor a servidor |
| **Caso de Uso / Requisitos** | [CU-11](/3daltoque-docs/analisis/casos-de-uso/#cu-11), [CU-INC-03](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-03) · [RF-12.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-5), [RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.8](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8), [RF-12.9](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-9) |
| **Pantallas asociadas** | `WEB-19` (Pago y renovación manual del abono), `WEB-20` (Resultado de pago e historial), `MOB-18`, `MOB-19` |
| **Tipo y Prioridad** | Integración · **Alta** |
| **Precondiciones** | Maker autenticado con membresía `POR_VENCER` o `VENCIDA`; plan mensual vigente configurado; integración con Mercado Pago Checkout Pro (`INT-01`) en sandbox. |
| **Datos de prueba** | Orden de compra `MP-ORDER-901` por el precio vigente del plan mensual; redirección del navegador con `?status=approved` + notificación webhook de Mercado Pago `payment.updated` (`status = approved`). |
| **Pasos de ejecución** | 1. El maker inicia el pago manual en `WEB-19` / `MOB-18`.<br>2. El usuario vuelve desde la URL de retorno del navegador **antes** de que llegue el webhook: verificar el estado mostrado.<br>3. Recibir y procesar el webhook autenticado de Mercado Pago (`CU-INC-03`) que consulta el estado real del pago en el proveedor. |
| **Resultado esperado** | 1. Al volver solo por redirección del navegador, la compra permanece en `EN_VERIFICACION` y **no** activa la membresía sin confirmación del servidor (`RF-12.5`, `RF-12.8`).<br>2. Al verificarse la notificación servidor a servidor con estado `approved`, la compra pasa a `APROBADA` y la membresía pasa a `ACTIVA` por el nuevo período mensual con renovación manual (sin débito automático). |
| **Estado** | `Diseñado` |

---

<a id="cp-024"></a>
### CP-024 — Idempotencia ante webhook de pago de abono duplicado y rechazo de webhook sin firma válida

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-024` — Idempotencia ante webhook de pago de abono duplicado y rechazo de webhook sin firma válida |
| **Caso de Uso / Requisitos** | [CU-11](/3daltoque-docs/analisis/casos-de-uso/#cu-11), [CU-INC-03](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-03) · [RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09) |
| **Pantallas asociadas** | `WEB-20`, `WEB-24` (Conciliación de pagos de membresía) |
| **Tipo y Prioridad** | Concurrencia / Seguridad · **Alta** |
| **Precondiciones** | Orden de compra `MP-ORDER-901` ya procesada y acreditada con `provider_payment_id = 77889900`. |
| **Datos de prueba** | Caso A: reenvío de 3 notificaciones webhook idénticas para `provider_payment_id = 77889900`.<br>Caso B: envío de un payload webhook con cabecera `x-signature` inválida o adulterada. |
| **Pasos de ejecución** | 1. Enviar las 3 notificaciones repetidas del Caso A al endpoint de webhook.<br>2. Enviar la notificación con firma adulterada del Caso B. |
| **Resultado esperado** | 1. En el Caso A, el sistema reconoce el evento como ya procesado, responde `200 OK` de forma idempotente y **no** extiende dos ni tres veces la fecha de vencimiento de la membresía.<br>2. En el Caso B, rechaza el webhook con `401 Unauthorized`, registra el intento en el log de seguridad y no modifica ningún registro comercial. |
| **Estado** | `Diseñado` |

---

<a id="cp-025"></a>
### CP-025 — Continuidad operativa de pedidos activos cuando vence la membresía del maker

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-025` — Continuidad operativa de pedidos activos cuando vence la membresía del maker |
| **Caso de Uso / Requisitos** | [CU-08](/3daltoque-docs/analisis/casos-de-uso/#cu-08), [CU-04](/3daltoque-docs/analisis/casos-de-uso/#cu-04), [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06) · [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10) |
| **Pantallas asociadas** | `WEB-14`, `WEB-15`, `WEB-16`, `WEB-18`, `MOB-13..15`, `MOB-17` |
| **Tipo y Prioridad** | Regla de negocio · **Alta** |
| **Precondiciones** | `Maker A` tiene el pedido `ORD-501` ya confirmado (`EN_PRODUCCION`), pero su membresía mensual vence hoy a las `00:00 UTC` y pasa a estado `VENCIDA`. |
| **Datos de prueba** | `maker_id`: `MAKER-A` (`membership_status = EXPIRED`), `order_id`: `ORD-501` (`status = IN_PRODUCTION`). |
| **Pasos de ejecución** | 1. Con la membresía de `Maker A` ya `VENCIDA`, intentar recibir nuevas solicitudes o enviar una nueva oferta (`CU-02`).<br>2. Con la misma cuenta `Maker A`, abrir el pedido activo `ORD-501`, enviar un mensaje por el chat, subir la evidencia de pieza terminada (`CU-04`) y coordinar la entrega (`CU-06`). |
| **Resultado esperado** | 1. Las nuevas solicitudes y la emisión de nuevas ofertas quedan bloqueadas (`403 MEMBERSHIP_EXPIRED`).<br>2. Todas las operaciones sobre el pedido ya confirmado `ORD-501` (chat, carga de evidencia, revisión y coordinación de entrega) **se ejecutan con normalidad hasta completar el pedido** (`RF-12.10`). |
| **Estado** | `Diseñado` |

---

<a id="cp-026"></a>
### CP-026 — Actualización administrativa del plan de membresía sin afectar períodos ya pagados

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-026` — Actualización administrativa del plan de membresía sin afectar períodos ya pagados |
| **Caso de Uso / Requisitos** | [CU-12](/3daltoque-docs/analisis/casos-de-uso/#cu-12) · [RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1), [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12), [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13) |
| **Pantallas asociadas** | `WEB-22` (Configuración del plan de membresía), `WEB-24` |
| **Tipo y Prioridad** | Funcional / Auditoría · **Media** |
| **Precondiciones** | `Maker A` tiene un período mensual pagado y vigente con precio histórico `$12.000 ARS` hasta el `2026-11-20`. |
| **Datos de prueba** | Nuevo precio configurado por el administrador en `WEB-22`: `$15.000 ARS`, `motivo`: `"Actualización trimestral del abono"`. |
| **Pasos de ejecución** | 1. El administrador actualiza el precio del único plan de membresía en `WEB-22`.<br>2. Consultar la membresía vigente y el comprobante histórico de `Maker A`.<br>3. Iniciar una nueva orden de compra de renovación con otra cuenta (`Maker D`). |
| **Resultado esperado** | 1. El período en curso y el registro histórico de `Maker A` conservan intactos su importe original (`$12.000 ARS`) y su fecha de vencimiento (`2026-11-20`).<br>2. La nueva orden de compra de `Maker D` utiliza el nuevo precio vigente (`$15.000 ARS`).<br>3. La bitácora de auditoría registra autor, fecha, valor anterior, valor nuevo y motivo. |
| **Estado** | `Diseñado` |

---

<a id="cp-027"></a>
### CP-027 — Separación estricta entre cobro simulado (`demo`) y cobro real de membresía

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-027` — Separación estricta entre cobro simulado (`demo`) y cobro real de membresía |
| **Caso de Uso / Requisitos** | [CU-11](/3daltoque-docs/analisis/casos-de-uso/#cu-11), [CU-12](/3daltoque-docs/analisis/casos-de-uso/#cu-12) · [RF-12.14](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-14), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10) |
| **Pantallas asociadas** | `WEB-19`, `WEB-20`, `WEB-24` |
| **Tipo y Prioridad** | Seguridad / Integración · **Alta** |
| **Precondiciones** | Caso A: entorno de demostración con `PAYMENT_MODE=simulated`.<br>Caso B: entorno productivo con `PAYMENT_MODE=mercadopago`. |
| **Datos de prueba** | Transacción generada mediante el adaptador simulado (`is_simulated = true`). |
| **Pasos de ejecución** | 1. En el entorno de demostración, ejecutar un cobro de abono con el adaptador simulado y verificar su visualización en `WEB-20` y `WEB-24`.<br>2. En el entorno productivo (`PAYMENT_MODE=mercadopago`), intentar invocar el endpoint de confirmación simulada. |
| **Resultado esperado** | 1. En el entorno demo, la transacción y la pantalla muestran la etiqueta visible `SIMULACIÓN / DEMO` y quedan excluidas de los totales de recaudación real (`RF-12.14`).<br>2. En el entorno productivo, la ruta de simulación está deshabilitada (`403/404`) y ningún pago simulado puede conceder acceso real. |
| **Estado** | `Diseñado` |

---

<a id="cp-028"></a>
### CP-028 — Moderación administrativa de incidente y registro inalterable en bitácora de auditoría

| Campo | Detalle |
| --- | --- |
| **ID y Nombre** | `CP-028` — Moderación administrativa de incidente y registro inalterable en bitácora de auditoría |
| **Caso de Uso / Requisitos** | [CU-07](/3daltoque-docs/analisis/casos-de-uso/#cu-07) · [RF-07.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-2), [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06) |
| **Pantallas asociadas** | `WEB-21` (Moderación de casos y soporte), `WEB-25` (Auditoría operativa y comercial) |
| **Tipo y Prioridad** | Funcional / Seguridad · **Media** |
| **Precondiciones** | Existe un reporte de incidente abierto sobre el pedido `ORD-503`; usuario `Administrador` autenticado. |
| **Datos de prueba** | `incident_id`: `INC-301`, `resolucion`: `"CANCELACION_PEDIDO_CON_FUNDAMENTO"`, `motivo`: `"Imposibilidad técnica declarada por el maker tras rotura de extrusor"`. |
| **Pasos de ejecución** | 1. Un usuario sin rol `ADMIN` intenta acceder a `GET /api/v1/admin/incidents`: verificar rechazo.<br>2. El `Administrador` abre `WEB-21`, consulta los antecedentes vinculados al caso `INC-301` y registra la resolución con motivo obligatorio.<br>3. Consultar la bitácora en `WEB-25`. |
| **Resultado esperado** | 1. El usuario no administrador recibe `403 Forbidden`.<br>2. La resolución actualiza el estado del caso y del pedido dejando constancia de que 3DAltoque no intermedia devoluciones de dinero del trabajo entre cliente y maker.<br>3. En `WEB-25` (`audit_logs`) queda registrado de forma inmutable el administrador, timestamp, entidad afectada, estado previo, estado nuevo y motivo. |
| **Estado** | `Diseñado` |

---

## 4. Fichas de pruebas no funcionales (`PNF-001` a `PNF-008`)

<a id="pnf-001"></a>
### PNF-001 — Monitoreo de disponibilidad continua en ventana de evaluación
- **RNF asociados:** [RNF-01](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-01), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07).
- **Precondición:** Entorno de demostración desplegado con API FastAPI y PostgreSQL activos.
- **Procedimiento:** Ejecutar una sonda cada 60 segundos durante 24 horas sobre `/api/v1/health/ready` y una consulta de lectura representativa, registrando código HTTP, latencia y estado de dependencias.
- **Resultado esperado:** Disponibilidad medida `>= 99%` en la ventana acordada; si la base de datos cae, el healthcheck devuelve `503 Service Unavailable` (nunca un `200 OK` falso).

<a id="pnf-002"></a>
### PNF-002 — Rendimiento de búsqueda geoespacial y filtrado de makers compatibles
- **RNF asociados:** [RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02), [RNF-03](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-03).
- **Precondición:** Base de datos cargada con el dataset sintético de `200 makers` distribuidos geográficamente con distintas capacidades (`FDM`, `SLA`, materiales y dimensiones).
- **Procedimiento:** Ejecutar el script `k6` bajo el perfil `PERF-01` consultando el matching de solicitudes con ubicaciones registradas.
- **Resultado esperado:** Percentil `p95 <= 2.0 segundos` y tasa de errores técnicos `< 1%`, manteniendo exactitud en el filtrado de compatibilidad y vigencia de membresía.

<a id="pnf-003"></a>
### PNF-003 — Degradación controlada ante indisponibilidad de proveedores externos
- **RNF asociados:** [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07).
- **Procedimiento:** Simular timeout/error `503` en los adaptadores de Mercado Pago (`INT-01`), Geocodificación (`INT-02`), Almacenamiento de objetos (`INT-03`) y Avisos externos (`INT-04`).
- **Resultado esperado:** El núcleo de la aplicación continúa disponible; las fallas se registran con `correlation_id`, las notificaciones internas (`RF-07.1`) siguen funcionando aunque falle el canal externo (`RF-07.3`), y no quedan estados inconsistentes en base de datos.

<a id="pnf-004"></a>
### PNF-004 — Cumplimiento de contrato OpenAPI y paridad funcional Web/Mobile
- **RNF asociados:** [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1), [RF-11.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2).
- **Procedimiento:** Validar las respuestas de los endpoints principales y de error (`application/problem+json` / estructura estándar de error) consumidos por Web y Mobile frente al esquema OpenAPI generado por FastAPI.
- **Resultado esperado:** `100%` de conformidad de esquemas y reflejo consistente de cambios de estado entre un cliente Web y un cliente Mobile conectados al mismo pedido.

<a id="pnf-005"></a>
### PNF-005 — Protección contra abuso de tasa (*rate limiting*) y payloads fuera de límite
- **RNF asociados:** [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04).
- **Procedimiento:** Disparar ráfagas por encima del umbral configurado sobre `/auth/login`, `/requests` y `/files/upload-intent`, y enviar cuerpos JSON que excedan el tamaño máximo.
- **Resultado esperado:** Rechazo controlado con `429 Too Many Requests` o `413 Content Too Large`, sin degradar el servicio para otros usuarios autenticados.

<a id="pnf-006"></a>
### PNF-006 — Accesibilidad, claridad de estados y advertencias comerciales en UI
- **RNF asociados:** [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15).
- **Procedimiento:** Auditar navegación por teclado, contraste, etiquetas de formulario y presencia de avisos críticos (estimación no vinculante, pago del pedido por fuera de la plataforma, alcance de `Makers Fundadores` y regla de no aprobación por silencio).
- **Resultado esperado:** Cero violaciones críticas de accesibilidad en las vistas del flujo principal y presencia verificable de las cuatro advertencias de transparencia comercial y operativa.

<a id="pnf-007"></a>
### PNF-007 — Retención, retiro de archivos privados y borrado/anonimización de datos personales
- **RNF asociados:** [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RF-10.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-4).
- **Procedimiento:** Ejecutar el proceso de retiro de archivos vencidos y una solicitud de baja de cuenta sobre datos ficticios.
- **Resultado esperado:** Los objetos retirados dejan de ser descargables (`404/410`), los datos personales identificables se eliminan o anonimizan según política, y se preservan únicamente los registros de auditoría comercial requeridos sin exponer PII innecesaria.

<a id="pnf-008"></a>
### PNF-008 — Reproducción limpia del entorno desde cero y restauración de backup de base de datos
- **RNF asociados:** [RNF-18](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-18), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).
- **Procedimiento:** Levantar el entorno completo en una máquina limpia siguiendo el Manual de Instalación, generar un respaldo con `pg_dump`, destruir el volumen local y restaurar con `pg_restore`.
- **Resultado esperado:** Entorno operativo de punta a punta sin pasos ocultos y restauración íntegra del esquema (`50 tablas`) y de los datos de prueba verificada por conteo de filas y claves foráneas.

---

## 5. Plantilla de registro de ejecución (para completar en etapa de pruebas sobre código)

| Campo de registro | Valor a registrar por corrida |
| --- | --- |
| **ID del caso de prueba** | `CP-XXX` / `PNF-XXX` |
| **Versión / Commit / Tag** | Hash de Git del backend y frontend evaluados |
| **Fecha, hora y entorno** | `local-docker` / `staging-demo` |
| **Ejecutor** | Integrante del equipo (Bernardez / Cariaga / Ruiz) |
| **Resultado obtenido** | Descripción observable y código HTTP / captura |
| **Dictamen** | `Aprobado` · `Fallido` · `Bloqueado` |
| **Evidencia adjunta** | Enlace al log de `pytest` / reporte `Playwright` / captura saneada |
| **Incidente vinculado** | ID de issue en GitHub en caso de desvío |
