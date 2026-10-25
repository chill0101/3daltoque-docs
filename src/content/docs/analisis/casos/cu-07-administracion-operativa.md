---
title: "CU-07 Administración operativa"
---

# CU-07 Administración operativa

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Administración operativa |
| Identificador | CU-07 |
| Actores | Administración, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F20. [RF-07.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-2), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12), [RF-13.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-2), [RF-14.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-1), [RF-15.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-3), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Identidad administrativa con capacidad específica y recurso identificable. |
| Postcondición | Intervención autorizada y auditada o consulta de soporte conservada. |
| Descripción | Una persona autorizada abre un caso o una operación administrativa. |
| Resumen | Intervención autorizada y auditada o consulta de soporte conservada. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Administración | Consulta el caso, su recurso y la acción requerida. |
| 2 | Sistema | Comprueba la capacidad y muestra únicamente datos autorizados. |
| 3 | Administración | Registra el motivo y confirma la intervención. |
| 4 | Sistema | Valida estado y versión y aplica el caso de uso específico. |
| 5 | Sistema | Conserva actor, motivo, recurso, estado anterior y resultado en auditoría. |
| 6 | Administración | Consulta el resultado y su referencia. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 2.A | Sistema | Falta permiso sobre datos o acción: Deniega la operación y protege la información privada. |
| 4.B | Sistema | La operación requiere conciliar o devolver un abono: Aplica la política de membresía y verifica el resultado externo antes de modificar acceso. |
| 4.C | Sistema | El recurso cambió: Conserva la intervención pendiente y solicita revisar el estado actual. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F20](/3daltoque-docs/specs/f20-panel-de-administracion/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-07, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
