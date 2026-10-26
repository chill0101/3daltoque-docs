---
title: "Pruebas, seguridad y operación"
---

# Pruebas, seguridad y operación

Plan de evaluación funcional, de seguridad y de operación. [Catálogo y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/).

## Funcionalidad

Cubrir publicación, matching, ofertas versionadas, doble aceptación, producción, revisión con evidencia y entrega. Agregar prueba general y fundadora, cupo concurrente, pago propio del abono, renovación manual, webhook duplicado y vencimiento con pedidos activos. La cobertura comercial sigue los requisitos RF-12.1 a RF-12.15 y la decisión ADR-002.

## Seguridad

Autorización por recurso y rol; archivos privados y enlaces temporales; límites de carga, tipo y análisis del STL; claves del proveedor solo en backend; verificar firma y contexto de eventos según la integración elegida y consultar el recurso al proveedor. El backend determina el importe del plan y los permisos a partir de datos autorizados. Minimizar datos personales y no almacenar información de tarjetas. Auditar altas de fundadores y cambios de plan.

## Operación

Persistir notificación antes de confirmar recepción; deduplicar, conciliar pagos inciertos y aplicar el período en una transacción idempotente. No registrar secretos o datos completos del medio de pago. Alertas para discrepancias y fallas de notificaciones; procesos periódicos y reintentos dependen de hosting acordado. La concesión de acceso exige un resultado de pago verificado por el backend.

## Aceptación y contingencia

Usar cuentas y escenarios de prueba del proveedor. La simulación académica se presenta como simulada, aislada de acceso real y conciliación productiva. Probar copia/restauración y concurrencia cuando haya implementación y entorno acordados. El catálogo de pruebas registra los casos previstos y su estado de ejecución.

## Cobertura funcional de la revisión del 25 de octubre

El [plan de pruebas](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) define 160 CP planificados, datos y resultados esperados. Cubre los 68 RF y los 25 CU con pruebas principales, alternativas e integración. La ejecución requiere la implementación y un entorno identificable.

| Superficie | Control y escenario |
| --- | --- |
| Catálogo y pedido directo | Precio del servidor, versión publicada, acceso comercial, cantidad, bloqueo de pedido propio e idempotencia; conservar condiciones y archivo de fabricación. |
| Chat | Participante del pedido confirmado, adjunto autorizado, reintento sin duplicación y recuperación después del vencimiento comercial. |
| Portfolio y producto público | Derivados autorizados; impedir exposición de STL, evidencia privada o archivos de otro titular. |
| Reputación | Pedido entregado, contraparte válida, autor único por pedido, escala versionada y moderación auditada. |
| Historial y reportes | Pertenencia, permiso administrativo, filtros, límites temporales y agregados sin datos privados innecesarios. |
| Encuentro y recepción | Aceptar la versión de coordinación y confirmar recepción con la identidad del cliente. |

## Registro de ejecución

Una ejecución de CP debe conservar identificador, versión del sistema y de fixtures, entorno, fecha, actor de prueba, resultado y evidencia. Las relaciones documentales se controlan con `scripts/revisar-cobertura-funcional.mjs`.

---

## Niveles de prueba y estrategia de verificación

Además del [catálogo completo de 160 escenarios planificados](/3daltoque-docs/analisis/pruebas-y-trazabilidad/), este documento incluye las **fichas detalladas de casos de prueba (`CP-001` a `CP-028`)** con la estructura completa de la planilla de cátedra (`Ejemplo de Casos de prueba.xlsx`: *Precondiciones, Datos de prueba, Pasos numerados `1..N` y Resultado esperado*) y los **ensayos no funcionales (`PNF-001` a `PNF-008`)** vinculados a los 19 RNF.

| Nivel de prueba | Alcance principal | Herramientas previstas | Requisitos cubiertos |
| --- | --- | --- | --- |
| **1. Unitarias de dominio** | Invariantes de `Solicitud`, `Oferta`, `Pedido`, `RevisionResultado`, `Entrega`, `ProductoMaker`, `Valoracion` y `MembresiaMaker`; cálculo de vigencia (`30d` general vs `90d` fundador no acumulable). | `pytest` | `RF-02.2`, `RF-02.5`, `RF-04.2`, `RF-06.3`, `RF-06.4`, `RF-12.2`, `RF-12.3`, `RF-12.10`, `RF-13.1`, `RF-15.1` |
| **2. Integración (API, BD y adaptadores)** | Contratos HTTP REST (`/api/v1`), persistencia en PostgreSQL/PostGIS (`58 tablas`), almacenamiento privado (`INT-03`), geocodificación (`INT-02`) y Checkout Pro (`INT-01`) / simulador (`INT-06`). | `pytest` + `httpx.AsyncClient` + PostgreSQL | `RF-01.1` a `RF-17.1`, `RNF-09`, `RNF-10`, `RNF-14`, `RNF-15` |
| **3. Concurrencia e idempotencia** | Aceptación simultánea de ofertas, consumo concurrente de cupo fundador y webhooks repetidos de pago de abono. | `pytest-asyncio` | `RF-04.4`, `RF-12.3`, `RF-12.6`, `RF-12.8`, `RNF-05`, `RNF-09` |
| **4. Seguridad y control de acceso** | Autorización por rol y pertenencia al recurso, enlaces temporales de archivos privados, privacidad de domicilio exacto y validación de firma de webhook. | Suite de casos negativos de API | `RF-09.2`, `RF-10.1..10.4`, `RNF-04`, `RNF-06`, `RNF-16` |
| **5. E2E y ensayos no funcionales (`PERF-01`)** | Recorridos completos en Web (`WEB-*`) y Mobile (`MOB-*`), disponibilidad, rendimiento de matching y restauración de backup. | Playwright, Maestro/Detox, k6 | `RNF-01` a `RNF-19` |

---

## Catálogo de ensayos no funcionales (`PNF-001` a `PNF-008`)

<a id="pnf-001"></a>
### PNF-001 — Monitoreo de disponibilidad continua en ventana de evaluación (`RNF-01`, `RNF-07`)
- **Meta propuesta (`PERF-01`):** `>= 99%` en ventana continua de 24 h con sondas cada 60 s sobre `/health/ready`.
- **Resultado esperado:** El healthcheck comprueba conectividad real a PostgreSQL y dependencias críticas; una caída de base de datos devuelve `503 Service Unavailable` y nunca un éxito ficticio.

<a id="pnf-002"></a>
### PNF-002 — Rendimiento de búsqueda geoespacial y filtrado de makers compatibles (`RNF-02`, `RNF-03`)
- **Meta propuesta (`PERF-01`):** `p95 <= 2.0 s` y `< 1%` de errores técnicos con dataset de `200 makers`.
- **Resultado esperado:** Filtrado exacto por capacidad técnica, distancia y membresía vigente dentro del umbral de latencia.

<a id="pnf-003"></a>
### PNF-003 — Degradación controlada ante indisponibilidad de proveedores externos (`RNF-15`, `RNF-07`)
- **Procedimiento:** Inyección de fallas/timeouts en adaptadores `INT-01` a `INT-04`.
- **Resultado esperado:** El hecho de negocio local y el evento en `outbox_eventos` se preservan; la falla externa queda registrada para reintento o alternativa manual sin corromper estados.

<a id="pnf-004"></a>
### PNF-004 — Cumplimiento de contrato OpenAPI y paridad funcional Web/Mobile (`RNF-14`, `RNF-17`, `RF-11.1`, `RF-11.2`)
- **Resultado esperado:** `100%` de respuestas conformes al esquema de la API común y sincronización consistente de estados entre Web y Mobile.

<a id="pnf-005"></a>
### PNF-005 — Protección contra abuso de tasa (*rate limiting*) y payloads fuera de límite (`RNF-16`, `RNF-04`)
- **Resultado esperado:** Respuesta controlada `429 Too Many Requests` o `413 Content Too Large` sin degradar el servicio para otros usuarios autenticados.

<a id="pnf-006"></a>
### PNF-006 — Accesibilidad, claridad de estados y advertencias comerciales en UI (`RNF-08`, `RNF-12`, `RF-12.15`)
- **Resultado esperado:** Comprensión sin ambigüedad de estados, carácter orientativo de la estimación inicial, pago directo del pedido al maker y regla de no aprobación por silencio.

<a id="pnf-007"></a>
### PNF-007 — Retención, retiro de archivos privados y borrado/anonimización de datos personales (`RNF-11`, `RF-10.4`)
- **Resultado esperado:** Revocación efectiva de acceso a archivos retirados/vencidos y preservación exclusiva de registros de auditoría requeridos.

<a id="pnf-008"></a>
### PNF-008 — Reproducción limpia del entorno y restauración de backup de base de datos (`RNF-18`, `RNF-19`)
- **Resultado esperado:** Levante reproducible con las 58 tablas del modelo lógico y restauración íntegra de `pg_dump` verificada por conteo de filas y claves foráneas.

---

## Fichas detalladas paso a paso (`CP-001` a `CP-028` — Plantilla de cátedra)

<a id="cp-001"></a>
### CP-001 — Registro exitoso de nuevo usuario y asignación de rol inicial (`CU-13` · `RF-01.1`, `RF-01.3`, `RNF-12`)
- **Precondiciones:** Servicio de identidad disponible; el correo `cliente.demo01@test.3daltoque.local` no está registrado en `usuarios`.
- **Datos de entrada:** `nombre: "Lucía Gómez"`, `email: "cliente.demo01@test.3daltoque.local"`, `password: "Demo3D!2026"`, `rol: "CLIENTE"`, `zona: "Caballito, CABA"`, `acepta_terminos: true`.
- **Pasos:** 1) Abrir `WEB-AUTH-02` / `MOB-AUTH-02`. 2) Elegir rol `Cliente`. 3) Completar datos y aceptar términos. 4) Enviar registro (`POST /auth/registro`).
- **Resultado esperado:** `201 Created`; usuario creado en `usuarios` y `usuario_roles`, términos registrados e ingreso autenticado. (`Estado: Planificado`).

<a id="cp-002"></a>
### CP-002 — Inicio de sesión con credenciales inválidas y control de bloqueo (`CU-13` · `RF-01.4`, `RNF-04`, `RNF-16`)
- **Precondiciones:** Cuenta activa existente.
- **Datos de entrada:** Correo válido + contraseña incorrecta repetida por encima del umbral permitido.
- **Pasos:** 1) Enviar credenciales inválidas en `WEB-AUTH-01`. 2) Repetir en ráfaga superando el límite por ventana.
- **Resultado esperado:** `401 Unauthorized` sin filtrar existencia del correo; al superar el umbral responde `429 Too Many Requests` y registra evento de seguridad. (`Estado: Planificado`).

<a id="cp-003"></a>
### CP-003 — Publicación de solicitud válida con archivo STL y ubicación aproximada (`CU-01`, `CU-24` · `RF-02.1`, `RF-02.3`, `RF-09.1`, `RF-10.1`, `RF-10.2`)
- **Precondiciones:** Cliente autenticado y almacenamiento privado (`INT-03`) disponible.
- **Datos de entrada:** `soporte_sensor_v2.stl` (`4.2 MB`), `material: "PETG"`, `cantidad: 2`, `ubicacion: "Almagro, CABA"`.
- **Pasos:** 1) Autorizar y subir `soporte_sensor_v2.stl`. 2) Completar parámetros técnicos y confirmar ubicación en `WEB-SOL-01` / `MOB-SOL-01`. 3) Confirmar envío de la solicitud.
- **Resultado esperado:** Archivo habilitado en `archivos` sin URL pública libre; solicitud creada en `solicitudes` + `solicitud_versiones`; ronda de invitaciones generada. (`Estado: Planificado`).

<a id="cp-004"></a>
### CP-004 — Rechazo de publicación de solicitud con campos obligatorios faltantes (`CU-01` · `RF-02.3`, `RNF-08`)
- **Datos de entrada:** Descripción vacía, cantidad `0` y sin ubicación confirmada.
- **Pasos:** 1) Intentar enviar el formulario incompleto en `WEB-SOL-01`.
- **Resultado esperado:** Rechazo `422` detallando los campos faltantes, conservando el borrador sin crear registros parciales. (`Estado: Planificado`).

<a id="cp-005"></a>
### CP-005 — Rechazo de carga de archivo por formato no permitido o exceso de tamaño (`CU-01`, `CU-24` · `RF-02.2`, `RF-10.1`, `RNF-16`)
- **Datos de entrada:** Ejecutable renombrado a `.stl` y archivo de `250 MB` que excede la cuota máxima.
- **Pasos:** 1) Solicitar autorización de carga o validación sobre ambos archivos.
- **Resultado esperado:** Rechazo antes de habilitar el archivo; no se asocia a la solicitud ni queda accesible. (`Estado: Planificado`).

<a id="cp-006"></a>
### CP-006 — Cálculo de estimación orientativa marcada como no vinculante (`CU-01` · `RF-02.5`, `RNF-08`)
- **Datos de entrada:** Pieza `.STL` válida de `28.5 cm3`, material `PLA`, cantidad `2`.
- **Pasos:** 1) Consultar la estimación generada en `WEB-SOL-01` / `WEB-SOL-02`.
- **Resultado esperado:** Se informa rango orientativo, método y supuestos, advirtiendo expresamente que no es una cotización final vinculante. (`Estado: Planificado`).

<a id="cp-007"></a>
### CP-007 — Matching de solicitud hacia makers compatibles con membresía vigente (`CU-01`, `CU-02` · `RF-03.1`, `RF-03.2`, `RF-12.10`)
- **Precondiciones:** `Maker A` (compatible + membresía activa), `Maker B` (compatible + Fundador en prueba), `Maker C` (material incompatible) y `Maker D` (compatible pero membresía vencida).
- **Pasos:** 1) Publicar solicitud en radio de búsqueda. 2) Consultar invitaciones generadas.
- **Resultado esperado:** Solo `Maker A` y `Maker B` reciben la invitación; `Maker C` se excluye por capacidad y `Maker D` por membresía vencida (`RF-12.10`). (`Estado: Planificado`).

<a id="cp-008"></a>
### CP-008 — Emisión y actualización versionada de oferta por maker elegible (`CU-02`, `CU-25` · `RF-04.1`, `RF-04.2`, `RF-04.5`, `RF-04.6`)
- **Datos de entrada:** Oferta v1 (`$18.500 ARS`, `3 días`) y actualización a Oferta v2 (`$17.000 ARS`, `2 días`).
- **Pasos:** 1) Emitir Oferta v1 desde `WEB-OFE-01`. 2) Publicar nueva versión v2 antes de que el cliente acepte.
- **Resultado esperado:** Se registra `oferta_versiones` v2 como única vigente conservando v1 en el historial auditable. (`Estado: Planificado`).

<a id="cp-009"></a>
### CP-009 — Bloqueo de emisión de oferta para maker no invitado o con membresía vencida (`CU-02`, `CU-08` · `RF-04.1`, `RF-12.4`, `RF-12.10`)
- **Pasos:** 1) Intentar publicar oferta con cuenta cuya membresía venció según el reloj del servidor.
- **Resultado esperado:** Operación rechazada (`403 Forbidden`); no se persiste la oferta y se dirige a renovar abono (`CU-11`). (`Estado: Planificado`).

<a id="cp-010"></a>
### CP-010 — Aceptación de oferta vigente, creación de pedido único y cierre de competidoras (`CU-03` · `RF-04.3`, `RF-04.4`, `RF-05.3`, `RF-12.15`)
- **Precondiciones:** Solicitud abierta con dos ofertas vigentes (`OF-01` v2 y `OF-02` v1).
- **Pasos:** 1) Comparar ofertas en `WEB-OFE-02`. 2) Confirmar la versión vigente de `OF-01` en `WEB-PED-01`.
- **Resultado esperado:** En una sola transacción atómica se crea un único registro en `pedidos` con condiciones congeladas, `OF-01` pasa a `ACEPTADA`, `OF-02` se cierra y se habilita la conversación del pedido (`CU-14`). (`Estado: Planificado`).

<a id="cp-011"></a>
### CP-011 — Rechazo al intentar aceptar una oferta vencida o cuya versión fue reemplazada (`CU-03` · `RF-04.2`, `RF-04.4`)
- **Pasos:** 1) Intentar aceptar `OF-01` indicando `version = 1` cuando la vigente es `version = 2`, o una oferta cuya validez ya expiró.
- **Resultado esperado:** Rechazo `409 Conflict` sin crear pedido; se presentan las condiciones actualizadas. (`Estado: Planificado`).

<a id="cp-012"></a>
### CP-012 — Control de concurrencia ante dos intentos simultáneos de aceptación sobre la misma solicitud (`CU-03` · `RF-04.4`, `RNF-05`)
- **Pasos:** 1) Disparar dos peticiones paralelas de aceptación sobre la misma solicitud abierta.
- **Resultado esperado:** Como máximo se confirma un único pedido; la petición concurrente recibe conflicto o el resultado idempotente si corresponde a la misma clave. (`Estado: Planificado`).

<a id="cp-013"></a>
### CP-013 — Avance de producción, carga de evidencia privada y paso a revisión (`CU-04`, `CU-24` · `RF-06.1`, `RF-06.2`, `RF-06.5`, `RF-10.2`)
- **Pasos:** 1) El maker actualiza el pedido a `EN_PRODUCCION`. 2) Sube fotos privadas de la pieza terminada y presenta la revisión (`WEB-PED-03`).
- **Resultado esperado:** Evidencia privada vinculada a `revisiones_resultado`; pedido pasa a `EN_REVISION` y se notifica al cliente. (`Estado: Planificado`).

<a id="cp-014"></a>
### CP-014 — Conversación contextual del pedido y bloqueo de acceso a terceros no participantes (`CU-14`, `CU-24` · `RF-05.1`, `RF-05.2`, `RF-10.3`, `RNF-04`)
- **Pasos:** 1) Cliente y maker intercambian mensajes y adjuntos en el pedido. 2) Un tercer usuario intenta leer la conversación o descargar la evidencia/STL.
- **Resultado esperado:** Mensajes persistidos para los participantes; acceso denegado (`403/404`) para terceros sin revelar contenido. (`Estado: Planificado`).

<a id="cp-015"></a>
### CP-015 — Aprobación expresa de la evidencia por el cliente y habilitación de entrega (`CU-05` · `RF-06.3`, `RF-05.3`)
- **Pasos:** 1) El cliente inspecciona la evidencia vigente en `WEB-REV-01` / `MOB-REV-01` y confirma `"Aprobar resultado"`.
- **Resultado esperado:** `decisiones_revision` registra `APROBADA` referenciando la revisión exacta y se desbloquea la coordinación de entrega (`CU-06`). (`Estado: Planificado`).

<a id="cp-016"></a>
### CP-016 — Bloqueo de coordinación de entrega cuando la evidencia aún no fue aprobada (`CU-05`, `CU-06` · `RF-06.3`, `RF-06.6`, `RNF-05`)
- **Pasos:** 1) Intentar coordinar o completar la entrega de un pedido cuya revisión está pendiente u observada.
- **Resultado esperado:** Rechazo `409 Conflict`; la entrega permanece bloqueada hasta contar con aprobación expresa. (`Estado: Planificado`).

<a id="cp-017"></a>
### CP-017 — Registro de observaciones sobre la evidencia y nuevo ciclo de revisión (`CU-05` · `RF-06.3`, `RF-05.3`)
- **Pasos:** 1) El cliente registra observaciones detalladas sobre la evidencia presentada.
- **Resultado esperado:** La revisión queda `OBSERVADA` conservando el motivo e historial, y habilita al maker a presentar una nueva revisión corregida (`n + 1`). (`Estado: Planificado`).

<a id="cp-018"></a>
### CP-018 — Silencio del cliente ante revisión pendiente: envío de recordatorio sin aprobación automática (`CU-05`, `CU-23` · `RF-06.4`, `RF-07.4`)
- **Pasos:** 1) Avanzar el reloj de prueba sobre una revisión sin respuesta del cliente y ejecutar el proceso de recordatorios.
- **Resultado esperado:** Se genera recordatorio al cliente, pero la revisión **jamás** pasa a `APROBADA` automáticamente por silencio (`RF-06.4`). (`Estado: Planificado`).

<a id="cp-019"></a>
### CP-019 — Coordinación de entrega personal en punto de encuentro y confirmación de recepción (`CU-06` · `RF-06.6`, `RF-06.7`)
- **Pasos:** 1) Proponer y aceptar punto de encuentro neutral y horario en `WEB-ENT-01`. 2) Confirmar la recepción con la identidad del cliente en `WEB-ENT-02`.
- **Resultado esperado:** Acuerdo de entrega conservado; recepción única registrada, pedido finalizado y valoración (`CU-16`) habilitada. (`Estado: Planificado`).

<a id="cp-020"></a>
### CP-020 — Preservación de privacidad del domicilio exacto del maker en mapas y búsquedas (`CU-01`, `CU-06`, `CU-21` · `RF-09.1`, `RF-09.2`, `RNF-04`)
- **Pasos:** 1) Consultar endpoints de búsqueda, ofertas y entrega con una cuenta de cliente.
- **Resultado esperado:** Solo se exponen zona aproximada, distancia y puntos autorizados; el domicilio privado del maker nunca se expone. (`Estado: Planificado`).

<a id="cp-021"></a>
### CP-021 — Primera habilitación del perfil maker e inicio de prueba gratuita general de 30 días (`CU-09`, `CU-08` · `RF-01.2`, `RF-12.2`, `RF-12.4`)
- **Pasos:** 1) Completar capacidades e impresoras en `WEB-MKR-01` y solicitar primera habilitación. 2) Editar el perfil posteriormente.
- **Resultado esperado:** Se concede por única vez el período gratuito inicial (`30 días` generales) sin pedir tarjeta; ediciones posteriores no reinician ni duplican el beneficio. (`Estado: Planificado`).

<a id="cp-022"></a>
### CP-022 — Asignación administrativa del beneficio `Makers Fundadores` (`90 días` totales no acumulables) (`CU-10` · `RF-12.3`, `RF-12.13`, `RF-12.15`)
- **Pasos:** 1) Administración asigna plaza de fundador con motivo en `WEB-ADM-MEM-01`. 2) Probar también intento concurrente cuando queda 1 sola plaza en el cupo.
- **Resultado esperado:** El beneficio fundador otorga `90 días` totales (reemplazando los 30 días, sin sumar 120), audita la asignación y respeta estrictamente el cupo máximo. (`Estado: Planificado`).

<a id="cp-023"></a>
### CP-023 — Pago manual de abono mensual por Checkout Pro y activación tras verificación del servidor (`CU-11` · `RF-12.5` a `RF-12.9`)
- **Pasos:** 1) Crear compra de abono e iniciar Checkout Pro (`WEB-MEM-02`). 2) Regresar por navegador antes del webhook. 3) Procesar notificación verificada contra Mercado Pago.
- **Resultado esperado:** El retorno del navegador no activa el acceso; recién tras verificar el pago `approved` servidor a servidor se concede un único `PeriodoAcceso`. (`Estado: Planificado`).

<a id="cp-024"></a>
### CP-024 — Idempotencia ante webhook de pago repetido y rechazo de webhook inválido (`CU-11` · `RF-12.6`, `RF-12.8`, `RNF-09`)
- **Pasos:** 1) Enviar nuevamente el mismo evento webhook de un pago ya acreditado. 2) Enviar un webhook con firma inválida.
- **Resultado esperado:** El evento repetido no suma otro período ni duplica registros; el webhook inválido es rechazado sin efectos. (`Estado: Planificado`).

<a id="cp-025"></a>
### CP-025 — Continuidad operativa de pedidos activos cuando vence la membresía del maker (`CU-08`, `CU-04`, `CU-06`, `CU-14` · `RF-12.10`)
- **Pasos:** 1) Con la membresía del maker ya `VENCIDA`, intentar ofertar en una solicitud nueva. 2) Con la misma cuenta, conversar, subir evidencia y coordinar entrega en un pedido que ya estaba confirmado antes del vencimiento.
- **Resultado esperado:** Se bloquean nuevas ofertas, pero el pedido confirmado previo conserva toda su operatoria hasta completarse (`RF-12.10`). (`Estado: Planificado`).

<a id="cp-026"></a>
### CP-026 — Actualización administrativa del plan de membresía sin afectar períodos ya concedidos (`CU-12` · `RF-12.1`, `RF-12.12`, `RF-12.13`, `RNF-13`)
- **Pasos:** 1) Publicar una nueva versión del plan con nuevo importe y motivo en `WEB-ADM-MEM-01`.
- **Resultado esperado:** Las compras futuras usan la nueva versión; las compras y períodos en curso conservan sus condiciones originales inalteradas. (`Estado: Planificado`).

<a id="cp-027"></a>
### CP-027 — Separación estricta entre cobro simulado (`demo`) y cobro real de membresía (`CU-11` · `RF-12.14`, `RNF-10`)
- **Pasos:** 1) Ejecutar compra en modo simulado en entorno demo. 2) Intentar usar simulación en entorno no permitido.
- **Resultado esperado:** En demo se etiqueta visiblemente como simulado y se separa de pagos reales; fuera del entorno demo la simulación es rechazada. (`Estado: Planificado`).

<a id="cp-028"></a>
### CP-028 — Moderación administrativa, catálogo directo y reputación post-entrega (`CU-07`, `CU-16`, `CU-19`, `CU-20` · `RF-07.2`, `RF-13.1..13.4`, `RF-15.1..15.3`, `RNF-06`)
- **Pasos:** 1) Confirmar pedido directo de producto publicado vigente (`CU-20`). 2) Emitir valoración una vez entregado el pedido (`CU-16`). 3) Ejecutar moderación administrativa con motivo (`CU-07`).
- **Resultado esperado:** El pedido directo congela condiciones de la versión publicada; solo pedidos entregados admiten una valoración por parte; toda moderación exige permiso y queda auditada. (`Estado: Planificado`).

