---
title: "API y eventos"
description: "Documentación de análisis y diseño de 3DAltoque."
---

Versión 2.0-borrador. Fecha: 14 de octubre de 2026. Prefijo propuesto: /api/v1. No es un contrato OpenAPI implementado.

## Operaciones de negocio

| Operación | Ruta orientativa | Condición |
| --- | --- | --- |
| Crear solicitud | POST /solicitudes | Cliente autorizado y archivo habilitado |
| Consultar ofertas | GET /solicitudes/{id}/ofertas | Propietario o participante autorizado |
| Publicar oferta | POST /solicitudes/{id}/ofertas | Maker con capacidad y acceso comercial vigente |
| Publicar versión | POST /ofertas/{id}/versiones | Permiso y reglas de vigencia |
| Aceptar oferta | POST /ofertas/{id}/aceptar | Versión válida, solicitud abierta y habilitación aplicable; operación atómica |
| Consultar pedido | GET /pedidos/{id} | Participantes autorizados; no exige membresía vigente para un acuerdo existente |
| Presentar evidencia | POST /pedidos/{id}/evidencias | Maker del pedido, archivos habilitados y revisión identificada |
| Revisar resultado | POST /pedidos/{id}/revisiones | Cliente del pedido, referencia exacta y decisión expresa |
| Coordinar entrega | POST /pedidos/{id}/entrega | Revisión vigente aprobada y permiso |
| Registrar recepción | POST /entregas/{id}/completar | Mecanismo y actor por cerrar |
| Enviar mensaje | POST /conversaciones/{id}/mensajes | Participante autorizado e idempotencia |

## Membresía y compra del abono

| Operación | Ruta orientativa | Condición |
| --- | --- | --- |
| Consultar plan y condiciones | GET /planes/membresia | Único plan publicado y promociones visibles |
| Consultar acceso propio | GET /makers/me/membresia | Maker autenticado |
| Consultar compras | GET /makers/me/membresia/compras | Solo compras propias |
| Crear compra | POST /makers/me/membresia/compras | Plan elegible, condiciones aceptadas y clave idempotente |
| Iniciar o recuperar checkout | POST /compras-membresia/{id}/checkout | Propietario; importe fijado por backend |
| Consultar compra | GET /compras-membresia/{id} | Maker propietario o administración autorizada |
| Notificación del proveedor | POST /webhooks/mercadopago | Firma/contexto válidos, persistencia duradera y consulta del recurso |
| Publicar plan y promociones | PATCH /admin/configuracion/membresia | Permiso, versión y auditoría |
| Asignar fundador | POST /admin/makers/{id}/fundador | Programa abierto, cupo atómico y reglas aplicables |

La primera habilitación del perfil inicia el beneficio general o fundador, no un checkout. La operación concreta de habilitación se cierra con PD-01. No hay endpoint para cobrar impresiones, transferir al maker o debitar comisiones pendientes.

## Idempotencia, compra y concesión

Una compra conserva plan, importe, moneda, duración, modo y entorno. Tras consultar el resultado al proveedor se valida el contexto completo. En la transacción local se registra el resultado y se concede como máximo un período por compra.

Las renovaciones sobre una misma membresía deben serializar la determinación del nuevo intervalo. Si hay dos compras distintas válidas, se conserva cada una; si se repite el mismo evento, no se suma otro período.

Un pago pendiente, un comprobante o una vuelta desde el checkout no habilitan acceso. Un resultado incierto se concilia antes de repetir un cobro. Datos de simulación y producción están separados.

## Eventos propuestos

| Evento | Uso |
| --- | --- |
| PerfilMakerHabilitado | Iniciar una única prueba según condiciones aplicables |
| FundadorAsignado | Registrar beneficio y consumo de cupo autorizado |
| CompraMembresiaCreada | Preparar el checkout y su trazabilidad |
| PagoAbonoVerificado | Procesar el resultado consistente del proveedor |
| PeriodoMembresiaConcedido | Actualizar la proyección de acceso sin duplicar efectos |
| AccesoMakerVencido | Avisar; la guarda efectiva consulta fechas del servidor |
| SolicitudEnviada / OfertaVersionPublicada | Avisos a participantes autorizados |
| PedidoConfirmado | Persistir acuerdo único, no iniciar un pago de impresión |
| EvidenciaPresentada / RevisionRegistrada | Seguimiento de una revisión concreta |
| EntregaConfirmada | Registro de recepción según política |
| MensajeCreado | Historial y notificación a participantes |

Cada evento conserva ID, tipo, versión, actor/proceso, fecha y correlación con su recurso. El outbox se persiste con el hecho de negocio; fallar al avisar no deshace un acuerdo o un período concedido.

## Errores y permisos

Los códigos de conflicto deben distinguir oferta vencida, versión modificada, solicitud cerrada, maker no habilitado, cupo fundador agotado, compra inconsistente e intento incierto. La visibilidad no expone credenciales, direcciones privadas ni compras ajenas.

Que venza una membresía no bloquea la consulta y finalización de pedidos existentes. La regla de ofertas previas a un vencimiento queda identificada en PD-05; no se cancela retroactivamente un acuerdo confirmado.
