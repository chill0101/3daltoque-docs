---
title: "CU-16 Valorar y consultar reputación"
---

# CU-16 Valorar y consultar reputación

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Valorar y consultar reputación |
| Identificador | CU-16 |
| Actores | Cliente, Maker, Administración, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F18. [RF-15.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-1), [RF-15.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-2), [RF-15.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-3), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Recepción confirmada, contraparte distinta y ausencia de valoración previa del autor. |
| Postcondición | Valoración conservada y agregado público coherente. |
| Descripción | Un participante consulta un pedido completado y decide valorar. |
| Resumen | Valoración conservada y agregado público coherente. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Participante | Abre la valoración de su contraparte. |
| 2 | Sistema | Comprueba pedido completado, identidad y configuración de criterios y escala. |
| 3 | Participante | Completa criterios y comentario permitido. |
| 4 | Sistema | Valida rangos y unicidad y conserva autor, destinatario, pedido y configuración. |
| 5 | Sistema | Calcula el puntaje global y actualiza el agregado de valoraciones publicadas. |
| 6 | Usuario autorizado | Consulta el resumen y las valoraciones visibles. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 2.A | Sistema | Pedido pendiente, ajeno, cancelado o ya valorado: Rechaza la publicación y conserva el estado. |
| 4.B | Sistema | Puntaje fuera de escala o configuración ausente: Informa la condición y mantiene los datos recuperables. |
| 5.C | Administración | Oculta o restituye una valoración con motivo: El sistema audita el cambio y recalcula el agregado. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F18](/3daltoque-docs/specs/f18-reputacion-bidireccional/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-16, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
