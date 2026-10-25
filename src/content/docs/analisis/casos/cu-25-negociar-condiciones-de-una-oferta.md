---
title: "CU-25 Negociar condiciones de una oferta"
---

# CU-25 Negociar condiciones de una oferta

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Negociar condiciones de una oferta |
| Identificador | CU-25 |
| Actores | Cliente, Maker, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F09. [RF-04.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-6), [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1), [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Solicitud propia abierta y versión identificable de la oferta. |
| Postcondición | Propuesta respondida; una aceptación del maker publica una nueva versión para decisión del cliente. |
| Descripción | El cliente propone un cambio sobre una oferta vigente. |
| Resumen | Propuesta respondida; una aceptación del maker publica una nueva versión para decisión del cliente. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Cliente | Selecciona una oferta y propone precio, plazo y observación. |
| 2 | Sistema | Valida propietario, estado y versión y conserva la propuesta. |
| 3 | Maker | Consulta la propuesta y decide aceptarla o rechazarla. |
| 4 | Sistema | Comprueba que la oferta y solicitud continúen vigentes. |
| 5 | Sistema | Si el maker acepta, conserva una nueva versión con condiciones y vencimiento; registra la respuesta y su relación. |
| 6 | Cliente | Consulta la versión resultante y decide contratar mediante CU-03. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 3.A | Maker | Rechaza el cambio: El sistema conserva la respuesta y las condiciones vigentes de la oferta. |
| 4.B | Sistema | La versión cambió, venció o fue aceptada: Devuelve conflicto y conserva los acuerdos existentes. |
| 5.C | Sistema | Se repite la resolución: Recupera el mismo resultado y mantiene una única versión resultante. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-25, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
