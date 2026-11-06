---
title: "CU-13 Registrarse y acceder"
---

# CU-13 Registrarse y acceder

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Registrarse y acceder |
| Identificador | CU-13 |
| Actores | Cliente, Maker, Administración, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F01. [RF-01.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-1), [RF-01.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-4), [RF-01.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-5), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Datos públicos de registro, credenciales de acceso o correo para solicitar recuperación. |
| Postcondición | Identidad y perfiles autorizados; sesión vigente o cierre confirmado. |
| Descripción | Una persona solicita crear una cuenta o iniciar sesión. |
| Resumen | Identidad y perfiles autorizados; sesión vigente o cierre confirmado. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Usuario | Elige registro o acceso y completa los datos requeridos. |
| 2 | Sistema | Better Auth valida credenciales y sesión; FastAPI comprueba estado de cuenta, perfiles y límites. |
| 3 | Sistema | Better Auth registra o autentica la identidad; en el alta, FastAPI vincula su perfil Cliente. El perfil maker se incorpora después desde su flujo autorizado. |
| 4 | Sistema | Entrega las capacidades y la sesión conforme a la política de seguridad. |
| 5 | Usuario | Abre el recorrido de cliente, maker o administración autorizado. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 2.A | Sistema | Credenciales inválidas, cuenta bloqueada o identificador duplicado: Responde de forma comprensible y protege los datos de la cuenta. |
| 3.B | Usuario | Intenta asignar administración desde registro público: El sistema rechaza el privilegio solicitado. |
| 5.C | Usuario | Solicita cerrar sesión: El sistema retira la autorización del cliente y aplica la revocación definida para sus credenciales. |
| 2.D | Sistema | Si el correo ya acumula cinco fallos dentro de los últimos 60 segundos, responde 429 e informa cuándo volver a intentar. |

## Recuperación de contraseña

El usuario elige «Olvidé mi contraseña» e informa el correo. El sistema responde de forma neutral y envía el enlace mediante Better Auth y Resend cuando corresponde. El enlace vence a los 15 minutos de su emisión. Al abrirlo, el usuario completa la contraseña nueva y confirma; el sistema valida la entrada y consume el enlace con un único restablecimiento exitoso. Un enlace vencido o consumido permite solicitar otro. El restablecimiento revoca todas las sesiones de la cuenta en Web y Mobile, incluidos los accesos administrativos. Las solicitudes posteriores con sesiones anteriores reciben 401 y los clientes requieren iniciar sesión nuevamente con la contraseña nueva.

## Alta inicial y creación del perfil maker

El alta pública crea el perfil Cliente. Con la sesión iniciada, «Crear mi perfil maker» abre el recorrido de CU-21 para incorporar el perfil productivo a la misma identidad. La creación del maker conserva el perfil cliente y queda pendiente hasta completar las condiciones de CU-09. Los reintentos recuperan el perfil existente.

## Cambio de contexto con ambos perfiles

Una cuenta con cliente y maker puede abrir el selector de perfil desde la navegación Web o Mobile. El sistema presenta los perfiles asignados y sus estados. Al elegir uno, conserva la sesión, recupera las capacidades del destino y muestra sus listados y borradores. Cada pestaña o instancia del cliente conserva su contexto. Un maker pendiente continúa su preparación y habilitación.

Un rol ausente o revocado produce una denegación. Los pedidos comparan las identidades de los participantes y bloquean la contratación consigo mismo. La especificación F01 detalla el aislamiento de caché, cursores y operaciones en curso.

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F01](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-13, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
