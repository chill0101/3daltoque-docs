---
title: "Plan de integraciones"
description: "Documentación de análisis y diseño de 3DAltoque."
---

Versión 2.0-borrador. Fecha: 14 de octubre de 2026.

| ID | Integración | Alcance vigente | Pendientes |
| --- | --- | --- | --- |
| INT-01 | Mercado Pago Checkout Pro | Cobro manual del abono del maker a favor de la plataforma | Cuenta, credenciales por entorno, retornos web/mobile, pruebas y política de devolución del abono |
| INT-02 | Mapas y geocodificación | Ubicaciones, visualización y apoyo geográfico | Proveedor, límites, licencias y precisión publicada |
| INT-03 | Archivos y análisis | STL, fotos y videos privados; validación según finalidad | Proveedor, cuotas, conservación y método de estimación |
| INT-04 | Notificaciones | Avisos internos y canales externos elegidos | Canales, frecuencia, preferencias y reintentos |
| INT-05 | API común y actualización en vivo | Clientes web/mobile con permisos compartidos | Contratos y transporte final |
| INT-06 | Simulador de cobros | Demostración identificada del abono y su concesión de acceso | Entornos y permisos; nunca concede acceso comercial real desde un resultado ficticio |

## Cobro propio de membresía

La compra conserva maker, plan, importe, moneda, duración, modo y entorno. El backend crea el checkout con la cuenta propia de la plataforma. No se usan OAuth de vendedores, split, reservas de tarjeta para impresión, retención o Payouts.

<figure class="diagram-frame">
<a href="/3daltoque-docs/diagramas/secuencia-pago.svg" target="_blank" rel="noopener"><img src="/3daltoque-docs/diagramas/secuencia-pago.svg" alt="Compra del abono" loading="lazy" /></a>
<figcaption>Compra del abono. Seleccioná el diagrama para ampliarlo.</figcaption>
</figure>

[Abrir SVG](/3daltoque-docs/diagramas/secuencia-pago.svg) · [Fuente editable](/3daltoque-docs/diagramas/secuencia-pago.mmd)

El retorno del navegador informa la experiencia de navegación, no prueba el pago. La recepción autenticada se conserva de forma duradera y se consulta el recurso para verificar contexto y resultado.

Una compra pagada concede como máximo un período. Se detectan intentos inciertos y cargos adicionales y se aplica una política de recuperación sin repetir cobros a ciegas.

## Períodos gratis y programa de fundadores

Los períodos gratuitos son concesiones internas, no suscripciones automáticas del proveedor. La prueba empieza al habilitar el perfil; fundadores reemplaza 30 por 90 días totales bajo cupo configurable.

El fin de la prueba no crea un cobro. El maker debe iniciar una compra explícita; la plataforma no almacena datos de tarjeta ni un mandato de débito recurrente.

## Datos, fallas y permisos

Se verifican referencias, cuenta propia, entorno, importe y moneda; se minimiza el payload guardado y no se registran secretos. Cada operación externa tiene timeout, tratamiento de resultado incierto y política de reintento.

Los archivos requieren finalización controlada, integridad y acceso por recurso. Chat y estado de negocio se persisten antes de enviar avisos. Las tareas y el outbox son recuperables; su falla no revoca acuerdos ni extiende pruebas.

## Escenarios de prueba propuestos

Se documentarán compra aceptada/rechazada/pendiente, retorno sin pago, webhook inválido/repetido/tardío, resultado incierto, dos renovaciones simultáneas, cupo fundador concurrente, vencimiento con pedidos activos y simulación en entorno no permitido. Son escenarios pendientes de ejecución, no resultados.

## Fuentes

- [Checkout Pro](https://www.mercadopago.com.ar/developers/es/docs/checkout-pro-preferences/overview).
- [Webhooks](https://www.mercadopago.com.ar/developers/es/docs/your-integrations/notifications/webhooks).

El pago de la impresión entre cliente y maker queda fuera de esta integración. La plataforma no garantiza ni devuelve esos fondos.
