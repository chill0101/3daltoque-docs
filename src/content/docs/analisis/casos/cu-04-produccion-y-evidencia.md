---
title: "CU-04 Producción y evidencia"
---

# CU-04 Producción y evidencia

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Producción y evidencia |
| Identificador | CU-04 |
| Actores | Maker, Cliente, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F12, F15, F23. [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RF-06.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1), [RF-06.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-2), [RF-06.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-5), [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2), [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Maker del pedido autorizado; estados y transición vigentes. |
| Postcondición | Avance conservado y revisión con evidencia presentada al cliente. |
| Descripción | El maker actualiza un pedido confirmado. |
| Resumen | Avance conservado y revisión con evidencia presentada al cliente. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Maker | Abre su cola y selecciona un pedido. |
| 2 | Sistema | Entrega sus condiciones y acciones permitidas. |
| 3 | Maker | Actualiza el avance mediante una transición autorizada. |
| 4 | Sistema | Valida versión y transición y conserva el historial. |
| 5 | Maker | Carga fotos o videos y presenta una revisión del resultado. |
| 6 | Sistema | Comprueba archivos, conserva la revisión exacta y registra la solicitud de revisión al cliente. |
| 7 | Cliente | Consulta el avance y la evidencia autorizada. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 4.A | Sistema | Transición inválida o versión anterior: Conserva el estado y solicita recuperar el pedido vigente. |
| 6.B | Sistema | Archivo pendiente o rechazado: Mantiene la revisión en preparación y detalla la recuperación. |
| 5.C | Maker | Presenta una corrección posterior: Crea una revisión nueva y conserva evidencia y decisiones anteriores. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/), [F15](/3daltoque-docs/specs/f15-evidencia-previa-a-la-entrega/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-04, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
