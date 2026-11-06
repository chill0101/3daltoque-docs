---
title: "Manual de administración"
---

# Manual de administración

Versión 1.0. Fecha: 1 de noviembre de 2026.

## Acceso y alcance de permisos

Ingresá con una cuenta administrativa asignada por el procedimiento autorizado. El panel presenta las capacidades disponibles de soporte, moderación, plan, fundadores, conciliación y reportes. Cada intervención sensible registra actor, recurso, fecha y motivo. Utilizá la referencia del caso o pedido para conservar su trazabilidad.

El acceso administrativo tiene un máximo de 8 horas desde el inicio de sesión, aunque sigas usando el panel. Al alcanzar ese plazo, iniciá sesión nuevamente. Después revisá los datos actuales y confirmá la intervención que corresponda. Cerrar sesión revoca ese acceso.

La recuperación de contraseña utiliza el [recorrido de la cuenta](/3daltoque-docs/manuales/cliente/#recuperar-la-contrasena), con un enlace de 15 minutos y un solo restablecimiento exitoso. Completar la recuperación revoca todas las sesiones de la cuenta, incluido el acceso administrativo, y requiere iniciar sesión con la contraseña nueva. Los permisos administrativos conservan su procedimiento de asignación.

## Configurar el plan

1. Abrí Plan y membresías y consultá la versión vigente.
2. Prepará importe, moneda, duración y fecha de activación de otra versión.
3. Revisá el efecto sobre compras futuras y registrá el motivo.
4. Confirmá y consultá la nueva versión.
5. Comprobá que las compras y períodos anteriores conservan sus condiciones.

El importe de una compra se determina en backend a partir de la versión del plan. La interfaz de administración conserva historial de configuración y activación.

## Programa Makers Fundadores

Consultá cupo, ventana y condiciones del programa. Para asignar un beneficio, abrí el maker, comprobá elegibilidad, registrá el motivo y confirmá. El sistema consume el cupo de forma atómica y conserva la asignación. Si se agotó el cupo o cambió la versión, recuperá la configuración antes de decidir otra acción.

La duración fundadora configura el beneficio inicial total. La prueba general y la fundadora utilizan una única concesión inicial; los cambios de perfil conservan esa concesión. Durante una prueba general vigente, administración puede convertirla en beneficio fundador si la convocatoria está abierta y queda cupo. Conserva el inicio y el identificador de la concesión inicial, amplía su fin hasta completar 90 días totales desde ese inicio como duración inicial configurable, consume una plaza una sola vez y audita el estado anterior y posterior. La conversión conserva un único beneficio inicial.

## Conciliar un cobro de abono

1. Buscá la compra por su referencia, maker y fecha.
2. Consultá importe, moneda, entorno y estado conservados.
3. Ejecutá conciliación con permiso y motivo cuando corresponda.
4. Revisá el resultado de la consulta al proveedor y la referencia del pago.
5. Comprobá el período concedido o la incidencia pendiente.

Una conciliación utiliza la misma compra y deduplica el efecto comercial. Para una solicitud de devolución, registrá un caso de soporte vinculado al pago. Revisalo individualmente y registrá motivo y decisión. Si lo autorizás, confirmá la devolución total desde ese caso; el sistema comprueba que corresponda al mismo pago. Si lo rechazás, el cobro y el acceso conservan su estado. El importe lo determina el sistema a partir de ese cobro. Consultá luego el estado del reembolso. Al confirmarse, se retira el período de esa compra; los demás períodos válidos y los pedidos ya aceptados conservan su operativa. Un reembolso pendiente mantiene la vigencia previa. Las impresiones mantienen el pago directo acordado entre cliente y maker.

## Soporte e intervenciones

Abrí el caso de soporte y consultá únicamente los recursos necesarios para resolverlo. Identificá participantes, estado, revisión y acuerdo vigente. Registrá observación, acción permitida y motivo. Una intervención conserva el acuerdo y la auditoría; las decisiones del cliente sobre aprobación y recepción mantienen sus permisos específicos.

Si una acción presenta resultado incierto, consultá su referencia antes de generar otra intención. Escalá a operación los errores persistentes de proveedor, archivo o consistencia con su request_id y recurso afectado.

## Moderar publicaciones y valoraciones

Buscá el contenido por su referencia y verificá la capacidad de moderación. Consultá la versión y el caso. Para ocultar o restituir una valoración, registrá el motivo y confirmá la acción. El historial conserva el motivo, la acción, el actor, la fecha y el cambio de visibilidad. Una valoración retirada queda excluida del agregado público según su estado y conserva el registro de auditoría.

El catálogo pausado o moderado mantiene los pedidos anteriores. Las acciones sobre medios públicos preservan los permisos de archivos privados asociados a pedidos.

## Reportes y seguimiento

Elegí el intervalo, filtros y zona autorizados para consultar actividad. Los indicadores identifican período y denominador: solicitudes, ofertas, pedidos confirmados, recepciones, membresías y conversión de prueba. Revisá el origen del dato antes de interpretar un cambio. Los reportes agregados conservan la minimización de datos privados.

## Cierre de sesión y evidencia

Cerrá sesión al finalizar. Los registros de operación mantienen request_id, referencia, acción, fecha, resultado y motivo. Una captura de incidente debe proteger mensajes, domicilios y credenciales que excedan lo necesario para el caso.

Referencias: CU-07, CU-10 a CU-12, CU-18, RNF-04, RNF-06 y RNF-09. Los procedimientos técnicos están en [Seguridad y operación](/3daltoque-docs/diseno/seguridad/).
