---
title: "CU-08 Consultar membresía"
---

# CU-08 Consultar membresía

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Consultar membresía |
| Identificador | CU-08 |
| Actores | Maker, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F11. [RF-12.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-4), [RF-12.11](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-11), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Maker autenticado. |
| Postcondición | Estado, condiciones e intervalos de acceso visibles. |
| Descripción | El maker abre su panel comercial. |
| Resumen | Estado, condiciones e intervalos de acceso visibles. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Maker | Abre la membresía propia. |
| 2 | Sistema | Recupera períodos concedidos, compras y versión de condiciones. |
| 3 | Sistema | Calcula vigencia con la fecha del servidor. |
| 4 | Sistema | Presenta prueba o abono, inicio, vencimiento, beneficio y acciones disponibles. |
| 5 | Maker | Consulta las condiciones y decide si inicia una compra manual. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 2.A | Sistema | Todavía no hubo habilitación: Informa el estado y permite continuar por CU-09. |
| 4.B | Sistema | El acceso venció: Restringe trabajos nuevos y mantiene disponibles los pedidos existentes. |
| 4.C | Sistema | Corresponde un recordatorio: Registra un aviso deduplicado conforme a la frecuencia configurada. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F11](/3daltoque-docs/specs/f11-membresia-y-abono/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-08, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
