---
title: "Puertos, adaptadores y clases"
description: "Documentación de análisis y diseño de 3DAltoque."
---

## Separación de responsabilidades

<figure class="diagram-frame">
<a href="/3daltoque-docs/diagramas/diseno-hexagonal.svg" target="_blank" rel="noopener"><img src="/3daltoque-docs/diagramas/diseno-hexagonal.svg" alt="Puertos y adaptadores" loading="lazy" /></a>
<figcaption>Puertos y adaptadores. Seleccioná el diagrama para ampliarlo.</figcaption>
</figure>

[Abrir SVG](/3daltoque-docs/diagramas/diseno-hexagonal.svg) · [Fuente editable](/3daltoque-docs/diagramas/diseno-hexagonal.mmd)

FastAPI es un adaptador de entrada y mecanismo de composición; las reglas del pedido y de la membresía no deben depender de HTTP, SQLAlchemy ni del SDK de pago. No se introduce una interfaz por cada función: se usan puertos en límites de persistencia, archivos, mapas, comunicación y cobro.

## Casos de aplicación

AceptarOferta comprueba pertenencia, vigencia y concurrencia; ComprarAbono obtiene condiciones del plan desde backend; ConcederAcceso verifica la compra y concede una sola vez; AprobarResultado exige decisión expresa del cliente. El cálculo de acceso usa períodos y reloj del servidor, no una bandera enviada por el navegador.

## Adaptadores

Persistencia PostgreSQL, Checkout Pro para el abono propio, proveedores de archivos/mapas/notificaciones y simuladores aislados para demostración. Los pedidos existentes no quedan inutilizados porque falle la renovación.

[Arquitectura](/3daltoque-docs/diseno/arquitectura/) · [API y eventos](/3daltoque-docs/diseno/api-eventos/).
