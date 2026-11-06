---
title: "Contratos propuestos de API y eventos"
---

# Contratos de API y eventos

Versión 3.0. Fecha: 25 de octubre de 2026. Prefijo común `/api/v1`. Los contratos funcionales se conservan en el OpenAPI publicado y se verifican durante la implementación.

## Representación y autorización

Los importes utilizan cadenas decimales y moneda explícita; las fechas identifican su zona y se conservan en UTC. Los listados paginados utilizan cursores opacos y un orden estable. El parámetro limit admite enteros de 1 a 100 y vale 20 por defecto. Cada operación comprueba identidad, rol, recurso, versión y capacidades. Los recursos públicos exponen únicamente los datos y derivados autorizados.

Las mutaciones sensibles conservan una clave estable y la huella del contenido. El mismo contenido recupera el resultado; otro contenido con la misma clave produce conflicto. La guía común está en [contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

El contexto Cliente/Maker se conserva por pestaña o instancia sobre la misma identidad. Los listados compartidos requieren rol y filtran por participación; FastAPI valida asignación y propiedad. [F01](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/) y los contratos compartidos detallan el selector y la separación de datos locales.

## Operaciones por funcionalidad

| Funcionalidad | Método y ruta | Operación | Entrada | Salida | Guarda |
| --- | --- | --- | --- | --- | --- |
| F01 | POST `/auth/registro` | Registrar identidad | identificador, secreto y aceptación de condiciones | identidad, perfil Cliente y siguiente acción | El servidor asigna Cliente y rechaza campos de roles ajenos al contrato. |
| F01 | POST `/auth/sesion` | Iniciar sesión | credenciales y tipo de cliente | identidad, capacidades y expiración | Cuenta habilitada. Con cinco fallos en los últimos 60 segundos para el mismo correo, los intentos siguientes reciben 429 y Retry-After. |
| F01 | DELETE `/auth/sesion` | Cerrar sesión | sesión vigente | resultado de cierre | Retira o revoca la autorización conforme a la política. |
| F02 | GET `/clientes/me` | Consultar perfil propio | sesión | datos propios y versión | Cliente titular. |
| F02 | PATCH `/clientes/me` | Actualizar perfil | contacto, referencia de ubicación y versión | perfil y versión nueva | Titularidad, formato y concurrencia. |
| F03 | GET `/makers/{id}` | Consultar perfil público | maker_id | zona pública, punto representativo de 1 km, capacidades, catálogo, portfolio y reputación | Contenido público vigente y precisión autorizada. |
| F03 | POST `/makers/me` | Crear mi perfil maker | nombre_publico y clave de operación | perfil propio pendiente y rol maker asignado | Cliente titular activo; creación única por usuario; conserva Cliente y beneficios previos. |
| F03 | PATCH `/makers/me` | Actualizar perfil productivo | nombre público, descripción, zona, disponibilidad y versión | perfil y capacidades | Maker titular. |
| F03 | POST `/makers/me/impresoras` | Registrar impresora | nombre, tecnología, dimensiones y estado | impresora_id | Dimensiones positivas y titularidad. |
| F03 | PATCH `/makers/me/impresoras/{id}` | Actualizar o desactivar impresora | dimensiones, estado y versión | impresora actualizada | Conserva referencias históricas. |
| F03 | PUT `/makers/me/impresoras/{id}/capacidades` | Mantener materiales y colores | capacidades y disponibilidad | capacidades válidas | Impresora propia y materiales habilitados. |
| F03 | POST `/makers/me/habilitacion` | Habilitar perfil | confirmación y clave de operación | perfil, beneficio inicial y fechas | Datos mínimos y concesión inicial única. |
| F04 | GET `/makers/{id}/portfolio` | Consultar trabajos publicados | cursor | trabajos y medios autorizados | Publicados y visibles. |
| F04 | POST `/makers/me/portfolio` | Crear trabajo | título, descripción e imágenes autorizadas | trabajo_id y versión | Maker titular, imágenes JPEG o PNG habilitadas y cantidad dentro del límite vigente. |
| F04 | PATCH `/makers/me/portfolio/{id}` | Editar o publicar trabajo | contenido, estado y versión | trabajo actualizado | Titularidad, formato, autorización de publicación y cantidad de fotos del trabajo resultante. |
| F04 | DELETE `/makers/me/portfolio/{id}` | Retirar trabajo | versión | retiro lógico | Conservación de referencias y auditoría. |
| F05 | POST `/solicitudes` | Crear borrador personalizado | STL, unidad, material, color, cantidad, urgencia, descripción y ubicación | solicitud_id, versión, estado y vencimiento del borrador | Cliente titular y límites. |
| F05 | PATCH `/solicitudes/{id}` | Actualizar borrador o crear versión | campos y versión esperada | versión actualizada y vencimiento | Titular y versión vigente. El guardado renueva los 90 días del borrador. Tras el envío, edición de fabricación hasta la primera oferta según PD-05. |
| F05 | POST `/solicitudes/{id}/enviar` | Enviar solicitud | versión y clave de operación | solicitud enviada, vencimiento a siete días y ronda | Borrador vigente, archivo habilitado, especificaciones completas y referencia en CABA. Radio inicial configurable de 10 km y máximo inicial configurable de cinco makers elegibles por ronda. Si faltan candidatos, conserva el radio aplicado. |
| F06 | GET `/solicitudes/{id}/estimacion` | Consultar estimación automática | versión de solicitud | importe o rango orientativo según PD-03, moneda, método, supuestos y estado | Cliente titular y plazo de PD-12. Si se agota el máximo de análisis, inicialmente 60 segundos, devuelve la estimación indisponible con la causa. |
| F07 | GET `/makers` | Consultar candidatos | referencia geográfica, material, capacidad y cursor | candidatos y punto representativo de la zona pública de 1 km | Política de búsqueda, perímetro de CABA y privacidad. |
| F08 | POST `/solicitudes/{id}/rondas` | Volver a buscar makers | versión esperada, última ronda vacía y clave estable | solicitud y nueva ronda con el mismo radio | Cliente titular y solicitud abierta y vigente. Disponible al terminar la última ronda de la versión con cero invitados. |
| F08 | GET `/makers/me/invitaciones` | Consultar invitaciones propias | estado y cursor | invitaciones autorizadas | Maker destinatario y ventana de PD-12 aplicada antes de paginar. |
| F08 | GET `/invitaciones/{id}` | Consultar solicitud invitada | invitacion_id | especificaciones y capacidades de acción | Maker invitado, archivos autorizados y ventana de acceso de PD-12. |
| F09 | POST `/invitaciones/{id}/rechazo` | Rechazar invitación | motivo opcional y clave de operación | estado de invitación | Destinatario y estado vigente. |
| F09 | GET `/solicitudes/{id}/ofertas` | Comparar ofertas | filtros y cursor | versiones, condiciones y vencimientos | Cliente titular y plazo de PD-12. |
| F09 | POST `/solicitudes/{id}/ofertas` | Presentar oferta | versión de solicitud, precio total, moneda, plazo y condiciones | oferta_id, versión y vencimiento | Maker habilitado con invitación vigente para la versión actual de la solicitud. El backend calcula el vencimiento y registra el evento del aviso interno y el correo al cliente. |
| F09 | POST `/ofertas/{id}/versiones` | Publicar versión de oferta | versión esperada y condiciones nuevas | versión publicada | Maker titular. Conserva las versiones anteriores y registra el evento del aviso para los canales habilitados. |
| F09 | POST `/ofertas/{id}/propuestas-cambio` | Proponer contraoferta | versión, precio total, moneda, plazo y observación | propuesta_id y estado | Cliente titular y oferta vigente. |
| F09 | POST `/propuestas-cambio/{id}/resolucion` | Resolver contraoferta | decisión y versión esperada | respuesta y versión resultante | Maker titular. Si acepta, crea la versión y registra el evento del aviso para los canales habilitados. |
| F10 | POST `/ofertas/{id}/aceptar` | Confirmar oferta | versión y clave estable | pedido_id y condiciones | Aceptación atómica, identidad, vigencias de oferta y solicitud y cobertura de CABA. Registra el evento de aviso a cliente y maker. |
| F11 | GET `/planes/membresia` | Consultar plan | modo y entorno | condiciones publicadas | Un único plan inicial. |
| F11 | GET `/makers/me/membresia` | Consultar acceso propio | sesión | beneficio, períodos y vencimiento | Maker titular. |
| F11 | GET `/makers/me/membresia/compras` | Consultar compras propias | cursor | compras autorizadas | Maker titular. |
| F11 | POST `/makers/me/membresia/compras` | Crear compra del abono | versión de plan y clave estable | compra_id y condiciones conservadas | Acceso vencido; backend determina importe, moneda y duración. |
| F11 | POST `/compras-membresia/{id}/checkout` | Preparar o recuperar checkout | compra_id y clave estable | referencia y enlace del proveedor | Compra propia y acceso vencido; resultado incierto se concilia. |
| F11 | GET `/compras-membresia/{id}` | Consultar compra verificada | compra_id | estado y períodos concedidos | Titular o administración con capacidad. |
| F11 | POST `/webhooks/mercadopago` | Recibir notificación | firma, contexto y referencia externa | recepción duradera | Validación del proveedor y consulta de su recurso. |
| F11 | POST `/admin/compras-membresia/{id}/conciliacion` | Conciliar compra | motivo y referencia | resultado verificado | Capacidad administrativa y auditoría. |
| F11 | POST `/admin/compras-membresia/{id}/devoluciones` | Solicitar devolución total de abono | caso_id, motivo y clave estable | operación, importe total y estado | Caso autorizado del mismo pago; capacidad administrativa; importe del cobro original y conciliación. |
| F11 | PATCH `/admin/configuracion/membresia` | Versionar plan y beneficios | parámetros, versión y motivo | configuración nueva | Permiso específico; conserva operaciones anteriores. |
| F11 | POST `/admin/makers/{id}/fundador` | Asignar fundador | configuración y motivo | asignación y cupo | Elegibilidad y consumo atómico de cupo. |
| F12 | GET `/makers/me/cola` | Consultar cola propia | estado y cursor | pedidos y acciones permitidas | Orden estable por confirmación e identidad. |
| F12 | GET `/solicitudes/{id}` | Consultar solicitud | solicitud_id | versión, estado, vencimiento, última ronda y acciones permitidas | Cliente titular y ventana de acceso de PD-12. |
| F12 | GET `/pedidos/{id}` | Consultar pedido | pedido_id | condiciones, historial, revisión, entrega y casos de seguimiento | Participante autorizado y ventana de acceso de PD-12, incluidos los pedidos cancelados durante los 12 meses desde la cancelación. |
| F12 | POST `/pedidos/{id}/transiciones` | Actualizar avance | estado destino, versión, motivo y clave estable | estado e historial | Transición y actor permitidos. |
| F13 | GET `/conversaciones` | Consultar bandeja propia | rol obligatorio y cursor | conversaciones de pedidos confirmados en ese rol | Rol asignado, participante de cada pedido y ventana de acceso de PD-12. Cursor vinculado al contexto. |
| F13 | GET `/pedidos/{id}/conversacion` | Abrir conversación del pedido | pedido_id | conversación y capacidades | Conversación asociada a un pedido que se confirmó, participante autorizado y ventana de acceso de PD-12. |
| F13 | GET `/conversaciones/{id}/mensajes` | Recuperar mensajes | cursor | mensajes y cursor siguiente | Revalida participación y ventana de acceso de PD-12. |
| F13 | POST `/conversaciones/{id}/mensajes` | Enviar mensaje | clave_cliente, texto y archivo_ids | mensaje_id y fecha | Ventana de acceso de PD-12, capacidad de envío, hasta 4.000 caracteres de texto y hasta cinco adjuntos distintos y autorizados. Un pedido completado o cancelado dentro de la ventana de consulta devuelve `409 chat_read_only`. Persistencia antes de confirmar y deduplicación. |
| F14 | GET `/notificaciones` | Consultar avisos | cursor y filtro leído | avisos propios y cursor | Destinatario autenticado. |
| F14 | PATCH `/notificaciones/{id}` | Marcar aviso leído | leido y versión | estado leído | Aviso visible en la app para el destinatario. |
| F14 | GET `/notificaciones/preferencias` | Consultar preferencias propias | sesión | canales, valores por defecto y obligatoriedad por tipo | Cuenta autenticada. |
| F14 | PUT `/notificaciones/preferencias/{tipo}/{canal}` | Cambiar un canal opcional | tipo, canal y activo | preferencia efectiva | Cuenta autenticada y canal opcional. |
| F15 | POST `/pedidos/{id}/evidencias` | Preparar revisión | archivo_ids y observación | revision_id y estado | Maker del pedido y hasta cinco imágenes JPEG o PNG habilitadas como evidencia para ese pedido. |
| F15 | POST `/revisiones/{id}/presentar` | Presentar revisión | versión y clave estable | revisión pendiente y aviso | Maker titular y evidencia completa. Una revisión vigente pendiente impide otra presentación. La presentación programa avisos internos y correos a las 24 y 48 horas según PD-07. |
| F16 | POST `/pedidos/{id}/entrega` | Proponer encuentro | punto, horario y versión | entrega y propuesta | Revisión aprobada y participante. El cambio de un acuerdo requiere cupo según PD-08. |
| F16 | POST `/entregas/{id}/acuerdo` | Aceptar propuesta de encuentro | versión y clave estable | acuerdo vigente | Contraparte de quien propuso. Un cambio aceptado consume una reprogramación según PD-08. |
| F17 | POST `/entregas/{id}/completar` | Confirmar recepción | versión y clave estable | recepción y pedido completado | Cliente titular, pedido y entrega abiertos, y revisión y acuerdo vigentes. |
| F18 | POST `/pedidos/{id}/valoraciones` | Valorar contraparte | configuración, criterios, comentario y clave estable | valoracion_id y puntaje | Una valoración por autor y pedido completado. |
| F18 | GET `/makers/{id}/reputacion` | Consultar reputación pública | cursor | cantidad, escala, promedio y valoraciones visibles | Agregado de valoraciones publicadas. |
| F18 | GET `/pedidos/{id}/valoraciones` | Consultar valoraciones del pedido | pedido_id | valoraciones autorizadas | Participantes o soporte con capacidad. |
| F18 | POST `/admin/valoraciones/{id}/moderacion` | Moderar valoración | ocultar o restituir, versión y motivo | visibilidad y auditoría | Capacidad específica. |
| F19 | GET `/pedidos` | Consultar historial propio | rol obligatorio, estado, origen, desde, hasta, referencia y cursor | pedidos propios en ese rol y cursor | Rol asignado y ámbito autorizado. Aplica la ventana de acceso de PD-12 antes de paginar. Orden estable y cursor vinculado al contexto. |
| F20 | GET `/admin/casos` | Consultar soporte | filtros y cursor | casos autorizados | Capacidad administrativa. |
| F20 | POST `/admin/casos` | Registrar caso de soporte | tipo, descripción, reportado_por, referencias y clave estable | caso_id y estado inicial | Capacidad de soporte; referencias del mismo contexto y auditoría. Para `inasistencia_entrega`, requiere el pedido y conserva la versión del encuentro en auditoría. El seguimiento de revisión usa su operación dedicada. |
| F20 | POST `/admin/casos/{id}/intervenciones` | Intervenir recurso | acción, recurso, versión, motivo y clave estable | resultado y auditoría | Permiso específico y validación del caso de uso. La acción `cancelar_pedido_por_inasistencia` usa el pedido vinculado al caso y comprueba su versión, el permiso específico, el incidente revisado, el motivo y las condiciones de PD-08. Para seguimiento de revisión, `aprobar_reapertura` y `rechazar_reapertura` usan la versión del caso y un motivo obligatorio. Ambas decisiones conservan la revisión vigente. |
| F20 | POST `/admin/publicaciones/{tipo}/{id}/moderacion` | Moderar publicación | acción, versión y motivo | estado público y auditoría | Catálogo o portfolio; permiso específico. |
| F21 | GET `/admin/reportes/actividad` | Consultar indicadores | desde inclusivo, hasta exclusivo y zona horaria | indicadores, filtros, fecha y fuentes | Capacidad administrativa y período válido. |
| F22 | POST `/revisiones/{id}/decisiones` | Aprobar o registrar observaciones | versión, decisión, comentario y clave estable | decisión y estado del pedido | Cliente titular y revisión actual pendiente. |
| F22 | POST `/revisiones/{id}/seguimiento-soporte` | Solicitar seguimiento a soporte | versión esperada, acción y clave estable | id y estado del caso | Cliente o maker del pedido. Revisión vigente y pendiente con al menos 72 horas desde su presentación. Devuelve 201 al crear el caso único y 200 al recuperar el existente o al registrar una solicitud de reapertura. Tras el rechazo definitivo, una solicitud nueva devuelve `409 reopen_rejected`. |
| F23 | POST `/archivos/autorizaciones` | Autorizar transferencia | contexto, finalidad, nombre, tipo y tamaño declarado | archivo_id y autorización temporal | Permiso sobre recurso y cuotas. La finalidad chat requiere capacidad de envío vigente y admite JPEG, PNG y PDF, con hasta 10 MiB declarados por archivo. Las finalidades evidencia, producto_presentacion y portfolio admiten JPEG y PNG con el mismo límite por archivo. |
| F23 | POST `/archivos/{id}/finalizacion` | Completar transferencia | integridad y referencia de objeto | estado de validación | Propietario o actor autorizado del recurso. Comprueba integridad, formato y tamaño real del objeto antes de habilitarlo. |
| F23 | GET `/archivos/{id}/acceso` | Obtener acceso autorizado | archivo_id y contexto | enlace privado de descarga con `expires_at` a los 300 segundos de su emisión o derivado autorizado | Finalidad, permisos vigentes, estado del archivo y plazo según PD-12. El STL de una solicitud vencida sin pedido usa `expira_en` para el plazo de 90 días. Para adjuntos del chat, comprueba el plazo de 12 meses desde el cierre del pedido completado o desde su cancelación. |
| F23 | DELETE `/archivos/{id}` | Solicitar retiro | motivo y versión | retiro lógico o condición de conservación | Propiedad y política de referencias. |
| F24 | GET `/eventos` | Recuperar cambios autorizados | cursor y ámbitos permitidos | eventos identificados y cursor | Reautorización por recurso y recuperación tras reconexión. Los eventos del chat y de solicitudes vencidas respetan sus plazos de PD-12. |
| F25 | GET `/makers/{id}/productos` | Consultar catálogo público | cursor | productos publicados y condiciones actuales | Visibilidad pública autorizada. |
| F25 | GET `/productos/{id}` | Consultar producto | producto_id | versión, configuración, precio y disponibilidad de pedido | Publicación visible y medios derivados. |
| F25 | GET `/makers/me/productos` | Consultar Mis productos | cursor y límite | productos propios con sus borradores vigentes | Sesión con perfil maker y titularidad. |
| F25 | POST `/makers/me/productos` | Crear borrador de producto | configuración, precio, moneda, cantidades, plazo, condiciones y archivos opcionales | producto_id y versión | Maker titular, archivos habilitados y cantidad de fotos dentro del límite vigente. |
| F25 | PATCH `/makers/me/productos/{id}` | Editar condiciones de producto | versión esperada, condiciones y archivos opcionales | versión actualizada | Comprueba finalidad, permiso y límite de fotos de la versión resultante. Exige vigencia del borrador y conserva las versiones publicadas anteriores. |
| F25 | POST `/makers/me/productos/{id}/publicacion` | Publicar, pausar o retirar | acción y versión | estado de publicación | Exige vigencia del borrador, límite de fotos y acceso comercial al publicar. Pausar o retirar aplica las guardas de esas acciones. |
| F25 | POST `/productos/{id}/pedidos` | Confirmar pedido directo | versión, cantidad y clave estable | pedido y condiciones conservadas | Precio del servidor, versión vigente, cobertura de CABA e idempotencia. Registra el evento de aviso a cliente y maker. |

## Pedidos personalizados y de catálogo

La aceptación de una oferta y la confirmación de un producto aplican la misma unicidad por solicitud y conservan sus condiciones. El producto de catálogo utiliza una versión publicada y un precio unitario del servidor. Su confirmación materializa el acuerdo en una transacción y habilita la conversación desde el pedido confirmado.

## Membresía y conciliación

La compra del abono conserva plan, importe, moneda, duración, modo y entorno. La notificación se persiste y se verifica con el recurso del proveedor antes de conceder un período. Dos compras distintas se conservan; un mismo evento se deduplica. La renovación se habilita con acceso vencido; crear compra y preparar checkout comprueban esa condición. El período parte de la primera confirmación verificada del pago y suma la duración configurable de 30 días. Un cobro adicional de otra compra se identifica para conciliación autorizada.

## Eventos de negocio

| Evento | Recurso y uso |
| --- | --- |
| PerfilMakerHabilitado | Perfil y único beneficio inicial. |
| FundadorAsignado | Asignación autorizada y cupo. |
| SolicitudEnviada | Solicitud personalizada y ronda de candidatos. |
| OfertaVersionPublicada | Condiciones y vigencia de la oferta. |
| PropuestaCambioOfertaResuelta | Contraoferta y versión resultante. |
| ProductoPublicado / ProductoRetirado | Versión y disponibilidad pública. |
| PedidoConfirmado | Acuerdo único y habilitación de conversación. |
| MensajeCreado | Mensaje persistido y aviso a la contraparte. |
| EvidenciaPresentada / RevisionRegistrada | Revisión y decisión expresa. |
| EntregaConfirmada | Recepción del cliente y cierre. |
| ValoracionPublicada / ValoracionModerada | Reputación y agregado autorizado. |
| CompraMembresiaCreada / PagoAbonoVerificado | Cobro propio y resultado verificado. |
| PeriodoMembresiaConcedido / AccesoMakerVencido | Acceso comercial y avisos. |

Cada evento conserva ID, versión, fecha, recurso y correlación. El hecho de negocio y su evento de salida se persisten juntos; el envío externo se recupera por trabajo idempotente.

## Errores funcionales

| Código | Tratamiento |
| --- | --- |
| VALIDACION | Campos, formato, cantidades, escala o condiciones incompletas. |
| SIN_PERMISO | Identidad o autorización insuficientes; protección del recurso. |
| VERSION_MODIFICADA | Recuperar condiciones actuales antes de confirmar. |
| RECURSO_CERRADO | Solicitud, oferta, publicación o revisión fuera de su estado permitido. |
| ACCESO_COMERCIAL_VENCIDO | Restricción de trabajos nuevos y continuidad de pedidos existentes. |
| OPERACION_EN_CONFLICTO | Clave reutilizada con otro contenido o resultado concurrente. |
| RESULTADO_EXTERNO_PENDIENTE | Consultar o conciliar la operación identificada. |

Las respuestas y salidas por funcionalidad están en [las specs](/3daltoque-docs/specs/).

## Contrato intercambiable

[OpenAPI 3.1](/3daltoque-docs/documentos/e37598f41824-openapi.json) contiene las 83 operaciones funcionales y dos controles técnicos. Los [contratos operativos](/3daltoque-docs/diseno/contratos-operativos/) completan autenticación, tiempos, recuperación y versionado de las siete integraciones.

## Correspondencia de errores de dominio y HTTP

| Condición | HTTP y code | Recuperación |
| --- | --- | --- |
| VALIDACION | 422 validation_failed | Corregir los campos indicados. |
| SIN_PERMISO | 401 authentication_required, 403 action_forbidden o 404 resource_unavailable según el contexto | Recuperar sesión o utilizar una acción autorizada. |
| VERSION_MODIFICADA | 409 version_conflict | Consultar la versión vigente. |
| RECURSO_CERRADO | 409 request_closed u offer_expired | Recuperar alternativas válidas. |
| Chat de pedido completado o cancelado | 409 chat_read_only | Detener el envío y los reintentos. Actualizar la conversación en solo lectura. |
| Reapertura rechazada | 409 reopen_rejected | Mostrar el caso cerrado y su decisión definitiva para esa revisión. |
| ACCESO_COMERCIAL_VENCIDO | 409 membership_required | Renovar para acuerdos nuevos; continuar los existentes. |
| ACCESO_COMERCIAL_VIGENTE | 409 membership_active | Consultar el vencimiento; la renovación se habilita al terminar el acceso. |
| OPERACION_EN_CONFLICTO | 409 idempotency_conflict | Consultar la intención original y su contenido. |
| RESULTADO_EXTERNO_PENDIENTE | Recurso consultable con 200/202; una falla temporal puede devolver 503 integration_unavailable | Consultar o conciliar la misma compra. |

La selección de Better Auth requiere adaptar el bloque de autenticación de F01. [ADR-004](/3daltoque-docs/decisiones/autenticacion-better-auth/) identifica ese trabajo y la correspondencia pendiente con las rutas nativas del proveedor.
