---
title: "CU-01 Publicar solicitud"
---

# CU-01 Publicar solicitud

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Publicar solicitud |
| Identificador | CU-01 |
| Actores | Cliente, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F05, F06, F07, F08, F23. [RF-02.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-1), [RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2), [RF-02.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-3), [RF-02.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-5), [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2), [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Cliente autenticado y ubicación de referencia disponible. |
| Postcondición | Solicitud versionada y enviada a un grupo compatible; estimación calculada o indisponibilidad informada. |
| Descripción | El cliente elige crear una solicitud personalizada. |
| Resumen | Solicitud versionada y enviada a un grupo compatible; estimación calculada o indisponibilidad informada. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Cliente | Carga STL, unidad, material, color, cantidad, urgencia y descripción. |
| 2 | Sistema | Autoriza el archivo, verifica su integridad y análisis y devuelve las validaciones. |
| 3 | Cliente | Corrige los datos, confirma la ubicación y solicita enviar. |
| 4 | Sistema | Comprueba titularidad, archivo habilitado, parámetros y límites. |
| 5 | Sistema | Conserva la versión, calcula la estimación orientativa y registra método y supuestos o su causa de indisponibilidad. |
| 6 | Sistema | Selecciona un grupo limitado por capacidad, material, ubicación y acceso comercial y conserva la ronda. |
| 7 | Sistema | Registra invitaciones y eventos de aviso de forma duradera. |
| 8 | Cliente | Consulta la solicitud enviada y su estado. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 2.A | Sistema | Archivo inválido, análisis pendiente o cuota excedida: Informa el estado, conserva el borrador y permite corregir o recuperar la transferencia. |
| 5.B | Sistema | Faltan datos o parámetros para estimar: Informa el motivo y mantiene disponible la cotización por makers. |
| 6.C | Sistema | Grupo insuficiente o mapas indisponibles: Registra el resultado y aplica únicamente la ampliación o alternativa textual configuradas. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F05](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/), [F06](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/), [F07](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/), [F08](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-03](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-03), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-01, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
