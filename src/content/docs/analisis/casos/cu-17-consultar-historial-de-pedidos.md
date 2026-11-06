---
title: "CU-17 Consultar historial de pedidos"
---

# CU-17 Consultar historial de pedidos

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Consultar historial de pedidos |
| Identificador | CU-17 |
| Actores | Cliente, Maker, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F19. [RF-16.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-16-1), [RF-02.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-4), [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Identidad de cliente o maker con pedidos propios. |
| Postcondición | Listado filtrado y detalle histórico autorizado. |
| Descripción | El usuario abre su actividad. |
| Resumen | Listado filtrado y detalle histórico autorizado. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Usuario | Selecciona rol, estado, período y referencia de búsqueda. |
| 2 | Sistema | Autoriza el ámbito y aplica orden estable por fecha e identidad. |
| 3 | Sistema | Devuelve página, cursor y datos mínimos de pedidos personalizados y de catálogo. |
| 4 | Usuario | Abre un pedido. |
| 5 | Sistema | Comprueba pertenencia y muestra condiciones, historial, revisión y entrega autorizadas. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 2.A | Sistema | Intervalo o cursor inválidos: Informa el error y permite reiniciar la consulta. |
| 3.B | Sistema | No hay resultados: Presenta un estado vacío conservando los filtros. |
| 5.C | Sistema | Si la membresía está vencida, conserva la consulta de pedidos propios según la ventana de acceso de PD-12. |
| 5.D | Sistema | Al cumplirse 12 meses del cierre o de la cancelación, el pedido queda fuera del listado y detalle habituales. Los reclamos abiertos y las obligaciones legales vigentes habilitan la conservación restringida de los datos necesarios. |

### Consulta de una solicitud sin pedido

El cliente titular abre el detalle de la solicitud y consulta su estado, vencimiento y las ofertas autorizadas. Si venció sin generar un pedido, el acceso habitual termina al cumplirse 12 meses desde `expira_en`. Los datos necesarios para las excepciones de PD-12 quedan bajo acceso restringido.

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F19](/3daltoque-docs/specs/f19-historial-de-pedidos/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-17, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
