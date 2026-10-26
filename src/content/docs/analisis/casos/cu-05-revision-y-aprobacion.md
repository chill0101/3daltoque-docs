---
title: "CU-05 Revisión y aprobación"
---

# CU-05 Revisión y aprobación

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Revisión y aprobación |
| Identificador | CU-05 |
| Actores | Cliente, Maker, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F22, F12, F14. [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3), [RF-06.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-4), [RF-07.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-4), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Cliente del pedido; revisión presentada y accesible. |
| Postcondición | Decisión expresa sobre la revisión; la aprobación habilita coordinar la entrega. |
| Descripción | El cliente recibe una revisión del resultado. |
| Resumen | Decisión expresa sobre la revisión; la aprobación habilita coordinar la entrega. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Cliente | Abre la revisión pendiente del pedido. |
| 2 | Sistema | Presenta evidencia, referencia y versión de la revisión. |
| 3 | Cliente | Revisa el resultado y solicita aprobarlo. |
| 4 | Sistema | Comprueba identidad, revisión actual y estado pendiente. |
| 5 | Sistema | Conserva la aprobación y su referencia y habilita la coordinación de entrega. |
| 6 | Sistema | Notifica el resultado al maker. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 3.A | Cliente | Registra observaciones: El sistema conserva el comentario y mantiene pendiente la aprobación hasta una revisión nueva o resolución autorizada. |
| 4.B | Sistema | La revisión fue reemplazada: Rechaza la decisión sobre la versión anterior y presenta la vigente. |
| 3.C | Sistema | El cliente permanece sin responder: Mantiene la revisión pendiente y genera únicamente los recordatorios configurados. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F22](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/), [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/), [F14](/3daltoque-docs/specs/f14-notificaciones/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-05, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
