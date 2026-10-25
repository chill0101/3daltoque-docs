---
title: "CU-12 Gestionar plan y promociones"
---

# CU-12 Gestionar plan y promociones

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Gestionar plan y promociones |
| Identificador | CU-12 |
| Actores | Administración, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F11, F20. [RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1), [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Capacidad administrativa específica y versión vigente identificada. |
| Postcondición | Nueva configuración válida y auditada para operaciones futuras. |
| Descripción | Administración modifica condiciones comerciales. |
| Resumen | Nueva configuración válida y auditada para operaciones futuras. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Administración | Consulta la versión del plan, beneficios y cupo. |
| 2 | Administración | Propone precio, moneda, duración y condiciones con motivo. |
| 3 | Sistema | Valida importes, rangos, coherencia y versión esperada. |
| 4 | Administración | Confirma la publicación de las condiciones. |
| 5 | Sistema | Conserva una nueva versión y su vigencia y registra auditoría. |
| 6 | Sistema | Mantiene intactas las compras y períodos ya concedidos. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 3.A | Sistema | Configuración incompleta o inválida: Informa errores y mantiene la versión vigente. |
| 3.B | Sistema | Cambio concurrente: Devuelve conflicto y solicita revisar la versión nueva. |
| 4.C | Administración | Decide mantener el programa cerrado: Conserva la configuración y su estado de habilitación. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F20](/3daltoque-docs/specs/f20-panel-de-administracion/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-12, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
