---
title: "Base de datos"
---

# Base de datos

El modelo contiene 61 tablas y 579 columnas, detalladas en [el diccionario](/3daltoque-docs/modelado/modelo-logico/) y [diez vistas del DER](/3daltoque-docs/modelado/datos/).

## Orígenes del pedido

La solicitud personalizada utiliza archivo y ofertas de makers compatibles. El catálogo utiliza producto, configuración y condiciones publicadas. Ambos orígenes conservan su acuerdo en pedidos y condiciones y comparten conversación, revisión, entrega y reputación.

## Acceso del maker

Las compras del abono y sus pagos se relacionan con membresías y períodos de acceso. El precio pactado de la impresión permanece en las condiciones del pedido y se paga directamente entre cliente y maker.

## Consistencia

Unicidad del pedido por solicitud, claves de operación por cliente, versiones inmutables, titularidad y pertenencia, conversación por pedido, valoración por autor/pedido y un período por compra verificada. Los límites de transacción y los casos concurrentes están en [arquitectura](/3daltoque-docs/diseno/arquitectura/) y [pruebas](/3daltoque-docs/analisis/pruebas-y-trazabilidad/).
