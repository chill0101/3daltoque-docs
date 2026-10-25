---
title: "SPEC-F18 · Reputación bidireccional"
---

# SPEC-F18 Reputación bidireccional

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Registrar y consultar reputación derivada de pedidos completados, con criterios, escala y moderación trazables.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F18](/3daltoque-docs/proyecto/funcionalidades/#f18) |
| Actores | Cliente y maker; administración según reglas de moderación. |
| Canales | Lógica de negocio. Web y Mobile; moderación en Web. |
| RF | [RF-15.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-1), [RF-15.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-2), [RF-15.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-3) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12) |
| CU | [CU-16](/3daltoque-docs/analisis/casos/cu-16-valorar-y-consultar-reputacion/) |

## 2. Pantallas y permisos

[WEB-REP-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-rep-01), [MOB-REP-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-rep-01), [WEB-MKR-08](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mkr-08), [MOB-MKR-08](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mkr-08).

La API comprueba actor, recurso, estado y versión en cada operación.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| pedido_id | UUID | Sí | Pedido completado del participante. |
| configuracion_version_id | UUID | Sí | Criterios y escala vigentes conservados con la valoración. |
| criterios | Lista de código y decimal | Sí | Criterios requeridos y puntajes dentro de escala. |
| comentario | Texto | Opcional | Longitud y reglas de contenido. |
| clave_operacion | Texto | Sí | Identidad estable para recuperar una repetición. |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Participante | Abre la valoración de su contraparte. |
| 2 | Sistema | Comprueba pedido completado, identidad y configuración de criterios y escala. |
| 3 | Participante | Completa criterios y comentario permitido. |
| 4 | Sistema | Valida rangos y unicidad y conserva autor, destinatario, pedido y configuración. |
| 5 | Sistema | Calcula el puntaje global y actualiza el agregado de valoraciones publicadas. |
| 6 | Usuario autorizado | Consulta el resumen y las valoraciones visibles. |

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F18-01 | Paso 2. Pedido pendiente, ajeno, cancelado o ya valorado: Rechaza la publicación y conserva el estado. |
| ALT-F18-02 | Paso 4. Puntaje fuera de escala o configuración ausente: Informa la condición y mantiene los datos recuperables. |
| ALT-F18-03 | Paso 5. Oculta o restituye una valoración con motivo: El sistema audita el cambio y recalcula el agregado. |

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| POST | `/pedidos/{id}/valoraciones` | configuración, criterios, comentario y clave estable | valoracion_id y puntaje | Pedido completado y unicidad por autor. |
| GET | `/makers/{id}/reputacion` | cursor | cantidad, escala, promedio y valoraciones visibles | Agregado de valoraciones publicadas. |
| GET | `/pedidos/{id}/valoraciones` | pedido_id | valoraciones autorizadas | Participantes o soporte con capacidad. |
| POST | `/admin/valoraciones/{id}/moderacion` | ocultar o restituir, versión y motivo | visibilidad y auditoría | Capacidad específica. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `valoraciones`, `valoracion_criterios`, `configuraciones_versiones`.

Después de la recepción confirmada, cliente y maker pueden valorar a su contraparte una vez por pedido. La ficha aplica los criterios y escala de una configuración versionada, exige valores dentro del rango y admite comentario dentro del límite. Se conserva autor, destinatario, rol, pedido y configuración. Un participante no puede valorarse a sí mismo ni publicar una valoración por un pedido ajeno o cancelado. El cliente consulta la reputación pública del maker y los participantes consultan las valoraciones autorizadas del cliente según permisos. El resumen identifica cantidad de valoraciones, promedio de los puntajes globales y escala utilizada. El puntaje global de una valoración se obtiene del promedio de sus criterios configurados. La ausencia de valoraciones se representa explícitamente. Se agregan únicamente valoraciones publicadas y compatibles con la escala informada. Administración oculta o restituye una valoración mediante permiso específico y motivo registrado. Cada acción conserva estado anterior, actor y fecha y recalcula la proyección de reputación. La intervención no altera los puntajes emitidos ni crea valoraciones en nombre de otra persona.
## 8. Componentes y estados

[DS03](/3daltoque-docs/design-system/02-componentes/#ds03), [DS07](/3daltoque-docs/design-system/02-componentes/#ds07), [DS09](/3daltoque-docs/design-system/02-componentes/#ds09), [DS39](/3daltoque-docs/design-system/02-componentes/#ds39).

Estados funcionales: carga, contenido, vacío, validación, permiso, conflicto, fallo recuperable y resultado pendiente cuando la operación lo requiera. Las mutaciones aplican las guardas del servidor. Las vistas de Figma conservan su contenido actual como mock de referencia.
## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F18-01 | Pedido entregado y autor participante sin valoración previa | Envía una valoración válida de la contraparte | Se conserva una valoración única con criterios y escala versionados. |
| AC-F18-02 | Valoración publicada | Administración autorizada la modera con motivo | La valoración sale del agregado público y la auditoría conserva la intervención. |
| AC-F18-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F18-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-15.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-1) | 1. Cada participante de un pedido completado registra una sola valoración de su contraparte.<br>2. Una repetición identificada conserva la valoración original y sus criterios.<br>3. Un pedido sin recepción, un tercero o un puntaje fuera de escala recibe una denegación. |
| [RF-15.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-2) | 1. El resumen coincide con las valoraciones publicadas y sus criterios.<br>2. Una cuenta sin valoraciones presenta cantidad cero y promedio ausente.<br>3. La consulta pública protege pedidos, identidad privada y contenidos moderados. |
| [RF-15.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-3) | 1. Una ocultación autorizada retira la valoración del agregado público.<br>2. Una restitución recupera su contribución al agregado.<br>3. Una intervención sin permiso o sin motivo se rechaza y conserva el estado. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12), [PD-14](/3daltoque-docs/planificacion/parametros/#pd-14).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
