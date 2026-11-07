---
title: "Manual de instalación de la aplicación"
---

# Manual de instalación de la aplicación

Estado del entregable: pendiente de elaboración. Actualización: 7 de noviembre de 2026.

El manual cubrirá la instalación y puesta en marcha de 3DAltoque, incluidos backend, worker, autenticación, base de datos, almacenamiento, aplicación Web y aplicación Mobile. Se completará con las versiones, comandos y comprobaciones de una versión ejecutable del producto.

Los apartados siguientes reúnen información base para preparar y verificar ese manual.

## Componentes y versiones

| Componente | Procedencia de su versión | Configuración necesaria |
| --- | --- | --- |
| Backend y worker | Tag del release, manifiesto de dependencias Python y archivo de bloqueo del backend. | Base, sesiones, almacenamiento, adaptadores, configuración y reloj. |
| Web | Tag del frontend, package.json y archivo de bloqueo. | URL pública de la API y retorno del checkout. |
| Mobile | Tag del proyecto React Native y dependencias bloqueadas. | URL accesible de API, identificador de aplicación y retorno autorizado. |
| PostgreSQL/PostGIS | Versión fijada en el manifiesto del entorno y migraciones del release. | Base, usuario de mínimo privilegio, conexión y respaldo. |
| Almacenamiento | Adaptador del release y versión del servicio. | Endpoint, bucket privado, credenciales, CORS y TTL. |

La ficha del release reúne commits de los tres clientes/servidor, versiones de runtime, esquema de base y comandos de arranque. Esa ficha acompaña cada instalación para reproducir la combinación evaluada.

## Preparar un entorno de la aplicación

1. Seleccioná el release y registrá los commits de backend, frontend y Mobile.
2. Cloná cada repositorio indicado en la [lista de repositorios](/3daltoque-docs/proyecto/repositorios/).
3. Instalá las versiones de Python, Node y herramientas Mobile fijadas por ese release.
4. Prepará PostgreSQL/PostGIS y un almacén de objetos privado exclusivos del entorno.
5. Copiá los ejemplos de configuración del release a archivos locales protegidos y completá sus valores.
6. Instalá dependencias utilizando los archivos de bloqueo. Conservá la salida y las versiones de herramientas en el registro de instalación.

El backend publica en su manifiesto los comandos de instalación, migración, carga de datos, API y worker. El frontend y Mobile publican sus scripts en package.json. El responsable de la instalación transcribe esos comandos al registro del release y comprueba cada salida antes de continuar.

## Variables del entorno

| Grupo | Variables o valores requeridos | Comprobación |
| --- | --- | --- |
| Identidad | Better Auth: BETTER_AUTH_SECRET, BETTER_AUTH_URL, conexión de datos, orígenes y retornos permitidos; URL de resolución de sesión para FastAPI. Referencia Cliente/Maker: session.expiresIn=604800, session.updateAge=86400 y cookieCache deshabilitado. | Renovación con reloj controlado, vencimiento de Cliente/Maker a los 7 días, límite administrativo de 8 horas desde session.createdAt, cierre con revocación y permisos por recurso. |
| Base | DATABASE_URL y configuración de conexiones. | Conexión, extensión PostGIS y migración vigente. |
| Objetos | Endpoint, bucket privado, acceso del servicio y TTL. | Carga autorizada y descarga temporal; objeto inaccesible públicamente. |
| Mapas | Proveedor, claves si aplica, atribución, límites y precisión pública. | Búsqueda y alternativa textual ante falla. |
| Contraseñas | Better Auth: emailAndPassword.minPasswordLength=15 y emailAndPassword.maxPasswordLength=128; contratos de registro y restablecimiento. | Límites de 14, 15, 128 y 129 caracteres y frase con espacios en ambos clientes. |
| Recuperación de contraseña | Better Auth: emailAndPassword.resetPasswordTokenExpiresIn=900, emailAndPassword.revokeSessionsOnPasswordReset=true y sendResetPassword conectado a Resend; retorno autorizado y transacciones del adaptador de identidad. | Enlace válido, vencido y consumido; revocación de todas las sesiones, confirmaciones concurrentes y rollback ante falla de la transacción de identidad. |
| Verificación de correo | Configurar emailVerification.expiresIn=3600, RESEND_API_KEY y AUTH_EMAIL_FROM en el componente Better Auth con dominio propio verificado en Resend. | Verificar el enlace dentro de la primera hora, comprobar el rechazo al alcanzar el vencimiento, solicitar otro enlace y consultar el correo verificado desde FastAPI. |
| Avisos de revisión | Configurar `RESEND_API_KEY` y `NOTIFICATIONS_EMAIL_FROM` en el worker con una credencial de envío por entorno y un remitente de un dominio propio verificado. | Aviso interno y resultado del correo. Comprobar reintentos con la misma clave y el límite de 24 horas. |
| Abono | Modo, credencial de la cuenta receptora, secreto de webhook y URLs HTTPS por entorno. | Checkout, firma, consulta del pago y concesión única. |
| Clientes | URL base /api/v1 y retornos Web/Mobile autorizados. | Dispositivo alcanza la API y recupera una compra al volver del proveedor. |
| Operación | Zona horaria de presentación, límites, intervalos del worker, retención y respaldo. | Configuración versionada y tareas recuperables. |

Las credenciales se proporcionan desde el gestor del entorno. Los repositorios conservan ejemplos con nombres de variables y valores ficticios. El entorno comercial requiere precio, moneda, cuenta receptora y política del plan aprobados por sus responsables.

## Migraciones y datos iniciales

Aplicá las migraciones del release sobre una base exclusiva. Comprobá la versión del esquema del negocio y las migraciones de Better Auth. [ADR-004](/3daltoque-docs/decisiones/autenticacion-better-auth/) identifica la adaptación pendiente del catálogo de 58 tablas y la separación de responsabilidades. La primera configuración crea catálogos, plan y capacidades administrativas mediante el procedimiento autorizado. La carga de datos sintéticos se restringe a prueba o demo.

Los [fixtures funcionales](/3daltoque-docs/documentos/8a0c5389371a-datos-funcionales.json) identifican usuarios, producto, plan, escala y archivos de prueba. La carga conserva un namespace para poder restablecerlos sin afectar otro entorno. Las cuentas de demostración obtienen sus contraseñas durante la preparación y se comunican mediante el canal privado del equipo.

## Arranque y comprobación

1. Iniciá base y almacén; comprobá conectividad y permisos.
2. Ejecutá el componente Node/TypeScript de Better Auth, la API FastAPI y el worker con los comandos del release.
3. Consultá /health/live y /health/ready; registrá estado y request_id ante un error.
4. Iniciá Web y abrí la dirección informada por su servidor.
5. Iniciá Mobile con la URL de API accesible desde el emulador o dispositivo. La dirección loopback del equipo requiere el encaminamiento propio del dispositivo.
6. Ejecutá un acceso de cliente y maker, consultá un perfil y cargá un archivo privado.
7. Confirmá un pedido de prueba, enviá un mensaje y verificá que el worker procese su aviso.
8. Consultá compra del abono en demo o sandbox y verificá la separación de entornos.

## Actualización y reversión

Conservá release anterior, respaldo y compatibilidad de migraciones antes de actualizar. Detené la admisión de nuevas operaciones durante una migración que requiera exclusión. Aplicá el release, comprobá salud y recorridos críticos, y habilitá tráfico. Una reversión de aplicación requiere un esquema compatible; una restauración de base se realiza en destino aislado y se valida antes del cambio de conexión.

## Respaldo y recuperación

Generá una copia consistente de base y el manifiesto de objetos, con hora de generación, esquema y hashes. Conservá el conjunto durante 30 días desde su generación. Al vencer, retiralo del catálogo de restauración y conservá los artefactos que todavía usen otras copias vigentes. Restaurá una copia vigente en una base separada, recuperá los objetos y verificá referencias, cantidades y permisos. Reaplicá la política vigente de acceso y retención antes de habilitar consultas. Ejecutá PNF-008 y los accesos críticos después de restaurar. PERF-01 establece los objetivos del piloto.

## Diagnóstico

| Síntoma | Revisión y recuperación |
| --- | --- |
| Readiness 503 | Revisar conexión y configuración indispensable; correlacionar el control fallido con logs. |
| Mobile no conecta | Verificar URL alcanzable, HTTPS y configuración de red del dispositivo. |
| Archivo inaccesible | Revisar pertenencia, estado, bucket y vencimiento; emitir otra autorización desde la API. |
| Abono pendiente | Consultar compra y evento persistido; conciliar antes de repetir una intención. |
| Worker atrasado | Revisar trabajos y eventos_salida, error y próximo intento; preservar las claves de deduplicación. |
| Error de versión | Recuperar recurso vigente antes de reenviar una mutación. |

## Registro de instalación

Registrar fecha, responsable, entorno, commits, versiones, migración, configuración sin secretos, comandos ejecutados, controles de salud, resultados de humo, respaldo y ubicación de evidencia. Ese registro permite verificar el manual sobre una versión concreta del producto.

Referencias: [arquitectura](/3daltoque-docs/diseno/implementacion/), [contratos operativos](/3daltoque-docs/diseno/contratos-operativos/), [seguridad](/3daltoque-docs/diseno/seguridad/) y [PERF-01](/3daltoque-docs/planificacion/perfil-perf-01/).
