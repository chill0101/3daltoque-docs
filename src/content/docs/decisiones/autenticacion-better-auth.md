---
title: "ADR-004 Autenticación con Better Auth"
---

# ADR-004 · Autenticación con Better Auth

Fecha de decisión: 5 de noviembre de 2026. Revisión técnica: 7 de noviembre de 2026. Decisión: Better Auth elegido por Lucas Ruiz durante la revisión de PD-01.

## Problema y fundamento

RF-01.1, RF-01.4 y RF-01.5 requieren registro, acceso y cierre de sesión compartidos por Web y Mobile. DC-12 exige correo verificado para habilitar al maker. El equipo eligió un componente open source que gestione credenciales y enlaces para concentrar el desarrollo de FastAPI en las reglas de 3DAltoque.

## Decisión y responsabilidades

Better Auth administra identidad de acceso, contraseña, sesión y verificación del correo en Node/TypeScript. La integración propuesta lo aloja junto a React en Next.js. FastAPI conserva perfiles, roles, estado de cuenta, autorización por recurso y habilitación comercial. PostgreSQL conserva los datos con propiedad de esquema y migraciones identificadas por componente.

Better Auth construye y valida el enlace de verificación. Su callback de envío se conecta a la API de Resend, elegido en DC-15 para entregar los correos de verificación. El dominio, remitente y credenciales pertenecen a la configuración del entorno.

## Política de contraseñas

DC-22 fija entre 15 y 128 caracteres para las contraseñas nuevas y admite frases y espacios. Better Auth configura emailAndPassword.minPasswordLength=15 y emailAndPassword.maxPasswordLength=128; los límites se aplican en registro y restablecimiento y el contrato RegistroInput los conserva. Web y Mobile envían la cadena introducida conservando los espacios. El proveedor verifica la contraseña de acceso y protege su almacenamiento.

El mínimo de 15 toma como referencia el criterio de NIST SP 800-63B para contraseñas como único factor. Las pruebas de integración comprueban los límites y la aceptación de frases en ambos clientes.

## Límite de intentos de inicio de sesión

El inicio de sesión admite hasta cinco intentos fallidos por identificador de acceso en una ventana móvil de 60 segundos, como límite inicial configurable. Web y Mobile comparten el conteo. Al alcanzar el máximo, los intentos siguientes devuelven 429 con el tiempo de espera en Retry-After. El componente de identidad aplica la regla de DC-95 a todo inicio con correo y contraseña. La clave del conteo se deriva del correo normalizado con la misma regla de identidad, incluso para correos inexistentes. La guarda y el registro del resultado se coordinan por clave entre instancias para mantener el límite ante intentos simultáneos. Los intentos bloqueados no extienden la espera. Retry-After informa en segundos cuándo sale de la ventana el fallo más antiguo. Los errores de credenciales y de tasa mantienen respuestas neutrales y el registro de seguridad excluye contraseñas y correo en claro.

La guarda se aplica en POST /api/auth/sign-in/email, compartida por Web y Mobile, con un solo conteo por intento. El limitador de tráfico de Better Auth cuenta peticiones por IP y queda como control complementario. Las pruebas ejercitan los dos controles por separado. El alcance por identificador protege el acceso cuando los intentos provienen de varias redes. [Rate Limit de Better Auth](https://better-auth.com/docs/concepts/rate-limit), [OWASP sobre límites de inicio de sesión](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#login-throttling).

## Envío de verificación con Resend

El componente Node/TypeScript configura el callback sendVerificationEmail de Better Auth para enviar el mensaje por la API de Resend. RESEND_API_KEY permanece en el gestor de secretos del entorno; la configuración de la aplicación define AUTH_EMAIL_FROM como remitente de un dominio propio verificado en Resend. Dominio y remitente se registran antes de habilitar envíos a usuarios.

La aceptación del envío por Resend registra el intento de entrega. Better Auth confirma el correo al validar el enlace. DC-23 fija una hora de vigencia desde la emisión mediante emailVerification.expiresIn=3600. Si vence o falla la entrega, el correo queda pendiente y el usuario puede solicitar otro envío. Los registros excluyen enlaces completos, tokens y credenciales.

<a id="recuperacion-de-contrasena"></a>

## Recuperación de contraseña

DC-20 fija el enlace de recuperación en 15 minutos desde su emisión y un único restablecimiento exitoso. Better Auth configura emailAndPassword.resetPasswordTokenExpiresIn=900 y el callback sendResetPassword utiliza Resend con el remitente del entorno. La solicitud responde de forma neutral para proteger la existencia de la cuenta. Los retornos Web/Mobile pertenecen a la lista autorizada.

Los contratos nativos de Better Auth utilizan el prefijo /api/auth del componente Node/TypeScript:

| Método y ruta nativa | Entrada | Resultado del recorrido |
| --- | --- | --- |
| POST /request-password-reset | email y redirectTo autorizado | Solicitud recibida con respuesta neutral; si corresponde, se entrega el enlace. |
| POST /reset-password | token y newPassword | Restablecimiento confirmado o error de token o contraseña. |

El enlace permite abrir el formulario. Better Auth valida token, vencimiento y política de contraseña al confirmar. El consumo y el cambio se resuelven en una transacción con el adaptador de identidad elegido; las pruebas comprueban que dos confirmaciones concurrentes producen un solo restablecimiento. Una contraseña rechazada conserva el enlace disponible hasta su vencimiento. Un token vencido, consumido o inválido ofrece solicitar otro enlace. Los logs excluyen token, URL completa y contraseña.

DC-21 configura emailAndPassword.revokeSessionsOnPasswordReset=true. El consumo del token, la contraseña nueva y la revocación de todas las sesiones de la cuenta se confirman en la misma transacción, con sesiones y verificaciones persistidas en la base de identidad. El adaptador debe habilitar transacciones. Al completar el recorrido se requiere iniciar sesión nuevamente con la contraseña nueva. Las rutas nativas y su configuración forman parte de la adaptación de identidad descrita abajo.

## Sesión compartida con FastAPI

Web envía la cookie protegida; Mobile conserva la sesión en almacenamiento seguro y utiliza el plugin Bearer. El adaptador de FastAPI consulta la sesión mediante Better Auth y obtiene una identidad estable y el estado del correo. El backend verifica además el estado y los permisos locales en cada recurso. La comunicación con el componente de autenticación utiliza una dirección fija de configuración y transporte protegido.

La resolución debe contrastar sesiones y verificación vigentes en el proveedor; la política de caché debe preservar revocación y cambios de correo. Una sesión inválida produce rechazo de autenticación; una falla del componente devuelve indisponibilidad y conserva los datos de negocio. Los secretos quedan excluidos de logs y respuestas públicas. DC-18 fija 7 días renovables con actividad para Cliente y Maker. La referencia configura session.expiresIn=604800 y session.updateAge=86400: al usar una sesión válida después de alcanzar el intervalo, Better Auth extiende su vencimiento a la hora actual más 7 días. Cerrar sesión la revoca; una sesión vencida o revocada requiere autenticación nuevamente. La resolución utiliza session.cookieCache.enabled=false para consultar vigencia persistida. Cuando Better Auth renueva la sesión, el adaptador propaga al cliente la cookie de sesión actualizada que corresponda y su vencimiento; Mobile actualiza los datos de sesión conservados por su cliente. DC-19 fija el acceso administrativo en un máximo de 8 horas desde la autenticación. FastAPI valida session.createdAt de Better Auth en cada operación administrativa, además de sesión, cuenta y permiso. La actividad y la renovación del vencimiento conservan esa fecha. Al alcanzar el límite devuelve 401 reauthentication_required y exige iniciar sesión nuevamente.

## Contextos de cliente y maker

DC-16 permite ambos perfiles en una misma cuenta. El selector de contexto presenta los roles públicos asignados y dirige a la navegación de Cliente o Maker. Cada pestaña Web y cada instancia Mobile conserva su selección. Better Auth mantiene la misma identidad y sesión; FastAPI comprueba los roles y el vínculo con cada recurso al operar. La selección de un perfil pendiente permite continuar su preparación; la habilitación comercial sigue las guardas de CU-09 y F11.

La separación se representa mediante usuarios, usuario_roles, clientes y makers y la propiedad de solicitudes, publicaciones y pedidos. El selector conserva una experiencia de cambio de espacio con los dos contextos personales de la cuenta. Administración utiliza su acceso Web autorizado.

Los listados compartidos de pedidos y conversaciones reciben rol=cliente o rol=maker. FastAPI comprueba que el rol pertenece a la cuenta y filtra por su participación en ese papel. Los cursores se vinculan al usuario, rol y filtros de la consulta. Un pedido requiere identidades distintas: el usuario del maker se contrasta con el usuario cliente incluso cuando ambos perfiles están asignados a una cuenta.

Cada cliente separa caché y borradores por usuario, contexto y recurso. Al cambiar de contexto vuelve a consultar capacidades y descarta respuestas de lecturas del contexto anterior para la vista actual. Una mutación ya enviada conserva su intención, actor y recurso originales; el resultado se incorpora a su contexto de origen. El cierre de sesión limpia preferencias y datos locales de esa sesión.

## Registro y verificación del maker

1. Better Auth registra la identidad y solicita el envío del enlace.
2. FastAPI vincula idempotentemente esa identidad con el perfil Cliente. Una interrupción conserva la posibilidad de retomar el vínculo.
3. El titular puede elegir «Crear mi perfil maker»: POST /makers/me registra nombre_publico, perfil pendiente y asignación maker en una transacción, conservando el perfil cliente. La unicidad por usuario y la clave de operación protegen los reintentos. El perfil comienza con disponible=false; los estados y beneficios existentes se conservan ante solicitudes repetidas.
4. El enlace confirma el correo en Better Auth y retorna a una dirección Web o Mobile permitida. El cliente vuelve a consultar sesión y capacidades; la verificación por sí sola conserva el estado comercial del maker.
5. FastAPI exige correo verificado y las demás condiciones de CU-09 antes de habilitarlo y conceder su única prueba inicial.

## Contratos y persistencia de identidad

Las rutas nativas de Better Auth se montan bajo `/api/auth` en Node/TypeScript. El [OpenAPI](/3daltoque-docs/documentos/e37598f41824-openapi.json) declara un servidor raíz para esas operaciones y conserva `/api/v1` para FastAPI. F01 incluye registro, acceso, cierre, consulta de sesión, envío y validación de correo y solicitud y confirmación de recuperación. Los DTO y errores de esas ocho operaciones conservan el formato del proveedor. El SDK cliente utiliza sus métodos nativos; las cookies y el encabezado `set-auth-token` del plugin Bearer se procesan como credenciales.

FastAPI expone `POST /identidad/perfil` para completar el alta y `GET /identidad/perfil` para recuperar la identidad local, los roles, capacidades y vencimientos. El alta recibe la versión aceptada de condiciones y una clave de operación. La sesión determina la identidad externa; la transacción crea el usuario local, Cliente, rol y aceptación. La unicidad del vínculo permite retomar una interrupción entre componentes. Un usuario que inicia sesión con el alta incompleta recibe `409 profile_setup_required` al consultar su contexto y continúa ese paso.

El [modelo lógico](/3daltoque-docs/modelado/modelo-logico/) conserva el UUID de negocio en usuarios. `usuarios.identidad_externa_id` referencia de forma única `auth_users.id`. Better Auth administra los modelos user, session, account y verification, con `modelName` configurado como `auth_users`, `auth_sessions`, `auth_accounts` y `auth_verifications`. Sus campos conservan los nombres nativos. El correo local sirve como proyección de contacto; el proveedor determina el correo y su verificación. La resolución de sesión sincroniza esa proyección con la identidad validada antes de usar el contacto. Las tablas técnicas tienen acceso restringido y migraciones propiedad del componente Node/TypeScript. Las tablas de negocio y la FK de vínculo pertenecen a las migraciones de FastAPI.

Esta separación conserva las referencias existentes a usuarios y delega la gestión de secretos en el componente elegido. Los [diagramas de arquitectura](/3daltoque-docs/diseno/arquitectura/), [clases de diseño](/3daltoque-docs/diseno/clases-de-diseno/) y [DER de identidad](/3daltoque-docs/modelado/datos/) representan la misma frontera.

## Configuración y comprobaciones de implementación

| Tema | Trabajo pendiente | Comprobación |
| --- | --- | --- |
| Versión y persistencia | Fijar versión, adaptador transaccional y migraciones generadas de Better Auth; cotejar tipos, nulabilidad, claves e índices con el catálogo lógico. | Esquema generado, permisos de base y migraciones reproducibles; alta local recuperable. |
| Despliegue y transporte | Configurar origen de Node/TypeScript, proxy, trusted origins, cookies y transporte Mobile. La propuesta de alojamiento junto a Web en Next.js queda sujeta a PD-11. | CSRF, renovación, revocación, 401 y falla 503; una sesión de administración vence a las ocho horas originales. |
| Correo | Verificar dominio y remitente de Resend y retornos Web/Mobile autorizados. | Verificación de una hora y recuperación de 15 minutos; enlaces válidos, vencidos, repetidos y reenvío. |
| Seguridad | Implementar guarda de cinco fallos por identificador en 60 segundos, consumo de recuperación y revocación coordinados. | Pruebas concurrentes entre clientes e instancias, secretos excluidos de logs y cierre de sesiones después del restablecimiento. |

Estas tareas pertenecen a la implementación de PD-01 y PD-11. Los contratos, datos y diagramas se revisan como un mismo conjunto documental.

## Fuentes técnicas

Consulta: 7 de noviembre de 2026.

- [Integración con Next.js](https://better-auth.com/docs/integrations/next): montaje del componente de autenticación.
- [Sesiones](https://better-auth.com/docs/concepts/session-management): consulta, revocación y configuración.
- [Plugin Bearer](https://better-auth.com/docs/plugins/bearer): transporte de sesión para clientes que requieren Authorization.
- [Correo y verificación](https://better-auth.com/docs/concepts/email): callback de envío, enlaces y retornos.
- [Modelo de datos y migraciones](https://better-auth.com/docs/concepts/database): tablas técnicas y generación de esquema.
- [Integración Expo](https://better-auth.com/docs/integrations/expo): alternativa documentada para almacenamiento seguro y retornos de React Native si se adopta Expo.
- [Resend con Node.js](https://resend.com/docs/send-with-nodejs): SDK y credencial de servidor.
- [Dominios verificados en Resend](https://resend.com/docs/dashboard/domains/introduction): dominio propio y remitente.
- [Recuperación con email y contraseña](https://better-auth.com/docs/authentication/email-password): callback, contratos nativos, vigencia y consumo del token.
- [NIST SP 800-63B, contraseñas](https://pages.nist.gov/800-63-4/sp800-63b.html#passwordver): referencia de diseño para el mínimo de 15 caracteres.
- La vigencia del enlace se configura en segundos. [Opciones de verificación de Better Auth](https://better-auth.com/docs/reference/options#emailverification).

- [API del servidor de Better Auth](https://better-auth.com/docs/concepts/api): consulta de sesión y propagación de encabezados.
