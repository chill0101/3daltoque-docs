---
title: "CU-19 Mantener catálogo de productos"
---

# CU-19 Mantener catálogo de productos

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Mantener catálogo de productos |
| Identificador | CU-19 |
| Actores | Maker, Visitante, Administración, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F25. [RF-13.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-1), [RF-13.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-2), [RF-13.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-3), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Titular maker; publicación comercial exige perfil y acceso vigentes. |
| Postcondición | Producto versionado publicado, pausado o retirado; pedidos históricos intactos. |
| Descripción | El maker crea o mantiene un producto de su catálogo. |
| Resumen | Producto versionado publicado, pausado o retirado; pedidos históricos intactos. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Maker | Crea un borrador con configuración fija, precio unitario, moneda, cantidades y plazo. |
| 2 | Maker | Adjunta medios autorizados y completa las condiciones. |
| 3 | Sistema | Valida valores, archivos, titularidad y versión. |
| 4 | Maker | Solicita publicar. |
| 5 | Sistema | Verifica acceso comercial y conserva la versión y su estado público. |
| 6 | Visitante | Abre el perfil y consulta el catálogo y el detalle del producto. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 3.A | Sistema | Se editan condiciones de una versión publicada: Conserva una versión nueva y mantiene la referencia de pedidos existentes. |
| 4.B | Maker | Pausa o retira la publicación: El sistema impide pedidos nuevos y conserva los datos históricos. |
| 5.C | Sistema | Acceso comercial vencido: Permite mantener borradores y retirar publicaciones; rechaza habilitar pedidos nuevos. |
| 5.D | Administración | Modera con permiso y motivo: El sistema retira la disponibilidad pública y registra auditoría. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F25](/3daltoque-docs/specs/f25-catalogo-de-productos-del-maker/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-19, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
