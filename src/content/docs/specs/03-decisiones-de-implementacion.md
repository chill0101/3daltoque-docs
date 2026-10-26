---
title: "Decisiones de implementación y alcance"
---

# Decisiones de implementación y alcance

Fecha: 25 de octubre de 2026.

## Base funcional conservada

Oferta versionada; aceptación atómica de un pedido por solicitud; revisión expresa antes de entrega; archivos privados; API FastAPI compartida; membresía mensual prepaga con renovación manual; prueba general y programa fundador configurables. Las fuentes son los RF, las reglas y ADR-002.

## Propuestas incorporadas por este paquete

| ID | Propuesta | Fundamento y cierre |
| --- | --- | --- |
| DEC-SPEC-01 | DTO comunes, cadenas decimales, fechas UTC y cursor opaco | Representación coherente en Web y Mobile; consolidar en OpenAPI al cerrar contratos. |
| DEC-SPEC-02 | Errores application/problem+json con code y errores por campo | Respuesta de interfaz y recuperación uniforme, según RFC 9457 y RNF-14/RNF-15. |
| DEC-SPEC-03 | Control de versión en recursos mutables | Definir el token de concurrencia y su respaldo en persistencia; actualizar el modelo para los recursos que lo requieran. |
| DEC-SPEC-04 | Clave estable por intención sensible | Transporte mediante Idempotency-Key y correspondencia con clave_operacion en persistencia; acordar ventana y política de conflicto. |
| DEC-SPEC-05 | Cola ordenada por confirmación e identidad como base de revisión | Orden estable y comprensible; PD-04/PD-05 decide prioridad y reordenación. |
| DEC-SPEC-06 | Capacidades de acción devueltas por el backend | La UI presenta acciones compatibles con permisos, estado y vigencia; el servidor vuelve a autorizar. |
| DEC-SPEC-07 | Portfolio, reputación y reportes con contratos y persistencia | RF-14.1 a RF-15.3 y RF-17.1, CU-15/CU-16/CU-18, modelo y pruebas relacionados. |
| DEC-SPEC-08 | Historial propio con filtros y cursor | RF-16.1 y CU-17 definen pertenencia, ambas procedencias de pedido, orden estable y privacidad. |
| DEC-DS-01 | Tokens semánticos, identidad navy/cian/magenta derivada del logo y tipografía compartida | Logo aportado por el equipo como referencia de color, curvas y capas; variantes legibles por plataforma. |
| DEC-DS-02 | Kit Web React y primitivas React Native | Compartir contratos y tokens; utilizar controles propios de cada entorno. |

La presencia de una propuesta conserva su condición en la spec. Las decisiones PD-01 a PD-15 mantienen precio, moneda, cupo, calendario, recepción, privacidad y proveedores sujetos al acuerdo correspondiente.

## Dependencias por resolver

- Identidad y habilitación: PD-01.
- Archivos, unidades y estimación: PD-02/PD-03.
- Búsqueda, invitaciones, ofertas y cola: PD-04/PD-05.
- Conversaciones, revisión y entrega: PD-06/PD-07/PD-08.
- Cobro, devoluciones y parámetros del plan: PD-09/PD-10.
- Canales, datos, calidad y soporte: PD-11 a PD-14.
- Simulación: PD-15.

Cada acuerdo debe identificar fecha, responsable y documentos afectados. Los cambios se realizan en docs-hidden, con actualización de las referencias y del mapa de publicación.

## Acuerdos funcionales del 25 de octubre

[ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/) registra el pedido directo de productos con condiciones publicadas y el chat desde el pedido confirmado. La recepción la confirma el cliente autenticado; el encuentro requiere aceptación de ambas partes sobre la versión propuesta. La negociación de precio y plazo genera otra versión de oferta del maker y requiere aceptación final del cliente. Las metas operativas, credenciales, cuotas y precios se completan en el registro PD con valores reales.
