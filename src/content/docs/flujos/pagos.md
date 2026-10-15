---
title: "Cobro del abono"
description: "Documentación de análisis y diseño de 3DAltoque."
---

## Qué procesa Mercado Pago

El maker paga a 3DAltoque una membresía mensual prepaga de renovación manual. La cuenta receptora es de la plataforma. No se procesa el pago de impresión del cliente, no se reparte dinero ni se mantienen saldos del maker.

## Compra, confirmación y acceso

<figure class="diagram-frame">
<a href="/3daltoque-docs/diagramas/secuencia-pago.svg" target="_blank" rel="noopener"><img src="/3daltoque-docs/diagramas/secuencia-pago.svg" alt="Compra del abono" loading="lazy" /></a>
<figcaption>Compra del abono. Seleccioná el diagrama para ampliarlo.</figcaption>
</figure>

[Abrir SVG](/3daltoque-docs/diagramas/secuencia-pago.svg) · [Fuente editable](/3daltoque-docs/diagramas/secuencia-pago.mmd)

El backend fija precio y condiciones de la compra. La notificación se persiste y verifica, se consulta al proveedor y se concede acceso una sola vez. El retorno del navegador no confirma un pago; reintentos y conciliación resuelven estados inciertos.

## Estados del pago del abono

<figure class="diagram-frame">
<a href="/3daltoque-docs/diagramas/estados-pago.svg" target="_blank" rel="noopener"><img src="/3daltoque-docs/diagramas/estados-pago.svg" alt="Estados del pago del abono" loading="lazy" /></a>
<figcaption>Estados del pago del abono. Seleccioná el diagrama para ampliarlo.</figcaption>
</figure>

[Abrir SVG](/3daltoque-docs/diagramas/estados-pago.svg) · [Fuente editable](/3daltoque-docs/diagramas/estados-pago.mmd)

Una compra anticipada respeta la regla de inicio de vigencia que acuerde el equipo. No hay débito recurrente automático en v1. Reembolsos del abono dependen de política; nunca se presentan como devolución de una impresión pagada por fuera.

[Modelo comercial](/3daltoque-docs/proyecto/modelo-comercial/) · [Vigencia de membresía](/3daltoque-docs/flujos/membresia/).
