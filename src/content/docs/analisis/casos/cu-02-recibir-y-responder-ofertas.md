---
title: "CU-02 Recibir y responder ofertas"
---

# CU-02 Recibir y responder ofertas

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Recibir y responder ofertas |
| Identificador | CU-02 |
| Actores | Maker, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F08, F09. [RF-03.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-2), [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1), [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2), [RF-04.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-5), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Invitación del maker para una solicitud vigente. |
| Postcondición | Oferta versionada presentada o rechazo registrado. |
| Descripción | El maker abre una invitación recibida. |
| Resumen | Oferta versionada presentada o rechazo registrado. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Maker | Consulta sus invitaciones y selecciona una solicitud. |
| 2 | Sistema | Verifica destinatario, estado y acceso comercial y entrega las especificaciones autorizadas. |
| 3 | Maker | Inspecciona el archivo habilitado y define precio total, moneda, plazo, condiciones y vencimiento. |
| 4 | Sistema | Valida capacidad, versión de solicitud, vigencia y permisos. |
| 5 | Sistema | Conserva la oferta y su versión inmutable. |
| 6 | Sistema | Registra el aviso para el cliente y devuelve la referencia de oferta. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 2.A | Maker | Elige rechazar la invitación: El sistema registra el rechazo una vez y cierra esa respuesta. |
| 4.B | Sistema | Solicitud modificada, cerrada o acceso vencido: Rechaza la publicación y devuelve las condiciones vigentes. |
| 5.C | Sistema | Se reintenta la misma publicación: Recupera el resultado identificado y evita duplicados. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F08](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/), [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02), [RNF-03](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-03), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-02, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
