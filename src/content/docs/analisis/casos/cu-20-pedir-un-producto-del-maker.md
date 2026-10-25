---
title: "CU-20 Pedir un producto del maker"
---

# CU-20 Pedir un producto del maker

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Pedir un producto del maker |
| Identificador | CU-20 |
| Actores | Cliente, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F25, F10, F12, F13. [RF-13.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-3), [RF-13.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-4), [RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4), [RF-05.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-1), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Cliente autenticado, publicación vigente y maker distinto del cliente. |
| Postcondición | Pedido directo confirmado con condiciones publicadas conservadas y conversación habilitada. |
| Descripción | El cliente elige un producto publicado. |
| Resumen | Pedido directo confirmado con condiciones publicadas conservadas y conversación habilitada. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Cliente | Abre el producto y elige una cantidad admitida. |
| 2 | Sistema | Presenta versión, configuración, precio unitario, total calculado, moneda, plazo y condiciones de entrega y pago directo. |
| 3 | Cliente | Confirma las condiciones con una clave estable. |
| 4 | Sistema | Recupera primero un resultado de esa clave y contenido o valida publicación actual, cantidad y acceso comercial. |
| 5 | Sistema | Materializa solicitud de catálogo, oferta de referencia y pedido con sus condiciones en una transacción; habilita la conversación. |
| 6 | Sistema | Registra avisos y devuelve el pedido confirmado. |
| 7 | Cliente y maker | Continúan por producción, revisión expresa y entrega del mismo circuito. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 4.A | Sistema | La publicación o precio cambió: Devuelve conflicto y solicita revisar las condiciones actuales antes de otra confirmación. |
| 4.B | Sistema | Producto pausado, cantidad inválida o maker sin acceso: Rechaza la operación antes de crear el pedido. |
| 4.C | Sistema | Se repite la clave y el mismo contenido: Devuelve el mismo pedido; otro contenido con esa clave produce conflicto. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F25](/3daltoque-docs/specs/f25-catalogo-de-productos-del-maker/), [F10](/3daltoque-docs/specs/f10-confirmacion-de-oferta/), [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/), [F13](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-20, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
