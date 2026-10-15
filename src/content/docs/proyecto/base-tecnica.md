---
title: "Base técnica"
description: "Documentación de análisis y diseño de 3DAltoque."
---

## Arquitectura prevista

Backend único FastAPI / Python, monolito modular con límites hexagonales donde aporten independencia. Web y React Native consumen la misma API. PostgreSQL es la base prevista; PostGIS es una extensión propuesta para búsquedas geográficas. El framework web final, ORM y hosting de backend/base se confirman al implementar.

## Integraciones

- Mercado Pago Checkout Pro para cobrar el abono propio del maker, sin recurrencia automática.
- Mapas/geocodificación para ubicación y búsqueda, sujetos a disponibilidad y costos del proveedor.
- Almacenamiento privado y análisis de archivos STL para apoyar la cotización.
- Correo/notificaciones y comunicación del pedido con persistencia y reintentos.

No hay split de impresión, OAuth del maker, saldos ni Payouts en v1. El precio del plan y sus condiciones se versionan. La confirmación del proveedor concede como máximo un período por compra.

## Documentación y despliegue

Astro/Starlight genera este sitio estático para GitHub Pages. Esto no implica que Pages aloje la API FastAPI, la base de datos o un worker. Vercel es una opción propuesta para el frontend de aplicación; costos y planes se revisan antes de contratar.

## Estado

El contenido describe el diseño, no una implementación finalizada. [Arquitectura](/3daltoque-docs/diseno/arquitectura/) · [Integraciones](/3daltoque-docs/diseno/integraciones/) · [Modelo comercial](/3daltoque-docs/proyecto/modelo-comercial/).
