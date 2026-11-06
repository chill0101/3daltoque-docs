---
title: "SPEC-F01 · Registro e inicio de sesión"
---

# SPEC-F01 · Registro e inicio de sesión

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Crear y utilizar una identidad con los perfiles y permisos correspondientes.

Better Auth gestiona credenciales, sesión y cierre de sesión. FastAPI vincula la identidad con su perfil y valida estado de cuenta, roles y permisos. Las cuentas administrativas se crean mediante un procedimiento autorizado. La primera habilitación comercial del maker se trata en F11.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F01](/3daltoque-docs/proyecto/funcionalidades/#f01) |
| Actores | Cliente, maker y administración autorizada. |
| Canales | ABM. Web y Mobile; administración en Web. |
| RF | [RF-01.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-1), [RF-01.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-4), [RF-01.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-5) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17) |
| CU | [CU-13](/3daltoque-docs/analisis/casos/cu-13-registrarse-y-acceder/) |

## 2. Pantallas y permisos

[WEB-AUTH-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-auth-01), [WEB-AUTH-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-auth-02), [MOB-AUTH-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-auth-01), [MOB-AUTH-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-auth-02).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

### Selector de contexto

Una misma cuenta admite cliente y maker. El contenedor presenta el contexto activo en la navegación Web y Mobile y ofrece los perfiles públicos asignados. Cambiar de contexto conserva la identidad y la sesión y abre el recorrido del perfil elegido. Un perfil maker pendiente dirige a completar datos y habilitación. El registro crea el perfil Cliente; «Crear mi perfil maker» incorpora después el perfil productivo pendiente a la misma cuenta, según F03.

El selector se compone con [DS05](/3daltoque-docs/design-system/02-componentes/#ds05), [DS38](/3daltoque-docs/design-system/02-componentes/#ds38) y [DS43](/3daltoque-docs/design-system/02-componentes/#ds43). Conserva etiqueta accesible del perfil actual, operación por teclado y foco en el destino. Las capacidades proceden del backend.

La selección pertenece a cada pestaña Web o instancia Mobile. Historial, conversaciones, filtros, caché y borradores se segmentan por usuario y contexto. Los [contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/) definen las guardas y el tratamiento de respuestas al alternar.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| email | Texto | Según PD-01 | Formato e identificador normalizado; unicidad en servidor |
| password | Secreto | Sí en registro y acceso | Contraseña nueva: entre 15 y 128 caracteres, con frases y espacios permitidos; validación en servidor y exclusión de logs y respuestas |
| Perfil inicial | Asignación del servidor | Automática | Cliente en el registro público; el rol maker se incorpora desde F03 |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Usuario | Elige registro o acceso y completa los datos requeridos. |
| 2 | Sistema | Better Auth valida credenciales y sesión; FastAPI comprueba estado de cuenta, perfiles y límites. |
| 3 | Sistema | Better Auth registra o autentica la identidad; en el alta, FastAPI vincula su perfil Cliente. El perfil maker se incorpora después desde su flujo autorizado. |
| 4 | Sistema | Entrega las capacidades y la sesión conforme a la política de seguridad. |
| 5 | Usuario | Abre el recorrido de cliente, maker o administración autorizado. |

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-13](/3daltoque-docs/analisis/casos/cu-13-registrarse-y-acceder/).

### Recuperar contraseña

Desde WEB-AUTH-01 o MOB-AUTH-01, el usuario elige «Olvidé mi contraseña» e informa su correo. Better Auth recibe la solicitud con una respuesta neutral y sendResetPassword entrega el enlace mediante Resend cuando corresponde. El enlace vence a los 15 minutos de su emisión.

El enlace abre el formulario de contraseña nueva. Al confirmar, el componente valida token, vencimiento y política de contraseña y consume el enlace con el cambio exitoso. Una contraseña rechazada permite corregirla mientras el enlace siga vigente. Un enlace vencido o consumido ofrece solicitar otro. Las confirmaciones simultáneas permiten un solo restablecimiento. Se revocan todas las sesiones de la cuenta en Web y Mobile, incluidos los accesos administrativos. FastAPI responde 401 a las sesiones previas; los clientes limpian sus datos locales de sesión al detectar el rechazo. El usuario debe iniciar sesión nuevamente con la contraseña nueva.

Los [contratos nativos de Better Auth](/3daltoque-docs/decisiones/autenticacion-better-auth/#recuperacion-de-contrasena) identifican las rutas de recuperación del componente Node/TypeScript. FastAPI conserva perfiles, roles y estado comercial.

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F01-01 | Paso 2. Credenciales inválidas, cuenta bloqueada o identificador duplicado: Responde de forma comprensible y protege los datos de la cuenta. |
| ALT-F01-02 | Paso 3. Intenta asignar administración desde registro público: El sistema rechaza el privilegio solicitado. |
| ALT-F01-03 | Paso 5. Solicita cerrar sesión: El sistema retira la autorización del cliente y aplica la revocación definida para sus credenciales. |
| ALT-F01-04 | Al alcanzar el máximo de intentos fallidos, el cliente muestra el tiempo de espera informado por Retry-After y permite reintentar al finalizarlo. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas de la revisión previa bajo `/api/v1`. La selección de Better Auth requiere cerrar su correspondencia con las rutas nativas de `/api/auth`, el vínculo de perfiles y el transporte de sesión, según [ADR-004](/3daltoque-docs/decisiones/autenticacion-better-auth/). Esta tabla identifica los contratos afectados por esa adaptación.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| POST | `/auth/registro` | identificador, secreto y aceptación de condiciones | identidad, perfil Cliente y siguiente acción | El servidor asigna Cliente; las entradas de roles o privilegios ajenas al contrato se rechazan. |
| POST | `/auth/sesion` | credenciales y tipo de cliente | identidad, capacidades y expiración | Cuenta habilitada. Con cinco fallos en los últimos 60 segundos para el mismo correo, los intentos siguientes reciben 429 y Retry-After. |
| DELETE | `/auth/sesion` | sesión vigente | resultado de cierre | Retira o revoca la autorización conforme a la política. |

## 7. Datos, consistencia e integración

El maker debe verificar su correo electrónico antes de habilitarse para recibir y aceptar trabajos. El backend comprueba esa condición y conserva la prueba gratuita sin iniciar mientras la habilitación esté pendiente. Better Auth genera y valida el enlace de verificación y Resend entrega el correo. El enlace vence una hora después de su emisión. Desde el aviso de vencimiento, el usuario puede solicitar otro enlace. El dominio, remitente y retornos se configuran según PD-01 y ADR-004.

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `usuarios`, `usuario_roles`, `clientes`, `makers`, `sesiones`.

Better Auth gestiona credenciales, sesión y cierre de sesión. FastAPI vincula la identidad con su perfil y valida estado de cuenta, roles y permisos. Las cuentas administrativas se crean mediante un procedimiento autorizado. La primera habilitación comercial del maker se trata en F11.

Las sesiones de Cliente y Maker duran 7 días renovables con actividad. Al alcanzar el intervalo de actualización de referencia de 24 horas, el uso de una sesión válida extiende su vencimiento a la hora actual más 7 días. La respuesta conserva la expiración vigente. Cambiar de contexto conserva la misma sesión y la vigencia comercial del maker mantiene sus fechas. Cerrar sesión revoca ese acceso; una sesión vencida o revocada requiere autenticación nuevamente.

Administración utiliza una guarda de antigüedad máxima de 8 horas desde la creación de la sesión de Better Auth. Al alcanzar el límite requiere iniciar sesión nuevamente. La actividad y el cambio de contexto conservan ese plazo. El vencimiento administrativo calculado por servidor se expone como admin_expires_at cuando corresponde.

## 8. Componentes y estados

[DS01](/3daltoque-docs/design-system/02-componentes/#ds01), [DS03](/3daltoque-docs/design-system/02-componentes/#ds03), [DS06](/3daltoque-docs/design-system/02-componentes/#ds06), [DS11](/3daltoque-docs/design-system/02-componentes/#ds11), [DS24](/3daltoque-docs/design-system/02-componentes/#ds24).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F01-01 | Cuenta nueva y datos públicos válidos | Confirma el registro | Se crea una sola identidad con perfil Cliente; el alta maker se realiza después en la misma cuenta. |
| AC-F01-02 | Sesión autenticada | Confirma cerrar sesión | Better Auth revoca esa sesión; las peticiones posteriores con el mismo secreto reciben 401 y el cliente limpia sus datos locales. |
| AC-F01-03 | Cuenta con perfiles cliente y maker | Cambia de contexto desde Web o Mobile | Conserva su identidad y sesión; consulta capacidades y muestra listados y borradores del contexto elegido. La otra pestaña o dispositivo conserva su selección. |
| AC-F01-04 | Rol ajeno, revocado o recurso de otro titular | Modifica el contexto o los parámetros de la petición | FastAPI deniega la operación y conserva el recurso; un usuario con ambos perfiles mantiene el bloqueo de contratación consigo mismo. |
| AC-F01-05 | Sesión de Cliente/Maker vigente y reloj controlado | Se usa después de alcanzar el intervalo de actualización de 24 horas | Su vencimiento se extiende a la hora actual más 7 días y conserva la misma identidad y perfiles. |
| AC-F01-06 | Sesión con vencimiento alcanzado o cierre confirmado | Se intenta operar o renovar con ese secreto | Se devuelve 401 y se requiere iniciar sesión nuevamente; la membresía conserva sus fechas. |
| AC-F01-07 | Enlace de recuperación emitido y contraseña nueva válida | Se confirma dentro de los 15 minutos | Se guarda la contraseña nueva y se consume el enlace una sola vez; se conserva la identidad y sus perfiles. |
| AC-F01-08 | Token vencido, consumido o inválido | Se intenta confirmar el restablecimiento | Se rechaza el cambio, se conserva la contraseña vigente y se ofrece solicitar otro enlace. |
| AC-F01-09 | Cuenta con sesiones abiertas en Web y Mobile | Completa un restablecimiento de contraseña válido | Se revocan todas sus sesiones; las solicitudes posteriores con credenciales de sesión anteriores reciben 401 y se exige iniciar sesión nuevamente. |
| AC-F01-10 | Registro o restablecimiento con entrada de contraseña nueva | Envía 14, 15, 128 o 129 caracteres y una frase con espacios | Se rechazan longitudes de 14 y 129; 15 y 128 cumplen el límite. La frase válida conserva sus espacios. El error de recuperación conserva el token mientras siga vigente. |
| AC-F01-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F01-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-01.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-1) | 1. Una solicitud válida crea una sola cuenta y su perfil, y permite consultar su estado.<br>2. Datos obligatorios ausentes o identificador de acceso duplicado producen un error comprensible sin una cuenta parcial.<br>3. Un usuario que se registra públicamente no obtiene permisos administrativos. |
| [RF-01.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-4) | 1. Credenciales válidas de una cuenta habilitada permiten acceder a sus funciones.<br>2. Credenciales inválidas o cuenta bloqueada impiden el acceso y muestran un mensaje sin exponer información sensible.<br>3. El cliente no puede concederse un perfil mediante un cambio de parámetros enviados.<br>4. Una cuenta con ambos perfiles puede alternar su contexto conservando la misma identidad; cada operación valida rol, propiedad y estado. Cambiar de contexto mantiene separados listados y borradores.<br>5. Con cinco fallos dentro de los últimos 60 segundos, el siguiente intento para el mismo correo devuelve 429 y Retry-After en Web y Mobile. Al salir el fallo más antiguo de la ventana, se puede volver a intentar. |
| [RF-01.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-5) | 1. Después del cierre, el cliente deja de acceder a pantallas protegidas con esa sesión.<br>2. La credencial de renovación cerrada, si existe, no permite obtener una sesión nueva.<br>3. La API aplica el comportamiento de revocación y expiración documentado. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-01](/3daltoque-docs/planificacion/parametros/#pd-01), [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12), [PD-13](/3daltoque-docs/planificacion/parametros/#pd-13).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
