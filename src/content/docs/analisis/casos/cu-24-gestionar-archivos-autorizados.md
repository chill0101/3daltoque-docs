---
title: "CU-24 Gestionar archivos autorizados"
---

# CU-24 Gestionar archivos autorizados

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Gestionar archivos autorizados |
| Identificador | CU-24 |
| Actores | Cliente, Maker, Sistema |
| Tipo | Secundario; soporte de archivos de los recorridos principales. |
| Referencias | F23. [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2), [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3), [RF-10.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-4), [RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Actor autorizado para la finalidad y el contexto del archivo. |
| Postcondición | Archivo habilitado, consultado o retirado conforme a permisos y conservación. |
| Descripción | Un usuario carga, consulta o retira un archivo de un recurso. |
| Resumen | Archivo habilitado, consultado o retirado conforme a permisos y conservación. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Usuario | Selecciona contexto, finalidad y archivo. |
| 2 | Sistema | Valida permiso y límites y emite una autorización temporal de transferencia. |
| 3 | Usuario | Transfiere el archivo y solicita finalizar. |
| 4 | Sistema | Verifica integridad, tipo y análisis y conserva el estado. |
| 5 | Usuario | Solicita consultar o descargar el archivo permitido. |
| 6 | Sistema | Revalida recurso y finalidad y emite un acceso temporal o el derivado público autorizado. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 4.A | Sistema | Tipo, integridad o análisis inválidos: Rechaza la habilitación y mantiene una salida de recuperación. |
| 5.B | Usuario | Solicita retirar el archivo: El sistema aplica retiro lógico y conservación de referencias históricas. |
| 6.C | Sistema | Permiso ausente o acceso temporal vencido: Rechaza o permite obtener otro acceso mediante nueva autorización. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-24, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
