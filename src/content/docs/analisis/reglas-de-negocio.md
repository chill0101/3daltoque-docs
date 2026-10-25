---
title: "Reglas de negocio"
---

# Reglas de negocio

Versión 3.0. Fecha: 25 de octubre de 2026.

| Regla | Definición | Requisitos |
| --- | --- | --- |
| RB-01 | La autorización utiliza identidad, roles y permiso por recurso. | RF-01.1, RF-01.4, RF-11.1 |
| RB-02 | La solicitud personalizada conserva STL habilitado, unidad y parámetros. | RF-02.1, RF-02.2, RF-02.3 |
| RB-03 | La estimación automática identifica método y supuestos y explica su indisponibilidad. | RF-02.5 |
| RB-04 | La búsqueda filtra capacidad y acceso y luego considera ubicación y disponibilidad en un grupo limitado. | RF-03.1, RF-03.2 |
| RB-05 | Una negociación conserva propuesta y respuesta; el maker publica una versión nueva antes de que el cliente contrate. | RF-04.6 |
| RB-06 | La aceptación confirma un único pedido por solicitud y conserva condiciones de la versión elegida. | RF-04.4 |
| RB-07 | El catálogo conserva publicaciones y versiones de una configuración con precio fijo. | RF-13.1, RF-13.2, RF-13.3 |
| RB-08 | El pedido directo conserva versión, cantidad, precio unitario, total y condiciones calculados en backend. | RF-13.4 |
| RB-09 | El cliente paga la impresión directamente al maker; la plataforma registra su abono de membresía. | RF-12.5, RF-12.15 |
| RB-10 | La conversación pertenece a un pedido confirmado y a sus participantes autorizados. | RF-05.1, RF-05.4 |
| RB-11 | El mensaje se persiste antes de confirmar y su reintento conserva identidad y contenido. | RF-05.2 |
| RB-12 | El portfolio publica trabajos y medios autorizados con privacidad del pedido original. | RF-14.1, RF-14.2 |
| RB-13 | Los originales privados y referencias históricas se protegen por finalidad y permisos. | RF-10.1, RF-10.2, RF-10.3, RF-10.4 |
| RB-14 | La aprobación del resultado es expresa y corresponde a la revisión vigente. | RF-06.3, RF-06.4 |
| RB-15 | El encuentro conserva propuesta, versión y aceptación de la contraparte. | RF-06.6 |
| RB-16 | La recepción se completa por confirmación autenticada del cliente titular. | RF-06.7 |
| RB-17 | La valoración requiere pedido completado y es única por autor y pedido. | RF-15.1, RF-15.2 |
| RB-18 | La moderación conserva motivo, actor e historial y actualiza los agregados autorizados. | RF-15.3, RF-07.2 |
| RB-19 | Cada maker recibe un único beneficio inicial general o fundador con condiciones conservadas. | RF-12.2, RF-12.3 |
| RB-20 | La compra manual del abono concede acceso después de verificar el resultado del proveedor. | RF-12.5, RF-12.6, RF-12.8, RF-12.9 |
| RB-21 | El vencimiento restringe trabajos nuevos y conserva pedidos, comunicación y entrega existentes. | RF-12.10 |
| RB-22 | El historial y los reportes aplican filtros, fuentes y ámbitos de acceso explícitos. | RF-16.1, RF-17.1 |
| RB-23 | La administración utiliza capacidades específicas y registra sus intervenciones. | RF-07.2, RF-12.13 |
| RB-24 | Los cobros simulados conservan modo y entorno separados del acceso comercial real. | RF-12.14 |
| RB-25 | Los avisos derivan de hechos persistidos y se deduplican por evento y destinatario. | RF-07.1, RF-07.3, RF-07.4, RF-07.5, RF-12.11 |

## Configuración y fundamento

Las reglas se apoyan en [ADR-002](/3daltoque-docs/decisiones/modelo-comercial/) y [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Los valores operativos se conservan versionados en [las decisiones PD](/3daltoque-docs/planificacion/parametros/).
