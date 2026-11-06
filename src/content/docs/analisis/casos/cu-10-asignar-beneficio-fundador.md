---
title: "CU-10 Asignar beneficio fundador"
---

# CU-10 Asignar beneficio fundador

Fecha: 4 de noviembre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Asignar beneficio fundador |
| Identificador | CU-10 |
| Actores | Administración, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F11, F20. [RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3), [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Programa habilitado y cupo disponible; maker sin beneficio inicial concedido o con prueba general vigente y sin asignación fundadora previa. El cupo inicial es de 50 makers y permanece configurable. La convocatoria inicial dura 60 días desde su apertura registrada y cierra antes al completarse el cupo. |
| Postcondición | Asignación fundadora conservada con cupo, autor y versión. |
| Descripción | Administración selecciona un maker elegible. |
| Resumen | Asignación fundadora conservada con cupo, autor y versión. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Administración | Consulta las condiciones del programa y el maker. |
| 2 | Sistema | Valida permiso, plazo vigente de la convocatoria (inicialmente 60 días desde su apertura registrada), cupo disponible y elegibilidad: primera asignación o conversión de una prueba general vigente, con ausencia de asignación fundadora previa. |
| 3 | Administración | Confirma la asignación con motivo. |
| 4 | Sistema | Consume una plaza de forma atómica y registra asignación y configuración. En una conversión conserva la concesión inicial y su inicio y amplía el fin hasta inicio original más 90 días configurables; audita antes y después. |
| 5 | Sistema | Informa el beneficio y su inicio vinculado a la primera habilitación. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 2.A | Sistema | Ya existe asignación fundadora: Conserva la asignación original y evita consumir otra plaza o conceder otro beneficio. |
| 2.E | Sistema | Prueba general vencida o acceso pago: Conserva el acceso y sus antecedentes; la conversión desde la prueba general exige que siga vigente. |
| 4.B | Sistema | Dos asignaciones compiten por la última plaza: Concede como máximo una y devuelve cupo agotado a la otra. |
| 2.C | Sistema | Plazo cumplido, cupo agotado o programa cerrado: Deniega nuevas asignaciones y conserva los beneficios concedidos. |
| 2.D | Sistema | Permiso insuficiente: Deniega la asignación. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F20](/3daltoque-docs/specs/f20-panel-de-administracion/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-10, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
