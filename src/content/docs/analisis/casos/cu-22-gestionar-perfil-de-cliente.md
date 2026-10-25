---
title: "CU-22 Gestionar perfil de cliente"
---

# CU-22 Gestionar perfil de cliente

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Gestionar perfil de cliente |
| Identificador | CU-22 |
| Actores | Cliente, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F02. [RF-01.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-3), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Cliente titular autenticado. |
| Postcondición | Contacto y ubicación autorizados actualizados; referencias históricas conservadas. |
| Descripción | El cliente consulta o edita sus datos. |
| Resumen | Contacto y ubicación autorizados actualizados; referencias históricas conservadas. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Cliente | Abre su perfil. |
| 2 | Sistema | Recupera datos propios y permisos de edición. |
| 3 | Cliente | Edita contacto y selecciona o ingresa manualmente una ubicación de referencia. |
| 4 | Sistema | Valida campos, precisión, propiedad y versión. |
| 5 | Sistema | Conserva la referencia nueva y mantiene las ubicaciones ya utilizadas por acuerdos históricos. |
| 6 | Cliente | Consulta el perfil actualizado. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 3.A | Sistema | Ubicación denegada o proveedor indisponible: Permite la alternativa textual habilitada y explica la precisión disponible. |
| 4.B | Sistema | Datos inválidos o cambio concurrente: Informa los campos y permite recuperar la versión actual. |
| 2.C | Sistema | Se solicita un perfil ajeno: Deniega el acceso. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F02](/3daltoque-docs/specs/f02-gestion-de-perfil-de-cliente/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-22, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
