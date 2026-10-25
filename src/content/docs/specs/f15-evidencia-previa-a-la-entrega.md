---
title: "SPEC-F15 · Evidencia previa a la entrega"
---

# SPEC-F15 · Evidencia previa a la entrega

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Presentar el resultado de fabricación asociado a una revisión concreta.

El maker presenta evidencia que F23 ha habilitado y que queda vinculada a su revisión. El sistema conserva la referencia del archivo y coloca el resultado en pendiente de revisión. El cliente consulta exactamente la versión presentada y decide mediante F22.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F15](/3daltoque-docs/proyecto/funcionalidades/#f15) |
| Actores | Maker del pedido y cliente destinatario. |
| Canales | Lógica de negocio. Web y Mobile. |
| RF | [RF-06.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1), [RF-06.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-2) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16) |
| CU | [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/) |

## 2. Pantallas y permisos

[WEB-REV-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-rev-01), [MOB-REV-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-rev-01).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| archivo_ids | Lista UUID | Sí | Al menos la evidencia habilitada exigida por política |
| revision_id | UUID | Según operación | Pertenencia al pedido |
| comentario_maker | Texto | Opcional | Límite configurado |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Maker | Abre su cola y selecciona un pedido. |
| 2 | Sistema | Entrega sus condiciones y acciones permitidas. |
| 3 | Maker | Actualiza el avance mediante una transición autorizada. |
| 4 | Sistema | Valida versión y transición y conserva el historial. |
| 5 | Maker | Carga fotos o videos y presenta una revisión del resultado. |
| 6 | Sistema | Comprueba archivos, conserva la revisión exacta y registra la solicitud de revisión al cliente. |
| 7 | Cliente | Consulta el avance y la evidencia autorizada. |

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F15-01 | Paso 4. Transición inválida o versión anterior: Conserva el estado y solicita recuperar el pedido vigente. |
| ALT-F15-02 | Paso 6. Archivo pendiente o rechazado: Mantiene la revisión en preparación y detalla la recuperación. |
| ALT-F15-03 | Paso 5. Presenta una corrección posterior: Crea una revisión nueva y conserva evidencia y decisiones anteriores. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| POST | `/pedidos/{id}/evidencias` | archivo_ids y observación | revision_id y estado | Maker del pedido y archivos habilitados. |
| POST | `/revisiones/{id}/presentar` | versión y clave estable | revisión pendiente y aviso | Maker titular y evidencia completa. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `revisiones_resultado`, `evidencias`, `archivos`.

El maker presenta evidencia que F23 ha habilitado y que queda vinculada a su revisión. El sistema conserva la referencia del archivo y coloca el resultado en pendiente de revisión. El cliente consulta exactamente la versión presentada y decide mediante F22.

## 8. Componentes y estados

[DS03](/3daltoque-docs/design-system/02-componentes/#ds03), [DS25](/3daltoque-docs/design-system/02-componentes/#ds25), [DS26](/3daltoque-docs/design-system/02-componentes/#ds26), [DS31](/3daltoque-docs/design-system/02-componentes/#ds31).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F15-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | La revisión presentada identifica sus archivos exactos. |
| AC-F15-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | El cliente consulta la evidencia correspondiente a la revisión vigente. |
| AC-F15-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F15-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-06.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1) | 1. Una presentación válida conserva archivos, pedido, maker y fecha de la revisión.<br>2. Un usuario que no sea el maker autorizado no presenta evidencia en ese pedido.<br>3. El cliente puede consultar los mismos archivos que componen la revisión a aprobar. |
| [RF-06.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-2) | 1. Una evidencia final válida genera una revisión pendiente identificable.<br>2. Una presentación sin evidencia requerida no habilita la revisión final ni la entrega.<br>3. El cliente ve la revisión actual y el maker puede conocer que espera su respuesta. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-02](/3daltoque-docs/planificacion/parametros/#pd-02), [PD-07](/3daltoque-docs/planificacion/parametros/#pd-07), [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
