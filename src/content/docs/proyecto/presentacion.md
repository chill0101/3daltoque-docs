---
title: "Qué es 3DAltoque"
description: "Documentación de análisis y diseño de 3DAltoque."
---

Versión 2.0-borrador. Fecha: 14 de octubre de 2026.

## Propósito

Conectar a personas que necesitan una impresión 3D con makers cercanos y compatibles, organizando solicitud, ofertas, acuerdo, comunicación, producción, revisión y entrega personal.

## Recorrido principal

1. El cliente carga STL, material, cantidad y especificaciones.
2. Se invita a un grupo reducido de makers compatibles y comercialmente habilitados.
3. Los makers presentan ofertas versionadas con precio, plazo y vigencia.
4. El cliente acepta una versión válida; se confirma un único pedido y se cierran las alternativas.
5. Las partes coordinan directamente el pago de la impresión. 3DAltoque no procesa ni garantiza esos fondos.
6. El maker fabrica y presenta evidencia. El cliente aprueba la revisión concreta o registra observaciones.
7. Después de la aprobación se coordina un encuentro personal y se registra la recepción.

Conversar no reserva al cliente. La estimación inicial es orientativa y no reemplaza la oferta del maker. El silencio no aprueba el resultado.

## Acceso del maker y monetización

El maker utiliza un único plan mensual prepago. La prueba general comienza al habilitar el perfil y tiene 30 días iniciales configurables. Makers Fundadores recibe 90 días totales en vez de 30, con cupo limitado y condiciones visibles.

El abono se cobra mediante Checkout Pro y se renueva manualmente. Vencer limita trabajos nuevos, no la finalización de pedidos existentes. Precio, moneda, cupo y reglas abiertas se detallan en [Modelo comercial](/3daltoque-docs/proyecto/modelo-comercial/).

## Límites de v1

No hay comisión por pedido, pago de impresiones dentro de nuestra pasarela, custodia de fondos, split, OAuth de vendedores ni transferencias a makers. Tampoco se incorporan flota propia, GPS de repartidores, custodia en comercios, reparación avanzada automática de STL o venta de diseños como núcleo obligatorio.

La inclusión de una app nativa en la implementación inicial sigue pendiente; su prototipo permanece en la documentación académica prevista.

## Base técnica y estado

Backend FastAPI y Python; monolito modular con separación hexagonal simple. React web y React Native previsto consumen la misma API. PostgreSQL/PostGIS, persistencia y hosting siguen como propuestas según los documentos técnicos.

Se documenta un diseño, no una aplicación implementada. El cambio comercial está registrado en [ADR-002](/3daltoque-docs/proyecto/modelo-comercial/).
