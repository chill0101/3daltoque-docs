---
title: "CU-11 Pagar o renovar abono"
---

# CU-11 Pagar o renovar abono

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Pagar o renovar abono |
| Identificador | CU-11 |
| Actores | Maker, Mercado Pago, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F11. [RF-12.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-5), [RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.8](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8), [RF-12.9](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-9), [RF-12.14](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-14), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Plan publicado con importe, moneda y duración válidos. |
| Postcondición | Compra y resultado conservados; un pago verificado concede un único período. |
| Descripción | El maker decide comprar o renovar manualmente su acceso. |
| Resumen | Compra y resultado conservados; un pago verificado concede un único período. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Maker | Consulta y acepta las condiciones de la versión del plan. |
| 2 | Sistema | Crea una compra idempotente con importe, moneda, duración, modo y entorno propios. |
| 3 | Sistema | Prepara o recupera el checkout con la cuenta receptora de la plataforma. |
| 4 | Maker | Completa la operación en Mercado Pago y vuelve al panel. |
| 5 | Sistema | Persiste la notificación, consulta el recurso al proveedor y contrasta cuenta, entorno, referencia, importe y moneda. |
| 6 | Sistema | Conserva el resultado y concede un único período por compra pagada en una transacción. |
| 7 | Maker | Consulta el estado verificado y las fechas resultantes. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 4.A | Sistema | Retorno pendiente, rechazado o interrumpido: Presenta el estado real y permite recuperar la compra. |
| 5.B | Sistema | Evento duplicado o resultado incierto: Deduplica y concilia antes de conceder acceso o generar otro intento. |
| 6.C | Sistema | Renovación anticipada o dos compras válidas: Serializa los intervalos y conserva los días vigentes conforme al calendario de la versión contratada. |
| 5.D | Sistema | Modo simulado: Mantiene datos y acceso académico separados del acceso comercial real. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F11](/3daltoque-docs/specs/f11-membresia-y-abono/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-11, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
