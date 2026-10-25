---
title: "CU-23 Recibir y consultar notificaciones"
---

# CU-23 Recibir y consultar notificaciones

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Recibir y consultar notificaciones |
| Identificador | CU-23 |
| Actores | Cliente, Maker, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F14. [RF-07.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-1), [RF-07.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-3), [RF-07.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-4), [RF-07.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-5), [RF-12.11](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-11), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Evento persistido o destinatario autenticado. |
| Postcondición | Aviso deduplicado y bandeja propia con estado leído conservado. |
| Descripción | Se conserva un evento avisable o el usuario abre su bandeja. |
| Resumen | Aviso deduplicado y bandeja propia con estado leído conservado. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Sistema | Recupera un evento pendiente y determina destinatarios y canales habilitados. |
| 2 | Sistema | Conserva el aviso interno y prepara el envío externo identificable cuando corresponda. |
| 3 | Usuario | Abre su bandeja de avisos. |
| 4 | Sistema | Autoriza destinatario y entrega la página y sus estados de lectura. |
| 5 | Usuario | Marca un aviso como leído o abre su destino. |
| 6 | Sistema | Conserva la lectura y revalida el acceso al recurso de destino. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 2.A | Sistema | Falla un canal externo: Conserva el hecho de negocio y aplica reintento conforme a configuración. |
| 1.B | Sistema | Se repite un evento o recordatorio: Recupera el aviso identificado y evita duplicados. |
| 6.C | Sistema | El destino fue retirado o el permiso cambió: Protege sus datos y ofrece volver a la bandeja. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F14](/3daltoque-docs/specs/f14-notificaciones/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-23, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
