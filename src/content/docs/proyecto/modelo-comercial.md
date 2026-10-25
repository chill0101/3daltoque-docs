---
title: "Membresía prepaga y Makers Fundadores"
---

# Membresía prepaga y Makers Fundadores

Versión 2.0-borrador. Decisión de alcance adoptada el 14 de octubre de 2026.

## Modelo elegido para la primera versión

3DAltoque conecta clientes con makers y cobra al maker un abono mensual prepago por el uso del servicio. Hay un único plan inicial y la renovación es manual mediante Mercado Pago Checkout Pro. No se utiliza débito recurrente.

El cliente paga la impresión directamente al maker por el medio acordado entre las partes. Los ingresos de 3DAltoque corresponden al abono del maker, de acuerdo con ADR-002.

La integración de pagos cobra el servicio de 3DAltoque al maker mediante Checkout Pro con la cuenta receptora de la plataforma. Esta decisión concentra el desarrollo financiero en compras de membresía, confirmación de pagos y períodos de acceso.

## Prueba general

La base inicial es de 30 días gratuitos, configurables, desde la primera habilitación del perfil para recibir solicitudes. Registrarse no consume por sí solo el beneficio.

No se pide tarjeta para comenzar, no se crea una autorización de débito y no se cobra automáticamente al finalizar. Se informa el inicio, el vencimiento y el precio posterior antes de pagar. El importe definitivo y el criterio de habilitación del perfil siguen pendientes.

## Makers Fundadores

El programa reconoce a los primeros makers del piloto, con un cupo limitado y condiciones visibles. La asignación inicial es manual y auditada; administración controla la elegibilidad, el cupo disponible y las condiciones aplicadas.

Cada maker recibe un único beneficio inicial: la prueba general de 30 días o el beneficio fundador de 90 días totales. La duración es configurable y el sistema conserva la fecha original de concesión.

El programa comprende el período gratuito, un distintivo de pertenencia y la participación en el feedback del producto. Los pedidos dependen de la aceptación de una oferta por parte del cliente. Las condiciones del abono se publican con su versión y vigencia.

Duración, cupo, ventana y habilitación del programa son configurables. El cupo concreto y las reglas para asignar el beneficio a un maker cuya prueba ya empezó deben definirse antes de abrir el programa.

## Abono y renovación manual

El maker ve la versión del plan, el importe, la moneda, la duración y las condiciones antes de iniciar una compra. El backend conserva esos datos y crea el checkout con nuestra cuenta receptora.

Volver del checkout no activa acceso. Se verifica el resultado con el proveedor y se concede un único período por compra pagada. Un webhook repetido no suma otro mes.

La propuesta para renovar anticipadamente es agregar el período adquirido al final del acceso vigente, sin perder días de prueba o abono. La unidad mensual, las reglas de calendario y las renovaciones tardías se cierran en PD-10.

## Qué pasa al vencer

Al vencer el acceso comercial se restringen los compromisos nuevos y se mantiene la operativa de los pedidos aceptados, según RF-12.10. El maker conserva lo necesario para terminar pedidos ya aceptados: comunicación, producción, evidencia, revisión, coordinación y recepción.

La selección de candidatos y la aceptación de trabajos nuevos consultan habilitación en el servidor. La vigencia se determina mediante la fecha del servidor y los períodos concedidos, de forma independiente del envío de recordatorios.

La confirmación de un acuerdo nuevo, incluidas ofertas previas y productos publicados, exige acceso comercial vigente. Los pedidos confirmados conservan su operativa al vencer la membresía, según RF-12.10.

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

La viabilidad del abono se evalúa con demanda observada, valor para makers, disposición a pagar y conversión de prueba. El precio debe contemplar costos del proveedor de cobro, infraestructura y soporte.

El uso de archivos, análisis, almacenamiento y servicios externos tendrá límites configurables. La operación debe documentar las alertas, los límites de consumo disponibles y las acciones ante excedentes para cada proveedor.

## Devoluciones y alcance de la protección

Se debe definir la política aplicable a devoluciones del abono y su efecto sobre acceso futuro. La política debe precisar motivos, responsables, importes y tratamiento de los períodos de acceso, según PD-09.

La aprobación del resultado sigue siendo expresa antes de la entrega y el silencio nunca aprueba. La revisión corresponde al resultado físico de un pedido cuyo pago se acuerda directamente entre cliente y maker.

## Integración prevista y fuentes

Checkout Pro se usa para cobrar el abono del maker. 3DAltoque registra internamente las compras y los períodos de acceso. Cada renovación exige una compra iniciada expresamente por el maker.

- [Checkout Pro](https://www.mercadopago.com.ar/developers/es/docs/checkout-pro-preferences/overview).
- [Notificaciones y verificación del proveedor](https://www.mercadopago.com.ar/developers/es/docs/your-integrations/notifications/webhooks).

La simulación queda como contingencia académica identificada y separada por entorno; nunca habilita acceso comercial real por un resultado ficticio.

## Productos del maker

El catálogo utiliza configuración y precio publicados para confirmar pedidos directos. El pago de cada pieza se acuerda directamente entre cliente y maker. La plataforma conserva sus condiciones y continúa cobrando exclusivamente su abono, conforme a [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/).
