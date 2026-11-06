---
title: "Seguridad y operación"
---

# Especificaciones de seguridad y operación

Versión 1.1. Fecha: 5 de noviembre de 2026. Referencias: RNF-04, RNF-06, RNF-09 a RNF-12, RNF-15, RNF-16 y RNF-19.

## Activos y fronteras de confianza

Los activos protegidos comprenden identidades, sesiones, domicilios exactos, STL, mensajes, evidencia, acuerdos versionados, compras del abono y credenciales de proveedores. Web y Mobile son clientes de la API; el backend decide permisos, importes y transiciones. El almacén de objetos y los proveedores externos tienen credenciales y contratos propios. El worker procesa trabajos persistidos con la misma autorización de dominio del backend.

## Identidad y sesiones

Better Auth administra credenciales y sesiones persistidas y revocables. El componente Node/TypeScript valida la sesión; FastAPI resuelve la identidad mediante un adaptador y comprueba estado de cuenta y permisos por recurso. El control del maker requiere el correo verificado informado por Better Auth. [ADR-004](/3daltoque-docs/decisiones/autenticacion-better-auth/) detalla responsabilidades y adaptación.

Web utiliza cookies HttpOnly, Secure en HTTPS y SameSite compatible con el despliegue; las mutaciones por cookie verifican origen y protección CSRF. Mobile transporta la sesión mediante el plugin Bearer de Better Auth y conserva el secreto en almacenamiento seguro del sistema. La resolución de sesión consulta su vigencia en Better Auth con cookieCache deshabilitado y verifica revocación y correo actualizados antes de habilitar operaciones protegidas.

Cliente y Maker utilizan sesiones de 7 días renovables con actividad mientras sigan vigentes. La referencia de Better Auth configura expiresIn=604800 y updateAge=86400; al alcanzar el intervalo de actualización, el uso válido extiende el vencimiento a la hora actual más 7 días. Cerrar sesión revoca la sesión del dispositivo y limpia sus datos locales. Una petición posterior con ese secreto obtiene 401. El panel y las operaciones administrativas exigen una autenticación con antigüedad menor a 8 horas. FastAPI contrasta la hora del servidor con session.createdAt de Better Auth y comprueba sesión, cuenta y capacidad específica. Al alcanzar el límite devuelve 401 reauthentication_required y exige iniciar sesión nuevamente. La actividad y la renovación del vencimiento conservan la fecha original de autenticación. Better Auth administra el hash de contraseña y sus migraciones. FastAPI conserva la asociación de identidad, los roles públicos y el estado de negocio. La creación administrativa utiliza un procedimiento autorizado y auditado.

La guarda administrativa se aplica a consultas, mutaciones y rutas que requieran capacidad administrativa. admin_expires_at informa el menor valor entre el vencimiento de la sesión y su creación más 8 horas; el servidor calcula y valida ese límite. Un nuevo inicio de sesión válido genera la referencia de autenticación utilizada para el siguiente período. Cliente y Maker conservan las reglas de DC-18.

## Política de contraseñas

Las contraseñas nuevas admiten entre 15 y 128 caracteres y permiten frases y espacios. Better Auth aplica minPasswordLength=15 y maxPasswordLength=128 en registro y restablecimiento. Web y Mobile conservan los espacios introducidos. Las validaciones se ejecutan en servidor; el proveedor administra el hash y los registros excluyen el secreto. ADR-004 conserva el fundamento y los parámetros de integración.

## Recuperación de contraseña

Better Auth emite el enlace de recuperación con una vigencia de 900 segundos y sendResetPassword lo envía mediante Resend. El token se consume al confirmar exitosamente una contraseña válida. Su validación y cambio de contraseña se resuelven con la transacción del adaptador de identidad; una solicitud repetida o concurrente conserva el consumo único. El formulario permite corregir una contraseña rechazada mientras el enlace siga vigente. Al vencer se puede solicitar otro.

La solicitud protege la existencia de la cuenta y limita los envíos según la configuración del entorno. Los retornos Web/Mobile se autorizan por configuración y los registros excluyen tokens, enlaces completos y contraseñas. El restablecimiento exitoso revoca todas las sesiones de la cuenta mediante emailAndPassword.revokeSessionsOnPasswordReset=true. Token, contraseña y revocación se confirman en la misma transacción de la base de identidad; sesiones y verificaciones utilizan esa persistencia. FastAPI rechaza los accesos previos con 401, incluidos los administrativos. Los clientes limpian sus datos locales de sesión al recibir el rechazo y requieren iniciar sesión nuevamente con la contraseña nueva.

## Contextos de una cuenta

Cliente y maker pueden pertenecer al mismo usuario. FastAPI valida la asignación del rol y la propiedad de cada recurso, incluido el rol de participación en listados compartidos. El contexto seleccionado en el cliente organiza la navegación y sus datos locales. Una selección manipulada o un rol revocado deniega la operación. Administración conserva su acceso y asignación autorizados. La confirmación de pedido compara el usuario cliente con el usuario del maker y exige participantes diferentes.

La caché de cada cliente incluye usuario y contexto; el cambio de cuenta o cierre de sesión limpia los datos asociados. Cada pestaña o dispositivo conserva su selección y las peticiones en curso mantienen actor, intención y recurso de origen.

## Autorización por recurso

| Recurso/acción | Control obligatorio |
| --- | --- |
| Perfil propio | Identidad titular; campos editables permitidos. |
| Perfil, catálogo y portfolio públicos | Estado publicado y derivados autorizados; zona con precisión pública. |
| Solicitud y ofertas | Propietario cliente o maker invitado según la acción. |
| Confirmación de pedido | Cliente titular, versión vigente y maker elegible; participantes diferentes. |
| Chat, historial y evidencia | Participante del pedido confirmado; archivo habilitado para ese contexto. |
| Revisión y recepción | Cliente titular; revisión y acuerdo vigentes. |
| Membresía | Maker titular o capacidad administrativa específica con motivo. |
| Moderación y soporte | Capacidad por acción, motivo y registro de auditoría; acceso mínimo al contenido necesario. |

Una denegación conserva el estado del recurso. Las respuestas ajenas pueden usar 404 para proteger su existencia. La interfaz presenta las capacidades devueltas por servidor y revalida al confirmar cada mutación.

## Archivos

1. Autorizar finalidad, titular, tamaño declarado y formato permitido.
2. Emitir una autorización de carga de corta duración para un objeto privado.
3. Al finalizar, comprobar tamaño real, integridad, tipo y análisis requerido.
4. Habilitar el archivo para el contexto permitido; generar derivados públicos únicamente con autorización explícita.
5. Emitir descargas temporales después de verificar pertenencia en cada solicitud.
6. Retirar accesos y aplicar conservación o anonimización según la política versionada del entorno.

Los nombres de objetos son opacos y el bucket bloquea el listado público. El analizador opera con límites de tiempo, memoria y tamaño. Un STL inválido conserva el borrador y devuelve su causa de rechazo o análisis insuficiente.

## Integridad de operaciones

La aceptación de oferta y el pedido directo ejecutan validación, conservación de condiciones, creación de pedido y eventos en una transacción. Una clave de operación se vincula a actor, operación, recurso y contenido normalizado. Repetir una intención devuelve su resultado; reutilizar su clave con otro contenido devuelve conflicto. El pedido directo recupera primero el resultado de esa clave para mantener un acuerdo ya confirmado aunque la publicación haya cambiado.

Los cobros del abono validan firma, referencia, receptor, entorno, importe, moneda y estado consultado al proveedor. El retorno del navegador consulta el backend. Los eventos se conservan en eventos_proveedor y las concesiones se deduplican por compra. Las credenciales permanecen en backend y worker.

## Límites y observabilidad

El entorno publica límites de archivos, longitud de mensajes, paginación, tasa y presupuesto de análisis. La referencia de prueba está en PERF-01. Las respuestas de tasa incluyen ventana y Retry-After cuando corresponda. El inicio de sesión admite hasta cinco intentos fallidos por identificador de acceso en una ventana móvil de 60 segundos, como límite inicial configurable. Web y Mobile comparten el conteo. Al alcanzar el máximo, los intentos siguientes devuelven 429 con el tiempo de espera en Retry-After. El control aplica la misma política a correos existentes y a correos desconocidos. Los logs conservan request_id, servicio, acción y código de resultado; los secretos, cuerpos de chat, archivos y domicilios privados se excluyen.

Liveness informa que el proceso responde. Readiness comprueba PostgreSQL y configuración indispensable. La indisponibilidad de mapas, correo o cobros se informa por integración y permite las alternativas previstas; cada dependencia tiene timeout y tratamiento de recuperación.

## Conservación de auditoría

Cada registro de auditoría se conserva durante 12 meses desde la fecha de la acción. Los registros necesarios para un reclamo abierto o una obligación legal vigente se conservan con acceso restringido mientras dure la excepción. El proceso de retiro autorizado comprueba la fecha de la acción y las excepciones vigentes antes de retirar cada registro elegible. Al cesar una excepción, reevalúa el registro con el plazo original. Las operaciones de negocio agregan entradas y conservan íntegros los registros vigentes. [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12) y [PNF-007](/3daltoque-docs/planificacion/pruebas/#pnf-007) fijan la regla y su comprobación.

## Copias de resguardo y recuperación

Generar copia consistente de PostgreSQL y un manifiesto de los objetos referenciados con sus hashes. Registrar por entorno la fecha y hora de generación, release, migración y política de retención. Cada copia de respaldo del piloto se conserva durante 30 días desde su generación. Al vencer el plazo, el proceso de retención la retira del conjunto disponible para restauración. Retirar sus artefactos y preservar los que todavía utilicen otras copias vigentes. Restaurar en un destino aislado y verificar integridad referencial, cantidades y objetos privados. Reaplicar los retiros, vencimientos y restricciones vigentes antes de habilitar consultas sobre los datos recuperados. Verificar los recorridos de acceso, consulta de pedido y membresía. El RPO acordado del piloto es de 24 horas. PNF-008 lo comprueba a partir de la hora del incidente simulado y del punto consistente recuperado. El RTO acordado es de cuatro horas desde el incidente simulado hasta verificar acceso, consulta de pedido y membresía en el entorno restaurado.

## Respuesta a incidentes

Identificar entorno, alcance, recurso y hora; contener accesos comprometidos; revocar sesiones o credenciales afectadas; conservar evidencia con acceso restringido; recuperar desde estados consistentes y verificar invariantes. Registrar causa, acciones, responsables y prevención. Las comunicaciones sobre datos personales se revisan con la persona responsable de la plataforma y las condiciones aplicables al despliegue.

## Comprobación

CP-014, CP-020, CP-024 y CP-027 cubren permisos, privacidad, webhooks y entornos. PNF-005 a PNF-008 cubren límites, accesibilidad, conservación y recuperación. La ejecución conserva la evidencia según el [plan de pruebas](/3daltoque-docs/planificacion/pruebas/).
