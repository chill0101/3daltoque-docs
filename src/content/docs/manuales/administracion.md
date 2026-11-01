---
title: "Manual de administración"
---

# Manual de administración

Versión 1.0. Fecha: 1 de noviembre de 2026.

## Acceso y alcance de permisos

Ingresá con una cuenta administrativa asignada por el procedimiento autorizado. El panel presenta las capacidades disponibles de soporte, moderación, plan, fundadores, conciliación y reportes. Cada intervención sensible registra actor, recurso, fecha y motivo. Utilizá la referencia del caso o pedido para conservar su trazabilidad.

## Configurar el plan

1. Abrí Plan y membresías y consultá la versión vigente.
2. Prepará importe, moneda, duración y fecha de activación de otra versión.
3. Revisá el efecto sobre compras futuras y registrá el motivo.
4. Confirmá y consultá la nueva versión.
5. Comprobá que las compras y períodos anteriores conservan sus condiciones.

El importe de una compra se determina en backend a partir de la versión del plan. La interfaz de administración conserva historial de configuración y activación.

## Programa Makers Fundadores

Consultá cupo, ventana y condiciones del programa. Para asignar un beneficio, abrí el maker, comprobá elegibilidad, registrá el motivo y confirmá. El sistema consume el cupo de forma atómica y conserva la asignación. Si se agotó el cupo o cambió la versión, recuperá la configuración antes de decidir otra acción.

La duración fundadora configura el beneficio inicial total. La prueba general y la fundadora utilizan una única concesión inicial; los cambios de perfil conservan esa concesión. Las asignaciones posteriores se evalúan según la política versionada del programa y su historial.

## Conciliar un cobro de abono

1. Buscá la compra por su referencia, maker y fecha.
2. Consultá importe, moneda, entorno y estado conservados.
3. Ejecutá conciliación con permiso y motivo cuando corresponda.
4. Revisá el resultado de la consulta al proveedor y la referencia del pago.
5. Comprobá el período concedido o la incidencia pendiente.

Una conciliación utiliza la misma compra y deduplica el efecto comercial. Para devolver un abono, revisá la política vigente, registrá motivo y confirmá la operación autorizada. Consultá luego el estado del reembolso y su relación con períodos futuros. Las impresiones mantienen el pago directo acordado entre cliente y maker.

## Soporte e intervenciones

Abrí el caso de soporte y consultá únicamente los recursos necesarios para resolverlo. Identificá participantes, estado, revisión y acuerdo vigente. Registrá observación, acción permitida y motivo. Una intervención conserva el acuerdo y la auditoría; las decisiones del cliente sobre aprobación y recepción mantienen sus permisos específicos.

Si una acción presenta resultado incierto, consultá su referencia antes de generar otra intención. Escalá a operación los errores persistentes de proveedor, archivo o consistencia con su request_id y recurso afectado.

## Moderar publicaciones y valoraciones

Buscá el contenido por su referencia y verificá la capacidad de moderación. Consultá la versión visible y la causa del caso; registrá el motivo y confirmá la acción. El sistema conserva la intervención y su efecto sobre visibilidad. Una valoración retirada queda excluida del agregado público según su estado y conserva el registro de auditoría.

El catálogo pausado o moderado mantiene los pedidos anteriores. Las acciones sobre medios públicos preservan los permisos de archivos privados asociados a pedidos.

## Reportes y seguimiento

Elegí el intervalo, filtros y zona autorizados para consultar actividad. Los indicadores identifican período y denominador: solicitudes, ofertas, pedidos confirmados, recepciones, membresías y conversión de prueba. Revisá el origen del dato antes de interpretar un cambio. Los reportes agregados conservan la minimización de datos privados.

## Cierre de sesión y evidencia

Cerrá sesión al finalizar. Los registros de operación mantienen request_id, referencia, acción, fecha, resultado y motivo. Una captura de incidente debe proteger mensajes, domicilios y credenciales que excedan lo necesario para el caso.

Referencias: CU-07, CU-10 a CU-12, CU-18, RNF-04, RNF-06 y RNF-09. Los procedimientos técnicos están en [Seguridad y operación](/3daltoque-docs/diseno/seguridad/).
