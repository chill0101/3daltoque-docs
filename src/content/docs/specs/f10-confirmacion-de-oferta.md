---
title: "SPEC-F10 · Confirmación de oferta"
---

# SPEC-F10 · Confirmación de oferta

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Confirmar un único acuerdo de impresión con las condiciones aceptadas.

El backend comprueba propietario, vigencia, versión y habilitación aplicable del maker. La aceptación conserva las condiciones, crea como máximo un pedido por solicitud y cierra alternativas en una operación atómica. Las repeticiones y conflictos se resuelven conservando el acuerdo confirmado. El cliente y el maker coordinan directamente el pago de la impresión.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F10](/3daltoque-docs/proyecto/funcionalidades/#f10) |
| Actores | Cliente propietario; sistema. |
| Canales | Lógica de negocio. Web y Mobile. |
| RF | [RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15) |
| CU | [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/), [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/) |

## 2. Pantallas y permisos

[WEB-OFE-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ofe-01), [WEB-OFE-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ofe-03), [MOB-OFE-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ofe-01), [MOB-OFE-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ofe-03).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| oferta_version_numero | Entero | Sí | Versión que el cliente confirmó |
| clave_operacion | Identidad opaca | Sí | Idempotencia por actor y operación |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Cliente | Consulta las ofertas con precio, plazo, condiciones y vencimiento. |
| 2 | Sistema | Presenta las versiones vigentes y las condiciones del pago directo entre las partes. |
| 3 | Cliente | Selecciona una versión y confirma su aceptación con una clave estable. |
| 4 | Sistema | Comprueba propietario, versión, vigencia, maker habilitado y participantes distintos. |
| 5 | Sistema | Crea el pedido y sus condiciones, cierra alternativas y habilita su conversación en una transacción. |
| 6 | Sistema | Registra los avisos posteriores y devuelve el pedido confirmado. |

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/), [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F10-01 | Paso 3. Propone modificar las condiciones: Continúa por CU-25 y mantiene pendiente la contratación. |
| ALT-F10-02 | Paso 4. Oferta vencida, modificada o maker sin acceso: Devuelve conflicto y recupera las ofertas actuales. |
| ALT-F10-03 | Paso 5. Dos aceptaciones concurrentes o reintento: Conserva un único pedido por solicitud y recupera el resultado de la misma intención. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| POST | `/ofertas/{id}/aceptar` | versión y clave estable | pedido_id y condiciones | Aceptación atómica, identidad y vigencia. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `pedidos`, `condiciones_pedido`, `solicitudes`, `oferta_versiones`.

El backend comprueba propietario, vigencia, versión y habilitación aplicable del maker. La aceptación conserva las condiciones, crea como máximo un pedido por solicitud y cierra alternativas en una operación atómica. Las repeticiones y conflictos se resuelven conservando el acuerdo confirmado. El cliente y el maker coordinan directamente el pago de la impresión.

## 8. Componentes y estados

[DS01](/3daltoque-docs/design-system/02-componentes/#ds01), [DS11](/3daltoque-docs/design-system/02-componentes/#ds11), [DS12](/3daltoque-docs/design-system/02-componentes/#ds12), [DS27](/3daltoque-docs/design-system/02-componentes/#ds27), [DS43](/3daltoque-docs/design-system/02-componentes/#ds43).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F10-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Una solicitud produce como máximo un pedido. |
| AC-F10-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Repetir una aceptación conserva el mismo acuerdo. |
| AC-F10-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F10-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4) | 1. Una aceptación válida crea un pedido y deja las ofertas competidoras cerradas.<br>2. Dos aceptaciones concurrentes no crean dos pedidos para la misma solicitud.<br>3. Una oferta vencida/modificada se rechaza de forma controlada; repetir la misma operación confirmada devuelve el mismo acuerdo, sin uno adicional. |
| [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10) | 1. Un maker vencido no confirma un trabajo nuevo mediante una petición directa que eluda la interfaz.<br>2. Vencer el acceso no cancela pedidos ni bloquea su finalización.<br>3. La guarda determina la vigencia con la fecha del servidor, los permisos y los períodos concedidos. |
| [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15) | 1. Las pantallas de compra, prueba y fundadores muestran las condiciones antes de la aceptación correspondiente.<br>2. Una transferencia o comprobante entre cliente y maker no aparece como pago verificado por 3DAltoque.<br>3. La aprobación de la pieza sigue siendo explícita antes de la entrega, independiente del cobro del abono. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-05](/3daltoque-docs/planificacion/parametros/#pd-05), [PD-10](/3daltoque-docs/planificacion/parametros/#pd-10).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
