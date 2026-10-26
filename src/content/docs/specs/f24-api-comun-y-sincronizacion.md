---
title: "SPEC-F24 · API común y sincronización"
---

# SPEC-F24 · API común y sincronización

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Aplicar las mismas reglas del negocio y recuperar estados consistentes en ambos canales.

La API FastAPI expone las operaciones autorizadas de perfiles, solicitudes, ofertas, pedidos, membresías y seguimiento. Los clientes consultan y recuperan mensajes y estados persistidos. Las suscripciones o consultas de actualización respetan los permisos del recurso y toleran reconexión y eventos repetidos. El backend determina importes, vigencias y transiciones.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F24](/3daltoque-docs/proyecto/funcionalidades/#f24) |
| Actores | Clientes Web y Mobile, backend y procesos autorizados. |
| Canales | Lógica de negocio / soporte transversal. Web y Mobile. |
| RF | [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1), [RF-11.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2) |
| RNF | [RNF-01](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-01), [RNF-03](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-03), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-18](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-18), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19) |
| CU | [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/), [CU-02](/3daltoque-docs/analisis/casos/cu-02-recibir-y-responder-ofertas/), [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/), [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/), [CU-05](/3daltoque-docs/analisis/casos/cu-05-revision-y-aprobacion/), [CU-06](/3daltoque-docs/analisis/casos/cu-06-entrega-personal/), [CU-07](/3daltoque-docs/analisis/casos/cu-07-administracion-operativa/), [CU-08](/3daltoque-docs/analisis/casos/cu-08-consultar-membresia/), [CU-09](/3daltoque-docs/analisis/casos/cu-09-habilitar-perfil-e-iniciar-prueba/), [CU-10](/3daltoque-docs/analisis/casos/cu-10-asignar-beneficio-fundador/), [CU-11](/3daltoque-docs/analisis/casos/cu-11-pagar-o-renovar-abono/), [CU-12](/3daltoque-docs/analisis/casos/cu-12-gestionar-plan-y-promociones/), [CU-13](/3daltoque-docs/analisis/casos/cu-13-registrarse-y-acceder/), [CU-14](/3daltoque-docs/analisis/casos/cu-14-conversar-en-un-pedido/), [CU-15](/3daltoque-docs/analisis/casos/cu-15-mantener-y-consultar-portfolio/), [CU-16](/3daltoque-docs/analisis/casos/cu-16-valorar-y-consultar-reputacion/), [CU-17](/3daltoque-docs/analisis/casos/cu-17-consultar-historial-de-pedidos/), [CU-18](/3daltoque-docs/analisis/casos/cu-18-consultar-reporte-de-actividad/), [CU-19](/3daltoque-docs/analisis/casos/cu-19-mantener-catalogo-de-productos/), [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/), [CU-21](/3daltoque-docs/analisis/casos/cu-21-gestionar-capacidades-del-maker/), [CU-22](/3daltoque-docs/analisis/casos/cu-22-gestionar-perfil-de-cliente/), [CU-23](/3daltoque-docs/analisis/casos/cu-23-recibir-y-consultar-notificaciones/), [CU-24](/3daltoque-docs/analisis/casos/cu-24-gestionar-archivos-autorizados/), [CU-25](/3daltoque-docs/analisis/casos/cu-25-negociar-condiciones-de-una-oferta/) |

## 2. Pantallas y permisos

[WEB-SYS-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-sys-01), [MOB-SYS-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-sys-01).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| request_id | Identidad opaca | En operación | Correlación por solicitud |
| version | Versión | En recurso mutable | Detección de estado desactualizado |
| cursor | Referencia opaca | En listas y recuperación | Sin datos privados expuestos |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Cliente Web o Mobile | Envía una consulta o comando con credencial, versión y clave según la operación. |
| 2 | API | Autentica, valida el contrato y comprueba actor, recurso, estado y vigencia. |
| 3 | Servicio de aplicación | Resuelve una repetición ya conservada o ejecuta el caso de uso autorizado. |
| 4 | Persistencia | Confirma los cambios y eventos duraderos en la transacción de negocio. |
| 5 | API | Devuelve recurso, versión, acciones permitidas y referencia de operación. |
| 6 | Cliente | Actualiza la presentación y reconcilia mensajes y estados al reconectar. |

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F24-01 | Sesión inválida: la API exige recuperar autenticación sin exponer el recurso. |
| ALT-F24-02 | Versión desactualizada: devuelve conflicto y el cliente recupera la versión vigente. |
| ALT-F24-03 | Timeout del comando: se consulta la operación conservada antes de repetir. |
| ALT-F24-04 | Evento duplicado o cursor antiguo: se deduplica y se recupera el recurso autorizado. |
| ALT-F24-05 | Cambio de permisos: se vuelve a autorizar la lectura y se corta la suscripción afectada. |

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| GET | `/eventos` | cursor y ámbitos permitidos | eventos identificados y cursor | Reautorización por recurso y recuperación tras reconexión. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `eventos_salida`, `trabajos`, `sesiones`.

La API FastAPI expone las operaciones autorizadas de perfiles, solicitudes, ofertas, pedidos, membresías y seguimiento. Los clientes consultan y recuperan mensajes y estados persistidos. Las suscripciones o consultas de actualización respetan los permisos del recurso y toleran reconexión y eventos repetidos. El backend determina importes, vigencias y transiciones.

## 8. Componentes y estados

[DS11](/3daltoque-docs/design-system/02-componentes/#ds11), [DS16](/3daltoque-docs/design-system/02-componentes/#ds16), [DS38](/3daltoque-docs/design-system/02-componentes/#ds38), [DS41](/3daltoque-docs/design-system/02-componentes/#ds41), [DS43](/3daltoque-docs/design-system/02-componentes/#ds43).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F24-01 | Clientes Web y Mobile autorizados sobre el mismo recurso | Consultan su versión y acciones | Interpretan el mismo contrato de importes, fechas, estados y permisos. |
| AC-F24-02 | Cliente con cursor anterior y conexión recuperada | Consulta cambios y el recurso vigente | Reconcilia la información persistida y deduplica eventos por identidad. |
| AC-F24-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F24-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1) | 1. Una operación equivalente desde clientes habilitados conserva las mismas condiciones de negocio y autorizaciones.<br>2. El contrato identifica datos obligatorios, errores y resultados que cada cliente debe manejar.<br>3. El cliente no puede modificar importes, destinatarios o estados autoritativos omitiendo la validación del backend. |
| [RF-11.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2) | 1. Después de reconectarse, un cliente autorizado recupera mensajes y estado vigentes sin pérdida de datos persistidos.<br>2. Repetir un aviso no duplica mensajes ni transiciones visibles.<br>3. Una suscripción o consulta a un recurso ajeno es denegada y no filtra su contenido. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-01](/3daltoque-docs/planificacion/parametros/#pd-01), [PD-11](/3daltoque-docs/planificacion/parametros/#pd-11), [PD-13](/3daltoque-docs/planificacion/parametros/#pd-13).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
