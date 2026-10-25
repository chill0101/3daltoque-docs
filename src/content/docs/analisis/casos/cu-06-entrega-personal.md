---
title: "CU-06 Entrega personal"
---

# CU-06 Entrega personal

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Entrega personal |
| Identificador | CU-06 |
| Actores | Cliente, Maker, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F16, F17. [RF-06.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-6), [RF-06.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-7), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Pedido de los participantes y revisión vigente aprobada. |
| Postcondición | Punto y horario acordados; recepción del cliente registrada y pedido completado. |
| Descripción | Una revisión aprobada queda disponible para coordinar entrega. |
| Resumen | Punto y horario acordados; recepción del cliente registrada y pedido completado. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Cliente o maker | Propone un punto neutral y un horario. |
| 2 | Sistema | Valida ubicación autorizada, revisión aprobada y versión del acuerdo. |
| 3 | Contraparte | Acepta la propuesta de encuentro. |
| 4 | Sistema | Conserva el acuerdo vigente para ambos participantes. |
| 5 | Cliente | Después del intercambio confirma expresamente la recepción desde su sesión. |
| 6 | Sistema | Comprueba cliente, acuerdo y revisión vigentes; registra la recepción idempotente y completa la entrega. |
| 7 | Sistema | Actualiza el pedido y avisa a las partes. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 3.A | Cliente o maker | Cambia lugar u horario: El sistema conserva otra propuesta y requiere aceptación de la contraparte. |
| 5.B | Maker | Intenta confirmar como receptor: El sistema rechaza la acción y conserva la recepción pendiente. |
| 6.C | Sistema | Existe un incidente o falta aprobación vigente: Mantiene el cierre pendiente y permite registrar soporte con motivo. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F16](/3daltoque-docs/specs/f16-entrega-en-nodo-amigo/), [F17](/3daltoque-docs/specs/f17-validacion-de-recepcion/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-06, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
