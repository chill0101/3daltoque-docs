---
title: "Revisión funcional completa"
---

# Revisión funcional completa

Fecha: 25 de octubre de 2026. Fuente de trabajo: docs-hidden.

## Decisiones incorporadas

El cliente confirma directamente un pedido de producto con las condiciones publicadas por el maker. La conversación se habilita desde el pedido confirmado. [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/) registra ambos acuerdos y las reglas compartidas con la contratación personalizada.

## Hallazgos y cobertura completada

| Área | Referencias | Comportamiento documentado |
| --- | --- | --- |
| Catálogo del maker | F25, RF-13.1 a RF-13.4, CU-19/CU-20 | Publicación versionada, condiciones fijas, pedido directo, precio del servidor e idempotencia. |
| Chat | F13, RF-05.1/RF-05.2/RF-05.4, CU-14 | Bandeja propia y conversación única desde el pedido confirmado. |
| Portfolio | F04, RF-14.1/RF-14.2, CU-15 | Publicación y retiro de trabajos; derivados públicos y autorización de los medios. |
| Reputación | F18, RF-15.1 a RF-15.3, CU-16 | Valoración de la contraparte después de la entrega; unicidad, escala y moderación. |
| Historial | F19, RF-16.1, CU-17 | Pedidos propios de ambos orígenes, filtros, cursor y detalle autorizado. |
| Reportes | F21, RF-17.1, CU-18 | Fórmulas, intervalo, permisos y resultados sin observaciones. |
| Negociación | F09, RF-04.6, CU-25 | Propuesta sobre versión concreta; nueva oferta del maker y aceptación final del cliente. |
| Encuentro y recepción | F16/F17, CU-06 | Aceptación de versión de punto y horario; confirmación del cliente autenticado. |
| Notificaciones y archivos | F14/F23, CU-23/CU-24 | Bandeja, lectura, finalidad del archivo, permisos y recuperación. |

## Inventario revisado

| Artefacto | Contenido | Referencia |
| --- | --- | --- |
| Funcionalidades | 25 fichas y 25 specs | [Catálogo](/3daltoque-docs/proyecto/funcionalidades/) y [specs](/3daltoque-docs/specs/) |
| Requisitos | 68 RF activos y 19 RNF | [RF](/3daltoque-docs/analisis/requisitos/funcionales/) y [RNF](/3daltoque-docs/analisis/requisitos/no-funcionales/) |
| Casos de uso | 25 fichas con plantilla, flujos normales y alternativos numerados | [Índice y diagrama](/3daltoque-docs/analisis/casos-de-uso/) |
| Contratos de API | 75 operaciones | [API y eventos](/3daltoque-docs/diseno/api-eventos/) |
| Persistencia | 58 tablas, 548 columnas y 10 vistas DER | [DER](/3daltoque-docs/modelado/datos/) y [modelo lógico](/3daltoque-docs/modelado/modelo-logico/) |
| Diseño | 39 clases de dominio; 14 servicios de aplicación con operaciones y puertos | [Dominio](/3daltoque-docs/modelado/clases-y-arquitectura/#dominio) y [diseño](/3daltoque-docs/diseno/clases-de-diseno/) |
| Pruebas | 160 CP planificados: 136 por RF, 12 de membresía y 12 de integración | [Datos, acciones y resultados esperados](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) |
| Vistas | 122 superficies documentadas, incluidas 12 nuevas; 110 composiciones de mock conservadas | [Inventario](/3daltoque-docs/specs/03-inventario-de-vistas-y-flujos/) |

## Comprobaciones documentales

El verificador de cobertura comprueba que todos los RF activos estén relacionados con funcionalidades, CU y CP; que los CU conserven los campos de la plantilla; que las specs referencien pantallas, tablas y API; y que las claves y referencias del modelo resuelvan. Los SVG se generan desde las fuentes editables incorporadas en cada documento.

La cobertura documental permite revisar el diseño de cada recorrido. Cada CP conserva estado Planificado hasta ejecutar el software en una versión y entorno identificados y adjuntar su evidencia.

## Parámetros y trabajo pendiente

| Área | Dato o actividad pendiente |
| --- | --- |
| Identidad | Credenciales, verificación de contacto, recuperación y plazos de sesión en PD-01. |
| Archivos y estimación | Proveedores, cuotas, formatos, límites y coeficientes versionados en PD-02/PD-03. |
| Matching y catálogo | Radios, tamaños de grupo, vigencias y límites de operación en PD-04/PD-05. |
| Chat, revisión y entrega | Conservación, límites, recordatorios y tratamiento operativo de incidentes en PD-06 a PD-08. |
| Abono | Cuenta y credenciales por entorno, precio, moneda, cupo, calendario y devoluciones en PD-09/PD-10. |
| Calidad y operación | Metas de medición, proveedores, hosting, soporte y conservación en PD-11 a PD-15. |
| Implementación | Consolidar contratos en OpenAPI, migraciones y servicios; ejecutar los CP y registrar evidencia. |
| Diseño visual | Revisar mocks y añadir las vistas nuevas cuando el equipo retome Figma. |
| Entrega | Seleccionar el lote para el repo oficial y revisar sus huellas mediante PUBLICAR.md. |

El [registro PD](/3daltoque-docs/planificacion/parametros/) concentra cada parámetro en su tema. [El estado por entregable](/3daltoque-docs/planificacion/estado/) conserva las revisiones y tareas de los demás entregables. La checklist interna se mantiene en `formal/checklist-de-entregas.md`.

## Procedimiento del equipo

Las instrucciones para agentes están en `AGENTS.md`. El manual `PUBLICAR.md` explica cómo cargar documentos y vistas, preparar Starlight y seleccionar los entregables. La skill compartida está en `.agents/skills/publicar-documentacion-starlight/SKILL.md`.
