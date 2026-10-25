---
title: "CU-15 Mantener y consultar portfolio"
---

# CU-15 Mantener y consultar portfolio

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Mantener y consultar portfolio |
| Identificador | CU-15 |
| Actores | Maker, Visitante, Administración, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F04. [RF-14.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-1), [RF-14.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-2), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Para editar: titular autenticado y archivos autorizados. Para consultar: trabajo publicado. |
| Postcondición | Trabajo publicado, actualizado o retirado; medios públicos autorizados. |
| Descripción | El maker mantiene sus trabajos o un visitante consulta el perfil público. |
| Resumen | Trabajo publicado, actualizado o retirado; medios públicos autorizados. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Maker | Crea un trabajo con título, descripción y medios de presentación. |
| 2 | Sistema | Comprueba titularidad, archivo habilitado y autorización de publicación. |
| 3 | Maker | Publica el trabajo. |
| 4 | Sistema | Conserva el registro y habilita sus derivados de presentación. |
| 5 | Visitante | Consulta el portfolio del maker y abre un trabajo. |
| 6 | Sistema | Entrega únicamente el contenido publicado y autorizado. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 2.A | Sistema | Archivo ajeno o evidencia privada sin permiso: Rechaza su publicación. |
| 3.B | Maker | Retira el trabajo: El sistema retira la presentación pública y conserva las referencias históricas necesarias. |
| 4.C | Administración | Modera contenido con capacidad y motivo: El sistema registra la intervención y su efecto público. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F04](/3daltoque-docs/specs/f04-portfolio-del-maker/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-15, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
