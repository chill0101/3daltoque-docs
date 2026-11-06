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
| Precondición | Revisión presentada y accesible. El cliente titular puede decidir. Cliente y maker pueden solicitar seguimiento según PD-07. |
| Postcondición | Decisión expresa sobre la revisión o caso de seguimiento registrado. La aprobación habilita coordinar la entrega. |
| Descripción | El cliente recibe una revisión del resultado. |
| Resumen | Decisión expresa sobre la revisión o caso de seguimiento registrado. La aprobación habilita coordinar la entrega. |

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
| 3.C | Sistema | Si el cliente sigue sin responder, conserva la revisión pendiente y procesa los recordatorios de las 24 y 48 horas desde la presentación. Cada plazo genera un aviso obligatorio en la app y prepara el correo según la preferencia del cliente. |

Al cumplir 72 horas con la revisión vigente y pendiente, cliente y maker pueden pedir seguimiento a soporte desde su detalle. El sistema abre un único caso por revisión o recupera el existente y registra la solicitud en su auditoría. Si el caso está cerrado y la revisión sigue vigente y pendiente, cliente y maker pueden usar «Solicitar reapertura» en el detalle. La solicitud conserva la referencia del caso y registra quién la hizo y cuándo. Soporte revisa y decide con motivo registrado. Si aprueba, vuelve a abrir el mismo caso. Si rechaza, el caso queda cerrado de forma definitiva para esa revisión. Cliente y maker consultan el resultado y su fecha en el mismo caso desde el detalle. Soporte contacta a las partes cuando corresponde y registra sus gestiones. La revisión vigente y la evidencia presentada se conservan mientras se espera la decisión del cliente.

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F22](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/), [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/), [F14](/3daltoque-docs/specs/f14-notificaciones/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-05, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
