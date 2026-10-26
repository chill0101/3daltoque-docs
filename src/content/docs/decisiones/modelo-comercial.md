---
title: "ADR-002 Modelo comercial de membresías"
---

# ADR-002: membresía prepaga y programa de fundadores

Fecha: 14 de octubre de 2026. Estado: decisión de alcance adoptada por el equipo.

## Contexto

Se evaluaron cobro de impresiones con split, retención y transferencias posteriores, comisiones adeudadas por maker y abono fijo. La prioridad expresada fue reducir complejidad de desarrollo, riesgo de cobranza y manejo de dinero de terceros.

## Decisión

Se adopta un único plan mensual prepago para makers, con renovación manual mediante Checkout Pro. Se incorpora una prueba general de 30 días y el programa Makers Fundadores con 90 días gratuitos totales como valores iniciales configurables y cupo limitado por definir.

El cliente paga directamente al maker. La plataforma cobra únicamente su propio servicio, sin comisión por pedido, OAuth de vendedores, split, retención, Payouts o billetera propia. Los pedidos confirmados pueden completarse aunque venza el acceso.

## Consecuencias

- RF-08.1 a RF-08.9 quedan retirados y sus IDs no se reutilizan.
- Se agregan RF-12.1 a RF-12.15 para plan, acceso gratuito, fundadores, compras, cobro y vigencia.
- El catálogo asociado a esta decisión del 14 de octubre contiene 54 RF y 19 RNF. Los nueve RF retirados se conservan como antecedente.
- El pago del abono referencia una compra de membresía. El pedido de impresión conserva la oferta aceptada, su precio y las condiciones acordadas entre cliente y maker.
- Una compra verificada concede como máximo un período y no modifica otras compras o períodos.
- Cambian arquitectura, datos, casos de uso, API, avisos, UX, pruebas propuestas y documentación de presentación.

## Decisiones pendientes

Precio, moneda, cupo de fundadores, apertura/cierre de la convocatoria, habilitación inicial del perfil, regla mensual de calendario, transición de ofertas al vencer y devoluciones del abono requieren definición explícita. 

## Historial y fuentes

La decisión reemplaza la monetización por comisión por impresión del borrador anterior. Los antecedentes se preservan en context/antecedentes-modelo-comercial-2026-10-14; las investigaciones previas conservan las alternativas evaluadas durante esa etapa.

La definición completa está en [Modelo comercial](/3daltoque-docs/proyecto/modelo-comercial/).

## Ampliación del 25 de octubre de 2026

[ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/) incorpora productos del maker, conversación desde pedido confirmado y cobertura funcional de 68 RF y 25 CU. El modelo de ingresos por abono conserva la decisión de este documento.
