---
title: "Casos de prueba y trazabilidad"
---

# Casos de prueba y trazabilidad funcional

Versión 3.0. Fecha: 25 de octubre de 2026.

El catálogo define precondiciones, datos, acciones y resultados esperados para los 68 RF y 25 casos de uso. El estado de ejecución de cada escenario se registra por separado de la cobertura documental.

## Datos del plan de pruebas

Los datos sintéticos se describen en [fixtures de revisión](/3daltoque-docs/documentos/8a0c5389371a-datos-funcionales.json). Identidades: U-C1 y U-C2 son clientes distintos; M-M1 y M-M2 son makers distintos; A-A1 dispone de capacidades administrativas de prueba. Los archivos STL de referencia permanecen en `docs/pruebas/fixtures/`.

## Catálogo de escenarios

| ID | Tipo | RF | CU | Precondiciones y datos | Acciones | Resultado esperado | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CP-RF-01-1-01 | Principal | RF-01.1 | CU-13 | Correo nuevo y roles cliente/maker | Registrar la cuenta con datos válidos | Una solicitud válida crea una sola cuenta y su perfil, y permite consultar su estado. | Planificado |
| CP-RF-01-1-02 | Alternativo | RF-01.1 | CU-13 | Correo ya registrado o rol admin | Repetir el alta o solicitar privilegio administrativo | Denegación comprensible y ausencia de una cuenta parcial. | Planificado |
| CP-RF-01-2-01 | Principal | RF-01.2 | CU-09, CU-21 | M-M1 con impresora y material habilitado | Guardar dimensiones y capacidades propias | El maker guarda capacidades válidas y las recupera sin cambios de significado o unidad. | Planificado |
| CP-RF-01-2-02 | Alternativo | RF-01.2 | CU-09, CU-21 | Impresora de M-M2 o dimensión negativa | Enviar el cambio con la sesión de M-M1 | Cambio rechazado y capacidad original conservada. | Planificado |
| CP-RF-01-3-01 | Principal | RF-01.3 | CU-22 | U-C1 y ubicación propia | Guardar contacto y confirmar referencia | El titular guarda y recupera su información autorizada. | Planificado |
| CP-RF-01-3-02 | Alternativo | RF-01.3 | CU-22 | Perfil U-C2 o coordenada inválida | Intentar editar con la sesión de U-C1 | Perfil ajeno protegido o campos informados. | Planificado |
| CP-RF-01-4-01 | Principal | RF-01.4 | CU-13 | Cuenta habilitada y credenciales de prueba válidas | Iniciar sesión y consultar capacidades | Credenciales válidas de una cuenta habilitada permiten acceder a sus funciones. | Planificado |
| CP-RF-01-4-02 | Alternativo | RF-01.4 | CU-13 | Credencial inválida o cuenta bloqueada | Solicitar acceso con esos datos | Acceso denegado y datos sensibles protegidos. | Planificado |
| CP-RF-01-5-01 | Principal | RF-01.5 | CU-13 | Sesión activa de U-C1 | Cerrar sesión y volver a solicitar recurso protegido | Después del cierre, el cliente deja de acceder a pantallas protegidas con esa sesión. | Planificado |
| CP-RF-01-5-02 | Alternativo | RF-01.5 | CU-13 | Credencial de renovación cerrada | Intentar renovar la sesión cerrada | Renovación rechazada conforme a la política de sesión. | Planificado |
| CP-RF-02-1-01 | Principal | RF-02.1 | CU-01 | STL cúbico válido, mm, PLA y cantidad 2 | Guardar el borrador personalizado | El archivo completado y habilitado queda vinculado a la solicitud del cliente correcto. | Planificado |
| CP-RF-02-1-02 | Alternativo | RF-02.1 | CU-01 | Cantidad 0 o unidad ausente | Guardar y solicitar publicar con esos datos | Error por campo y borrador recuperable. | Planificado |
| CP-RF-02-2-01 | Principal | RF-02.2 | CU-01, CU-24 | Archivo STL válido e integridad conocida | Finalizar archivo y consultar análisis | Un STL válido dentro de los límites queda habilitado para su uso autorizado. | Planificado |
| CP-RF-02-2-02 | Alternativo | RF-02.2 | CU-01, CU-24 | Archivo abierto o tipo declarado inconsistente | Solicitar habilitar el archivo inválido | Archivo rechazado o pendiente con causa; envío bloqueado hasta resolver. | Planificado |
| CP-RF-02-3-01 | Principal | RF-02.3 | CU-01 | Borrador de U-C1 con archivo habilitado | Enviar la versión de solicitud | Una creación válida conserva propietario, archivo y características de la solicitud. | Planificado |
| CP-RF-02-3-02 | Alternativo | RF-02.3 | CU-01 | Borrador de U-C2 o archivo pendiente | Intentar enviar desde U-C1 | Envío denegado y ausencia de invitaciones parciales. | Planificado |
| CP-RF-02-4-01 | Principal | RF-02.4 | CU-17 | Solicitud propia enviada con ofertas | Consultar estado y plazos vigentes | El cliente consulta el mismo estado que determina la API. | Planificado |
| CP-RF-02-4-02 | Alternativo | RF-02.4 | CU-17 | Identificador de solicitud ajena | Solicitar su detalle | Datos protegidos y recurso propio sin cambios. | Planificado |
| CP-RF-02-5-01 | Principal | RF-02.5 | CU-01 | STL válido y configuración de estimación identificada | Consultar el resultado del cálculo automático | Una solicitud válida obtiene una referencia calculada con entradas y configuración identificables. | Planificado |
| CP-RF-02-5-02 | Alternativo | RF-02.5 | CU-01 | Unidad ambigua o parámetros de cálculo ausentes | Solicitar estimación de esa versión | Resultado indisponible con causa y continuidad hacia ofertas. | Planificado |
| CP-RF-03-1-01 | Principal | RF-03.1 | CU-01 | Makers con distintas capacidades y acceso | Enviar una solicitud y recuperar candidatos | Para un conjunto conocido de makers, los invitados cumplen los filtros y el límite configurados para la prueba. | Planificado |
| CP-RF-03-1-02 | Alternativo | RF-03.1 | CU-01 | Únicamente makers incompatibles o vencidos | Repetir la búsqueda con la misma versión | Grupo sin candidatos y alternativa configurada; ausencia de invitaciones indebidas. | Planificado |
| CP-RF-03-2-01 | Principal | RF-03.2 | CU-02 | Invitación vigente para M-M1 | Consultar la bandeja y el detalle de invitación | El maker consulta las solicitudes habilitadas para su cuenta y no las reservadas a otros destinatarios. | Planificado |
| CP-RF-03-2-02 | Alternativo | RF-03.2 | CU-02 | Invitación destinada a M-M2 | Consultar su identificador con M-M1 | Invitación y archivo protegidos. | Planificado |
| CP-RF-04-1-01 | Principal | RF-04.1 | CU-02, CU-25 | M-M1 invitado y comercialmente habilitado | Publicar precio, moneda, plazo y vigencia | Una oferta válida queda asociada al maker y solicitud correctos con sus condiciones. | Planificado |
| CP-RF-04-1-02 | Alternativo | RF-04.1 | CU-02, CU-25 | Maker sin invitación o acceso vigente | Intentar publicar la oferta | Publicación rechazada. | Planificado |
| CP-RF-04-2-01 | Principal | RF-04.2 | CU-02, CU-25 | Oferta vigente con versión 1 | Publicar versión 2 y consultar ambas referencias | Una oferta que llegó a su vencimiento no puede aceptarse aunque la pantalla no se haya actualizado. | Planificado |
| CP-RF-04-2-02 | Alternativo | RF-04.2 | CU-02, CU-25 | Oferta vencida o versión esperada anterior | Intentar usarla como versión actual | Conflicto y conservación de las condiciones históricas. | Planificado |
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
| CP-RF-05-2-02 | Alternativo | RF-05.2 | CU-14 | Misma clave MSG-01 con texto diferente | Enviar el contenido distinto | Conflicto y conservación de un único mensaje original. | Planificado |
| CP-RF-05-3-01 | Principal | RF-05.3 | CU-04, CU-17 | Pedido propio con transición permitida | Actualizar el estado con motivo y versión | Cada transición permitida deja un registro ligado al pedido. | Planificado |
| CP-RF-05-3-02 | Alternativo | RF-05.3 | CU-04, CU-17 | Versión anterior o transición no permitida | Solicitar otro cambio | Estado conservado y ausencia de historial ficticio. | Planificado |
| CP-RF-05-4-01 | Principal | RF-05.4 | CU-14 | U-C1 con varios pedidos confirmados | Paginar su bandeja de conversaciones | La bandeja contiene únicamente conversaciones de pedidos en los que participa el usuario. | Planificado |
| CP-RF-05-4-02 | Alternativo | RF-05.4 | CU-14 | Cursor de otra identidad o ámbito | Solicitar una página con ese cursor | Acceso rechazado y protección de conversaciones ajenas. | Planificado |
| CP-RF-06-1-01 | Principal | RF-06.1 | CU-04 | M-M1 del pedido y fotos habilitadas | Preparar evidencia de una revisión | Una presentación válida conserva archivos, pedido, maker y fecha de la revisión. | Planificado |
| CP-RF-06-1-02 | Alternativo | RF-06.1 | CU-04 | Archivo ajeno o rechazado | Intentar presentar la evidencia | Revisión sin publicación inválida y archivo protegido. | Planificado |
| CP-RF-06-2-01 | Principal | RF-06.2 | CU-04 | Revisión completa y habilitada | Presentarla y recuperar aviso al cliente | Una evidencia final válida genera una revisión pendiente identificable. | Planificado |
| CP-RF-06-2-02 | Alternativo | RF-06.2 | CU-04 | Revisión con archivo pendiente | Intentar solicitar aprobación | Presentación bloqueada hasta finalizar validación. | Planificado |
| CP-RF-06-3-01 | Principal | RF-06.3 | CU-05 | U-C1 ante revisión vigente pendiente | Aprobar expresamente esa revisión | Una aprobación válida identifica la revisión y permite las acciones de entrega autorizadas. | Planificado |
| CP-RF-06-3-02 | Alternativo | RF-06.3 | CU-05 | Referencia a revisión reemplazada | Intentar aprobar la referencia anterior | Conflicto y entrega todavía protegida. | Planificado |
| CP-RF-06-4-01 | Principal | RF-06.4 | CU-05 | Revisión pendiente y reloj de prueba avanzado | Procesar recordatorio sin respuesta del cliente | Avanzar el tiempo sobre una revisión sin respuesta no cambia su estado a aprobada. | Planificado |
| CP-RF-06-4-02 | Alternativo | RF-06.4 | CU-05 | Varios ciclos del mismo recordatorio | Reprocesar el evento | Revisión pendiente y avisos deduplicados. | Planificado |
| CP-RF-06-5-01 | Principal | RF-06.5 | CU-04 | Pedido de M-M1 en producción | Actualizar avance y consultar como U-C1 | Los participantes consultan avance e historial. | Planificado |
| CP-RF-06-5-02 | Alternativo | RF-06.5 | CU-04 | Tercero o versión obsoleta | Solicitar transición | Denegación o conflicto con estado original conservado. | Planificado |
| CP-RF-06-6-01 | Principal | RF-06.6 | CU-06 | Pedido aprobado y punto neutral | Proponer y aceptar horario con la contraparte | Un pedido aprobado puede registrar un acuerdo de punto y horario entre sus participantes. | Planificado |
| CP-RF-06-6-02 | Alternativo | RF-06.6 | CU-06 | Cambio posterior de lugar u horario | Intentar tratar el acuerdo anterior como actual | Nueva aceptación requerida y versión anterior conservada. | Planificado |
| CP-RF-06-7-01 | Principal | RF-06.7 | CU-06 | Cliente titular y entrega acordada | Confirmar recepción y repetir la misma operación | El cliente autorizado confirma la entrega acordada y obtiene un único registro de recepción. | Planificado |
| CP-RF-06-7-02 | Alternativo | RF-06.7 | CU-06 | Maker o revisión sin aprobación vigente | Intentar completar la recepción | Cierre denegado y recepción pendiente. | Planificado |
| CP-RF-07-1-01 | Principal | RF-07.1 | CU-23 | Evento de pedido conservado | Procesar el aviso interno y consultar como destinatario | El evento elegido genera un aviso para los destinatarios correctos después de quedar registrado. | Planificado |
| CP-RF-07-1-02 | Alternativo | RF-07.1 | CU-23 | Evento repetido | Procesarlo otra vez | Un único aviso por identidad de evento y destinatario. | Planificado |
| CP-RF-07-2-01 | Principal | RF-07.2 | CU-07 | A-A1 con capacidad y motivo | Ejecutar una intervención autorizada y consultar auditoría | Solo un rol autorizado consulta o resuelve un caso de soporte. | Planificado |
| CP-RF-07-2-02 | Alternativo | RF-07.2 | CU-07 | Rol insuficiente o motivo ausente | Solicitar intervención administrativa | Intervención rechazada y recurso conservado. | Planificado |
| CP-RF-07-3-01 | Principal | RF-07.3 | CU-23 | Evento y canal externo de prueba habilitado | Enviar el aviso identificado | Un aviso elegible utiliza el canal configurado y conserva su referencia de envío. | Planificado |
| CP-RF-07-3-02 | Alternativo | RF-07.3 | CU-23 | Proveedor externo indisponible | Procesar el envío fallido | Hecho de negocio conservado y reintento identificable. | Planificado |
| CP-RF-07-4-01 | Principal | RF-07.4 | CU-05, CU-23 | Revisión pendiente y frecuencia configurada | Procesar un recordatorio elegible | Una revisión pendiente genera recordatorios en los momentos previstos por la configuración aprobada. | Planificado |
| CP-RF-07-4-02 | Alternativo | RF-07.4 | CU-05, CU-23 | Revisión ya decidida | Procesar el recordatorio antiguo | Aviso descartado conforme al estado actual. | Planificado |
| CP-RF-07-5-01 | Principal | RF-07.5 | CU-23 | Aviso de U-C1 | Consultar y marcar leído y volver a entrar | Un destinatario recupera sus avisos y conserva el estado leído al volver a entrar. | Planificado |
| CP-RF-07-5-02 | Alternativo | RF-07.5 | CU-23 | Aviso de U-C2 | Marcarlo con la identidad U-C1 | Aviso ajeno protegido. | Planificado |
| CP-RF-09-1-01 | Principal | RF-09.1 | CU-01, CU-06, CU-21, CU-22 | Referencia geográfica y permiso de U-C1 | Seleccionar y confirmar ubicación | Una selección confirmada conserva coordenadas y metadatos autorizados con significado inequívoco. | Planificado |
| CP-RF-09-1-02 | Alternativo | RF-09.1 | CU-01, CU-06, CU-21, CU-22 | Permiso de dispositivo denegado | Usar alternativa de ingreso manual | Referencia con precisión explícita y datos privados protegidos. | Planificado |
| CP-RF-09-2-01 | Principal | RF-09.2 | CU-06 | Pedido o búsqueda con zona autorizada | Consultar puntos del mapa | El mapa representa los recursos autorizados de un conjunto de prueba conocido. | Planificado |
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
| CP-RF-11-2-01 | Principal | RF-11.2 | CU-14 | Conversación autorizada y cursor anterior | Reconectar y recuperar eventos persistidos | Después de reconectarse, un cliente autorizado recupera mensajes y estado vigentes sin pérdida de datos persistidos. | Planificado |
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
| CP-RF-12-9-01 | Principal | RF-12.9 | CU-11 | Acceso vigente y dos compras pagadas distintas | Procesar renovaciones anticipadas | Renovar requiere una acción expresa que inicia el checkout. | Planificado |
| CP-RF-12-9-02 | Alternativo | RF-12.9 | CU-11 | Concesiones concurrentes | Confirmarlas sobre la misma membresía | Intervalos serializados y conservación de todos los días contratados. | Planificado |
| CP-RF-12-10-01 | Principal | RF-12.10 | CU-02, CU-03, CU-14, CU-17, CU-19, CU-20 | Maker vencido con pedido activo y producto publicado | Continuar chat y revisión del pedido existente | Un maker vencido no confirma un trabajo nuevo mediante una petición directa que eluda la interfaz. | Planificado |
| CP-RF-12-10-02 | Alternativo | RF-12.10 | CU-02, CU-03, CU-14, CU-17, CU-19, CU-20 | Nuevo pedido del producto o nueva aceptación | Intentar confirmar otro trabajo | Trabajo nuevo restringido y pedido existente operativo. | Planificado |
| CP-RF-12-11-01 | Principal | RF-12.11 | CU-08, CU-23 | Acceso cercano a vencer y frecuencia de prueba | Procesar aviso de vencimiento | Los destinatarios son autorizados y los reintentos no duplican efectos comerciales. | Planificado |
| CP-RF-12-11-02 | Alternativo | RF-12.11 | CU-08, CU-23 | Evento repetido o acceso ya renovado | Reprocesar el aviso anterior | Aviso deduplicado y estado consultado antes de emitir. | Planificado |
| CP-RF-12-12-01 | Principal | RF-12.12 | CU-07 | Compra del abono y política de devolución configurada | Solicitar devolución autorizada y conciliarla | La devolución pertenece a un pago de membresía elegible, con moneda e importe correctos. | Planificado |
| CP-RF-12-12-02 | Alternativo | RF-12.12 | CU-07 | Importe excesivo o permiso ausente | Solicitar la devolución inválida | Solicitud denegada y pedidos de impresión conservados. | Planificado |
| CP-RF-12-13-01 | Principal | RF-12.13 | CU-10, CU-12 | A-A1 con capacidad y configuración versionada | Modificar el programa con motivo | Se identifica actor, fecha, motivo y condiciones anteriores y nuevas. | Planificado |
| CP-RF-12-13-02 | Alternativo | RF-12.13 | CU-10, CU-12 | Intervención sin motivo o versión | Intentar el cambio | Cambio rechazado y auditoría del resultado permitido. | Planificado |
| CP-RF-12-14-01 | Principal | RF-12.14 | CU-11 | Compra académica en modo simulado | Procesar el resultado de prueba | Cada vista y registro identifica el modo del intento y del período originado. | Planificado |
| CP-RF-12-14-02 | Alternativo | RF-12.14 | CU-11 | Registro simulado usado como cobro productivo | Intentar conceder acceso comercial real | Cruce de entorno rechazado. | Planificado |
| CP-RF-12-15-01 | Principal | RF-12.15 | CU-03, CU-08, CU-11, CU-20 | Maker durante prueba y cliente ante producto | Consultar condiciones y confirmaciones | Las pantallas de compra, prueba y fundadores muestran las condiciones antes de la aceptación correspondiente. | Planificado |
| CP-RF-12-15-02 | Alternativo | RF-12.15 | CU-03, CU-08, CU-11, CU-20 | Retorno de checkout con supuesto éxito | Intentar dar por pagada la compra desde el cliente | Estado verificado del backend y alcance de cada pago visibles. | Planificado |
| CP-RF-13-1-01 | Principal | RF-13.1 | CU-19 | M-M1 y configuración fija válida | Guardar borrador y crear nueva versión de condiciones | El maker conserva un borrador válido y sus archivos autorizados. | Planificado |
| CP-RF-13-1-02 | Alternativo | RF-13.1 | CU-19 | Producto de M-M2 o importe inválido | Intentar editarlo con M-M1 | Cambio denegado y versión original conservada. | Planificado |
| CP-RF-13-2-01 | Principal | RF-13.2 | CU-07, CU-19 | Producto completo y maker vigente | Publicar y luego pausar la publicación | Una publicación completa y autorizada aparece en el catálogo del maker. | Planificado |
| CP-RF-13-2-02 | Alternativo | RF-13.2 | CU-07, CU-19 | Producto pausado con un pedido anterior | Intentar crear otro pedido | Pedido nuevo rechazado y pedido anterior conservado. | Planificado |
| CP-RF-13-3-01 | Principal | RF-13.3 | CU-19, CU-20 | Publicación vigente con medios derivados | Consultar catálogo y detalle como visitante | El perfil público presenta los productos publicados y sus condiciones completas. | Planificado |
| CP-RF-13-3-02 | Alternativo | RF-13.3 | CU-19, CU-20 | Borrador o original privado | Solicitar su contenido público | Contenido privado protegido. | Planificado |
| CP-RF-13-4-01 | Principal | RF-13.4 | CU-20 | U-C1, P-P1 versión 1, cantidad 2 y OP-CAT-01 | Confirmar pedido directo y repetir la intención | Confirmar una versión vigente genera un pedido con cantidad, precio unitario, total, moneda, plazo y condiciones conservados. | Planificado |
| CP-RF-13-4-02 | Alternativo | RF-13.4 | CU-20 | Versión cambiada o misma clave con cantidad 3 | Confirmar con condiciones obsoletas o contenido distinto | Conflicto y ausencia de segundo pedido. | Planificado |
| CP-RF-14-1-01 | Principal | RF-14.1 | CU-07, CU-15 | Trabajo y medios autorizados de M-M1 | Publicar un trabajo del portfolio | Un trabajo publicado aparece en el portfolio del maker titular. | Planificado |
| CP-RF-14-1-02 | Alternativo | RF-14.1 | CU-07, CU-15 | Evidencia privada de cliente sin autorización | Intentar publicarla | Publicación rechazada y evidencia protegida. | Planificado |
| CP-RF-14-2-01 | Principal | RF-14.2 | CU-15 | Portfolio con un trabajo publicado y otro retirado | Consultar como visitante | La consulta devuelve exclusivamente trabajos publicados y autorizados. | Planificado |
| CP-RF-14-2-02 | Alternativo | RF-14.2 | CU-15 | Identificador de trabajo retirado | Consultar su detalle público | Trabajo retirado sin presentación pública. | Planificado |
| CP-RF-15-1-01 | Principal | RF-15.1 | CU-16 | Pedido completado y criterios de prueba configurados | Valorar la contraparte una vez | Cada participante de un pedido completado registra una sola valoración de su contraparte. | Planificado |
| CP-RF-15-1-02 | Alternativo | RF-15.1 | CU-16 | Pedido cancelado o autor ajeno | Intentar publicar la valoración | Publicación denegada. | Planificado |
| CP-RF-15-2-01 | Principal | RF-15.2 | CU-16 | Valoraciones publicadas y ocultas conocidas | Consultar cantidad y promedio publicados | El resumen coincide con las valoraciones publicadas y sus criterios. | Planificado |
| CP-RF-15-2-02 | Alternativo | RF-15.2 | CU-16 | Cuenta sin valoraciones | Consultar su reputación | Cantidad cero y promedio ausente. | Planificado |
| CP-RF-15-3-01 | Principal | RF-15.3 | CU-07, CU-16 | A-A1 con capacidad y valoración publicada | Ocultar con motivo y consultar el agregado | Una ocultación autorizada retira la valoración del agregado público. | Planificado |
| CP-RF-15-3-02 | Alternativo | RF-15.3 | CU-07, CU-16 | Usuario sin capacidad administrativa | Solicitar la ocultación | Cambio rechazado y valoración original conservada. | Planificado |
| CP-RF-16-1-01 | Principal | RF-16.1 | CU-17 | U-C1 con pedidos personalizados y de catálogo | Filtrar y paginar el historial propio | Los filtros y el cursor devuelven únicamente pedidos propios en orden estable. | Planificado |
| CP-RF-16-1-02 | Alternativo | RF-16.1 | CU-17 | Pedido de U-C2 o cursor ajeno | Solicitarlo desde U-C1 | Historial ajeno protegido. | Planificado |
| CP-RF-17-1-01 | Principal | RF-17.1 | CU-18 | Datos conocidos de altas, pedidos y valoraciones | Consultar el reporte con intervalo y zona | Un conjunto de datos conocido produce los conteos, promedio y filtros esperados. | Planificado |
| CP-RF-17-1-02 | Alternativo | RF-17.1 | CU-18 | Rol maker o intervalo inválido | Solicitar el reporte | Consulta rechazada y datos administrativos protegidos. | Planificado |
| CP-MEM-01 | Regresión comercial | RF-12.2 | CU-09 | Maker registrado pero no habilitado | Consultar acceso y luego habilitar el perfil por el mecanismo acordado | El registro no consume prueba; primera habilitación crea un único período de 30 días propuestos. | Planificado |
| CP-MEM-02 | Regresión comercial | RF-12.3 | CU-10 | Cupo disponible y maker elegible | Asignar fundador y activar acceso inicial | Acceso inicial de 90 días totales como único beneficio gratuito; guardar autor y versión. | Planificado |
| CP-MEM-03 | Regresión comercial | RF-12.3 | CU-10 | Una plaza fundadora disponible y dos asignaciones concurrentes | Solicitar ambas asignaciones | Como máximo una usa la última plaza; no se excede el cupo. | Planificado |
| CP-MEM-04 | Regresión comercial | RF-12.5 | CU-11 | Plan vigente y maker autenticado | Alterar importe en el cliente e iniciar Checkout Pro | El backend usa el plan y conserva sus condiciones, sin confiar en el importe recibido. | Planificado |
| CP-MEM-05 | Regresión comercial | RF-12.6, RF-12.8 | CU-11 | Compra legítima y notificación verificable | Entregar webhook duplicado y fuera de orden | Consulta al proveedor y como máximo un período por compra confirmada. | Planificado |
| CP-MEM-06 | Regresión comercial | RF-12.6 | CU-11 | Retorno del navegador con supuesto éxito; proveedor pendiente | Volver desde Checkout Pro | Sin acceso pago hasta confirmación verificable. | Planificado |
| CP-MEM-07 | Regresión comercial | RF-12.9 | CU-11 | Acceso vigente y compra anticipada | Confirmar renovación antes del vencimiento | Aplicar inicio y calendario acordados sin consumir acceso ya adquirido ni duplicar renovaciones. | Planificado |
| CP-MEM-08 | Regresión comercial | RF-12.10 | CU-02, CU-04, CU-05, CU-06 | Maker con un pedido activo y acceso a punto de vencer | Vencer el acceso; intentar trabajo nuevo y terminar el activo | Nuevo trabajo restringido; chat, producción, revisión y entrega del existente disponibles. | Planificado |
| CP-MEM-09 | Regresión comercial | RF-12.14 | CU-11 | Entorno de simulación identificado | Confirmar una compra simulada e intentar usarla en producción | No concede acceso pago real; registros y señales identifican la simulación. | Planificado |
| CP-MEM-10 | Regresión comercial | RF-12.1, RF-12.13 | CU-12 | Compra anterior y plan con nuevo precio | Cambiar precio del plan | La compra anterior conserva sus condiciones; la nueva usa otra versión. | Planificado |
| CP-MEM-11 | Regresión comercial | RF-12.12 | CU-07 | Abono pagado y devolución autorizada | Solicitar devolución y procesar notificación | Estado conciliado según política aprobada; no se devuelve dinero de impresión ni se bloquea un pedido activo. | Planificado |
| CP-MEM-12 | Regresión comercial | RF-12.15 | CU-08, CU-11 | Maker durante prueba y cliente consultando un pedido | Revisar mensajes de precio, beneficio y checkout | Sin tarjeta obligatoria ni cobro automático de prueba; beneficio sin promesa de trabajos; pago de impresión explícitamente externo. | Planificado |
| CP-X-01 | Integración funcional | RF-04.4 | CU-03 | Solicitud con dos ofertas vigentes | Aceptar ambas de forma concurrente | Un único pedido, versión aceptada conservada y otras ofertas cerradas. | Planificado |
| CP-X-02 | Integración funcional | RF-13.4 | CU-20 | Producto consultado con versión 1 | Publicar versión 2 antes de confirmar la 1 | Conflicto y ausencia de solicitud, oferta o pedido parciales. | Planificado |
| CP-X-03 | Integración funcional | RF-13.4 | CU-20 | Pedido confirmado con clave K y cantidad 2 | Repetir K con cantidad 3 | Conflicto; se conserva el pedido de cantidad 2. | Planificado |
| CP-X-04 | Integración funcional | RF-12.10, RF-05.1 | CU-14, CU-20 | Maker vencido con pedido anterior y producto visible | Enviar mensaje del pedido y confirmar producto nuevo | Mensaje del pedido disponible y compra nueva rechazada. | Planificado |
| CP-X-05 | Integración funcional | RF-12.6, RF-12.8 | CU-11 | Compra pagada y mismo evento entregado varias veces | Procesar eventos repetidos y fuera de orden | Una compra conciliada y un único período concedido. | Planificado |
| CP-X-06 | Integración funcional | RF-16.1, RF-05.4 | CU-14, CU-17 | Dos clientes con pedidos y cursores diferentes | Consultar identificadores y cursor del otro usuario | Permisos y datos privados protegidos. | Planificado |
| CP-X-07 | Integración funcional | RF-06.4, RF-06.7 | CU-05, CU-06 | Revisión pendiente sin respuesta del cliente | Avanzar reloj y procesar recordatorios | Revisión pendiente; entrega y recepción sin cierre automático. | Planificado |
| CP-X-08 | Integración funcional | RF-04.6, RF-04.4 | CU-25, CU-03 | Oferta con contraoferta pendiente | Aceptar versión original mientras se resuelve el cambio | Un acuerdo consistente o conflicto; ninguna versión retroactiva altera el pedido. | Planificado |
| CP-X-09 | Integración funcional | RF-10.3, RF-10.4 | CU-24 | Archivo usado por revisión aprobada o producto contratado | Intentar reemplazar sus bytes con una autorización anterior | Contenido histórico conservado y acceso temporal revalidado. | Planificado |
| CP-X-10 | Integración funcional | RF-12.3 | CU-10 | Una plaza fundadora disponible | Asignar a dos makers concurrentemente | Cupo respetado y una concesión inicial por maker. | Planificado |
| CP-X-11 | Integración funcional | RF-12.9 | CU-11 | Dos compras distintas confirmadas para la misma membresía | Procesar sus concesiones concurrentemente | Ambas compras conservadas e intervalos serializados sin perder días. | Planificado |
| CP-X-12 | Integración funcional | RF-13.3, RF-14.2, RF-10.3 | CU-19, CU-15, CU-24 | Catálogo y portfolio con originales privados | Consultar como visitante y retirar una publicación | Únicamente derivados autorizados visibles y retiro aplicado a su presentación. | Planificado |

## Trazabilidad por requisito

| RF | Funcionalidades | Casos de uso | Datos principales | Pruebas |
| --- | --- | --- | --- | --- |
| RF-01.1 | F01 | CU-13 | `usuarios`, `usuario_roles`, `sesiones` | CP-RF-01-1-01, CP-RF-01-1-02 |
| RF-01.2 | F03 | CU-09, CU-21 | `makers`, `impresoras`, `materiales`, `capacidades_impresora` | CP-RF-01-2-01, CP-RF-01-2-02 |
| RF-01.3 | F02 | CU-22 | `clientes`, `ubicaciones` | CP-RF-01-3-01, CP-RF-01-3-02 |
| RF-01.4 | F01 | CU-13 | `usuarios`, `usuario_roles`, `sesiones` | CP-RF-01-4-01, CP-RF-01-4-02 |
| RF-01.5 | F01 | CU-13 | `usuarios`, `usuario_roles`, `sesiones` | CP-RF-01-5-01, CP-RF-01-5-02 |
| RF-02.1 | F05 | CU-01 | `solicitudes`, `solicitud_versiones`, `archivos`, `analisis_archivos` | CP-RF-02-1-01, CP-RF-02-1-02 |
| RF-02.2 | F05 | CU-01, CU-24 | `solicitudes`, `solicitud_versiones`, `archivos`, `analisis_archivos` | CP-RF-02-2-01, CP-RF-02-2-02 |
| RF-02.3 | F05 | CU-01 | `solicitudes`, `solicitud_versiones`, `archivos`, `analisis_archivos` | CP-RF-02-3-01, CP-RF-02-3-02 |
| RF-02.4 | F12, F19 | CU-17 | `pedidos`, `historial_pedidos`, `revisiones_resultado`, `condiciones_pedido` | CP-RF-02-4-01, CP-RF-02-4-02 |
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
| RF-06.4 | F22 | CU-05 | `decisiones_revision`, `revisiones_resultado` | CP-RF-06-4-01, CP-RF-06-4-02, CP-X-07 |
| RF-06.5 | F12 | CU-04 | `pedidos`, `historial_pedidos`, `revisiones_resultado` | CP-RF-06-5-01, CP-RF-06-5-02 |
| RF-06.6 | F16 | CU-06 | `entregas`, `puntos_encuentro`, `ubicaciones` | CP-RF-06-6-01, CP-RF-06-6-02 |
| RF-06.7 | F17 | CU-06 | `confirmaciones_entrega`, `entregas`, `pedidos` | CP-RF-06-7-01, CP-RF-06-7-02, CP-X-07 |
| RF-07.1 | F14 | CU-23 | `notificaciones`, `envios_notificacion`, `eventos_salida` | CP-RF-07-1-01, CP-RF-07-1-02 |
| RF-07.2 | F20 | CU-07 | `casos_soporte`, `auditoria`, `configuraciones_versiones` | CP-RF-07-2-01, CP-RF-07-2-02 |
| RF-07.3 | F14 | CU-23 | `notificaciones`, `envios_notificacion`, `eventos_salida` | CP-RF-07-3-01, CP-RF-07-3-02 |
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
| RF-13.1 | F25 | CU-19 | `productos_maker`, `producto_versiones`, `producto_archivos`, `solicitudes`, `oferta_versiones`, `pedidos` | CP-RF-13-1-01, CP-RF-13-1-02 |
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
