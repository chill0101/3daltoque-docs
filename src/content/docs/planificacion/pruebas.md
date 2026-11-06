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

El [plan de pruebas](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) define 161 CP planificados, datos y resultados esperados. Cubre los 68 RF y los 25 CU con pruebas principales, alternativas e integración. La ejecución requiere la implementación y un entorno identificable.

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

Además del [catálogo completo de 161 escenarios planificados](/3daltoque-docs/analisis/pruebas-y-trazabilidad/), este documento incluye las **fichas detalladas de casos de prueba (`CP-001` a `CP-029`)** con la estructura completa de la planilla de cátedra (`Ejemplo de Casos de prueba.xlsx`: *Precondiciones, Datos de prueba, Pasos numerados `1..N` y Resultado esperado*) y los **ensayos no funcionales (`PNF-001` a `PNF-008`)** vinculados a los 19 RNF.

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
- **Precondiciones:** Servicio accesible y release registrado; sonda externa independiente.
- **Datos y entorno:** 1.440 sondas cada 60 s, 24 h, reloj y límites de recursos conservados.
- **Procedimiento reproducible:** Iniciar sonda; registrar cada estado y duración; inyectar caída de PostgreSQL durante una ventana registrada; restaurar servicio y calcular proporción de respuestas válidas.
- **Criterio de aceptación:** Al menos 99% de sondas satisfactorias; liveness permanece separada de readiness.
- **Evidencia:** Perfil PERF-01, release, fecha, resultados crudos y conclusión por criterio.
- **Meta propuesta (`PERF-01`):** `>= 99%` en ventana continua de 24 h con sondas cada 60 s sobre `/health/ready`.
- **Resultado esperado:** El healthcheck comprueba conectividad real a PostgreSQL y dependencias críticas; una caída de base de datos devuelve `503 Service Unavailable` y nunca un éxito ficticio.

<a id="pnf-002"></a>
### PNF-002 — Rendimiento de búsqueda geoespacial y filtrado de makers compatibles (`RNF-02`, `RNF-03`)
- **Precondiciones:** Dataset de PERF-01 e índices de migración aplicados; caché y proveedores identificados.
- **Datos y entorno:** 50 makers sintéticos en el escenario base y 200 en el ensayo de escalabilidad. Ejecutar el ensayo con diez usuarios concurrentes y tres series de quince minutos después del calentamiento.
- **Procedimiento reproducible:** Comprobar el conteo de makers y configurar diez usuarios concurrentes. Registrar el volumen y la concurrencia efectiva de cada serie. Ejecutar la búsqueda por capacidad y distancia, contrastar los candidatos con el resultado de referencia y medir el p95 en el cliente. Registrar percentiles y errores por escala. Repetir con los mismos recursos.
- **Criterio de aceptación:** El p95 de búsqueda debe ser de hasta 2 segundos y los candidatos deben ser correctos en las escalas del ensayo. Registrar la tasa de errores técnicos con la referencia de menos del 1 % de PERF-01.
- **Evidencia:** Perfil PERF-01, release, fecha, resultados crudos y conclusión por criterio.
- **Resultado esperado:** Filtrado exacto por capacidad técnica, distancia y membresía vigente dentro del umbral de latencia.

<a id="pnf-003"></a>
### PNF-003 — Degradación controlada ante indisponibilidad de proveedores externos (`RNF-15`, `RNF-07`)
- **Precondiciones:** Pedido y compra de prueba identificados; adaptadores con inyección de fallas.
- **Datos y entorno:** INT-01..INT-04; timeout, 503 externo y respuesta incierta; reintentos con la misma clave.
- **Procedimiento reproducible:** Provocar cada falla; inspeccionar estado local y eventos_salida; recuperar proveedor; procesar trabajo pendiente; verificar unicidad de efectos.
- **Criterio de aceptación:** Hecho local conservado; reintento acotado; un efecto externo por intención; alternativa manual o lista de ubicación disponible.
- **Evidencia:** Perfil PERF-01, release, fecha, resultados crudos y conclusión por criterio.
- **Procedimiento:** Inyección de fallas/timeouts en adaptadores `INT-01` a `INT-04`.
- **Resultado esperado:** El hecho de negocio local y el evento en `eventos_salida` se preservan; la falla externa queda registrada para reintento o alternativa manual sin corromper estados.

<a id="pnf-004"></a>
### PNF-004 — Cumplimiento de contrato OpenAPI y paridad funcional Web/Mobile (`RNF-14`, `RNF-17`, `RF-11.1`, `RF-11.2`)
- **Precondiciones:** Mismo release de API, Web y Mobile; usuarios y recursos equivalentes.
- **Datos y entorno:** Respuestas positivas y negativas de las 83 operaciones funcionales de la API. Recursos y usuarios equivalentes para comparar los flujos compartidos entre Web y Mobile.
- **Procedimiento reproducible:** Validar solicitudes y respuestas contra el contrato. Ejecutar el mismo flujo compartido con datos de partida equivalentes en Web y Mobile. Consultar el resultado desde el otro canal, invertir el orden y repetir con una sesión revocada.
- **Criterio de aceptación:** Todas las muestras cumplen su esquema. En cada flujo compartido se comprueban los mismos permisos, resultados y cambios de estado en Web y Mobile.
- **Evidencia:** Perfil PERF-01, release, fecha, resultados crudos y conclusión por criterio.
- **Resultado esperado:** El 100 % de las respuestas de la muestra cumple el esquema de la API común. Los flujos compartidos devuelven resultados y cambios de estado equivalentes en Web y Mobile.

Para comprobar las preferencias, configurar un tipo con ambos canales opcionales y otro con un canal obligatorio en el fixture. Cambiar un canal desde Web y consultar desde Mobile. Procesar avisos con app sola, correo solo, ambos activos y ambos desactivados. Comprobar el filtro antes de paginar y el rechazo al marcar como leído un registro solo por correo. Intentar cambiar el canal obligatorio y comprobar 403. Desactivar un correo opcional mientras sigue en cola y comprobar que el worker omita el intento. Confirmar un pedido personalizado y otro de catálogo con cuentas sin preferencias guardadas. Comprobar un aviso en la app y un correo por participante. En pedidos independientes, desactivar solo el correo del cliente y luego solo el del maker. Comprobar que ambos reciban el aviso en la app y que el correo se prepare para la cuenta con el canal activo. Repetir cada confirmación con su clave original y verificar que se conserven el evento y las entregas. Intentar desactivar la app desde ambas cuentas y comprobar 403 y la preferencia obligatoria activa.

<a id="pnf-005"></a>
### PNF-005 — Protección contra abuso de tasa (*rate limiting*) y payloads fuera de límite (`RNF-16`, `RNF-04`)
- **Precondiciones:** Límites del fixture publicados y cuentas de prueba aisladas.
- **Datos y entorno:** Payload en el máximo y con un byte de exceso. Cinco fallos para el mismo identificador en 60 segundos, un sexto intento y una nueva petición al salir el primer fallo de la ventana. Listado con al menos 101 elementos autorizados.
- **Procedimiento reproducible:** Ejecutar cada frontera y revisar el código y Retry-After cuando corresponda. Consultar el listado sin limit, con limit=100 y con limit=101. Repetir una consulta válida con otro usuario y comprobar que el estado se conserva.
- **Criterio de aceptación:** El listado devuelve 20 elementos por defecto y 100 con limit=100. limit=101 devuelve 422. El payload excesivo devuelve 413. El sexto intento de inicio de sesión devuelve 429 y Retry-After. El primer intento fuera de la ventana vuelve a evaluarse y las demás cuentas pueden seguir operando.
- **Evidencia:** Perfil PERF-01, release, fecha, resultados crudos y conclusión por criterio.
- **Resultado esperado:** Las consultas dentro de los límites reciben la página solicitada. Los excesos devuelven 413, 422 o 429 según el criterio de aceptación.

<a id="pnf-006"></a>
### PNF-006 — Accesibilidad, claridad de estados y advertencias comerciales en UI (`RNF-08`, `RNF-12`, `RF-12.15`)
- **Precondiciones:** Pantallas críticas disponibles en ambos temas; navegador y dispositivo registrados.
- **Datos y entorno:** Alta, solicitud, oferta, pedido, chat, revisión y abono; teclado, lector de pantalla y herramienta de contraste.
- **Procedimiento reproducible:** Recorrer por teclado; verificar orden/foco y nombre accesible; provocar errores; medir contraste de textos y controles; comprobar avisos de precio y revisión.
- **Criterio de aceptación:** Foco visible y operación completa; textos cumplen umbrales de PERF-01; errores identificados por texto y asociados al control.
- **Evidencia:** Perfil PERF-01, release, fecha, resultados crudos y conclusión por criterio.
- **Resultado esperado:** Comprensión sin ambigüedad de estados, carácter orientativo de la estimación inicial, pago directo del pedido al maker y regla de no aprobación por silencio.

<a id="pnf-007"></a>
### PNF-007 — Retención, retiro de archivos privados y borrado/anonimización de datos personales (`RNF-04`, `RNF-06`, `RNF-11`, `RF-05.1`, `RF-05.2`, `RF-05.4`, `RF-06.1`, `RF-10.3`, `RF-10.4`, `RF-16.1`, `RF-02.4`, `RF-13.1`)
- **Precondiciones:** Archivo privado autorizado, URL temporal emitida y política de conservación identificada.
- **Datos y entorno:** Titular, participante autorizado y tercero. Enlace emitido en un instante conocido. Descargas iniciadas a los 299 y 300 segundos. Archivos huérfanos con instantes de inicio conocidos, un archivo vuelto a vincular y otro protegido por conservación. Retiro y solicitud de anonimización. Pedidos completados con mensajes, evidencias de revisión o entrega y fecha de cierre conocida. Preparar uno sin excepción, uno con reclamo abierto y otro con obligación legal vigente.
- **Procedimiento reproducible:** Consultar con cada identidad. Con reloj controlado, iniciar la descarga a los 299 y 300 segundos. Solicitar un enlace nuevo con permiso vigente y repetir la solicitud después del retiro. Ejecutar la limpieza justo antes de los siete días y al cumplirse el plazo. Comprobar los objetos vueltos a vincular y protegidos. Reintentar una limpieza sobre la misma versión. Consultar el listado y detalle de pedidos antes y al cumplir los 12 meses desde el cierre. En ambos instantes, comprobar la bandeja, la apertura del chat, la lectura, el envío, los reintentos y la recuperación de eventos. Solicitar un enlace a la evidencia antes y al cumplirse los 12 meses. Comprobar los datos, mensajes y evidencias conservados por cada excepción, sus permisos y el retiro al cesar la excepción. Ejecutar la política de anonimización y revisar la auditoría.
- **Criterio de aceptación:** La descarga se acepta a los 299 segundos y se rechaza desde los 300 segundos. La cuenta obtiene un enlace nuevo mientras conserva el permiso y el archivo sigue habilitado. El retiro impide nuevas autorizaciones. La limpieza conserva el huérfano antes del plazo y retira su objeto al cumplir siete días si sigue elegible. Los archivos vueltos a vincular o protegidos se conservan. Un reintento recupera el mismo resultado. El historial propio incluye el pedido antes de los 12 meses y lo excluye de listado y detalle al vencer. El chat sale de la bandeja al vencer. El backend rechaza apertura, lectura, envío y reintentos y excluye los eventos de la conversación. Al vencer el plazo de las evidencias, las consultas habituales dejan de emitir nuevos enlaces. Los enlaces ya emitidos vencen a los cinco minutos de su emisión. Los reclamos abiertos y obligaciones vigentes preservan únicamente los datos, mensajes y evidencias necesarios con acceso restringido. Al cesar la excepción, vuelve a aplicarse la regla de retiro. Se aplica la política de datos personales y se conservan las referencias de auditoría previstas.
- **Evidencia:** Perfil PERF-01, release, fecha, resultados crudos y conclusión por criterio.
- **Resultado esperado:** Vencimiento de enlaces y revocación de nuevas autorizaciones según el permiso vigente. Limpieza de objetos elegibles y conservación de archivos protegidos y de la auditoría requerida.

Para verificar el historial de pedidos cancelados, preparar tres pedidos con fecha de cancelación conocida. Usar uno sin excepción, uno con reclamo abierto y otro con obligación legal vigente. Con reloj controlado, consultar como cliente y maker el listado y el detalle inmediatamente antes del vencimiento y al cumplir 12 meses desde la cancelación. Repetir la consulta paginada con un cursor emitido antes del vencimiento. Al llegar al plazo, las consultas habituales excluyen los tres pedidos. Solo el personal autorizado accede a los datos necesarios para cada excepción. Al cesar la excepción, el retiro usa la fecha de cancelación original.

Para verificar el retiro de borradores, preparar un guardado inicial, una edición confirmada cerca del límite y una variante que siga en borrador sin edición. Comprobar que el plazo de 90 días empiece en cada guardado confirmado. Consultar el detalle y la estimación, editar y enviar justo antes y al cumplir el plazo, usando copias independientes. Al vencer, las consultas y los intentos de editar o enviar devuelven 404. Coordinar un guardado vigente o un envío con el retiro para verificar que el worker revalide estado y plazo. Al enviar válidamente, la solicitud usa los siete días de PD-05. Si un archivo queda huérfano por el retiro del borrador, el plazo de limpieza de siete días empieza cuando pierde la última referencia.

Para verificar el retiro de borradores del catálogo, preparar un borrador sin ediciones, otro con un guardado confirmado cerca del límite y un producto publicado. Consultar Mis productos y repetir la consulta con un cursor anterior. Comprobar que la ruta fija use el perfil maker de la sesión y que la ruta con identificador mantenga su consulta pública. Justo antes de vencer, el borrador es visible y admite edición o publicación. Al vencer, queda fuera del listado y la API responde 404 a ambas mutaciones. Coordinar una edición o publicación vigente con el retiro y comprobar que el worker revalide estado y plazo. El producto publicado y los archivos con otras referencias se conservan. Los archivos que quedan huérfanos pasan a limpieza tras siete días sin referencias.

Para verificar el historial de solicitudes personalizadas enviadas que vencen sin pedido, usar tres solicitudes con `expira_en` conocido, ofertas e invitaciones. Preparar una sin excepción, otra con reclamo abierto y otra con obligación legal vigente. Con reloj controlado, consultar detalle, estimación y ofertas como titular, e invitaciones como maker autorizado, justo antes y al cumplirse 12 meses desde `expira_en`. Repetir la consulta de eventos con un cursor anterior al límite. Al vencer, se retiran los datos de las consultas habituales. Solo el personal autorizado accede a los datos necesarios de las excepciones. En una variante a los 90 días, comprobar que el detalle sigue disponible y que el STL aplica su propio plazo.

Para verificar los mensajes de pedidos cancelados, preparar tres conversaciones con mensajes previos y fecha de cancelación conocida. Asociar un reclamo abierto a una, una obligación legal vigente a otra y dejar la tercera sin excepción. Consultar como cliente y maker la bandeja y el historial de mensajes justo antes del vencimiento y al cumplirse 12 meses desde la cancelación. En el vencimiento, la bandeja excluye las tres conversaciones y los accesos directos, envíos, reintentos y eventos del chat quedan fuera del acceso habitual, incluso con un cursor o clave anteriores. El personal autorizado recupera solo los mensajes necesarios de cada excepción. Al cesar la excepción, el retiro usa la fecha de cancelación original.

Para verificar los adjuntos, usar pedidos completados y cancelados con fecha terminal conocida. Preparar variantes con reclamo abierto, obligación legal vigente y sin excepción. Solicitar descargas desde el chat y directamente por identificador antes y al cumplirse los 12 meses desde el cierre o la cancelación. Verificar que los participantes obtengan enlaces antes del vencimiento y que la consulta habitual deje de emitirlos al vencer. Comprobar el vencimiento de los enlaces ya emitidos a los cinco minutos de su emisión. El acceso por excepción se limita a los adjuntos necesarios y termina al cesar la excepción. Si otro recurso autorizado referencia el mismo objeto, su acceso sigue su propia finalidad, permisos y plazo.

Para verificar evidencias de pedidos cancelados, preparar fotos y archivos de revisión o entrega con fecha de cancelación conocida. Usar variantes sin excepción, con reclamo abierto y con obligación legal vigente. Como participante, solicitar enlaces desde el pedido y directamente por identificador de archivo antes del vencimiento y al cumplirse los 12 meses. Al vencer el plazo se retira el acceso habitual en ambos recorridos. Los enlaces ya emitidos vencen a los cinco minutos de su emisión. Verificar que el acceso restringido recupere solo las versiones necesarias para atender cada excepción y que cese cuando termine. Si otro recurso autorizado referencia el mismo objeto, conserva el acceso según su propia finalidad y plazo.

Para verificar el STL original, usar pedidos completados y cancelados con fecha terminal conocida. Preparar variantes sin excepción, con reclamo abierto y con obligación legal vigente. Solicitar enlaces desde el pedido, la solicitud original y por identificador de archivo justo antes y al cumplir 90 días desde el cierre o la cancelación. Verificar que el participante obtenga un enlace antes del vencimiento y que la consulta habitual deje de emitirlos en los tres recorridos al vencer. Comprobar que los enlaces ya emitidos venzan a los cinco minutos de su emisión. Al cesar una excepción, aplicar el retiro con la fecha terminal original. Comprobar que el acceso por excepción se limite al personal autorizado y que la limpieza conserve los metadatos históricos y los objetos con referencias vigentes.

Para verificar el STL de solicitudes vencidas sin pedido, preparar variantes con `expira_en` conocido, versiones con referencias de STL y un cierre registrado después del vencimiento. Usar variantes sin excepción, con reclamo abierto y con obligación legal vigente. Solicitar enlaces desde la solicitud y por identificador de archivo justo antes y al cumplirse 90 días desde `expira_en`. Los permisos vigentes habilitan la descarga antes del límite y la consulta habitual deja de emitir enlaces al cumplirlo. Verificar que el acceso por excepción se limite al archivo necesario, que el retiro conserve los metadatos históricos y que otras referencias vigentes al mismo objeto sigan su propio plazo.

Para verificar auditoría, preparar tres registros de acciones con fecha conocida. Asociar uno a un reclamo abierto, otro a una obligación legal vigente y dejar el tercero sin excepción. Ejecutar el retiro antes y al cumplirse los 12 meses desde cada acción. Verificar que el registro sin excepción solo se retire al vencer el plazo y que los registros protegidos conserven su contenido y queden accesibles únicamente mediante el permiso aplicable. Al cesar cada excepción, volver a ejecutar el retiro con la fecha original de la acción.

<a id="pnf-008"></a>
### PNF-008 — Reproducción limpia del entorno, restauración y retención de respaldos (`RNF-11`, `RNF-18`, `RNF-19`)
- **Precondiciones:** Release, configuración, migraciones y manifiesto de respaldo disponibles en entorno aislado.
- **Datos y entorno:** Base de 58 tablas y objetos del fixture. Copia con hashes y hora. PERF-01 fija un RPO de 24 horas y un RTO de cuatro horas.
- **Procedimiento reproducible:** Preparar un entorno limpio con las migraciones y el fixture. Generar un respaldo y registrar la hora del incidente simulado. Restaurar la base y los objetos en un destino separado. Identificar el punto consistente recuperado, calcular su antigüedad respecto del incidente y verificar filas, claves foráneas, hashes y permisos. Ejecutar los recorridos de acceso, consulta de pedido y membresía. Registrar la hora en que se verifican y calcular el tiempo desde el incidente simulado.
- **Criterio de aceptación:** El arranque es reproducible y la restauración recupera un estado consistente de hasta 24 horas antes del incidente simulado. Los recorridos críticos quedan verificados dentro de las cuatro horas posteriores al incidente simulado. El informe registra el punto recuperado, el tiempo total y los objetos verificados.
- **Evidencia:** Perfil PERF-01, release, fecha, resultados crudos y conclusión por criterio.
- **Resultado esperado:** Arranque reproducible con las 58 tablas del modelo lógico y restauración íntegra de `pg_dump` verificada por conteo de filas y claves foráneas.

Para comprobar la retención, preparar dos copias con fechas de generación conocidas y un objeto referenciado por ambas. Ejecutar la rotación con reloj controlado justo antes y al cumplirse los 30 días de la primera. Verificar que siga disponible antes del vencimiento y que al vencer se retiren la copia del catálogo de restauración y sus artefactos exclusivos. Comprobar que la segunda siga recuperable con el objeto compartido. Para comprobar la vigencia de los permisos, preparar un dato presente en la segunda copia que haya sido retirado después de generarla. Restaurar en un destino aislado y verificar que el servicio aplique ese retiro y los permisos vigentes antes de habilitar consultas.

---

## Fichas detalladas paso a paso (`CP-001` a `CP-029` — Plantilla de cátedra)

<a id="cp-001"></a>
### CP-001 — Registro exitoso de nuevo usuario y asignación de rol inicial (`CU-13` · `RF-01.1`, `RF-01.3`, `RNF-12`)
- **Datos de prueba:** Correo nuevo cliente.demo01@test.3daltoque.local; rol CLIENTE; acepta_terminos=true. Fixture específico CP-001 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** partición de equivalencia.
- **Correspondencia con cobertura:** `CP-RF-01-1-01`, `CP-RF-01-1-02`, `CP-RF-01-3-01`, `CP-RF-01-3-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Precondiciones:** Servicio de identidad disponible; el correo `cliente.demo01@test.3daltoque.local` no está registrado en `usuarios`.
- **Datos de entrada:** `nombre: "Lucía Gómez"`, `email: "cliente.demo01@test.3daltoque.local"`, `password: "Frase de prueba 3D 2026"`, `zona: "Caballito, CABA"`, `condiciones_version_id: UUID de la versión publicada`.
- **Pasos:** 1) Abrir `WEB-AUTH-02` / `MOB-AUTH-02`. 2) Comprobar que el alta asigna el perfil Cliente. 3) Completar datos y aceptar términos. 4) Enviar registro (`POST /auth/registro`). 5) Elegir «Crear mi perfil maker», informar nombre_publico y confirmar (`POST /makers/me` con clave estable). 6) Repetir la intención y consultar los perfiles y la membresía.
- **Resultado esperado:** `201 Created`; usuario creado en `usuarios` y `usuario_roles`, términos registrados e ingreso autenticado con perfil Cliente. Al elegir «Crear mi perfil maker», se conserva Cliente y se crea una sola asignación y perfil maker pendiente; los reintentos conservan su estado y la prueba sin iniciar hasta habilitar. (`Estado: Planificado`).

<a id="cp-002"></a>
### CP-002 — Inicio de sesión con credenciales inválidas y control de bloqueo (`CU-13` · `RF-01.4`, `RNF-04`, `RNF-16`)
- **Datos de prueba:** Cinco intentos con contraseña incorrecta y un sexto dentro de los 60 segundos para el mismo correo. Alternar Web y Mobile, usar reloj controlado y repetir con un correo inexistente. Preparar seis intentos simultáneos para otra identidad sintética. Fixture específico CP-002 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** valor límite.
- **Correspondencia con cobertura:** `CP-RF-01-4-01`, `CP-RF-01-4-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Precondiciones:** Cuenta activa existente.
- **Datos de entrada:** Correo válido + contraseña incorrecta repetida por encima del umbral permitido.
- **Pasos:** 1) Enviar cinco credenciales inválidas para el mismo correo desde Web y Mobile con distintos orígenes. 2) Intentar de nuevo antes de que salgan de la ventana y comprobar 429 y Retry-After. 3) Repetir el intento bloqueado y comprobar que no prolonga la espera. 4) Avanzar el reloj hasta los 60 segundos desde el primer fallo y volver a intentar. 5) Repetir con un correo inexistente, otra cuenta y seis intentos simultáneos para la misma identidad de prueba.
- **Resultado esperado:** Los primeros cinco fallos devuelven 401 con un mensaje neutral. Los intentos siguientes devuelven 429 con Retry-After, incluso al cambiar de canal u origen. Las respuestas para correos desconocidos siguen la misma regla. Al salir el fallo más antiguo de la ventana se admite un nuevo intento. La otra cuenta mantiene su acceso. Ante seis intentos simultáneos con contraseña incorrecta, como máximo cinco llegan a la validación de credenciales dentro de la ventana. El bloqueo temporal queda registrado en seguridad. (`Estado: Planificado`).

<a id="cp-003"></a>
### CP-003 — Publicación de solicitud válida con archivo STL y ubicación aproximada (`CU-01`, `CU-24` · `RF-02.1`, `RF-02.3`, `RF-09.1`, `RF-10.1`, `RF-10.2`)
- **Datos de prueba:** STL válido de 4,2 MB, PETG, cantidad 2 y ubicación Almagro. Conservar hash y unidad mm. Probar una edición de cantidad antes de la primera oferta y otra después. En dos solicitudes independientes, controlar el orden de confirmación entre una edición y la primera oferta. Fixture específico CP-003 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** recorrido de CU.
- **Correspondencia con cobertura:** `CP-RF-02-1-01`, `CP-RF-02-1-02`, `CP-RF-02-3-01`, `CP-RF-02-3-02`, `CP-RF-09-1-01`, `CP-RF-09-1-02`, `CP-RF-10-1-01`, `CP-RF-10-1-02`, `CP-RF-10-2-01`, `CP-RF-10-2-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Precondiciones:** Cliente autenticado y almacenamiento privado (`INT-03`) disponible.
- **Datos de entrada:** `soporte_sensor_v2.stl` (`4.2 MB`), `material: "PETG"`, `cantidad: 2`, `ubicacion: "Almagro, CABA"`.
- **Pasos:** 1) Autorizar y subir `soporte_sensor_v2.stl`. 2) Completar parámetros técnicos y confirmar ubicación en `WEB-SOL-01` / `MOB-SOL-01`. 3) Confirmar envío de la solicitud. 4) Editar la cantidad antes de la primera oferta y probar la invitación anterior. 5) Publicar desde una invitación de la versión vigente e intentar editar nuevamente. 6) Repetir con dos solicitudes independientes, haciendo que la edición gane en una y la oferta en otra.
- **Resultado esperado:** Archivo habilitado en `archivos` sin URL pública libre; solicitud creada en `solicitudes` y `solicitud_versiones` con su ronda. La edición previa guarda otra versión y ronda con el vencimiento original. La invitación anterior recibe 409. Si la oferta gana, el cambio de fabricación recibe 409 y conserva la versión. Si la edición gana, la oferta sobre la versión anterior recibe 409. (`Estado: Planificado`).

<a id="cp-004"></a>
### CP-004 — Rechazo de publicación de solicitud con campos obligatorios faltantes (`CU-01` · `RF-02.3`, `RNF-08`)
- **Precondiciones:** U-C1 autenticado; formulario de solicitud abierto.
- **Datos de prueba:** Descripción vacía, cantidad 0 y ubicación ausente; luego corregir uno por vez. Fixture específico CP-004 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** partición de equivalencia.
- **Correspondencia con cobertura:** `CP-RF-02-3-01`, `CP-RF-02-3-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Datos de entrada:** Descripción vacía, cantidad `0` y sin ubicación confirmada.
- **Pasos:** 1) Intentar enviar el formulario incompleto en `WEB-SOL-01`.
- **Resultado esperado:** Rechazo `422` detallando los campos faltantes, conservando el borrador sin crear registros parciales. (`Estado: Planificado`).

<a id="cp-005"></a>
### CP-005 — Rechazo de carga de archivo por formato no permitido o exceso de tamaño (`CU-01`, `CU-14`, `CU-24` · `RF-02.2`, `RF-10.1`, `RF-10.2`, `RNF-16`)
- **Precondiciones:** Sesión activa con permiso de carga. El piloto admite hasta 20 MiB por STL y 10 MiB por imagen o PDF adjunto al chat. Para los adjuntos, usar un pedido confirmado y un participante autorizado en su conversación.
- **Datos de prueba:** Ejecutable con extensión .stl, tamaños límite de STL, imagen y PDF de chat, y adjuntos de chat válidos JPEG, PNG y PDF. Probar además un GIF declarado como tal y un ejecutable renombrado a .pdf y declarado como application/pdf. Fixture específico CP-005 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** valores límite.
- **Correspondencia con cobertura:** `CP-RF-02-2-01`, `CP-RF-02-2-02`, `CP-RF-10-1-01`, `CP-RF-10-1-02`, `CP-RF-10-2-01`, `CP-RF-10-2-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Datos de entrada:** Ejecutable renombrado a `.stl`. Probar STL de 20.971.520 y 20.971.521 bytes e imágenes y PDF de chat de 10.485.760 y 10.485.761 bytes. Para cada formato, incluir una carga con tamaño declarado permitido y tamaño real superior al máximo.
- **Pasos:** 1) Para STL, imagen y PDF de chat, solicitar autorización con el máximo exacto y con un byte de exceso. 2) Finalizar las cargas cuyo tamaño real supera lo declarado y el máximo. 3) Validar el ejecutable renombrado. 4) Autorizar y finalizar la carga de un adjunto de chat de cada formato admitido. 5) Solicitar autorización para el GIF. 6) Finalizar la carga del ejecutable declarado como PDF.
- **Resultado esperado:** El máximo exacto cumple el control de tamaño de cada formato. El exceso declarado bloquea la autorización. El exceso real y el contenido inválido dejan el archivo sin habilitar. El chat habilita JPEG, PNG y PDF válidos cuando cumplen los controles. La autorización rechaza el GIF y la finalización mantiene sin habilitar el ejecutable declarado como PDF. (`Estado: Planificado`).

<a id="cp-006"></a>
### CP-006 — Cálculo y disponibilidad de la estimación orientativa (`CU-01` · `RF-02.5`, `RNF-08`)
- **Precondiciones:** STL habilitado y configuración sintética identificada, con cargo base de 1.000 ARS por pieza y coeficiente para PLA de 100 ARS por cm³ y rango de ±20 %.
- **Datos de prueba:** Volumen por pieza de 28.500 mm³, PLA y cantidad dos. Usar una segunda solicitud admitida cuyo análisis carezca de volumen utilizable y una tercera con volumen válido y material sin configuración habilitada. Preparar una cuarta solicitud con STL habilitado y un analizador de prueba que no termine dentro de 60 segundos. Fixture específico CP-006 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** tabla de decisión.
- **Correspondencia con cobertura:** `CP-RF-02-5-01`, `CP-RF-02-5-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Datos de entrada:** Pieza STL con volumen de 28.500 mm³ por unidad y material PLA. Cantidad dos. Cargo base de 1.000 ARS por pieza y coeficiente de 100 ARS por cm³ de la configuración sintética.
- **Pasos:** 1) Consultar la estimación generada en Web o Mobile. 2) Comprobar el volumen en cm³, el importe de referencia, ambos límites del rango y la versión de configuración conservada. 3) Cambiar el porcentaje de la configuración y consultar la estimación ya guardada. 4) Enviar las solicitudes alternativas y comprobar la continuidad hacia ofertas cuando falta un volumen utilizable o una configuración habilitada para el material.
- **Resultado esperado:** El volumen normalizado es 28,5 cm³ y la referencia es 7.700 ARS. El rango de ±20 % va de 6.160 a 9.240 ARS. La estimación guardada conserva método, supuestos, porcentaje y límites asociados a su versión de configuración. La interfaz identifica el resultado como orientativo. Las solicitudes alternativas muestran su causa de indisponibilidad y permiten continuar a cotización por makers. (`Estado: Planificado`).

Con reloj controlado, hacer que una ejecución termine antes de los 60 segundos y que otra alcance ese límite. Medir desde el inicio del worker, incluso si el trabajo quedó antes en cola. Verificar que la primera entregue su resultado y que la segunda se detenga y devuelva una estimación indisponible con la causa y sin rango. Simular un resultado tardío de la ejecución vencida y comprobar que se descarte. Enviar la solicitud con el STL habilitado y recibir una oferta manual. Repetir el envío con una variante sin validar y comprobar que se rechace.

<a id="cp-007"></a>
### CP-007 — Matching de solicitud hacia makers compatibles con membresía vigente (`CU-01`, `CU-02` · `RF-03.1`, `RF-03.2`, `RF-12.10`)
- **Datos de prueba:** A compatible y activo en CABA a 10.000 m. B compatible y Fundador en CABA a menor distancia. C y D dentro de CABA y del radio, con material incompatible y acceso vencido, respectivamente. E compatible y activo fuera de CABA dentro del radio. F compatible y activo en CABA a 10.001 m. Preparar otra solicitud con seis makers elegibles y distintos, todos dentro de CABA y del radio y con distancias distintas y disponibilidad equivalente. Preparar una variante sin elegibles en el radio inicial, con un maker compatible y activo en CABA a 10.001 m. Usar un maker dentro del radio que se habilite después de la primera ronda vacía. Preparar dos claves sobre la misma ronda y una variante que alcance el vencimiento. Fixture específico CP-007 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** tabla de decisión.
- **Correspondencia con cobertura:** `CP-RF-03-1-01`, `CP-RF-03-1-02`, `CP-RF-03-2-01`, `CP-RF-03-2-02`, `CP-RF-12-10-01`, `CP-RF-12-10-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Precondiciones:** `Maker A` (compatible + membresía activa), `Maker B` (compatible + Fundador en prueba), `Maker C` con material incompatible, `Maker D` con membresía vencida y `Maker E` compatible y activo fuera de CABA y `Maker F` compatible y activo a más de 10.000 m dentro de CABA.
- **Pasos:** 1) Buscar makers desde una referencia en CABA cercana al límite. 2) Publicar la solicitud y consultar invitaciones, radio y versión de configuración de la primera ronda. 3) Cambiar el radio para rondas futuras y volver a consultar la ronda guardada. 4) Intentar enviar otra solicitud cuya referencia quede fuera del perímetro. 5) Restablecer el radio inicial y el máximo de cinco para enviar la variante con seis makers elegibles. Reintentar con la misma clave y recuperar la ronda. 6) Enviar la variante con cero elegibles dentro del radio inicial y consultar el resultado.
- **Resultado esperado:** La búsqueda y las invitaciones excluyen a E por cobertura aunque esté dentro del radio. La primera ronda invita a A y B, incluido el límite exacto de 10.000 m, y conserva el radio inicial con ese grupo incompleto. C queda excluido por capacidad, D por membresía vencida y F por distancia. La ronda guardada conserva 10.000 m y su versión de configuración. La solicitud fuera de CABA conserva el borrador y queda sin invitaciones. La ronda con seis elegibles conserva el máximo de cinco e invita a los primeros cinco según el orden aplicado. El reintento recupera la misma ronda e invitaciones. La variante con cero elegibles conserva el radio inicial, registra cero invitaciones e informa que no encontró makers compatibles. (`Estado: Planificado`).

En la variante de ronda vacía, comprobar que el detalle habilite Volver a buscar. Cambiar el radio global y repetir la búsqueda con la versión y la ronda esperadas. Comprobar que la nueva ronda conserva el radio original, la versión y el vencimiento. Si sigue vacía, consultar el detalle e iniciar otra búsqueda de inmediato con el mismo instante del reloj de prueba. Comprobar que se registra desde esa última ronda. Habilitar al maker dentro del radio y enviar dos operaciones simultáneas con claves distintas sobre la última ronda vacía. Una crea la ronda y una invitación. La otra devuelve 409. Repetir la clave confirmada y comprobar que se recupera la misma ronda. Después de invitar a un maker o al alcanzar el vencimiento, el detalle deja de ofrecer la acción y la API rechaza una intención nueva. En una ronda con invitaciones, hacer que todos los makers las rechacen. Verificar que el detalle conserve el total de invitaciones, mantenga la solicitud abierta hasta el vencimiento y que un POST con una clave nueva devuelva 409 sin crear otra ronda.

<a id="cp-008"></a>
### CP-008 — Emisión y actualización versionada de oferta por maker elegible (`CU-02`, `CU-25` · `RF-04.1`, `RF-04.2`, `RF-04.5`, `RF-04.6`, `RF-07.1`)
- **Precondiciones:** M-M1 invitado, elegible y solicitud abierta; moneda ARS.
- **Datos de prueba:** V1 por 18500.00 ARS con tres días de producción, publicada el 5 de noviembre a las 15:00 UTC. V2 por 17000.00 ARS con dos días de producción, publicada el 6 de noviembre a las 15:00 UTC. Usar claves distintas y una configuración de vigencia de 72 horas. Preparar la bandeja del cliente titular y un adaptador de correo que simule una respuesta incierta al avisar una versión publicada. Usar una oferta independiente para aceptar una propuesta de cambio y otra para rechazarla. Fixture específico CP-008 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** transición de estados.
- **Correspondencia con cobertura:** `CP-RF-04-1-01`, `CP-RF-04-1-02`, `CP-RF-04-2-01`, `CP-RF-04-2-02`, `CP-RF-04-5-01`, `CP-RF-04-5-02`, `CP-RF-04-6-01`, `CP-RF-04-6-02`, `CP-RF-07-1-01`, `CP-RF-07-1-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Datos de entrada:** Oferta v1 (`$18.500 ARS`, `3 días`) y actualización a Oferta v2 (`$17.000 ARS`, `2 días`).
- **Pasos:** 1) Publicar v1. 2) Publicar v2 antes de la aceptación. 3) Consultar ambos vencimientos y repetir la consulta después de cambiar la duración para futuras publicaciones.
- **Resultado esperado:** V2 es la única versión vigente. V1 vence el 8 de noviembre a las 15:00 UTC y v2 el 9 de noviembre a las 15:00 UTC. Las versiones guardadas conservan sus vencimientos y su configuración de publicación. (`Estado: Planificado`).

Procesar dos veces los eventos de v1 y v2. Verificar que el cliente titular tenga un aviso y un envío distinto por versión. Simular una falla y una respuesta incierta del correo de v2 y comprobar que el reintento reutilice su clave y contenido y que el aviso siga disponible. Aceptar una propuesta en la variante independiente y comprobar el mismo par de aviso y correo para la versión resultante. Rechazar otra propuesta y comprobar que se conservan la versión vigente y sus avisos de publicación. Abrir el enlace con el cliente titular y con otra cuenta para verificar el permiso sobre el detalle.

<a id="cp-009"></a>
### CP-009 — Bloqueo de emisión de oferta para maker no invitado o con membresía vencida (`CU-02`, `CU-08` · `RF-04.1`, `RF-12.4`, `RF-12.10`)
- **Precondiciones:** Dos makers: M-M2 sin invitación y otro invitado con acceso vencido; solicitud vigente.
- **Datos de prueba:** Primero cuenta sin invitación con acceso vigente; después cuenta invitada vencida; mismo cuerpo válido de oferta. Fixture específico CP-009 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** tabla de decisión.
- **Correspondencia con cobertura:** `CP-RF-04-1-01`, `CP-RF-04-1-02`, `CP-RF-12-4-01`, `CP-RF-12-4-02`, `CP-RF-12-10-01`, `CP-RF-12-10-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Intentar publicar con M-M2, que tiene acceso vigente y carece de invitación. 2) Repetir con el maker invitado cuyo acceso venció según el reloj del servidor. 3) Consultar ofertas después de cada intento.
- **Resultado esperado:** Maker sin invitación: `403 Forbidden`. Maker con acceso vencido: `409 membership_required`; conserva la invitación y ofrece renovar por CU-11. Ambos intentos mantienen las ofertas existentes. (`Estado: Planificado`).

<a id="cp-010"></a>
### CP-010 — Aceptación de oferta vigente, creación de pedido único y cierre de competidoras (`CU-03` · `RF-04.3`, `RF-04.4`, `RF-05.3`, `RF-12.15`)
- **Datos de prueba:** OF-01 v2 vigente y OF-02 v1 vigente; aceptar OF-01 con clave CP010-A. Fixture específico CP-010 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** transacción e invariantes.
- **Correspondencia con cobertura:** `CP-RF-04-3-01`, `CP-RF-04-3-02`, `CP-RF-04-4-01`, `CP-RF-04-4-02`, `CP-RF-05-3-01`, `CP-RF-05-3-02`, `CP-RF-12-15-01`, `CP-RF-12-15-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Precondiciones:** Solicitud abierta con dos ofertas vigentes (`OF-01` v2 y `OF-02` v1).
- **Pasos:** 1) Comparar ofertas en `WEB-OFE-02`. 2) Confirmar la versión vigente de `OF-01` en `WEB-OFE-03`.
- **Resultado esperado:** En una sola transacción atómica se crea un único registro en `pedidos` con condiciones congeladas, `OF-01` pasa a `ACEPTADA`, `OF-02` se cierra y se habilita la conversación del pedido (`CU-14`). (`Estado: Planificado`).

<a id="cp-011"></a>
### CP-011 — Rechazo al intentar aceptar una oferta vencida o cuya versión fue reemplazada (`CU-03` · `RF-04.2`, `RF-04.4`)
- **Precondiciones:** Solicitudes propias abiertas, con makers elegibles y referencias en CABA. Una oferta tiene v1 sustituida por v2. Otras dos conservan versiones vigentes para controlar su vencimiento. Preparar una cuarta solicitud enviada el 5 de noviembre a las 15:00 UTC con oferta publicada el 11 de noviembre a las 15:00 UTC.
- **Datos de prueba:** Intentar aceptar la versión sustituida. Con reloj controlado y solicitudes independientes, aceptar una versión vigente un segundo antes del vencimiento y otra en el instante exacto. Consultar pedidos antes y después. En la cuarta solicitud, dejar la oferta sin aceptar, intentar cerrar la solicitud mediante el campo estado de la edición y comprobar el vencimiento a los siete días con la oferta todavía dentro de sus 72 horas. Fixture específico CP-011 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** versión y vigencia.
- **Correspondencia con cobertura:** `CP-RF-04-2-01`, `CP-RF-04-2-02`, `CP-RF-04-4-01`, `CP-RF-04-4-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Intentar aceptar la versión sustituida. 2) En solicitudes independientes, intentar aceptar una versión un segundo antes de su vencimiento y otra al cumplirse el plazo. 3) Reintentar con la clave original de la aceptación exitosa después del vencimiento. 4) En la cuarta solicitud, enviar PATCH con estado y la versión vigente, y comprobar que la solicitud siga abierta. Consultar el estado un segundo antes y al cumplirse los siete días. Intentar publicar, negociar y aceptar con el proceso de cierre todavía pendiente. Ejecutar el cierre y consultar el resultado.
- **Resultado esperado:** La versión sustituida y el intento al cumplirse el plazo devuelven `409 Conflict` y conservan el estado previo. La aceptación anterior al vencimiento crea un único pedido. El reintento posterior recupera ese mismo pedido. El intento de editar el estado de la cuarta solicitud devuelve 422. La solicitud permanece abierta hasta que pasa a vencida el 12 de noviembre a las 15:00 UTC. La oferta conserva su vencimiento original del 14 de noviembre a las 15:00 UTC. Desde el cierre efectivo, las mutaciones nuevas devuelven 409 y conservan el historial, incluso con el proceso de cierre pendiente. (`Estado: Planificado`).

<a id="cp-012"></a>
### CP-012 — Control de concurrencia ante dos intentos simultáneos de aceptación sobre la misma solicitud (`CU-03` · `RF-04.4`, `RNF-05`)
- **Precondiciones:** Solicitud con dos ofertas vigentes y conexiones de cliente autenticadas.
- **Datos de prueba:** Dos claves diferentes sobre la misma solicitud; repetir con una clave común y cuerpo idéntico. Fixture específico CP-012 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** concurrencia.
- **Correspondencia con cobertura:** `CP-RF-04-4-01`, `CP-RF-04-4-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Disparar dos peticiones paralelas de aceptación sobre la misma solicitud abierta.
- **Resultado esperado:** Como máximo se confirma un único pedido; la petición concurrente recibe conflicto o el resultado idempotente si corresponde a la misma clave. (`Estado: Planificado`).

<a id="cp-013"></a>
### CP-013 — Avance de producción, carga de evidencia privada y paso a revisión (`CU-04`, `CU-24` · `RF-06.1`, `RF-06.2`, `RF-06.5`, `RF-10.1`, `RF-10.2`)
- **Precondiciones:** Pedido P-01 confirmado con M-M1; fotos autorizadas privadas; sesión maker activa.
- **Datos de prueba:** P-01 con versión vigente y seis imágenes JPEG y PNG habilitadas. Usar CP013-A para el intento con seis archivos y CP013-B para la revisión con cinco. Para CP013-C usar un PDF declarado, un PNG declarado como JPEG y una imagen válida habilitada para otra finalidad. Fixture específico CP-013 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** transición de estados.
- **Correspondencia con cobertura:** `CP-RF-06-1-01`, `CP-RF-06-1-02`, `CP-RF-06-2-01`, `CP-RF-06-2-02`, `CP-RF-06-5-01`, `CP-RF-06-5-02`, `CP-RF-10-2-01`, `CP-RF-10-2-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) El maker actualiza el pedido a `EN_PRODUCCION` y sube las imágenes privadas. 2) Intenta autorizar el PDF como evidencia y finalizar el PNG declarado como JPEG. 3) Intenta preparar la revisión con una imagen habilitada para otra finalidad y luego con seis imágenes de evidencia. 4) Prepara y presenta una revisión con cinco imágenes JPEG y PNG desde `WEB-PED-03`.
- **Resultado esperado:** La API rechaza el PDF en la autorización y mantiene sin habilitar la imagen que declara otro formato. La preparación rechaza la referencia de otra finalidad y el intento con seis archivos. El pedido conserva `EN_PRODUCCION` durante esos intentos. La presentación con cinco vincula la evidencia privada a `revisiones_resultado`, pasa el pedido a `EN_REVISION` y notifica al cliente. (`Estado: Planificado`).

<a id="cp-014"></a>
### CP-014 — Conversación contextual del pedido y bloqueo de acceso a terceros no participantes (`CU-14`, `CU-24` · `RF-05.1`, `RF-05.2`, `RF-10.3`, `RNF-04`)
- **Precondiciones:** P-01 confirmado entre U-C1 y M-M1. U-C2 ajeno al pedido. Seis archivos privados distintos habilitados para la conversación.
- **Datos de prueba:** Mensaje de 4.000 caracteres y cinco adjuntos con clave CP014-A. Intento de 4.001 caracteres con clave CP014-B. Intento con seis adjuntos distintos y texto válido con clave CP014-C. Consultas con U-C1, M-M1 y U-C2. Variantes con un pedido cancelado y un pedido listo para confirmar recepción. Ambos tienen mensajes y adjuntos existentes y un mensaje pendiente. Fixture específico CP-014 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** autorización por recurso.
- **Correspondencia con cobertura:** `CP-RF-05-1-01`, `CP-RF-05-1-02`, `CP-RF-05-2-01`, `CP-RF-05-2-02`, `CP-RF-10-3-01`, `CP-RF-10-3-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Un participante envía 4.000 caracteres y cinco adjuntos habilitados. 2) El mismo participante envía 4.001 caracteres por la API con otra clave. 3) Intenta enviar seis adjuntos distintos con texto válido y una tercera clave. 4) Un tercer usuario intenta leer la conversación o descargar un adjunto, la evidencia o el STL. 5) En el pedido listo para recibir, verificar que el envío esté habilitado y confirmar la recepción desde la cuenta del cliente. 6) Abrir el chat del pedido completado y el del cancelado como cliente y maker en Web y Mobile. Consultar mensajes y adjuntos. Intentar enviar, reintentar con una clave anterior y autorizar una carga por API. 7) En dos copias del pedido listo para recibir, ejecutar la confirmación de recepción y un envío en paralelo. Controlar qué operación obtiene primero el bloqueo en cada copia.
- **Resultado esperado:** El mensaje de 4.000 caracteres y sus cinco adjuntos aparecen en el historial autorizado. Los intentos de 4.001 caracteres y de seis adjuntos devuelven 422 y conservan el historial y las asociaciones previas. El tercero recibe `403/404` sin acceso al contenido. El chat pasa a solo lectura al confirmar la recepción o cancelar el pedido y conserva los mensajes y adjuntos autorizados. Los envíos, reintentos y nuevas autorizaciones de carga para el chat devuelven `409 chat_read_only`. Los clientes detienen los reintentos. En la prueba concurrente, el mensaje se incorpora al historial si su envío se confirma primero. Si la recepción se confirma primero, el envío devuelve el mismo 409 y conserva el historial. (`Estado: Planificado`).

<a id="cp-015"></a>
### CP-015 — Aprobación expresa de la evidencia por el cliente y habilitación de entrega (`CU-05` · `RF-06.3`, `RF-05.3`)
- **Precondiciones:** P-01 EN_REVISION con revisión R-01 vigente y evidencia consultable por U-C1.
- **Datos de prueba:** U-C1 aprueba R-01 con versión_esperada vigente; repetir la intención original. Fixture específico CP-015 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** transición de estados.
- **Correspondencia con cobertura:** `CP-RF-06-3-01`, `CP-RF-06-3-02`, `CP-RF-05-3-01`, `CP-RF-05-3-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) El cliente inspecciona la evidencia vigente en `WEB-REV-01` / `MOB-REV-01` y confirma `"Aprobar resultado"`.
- **Resultado esperado:** `decisiones_revision` registra `APROBADA` referenciando la revisión exacta y se desbloquea la coordinación de entrega (`CU-06`). (`Estado: Planificado`).

<a id="cp-016"></a>
### CP-016 — Bloqueo de coordinación de entrega cuando la evidencia aún no fue aprobada (`CU-05`, `CU-06` · `RF-06.3`, `RF-06.4`, `RF-06.6`, `RF-07.4`, `RNF-05`)
- **Precondiciones:** Dos pedidos con revisiones presentadas y hora conocida. P-01 queda pendiente. En P-02 el cliente registra observaciones entre las 24 y 48 horas. Usar los canales por defecto y preparar una variante con el correo opcional desactivado.
- **Datos de prueba:** Probar ambos plazos con reloj controlado, repetir cada trabajo y usar un adaptador de correo de prueba. Comparar avisos internos, correos, estado de la revisión y guardas de entrega y recepción. Probar la solicitud de soporte justo antes y a las 72 horas. Probar cliente y maker por separado y en paralelo sobre la misma revisión, con claves distintas. Repetir una clave y probar una cuenta ajena. Usar una cuenta de soporte autorizada y preparar una corrección que el maker intente presentar mientras la revisión vigente siga pendiente. Preparar una variante con el caso cerrado y la revisión aún pendiente para solicitar la reapertura. Preparar copias para aprobar, rechazar, intervenir sin permiso o motivo, usar una versión anterior y responder la revisión antes de que soporte decida. Usar claves nuevas de cliente y maker después de un rechazo y preparar una revisión posterior para verificar su propio seguimiento. Usar decisiones con fecha conocida y consultar el caso con cliente, maker y una cuenta ajena al pedido. Fixture específico CP-016 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** tabla de decisión.
- **Correspondencia con cobertura:** `CP-RF-06-3-01`, `CP-RF-06-3-02`, `CP-RF-06-4-01`, `CP-RF-06-4-02`, `CP-RF-06-6-01`, `CP-RF-06-6-02`, `CP-RF-07-4-01`, `CP-RF-07-4-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Procesar los trabajos justo antes de las 24 horas y al cumplir las 24 horas. 2) Registrar observaciones en P-02. 3) Procesar los trabajos al cumplir las 48 horas y repetir cada ejecución. 4) Intentar pedir seguimiento a soporte en P-01 un segundo antes de las 72 horas y justo al cumplirse el plazo, con cliente y maker en variantes independientes. Sobre una copia de P-01, lanzar ambas solicitudes a la vez con claves distintas. Reintentar una con la misma clave. Probar P-02 y una cuenta ajena. 5) Registrar una gestión de soporte y consultar su auditoría. Intentar habilitar el reemplazo desde el caso y presentar la corrección como maker. 6) Intentar coordinar o completar la entrega de ambos pedidos. 7) En copias independientes, cerrar el caso de P-01 y solicitar la reapertura como cliente y como maker. Repetir una clave. Probar también la acción con un caso abierto y con un caso cerrado cuya revisión ya fue respondida. 8) Con solicitudes pendientes en copias independientes, aprobar y rechazar como soporte, repetir la clave de una decisión y probar las variantes sin permiso, sin motivo o con versión anterior. En otra copia, hacer que el cliente decida la revisión antes de la intervención de soporte. 9) Después de un rechazo, intentar una solicitud nueva como cliente y como maker. En el mismo pedido, registrar observaciones del cliente, presentar la corrección y pedir seguimiento de la revisión nueva al cumplirse sus 72 horas. 10) Tras aprobar o rechazar en copias independientes, consultar el detalle del pedido como cliente, maker y tercero. Comparar las bandejas de avisos antes y después de resolver y consultar.
- **Resultado esperado:** Antes de las 24 horas todavía no hay recordatorios. P-01 registra un aviso interno y un correo a las 24 horas y otro de cada canal a las 48 horas. P-02 registra ambos canales únicamente a las 24 horas. Los reintentos conservan el conteo por canal. Antes de las 72 horas y para P-02, el seguimiento devuelve 409. Al cumplirse el plazo, una solicitud crea el caso con 201. Las solicitudes simultáneas generan un solo caso y devuelven el mismo identificador con respuestas 201 y 200. La auditoría identifica a ambos solicitantes. El reintento con la misma clave recupera el caso y conserva un único registro de esa solicitud. La cuenta ajena recibe 403 o 404. La gestión de soporte queda auditada. El intento de habilitar el reemplazo se rechaza y la presentación del maker devuelve 409. La revisión conserva su identificador, evidencia, estado y fecha de presentación. Las solicitudes de entrega y recepción reciben `409 Conflict` y la entrega sigue pendiente de aprobación expresa. Cada solicitud válida devuelve 200 con el identificador original y el estado `reapertura_solicitada`. Repetir la clave conserva una sola entrada. Una solicitud nueva con caso abierto o revisión respondida devuelve 409. La aprobación vuelve a abrir el mismo caso y el rechazo lo deja cerrado en `reapertura_rechazada`. Las solicitudes nuevas de ambos participantes devuelven `409 reopen_rejected` y preservan el caso y la decisión. La revisión posterior puede crear su propio caso al cumplir los requisitos de PD-07. Ambas decisiones conservan la revisión y registran motivo y resultado. Un reintento recupera la decisión auditada. El permiso insuficiente, el motivo ausente y la versión anterior impiden la intervención. Si el cliente decide la revisión primero, la solicitud queda sin efecto y el caso vuelve a cerrado. Cliente y maker ven la misma referencia, estado y decisión con fecha en el caso. La respuesta para participantes contiene solo esos datos y la revisión vinculada. El tercero recibe 403 o 404. La resolución y las consultas conservan los registros previos de las bandejas de avisos. (`Estado: Planificado`).

En la variante con correo desactivado, procesar los dos recordatorios y comprobar que se registre un aviso en la app por plazo. En otra copia, desactivar el correo después de encolar el envío y comprobar que el worker omita el intento. Intentar desactivar el canal app desde la cuenta del cliente y comprobar 403 y la preferencia obligatoria activa.

<a id="cp-017"></a>
### CP-017 — Registro de observaciones sobre la evidencia y nuevo ciclo de revisión (`CU-05` · `RF-06.3`, `RF-05.3`)
- **Precondiciones:** P-01 en revisión R-01; U-C1 titular; observación con motivo.
- **Datos de prueba:** Motivo: corregir rebaba; luego evidencia R-02 vinculada al mismo pedido. Fixture específico CP-017 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** transición de estados.
- **Correspondencia con cobertura:** `CP-RF-06-3-01`, `CP-RF-06-3-02`, `CP-RF-05-3-01`, `CP-RF-05-3-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) El cliente registra observaciones detalladas sobre la evidencia presentada.
- **Resultado esperado:** La revisión queda `OBSERVADA` conservando el motivo e historial, y habilita al maker a presentar una nueva revisión corregida (`n + 1`). (`Estado: Planificado`).

<a id="cp-018"></a>
### CP-018 — Silencio del cliente ante revisión pendiente: envío de recordatorio sin aprobación automática (`CU-05`, `CU-23` · `RF-06.4`, `RF-07.4`)
- **Precondiciones:** R-01 vigente y pendiente. Reloj controlable y adaptador de correo de prueba que registra la clave de cada envío.
- **Datos de prueba:** Instantes t0, t0+24 h y t0+48 h desde la presentación. Simular una falla temporal, una aceptación con respuesta perdida y una revisión respondida antes del reintento. Usar un doble de la API de Resend y comprobar el límite de 24 h desde el primer intento de correo. Fixture específico CP-018 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** tiempo y deduplicación.
- **Correspondencia con cobertura:** `CP-RF-06-4-01`, `CP-RF-06-4-02`, `CP-RF-07-4-01`, `CP-RF-07-4-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Avanzar el reloj a las 24 y 48 horas y procesar dos veces el trabajo de cada plazo. 2) En variantes independientes, provocar una falla temporal y una aceptación con respuesta perdida. Repetir el caso de respuesta perdida en variantes independientes justo antes y al cumplirse 24 horas desde el primer intento. Comparar clave y contenido de la solicitud y estado del envío. 3) Responder la revisión antes de reintentar el correo en otra variante. 4) Comprobar el aviso interno y el estado de revisión.
- **Resultado esperado:** Cada plazo vigente deja un aviso interno y un registro de correo para el cliente. Una falla conserva el aviso interno. El reintento reutiliza la clave y el registro del envío. Dentro de las 24 horas, la misma solicitud recupera el identificador de Resend sin un correo adicional. Al cumplirse el límite, el envío queda pendiente de verificación y el worker omite el reintento automático. Si la revisión ya fue respondida, se omite el reintento. El silencio conserva el estado pendiente (`RF-06.4`). (`Estado: Planificado`).

<a id="cp-019"></a>
### CP-019 — Coordinación de entrega personal en punto de encuentro y confirmación de recepción (`CU-06` · `RF-06.6`, `RF-06.7`)
- **Precondiciones:** P-01 con revisión aprobada, propuesta de punto neutral, participantes autenticados y una cuenta administrativa autorizada para gestionar el caso de soporte.
- **Datos de prueba:** Encuentro E-01 v1 y tres cambios sucesivos de punto u horario. Aceptar los dos primeros cambios, repetir la segunda aceptación con la misma clave e intentar un tercer cambio. Registrar un caso de soporte vinculado al pedido y probar el cambio desde administración. Confirmar recepción de U-C1 sobre el último acuerdo aceptado. Fixture específico CP-019 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** recorrido de CU.
- **Correspondencia con cobertura:** `CP-RF-06-6-01`, `CP-RF-06-6-02`, `CP-RF-06-7-01`, `CP-RF-06-7-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Proponer y aceptar el primer encuentro. 2) Proponer y aceptar dos cambios. Comprobar el conteo antes y después de cada aceptación. 3) Repetir la última aceptación con la misma clave. 4) Proponer un tercer cambio. 5) Registrar el incidente desde soporte e intentar modificar el punto u horario desde administración. 6) Confirmar la recepción sobre el último acuerdo vigente y repetir el envío.
- **Resultado esperado:** El acuerdo inicial registra cero reprogramaciones. Las propuestas pendientes conservan el conteo y cada cambio aceptado suma una. El reintento recupera el acuerdo con el mismo conteo. El tercer cambio devuelve `409 Conflict`. El caso de soporte queda registrado y el intento de intervención conserva el acuerdo y el conteo de dos reprogramaciones. La recepción se registra una sola vez, completa el pedido y habilita la valoración. (`Estado: Planificado`).

<a id="cp-020"></a>
### CP-020 — Preservación de privacidad del domicilio exacto del maker en mapas y búsquedas (`CU-01`, `CU-06`, `CU-21` · `RF-09.1`, `RF-09.2`, `RNF-04`)
- **Precondiciones:** Dos makers con coordenadas operativas sintéticas distintas en la misma celda pública de 1 km próxima al límite de CABA. U-C1 habilitado para consultas y participante de un pedido con encuentro confirmado.
- **Datos de prueba:** Consultar búsqueda y perfil con dos referencias de búsqueda distintas. Comparar el punto público de ambos makers, revisar filtros y distancias visibles e inspeccionar ofertas y encuentro. Fixture específico CP-020 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** protección de datos.
- **Correspondencia con cobertura:** `CP-RF-09-1-01`, `CP-RF-09-1-02`, `CP-RF-09-2-01`, `CP-RF-09-2-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Consultar búsqueda y perfil desde Web y Mobile. 2) Comparar `zona_mapa` de ambos makers y el resultado de filtros y orden por distancia con dos orígenes. 3) Consultar ofertas y el punto de encuentro con una cuenta autorizada.
- **Resultado esperado:** Los dos makers comparten el punto público, ubicado en CABA, y el tamaño de 1.000 m. Los filtros, el orden y la distancia pública usan ese punto. Las respuestas de búsqueda, perfil y ofertas omiten el domicilio y las coordenadas operativas exactas. El encuentro muestra únicamente el punto acordado a los participantes autorizados. (`Estado: Planificado`).

<a id="cp-021"></a>
### CP-021 — Primera habilitación del perfil maker e inicio de prueba gratuita general de 30 días (`CU-09`, `CU-08` · `RF-01.2`, `RF-12.2`, `RF-12.4`)
- **Precondiciones:** M-M1 sin primera habilitación ni períodos previos; datos productivos válidos.
- **Datos de prueba:** Prueba de 30 días configurada; completar perfil y editarlo dos veces después de habilitar. Fixture específico CP-021 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** unicidad temporal.
- **Correspondencia con cobertura:** `CP-RF-01-2-01`, `CP-RF-01-2-02`, `CP-RF-12-2-01`, `CP-RF-12-2-02`, `CP-RF-12-4-01`, `CP-RF-12-4-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Completar capacidades e impresoras en `WEB-MKR-01` y solicitar primera habilitación. 2) Editar el perfil posteriormente.
- **Resultado esperado:** Se concede por única vez el período gratuito inicial (`30 días` generales) sin pedir tarjeta; ediciones posteriores no reinician ni duplican el beneficio. (`Estado: Planificado`).

<a id="cp-022"></a>
### CP-022 — Asignación administrativa del beneficio `Makers Fundadores` (`90 días` totales no acumulables) (`CU-10` · `RF-12.3`, `RF-12.13`, `RF-12.15`)
- **Precondiciones:** A-A1 con capacidad de asignación, convocatoria abierta y una plaza disponible; M-M1 en el día 10 de una prueba general vigente y otro maker elegible.
- **Datos de prueba:** Inicio original t0 y fin general t0+30 días; reloj en t0+10 días; fin fundador esperado t0+90 días; dos solicitudes simultáneas y motivo de asignación. Fixture específico CP-022 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** concurrencia y límites.
- **Correspondencia con cobertura:** `CP-RF-12-3-01`, `CP-RF-12-3-02`, `CP-RF-12-13-01`, `CP-RF-12-13-02`, `CP-RF-12-15-01`, `CP-RF-12-15-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Administración convierte la prueba general vigente de M-M1 en Fundador con motivo en `WEB-ADM-MEM-01`. 2) Repetir la operación y consultar concesión e historial. 3) Probar dos solicitudes concurrentes con una plaza disponible en una ejecución restablecida. 4) Intentar convertir una prueba vencida y un acceso pago.
- **Resultado esperado:** La conversión conserva ID e inicio de la concesión inicial y amplía el fin a t0+90 días totales; registra antes/después y consume una única plaza. Los reintentos conservan el resultado, la concurrencia respeta el cupo y la prueba vencida o el acceso pago conservan su estado. (`Estado: Planificado`).

<a id="cp-023"></a>
### CP-023 — Pago manual de abono mensual por Checkout Pro y activación tras verificación del servidor (`CU-11` · `RF-12.5` a `RF-12.9`)
- **Precondiciones:** M-M1 con acceso comercial vencido y compra de abono creada; credenciales y cuentas exclusivas del entorno de prueba.
- **Datos de prueba:** Compra CP023-A de 10000.00 ARS; retorno del navegador y recurso externo aprobado correspondiente. Fixture específico CP-023 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** integración.
- **Correspondencia con cobertura:** `CP-RF-12-5-01`, `CP-RF-12-5-02`, `CP-RF-12-6-01`, `CP-RF-12-6-02`, `CP-RF-12-7-01`, `CP-RF-12-7-02`, `CP-RF-12-8-01`, `CP-RF-12-8-02`, `CP-RF-12-9-01`, `CP-RF-12-9-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Crear compra de abono e iniciar Checkout Pro (`WEB-MEM-02`). 2) Regresar por navegador antes del webhook. 3) Procesar notificación verificada contra Mercado Pago.
- **Resultado esperado:** El retorno del navegador no activa el acceso; recién tras verificar el pago `approved` servidor a servidor se concede un único `PeriodoAcceso` desde la primera confirmación verificada y por 30 días configurables; los reintentos conservan el inicio y fin. (`Estado: Planificado`).

<a id="cp-024"></a>
### CP-024 — Idempotencia ante webhook de pago repetido y rechazo de webhook inválido (`CU-11` · `RF-12.6`, `RF-12.8`, `RNF-09`)
- **Precondiciones:** Compra CP023-A ya concedida; evento externo conservado; verificador de firma configurado.
- **Datos de prueba:** Mismo evento dos veces; otra notificación con firma alterada; compra y períodos antes/después. Fixture específico CP-024 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** idempotencia y seguridad.
- **Correspondencia con cobertura:** `CP-RF-12-6-01`, `CP-RF-12-6-02`, `CP-RF-12-8-01`, `CP-RF-12-8-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Enviar nuevamente el mismo evento webhook de un pago ya acreditado. 2) Enviar un webhook con firma inválida.
- **Resultado esperado:** El evento repetido no suma otro período ni duplica registros; el webhook inválido es rechazado sin efectos. (`Estado: Planificado`).

<a id="cp-025"></a>
### CP-025 — Continuidad operativa de pedidos activos cuando vence la membresía del maker (`CU-08`, `CU-04`, `CU-06`, `CU-14` · `RF-12.10`)
- **Precondiciones:** P-01 confirmado antes de vencer; reloj posterior al fin del acceso de M-M1.
- **Datos de prueba:** Intentar oferta nueva; después mensaje, evidencia y entrega del pedido existente. Fixture específico CP-025 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** tabla de decisión.
- **Correspondencia con cobertura:** `CP-RF-12-10-01`, `CP-RF-12-10-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Con la membresía del maker ya `VENCIDA`, intentar ofertar en una solicitud nueva. 2) Con la misma cuenta, conversar, subir evidencia y coordinar entrega en un pedido que ya estaba confirmado antes del vencimiento.
- **Resultado esperado:** Se bloquean nuevas ofertas, pero el pedido confirmado previo conserva toda su operatoria hasta completarse (`RF-12.10`). (`Estado: Planificado`).

<a id="cp-026"></a>
### CP-026 — Actualización administrativa del plan de membresía sin afectar períodos ya concedidos (`CU-12` · `RF-12.1`, `RF-12.12`, `RF-12.13`, `RNF-13`)
- **Precondiciones:** A-A1 con permiso de plan; una compra pendiente y un período vigente con versión anterior.
- **Datos de prueba:** Plan v1=10000.00 ARS; plan v2=12000.00 ARS; motivo y fecha de activación posteriores. Fixture específico CP-026 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** versionado.
- **Correspondencia con cobertura:** `CP-RF-12-1-01`, `CP-RF-12-1-02`, `CP-RF-12-12-01`, `CP-RF-12-12-02`, `CP-RF-12-13-01`, `CP-RF-12-13-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Publicar una nueva versión del plan con nuevo importe y motivo en `WEB-ADM-MEM-01`.
- **Resultado esperado:** Las compras futuras usan la nueva versión; las compras y períodos en curso conservan sus condiciones originales inalteradas. (`Estado: Planificado`).

<a id="cp-027"></a>
### CP-027 — Separación estricta entre cobro simulado (`demo`) y cobro real de membresía (`CU-11` · `RF-12.14`, `RNF-10`)
- **Precondiciones:** Entorno de demostración con una cuenta habilitada y otra sin permiso. Entorno de producción separado.
- **Datos de prueba:** Solicitudes equivalentes con datos propios de cada entorno. Ambas cuentas de demostración pueden comprar el abono y difieren en el permiso de simulación. Comprobar modo y referencia de compra. Fixture específico CP-027 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** segregación de entornos y control de permisos.
- **Correspondencia con cobertura:** `CP-RF-12-14-01`, `CP-RF-12-14-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Ejecutar una compra simulada con la cuenta habilitada. 2) Enviar una solicitud equivalente con la cuenta sin permiso en el mismo entorno. 3) Enviar una solicitud equivalente al backend de producción. 4) Verificar los registros de compras y períodos de acceso de cada intento.
- **Resultado esperado:** La compra y el período de la cuenta habilitada quedan identificados como simulados. El backend rechaza la solicitud de la cuenta sin permiso y la solicitud en producción. Ambos rechazos conservan los registros de compras y períodos de acceso. (`Estado: Planificado`).

<a id="cp-028"></a>
### CP-028 — Moderación administrativa, catálogo directo y reputación post-entrega (`CU-07`, `CU-16`, `CU-19`, `CU-20` · `RF-07.2`, `RF-13.1..13.4`, `RF-15.1..15.3`, `RNF-06`)
- **Precondiciones:** P-P1 publicado y M-M1 elegible con ubicación operativa en CABA. U-C1 distinto del maker y con referencia confirmada en CABA. Preparar una variante con referencia del cliente fuera de CABA y otra con ubicación operativa del maker fuera de CABA.
- **Datos de prueba:** Producto v1, cantidad 2, precio 1000.00 ARS; valoración 4/5; moderación con motivo por A-A1. Para probar los medios del catálogo, preparar seis fotos JPEG y PNG válidas, un recurso privado de fabricación, un MP4, un PNG declarado como JPEG y un JPEG habilitado para otra finalidad. Fixture específico CP-028 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** recorrido y auditoría.
- **Correspondencia con cobertura:** `CP-RF-13-1-01`, `CP-RF-13-1-02`, `CP-RF-13-2-01`, `CP-RF-13-2-02`, `CP-RF-13-3-01`, `CP-RF-13-3-02`, `CP-RF-13-4-01`, `CP-RF-13-4-02`, `CP-RF-15-1-01`, `CP-RF-15-1-02`, `CP-RF-15-2-01`, `CP-RF-15-2-02`, `CP-RF-15-3-01`, `CP-RF-15-3-02`, `CP-RF-07-2-01`, `CP-RF-07-2-02`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Confirmar un pedido directo con ambas ubicaciones en CABA. 2) Intentar pedidos directos nuevos con cada variante fuera de CABA y claves distintas. 3) Completar la entrega del pedido válido, confirmar la recepción y emitir una valoración. 4) Ejecutar la moderación administrativa con motivo.
- **Resultado esperado:** El pedido directo dentro de CABA conserva las condiciones de la versión publicada. Las variantes fuera de cobertura quedan sin pedido ni conversación. Cada participante puede valorar una vez tras la recepción. La moderación exige permiso y queda auditada. (`Estado: Planificado`).

Para verificar los medios de presentación, usar una copia independiente del producto. Autorizar y finalizar las fotos JPEG y PNG con finalidad producto_presentacion, vincularlas a la versión y comprobar que la vista pública entregue sus derivados. Intentar autorizar el MP4 y finalizar el PNG declarado como JPEG. La primera operación se rechaza y la segunda mantiene el archivo sin habilitar. Intentar asociar al catálogo el JPEG habilitado para otra finalidad. La API rechaza la referencia y conserva la versión anterior.

Con el límite inicial de cinco, guardar una versión con cinco fotos y un recurso privado de fabricación. Comprobar que se guarda y que la vista pública entrega los cinco derivados. Intentar guardar o editar con una sexta foto y comprobar que la API devuelve `422 validation_failed` con el límite vigente y conserva la versión anterior. Con una copia en borrador que ya tenga cinco fotos, activar un límite de cuatro y comprobar que se rechaza su publicación hasta quitar una foto. Consultar una versión publicada previamente y comprobar que conserva sus fotos. Restablecer la configuración inicial al terminar.


<a id="cp-029"></a>
### CP-029 — Cancelación por inasistencia al último encuentro (`CU-06`, `CU-07` · `RF-06.7`, `RF-07.2`, `RNF-05`, `RNF-06`)
- **Precondiciones:** Pedido con revisión aprobada, último encuentro acordado ya pasado, dos reprogramaciones aceptadas y recepción pendiente. Caso de inasistencia revisado y vinculado al pedido. Cuenta administrativa con capacidad específica y cliente titular.
- **Datos de prueba:** Usar pedidos independientes para cancelación válida, permiso insuficiente, motivo vacío, caso de otro tipo o de un encuentro anterior, cupo disponible, encuentro futuro y recepción ya confirmada. Probar en otra variante la carrera entre cancelación y recepción. Preparar las cuentas de ambos participantes, sus bandejas y un adaptador de correo de prueba. Fixture específico CP-029 en el registro adjunto.
- **Prioridad:** Alta. **Técnica:** recorrido de CU y concurrencia.
- **Correspondencia con cobertura:** `CP-RF-07-2-01`, `CP-RF-07-2-02`, `CP-RF-06-7-02`, `CP-X-13`.
- **Restablecimiento:** Conservar la evidencia de ejecución y reiniciar el conjunto sintético de este caso en el entorno de pruebas.
- **Pasos:** 1) Desde el caso revisado, enviar la intervención de cancelación con versión, motivo y clave estable. Repetirla con la misma clave. 2) Consultar pedido, entrega, caso, historial y auditoría e intentar confirmar recepción. 3) Repetir con cada condición inválida sobre un pedido independiente. 4) Ejecutar recepción y cancelación en paralelo sobre otro pedido apto para ambas.
- **Resultado esperado:** La cancelación válida cambia pedido y entrega a cancelados, registra la resolución del caso y conserva acuerdo, conteo, motivo y auditoría. Repetir la clave recupera el mismo resultado. Después de cancelar, se rechaza la recepción. Las solicitudes inválidas preservan el estado. En paralelo, se aplica una sola salida y la operación incompatible recibe 409. (`Estado: Planificado`).

Comprobar que la cancelación confirmada registre un único evento y prepare un aviso en la app y un correo para cada participante. Repetir el procesamiento y verificar la misma identidad por participante y canal. Intentar desactivar cada canal desde las dos cuentas y comprobar 403. En la variante concurrente, si se confirma primero la recepción, comprobar que se conserve ese resultado y que la cancelación rechazada quede sin evento de aviso.

## Datos y correspondencia de las fichas

El [registro de fixtures y correspondencias](/3daltoque-docs/documentos/92aa0408f516-casos-detallados.json) conserva cada CP detallado, su preparación y sus datos. Los 29 CP detallan recorridos y variantes del catálogo de 161 escenarios. Las relaciones conservan sus identificadores; la ejecución registra los resultados por caso y por variante.

## Perfil de aceptación

[PERF-01](/3daltoque-docs/planificacion/perfil-perf-01/) define entorno, datos, carga, límites, umbrales y registro de resultados para estos ensayos.
