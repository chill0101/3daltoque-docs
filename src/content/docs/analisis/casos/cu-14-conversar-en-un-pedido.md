---
title: "CU-14 Conversar en un pedido"
---

# CU-14 Conversar en un pedido

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Conversar en un pedido |
| Identificador | CU-14 |
| Actores | Cliente, Maker, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F13. [RF-05.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-1), [RF-05.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2), [RF-05.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-4), [RF-11.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Pedido confirmado y usuario participante autorizado. |
| Postcondición | Mensaje persistido o resultado recuperable; historial disponible. |
| Descripción | Un participante abre su bandeja de conversaciones. |
| Resumen | Mensaje persistido o resultado recuperable; historial disponible. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Participante | Consulta su bandeja y selecciona un pedido. |
| 2 | Sistema | Comprueba pertenencia y recupera la conversación única y su historial paginado. |
| 3 | Participante | Escribe texto o selecciona adjuntos habilitados y envía con una clave estable. |
| 4 | Sistema | Revalida permiso y contenido y persiste el mensaje antes de confirmar. |
| 5 | Sistema | Registra el aviso y devuelve identidad y fecha del mensaje. |
| 6 | Participante | Consulta el historial y recupera cambios al reconectar. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 2.A | Sistema | Todavía no existe pedido confirmado o el usuario es ajeno: Deniega la conversación y protege el historial. |
| 4.B | Sistema | Red interrumpida o resultado incierto: Permite reintentar con la misma clave y reconciliar el mensaje. |
| 4.C | Sistema | Misma clave con contenido distinto: Devuelve conflicto y conserva el mensaje original. |
| 2.D | Sistema | Membresía vencida con pedido existente: Mantiene la conversación autorizada del pedido. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F13](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-14, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
