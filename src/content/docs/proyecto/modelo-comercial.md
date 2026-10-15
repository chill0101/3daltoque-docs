---
title: "Modelo comercial, prueba y fundadores"
description: "Documentación de análisis y diseño de 3DAltoque."
---

Versión 2.0-borrador. Decisión de alcance adoptada el 14 de octubre de 2026; revisión académica pendiente.

## Modelo elegido para la primera versión

3DAltoque conecta clientes con makers y cobra al maker un abono mensual prepago por el uso del servicio. Hay un único plan inicial y la renovación es manual mediante Mercado Pago Checkout Pro. No se utiliza débito recurrente.

El cliente paga la impresión directamente al maker, por el medio que acuerden. La plataforma no recibe, retiene, reparte, liquida ni garantiza ese dinero. No cobra comisiones por pedido ni registra deuda de comisiones del maker.

La integración de pagos sigue siendo parte del proyecto, pero corresponde al cobro de nuestro servicio al maker. No se requieren split, vinculación OAuth de vendedores, Payouts, billetera propia ni custodia de dinero de impresiones.

## Prueba general

La base inicial es de 30 días gratuitos, configurables, desde la primera habilitación del perfil para recibir solicitudes. Registrarse no consume por sí solo el beneficio.

No se pide tarjeta para comenzar, no se crea una autorización de débito y no se cobra automáticamente al finalizar. Se informa el inicio, el vencimiento y el precio posterior antes de pagar. El importe definitivo y el criterio de habilitación del perfil siguen pendientes.

## Makers Fundadores

El programa reconoce a los primeros makers del piloto, con un cupo limitado y condiciones visibles. La asignación inicial es manual y auditada, para evitar un sistema de promociones o referidos innecesario.

El beneficio inicial es de 90 días gratuitos totales en lugar de 30. No se acumulan 30 más 90, no se reinicia el plazo con cada edición del perfil y no se otorga acceso gratuito de por vida.

Puede mostrarse un distintivo y habilitarse participación en el feedback del producto. El distintivo no garantiza pedidos, posición en el matching, calidad, mejores calificaciones ni participación societaria. No se promete un precio congelado para siempre.

Duración, cupo, ventana y habilitación del programa son configurables. El cupo concreto y las reglas para asignar el beneficio a un maker cuya prueba ya empezó deben definirse antes de abrir el programa.

## Abono y renovación manual

El maker ve la versión del plan, el importe, la moneda, la duración y las condiciones antes de iniciar una compra. El backend conserva esos datos y crea el checkout con nuestra cuenta receptora.

Volver del checkout no activa acceso. Se verifica el resultado con el proveedor y se concede un único período por compra pagada. Un webhook repetido no suma otro mes.

La propuesta para renovar anticipadamente es agregar el período adquirido al final del acceso vigente, sin perder días de prueba o abono. La unidad mensual, las reglas de calendario y las renovaciones tardías se cierran en PD-10.

## Qué pasa al vencer

El vencimiento limita compromisos nuevos, pero no perjudica acuerdos existentes. El maker conserva lo necesario para terminar pedidos ya aceptados: comunicación, producción, evidencia, revisión, coordinación y recepción.

La selección de candidatos y la aceptación de trabajos nuevos consultan habilitación en el servidor. Los recordatorios no son la autoridad de la vigencia: una caída del worker no extiende el beneficio gratuito.

La regla exacta para ofertas todavía no aceptadas cuando vence el acceso requiere PD-05. La recomendación es impedir nuevos acuerdos hasta renovar, sin cancelar pedidos que ya existían.

## Parámetros iniciales y pendientes

| Parámetro | Base vigente |
| --- | --- |
| Cantidad de planes | Uno |
| Forma de cobro | Prepago; renovación manual |
| Prueba general | 30 días como valor inicial configurable |
| Beneficio fundador | 90 días totales como valor inicial configurable |
| Inicio gratuito | Primera habilitación del perfil para recibir solicitudes |
| Cupo fundador | Limitado; cantidad concreta pendiente |
| Precio y moneda del abono | Pendientes; deben ser visibles antes de comprar |
| Período pago | Mensual; regla exacta de calendario pendiente |
| Comisión por impresión | Fuera de v1 |
| Cobro cliente a maker | Directo entre las partes, fuera del procesamiento de 3DAltoque |
| Renovación automática, prorrateos y varios niveles | Fuera de v1 |

Los parámetros no cambian retroactivamente compras o beneficios ya concedidos. Cualquier excepción comercial requiere permiso y auditoría.

## Sostenibilidad y comunicación

El abono no garantiza rentabilidad ni un volumen de trabajos. Antes del lanzamiento comercial deben validarse demanda, valor para makers y disposición a pagar; el precio debe contemplar costos del proveedor de cobro e infraestructura.

El uso de archivos, análisis, almacenamiento y servicios externos tendrá límites configurables. Una alerta presupuestaria no garantiza que el proveedor deje de facturar.

## Devoluciones y alcance de la protección

Se debe definir la política aplicable a devoluciones del abono y su efecto sobre acceso futuro. Esto no convierte a la plataforma en pagadora de reembolsos por impresiones ni sustituye la revisión de condiciones de uso.

La aprobación del resultado sigue siendo expresa antes de la entrega y el silencio nunca aprueba. Esa revisión del producto no libera ni retiene fondos de la impresión, porque no los procesamos.

## Integración prevista y fuentes

Checkout Pro se usa para cobrar el abono del maker. Las compras y los períodos de acceso son conceptos internos de 3DAltoque; no se presentan como una suscripción automática de Mercado Pago.

- [Checkout Pro](https://www.mercadopago.com.ar/developers/es/docs/checkout-pro-preferences/overview).
- [Notificaciones y verificación del proveedor](https://www.mercadopago.com.ar/developers/es/docs/your-integrations/notifications/webhooks).

La simulación queda como contingencia académica identificada y separada por entorno; nunca habilita acceso comercial real por un resultado ficticio.
