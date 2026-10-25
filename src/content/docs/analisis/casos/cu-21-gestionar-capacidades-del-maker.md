---
title: "CU-21 Gestionar capacidades del maker"
---

# CU-21 Gestionar capacidades del maker

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Gestionar capacidades del maker |
| Identificador | CU-21 |
| Actores | Maker, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F03. [RF-01.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Titular autenticado con rol maker. |
| Postcondición | Perfil, impresoras y capacidades actualizados y versionados donde corresponda. |
| Descripción | El maker abre su perfil productivo. |
| Resumen | Perfil, impresoras y capacidades actualizados y versionados donde corresponda. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Maker | Consulta perfil, impresoras, materiales y disponibilidad. |
| 2 | Sistema | Recupera los recursos propios y las restricciones vigentes. |
| 3 | Maker | Edita zona, descripción, impresoras y capacidades. |
| 4 | Sistema | Valida dimensiones positivas, materiales, titularidad y versión. |
| 5 | Sistema | Conserva cambios o desactivaciones y utiliza esas capacidades en búsquedas futuras. |
| 6 | Maker | Consulta el resultado y su perfil público autorizado. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 4.A | Sistema | Dimensiones inválidas o recurso ajeno: Rechaza el cambio y conserva los datos recuperables. |
| 5.B | Maker | Desactiva una impresora utilizada históricamente: El sistema conserva las referencias y excluye nuevas selecciones. |
| 5.C | Sistema | Cambian capacidades después de aceptar un pedido: Conserva las condiciones y las obligaciones del pedido confirmado. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F03](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-21, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
