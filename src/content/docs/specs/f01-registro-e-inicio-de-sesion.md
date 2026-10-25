---
title: "SPEC-F01 · Registro e inicio de sesión"
---

# SPEC-F01 · Registro e inicio de sesión

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Crear y utilizar una identidad con los perfiles y permisos correspondientes.

El backend valida el identificador y el estado de la cuenta, registra el perfil y autentica el acceso. El cierre de sesión retira o revoca la autorización según la estrategia acordada. Las cuentas administrativas se crean mediante un procedimiento autorizado. La primera habilitación comercial del maker se trata en F11.

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

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| email | Texto | Según PD-01 | Formato e identificador normalizado; unicidad en servidor |
| password | Secreto | Según PD-01 | Política parametrizada; excluir de logs y respuestas |
| perfil_solicitado | Rol público | Sí | Valores habilitados por el servidor |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Usuario | Elige registro o acceso y completa los datos requeridos. |
| 2 | Sistema | Valida identificador, credenciales, estado de cuenta y límites. |
| 3 | Sistema | Crea la identidad y roles públicos solicitados o autentica la cuenta existente. |
| 4 | Sistema | Entrega las capacidades y la sesión conforme a la política de seguridad. |
| 5 | Usuario | Abre el recorrido de cliente, maker o administración autorizado. |

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-13](/3daltoque-docs/analisis/casos/cu-13-registrarse-y-acceder/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F01-01 | Paso 2. Credenciales inválidas, cuenta bloqueada o identificador duplicado: Responde de forma comprensible y protege los datos de la cuenta. |
| ALT-F01-02 | Paso 3. Intenta asignar administración desde registro público: El sistema rechaza el privilegio solicitado. |
| ALT-F01-03 | Paso 5. Solicita cerrar sesión: El sistema retira la autorización del cliente y aplica la revocación definida para sus credenciales. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| POST | `/auth/registro` | identificador, secreto, perfiles públicos y aceptación de condiciones | identidad, perfiles y siguiente acción | Datos válidos; el registro público asigna únicamente cliente y maker. |
| POST | `/auth/sesion` | credenciales y tipo de cliente | identidad, capacidades y expiración | Cuenta habilitada y protección frente a intentos inválidos. |
| DELETE | `/auth/sesion` | sesión vigente | resultado de cierre | Retira o revoca la autorización conforme a la política. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `usuarios`, `usuario_roles`, `sesiones`.

El backend valida el identificador y el estado de la cuenta, registra el perfil y autentica el acceso. El cierre de sesión retira o revoca la autorización según la estrategia acordada. Las cuentas administrativas se crean mediante un procedimiento autorizado. La primera habilitación comercial del maker se trata en F11.

## 8. Componentes y estados

[DS01](/3daltoque-docs/design-system/02-componentes/#ds01), [DS03](/3daltoque-docs/design-system/02-componentes/#ds03), [DS06](/3daltoque-docs/design-system/02-componentes/#ds06), [DS11](/3daltoque-docs/design-system/02-componentes/#ds11), [DS24](/3daltoque-docs/design-system/02-componentes/#ds24).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F01-01 | Cuenta nueva y datos públicos válidos | Confirma el registro | Se crea una sola identidad con los perfiles públicos solicitados. |
| AC-F01-02 | Sesión autenticada | Confirma cerrar sesión | La credencial de renovación se revoca y las peticiones siguientes cumplen la política de expiración y revocación. |
| AC-F01-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F01-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-01.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-1) | 1. Una solicitud válida crea una sola cuenta y su perfil, y permite consultar su estado.<br>2. Datos obligatorios ausentes o identificador de acceso duplicado producen un error comprensible sin una cuenta parcial.<br>3. Un usuario que se registra públicamente no obtiene permisos administrativos. |
| [RF-01.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-4) | 1. Credenciales válidas de una cuenta habilitada permiten acceder a sus funciones.<br>2. Credenciales inválidas o cuenta bloqueada impiden el acceso y muestran un mensaje sin exponer información sensible.<br>3. El cliente no puede concederse un perfil mediante un cambio de parámetros enviados. |
| [RF-01.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-5) | 1. Después del cierre, el cliente deja de acceder a pantallas protegidas con esa sesión.<br>2. La credencial de renovación cerrada, si existe, no permite obtener una sesión nueva.<br>3. La API aplica el comportamiento de revocación y expiración documentado. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-01](/3daltoque-docs/planificacion/parametros/#pd-01), [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12), [PD-13](/3daltoque-docs/planificacion/parametros/#pd-13).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
