---
title: "Casos de prueba y trazabilidad"
---

# Casos de prueba y trazabilidad funcional

Versión 3.0. Fecha: 25 de octubre de 2026.

El catálogo define precondiciones, datos, acciones y resultados esperados para los 68 RF y 25 casos de uso. El estado de ejecución de cada escenario se registra por separado de la cobertura documental.

## Datos del plan de pruebas

Los datos sintéticos se describen en [fixtures de revisión](/3daltoque-docs/documentos/8a0c5389371a-datos-funcionales.json). Identidades: U-C1 y U-C2 son clientes distintos; M-M1 y M-M2 son makers distintos; A-A1 dispone de capacidades administrativas de prueba. Los archivos STL de referencia permanecen en `docs/pruebas/fixtures/`.

## Variantes de sesión de PD-01

Las variantes de CP-RF-01-4-01/02 y CP-RF-01-5-01/02 se ejecutan en Web y Mobile con cuentas de prueba Cliente/Maker y reloj controlable.

| Variante | Datos y acción | Resultado esperado |
| --- | --- | --- |
| Renovación | Sesión creada en t0; utilizarla al alcanzar t0+24 horas con expiresIn=7 días y updateAge=24 horas. | Vencimiento actualizado a la hora de uso más 7 días; conserva identidad y perfiles. |
| Vencimiento | Otra sesión creada en t0 y sin uso posterior; solicitar acceso en t0+7 días. | 401; requiere iniciar sesión nuevamente y mantiene los recursos de negocio. |
| Cierre | Cerrar una sesión vigente y reutilizar su secreto desde ambos contextos. | 401 en ambos contextos; limpia los datos locales asociados y conserva los recursos. |
| Membresía | Renovar una sesión de un maker con membresía vencida y consultar sus capacidades. | El abono conserva vencimiento y restricciones de trabajos nuevos; los pedidos existentes siguen su recorrido autorizado. |

## Variantes de acceso administrativo de PD-01

CP-RF-07-2-01/02 y CP-RF-01-4-01/02 incorporan reloj controlable, una cuenta con capacidad administrativa y la fecha de creación de su sesión en Better Auth.

| Variante | Datos y acción | Resultado esperado |
| --- | --- | --- |
| Antes del límite | Consultar un recurso permitido en t0+8 horas-1 segundo. | Operación autorizada según capacidad y estado del recurso. |
| Límite alcanzado | Solicitar panel y operación administrativa en t0+8 horas, aunque expires_at sea posterior. | 401 reauthentication_required; los recursos conservan su estado. |
| Renovación general | Utilizar Cliente/Maker con la misma sesión después de renovar su vencimiento; volver a administración con createdAt anterior a 8 horas. | La antigüedad administrativa conserva createdAt y requiere iniciar sesión nuevamente. |
| Nueva autenticación | Iniciar sesión nuevamente y recuperar el recurso y sus permisos vigentes. | Se habilita otro período máximo de 8 horas; las intervenciones sensibles requieren confirmar la versión actual. |
| Rol revocado | Solicitar una operación antes de las 8 horas con la capacidad revocada. | Acceso denegado y recursos conservados. |

## Variantes de recuperación de PD-01

CP-RF-01-4-01/02 y RNF-04 incorporan los estados de recuperación con reloj controlable y correo de prueba, en Web y Mobile. Cada variante utiliza su propia emisión.

| Variante | Datos y acción | Resultado esperado |
| --- | --- | --- |
| Uso válido | Emitir en t0, abrir el formulario y confirmar una contraseña válida en t0+14 minutos 59 segundos. | Un restablecimiento exitoso; el enlace queda consumido. |
| Vencimiento | Confirmar otra emisión al alcanzar t0+15 minutos. | Token rechazado, contraseña vigente conservada y opción de solicitar otro enlace. |
| Reutilización | Completar un restablecimiento y enviar nuevamente su token. | Segundo cambio rechazado y contraseña del primer cambio conservada. |
| Concurrencia | Enviar dos confirmaciones válidas simultáneas con el mismo token. | Un único restablecimiento exitoso y consumo transaccional verificado. |
| Entrada inválida | Enviar una contraseña rechazada y corregirla antes del vencimiento. | La primera entrada conserva contraseña y token; la corrección válida puede completar el único uso. |
| Privacidad | Solicitar recuperación para correos existente e inexistente y revisar registros. | Respuesta neutral; tokens, enlaces completos y contraseñas excluidos de registros. |
| Sesiones previas | Abrir sesiones de la misma cuenta en Web y Mobile y completar la recuperación; repetir accesos Cliente/Maker y Administración cuando corresponda. | Todas las sesiones anteriores reciben 401 en la siguiente solicitud; cada cliente requiere iniciar sesión con la contraseña nueva. |
| Falla transaccional | Provocar una falla en la revocación dentro de la transacción de identidad antes del commit. | Se revierten cambio, consumo y revocación; conserva la contraseña previa y el token mientras siga vigente. |

## Variantes de longitud de contraseña de PD-01

CP-001 y CP-RF-01-1-01/02 y CP-RF-01-4-01/02 prueban registro y restablecimiento en Web y Mobile con los límites de DC-22. El [fixture de casos detallados](/3daltoque-docs/documentos/92aa0408f516-casos-detallados.json) conserva los valores de la política y el ejemplo sintético.

| Entrada | Resultado por longitud |
| --- | --- |
| 14 caracteres | Rechazo en servidor con error comprensible. |
| 15 caracteres | Cumple el mínimo. |
| 128 caracteres | Cumple el máximo. |
| 129 caracteres | Rechazo en servidor con error comprensible. |
| Frase de prueba 3D 2026 | Cumple los límites con 23 caracteres y conserva los espacios en registro, acceso y restablecimiento. |

La corrección de una contraseña rechazada durante una recuperación conserva la vigencia y el único uso disponible del token hasta un cambio válido, según DC-20.

## Catálogo de escenarios

| ID | Tipo | RF | CU | Precondiciones y datos | Acciones | Resultado esperado | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CP-RF-01-1-01 | Principal | RF-01.1 | CU-13 | Correo nuevo y datos válidos | Registrar la cuenta y consultar sus perfiles | Una sola identidad con perfil Cliente asignado por el servidor; el alta maker se realiza después. | Planificado |
| CP-RF-01-1-02 | Alternativo | RF-01.1 | CU-13 | Correo ya registrado o campo de rol enviado fuera del contrato | Repetir el alta o intentar imponer maker/admin desde el registro | Denegación comprensible y ausencia de una cuenta parcial. | Planificado |
| CP-RF-01-2-01 | Principal | RF-01.2 | CU-09, CU-21 | M-M1 con impresora y material habilitado | Guardar dimensiones y capacidades propias | El maker guarda capacidades válidas y las recupera sin cambios de significado o unidad. | Planificado |
| CP-RF-01-2-02 | Alternativo | RF-01.2 | CU-09, CU-21 | Impresora de M-M2 o dimensión negativa | Enviar el cambio con la sesión de M-M1 | Cambio rechazado y capacidad original conservada. | Planificado |
| CP-RF-01-3-01 | Principal | RF-01.3 | CU-22 | U-C1 y ubicación propia | Guardar contacto y confirmar referencia | El titular guarda y recupera su información autorizada. | Planificado |
| CP-RF-01-3-02 | Alternativo | RF-01.3 | CU-22 | Perfil U-C2 o coordenada inválida | Intentar editar con la sesión de U-C1 | Perfil ajeno protegido o campos informados. | Planificado |
| CP-RF-01-4-01 | Principal | RF-01.4 | CU-13 | Cuenta habilitada con cliente y maker, pedidos distintos por rol, dos pestañas y Mobile | Iniciar sesión, alternar contexto, consultar listas y retomar borradores en cada cliente | Misma identidad y sesión; listas y borradores separados, capacidades vigentes y selección independiente por pestaña o instancia. | Planificado |
| CP-RF-01-4-02 | Alternativo | RF-01.4 | CU-13 | Credencial inválida, cuenta bloqueada, rol ausente o revocado y cursor de otro contexto | Solicitar acceso, manipular rol o reutilizar cursor; intentar un pedido con ambos participantes de la misma identidad | Acceso o acción denegados. El cursor incompatible se rechaza y se conservan los recursos y asignaciones. CP-002 verifica los cinco fallos y la espera compartida entre Web y Mobile. | Planificado |
| CP-RF-01-5-01 | Principal | RF-01.5 | CU-13 | Sesión activa de U-C1 | Cerrar sesión y volver a solicitar recurso protegido | Después del cierre, el cliente deja de acceder a pantallas protegidas con esa sesión. | Planificado |
| CP-RF-01-5-02 | Alternativo | RF-01.5 | CU-13 | Credencial de renovación cerrada | Intentar renovar la sesión cerrada | Renovación rechazada conforme a la política de sesión. | Planificado |
| CP-RF-02-1-01 | Principal | RF-02.1 | CU-01 | STL cúbico válido, mm, PLA y cantidad 2 | Guardar el borrador personalizado | El archivo completado y habilitado queda vinculado a la solicitud del cliente correcto. | Planificado |
| CP-RF-02-1-02 | Alternativo | RF-02.1 | CU-01 | Cantidad 0 o unidad ausente | Guardar y solicitar publicar con esos datos | Error por campo y borrador recuperable. | Planificado |
| CP-RF-02-2-01 | Principal | RF-02.2 | CU-01, CU-24 | Archivo STL válido e integridad conocida | Finalizar archivo y consultar análisis | Un STL válido dentro de los límites queda habilitado para su uso autorizado. | Planificado |
| CP-RF-02-2-02 | Alternativo | RF-02.2 | CU-01, CU-24 | Archivo abierto o tipo declarado inconsistente | Solicitar habilitar el archivo inválido | Archivo rechazado o pendiente con causa; envío bloqueado hasta resolver. | Planificado |
| CP-RF-02-3-01 | Principal | RF-02.3 | CU-01 | Borrador de U-C1 con archivo habilitado | Enviar la solicitud y editar la cantidad antes de la primera oferta | La edición conserva el vencimiento y crea otra versión con invitaciones asociadas. | Planificado |
| CP-RF-02-3-02 | Alternativo | RF-02.3 | CU-01 | Borrador de U-C2, archivo pendiente o borrador vencido | Intentar el envío en cada variante | El envío se deniega y conserva el estado de las invitaciones. | Planificado |
| CP-RF-02-4-01 | Principal | RF-02.4 | CU-17 | Solicitud propia enviada con ofertas sin aceptar y variante vencida sin pedido | Consultar detalle y ofertas antes y después del vencimiento de la solicitud y al cumplirse 12 meses desde `expira_en` | La solicitud sin pedido sigue abierta hasta vencer. El titular consulta el estado y las ofertas según sus plazos. La consulta habitual se retira cuando vence la conservación. | Planificado |
| CP-RF-02-4-02 | Alternativo | RF-02.4 | CU-17 | Identificador de solicitud ajena | Solicitar su detalle | Datos protegidos y recurso propio sin cambios. | Planificado |
| CP-RF-02-5-01 | Principal | RF-02.5 | CU-01 | STL válido y configuración de estimación identificada | Consultar el resultado del cálculo automático | La referencia y ambos límites coinciden con la fórmula y el porcentaje de PD-03. El cálculo conserva las entradas y la versión de configuración. | Planificado |
| CP-RF-02-5-02 | Alternativo | RF-02.5 | CU-01 | Volumen no utilizable, unidad ambigua, material sin configuración o STL habilitado cuyo análisis agota 60 segundos | Consultar la estimación y enviar la solicitud | Resultado indisponible con causa y continuidad hacia ofertas cuando el STL está habilitado. | Planificado |
| CP-RF-03-1-01 | Principal | RF-03.1 | CU-01 | Makers con distintas capacidades y acceso | Enviar una solicitud y recuperar candidatos | Las invitaciones cumplen los filtros, la cobertura de CABA, el radio inicial de 10 km y el máximo inicial de cinco elegibles. La ronda conserva el radio, el máximo y la versión utilizados. | Planificado |
| CP-RF-03-1-02 | Alternativo | RF-03.1 | CU-01 | Cero elegibles al enviar y un maker que se habilita dentro del radio antes de vencer | Enviar, consultar y volver a buscar de inmediato con la última ronda vacía y la misma versión | La primera ronda queda vacía. La nueva conserva radio, versión y vencimiento e invita al maker ahora elegible. CP-007 cubre reintentos, concurrencia y rechazo del nuevo envío si todas las invitaciones de la última ronda fueron rechazadas. | Planificado |
| CP-RF-03-2-01 | Principal | RF-03.2 | CU-02 | Invitación vigente para M-M1 | Consultar la bandeja y el detalle de invitación | El maker consulta las solicitudes habilitadas para su cuenta y no las reservadas a otros destinatarios. | Planificado |
| CP-RF-03-2-02 | Alternativo | RF-03.2 | CU-02 | Invitación destinada a M-M2 | Consultar su identificador con M-M1 | Invitación y archivo protegidos. | Planificado |
| CP-RF-04-1-01 | Principal | RF-04.1 | CU-02, CU-25 | M-M1 invitado y comercialmente habilitado | Publicar precio, moneda, plazo y vigencia | Una oferta válida queda asociada al maker y solicitud correctos con sus condiciones. | Planificado |
| CP-RF-04-1-02 | Alternativo | RF-04.1 | CU-02, CU-25 | Maker sin invitación o acceso vigente | Intentar publicar la oferta | Publicación rechazada. | Planificado |
| CP-RF-04-2-01 | Principal | RF-04.2 | CU-02, CU-25 | Oferta vigente con versión 1 | Publicar versión 2 y consultar ambas referencias | Cada versión conserva el vencimiento calculado desde su publicación y la configuración aplicada. | Planificado |
| CP-RF-04-2-02 | Alternativo | RF-04.2 | CU-02, CU-25 | Oferta vencida, versión anterior o solicitud cerrada por vencimiento | Intentar aceptar la oferta | Conflicto y conservación de las condiciones históricas. | Planificado |
| CP-RF-04-3-01 | Principal | RF-04.3 | CU-03 | U-C1 con dos ofertas vigentes | Comparar precio, plazo y condiciones | Las ofertas de una misma solicitud presentan los campos acordados de forma comparable. | Planificado |
| CP-RF-04-3-02 | Alternativo | RF-04.3 | CU-03 | Solicitud de U-C2 | Consultar la lista desde U-C1 | Ofertas ajenas protegidas. | Planificado |
| CP-RF-04-4-01 | Principal | RF-04.4 | CU-03, CU-20 | Solicitud propia con oferta vigente | Aceptar una versión con clave estable | Una aceptación válida crea un pedido y deja las ofertas competidoras cerradas. | Planificado |
| CP-RF-04-4-02 | Alternativo | RF-04.4 | CU-03, CU-20 | Dos aceptaciones concurrentes | Confirmar dos ofertas sobre la misma solicitud | Un único pedido y alternativas cerradas. | Planificado |
| CP-RF-04-5-01 | Principal | RF-04.5 | CU-02 | M-M1 con invitación pendiente | Rechazar su invitación con clave estable | El rechazo de una invitación no genera pedido ni cobro. | Planificado |
| CP-RF-04-5-02 | Alternativo | RF-04.5 | CU-02 | Invitación cerrada o de M-M2 | Solicitar su rechazo | Operación denegada o resultado anterior recuperado. | Planificado |
| CP-RF-04-6-01 | Principal | RF-04.6 | CU-25 | Oferta vigente y propuesta del cliente titular | Aceptar el cambio como maker y consultar nueva versión | Una propuesta aceptada por el maker genera una nueva versión trazable de la oferta. | Planificado |
| CP-RF-04-6-02 | Alternativo | RF-04.6 | CU-25 | Versión de oferta reemplazada | Resolver la propuesta obsoleta | Conflicto y ausencia de pedido o versión resultante indebidos. | Planificado |
| CP-RF-05-1-01 | Principal | RF-05.1 | CU-03, CU-14, CU-20 | Pedido confirmado entre U-C1 y M-M1 | Abrir su conversación y recuperar historial | Un pedido confirmado dispone de una única conversación para sus participantes. | Planificado |
| CP-RF-05-1-02 | Alternativo | RF-05.1 | CU-03, CU-14, CU-20 | Solicitud sin pedido confirmado | Solicitar conversación de pedido | Conversación denegada antes del acuerdo. | Planificado |
| CP-RF-05-2-01 | Principal | RF-05.2 | CU-14 | Participante autorizado y clave MSG-01 | Enviar texto y reintentar el mismo contenido | Un mensaje informado como enviado puede recuperarse en el historial autorizado. | Planificado |
| CP-RF-05-2-02 | Alternativo | RF-05.2 | CU-14 | Misma clave MSG-01 con texto diferente, pedido completado o pedido cancelado dentro de la ventana de consulta | Probar las variantes con datos independientes | El conflicto de clave conserva el mensaje original. En pedidos completados y cancelados, la consulta sigue habilitada y los envíos y reintentos devuelven `409 chat_read_only`. | Planificado |
| CP-RF-05-3-01 | Principal | RF-05.3 | CU-04, CU-17 | Pedido propio con transición permitida | Actualizar el estado con motivo y versión | Cada transición permitida deja un registro ligado al pedido. | Planificado |
| CP-RF-05-3-02 | Alternativo | RF-05.3 | CU-04, CU-17 | Versión anterior o transición no permitida | Solicitar otro cambio | Estado conservado y ausencia de historial ficticio. | Planificado |
| CP-RF-05-4-01 | Principal | RF-05.4 | CU-14 | U-C1 con varios pedidos confirmados | Paginar su bandeja de conversaciones | La bandeja contiene únicamente conversaciones de pedidos en los que participa el usuario. | Planificado |
| CP-RF-05-4-02 | Alternativo | RF-05.4 | CU-14 | Cursor de otra identidad o ámbito | Solicitar una página con ese cursor | Acceso rechazado y protección de conversaciones ajenas. | Planificado |
| CP-RF-06-1-01 | Principal | RF-06.1 | CU-04 | M-M1 del pedido e imágenes JPEG y PNG habilitadas | Preparar evidencia de una revisión | Una presentación válida conserva archivos, pedido, maker y fecha de la revisión. | Planificado |
| CP-RF-06-1-02 | Alternativo | RF-06.1 | CU-04 | Archivo ajeno, rechazado o habilitado para otra finalidad | Intentar preparar la revisión con ese archivo | La API rechaza la referencia y conserva el pedido en su estado vigente. | Planificado |
| CP-RF-06-2-01 | Principal | RF-06.2 | CU-04 | Revisión completa y habilitada | Presentarla y recuperar aviso al cliente | Una evidencia final válida genera una revisión pendiente identificable. | Planificado |
| CP-RF-06-2-02 | Alternativo | RF-06.2 | CU-04 | Revisión con archivo pendiente | Intentar solicitar aprobación | Presentación bloqueada hasta finalizar validación. | Planificado |
| CP-RF-06-3-01 | Principal | RF-06.3 | CU-05 | U-C1 ante revisión vigente pendiente | Aprobar expresamente esa revisión | Una aprobación válida identifica la revisión y permite las acciones de entrega autorizadas. | Planificado |
| CP-RF-06-3-02 | Alternativo | RF-06.3 | CU-05 | Referencia a revisión reemplazada | Intentar aprobar la referencia anterior | Conflicto y entrega todavía protegida. | Planificado |
| CP-RF-06-4-01 | Principal | RF-06.4 | CU-05 | Revisión pendiente y reloj de prueba avanzado | Procesar recordatorio sin respuesta del cliente | Avanzar el tiempo sobre una revisión sin respuesta no cambia su estado a aprobada. | Planificado |
| CP-RF-06-4-02 | Alternativo | RF-06.4 | CU-05 | Varios ciclos del mismo recordatorio | Reprocesar el evento | Revisión pendiente y avisos deduplicados. | Planificado |
| CP-RF-06-5-01 | Principal | RF-06.5 | CU-04 | Pedido de M-M1 en producción | Actualizar avance y consultar como U-C1 | Los participantes consultan avance e historial. | Planificado |
| CP-RF-06-5-02 | Alternativo | RF-06.5 | CU-04 | Tercero o versión obsoleta | Solicitar transición | Denegación o conflicto con estado original conservado. | Planificado |
| CP-RF-06-6-01 | Principal | RF-06.6 | CU-06 | Pedido aprobado y punto neutral | Proponer y aceptar horario con la contraparte | Un pedido aprobado puede registrar un acuerdo de punto y horario entre sus participantes. | Planificado |
| CP-RF-06-6-02 | Alternativo | RF-06.6 | CU-06 | Dos reprogramaciones aceptadas en el mismo pedido | Proponer otro cambio e intentar la intervención desde un caso de soporte | El tercer cambio se rechaza en ambos recorridos. El último acuerdo sigue vigente para la recepción. | Planificado |
| CP-RF-06-7-01 | Principal | RF-06.7 | CU-06 | Cliente titular y entrega acordada | Confirmar recepción y repetir la misma operación | El cliente autorizado confirma la entrega acordada y obtiene un único registro de recepción. | Planificado |
| CP-RF-06-7-02 | Alternativo | RF-06.7 | CU-06 | Maker, revisión sin aprobación vigente o pedido cancelado | Intentar completar la recepción | Cierre denegado y estado previo conservado. | Planificado |
| CP-RF-07-1-01 | Principal | RF-07.1 | CU-23 | Evento de pedido o de publicación de una versión de oferta personalizada | Procesar el evento y consultar como destinatario | El evento genera el aviso interno correcto. Cada versión publicada también prepara un correo al cliente titular. | Planificado |
| CP-RF-07-1-02 | Alternativo | RF-07.1 | CU-23 | Evento de publicación repetido y falla de correo para una versión | Reprocesar y reintentar el envío | Un aviso y un envío por oferta, versión y destinatario. El reintento reutiliza el envío y el aviso sigue disponible. | Planificado |
| CP-RF-07-2-01 | Principal | RF-07.2 | CU-07 | A-A1 con capacidad y motivo | Ejecutar una intervención autorizada y consultar auditoría | Solo un rol autorizado consulta o resuelve un caso de soporte. | Planificado |
| CP-RF-07-2-02 | Alternativo | RF-07.2 | CU-07 | Rol insuficiente o motivo ausente | Solicitar intervención administrativa | Intervención rechazada y recurso conservado. | Planificado |
| CP-RF-07-3-01 | Principal | RF-07.3 | CU-23 | Evento con ambos canales opcionales y activos, sesiones Web y Mobile de la misma cuenta | Consultar preferencias, activar o desactivar cada canal y procesar eventos independientes | Los clientes recuperan la misma preferencia. El correo y la bandeja se controlan por separado. Con ambos apagados se conserva el evento de negocio. | Planificado |
| CP-RF-07-3-02 | Alternativo | RF-07.3 | CU-23 | Canal obligatorio de prueba, otro opcional con correo en cola y proveedor indisponible | Intentar desactivar el obligatorio. Desactivar el opcional antes del reintento y consultar la bandeja con un aviso solo por correo | El obligatorio devuelve 403. El reintento pendiente se omite y el aviso solo por correo queda fuera de la bandeja. El hecho de negocio se conserva. | Planificado |
| CP-RF-07-4-01 | Principal | RF-07.4 | CU-05, CU-23 | Revisión vigente y pendiente con hora de presentación conocida y canales activos por defecto | Procesar y repetir los trabajos a las 24 y 48 horas | Cada plazo genera un aviso interno y un correo para el cliente. Cada reintento reutiliza el aviso y el envío. | Planificado |
| CP-RF-07-4-02 | Alternativo | RF-07.4 | CU-05, CU-23 | Revisión decidida o revisión pendiente con correo desactivado | Procesar el recordatorio o reintentar el correo. Intentar desactivar app en la variante pendiente. | La revisión decidida omite el recordatorio. La pendiente conserva el aviso en la app, omite el correo desactivado y rechaza con 403 el cambio del canal app. | Planificado |
| CP-RF-07-5-01 | Principal | RF-07.5 | CU-23 | Aviso de U-C1 | Consultar y marcar leído y volver a entrar | Un destinatario recupera sus avisos y conserva el estado leído al volver a entrar. | Planificado |
| CP-RF-07-5-02 | Alternativo | RF-07.5 | CU-23 | Aviso de U-C2 | Marcarlo con la identidad U-C1 | Aviso ajeno protegido. | Planificado |
| CP-RF-09-1-01 | Principal | RF-09.1 | CU-01, CU-06, CU-21, CU-22 | Referencia geográfica y permiso de U-C1 | Seleccionar y confirmar ubicación | Una selección confirmada conserva coordenadas y metadatos autorizados con significado inequívoco. | Planificado |
| CP-RF-09-1-02 | Alternativo | RF-09.1 | CU-01, CU-06, CU-21, CU-22 | Permiso de dispositivo denegado | Usar alternativa de ingreso manual | Referencia con precisión explícita y datos privados protegidos. | Planificado |
| CP-RF-09-2-01 | Principal | RF-09.2 | CU-06 | Pedido o búsqueda con zona autorizada | Consultar puntos del mapa | Makers de la misma zona de 1 km comparten el punto representativo y el encuentro muestra su punto autorizado. | Planificado |
| CP-RF-09-2-02 | Alternativo | RF-09.2 | CU-06 | Solicitud de coordenada privada ajena | Consultar la ubicación fuera de permiso | Domicilio exacto protegido. | Planificado |
| CP-RF-10-1-01 | Principal | RF-10.1 | CU-01, CU-04, CU-24 | Usuario y contexto propios dentro de cuota | Solicitar autorización temporal de subida | Una autorización válida identifica archivo, propietario, finalidad y destino permitido. | Planificado |
| CP-RF-10-1-02 | Alternativo | RF-10.1 | CU-01, CU-04, CU-24 | Contexto ajeno o cuota excedida | Solicitar otra autorización | Autorización denegada. | Planificado |
| CP-RF-10-2-01 | Principal | RF-10.2 | CU-01, CU-04, CU-24 | Objeto transferido e integridad válida | Finalizar y habilitar el archivo | Una transferencia completa y validada habilita el archivo correcto una sola vez. | Planificado |
| CP-RF-10-2-02 | Alternativo | RF-10.2 | CU-01, CU-04, CU-24 | Integridad o tipo inválidos | Completar la transferencia inválida | Archivo rechazado y causa conservada. | Planificado |
| CP-RF-10-3-01 | Principal | RF-10.3 | CU-01, CU-04, CU-24 | Participante autorizado y archivo del recurso | Obtener acceso temporal al original permitido | El participante habilitado obtiene el archivo asociado al recurso solicitado. | Planificado |
| CP-RF-10-3-02 | Alternativo | RF-10.3 | CU-01, CU-04, CU-24 | Visitante ante original privado de catálogo | Solicitar acceso al original | Original protegido; únicamente el derivado publicado resulta visible. | Planificado |
| CP-RF-10-4-01 | Principal | RF-10.4 | CU-24 | Archivo retirable sin obligación histórica | Solicitar retiro y consultar el estado | Un objeto elegible se retira según la regla vigente y deja de ofrecer nuevos accesos. | Planificado |
| CP-RF-10-4-02 | Alternativo | RF-10.4 | CU-24 | Archivo referenciado por revisión aprobada | Solicitar borrado destructivo | Retiro lógico o conservación conforme a política y referencias intactas. | Planificado |
| CP-RF-11-1-01 | Principal | RF-11.1 | CU-01, CU-02, CU-03, CU-04, CU-05, CU-06, CU-07, CU-08, CU-09, CU-10, CU-11, CU-12, CU-13, CU-14, CU-15, CU-16, CU-17, CU-18, CU-19, CU-20, CU-21, CU-22, CU-23, CU-24, CU-25 | Sesiones Web y Mobile con la misma identidad | Ejecutar la operación equivalente por API | Una operación equivalente desde clientes habilitados conserva las mismas condiciones de negocio y autorizaciones. | Planificado |
| CP-RF-11-1-02 | Alternativo | RF-11.1 | CU-01, CU-02, CU-03, CU-04, CU-05, CU-06, CU-07, CU-08, CU-09, CU-10, CU-11, CU-12, CU-13, CU-14, CU-15, CU-16, CU-17, CU-18, CU-19, CU-20, CU-21, CU-22, CU-23, CU-24, CU-25 | Cambio de rol declarado solo en el cliente | Solicitar una operación sin capacidad real | Misma autorización del servidor para ambos canales. | Planificado |
| CP-RF-11-2-01 | Principal | RF-11.2 | CU-14 | Pantalla activa en Web y Mobile, conversación autorizada y cursor anterior | Observar dos consultas sucesivas y reconectar después de una interrupción | El cliente consulta cada 10 segundos y recupera mensajes y estados persistidos desde su cursor al reconectar. Cada evento se aplica una vez. | Planificado |
| CP-RF-11-2-02 | Alternativo | RF-11.2 | CU-14 | Cursor o ámbito ajeno | Suscribirse o consultar otro recurso | Acceso denegado y contenido protegido. | Planificado |
| CP-RF-12-1-01 | Principal | RF-12.1 | CU-12 | Plan vigente y A-A1 con capacidad | Publicar una nueva versión de parámetros | Solo un rol autorizado publica una versión válida y auditada. | Planificado |
| CP-RF-12-1-02 | Alternativo | RF-12.1 | CU-12 | Importe inválido o versión obsoleta | Intentar publicar los parámetros | Configuración vigente conservada y errores informados. | Planificado |
| CP-RF-12-2-01 | Principal | RF-12.2 | CU-09 | Maker completo sin beneficio inicial | Habilitar perfil y repetir la habilitación | La primera habilitación concede un único beneficio inicial identificable. | Planificado |
| CP-RF-12-2-02 | Alternativo | RF-12.2 | CU-09 | Maker con beneficio ya concedido | Reactivar o editar el perfil | Fechas iniciales conservadas y ausencia de otra prueba. | Planificado |
| CP-RF-12-3-01 | Principal | RF-12.3 | CU-10 | Programa activo, cupo 1 y dos makers elegibles | Asignar fundador a un maker | Una misma identidad maker no consume dos cupos ni obtiene pruebas acumuladas. | Planificado |
| CP-RF-12-3-02 | Alternativo | RF-12.3 | CU-10 | Dos asignaciones simultáneas por última plaza | Procesar ambas solicitudes | Como máximo una asignación consume el cupo. | Planificado |
| CP-RF-12-4-01 | Principal | RF-12.4 | CU-08, CU-09 | Maker con períodos y compras conservados | Consultar vigencia con la fecha del servidor | El maker solo consulta sus propios datos comerciales y compras. | Planificado |
| CP-RF-12-4-02 | Alternativo | RF-12.4 | CU-08, CU-09 | Fecha del dispositivo manipulada | Volver a consultar acceso | Vigencia determinada por el servidor. | Planificado |
| CP-RF-12-5-01 | Principal | RF-12.5 | CU-11 | Plan publicado e importe de prueba | Crear compra y recuperar checkout propio | El intento pertenece a una compra y al maker autenticado. | Planificado |
| CP-RF-12-5-02 | Alternativo | RF-12.5 | CU-11 | Importe alterado en el cliente | Iniciar una compra con importe enviado | Importe obtenido del plan y condiciones conservadas por el backend. | Planificado |
| CP-RF-12-6-01 | Principal | RF-12.6 | CU-11 | Notificación válida de cuenta propia | Persistir evento y consultar recurso al proveedor | Un aviso auténtico y consistente se vincula a la compra correcta. | Planificado |
| CP-RF-12-6-02 | Alternativo | RF-12.6 | CU-11 | Firma o cuenta receptora inválidas | Enviar la notificación inválida | Acceso comercial sin concesión indebida y anomalía registrada. | Planificado |
| CP-RF-12-7-01 | Principal | RF-12.7 | CU-07, CU-11 | Compra pendiente y consulta de proveedor disponible | Conciliar con capacidad administrativa | Se recupera la compra correcta por su referencia y contexto. | Planificado |
| CP-RF-12-7-02 | Alternativo | RF-12.7 | CU-07, CU-11 | Resultado externo incierto | Solicitar otro intento del mismo cobro | Operación original conservada y conciliación antes de repetir. | Planificado |
| CP-RF-12-8-01 | Principal | RF-12.8 | CU-11 | Compra pagada y resultado verificado | Procesar concesión de acceso | Cada compra pagada origina como máximo un período de acceso. | Planificado |
| CP-RF-12-8-02 | Alternativo | RF-12.8 | CU-11 | Webhook repetido | Repetir la misma concesión | Un único período por compra. | Planificado |
| CP-RF-12-9-01 | Principal | RF-12.9 | CU-11 | Acceso vencido y condiciones publicadas | Iniciar manualmente una compra y su checkout | Renovar exige acceso vencido y una acción expresa; el período comienza al confirmar el pago. | Planificado |
| CP-RF-12-9-02 | Alternativo | RF-12.9 | CU-11 | Concesiones concurrentes | Confirmarlas sobre la misma membresía | Intervalos serializados y conservación de todos los días contratados. | Planificado |
| CP-RF-12-10-01 | Principal | RF-12.10 | CU-02, CU-03, CU-14, CU-17, CU-19, CU-20 | Maker vencido con pedido activo y producto publicado | Continuar chat y revisión del pedido existente | Un maker vencido no confirma un trabajo nuevo mediante una petición directa que eluda la interfaz. | Planificado |
| CP-RF-12-10-02 | Alternativo | RF-12.10 | CU-02, CU-03, CU-14, CU-17, CU-19, CU-20 | Nuevo pedido del producto o nueva aceptación | Intentar confirmar otro trabajo | Trabajo nuevo restringido y pedido existente operativo. | Planificado |
| CP-RF-12-11-01 | Principal | RF-12.11 | CU-08, CU-23 | Acceso cercano a vencer y frecuencia de prueba | Procesar aviso de vencimiento | Los destinatarios son autorizados y los reintentos no duplican efectos comerciales. | Planificado |
| CP-RF-12-11-02 | Alternativo | RF-12.11 | CU-08, CU-23 | Evento repetido o acceso ya renovado | Reprocesar el aviso anterior | Aviso deduplicado y estado consultado antes de emitir. | Planificado |
| CP-RF-12-12-01 | Principal | RF-12.12 | CU-07 | Cobro del abono elegible y política de devolución configurada | Registrar caso del mismo pago, autorizarlo con motivo, solicitar devolución total con caso_id y conciliarla | Backend determina el importe completo y la moneda del cobro original verificado; la operación queda conciliada. | Planificado |
| CP-RF-12-12-02 | Alternativo | RF-12.12 | CU-07 | Caso sin autorización, caso de otro pago, importe introducido en el payload o permiso ausente | Solicitar la devolución inválida | Payload con importe rechazado por contrato o acceso denegado; cobro y pedidos existentes conservados. | Planificado |
| CP-RF-12-13-01 | Principal | RF-12.13 | CU-10, CU-12 | A-A1 con capacidad y configuración versionada | Modificar el programa con motivo | Se identifica actor, fecha, motivo y condiciones anteriores y nuevas. | Planificado |
| CP-RF-12-13-02 | Alternativo | RF-12.13 | CU-10, CU-12 | Intervención sin motivo o versión | Intentar el cambio | Cambio rechazado y auditoría del resultado permitido. | Planificado |
| CP-RF-12-14-01 | Principal | RF-12.14 | CU-11 | Compra en modo simulado con cuenta habilitada en demostración | Procesar el resultado de prueba | Cada vista y registro identifica el modo del intento y del período originado. | Planificado |
| CP-RF-12-14-02 | Alternativo | RF-12.14 | CU-11 | Cuenta sin permiso en demostración o solicitud en producción | Enviar la solicitud directamente al backend en ambas condiciones | El backend rechaza cada solicitud y conserva las compras y los períodos de acceso. | Planificado |
| CP-RF-12-15-01 | Principal | RF-12.15 | CU-03, CU-08, CU-11, CU-20 | Maker durante prueba y cliente ante producto | Consultar condiciones y confirmaciones | Las pantallas de compra, prueba y fundadores muestran las condiciones antes de la aceptación correspondiente. | Planificado |
| CP-RF-12-15-02 | Alternativo | RF-12.15 | CU-03, CU-08, CU-11, CU-20 | Retorno de checkout con supuesto éxito | Intentar dar por pagada la compra desde el cliente | Estado verificado del backend y alcance de cada pago visibles. | Planificado |
| CP-RF-13-1-01 | Principal | RF-13.1 | CU-19 | M-M1, configuración fija válida, cinco fotos habilitadas y un recurso de fabricación | Guardar borrador y crear nueva versión de condiciones | La API conserva las cinco fotos y el recurso privado de fabricación. | Planificado |
| CP-RF-13-1-02 | Alternativo | RF-13.1 | CU-19 | Producto ajeno, importe inválido, foto con finalidad incorrecta, seis fotos o borrador vencido | Intentar editar con M-M1. Consultar e intentar publicar el borrador vencido. | La API conserva la versión vigente, informa el límite si se excede y excluye del listado el borrador vencido. | Planificado |
| CP-RF-13-2-01 | Principal | RF-13.2 | CU-07, CU-19 | Producto completo y maker vigente | Publicar y luego pausar la publicación | Una publicación completa y autorizada aparece en el catálogo del maker. | Planificado |
| CP-RF-13-2-02 | Alternativo | RF-13.2 | CU-07, CU-19 | Producto pausado con un pedido anterior | Intentar crear otro pedido | Pedido nuevo rechazado y pedido anterior conservado. | Planificado |
| CP-RF-13-3-01 | Principal | RF-13.3 | CU-19, CU-20 | Publicación vigente con medios derivados | Consultar catálogo y detalle como visitante | El perfil público presenta los productos publicados y sus condiciones completas. | Planificado |
| CP-RF-13-3-02 | Alternativo | RF-13.3 | CU-19, CU-20 | Borrador o original privado | Solicitar su contenido público | Contenido privado protegido. | Planificado |
| CP-RF-13-4-01 | Principal | RF-13.4 | CU-20 | U-C1, P-P1 versión 1, cantidad 2 y OP-CAT-01 | Confirmar pedido directo y repetir la intención | Confirmar una versión vigente genera un pedido con cantidad, precio unitario, total, moneda, plazo y condiciones conservados. | Planificado |
| CP-RF-13-4-02 | Alternativo | RF-13.4 | CU-20 | Versión cambiada o misma clave con cantidad 3 | Confirmar con condiciones obsoletas o contenido distinto | Conflicto y ausencia de segundo pedido. | Planificado |
| CP-RF-14-1-01 | Principal | RF-14.1 | CU-07, CU-15 | Trabajo de M-M1 y cinco imágenes JPEG y PNG autorizadas de hasta 10 MiB | Autorizar la carga, finalizarla y publicar el trabajo | El portfolio muestra el trabajo con los cinco derivados autorizados. | Planificado |
| CP-RF-14-1-02 | Alternativo | RF-14.1 | CU-07, CU-15 | Un MP4, un PNG declarado como JPEG, evidencia privada sin autorización y seis fotos habilitadas | Intentar cada carga inválida y publicar sin autorización. Intentar guardar con seis fotos. Bajar el límite a cuatro e intentar publicar un borrador con cinco. Restablecer el límite. | Se rechazan las cargas o publicaciones inválidas. Si se supera el máximo, el backend informa el límite con 422 y conserva el trabajo anterior. La publicación previa mantiene sus fotos. | Planificado |
| CP-RF-14-2-01 | Principal | RF-14.2 | CU-15 | Portfolio con un trabajo publicado y otro retirado | Consultar como visitante | La consulta devuelve exclusivamente trabajos publicados y autorizados. | Planificado |
| CP-RF-14-2-02 | Alternativo | RF-14.2 | CU-15 | Identificador de trabajo retirado | Consultar su detalle público | Trabajo retirado sin presentación pública. | Planificado |
| CP-RF-15-1-01 | Principal | RF-15.1 | CU-16 | Pedido completado y criterios del piloto configurados | Registrar una valoración por participante con puntajes de 1 y de 5. Repetir un envío con la misma clave y contenido. | Ambos extremos son válidos. Se guardan dos valoraciones, una por participante. El reintento recupera el registro original. | Planificado |
| CP-RF-15-1-02 | Alternativo | RF-15.1 | CU-16 | Pedido cancelado, autor ajeno, puntaje 0 o 6 o autor que ya valoró el pedido | Intentar publicar en cada variante. Para el autor que ya valoró, usar otra clave con puntaje válido. | Publicación denegada en cada variante y valoraciones existentes conservadas. | Planificado |
| CP-RF-15-2-01 | Principal | RF-15.2 | CU-16 | Valoraciones publicadas y ocultas conocidas | Consultar cantidad y promedio publicados | El resumen coincide con las valoraciones publicadas y sus criterios. | Planificado |
| CP-RF-15-2-02 | Alternativo | RF-15.2 | CU-16 | Cuenta sin valoraciones | Consultar su reputación | Cantidad cero y promedio ausente. | Planificado |
| CP-RF-15-3-01 | Principal | RF-15.3 | CU-07, CU-16 | A-A1 con capacidad y valoración publicada | Ocultar y luego restituir con un motivo para cada acción. Consultar el agregado y el historial. | La contribución al agregado sigue la visibilidad. El historial conserva ambas acciones con motivo, actor, fecha y estados anterior y resultante. | Planificado |
| CP-RF-15-3-02 | Alternativo | RF-15.3 | CU-07, CU-16 | Usuario sin capacidad o solicitud de moderación sin motivo | Intentar ocultar o restituir en cada variante. | La acción se rechaza y la valoración conserva su visibilidad. | Planificado |
| CP-RF-16-1-01 | Principal | RF-16.1 | CU-17 | U-C1 con pedidos propios personalizados y de catálogo, incluidos cancelados dentro del plazo | Filtrar y paginar el historial propio y consultar un pedido cancelado | El listado devuelve pedidos propios en orden estable. El detalle del cancelado conserva las condiciones históricas dentro del plazo de PD-12. | Planificado |
| CP-RF-16-1-02 | Alternativo | RF-16.1 | CU-17 | Pedido de U-C2 o cursor ajeno | Solicitarlo desde U-C1 | Historial ajeno protegido. | Planificado |
| CP-RF-17-1-01 | Principal | RF-17.1 | CU-18 | Datos conocidos de altas, pedidos y valoraciones | Consultar el reporte con intervalo y zona | Un conjunto de datos conocido produce los conteos, promedio y filtros esperados. | Planificado |
| CP-RF-17-1-02 | Alternativo | RF-17.1 | CU-18 | Rol maker o intervalo inválido | Solicitar el reporte | Consulta rechazada y datos administrativos protegidos. | Planificado |
| CP-MEM-01 | Regresión comercial | RF-12.2 | CU-09 | Maker registrado, perfil completo, correo pendiente y reloj controlable | Abrir un enlace al cumplirse una hora de su emisión. Intentar habilitar, pedir otro enlace y verificarlo dentro de su vigencia. Volver a solicitar la habilitación. | El enlace vencido mantiene el correo y la habilitación pendientes y la prueba sin iniciar. La primera habilitación válida concede una única prueba inicial. | Planificado |
| CP-MEM-02 | Regresión comercial | RF-12.3 | CU-10 | Convocatoria abierta, cupo disponible y maker en el día 10 de su prueba general vigente | Convertir a fundador y repetir la operación | Misma concesión e inicio original; fin en inicio más 90 días totales configurables, una plaza consumida y auditoría antes/después; el reintento conserva el resultado. | Planificado |
| CP-MEM-03 | Regresión comercial | RF-12.3 | CU-10 | Una plaza fundadora disponible y dos asignaciones concurrentes | Solicitar ambas asignaciones | Como máximo una usa la última plaza; no se excede el cupo. | Planificado |
| CP-MEM-04 | Regresión comercial | RF-12.5 | CU-11 | Plan vigente y maker autenticado | Alterar importe en el cliente e iniciar Checkout Pro | El backend usa el plan y conserva sus condiciones, sin confiar en el importe recibido. | Planificado |
| CP-MEM-05 | Regresión comercial | RF-12.6, RF-12.8 | CU-11 | Compra legítima y notificación verificable | Entregar webhook duplicado y fuera de orden | Consulta al proveedor y como máximo un período por compra confirmada. | Planificado |
| CP-MEM-06 | Regresión comercial | RF-12.6 | CU-11 | Retorno del navegador con supuesto éxito; proveedor pendiente | Volver desde Checkout Pro | Sin acceso pago hasta confirmación verificable. | Planificado |
| CP-MEM-07 | Regresión comercial | RF-12.9 | CU-11 | Prueba o abono vigente | Intentar crear compra o preparar checkout antes del vencimiento | 409 membership_active; conserva el período vigente y evita crear compra o checkout anticipados. | Planificado |
| CP-MEM-08 | Regresión comercial | RF-12.10 | CU-02, CU-04, CU-05, CU-06 | Maker con un pedido activo y acceso a punto de vencer | Vencer el acceso; intentar trabajo nuevo y terminar el activo | Nuevo trabajo restringido; chat, producción, revisión y entrega del existente disponibles. | Planificado |
| CP-MEM-09 | Regresión comercial | RF-12.14 | CU-11 | Entorno de simulación identificado | Confirmar una compra simulada e intentar usarla en producción | No concede acceso pago real; registros y señales identifican la simulación. | Planificado |
| CP-MEM-10 | Regresión comercial | RF-12.1, RF-12.13 | CU-12 | Compra anterior y plan con nuevo precio | Cambiar precio del plan | La compra anterior conserva sus condiciones; la nueva usa otra versión. | Planificado |
| CP-MEM-11 | Regresión comercial | RF-12.12 | CU-07 | Abono pagado y devolución total autorizada | Solicitar devolución, comprobar estado pendiente, repetir la clave y confirmar el resultado del proveedor | Durante el estado pendiente conserva acceso; confirmada, un único reembolso total retira solo el período de esa compra, conserva otros períodos válidos y los pedidos aceptados; el reintento mantiene el resultado. | Planificado |
| CP-MEM-12 | Regresión comercial | RF-12.15 | CU-08, CU-11 | Maker durante prueba y cliente consultando un pedido | Revisar mensajes de precio, beneficio y checkout | Sin tarjeta obligatoria ni cobro automático de prueba; beneficio sin promesa de trabajos; pago de impresión explícitamente externo. | Planificado |
| CP-X-01 | Integración funcional | RF-04.4 | CU-03 | Solicitud con dos ofertas vigentes | Aceptar ambas de forma concurrente | Un único pedido, versión aceptada conservada y otras ofertas cerradas. | Planificado |
| CP-X-02 | Integración funcional | RF-13.4 | CU-20 | Producto consultado con versión 1 | Publicar versión 2 antes de confirmar la 1 | Conflicto y ausencia de solicitud, oferta o pedido parciales. | Planificado |
| CP-X-03 | Integración funcional | RF-13.4 | CU-20 | Pedido confirmado con clave K y cantidad 2 | Repetir K con cantidad 3 | Conflicto; se conserva el pedido de cantidad 2. | Planificado |
| CP-X-04 | Integración funcional | RF-12.10, RF-05.1 | CU-14, CU-20 | Maker vencido con pedido anterior y producto visible | Enviar mensaje del pedido y confirmar producto nuevo | Mensaje del pedido disponible y compra nueva rechazada. | Planificado |
| CP-X-05 | Integración funcional | RF-12.6, RF-12.8 | CU-11 | Compra pagada y mismo evento entregado varias veces | Procesar eventos repetidos y fuera de orden | Una compra conciliada y un único período concedido. | Planificado |
| CP-X-06 | Integración funcional | RF-16.1, RF-05.4 | CU-14, CU-17 | Dos clientes con pedidos y cursores diferentes | Consultar identificadores y cursor del otro usuario | Permisos y datos privados protegidos. | Planificado |
| CP-X-07 | Integración funcional | RF-06.4, RF-06.7 | CU-05, CU-06 | Revisión pendiente sin respuesta del cliente | Avanzar el reloj, procesar recordatorios y pedir seguimiento simultáneamente como cliente y maker. Intentar presentar otra revisión. Solicitar la reapertura del caso cerrado, consultar la decisión de soporte en ese caso y enviar otra solicitud después de un rechazo. | Las solicitudes comparten caso y quedan auditadas. El rechazo definitivo conserva el caso cerrado y bloquea nuevas reaperturas para esa revisión. La revisión vigente sigue pendiente. La presentación nueva se rechaza y la entrega requiere aprobación expresa. | Planificado |
| CP-X-08 | Integración funcional | RF-04.6, RF-04.4 | CU-25, CU-03 | Oferta con contraoferta pendiente | Aceptar versión original mientras se resuelve el cambio | Un acuerdo consistente o conflicto; ninguna versión retroactiva altera el pedido. | Planificado |
| CP-X-09 | Integración funcional | RF-10.3, RF-10.4 | CU-24 | Archivo usado por revisión aprobada o producto contratado | Intentar reemplazar sus bytes con una autorización anterior | Contenido histórico conservado y acceso temporal revalidado. | Planificado |
| CP-X-10 | Integración funcional | RF-12.3 | CU-10 | Una plaza fundadora disponible | Asignar a dos makers concurrentemente | Cupo respetado y una concesión inicial por maker. | Planificado |
| CP-X-11 | Integración funcional | RF-12.9 | CU-11 | Dos compras distintas confirmadas para la misma membresía | Procesar sus concesiones concurrentemente | Ambas compras conservadas e intervalos serializados sin perder días. | Planificado |
| CP-X-12 | Integración funcional | RF-13.3, RF-14.2, RF-10.3 | CU-19, CU-15, CU-24 | Catálogo y portfolio con originales privados | Consultar como visitante y retirar una publicación | Únicamente derivados autorizados visibles y retiro aplicado a su presentación. | Planificado |
| CP-X-13 | Integración funcional | RF-06.7, RF-07.2 | CU-06, CU-07 | Inasistencia revisada, cupo agotado y recepción pendiente | Confirmar recepción y cancelar desde soporte en paralelo | Una única salida del pedido. La operación incompatible recibe 409. Si se confirma la cancelación, CP-029 comprueba los avisos obligatorios en app y correo. | Planificado |

## Trazabilidad por requisito

| RF | Funcionalidades | Casos de uso | Datos principales | Pruebas |
| --- | --- | --- | --- | --- |
| RF-01.1 | F01, F03 | CU-13 | `usuarios`, `usuario_roles`, `clientes`, `makers`, `sesiones` | CP-RF-01-1-01, CP-RF-01-1-02 |
| RF-01.2 | F03 | CU-09, CU-21 | `makers`, `impresoras`, `materiales`, `capacidades_impresora` | CP-RF-01-2-01, CP-RF-01-2-02 |
| RF-01.3 | F02 | CU-22 | `clientes`, `ubicaciones` | CP-RF-01-3-01, CP-RF-01-3-02 |
| RF-01.4 | F01 | CU-13 | `usuarios`, `usuario_roles`, `clientes`, `makers`, `sesiones` | CP-RF-01-4-01, CP-RF-01-4-02 |
| RF-01.5 | F01 | CU-13 | `usuarios`, `usuario_roles`, `clientes`, `makers`, `sesiones` | CP-RF-01-5-01, CP-RF-01-5-02 |
| RF-02.1 | F05 | CU-01 | `solicitudes`, `solicitud_versiones`, `archivos`, `analisis_archivos` | CP-RF-02-1-01, CP-RF-02-1-02 |
| RF-02.2 | F05 | CU-01, CU-24 | `solicitudes`, `solicitud_versiones`, `archivos`, `analisis_archivos` | CP-RF-02-2-01, CP-RF-02-2-02 |
| RF-02.3 | F05 | CU-01 | `solicitudes`, `solicitud_versiones`, `archivos`, `analisis_archivos` | CP-RF-02-3-01, CP-RF-02-3-02 |
| RF-02.4 | F12, F19 | CU-17 | `solicitudes`, `solicitud_versiones`, `ofertas`, `pedidos`, `historial_pedidos`, `revisiones_resultado`, `condiciones_pedido` | CP-RF-02-4-01, CP-RF-02-4-02 |
| RF-02.5 | F06 | CU-01 | `estimaciones`, `analisis_archivos`, `configuraciones_versiones` | CP-RF-02-5-01, CP-RF-02-5-02 |
| RF-03.1 | F07, F08 | CU-01 | `ubicaciones`, `makers`, `capacidades_impresora`, `rondas_busqueda`, `invitaciones_maker`, `membresias_maker`, `periodos_membresia` | CP-RF-03-1-01, CP-RF-03-1-02 |
| RF-03.2 | F08 | CU-02 | `rondas_busqueda`, `invitaciones_maker`, `membresias_maker`, `periodos_membresia` | CP-RF-03-2-01, CP-RF-03-2-02 |
| RF-04.1 | F09 | CU-02, CU-25 | `ofertas`, `oferta_versiones`, `propuestas_cambio_oferta` | CP-RF-04-1-01, CP-RF-04-1-02 |
| RF-04.2 | F09 | CU-02, CU-25 | `ofertas`, `oferta_versiones`, `propuestas_cambio_oferta` | CP-RF-04-2-01, CP-RF-04-2-02 |
| RF-04.3 | F09 | CU-03 | `ofertas`, `oferta_versiones`, `propuestas_cambio_oferta` | CP-RF-04-3-01, CP-RF-04-3-02 |
| RF-04.4 | F10 | CU-03, CU-20 | `pedidos`, `condiciones_pedido`, `solicitudes`, `oferta_versiones` | CP-RF-04-4-01, CP-RF-04-4-02, CP-X-01, CP-X-08 |
| RF-04.5 | F09 | CU-02 | `ofertas`, `oferta_versiones`, `propuestas_cambio_oferta` | CP-RF-04-5-01, CP-RF-04-5-02 |
| RF-04.6 | F09 | CU-25 | `ofertas`, `oferta_versiones`, `propuestas_cambio_oferta` | CP-RF-04-6-01, CP-RF-04-6-02, CP-X-08 |
| RF-05.1 | F13 | CU-03, CU-14, CU-20 | `conversaciones`, `participantes_conversacion`, `mensajes`, `mensaje_archivos` | CP-RF-05-1-01, CP-RF-05-1-02, CP-X-04 |
| RF-05.2 | F13 | CU-14 | `conversaciones`, `participantes_conversacion`, `mensajes`, `mensaje_archivos` | CP-RF-05-2-01, CP-RF-05-2-02 |
| RF-05.3 | F12, F19 | CU-04, CU-17 | `pedidos`, `historial_pedidos`, `revisiones_resultado`, `condiciones_pedido` | CP-RF-05-3-01, CP-RF-05-3-02 |
| RF-05.4 | F13 | CU-14 | `conversaciones`, `participantes_conversacion`, `mensajes`, `mensaje_archivos` | CP-RF-05-4-01, CP-RF-05-4-02, CP-X-06 |
| RF-06.1 | F15 | CU-04 | `revisiones_resultado`, `evidencias`, `archivos` | CP-RF-06-1-01, CP-RF-06-1-02 |
| RF-06.2 | F15 | CU-04 | `revisiones_resultado`, `evidencias`, `archivos` | CP-RF-06-2-01, CP-RF-06-2-02 |
| RF-06.3 | F22 | CU-05 | `decisiones_revision`, `revisiones_resultado` | CP-RF-06-3-01, CP-RF-06-3-02 |
| RF-06.4 | F22 | CU-05 | `decisiones_revision`, `revisiones_resultado`, `casos_soporte`, `auditoria` | CP-RF-06-4-01, CP-RF-06-4-02, CP-X-07 |
| RF-06.5 | F12 | CU-04 | `pedidos`, `historial_pedidos`, `revisiones_resultado` | CP-RF-06-5-01, CP-RF-06-5-02 |
| RF-06.6 | F16 | CU-06 | `entregas`, `puntos_encuentro`, `ubicaciones`, `historial_pedidos` | CP-RF-06-6-01, CP-RF-06-6-02 |
| RF-06.7 | F17 | CU-06 | `confirmaciones_entrega`, `entregas`, `pedidos` | CP-RF-06-7-01, CP-RF-06-7-02, CP-X-07, CP-X-13 |
| RF-07.1 | F14 | CU-23 | `notificaciones`, `envios_notificacion`, `eventos_salida` | CP-RF-07-1-01, CP-RF-07-1-02 |
| RF-07.2 | F20 | CU-07 | `casos_soporte`, `auditoria`, `configuraciones_versiones`, `pedidos`, `entregas`, `historial_pedidos` | CP-RF-07-2-01, CP-RF-07-2-02, CP-X-13 |
| RF-07.3 | F14 | CU-23 | `usuarios`, `notificaciones`, `envios_notificacion`, `eventos_salida`, `configuraciones_versiones` | CP-RF-07-3-01, CP-RF-07-3-02 |
| RF-07.4 | F14 | CU-05, CU-23 | `notificaciones`, `envios_notificacion`, `eventos_salida` | CP-RF-07-4-01, CP-RF-07-4-02 |
| RF-07.5 | F14 | CU-23 | `notificaciones`, `envios_notificacion`, `eventos_salida` | CP-RF-07-5-01, CP-RF-07-5-02 |
| RF-09.1 | F02, F07, F16 | CU-01, CU-06, CU-21, CU-22 | `clientes`, `ubicaciones`, `makers`, `capacidades_impresora`, `entregas`, `puntos_encuentro` | CP-RF-09-1-01, CP-RF-09-1-02 |
| RF-09.2 | F07, F16 | CU-06 | `ubicaciones`, `makers`, `capacidades_impresora`, `entregas`, `puntos_encuentro` | CP-RF-09-2-01, CP-RF-09-2-02 |
| RF-10.1 | F23 | CU-01, CU-04, CU-24 | `archivos`, `analisis_archivos` | CP-RF-10-1-01, CP-RF-10-1-02 |
| RF-10.2 | F23 | CU-01, CU-04, CU-24 | `archivos`, `analisis_archivos` | CP-RF-10-2-01, CP-RF-10-2-02 |
| RF-10.3 | F23 | CU-01, CU-04, CU-24 | `archivos`, `analisis_archivos` | CP-RF-10-3-01, CP-RF-10-3-02, CP-X-09, CP-X-12 |
| RF-10.4 | F23 | CU-24 | `archivos`, `analisis_archivos` | CP-RF-10-4-01, CP-RF-10-4-02, CP-X-09 |
| RF-11.1 | F24 | CU-01, CU-02, CU-03, CU-04, CU-05, CU-06, CU-07, CU-08, CU-09, CU-10, CU-11, CU-12, CU-13, CU-14, CU-15, CU-16, CU-17, CU-18, CU-19, CU-20, CU-21, CU-22, CU-23, CU-24, CU-25 | `eventos_salida`, `trabajos`, `sesiones` | CP-RF-11-1-01, CP-RF-11-1-02 |
| RF-11.2 | F13, F24 | CU-14 | `conversaciones`, `participantes_conversacion`, `mensajes`, `mensaje_archivos`, `eventos_salida`, `trabajos`, `sesiones` | CP-RF-11-2-01, CP-RF-11-2-02 |
| RF-12.1 | F11, F20 | CU-12 | `planes_membresia_versiones`, `membresias_maker`, `compras_membresia`, `periodos_membresia`, `pagos`, `eventos_proveedor`, `casos_soporte`, `auditoria`, `configuraciones_versiones` | CP-RF-12-1-01, CP-RF-12-1-02, CP-MEM-10 |
| RF-12.2 | F03, F11 | CU-09 | `makers`, `impresoras`, `materiales`, `capacidades_impresora`, `planes_membresia_versiones`, `membresias_maker`, `compras_membresia`, `periodos_membresia`, `pagos`, `eventos_proveedor` | CP-RF-12-2-01, CP-RF-12-2-02, CP-MEM-01 |
| RF-12.3 | F11, F20 | CU-10 | `planes_membresia_versiones`, `membresias_maker`, `compras_membresia`, `periodos_membresia`, `pagos`, `eventos_proveedor`, `casos_soporte`, `auditoria`, `configuraciones_versiones` | CP-RF-12-3-01, CP-RF-12-3-02, CP-MEM-02, CP-MEM-03, CP-X-10 |
| RF-12.4 | F11 | CU-08, CU-09 | `planes_membresia_versiones`, `membresias_maker`, `compras_membresia`, `periodos_membresia`, `pagos`, `eventos_proveedor` | CP-RF-12-4-01, CP-RF-12-4-02 |
| RF-12.5 | F11 | CU-11 | `planes_membresia_versiones`, `membresias_maker`, `compras_membresia`, `periodos_membresia`, `pagos`, `eventos_proveedor` | CP-RF-12-5-01, CP-RF-12-5-02, CP-MEM-04 |
| RF-12.6 | F11 | CU-11 | `planes_membresia_versiones`, `membresias_maker`, `compras_membresia`, `periodos_membresia`, `pagos`, `eventos_proveedor` | CP-RF-12-6-01, CP-RF-12-6-02, CP-MEM-05, CP-MEM-06, CP-X-05 |
| RF-12.7 | F11, F20 | CU-07, CU-11 | `planes_membresia_versiones`, `membresias_maker`, `compras_membresia`, `periodos_membresia`, `pagos`, `eventos_proveedor`, `casos_soporte`, `auditoria`, `configuraciones_versiones` | CP-RF-12-7-01, CP-RF-12-7-02 |
| RF-12.8 | F11 | CU-11 | `planes_membresia_versiones`, `membresias_maker`, `compras_membresia`, `periodos_membresia`, `pagos`, `eventos_proveedor` | CP-RF-12-8-01, CP-RF-12-8-02, CP-MEM-05, CP-X-05 |
| RF-12.9 | F11 | CU-11 | `planes_membresia_versiones`, `membresias_maker`, `compras_membresia`, `periodos_membresia`, `pagos`, `eventos_proveedor` | CP-RF-12-9-01, CP-RF-12-9-02, CP-MEM-07, CP-X-11 |
| RF-12.10 | F08, F10, F11, F12, F13 | CU-02, CU-03, CU-14, CU-17, CU-19, CU-20 | `rondas_busqueda`, `invitaciones_maker`, `membresias_maker`, `periodos_membresia`, `pedidos`, `condiciones_pedido`, `solicitudes`, `oferta_versiones`, `planes_membresia_versiones`, `compras_membresia`, `pagos`, `eventos_proveedor`, `historial_pedidos`, `revisiones_resultado`, `conversaciones`, `participantes_conversacion`, `mensajes`, `mensaje_archivos` | CP-RF-12-10-01, CP-RF-12-10-02, CP-MEM-08, CP-X-04 |
| RF-12.11 | F11, F14 | CU-08, CU-23 | `planes_membresia_versiones`, `membresias_maker`, `compras_membresia`, `periodos_membresia`, `pagos`, `eventos_proveedor`, `notificaciones`, `envios_notificacion`, `eventos_salida` | CP-RF-12-11-01, CP-RF-12-11-02 |
| RF-12.12 | F11, F20 | CU-07 | `planes_membresia_versiones`, `membresias_maker`, `compras_membresia`, `periodos_membresia`, `pagos`, `eventos_proveedor`, `casos_soporte`, `auditoria`, `configuraciones_versiones` | CP-RF-12-12-01, CP-RF-12-12-02, CP-MEM-11 |
| RF-12.13 | F11, F20 | CU-10, CU-12 | `planes_membresia_versiones`, `membresias_maker`, `compras_membresia`, `periodos_membresia`, `pagos`, `eventos_proveedor`, `casos_soporte`, `auditoria`, `configuraciones_versiones` | CP-RF-12-13-01, CP-RF-12-13-02, CP-MEM-10 |
| RF-12.14 | F11 | CU-11 | `planes_membresia_versiones`, `membresias_maker`, `compras_membresia`, `periodos_membresia`, `pagos`, `eventos_proveedor` | CP-RF-12-14-01, CP-RF-12-14-02, CP-MEM-09 |
| RF-12.15 | F10, F11 | CU-03, CU-08, CU-11, CU-20 | `pedidos`, `condiciones_pedido`, `solicitudes`, `oferta_versiones`, `planes_membresia_versiones`, `membresias_maker`, `compras_membresia`, `periodos_membresia`, `pagos`, `eventos_proveedor` | CP-RF-12-15-01, CP-RF-12-15-02, CP-MEM-12 |
| RF-13.1 | F25 | CU-19 | `productos_maker`, `producto_versiones`, `producto_archivos`, `solicitudes`, `oferta_versiones`, `pedidos` | CP-RF-13-1-01, CP-RF-13-1-02, PNF-007 |
| RF-13.2 | F20, F25 | CU-07, CU-19 | `casos_soporte`, `auditoria`, `configuraciones_versiones`, `productos_maker`, `producto_versiones`, `producto_archivos`, `solicitudes`, `oferta_versiones`, `pedidos` | CP-RF-13-2-01, CP-RF-13-2-02 |
| RF-13.3 | F25 | CU-19, CU-20 | `productos_maker`, `producto_versiones`, `producto_archivos`, `solicitudes`, `oferta_versiones`, `pedidos` | CP-RF-13-3-01, CP-RF-13-3-02, CP-X-12 |
| RF-13.4 | F25 | CU-20 | `productos_maker`, `producto_versiones`, `producto_archivos`, `solicitudes`, `oferta_versiones`, `pedidos` | CP-RF-13-4-01, CP-RF-13-4-02, CP-X-02, CP-X-03 |
| RF-14.1 | F04, F20 | CU-07, CU-15 | `portfolio_trabajos`, `portfolio_archivos`, `archivos`, `casos_soporte`, `auditoria`, `configuraciones_versiones` | CP-RF-14-1-01, CP-RF-14-1-02 |
| RF-14.2 | F04 | CU-15 | `portfolio_trabajos`, `portfolio_archivos`, `archivos` | CP-RF-14-2-01, CP-RF-14-2-02, CP-X-12 |
| RF-15.1 | F18 | CU-16 | `valoraciones`, `valoracion_criterios`, `configuraciones_versiones` | CP-RF-15-1-01, CP-RF-15-1-02 |
| RF-15.2 | F18 | CU-16 | `valoraciones`, `valoracion_criterios`, `configuraciones_versiones` | CP-RF-15-2-01, CP-RF-15-2-02 |
| RF-15.3 | F18, F20 | CU-07, CU-16 | `valoraciones`, `valoracion_criterios`, `configuraciones_versiones`, `casos_soporte`, `auditoria` | CP-RF-15-3-01, CP-RF-15-3-02 |
| RF-16.1 | F19 | CU-17 | `pedidos`, `historial_pedidos`, `condiciones_pedido` | CP-RF-16-1-01, CP-RF-16-1-02, CP-X-06 |
| RF-17.1 | F20, F21 | CU-18 | `casos_soporte`, `auditoria`, `configuraciones_versiones`, `usuarios`, `makers`, `pedidos`, `historial_pedidos`, `valoraciones` | CP-RF-17-1-01, CP-RF-17-1-02 |

## Registro de ejecución

Cada ejecución conserva versión de aplicación y documentación, entorno, reloj de prueba, datos, pasos, resultado obtenido, evidencia, incidencias, responsable y fecha. El plan permite ejecutar los recorridos de cliente y maker en Web y Mobile; las operaciones administrativas se prueban en Web.

Los escenarios del proveedor de pagos se ejecutan con cuentas y entornos de prueba. El control de concurrencia, permisos y recuperación se verifica también mediante solicitudes directas a la API.

## Requisitos no funcionales

Los [19 RNF](/3daltoque-docs/analisis/requisitos/no-funcionales/) se relacionan con los escenarios de autorización, integridad, idempotencia, conservación, accesibilidad y recuperación. Las mediciones de rendimiento, disponibilidad y respaldo utilizan el perfil de carga y los valores de PD-13.
