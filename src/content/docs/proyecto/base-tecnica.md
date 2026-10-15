---
title: Base técnica
description: Stack, enfoque de arquitectura e integraciones previstas.
---

## Backend compartido

El backend se implementará con **FastAPI y Python**. La interfaz web y la aplicación mobile consumirán la misma API; no se necesita un backend distinto por plataforma.

## Arquitectura

Se plantea un **monolito modular con separación hexagonal simple**:

- **Dominio:** reglas de solicitudes, ofertas, pedidos, revisiones, entregas y condiciones económicas.
- **Aplicación:** casos de uso y coordinación de las operaciones.
- **Puertos:** contratos para persistencia, pagos, archivos, mapas y notificaciones.
- **Adaptadores:** implementación de esos contratos mediante tecnologías y proveedores concretos.

FastAPI será un adaptador de entrada. Las reglas de negocio no deberían depender directamente del framework ni de un SDK de pagos.

## Definiciones y propuestas

| Área | Base actual | Estado |
| --- | --- | --- |
| Backend | FastAPI con Python | Decisión adoptada |
| Arquitectura | Monolito modular y separación hexagonal | Enfoque adoptado; diseño por desarrollar en detalle |
| Web | React | Framework de aplicación por cerrar |
| Mobile | React Native previsto | Alcance de implementación inicial por confirmar |
| Datos | Modelo relacional; PostgreSQL propuesto | Implementación y herramientas por cerrar |
| Búsqueda geográfica | PostGIS como opción sobre PostgreSQL | Propuesta por evaluar |
| Pagos | Mercado Pago y comisión configurable | Integración prevista; operación financiera por definir |
| Mapas, archivos y notificaciones | Servicios externos mediante adaptadores | Proveedores y contratos por cerrar |
| Despliegue de la aplicación | Infraestructura independiente del portal | Por seleccionar |

## Integraciones

Los contratos deberán contemplar autenticación, permisos, errores, reintentos, idempotencia y trazabilidad según corresponda. Recibir una notificación o volver de una pantalla de pago no equivale, por sí solo, a confirmar una operación financiera.

Los archivos y las evidencias requieren almacenamiento privado y accesos autorizados. Las notificaciones externas no sustituyen el historial persistido de la aplicación.

## Este portal no es la aplicación

La documentación utiliza **Astro y Starlight**, con salida estática preparada para **GitHub Pages**. Esta elección solo afecta a la presentación de los documentos: no reemplaza React, React Native, FastAPI ni la base de datos del producto.
