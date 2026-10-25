---
title: "CU-18 Consultar reporte de actividad"
---

# CU-18 Consultar reporte de actividad

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Consultar reporte de actividad |
| Identificador | CU-18 |
| Actores | Administración, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F21. [RF-17.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-17-1), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Permiso de reporte e intervalo válido. |
| Postcondición | Indicadores con definición, filtros, fecha y fuentes identificadas. |
| Descripción | Administración abre los indicadores de actividad. |
| Resumen | Indicadores con definición, filtros, fecha y fuentes identificadas. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Administración | Elige período y zona horaria. |
| 2 | Sistema | Comprueba permiso y límites y normaliza el intervalo semiabierto. |
| 3 | Sistema | Consulta altas de usuarios, makers con pedidos, confirmaciones, cancelaciones y valoraciones publicadas. |
| 4 | Sistema | Calcula conteos y promedio con las definiciones del contrato. |
| 5 | Sistema | Devuelve indicadores, filtros aplicados, fecha y fuente. |
| 6 | Administración | Consulta el resultado. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 2.A | Sistema | Falta permiso o el intervalo es inválido: Rechaza la consulta. |
| 3.B | Sistema | El período carece de actividad: Devuelve ceros y promedio ausente. |
| 3.C | Sistema | Falla temporal o límite de consulta: Informa recuperación y permite reintento manteniendo los filtros. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F21](/3daltoque-docs/specs/f21-reporte-de-actividad/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-18, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
