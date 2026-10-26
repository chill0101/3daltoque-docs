---
title: "CU-03 Elegir oferta"
---

# CU-03 Elegir oferta

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Elegir oferta |
| Identificador | CU-03 |
| Actores | Cliente, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F09, F10, F13. [RF-04.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-3), [RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4), [RF-05.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-1), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Solicitud propia abierta y ofertas disponibles. |
| Postcondición | Un pedido confirmado con condiciones conservadas y conversación habilitada. |
| Descripción | El cliente selecciona una oferta para su solicitud. |
| Resumen | Un pedido confirmado con condiciones conservadas y conversación habilitada. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Cliente | Consulta las ofertas con precio, plazo, condiciones y vencimiento. |
| 2 | Sistema | Presenta las versiones vigentes y las condiciones del pago directo entre las partes. |
| 3 | Cliente | Selecciona una versión y confirma su aceptación con una clave estable. |
| 4 | Sistema | Comprueba propietario, versión, vigencia, maker habilitado y participantes distintos. |
| 5 | Sistema | Crea el pedido y sus condiciones, cierra alternativas y habilita su conversación en una transacción. |
| 6 | Sistema | Registra los avisos posteriores y devuelve el pedido confirmado. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 3.A | Cliente | Propone modificar las condiciones: Continúa por CU-25 y mantiene pendiente la contratación. |
| 4.B | Sistema | Oferta vencida, modificada o maker sin acceso: Devuelve conflicto y recupera las ofertas actuales. |
| 5.C | Sistema | Dos aceptaciones concurrentes o reintento: Conserva un único pedido por solicitud y recupera el resultado de la misma intención. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/), [F10](/3daltoque-docs/specs/f10-confirmacion-de-oferta/), [F13](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-03, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
