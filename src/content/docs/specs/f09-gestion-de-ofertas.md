---
title: "SPEC-F09 · Gestión de ofertas"
---

# SPEC-F09 · Gestión de ofertas

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Proponer y comparar condiciones de fabricación identificables.

El maker responde la invitación con una oferta explícita o registra un rechazo. Las modificaciones conservan versiones y condiciones. El cliente compara ofertas disponibles, identifica la versión que está viendo y consulta los datos autorizados del maker. La negociación mantiene la solicitud abierta hasta F10. El cliente propone precio, plazo y observación sobre una versión concreta de una oferta. El maker acepta o rechaza la propuesta. Aceptarla publica una nueva versión de su oferta con condiciones y vigencia explícitas; el cliente conserva la decisión final de contratación. Se registra proponente, versión de origen, respuesta y versión resultante. Una oferta aceptada, vencida o modificada impide resolver una propuesta obsoleta.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F09](/3daltoque-docs/proyecto/funcionalidades/#f09) |
| Actores | Maker invitado y cliente propietario de la solicitud. |
| Canales | Lógica de negocio. Web y Mobile. |
| RF | [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1), [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2), [RF-04.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-3), [RF-04.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-5), [RF-04.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-6) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08) |
| CU | [CU-02](/3daltoque-docs/analisis/casos/cu-02-recibir-y-responder-ofertas/), [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/), [CU-25](/3daltoque-docs/analisis/casos/cu-25-negociar-condiciones-de-una-oferta/) |

## 2. Pantallas y permisos

[WEB-OFE-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ofe-01), [WEB-OFE-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ofe-02), [MOB-OFE-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ofe-01), [MOB-OFE-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ofe-02).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| precio | Monto decimal | Sí | Positivo y moneda coherente |
| plazo | Cantidad y unidad | Sí | Valores y unidad visibles |
| vence_en | Fecha UTC | Sí | Vigencia evaluada por servidor |
| version_esperada | Entero | Al modificar | Evitar sobrescritura concurrente |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Maker | Consulta sus invitaciones y selecciona una solicitud. |
| 2 | Sistema | Verifica destinatario, estado y acceso comercial y entrega las especificaciones autorizadas. |
| 3 | Maker | Inspecciona el archivo habilitado y define precio total, moneda, plazo, condiciones y vencimiento. |
| 4 | Sistema | Valida capacidad, versión de solicitud, vigencia y permisos. |
| 5 | Sistema | Conserva la oferta y su versión inmutable. |
| 6 | Sistema | Registra el aviso para el cliente y devuelve la referencia de oferta. |

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-02](/3daltoque-docs/analisis/casos/cu-02-recibir-y-responder-ofertas/), [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/), [CU-25](/3daltoque-docs/analisis/casos/cu-25-negociar-condiciones-de-una-oferta/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F09-01 | Paso 2. Elige rechazar la invitación: El sistema registra el rechazo una vez y cierra esa respuesta. |
| ALT-F09-02 | Paso 4. Solicitud modificada, cerrada o acceso vencido: Rechaza la publicación y devuelve las condiciones vigentes. |
| ALT-F09-03 | Paso 5. Se reintenta la misma publicación: Recupera el resultado identificado y evita duplicados. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| POST | `/invitaciones/{id}/rechazo` | motivo opcional y clave de operación | estado de invitación | Destinatario y estado vigente. |
| GET | `/solicitudes/{id}/ofertas` | filtros y cursor | versiones, condiciones y vencimientos | Cliente titular. |
| POST | `/solicitudes/{id}/ofertas` | versión de solicitud, precio total, moneda, plazo, condiciones y vigencia | oferta_id y versión | Maker invitado y habilitado. |
| POST | `/ofertas/{id}/versiones` | versión esperada y condiciones nuevas | versión publicada | Maker titular; conserva las anteriores. |
| POST | `/ofertas/{id}/propuestas-cambio` | versión, precio total, moneda, plazo y observación | propuesta_id y estado | Cliente titular y oferta vigente. |
| POST | `/propuestas-cambio/{id}/resolucion` | decisión y versión esperada | respuesta y versión resultante | Maker titular; crea versión si acepta. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `ofertas`, `oferta_versiones`, `propuestas_cambio_oferta`.

El maker responde la invitación con una oferta explícita o registra un rechazo. Las modificaciones conservan versiones y condiciones. El cliente compara ofertas disponibles, identifica la versión que está viendo y consulta los datos autorizados del maker. La negociación mantiene la solicitud abierta hasta F10. El cliente propone precio, plazo y observación sobre una versión concreta de una oferta. El maker acepta o rechaza la propuesta. Aceptarla publica una nueva versión de su oferta con condiciones y vigencia explícitas; el cliente conserva la decisión final de contratación. Se registra proponente, versión de origen, respuesta y versión resultante. Una oferta aceptada, vencida o modificada impide resolver una propuesta obsoleta.

## 8. Componentes y estados

[DS03](/3daltoque-docs/design-system/02-componentes/#ds03), [DS05](/3daltoque-docs/design-system/02-componentes/#ds05), [DS09](/3daltoque-docs/design-system/02-componentes/#ds09), [DS19](/3daltoque-docs/design-system/02-componentes/#ds19), [DS27](/3daltoque-docs/design-system/02-componentes/#ds27).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F09-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Las ofertas muestran precio, plazo, vigencia y versión. |
| AC-F09-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Una modificación conserva la versión anterior. |
| AC-F09-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F09-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1) | 1. Una oferta válida queda asociada al maker y solicitud correctos con sus condiciones.<br>2. Precio/plazo inválidos o un maker sin autorización impiden publicar la oferta.<br>3. El cliente sigue comparando hasta seleccionar una oferta vigente. |
| [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2) | 1. Una oferta que llegó a su vencimiento no puede aceptarse aunque la pantalla no se haya actualizado.<br>2. Una oferta cerrada por otra selección deja de estar disponible.<br>3. La consulta permite identificar las condiciones y vigencia que se muestran al cliente. |
| [RF-04.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-3) | 1. Las ofertas de una misma solicitud presentan los campos acordados de forma comparable.<br>2. Una oferta vencida o cerrada se identifica y no aparece como seleccionable.<br>3. Los filtros no alteran los precios o condiciones y el cliente puede cambiar de opción antes de confirmar. |
| [RF-04.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-5) | 1. El rechazo de una invitación no genera pedido ni cobro.<br>2. Aceptar referencia o contraofertar produce la oferta explícita de RF-04.1.<br>3. Un maker no invitado no responde una solicitud y una solicitud cerrada no recibe nuevas ofertas. |
| [RF-04.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-6) | 1. Una propuesta aceptada por el maker genera una nueva versión trazable de la oferta.<br>2. El cliente confirma el pedido mediante la aceptación de la versión resultante.<br>3. Una propuesta sobre una versión reemplazada produce conflicto y conserva el pedido y las condiciones existentes. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-05](/3daltoque-docs/planificacion/parametros/#pd-05).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
