---
title: "Modelo comercial, prueba y fundadores"
description: "Definición del modelo comercial de membresía mensual prepaga para makers (ADR-002), prueba gratuita inicial y programa Makers Fundadores."
---

Versión 2.0-borrador. Decisión de alcance adoptada el 14 de octubre de 2026 (`ADR-002`).

## 1. Modelo elegido para la primera versión

**3DAltoque** conecta clientes con makers y cobra al maker un **abono mensual prepago** por el uso del servicio comercial de la plataforma. Existe un único plan inicial y cada renovación es **manual** mediante **Mercado Pago Checkout Pro** (no se utiliza débito recurrente automático).

El cliente paga la impresión directamente al maker por el medio que acuerden entre las partes. La plataforma **no recibe, retiene, reparte, liquida ni garantiza ese dinero**, ni cobra comisiones por pedido ni registra deuda de comisiones del maker.

La integración de pagos forma parte del proyecto para cobrar el servicio de **3DAltoque** al maker mediante una cuenta receptora propia de la plataforma. No se requieren *split payments*, vinculación OAuth de cuentas de vendedores, *payouts*, billetera propia ni custodia de fondos de impresiones.

---

## 2. Prueba gratuita general (`30 días`)

La base inicial es de **30 días gratuitos**, configurables, contados desde la **primera habilitación del perfil maker** para recibir solicitudes ([CU-09](/3daltoque-docs/analisis/casos-de-uso/#cu-09), [RF-12.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2)). Registrarse como usuario no consume por sí solo el beneficio hasta habilitar el perfil técnico.

No se solicita tarjeta para comenzar la prueba, no se crea una autorización de débito automático y no se ejecuta ningún cobro al finalizar el período gratuito. El sistema informa de forma transparente la fecha de inicio, la fecha de vencimiento y el importe vigente del plan para cuando el maker decida abonar manualmente.

---

## 3. Programa `Makers Fundadores` (`90 días` totales no acumulables)

El programa reconoce a la camada inicial de makers del lanzamiento con un cupo limitado y condiciones visibles ([CU-10](/3daltoque-docs/analisis/casos-de-uso/#cu-10), [RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3)). La asignación es administrativa y auditada ([RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13)).

- **Beneficio inicial único:** Otorga **90 días gratuitos totales en lugar de los 30 días generales**.
- **No acumulación:** Nunca se suman `30 + 90 = 120 días`, no se reinicia el plazo al editar el perfil y no otorga gratuidad vitalicia.
- **Alcance transparente ([RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15)):** Permite lucir la insignia de *Maker Fundador* y participar en rondas tempranas de feedback, pero **no garantiza pedidos, prioridad artificial sobre la compatibilidad técnica, mejores calificaciones ni participación societaria**.

---

## 4. Abono mensual y renovación manual

El maker consulta en todo momento la versión vigente del plan, su importe, moneda, duración y condiciones antes de iniciar una compra ([CU-08](/3daltoque-docs/analisis/casos-de-uso/#cu-08), [CU-11](/3daltoque-docs/analisis/casos-de-uso/#cu-11)). El backend fija el importe a partir de la versión activa del plan y genera la preferencia en **Mercado Pago Checkout Pro** hacia la cuenta receptora de **3DAltoque**.

- **Verificación servidor a servidor ([CU-INC-03](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-03)):** Regresar desde la pantalla del navegador no activa el acceso. El backend verifica la notificación autenticada contra la API del proveedor y concede **como máximo un período** por compra pagada ([RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6), [RF-12.8](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8)).
- **Renovación anticipada o al vencimiento:** Cuando el maker renueva antes de que venza su período en curso, el nuevo período se adiciona a continuación de la fecha de vencimiento vigente sin perder días remanentes ([RF-12.9](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-9)).

---

## 5. Regla de continuidad operativa al vencer (`RF-12.10`)

El vencimiento de la membresía limita únicamente **nuevos compromisos comerciales** (recibir nuevas solicitudes compatibles o emitir nuevas ofertas), pero **jamás perjudica acuerdos ya confirmados**:

- El maker conserva acceso pleno a sus pedidos activos para conversar con el cliente, actualizar hitos de producción, presentar evidencia fotográfica, atender observaciones y coordinar la entrega personal hasta completar la recepción ([RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10)).
- La guarda de vigencia consulta siempre el reloj del servidor (`ServerClockPort`), sin depender de la ejecución del worker de recordatorios.

---

## 6. Resumen de parámetros del modelo comercial

| Parámetro comercial | Definición adoptada en v2.0 (`ADR-002`) |
| --- | --- |
| **Cantidad de planes** | Un único plan mensual configurable ([RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1)) |
| **Modalidad de cobro** | Prepago con renovación manual por iniciativa del maker ([RF-12.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-5), [RF-12.9](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-9)) |
| **Prueba gratuita general** | `30 días` corridos desde la primera habilitación del perfil ([RF-12.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2)) |
| **Beneficio Makers Fundadores** | `90 días` corridos totales (reemplaza los 30 días, no acumulable) con cupo auditado ([RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3)) |
| **Comisión por pedido de impresión** | `0%` (fuera de alcance; retirados `RF-08.1` a `RF-08.9`) |
| **Pago del trabajo de impresión** | Directo entre Cliente y Maker por fuera de 3DAltoque ([RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15)) |
| **Pasarela de cobro del abono** | Mercado Pago Checkout Pro hacia cuenta propia de 3DAltoque + Simulador identificado para demo ([RF-12.14](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-14)) |
| **Inmutabilidad histórica** | Los cambios de precio del plan rigen para compras futuras y no alteran períodos ya pagados ([RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13)) |
