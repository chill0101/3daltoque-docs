---
title: "Requerimientos de 3DAltoque"
---

# Requerimientos de 3DAltoque

Versión 3.0. Fecha: 7 de noviembre de 2026.

## Alcance vigente

3DAltoque conecta clientes con makers y cobra al maker un abono prepago de 30 días por el uso del servicio. Hay un único plan inicial y la renovación es manual mediante Mercado Pago Checkout Pro. No se utiliza débito recurrente.

El cliente paga la impresión directamente al maker por el medio acordado entre las partes. Los ingresos de 3DAltoque corresponden al abono del maker, de acuerdo con ADR-002.

La integración de pagos cobra el servicio de 3DAltoque al maker mediante Checkout Pro con la cuenta receptora de la plataforma. Esta decisión concentra el desarrollo financiero en compras de membresía, confirmación de pagos y períodos de acceso.

## Catálogo vigente

68 requisitos funcionales y 19 no funcionales con las once filas de la plantilla de la materia. RF-08.1 a RF-08.9 se retiran del alcance vigente; no se reutilizan sus identificadores. Su versión anterior queda preservada en el antecedente del cambio comercial.

- [Fichas funcionales](/3daltoque-docs/analisis/requisitos/funcionales/).
- [Fichas no funcionales](/3daltoque-docs/analisis/requisitos/no-funcionales/).
- [Modelo comercial](/3daltoque-docs/proyecto/modelo-comercial/).
- [ADR-002](/3daltoque-docs/decisiones/modelo-comercial/).

| ID | Nombre |
| --- | --- |
| RF-01.1 | [Registrar clientes y makers](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-1) |
| RF-01.2 | [Gestionar capacidades del maker](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2) |
| RF-01.3 | [Gestionar contacto y ubicación del cliente](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-3) |
| RF-01.4 | [Iniciar sesión](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-4) |
| RF-01.5 | [Cerrar sesión](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-5) |
| RF-02.1 | [Cargar STL y parámetros de impresión](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-1) |
| RF-02.2 | [Validar archivos y límites técnicos](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2) |
| RF-02.3 | [Crear solicitud de impresión](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-3) |
| RF-02.4 | [Consultar estado y plazos de solicitud](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-4) |
| RF-02.5 | [Presentar estimación orientativa](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-5) |
| RF-03.1 | [Enviar solicitud a makers compatibles y cercanos](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1) |
| RF-03.2 | [Consultar solicitudes recibidas por el maker](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-2) |
| RF-04.1 | [Presentar oferta de precio y plazo](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1) |
| RF-04.2 | [Gestionar vigencia y estado de oferta](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2) |
| RF-04.3 | [Comparar ofertas disponibles](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-3) |
| RF-04.4 | [Aceptar una sola oferta y confirmar pedido](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4) |
| RF-04.5 | [Responder o rechazar invitación de cotización](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-5) |
| RF-04.6 | [Solicitar y resolver una contraoferta](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-6) |
| RF-05.1 | [Conversar en el contexto del pedido](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-1) |
| RF-05.2 | [Registrar mensajes y adjuntos autorizados](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2) |
| RF-05.3 | [Auditar cambios de estado del pedido](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3) |
| RF-05.4 | [Consultar la bandeja de conversaciones](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-4) |
| RF-06.1 | [Presentar evidencia de la pieza terminada](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1) |
| RF-06.2 | [Solicitar revisión del cliente](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-2) |
| RF-06.3 | [Aprobar resultado o registrar observaciones](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3) |
| RF-06.4 | [Conservar revisión pendiente ante silencio](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-4) |
| RF-06.5 | [Consultar y actualizar avance de producción](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-5) |
| RF-06.6 | [Coordinar entrega personal](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-6) |
| RF-06.7 | [Registrar recepción y completar entrega](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-7) |
| RF-07.1 | [Notificar eventos dentro de la plataforma](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-1) |
| RF-07.2 | [Gestionar moderación y soporte](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-2) |
| RF-07.3 | [Configurar y enviar avisos por canal](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-3) |
| RF-07.4 | [Recordar revisiones pendientes](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-4) |
| RF-07.5 | [Consultar y marcar avisos internos](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-5) |
| RF-09.1 | [Seleccionar y confirmar ubicación de referencia](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1) |
| RF-09.2 | [Visualizar zonas y puntos en mapa](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2) |
| RF-10.1 | [Autorizar transferencia de archivos privados](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1) |
| RF-10.2 | [Completar y habilitar archivo recibido](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2) |
| RF-10.3 | [Consultar y descargar archivos con permiso](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3) |
| RF-10.4 | [Aplicar retiro y retención de archivos](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-4) |
| RF-11.1 | [Exponer operaciones mediante API común](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1) |
| RF-11.2 | [Sincronizar cambios de ofertas, chat y pedidos](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2) |
| RF-12.1 | [Configurar el único plan de membresía](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1) |
| RF-12.2 | [Iniciar la prueba gratuita general](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2) |
| RF-12.3 | [Asignar el programa Makers Fundadores](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3) |
| RF-12.4 | [Consultar estado y vencimiento de acceso](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-4) |
| RF-12.5 | [Iniciar el pago del abono](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-5) |
| RF-12.6 | [Verificar notificaciones de pago del abono](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6) |
| RF-12.7 | [Consultar y conciliar compras de membresía](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7) |
| RF-12.8 | [Conceder acceso por un pago confirmado](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8) |
| RF-12.9 | [Renovar manualmente la membresía](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-9) |
| RF-12.10 | [Aplicar vigencia a trabajos nuevos y preservar los activos](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10) |
| RF-12.11 | [Recordar vencimientos de acceso](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-11) |
| RF-12.12 | [Gestionar devoluciones del abono autorizadas](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12) |
| RF-12.13 | [Auditar cambios del plan y beneficios](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13) |
| RF-12.14 | [Separar simulación y cobros reales de membresía](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-14) |
| RF-12.15 | [Informar el alcance del pago y del programa de fundadores](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15) |
| RF-13.1 | [Mantener productos del maker](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-1) |
| RF-13.2 | [Publicar y retirar productos del catálogo](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-2) |
| RF-13.3 | [Consultar el catálogo público del maker](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-3) |
| RF-13.4 | [Confirmar un pedido directo de catálogo](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-4) |
| RF-14.1 | [Mantener el portfolio del maker](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-1) |
| RF-14.2 | [Consultar trabajos publicados del maker](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-2) |
| RF-15.1 | [Valorar a la contraparte de un pedido](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-1) |
| RF-15.2 | [Consultar reputación publicada](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-2) |
| RF-15.3 | [Moderar valoraciones con trazabilidad](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-3) |
| RF-16.1 | [Consultar el historial propio de pedidos](/3daltoque-docs/analisis/requisitos/funcionales/#rf-16-1) |
| RF-17.1 | [Consultar el reporte de actividad](/3daltoque-docs/analisis/requisitos/funcionales/#rf-17-1) |


### Requerimientos no funcionales

| ID | Nombre |
| --- | --- |
| RNF-01 | [Disponibilidad del servicio](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-01) |
| RNF-02 | [Rendimiento de búsqueda](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02) |
| RNF-03 | [Escalabilidad por módulos y parámetros](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-03) |
| RNF-04 | [Seguridad de acceso y datos privados](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04) |
| RNF-05 | [Consistencia de operaciones críticas](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05) |
| RNF-06 | [Trazabilidad de decisiones y cambios](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06) |
| RNF-07 | [Observabilidad del sistema e integraciones](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07) |
| RNF-08 | [Accesibilidad y comprensión de los flujos](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08) |
| RNF-09 | [Integridad financiera del abono](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09) |
| RNF-10 | [Compatibilidad de pago real y simulado](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10) |
| RNF-11 | [Retención y borrado de datos personales](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11) |
| RNF-12 | [Condiciones de uso, datos y proveedores](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12) |
| RNF-13 | [Configurabilidad del plan y promociones](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13) |
| RNF-14 | [Interoperabilidad y contrato de API](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14) |
| RNF-15 | [Tolerancia a fallas de integraciones](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15) |
| RNF-16 | [Límites de uso y recursos](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16) |
| RNF-17 | [Compatibilidad de los canales](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17) |
| RNF-18 | [Mantenibilidad y reproducción del entorno](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-18) |
| RNF-19 | [Respaldo y recuperación](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19) |

## Requisitos retirados

| IDs | Situación |
| --- | --- |
| RF-08.1 a RF-08.9 | Modelo anterior de cobro y comisión por impresión; Retirado por ADR-002; versión conservada en el historial del cambio comercial |

## Decisiones que condicionan el cierre

<a id="pd-01"></a>
### PD-01 Identidad y habilitación

La identidad conserva roles públicos cliente/maker; administración se asigna por un procedimiento autorizado. Habilitar maker exige contacto, zona y capacidad productiva válidos y concede una única prueba.

El inicio de sesión admite hasta cinco intentos fallidos por identificador de acceso en una ventana móvil de 60 segundos, como límite inicial configurable. Web y Mobile comparten el conteo. Al alcanzar el máximo, los intentos siguientes devuelven 429 con el tiempo de espera en Retry-After.

Parámetros: Política de credenciales, verificación de contacto y plazos de sesión.

<a id="pd-02"></a>
### PD-02 Archivos y parámetros

La solicitud personalizada utiliza STL y unidad declarada; los archivos se habilitan por finalidad e integridad. El catálogo toma configuración de su versión publicada.

Cada mensaje de chat admite hasta cinco adjuntos distintos y autorizados. Los adjuntos propios del chat del piloto admiten JPEG, PNG y PDF. Al autorizar la carga, el backend comprueba el tipo declarado para esa finalidad. Al finalizar, verifica que el contenido corresponda al formato declarado y habilita únicamente los archivos válidos. Cada PDF adjunto al chat admite hasta 10 MiB, equivalentes a 10.485.760 bytes. El backend comprueba el tamaño declarado al autorizar la carga y mide el tamaño real en almacenamiento al finalizarla. Si el tamaño declarado supera el límite, rechaza la autorización. Si el tamaño real lo supera, el archivo queda sin habilitar. La evidencia de revisión admite imágenes JPEG y PNG de hasta 10 MiB por archivo. El backend autoriza la carga según el tipo declarado para esa finalidad y verifica que el contenido real coincida antes de habilitar el archivo. Las fotos de presentación del catálogo admiten JPEG y PNG de hasta 10 MiB por imagen. Cada versión de un producto admite hasta cinco fotos de presentación con la configuración inicial. El límite se configura en el dominio de archivos y se aplica al guardar, editar o publicar la versión. El backend valida el tipo declarado al autorizar la carga y el contenido real al finalizarla. El catálogo público muestra derivados autorizados. Las fotos del portfolio admiten JPEG y PNG de hasta 10 MiB por imagen. El máximo inicial es de cinco fotos por trabajo del portfolio. El límite se configura en el dominio de archivos y se aplica al guardar, editar o publicar. La carga comprueba el tipo declarado y la finalización valida el contenido real. La vista pública muestra derivados autorizados. El análisis geométrico para estimar un STL tiene un máximo inicial configurable de 60 segundos desde que el worker lo inicia. Al agotar el plazo, el sistema informa la estimación indisponible y permite enviar la solicitud y recibir cotizaciones de makers con un STL habilitado. Quedan por definir los formatos de otras finalidades y las cuotas.

<a id="pd-03"></a>
### PD-03 Estimación orientativa

El importe de referencia de una solicitud personalizada se calcula como cantidad × (cargo base por pieza + volumen sólido por pieza en cm³ × coeficiente del material). El coeficiente se expresa en moneda por cm³ y usa la misma moneda que el cargo base. Cuando el volumen no es utilizable, la estimación informa la causa y la solicitud puede seguir a cotización por makers.

El rango orientativo del piloto aplica inicialmente ±20 % sobre el importe de referencia. Con un porcentaje configurado p, el límite inferior es la referencia × (1 − p/100) y el superior es la referencia × (1 + p/100). Cada estimación conserva el porcentaje y la versión de configuración aplicados.

El cálculo conserva la versión del método, unidad, material, cantidad, volumen, cargo base y coeficiente aplicados. Antes de habilitar la estimación monetaria del piloto, el equipo calibra el cargo base por pieza y los coeficientes por material con cinco piezas de muestra y cotizaciones de referencia de makers. La configuración inicial conserva los valores resultantes y la referencia al registro de calibración. Los valores iniciales se completan con las cotizaciones relevadas.

<a id="pd-04"></a>
### PD-04 Búsqueda y ubicación

El piloto opera dentro de la Ciudad Autónoma de Buenos Aires (CABA). La ubicación de referencia de la búsqueda o del pedido y la ubicación operativa del maker deben pertenecer al perímetro de la ciudad. El backend aplica la cobertura al buscar candidatos, enviar invitaciones y confirmar pedidos personalizados o de catálogo.

Se filtra por capacidad, material, acceso y cobertura antes de ordenar por distancia y disponibilidad. Los grupos son limitados y la zona pública protege el domicilio. La cola utiliza confirmación e identidad como orden estable.

La primera ronda de una solicitud personalizada usa un radio inicial configurable de 10 km desde la ubicación confirmada de referencia. El backend considera makers con ubicación operativa dentro de CABA y a una distancia de hasta 10.000 metros con la configuración inicial. Cada ronda conserva el radio y la versión de configuración aplicados.

Cada ronda de una solicitud personalizada invita como máximo a cinco makers elegibles con la configuración inicial. El máximo es configurable. El backend filtra y ordena a los candidatos según PD-04 antes de aplicar el límite y conserva el máximo y la versión de configuración en la ronda.

Si una solicitud personalizada encuentra menos makers elegibles que el máximo configurado, conserva el radio inicial aplicado a esa búsqueda. La ronda invita a los candidatos disponibles dentro del radio y del perímetro de CABA. Cuando el grupo queda vacío, registra el resultado e informa al cliente que no encontró makers compatibles. Volver a buscar se habilita de inmediato al terminar la última ronda de la versión vigente con cero invitaciones registradas, mientras la solicitud siga abierta. Si todos los invitados rechazan y la solicitud sigue en la misma versión, la ronda se conserva hasta el vencimiento. La nueva ronda usa la misma versión de solicitud y los parámetros de la ronda vacía, incluido su radio. La búsqueda vuelve a evaluar la elegibilidad de los makers en ese momento. La solicitud conserva su vencimiento.

El mapa público ubica a cada maker en una zona aproximada de 1 km. El domicilio exacto y las coordenadas operativas se mantienen privados. La búsqueda pública usa un punto compartido por cada celda de 1 km de lado para representar la zona.

<a id="pd-05"></a>
### PD-05 Solicitudes, ofertas y catálogo

Las condiciones conservan versiones; el cliente propone cambios y el maker publica otra versión al aceptarlos. Un pedido directo confirma precio publicado. El acceso vencido impide acuerdos nuevos y conserva los existentes.

Cada versión publicada de una oferta personalizada vence 72 horas después de su publicación con la configuración inicial. El backend calcula y guarda el vencimiento con el reloj del servidor y la versión de configuración aplicada. Al publicar otra versión, calcula su propio vencimiento desde la nueva publicación. El plazo se configura para publicaciones nuevas.

Una solicitud personalizada enviada permanece abierta hasta que el cliente confirma una oferta y se crea el pedido, o hasta que vence a los siete días del envío confirmado. El backend guarda la fecha de vencimiento al enviar la solicitud. Desde esa fecha, la solicitud deja de admitir cotizaciones, cambios de condiciones y aceptaciones nuevas. Las ofertas asociadas se consultan como historial durante el plazo de PD-12.

El cliente puede editar los datos de fabricación de una solicitud personalizada en borrador o, tras el envío, mientras siga abierta, dentro de su plazo y hasta la primera oferta publicada. La primera oferta publicada cierra esa edición durante el resto de la solicitud, aunque después venza. Una edición de fabricación posterior al envío crea una versión y una ronda para las nuevas especificaciones. Las invitaciones anteriores pierden su capacidad de recibir ofertas. El backend conserva la fecha de vencimiento original de la solicitud.

Cada versión publicada de una oferta personalizada usa ambos canales por defecto para el cliente titular. El worker envía el correo mediante Resend cuando corresponde según la política y las preferencias.

<a id="pd-06"></a>
### PD-06 Conversaciones y visibilidad

La conversación se habilita desde el pedido confirmado. Cliente y maker participan; una consulta administrativa exige capacidad, motivo y auditoría.

PD-02 fija los formatos de adjuntos y los límites de texto y cantidad por mensaje. PD-12 fija la conservación del chat y sus adjuntos.

<a id="pd-07"></a>
### PD-07 Revisión y soporte

El cliente decide sobre la revisión vigente; las observaciones se conservan y las correcciones crean una revisión nueva. El silencio mantiene pendiente la aprobación.

La presentación de una revisión programa recordatorios para el cliente a las 24 y 48 horas desde la hora de presentación registrada por el servidor. Si la revisión sigue vigente y pendiente, cada plazo genera un aviso obligatorio en la app y prepara el correo si está habilitado en las preferencias del cliente. El correo está activo por defecto. El backend vuelve a comprobar la revisión antes de despachar el correo. Los reintentos reutilizan el aviso y la identidad del envío del mismo plazo.

Al cumplirse 72 horas desde la presentación, cliente y maker del pedido pueden solicitar seguimiento a soporte si la revisión sigue vigente y pendiente. El sistema mantiene un solo caso de seguimiento por revisión. La primera solicitud válida lo registra. Las siguientes devuelven la misma referencia y su estado vigente. Cada solicitud nueva registra a su participante en la auditoría del caso. Si soporte cerró el caso y la revisión sigue vigente y pendiente, cliente y maker pueden solicitar la reapertura desde el detalle de la revisión. La solicitud queda registrada en el mismo caso con la identidad del participante y la fecha. La solicitud queda pendiente de decisión de soporte. Una persona con permiso específico revisa el caso y registra el motivo y su decisión. Si aprueba, vuelve a abrir el mismo caso. Si soporte rechaza la reapertura, el caso queda cerrado con rechazo definitivo para esa revisión. Cualquier solicitud posterior de reapertura se rechaza y conserva el caso y la decisión registrada. Una revisión posterior tiene su propio seguimiento según PD-07. La revisión conserva su estado y sus evidencias. Cliente y maker consultan el resultado de la reapertura en el mismo caso, desde el detalle de la revisión. El caso muestra su estado y la decisión de soporte con su fecha. La aprobación sigue a cargo del cliente.

Soporte puede contactar a las partes y registrar sus gestiones en el caso. La revisión presentada sigue vigente y pendiente hasta la decisión del cliente. El seguimiento conserva la versión, la evidencia y la fecha de presentación. Una corrección se presenta como otra revisión tras las observaciones del cliente.

Quedan pendientes las intervenciones aplicables a otros incidentes de revisión.

<a id="pd-08"></a>
### PD-08 Entrega y recepción

Cliente y maker acuerdan punto y horario; un cambio requiere otra aceptación. La recepción se completa con confirmación autenticada del cliente sobre revisión y acuerdo vigentes.

Cada pedido admite hasta dos reprogramaciones con la configuración inicial. Se cuenta una reprogramación cuando la contraparte acepta un cambio al punto u horario ya acordados. La primera aceptación establece el encuentro y el conteo empieza en cero. Las propuestas pendientes, rechazadas o repetidas conservan el conteo. Al alcanzar el máximo, el sistema conserva el último acuerdo y bloquea cambios adicionales. El límite también se aplica a los casos gestionados por soporte.

Si una de las partes falta al último encuentro acordado y se agotaron las dos reprogramaciones, soporte puede cancelar el pedido tras revisar el incidente y registrar el motivo. La cancelación requiere un caso vinculado al pedido, el permiso específico y una recepción pendiente. El sistema conserva el último acuerdo y registra la cancelación en el historial del pedido y en auditoría. La cancelación del pedido por soporte genera un aviso obligatorio en la app y un correo obligatorio para cliente y maker.

<a id="pd-09"></a>
### PD-09 Cobro y devolución del abono

Checkout Pro cobra el servicio de membresía con la cuenta de la plataforma. La verificación precede a la concesión de acceso. Las devoluciones del abono son autorizadas y conciliadas.

Parámetros: Cuenta por entorno y política concreta de devolución y efecto sobre períodos futuros.

<a id="pd-10"></a>
### PD-10 Plan y fundadores

Un plan prepago de renovación manual. La primera habilitación concede 30 días generales o 90 totales para fundadores como valores configurables. La asignación fundadora inicial conserva cupo y beneficio único.

Parámetros: Precio, moneda, cupo, ventana, regla de calendario y tratamiento de asignaciones posteriores al beneficio inicial.

<a id="pd-11"></a>
### PD-11 Servicios y canales

Web y React Native comparten FastAPI. Mapas, archivos, avisos y recuperación de eventos utilizan puertos; los proveedores se seleccionan según sus contratos.

Cada tipo de aviso de la plataforma admite la bandeja de la app y el correo. La política del piloto define los valores por defecto y si cada canal es obligatorio u opcional para ese tipo. El usuario activa o desactiva los canales opcionales por tipo desde su cuenta. Web y Mobile comparten las preferencias. Las ofertas nuevas o actualizadas y los recordatorios de revisión tienen ambos canales activos por defecto. El aviso de pedido confirmado es obligatorio en la app para cliente y maker. El correo es opcional y está activo por defecto para ambos. La regla se aplica a los pedidos personalizados y a los del catálogo. La [matriz de F14](/3daltoque-docs/specs/f14-notificaciones/#preferencias-por-tipo-de-aviso) reúne los acuerdos y la clasificación pendiente. La verificación del correo y la recuperación de contraseña siguen el flujo de identidad de PD-01.

El worker de FastAPI usa la API de Resend para avisar de ofertas nuevas y actualizadas y enviar los recordatorios de revisión. El dominio verificado, el remitente y la credencial de envío se configuran por entorno. El dominio o subdominio de envío de Resend queda pendiente de definición para el despliegue del piloto.

El proveedor de PostgreSQL con PostGIS queda por definir para el piloto.

El proveedor de alojamiento de FastAPI y del worker del piloto queda por definir.

El proveedor de almacenamiento privado de STL, adjuntos y demás archivos se definirá en la revisión de infraestructura del piloto, junto con el alojamiento de FastAPI y del worker y el proveedor de PostgreSQL con PostGIS.

Parámetros: Hosting, proveedores restantes, autenticación y transporte de actualizaciones.

<a id="pd-12"></a>
### PD-12 Privacidad y conservación

Los recursos se autorizan por contexto. Catálogo y portfolio muestran derivados aprobados; los originales y datos privados permanecen restringidos. Las referencias históricas se conservan.

Los enlaces de descarga de archivos privados vencen cinco minutos después de emitirse. Para obtener un enlace nuevo, la cuenta solicita el acceso nuevamente y el backend comprueba que conserve el permiso sobre el archivo.

El sistema cuenta siete días desde que el archivo queda sin referencias. Antes de borrarlo, vuelve a comprobar que siga huérfano y que la política permita eliminarlo.

Los borradores de solicitudes personalizadas se conservan durante 90 días desde el último guardado. El guardado inicial inicia el plazo y cada edición confirmada lo vuelve a contar. Al cumplirlo, el borrador sale de las consultas habituales y se retira según PD-12. Los archivos que queden sin referencias siguen la limpieza de huérfanos. Los datos necesarios para las excepciones de PD-12 se conservan con acceso restringido.

Los borradores de productos del catálogo se conservan durante 90 días desde el último guardado. Al vencer, salen de Mis productos y el sistema los retira. Los archivos que queden sin referencias siguen la limpieza de huérfanos. Los datos necesarios para las excepciones de PD-12 se conservan con acceso restringido.

El historial y los datos de una solicitud personalizada enviada que vence sin generar un pedido se conservan durante 12 meses desde el vencimiento registrado en `expira_en`. El plazo abarca las ofertas asociadas en su consulta histórica. Al vencer, se retira el acceso habitual. Los datos necesarios para un reclamo abierto o una obligación legal vigente se conservan con acceso restringido mientras dure la excepción.

Cliente y maker pueden consultar el historial de un pedido completado durante 12 meses desde su cierre. En pedidos cancelados, el plazo es de 12 meses desde la fecha de cancelación registrada en el historial. Vencido el plazo, el sistema retira el pedido de las consultas habituales y conserva bajo acceso restringido los datos necesarios mientras haya un reclamo abierto o una obligación legal vigente.

El chat pasa a solo lectura cuando el cliente confirma la recepción y el pedido queda completado, o cuando se registra su cancelación. Desde ese momento, cliente y maker pueden consultar los mensajes y descargar los adjuntos autorizados durante 12 meses. El servidor rechaza los envíos nuevos y los reintentos de envío. Al vencer el plazo, el backend retira la conversación de la bandeja y cierra la lectura y el envío de mensajes. Los mensajes necesarios para un reclamo abierto o una obligación legal vigente se conservan con acceso restringido mientras dure la excepción.

Las fotos y los archivos de evidencia de revisión y entrega se conservan durante 12 meses desde el cierre del pedido completado o desde su cancelación, según corresponda. Al vencer el plazo, el backend retira el acceso habitual a las evidencias y conserva con acceso restringido las que sean necesarias para un reclamo abierto o una obligación legal vigente mientras dure la excepción.

Cada registro de auditoría se conserva durante 12 meses desde la fecha de la acción. Los registros necesarios para un reclamo abierto o una obligación legal vigente se conservan con acceso restringido mientras dure la excepción.

Cada copia de respaldo del piloto se conserva durante 30 días desde su generación. Al vencer el plazo, el proceso de retención la retira del conjunto disponible para restauración. El respaldo de base de datos y los objetos asociados se gestionan como un conjunto recuperable.

El STL original del pedido se conserva durante 90 días desde el cierre del pedido completado o desde su cancelación, según corresponda. El STL asociado a una solicitud personalizada enviada que vence sin generar un pedido se conserva durante 90 días desde el vencimiento registrado en `expira_en`. Al vencer el plazo, el backend deja de emitir enlaces de descarga en las consultas habituales. Los archivos necesarios para un reclamo abierto o una obligación legal vigente se conservan con acceso restringido mientras dure la excepción.

Los archivos propios del chat se conservan durante 12 meses desde el cierre del pedido completado o desde su cancelación, según corresponda. Al vencer el plazo, el backend deja de emitir enlaces de descarga para ese contexto, tanto desde el chat como por identificador de archivo. Los adjuntos necesarios para un reclamo abierto o una obligación legal vigente se conservan con acceso restringido mientras dure la excepción.

Queda por definir cuánto tiempo se conservan la publicación y sus archivos tras el retiro de un producto del catálogo que nunca generó un pedido.

Quedan por definir los plazos de los demás archivos, junto con las reglas de anonimización y las condiciones de uso.

<a id="pd-13"></a>
### PD-13 Calidad y recursos

Los RNF utilizan perfil de carga, pruebas de permisos, concurrencia, accesibilidad y recuperación. Los límites se validan en backend.

Parámetros: Valores de presupuesto, objetivos medibles y capacidad del piloto.

<a id="pd-14"></a>
### PD-14 Administración y reputación

Las capacidades administrativas separan soporte, moderación y reportes. La valoración exige pedido completado, contraparte y unicidad; criterios y escala se conservan por configuración.

Parámetros: Escala y criterios publicados y límites de contenido y moderación.

<a id="pd-15"></a>
### PD-15 Simulación

Los cobros simulados solo se habilitan en entornos de demostración identificados y separados de producción. Dentro de cada entorno de demostración, solo las cuentas habilitadas explícitamente pueden usar el simulador de cobros. El backend comprueba ese permiso antes de registrar un cobro simulado o conceder acceso de demostración.

## Revisión pendiente

La [revisión funcional completa](/3daltoque-docs/planificacion/revision-funcional/) registra la cobertura de funcionalidades, requisitos, casos, datos y pruebas. Los valores operativos se gestionan en [el registro PD](/3daltoque-docs/planificacion/parametros/).

<a id="perfil-de-medicion"></a>

## Perfil de medición

El [perfil PERF-01](/3daltoque-docs/planificacion/perfil-perf-01/) fija el entorno de referencia, volumen de datos, mezcla de operaciones, concurrencia, duración y umbrales del piloto. Cada ejecución conserva la versión del RNF, configuración, resultados medidos y evidencia. Los cambios de capacidad y objetivos se registran mediante PD-13.

## Cobertura funcional ampliada

Las funcionalidades F01 a F25 se relacionan con 68 RF y 25 casos de uso. [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/) conserva la decisión de pedido directo de catálogo y conversación desde el pedido confirmado. El [catálogo funcional](/3daltoque-docs/proyecto/funcionalidades/) y la [matriz](/3daltoque-docs/specs/02-matriz-de-cobertura/) mantienen la correspondencia con datos, contratos y pruebas.
