---
title: "CU-09 Habilitar perfil e iniciar prueba"
---

# CU-09 Habilitar perfil e iniciar prueba

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Habilitar perfil e iniciar prueba |
| Identificador | CU-09 |
| Actores | Maker, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F03, F11. [RF-01.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2), [RF-12.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2), [RF-12.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-4), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Rol maker, contacto y zona de referencia completos; al menos una impresora activa con capacidad válida. |
| Postcondición | Perfil habilitado y único beneficio inicial conservado. |
| Descripción | El maker solicita habilitar su perfil productivo. |
| Resumen | Perfil habilitado y único beneficio inicial conservado. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Maker | Revisa perfil, capacidades y condiciones del beneficio inicial. |
| 2 | Sistema | Valida titularidad, datos mínimos y asignación fundadora si existe. |
| 3 | Maker | Confirma la habilitación. |
| 4 | Sistema | Conserva la primera habilitación y concede una única prueba general o fundadora. |
| 5 | Sistema | Devuelve inicio, vencimiento y condiciones aplicadas. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 2.A | Sistema | Faltan capacidades o contacto: Informa los campos y mantiene el perfil pendiente. |
| 4.B | Sistema | Ya existe un beneficio inicial: Recupera la concesión original y conserva sus fechas. |
| 4.C | Sistema | Existe asignación fundadora válida: Concede el beneficio fundador como alternativa al general. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F03](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/), [F11](/3daltoque-docs/specs/f11-membresia-y-abono/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-09, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
