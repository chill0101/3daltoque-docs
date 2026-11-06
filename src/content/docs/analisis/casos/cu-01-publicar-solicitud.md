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
| 2 | Sistema | Autoriza la carga y comprueba el tamaño, el formato y la integridad. El análisis geométrico para estimar se ejecuta sobre el STL habilitado. |
| 3 | Cliente | Corrige los datos, confirma la ubicación y solicita enviar. |
| 4 | Sistema | Comprueba titularidad, archivo habilitado, parámetros y límites. |
| 5 | Sistema | Conserva la versión y aplica la fórmula de PD-03 si hay volumen utilizable, unidad y configuración. Registra el método y los supuestos o la causa de indisponibilidad y continúa hacia cotización por makers. |
| 6 | Sistema | Filtra por capacidad, material, acceso comercial y cobertura de CABA. Aplica el radio inicial configurable de 10 km, ordena los candidatos elegibles y selecciona hasta cinco según el máximo inicial configurable. Conserva radio, máximo y versión de configuración de la ronda. |
| 7 | Sistema | Registra invitaciones y eventos de aviso de forma duradera. |
| 8 | Cliente | Consulta la solicitud enviada y su estado. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 2.A | Sistema | Si el archivo es inválido, la validación sigue pendiente o se supera una cuota, informa el estado y conserva el borrador para corregir o recuperar la transferencia. |
| 5.B | Sistema | Si faltan datos para estimar o se agota el tiempo de análisis, informa el motivo y permite continuar a cotización por makers con el STL habilitado. |
| 6.C | Sistema | Si el grupo está incompleto, registra los candidatos disponibles dentro del radio inicial. Si queda vacío, informa el resultado y habilita Volver a buscar mientras siga abierta. Si falla el mapa, ofrece la entrada textual y la vista de lista. |
| 6.D | Sistema | Al cumplir 90 días desde el último guardado, retira el borrador y rechaza su envío. |

El cliente puede editar los datos de fabricación de una solicitud personalizada en borrador o, tras el envío, mientras siga abierta, dentro de su plazo y hasta la primera oferta publicada. La primera oferta publicada cierra esa edición durante el resto de la solicitud, aunque después venza. Una edición de fabricación posterior al envío crea una versión y una ronda para las nuevas especificaciones. Las invitaciones anteriores pierden su capacidad de recibir ofertas. El backend conserva la fecha de vencimiento original de la solicitud. Una solicitud personalizada enviada permanece abierta hasta que el cliente confirma una oferta y se crea el pedido, o hasta que vence a los siete días del envío confirmado.

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F05](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/), [F06](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/), [F07](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/), [F08](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-03](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-03), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-01, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.

## Relaciones con otros casos de uso

Incluye CU-24 en los pasos 2 y 4 para autorizar y validar el archivo requerido.
