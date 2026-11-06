---
title: "ADR-002 Modelo comercial de membresías"
---

# ADR-002: membresía prepaga y programa de fundadores

Fecha: 14 de octubre de 2026. Estado: decisión de alcance adoptada por el equipo.

## Contexto

Se evaluaron cobro de impresiones con split, retención y transferencias posteriores, comisiones adeudadas por maker y abono fijo. La prioridad expresada fue reducir complejidad de desarrollo, riesgo de cobranza y manejo de dinero de terceros.

## Decisión

Se adopta un único plan prepago para makers, publicado y cobrado en pesos argentinos (ARS), con renovación manual mediante Checkout Pro. El precio inicial es de 10.000 ARS por período de 30 días; permanece configurable y se conserva en la versión contratada. Cada renovación concede un período de 30 días como valor inicial configurable, con condiciones versionadas; acuerdo del 4 de noviembre de 2026. La renovación se habilita únicamente al vencer el acceso comercial. Cada período pago dura 30 días como valor inicial configurable y comienza en el instante de la primera confirmación verificada del pago, conservado con la compra. Se incorpora una prueba general de 30 días y el programa Makers Fundadores con 90 días gratuitos totales como valores iniciales configurables y cupo inicial de 50 makers, también configurable. La convocatoria inicial permanece abierta durante 60 días desde la apertura registrada, con duración configurable, y cierra antes al completarse el cupo de 50 makers de la versión inicial. El cierre afecta nuevas asignaciones y conserva las fechas de los beneficios ya concedidos.

El cliente paga directamente al maker. La plataforma cobra únicamente su propio servicio, sin comisión por pedido, OAuth de vendedores, split, retención, Payouts o billetera propia. Los pedidos confirmados pueden completarse aunque venza el acceso.

## Consecuencias

- RF-08.1 a RF-08.9 quedan retirados y sus IDs no se reutilizan.
- Se agregan RF-12.1 a RF-12.15 para plan, acceso gratuito, fundadores, compras, cobro y vigencia.
- El catálogo asociado a esta decisión del 14 de octubre contiene 54 RF y 19 RNF. Los nueve RF retirados se conservan como antecedente.
- El pago del abono referencia una compra de membresía. El pedido de impresión conserva la oferta aceptada, su precio y las condiciones acordadas entre cliente y maker.
- Una compra verificada concede como máximo un período y no modifica otras compras o períodos.
- Cambian arquitectura, datos, casos de uso, API, avisos, UX, pruebas propuestas y documentación de presentación.

## Decisiones pendientes

Durante una prueba general vigente, administración puede convertirla en beneficio fundador si la convocatoria está abierta y queda cupo. Conserva el inicio y el identificador de la concesión inicial, amplía su fin hasta completar 90 días totales desde ese inicio como duración inicial configurable, consume una plaza una sola vez y audita el estado anterior y posterior. La conversión conserva un único beneficio inicial. Los criterios de habilitación inicial del perfil corresponden a PD-01. Las solicitudes de devolución se revisan manualmente, caso por caso, desde soporte. Administración registra el caso, el pago involucrado, el motivo y su decisión; una autorización explícita habilita la devolución total. Un rechazo conserva el cobro y el acceso. El backend verifica que el caso autorizado corresponda al mismo pago y conserva las referencias del caso y del reembolso en auditoría. 

## Historial y fuentes

La decisión reemplaza la monetización por comisión por impresión del borrador anterior. Los antecedentes se preservan en context/antecedentes-modelo-comercial-2026-10-14; las investigaciones previas conservan las alternativas evaluadas durante esa etapa.

La definición completa está en [Modelo comercial](/3daltoque-docs/proyecto/modelo-comercial/).

## Ampliación del 25 de octubre de 2026

[ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/) incorpora productos del maker, conversación desde pedido confirmado y cobertura funcional de 68 RF y 25 CU. El modelo de ingresos por abono conserva la decisión de este documento.
