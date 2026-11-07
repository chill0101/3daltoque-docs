---
title: "Decisiones y parámetros de implementación"
---

# Decisiones vigentes y parámetros de implementación

Actualización: 7 de noviembre de 2026.

## Base funcional

[ADR-002](/3daltoque-docs/decisiones/modelo-comercial/) conserva la membresía prepaga. [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/) incorpora el pedido directo de catálogo y confirma el chat desde el pedido contratado. Los identificadores PD mantienen su tema.

<a id="pd-01"></a>
### PD-01 Identidad y habilitación

Una misma cuenta puede tener los perfiles cliente y maker y alternar entre ambos mediante un selector de contexto en Web y Mobile. Cada contexto conserva navegación, listados y borradores propios; FastAPI comprueba asignación de rol, propiedad y permisos por recurso. La selección se mantiene por pestaña o instancia del cliente. Administración se asigna por un procedimiento autorizado. Habilitar maker exige contacto, zona y capacidad productiva válidos y concede una única prueba.

El maker debe verificar su correo electrónico antes de habilitarse para recibir y aceptar trabajos. El backend comprueba esa condición y conserva la prueba gratuita sin iniciar mientras la habilitación esté pendiente.

Better Auth es el componente open source elegido para credenciales, sesiones y generación de enlaces de verificación. Se ejecuta en Node/TypeScript; FastAPI conserva perfiles, permisos y habilitación del maker. [ADR-004](/3daltoque-docs/decisiones/autenticacion-better-auth/) registra sus fronteras y la adaptación del contrato y del modelo de datos.

Resend entrega los correos de verificación y recuperación de contraseña desde el componente Better Auth mediante su API.

El registro público crea el perfil Cliente. La opción «Crear mi perfil maker» agrega el rol y perfil productivo a la misma cuenta en estado pendiente. La habilitación y el inicio de la prueba requieren las condiciones de CU-09.

Las sesiones de Cliente y Maker duran 7 días y se renuevan con la actividad mientras están vigentes. Better Auth utiliza como referencia expiresIn=604800 y updateAge=86400: alcanzado el intervalo de actualización, el uso de una sesión válida extiende su vencimiento a la hora actual más 7 días. Cerrar sesión revoca ese acceso; una sesión vencida requiere autenticación nuevamente.

El panel y las operaciones administrativas requieren una autenticación con antigüedad menor a 8 horas. FastAPI calcula el límite desde session.createdAt de Better Auth y comprueba la capacidad específica en cada operación. Al alcanzar el límite responde 401 reauthentication_required y solicita un nuevo inicio de sesión; la actividad conserva el plazo original.

El enlace de recuperación de contraseña vence a los 15 minutos de su emisión y permite un solo restablecimiento exitoso. Better Auth administra token y validación; sendResetPassword entrega el correo mediante Resend. La confirmación válida consume el enlace y el vencimiento permite solicitar otro.

Al completar la recuperación se revocan todas las sesiones de la cuenta en Web y Mobile, incluidos sus accesos administrativos. Better Auth configura revokeSessionsOnPasswordReset=true; FastAPI rechaza las sesiones anteriores y se requiere iniciar sesión nuevamente con la contraseña nueva.

Las contraseñas nuevas admiten entre 15 y 128 caracteres y permiten frases y espacios. Better Auth valida ambos límites en el servidor durante el registro y restablecimiento; el contrato de registro y ambos clientes conservan la misma regla.

El enlace de verificación del correo vence una hora después de su emisión. Si vence, el usuario puede solicitar otro. Better Auth utiliza emailVerification.expiresIn=3600 y FastAPI consulta el estado verificado antes de habilitar al maker.

El inicio de sesión admite hasta cinco intentos fallidos por identificador de acceso en una ventana móvil de 60 segundos, como límite inicial configurable. Web y Mobile comparten el conteo. Al alcanzar el máximo, los intentos siguientes devuelven 429 con el tiempo de espera en Retry-After.

Quedan por definir el remitente, el dominio verificado en Resend y los retornos Web/Mobile. ADR-004 registra el remapeo de rutas y las migraciones de identidad.

<a id="pd-02"></a>
### PD-02 Archivos y parámetros

La solicitud personalizada utiliza STL y unidad declarada; los archivos se habilitan por finalidad e integridad. El catálogo toma configuración de su versión publicada.

El piloto admite hasta 20 MiB por STL, equivalentes a 20.971.520 bytes, y hasta 10 MiB por imagen o PDF adjunto al chat, equivalentes a 10.485.760 bytes. El servidor comprueba el tamaño declarado al autorizar y el tamaño real al finalizar. Cada revisión admite hasta cinco archivos de evidencia habilitados. Cada mensaje de chat admite hasta 4.000 caracteres de texto y hasta cinco adjuntos distintos y autorizados. El servidor valida ambos límites antes de guardarlo. Los listados paginados devuelven hasta 20 elementos por defecto y permiten solicitar hasta 100. Los adjuntos propios del chat del piloto admiten JPEG, PNG y PDF. Al autorizar la carga, el backend comprueba el tipo declarado para esa finalidad. Al finalizar, verifica que el contenido corresponda al formato declarado y habilita únicamente los archivos válidos. La evidencia de revisión admite imágenes JPEG y PNG de hasta 10 MiB por archivo. El backend autoriza la carga según el tipo declarado para esa finalidad y verifica que el contenido real coincida antes de habilitar el archivo. Las fotos de presentación del catálogo admiten JPEG y PNG de hasta 10 MiB por imagen. Cada versión de un producto admite hasta cinco fotos de presentación con la configuración inicial. El límite se configura en el dominio de archivos y se aplica al guardar, editar o publicar la versión. El backend valida el tipo declarado al autorizar la carga y el contenido real al finalizarla. El catálogo público muestra derivados autorizados. Las fotos del portfolio admiten JPEG y PNG de hasta 10 MiB por imagen. El máximo inicial es de cinco fotos por trabajo del portfolio. El límite se configura en el dominio de archivos y se aplica al guardar, editar o publicar. La carga comprueba el tipo declarado y la finalización valida el contenido real. La vista pública muestra derivados autorizados. El análisis geométrico para estimar un STL tiene un máximo inicial configurable de 60 segundos desde que el worker lo inicia. Al agotar el plazo, el sistema informa la estimación indisponible y permite enviar la solicitud y recibir cotizaciones de makers con un STL habilitado. Quedan por definir los formatos de otras finalidades y las cuotas.

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

Web y Mobile consultan las novedades del chat y los estados cada 10 segundos con la pantalla activa. GET /eventos recupera cambios autorizados por cursor y permite continuar al reconectar. PD-02 fija los formatos de adjuntos y los límites de texto y cantidad por mensaje. PD-12 fija la conservación del chat y sus adjuntos.

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

Checkout Pro cobra el servicio de membresía con la cuenta de la plataforma. La verificación precede a la concesión de acceso. Administración gestiona devoluciones totales del abono. El backend determina el importe y la moneda a partir del cobro original verificado y conserva motivo, autorización, operación y resultado; cada devolución se procesa de forma idempotente y se concilia con el proveedor.

Efecto sobre acceso: Al confirmarse con el proveedor la devolución total, se retira de vigencia únicamente el período asociado a esa compra y se conserva su historial. Se mantienen los demás períodos válidos y la operativa de los pedidos ya aceptados. Una devolución pendiente conserva la vigencia previa; repetir su confirmación conserva el mismo resultado.

Autorización: Las solicitudes de devolución se revisan manualmente, caso por caso, desde soporte. Administración registra el caso, el pago involucrado, el motivo y su decisión; una autorización explícita habilita la devolución total. Un rechazo conserva el cobro y el acceso. El backend verifica que el caso autorizado corresponda al mismo pago y conserva las referencias del caso y del reembolso en auditoría.

Parámetros de implementación: Cuenta receptora y credenciales por entorno.

<a id="pd-10"></a>
### PD-10 Plan y fundadores

Un plan prepago de renovación manual, publicado y cobrado en pesos argentinos (ARS). El importe inicial es de 10.000 ARS por período de 30 días, configurable y conservado con la versión del plan y cada compra. El período pago dura 30 días como valor inicial configurable, con condiciones versionadas; acuerdo del 4 de noviembre de 2026. La renovación se habilita únicamente al vencer el acceso comercial. Cada período pago dura 30 días como valor inicial configurable y comienza en el instante de la primera confirmación verificada del pago, conservado con la compra. La primera habilitación concede 30 días generales o 90 totales para fundadores como valores configurables. La asignación fundadora inicial conserva cupo y beneficio único. El cupo inicial del programa es de 50 makers, configurable, con asignación única por identidad y consumo atómico de plazas. La convocatoria inicial permanece abierta durante 60 días desde la apertura registrada, con duración configurable, y cierra antes al completarse el cupo de 50 makers de la versión inicial. El cierre afecta nuevas asignaciones y conserva las fechas de los beneficios ya concedidos.

Regla de conversión: Durante una prueba general vigente, administración puede convertirla en beneficio fundador si la convocatoria está abierta y queda cupo. Conserva el inicio y el identificador de la concesión inicial, amplía su fin hasta completar 90 días totales desde ese inicio como duración inicial configurable, consume una plaza una sola vez y audita el estado anterior y posterior. La conversión conserva un único beneficio inicial.

<a id="pd-11"></a>
### PD-11 Servicios y canales

Web y React Native comparten FastAPI. Mapas, archivos, avisos y recuperación de eventos utilizan puertos; los proveedores se seleccionan según sus contratos.

Cada tipo de aviso de la plataforma admite la bandeja de la app y el correo. La política del piloto define los valores por defecto y si cada canal es obligatorio u opcional para ese tipo. El usuario activa o desactiva los canales opcionales por tipo desde su cuenta. Web y Mobile comparten las preferencias. Las ofertas nuevas o actualizadas y los recordatorios de revisión tienen ambos canales activos por defecto. El aviso de pedido confirmado es obligatorio en la app para cliente y maker. El correo es opcional y está activo por defecto para ambos. La regla se aplica a los pedidos personalizados y a los del catálogo. La [matriz de F14](/3daltoque-docs/specs/f14-notificaciones/#preferencias-por-tipo-de-aviso) reúne los acuerdos y la clasificación pendiente. La verificación del correo y la recuperación de contraseña siguen el flujo de identidad de PD-01.

Better Auth resuelve la autenticación en un componente Node/TypeScript. Resend envía los correos de verificación y recuperación desde ese componente. La API de negocio compartida permanece en FastAPI. El worker de FastAPI usa la API de Resend para avisar de ofertas nuevas y actualizadas y enviar los recordatorios de revisión. El dominio verificado, el remitente y la credencial de envío se configuran por entorno. El dominio o subdominio de envío de Resend queda pendiente de definición para el despliegue del piloto.

El proveedor de PostgreSQL con PostGIS queda por definir para el piloto.

El proveedor de alojamiento de FastAPI y del worker del piloto queda por definir.

El proveedor de almacenamiento privado de STL, adjuntos y demás archivos se definirá en la revisión de infraestructura del piloto, junto con el alojamiento de FastAPI y del worker y el proveedor de PostgreSQL con PostGIS.

Quedan por definir el alojamiento del componente de autenticación y los proveedores restantes. PD-06 fija la consulta periódica de actualizaciones.

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

Los RNF utilizan perfil de carga, pruebas de permisos, concurrencia, accesibilidad y recuperación. Los límites se validan en backend. El escenario base de PERF-01 utiliza 50 makers sintéticos. El ensayo de carga utiliza diez usuarios concurrentes. Cada serie registra el volumen de prueba y la concurrencia efectiva. El objetivo de latencia de búsqueda de makers es p95 de hasta 2 segundos bajo PERF-01. El piloto adopta un RPO de 24 horas para los datos persistidos y un RTO de cuatro horas para recuperar el servicio. PNF-008 comprueba ambos objetivos. Los flujos compartidos por Web y Mobile aplican los mismos permisos y producen resultados y cambios de estado equivalentes. PNF-004 verifica la paridad con recursos y condiciones de partida equivalentes.

Quedan por definir el presupuesto, los demás objetivos medibles y la capacidad de infraestructura del piloto.

<a id="pd-14"></a>
### PD-14 Administración y reputación

Las capacidades administrativas separan soporte, moderación y reportes. Tras confirmar la recepción, cada participante puede valorar una vez a su contraparte en ese pedido. Los criterios y la escala se conservan en la configuración versionada.

El piloto usa una escala de 1 a 5 por criterio. Ocultar o restituir una valoración exige un motivo y registra la acción en el historial de auditoría. Quedan por acordar los criterios publicados y los límites de contenido y moderación.

<a id="pd-15"></a>
### PD-15 Simulación

Los cobros simulados solo se habilitan en entornos de demostración identificados y separados de producción. Dentro de cada entorno de demostración, solo las cuentas habilitadas explícitamente pueden usar el simulador de cobros. El backend comprueba ese permiso antes de registrar un cobro simulado o conceder acceso de demostración.

Durante la preparación de cada entorno se identifican las cuentas autorizadas.

Cada parámetro conserva valor, fecha, responsable, fundamento y versión. Las configuraciones se comprueban antes de habilitar la operación que las requiere.

## Referencias operativas documentadas

| Parámetro | Definición de referencia | Registro de aplicación |
| --- | --- | --- |
| PD-01 Sesión | Cliente/Maker: 7 días renovables con actividad; referencia de actualización cada 24 horas. Cookie protegida Web y Bearer Mobile; revocación al cerrar sesión. | Administración: máximo de 8 horas desde la autenticación; nuevo inicio de sesión al alcanzar el límite. ADR-004 y seguridad. |
| PD-02 Límites | Perfil de archivos, mensajes y listas de PERF-01. | Configuración versionada del entorno. |
| PD-06 Actualización | Consulta autorizada de eventos por cursor y recuperación de intención. | Contratos operativos INT-05. |
| PD-11 Interfaces | 90 operaciones funcionales y dos técnicas en OpenAPI. | Versión del contrato y release de ambos clientes. |
| PD-13 Calidad | PERF-01 define carga, objetivos, evidencia y recuperación. | Informe de ejecución y configuración utilizada. |

[Seguridad](/3daltoque-docs/diseno/seguridad/), [contratos operativos](/3daltoque-docs/diseno/contratos-operativos/) y [PERF-01](/3daltoque-docs/planificacion/perfil-perf-01/) conservan estas definiciones. Los valores comerciales y credenciales se registran por entorno con su responsable, fecha y versión.
