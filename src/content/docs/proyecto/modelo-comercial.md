---
title: "Membresía prepaga y Makers Fundadores"
---

# Membresía prepaga y Makers Fundadores

Versión 2.0-borrador. Decisión de alcance adoptada el 14 de octubre de 2026.

## Modelo elegido para la primera versión

3DAltoque conecta clientes con makers y cobra al maker un abono prepago en pesos argentinos (ARS) por el uso del servicio, con períodos de 30 días como valor inicial configurable. Hay un único plan inicial y la renovación es manual mediante Mercado Pago Checkout Pro. No se utiliza débito recurrente.

El cliente paga la impresión directamente al maker por el medio acordado entre las partes. Los ingresos de 3DAltoque corresponden al abono del maker, de acuerdo con ADR-002.

La integración de pagos cobra el servicio de 3DAltoque al maker mediante Checkout Pro con la cuenta receptora de la plataforma. Esta decisión concentra el desarrollo financiero en compras de membresía, confirmación de pagos y períodos de acceso.

## Prueba general

La base inicial es de 30 días gratuitos, configurables, desde la primera habilitación del perfil para recibir solicitudes. Registrarse no consume por sí solo el beneficio.

No se pide tarjeta para comenzar, no se crea una autorización de débito y no se cobra automáticamente al finalizar. Se informa el inicio, el vencimiento y el precio posterior antes de pagar. El importe inicial del abono es de 10.000 ARS por período de 30 días, configurable. Los criterios de habilitación del perfil se conservan en PD-01.

## Makers Fundadores

El programa reconoce a los primeros makers del piloto, con un cupo inicial de 50 makers, configurable, y condiciones visibles. La asignación inicial es manual y auditada; administración controla la elegibilidad, el cupo disponible y las condiciones aplicadas.

Cada maker recibe un único beneficio inicial: la prueba general de 30 días o el beneficio fundador de 90 días totales. La duración es configurable y el sistema conserva la fecha original de concesión.

El programa comprende el período gratuito, un distintivo de pertenencia y la participación en el feedback del producto. Los pedidos dependen de la aceptación de una oferta por parte del cliente. Las condiciones del abono se publican con su versión y vigencia.

Duración, cupo, ventana y habilitación del programa son configurables. El cupo inicial es de 50 makers. La convocatoria inicial permanece abierta durante 60 días desde la apertura registrada, con duración configurable, y cierra antes al completarse el cupo de 50 makers de la versión inicial. El cierre afecta nuevas asignaciones y conserva las fechas de los beneficios ya concedidos. Durante una prueba general vigente, administración puede convertirla en beneficio fundador si la convocatoria está abierta y queda cupo. Conserva el inicio y el identificador de la concesión inicial, amplía su fin hasta completar 90 días totales desde ese inicio como duración inicial configurable, consume una plaza una sola vez y audita el estado anterior y posterior. La conversión conserva un único beneficio inicial.

## Abono y renovación manual

El maker ve la versión del plan, el importe, la moneda, la duración y las condiciones antes de iniciar una compra. El backend conserva esos datos y crea el checkout con nuestra cuenta receptora.

Volver del checkout no activa acceso. Se verifica el resultado con el proveedor y se concede un único período por compra pagada. Un webhook repetido no suma otro mes.

La renovación se habilita únicamente al vencer el acceso comercial. Cada período pago dura 30 días como valor inicial configurable y comienza en el instante de la primera confirmación verificada del pago, conservado con la compra. El vencimiento se calcula sumando la duración al inicio del período. Un pago posterior al vencimiento utiliza la confirmación de esa compra como nuevo inicio. El acceso vigente conserva sus fechas y habilita la renovación cuando termina, según PD-10 y el acuerdo del 4 de noviembre de 2026.

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
| Cupo fundador | 50 makers como cupo inicial configurable; asignación única y consumo atómico |
| Convocatoria de fundadores | 60 días desde la apertura registrada, configurable; cierre anticipado al completarse el cupo |
| Precio del abono | 10.000 ARS por período de 30 días como importe inicial configurable; visible antes de comprar |
| Moneda del abono | Pesos argentinos (ARS), conservada con la versión del plan y cada compra |
| Período pago | 30 días como valor inicial configurable, desde la confirmación verificada del pago; renovación habilitada al vencer |
| Comisión por impresión | Fuera de v1 |
| Cobro cliente a maker | Directo entre las partes, fuera del procesamiento de 3DAltoque |
| Renovación automática, prorrateos y varios niveles | Fuera de v1 |

Los parámetros no cambian retroactivamente compras o beneficios ya concedidos. Cualquier excepción comercial requiere permiso y auditoría.

## Sostenibilidad y comunicación

La viabilidad del abono se evalúa con demanda observada, valor para makers, disposición a pagar y conversión de prueba. El precio debe contemplar costos del proveedor de cobro, infraestructura y soporte.

El uso de archivos, análisis, almacenamiento y servicios externos tendrá límites configurables. La operación debe documentar las alertas, los límites de consumo disponibles y las acciones ante excedentes para cada proveedor.

## Devoluciones y alcance de la protección

Administración gestiona devoluciones totales del abono. El backend determina el importe y la moneda a partir del cobro original verificado y conserva motivo, autorización, operación y resultado; cada devolución se procesa de forma idempotente y se concilia con el proveedor. Al confirmarse con el proveedor la devolución total, se retira de vigencia únicamente el período asociado a esa compra y se conserva su historial. Se mantienen los demás períodos válidos y la operativa de los pedidos ya aceptados. Una devolución pendiente conserva la vigencia previa; repetir su confirmación conserva el mismo resultado. Las solicitudes de devolución se revisan manualmente, caso por caso, desde soporte. Administración registra el caso, el pago involucrado, el motivo y su decisión; una autorización explícita habilita la devolución total. Un rechazo conserva el cobro y el acceso. El backend verifica que el caso autorizado corresponda al mismo pago y conserva las referencias del caso y del reembolso en auditoría.

La aprobación del resultado sigue siendo expresa antes de la entrega y el silencio nunca aprueba. La revisión corresponde al resultado físico de un pedido cuyo pago se acuerda directamente entre cliente y maker.

## Integración prevista y fuentes

Checkout Pro se usa para cobrar el abono del maker. 3DAltoque registra internamente las compras y los períodos de acceso. Cada renovación exige una compra iniciada expresamente por el maker.

- [Checkout Pro](https://www.mercadopago.com.ar/developers/es/docs/checkout-pro-preferences/overview).
- [Notificaciones y verificación del proveedor](https://www.mercadopago.com.ar/developers/es/docs/your-integrations/notifications/webhooks).

La simulación queda como contingencia académica identificada y separada por entorno; nunca habilita acceso comercial real por un resultado ficticio.

## Productos del maker

El catálogo utiliza configuración y precio publicados para confirmar pedidos directos. El pago de cada pieza se acuerda directamente entre cliente y maker. La plataforma conserva sus condiciones y continúa cobrando exclusivamente su abono, conforme a [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/).
