---
title: "Contratos propuestos de API y eventos"
---

# Contratos de API y eventos

Versión 3.0. Fecha: 25 de octubre de 2026. Prefijo común `/api/v1`. Los contratos funcionales se consolidan en OpenAPI durante la implementación.

## Representación y autorización

Los importes utilizan cadenas decimales y moneda explícita; las fechas identifican su zona y se conservan en UTC. Las colecciones utilizan cursores opacos y un orden estable. Cada operación comprueba identidad, rol, recurso, versión y capacidades. Los recursos públicos exponen únicamente los datos y derivados autorizados.

Las mutaciones sensibles conservan una clave estable y la huella del contenido. El mismo contenido recupera el resultado; otro contenido con la misma clave produce conflicto. La guía común está en [contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## Operaciones por funcionalidad

| Funcionalidad | Método y ruta | Operación | Entrada | Salida | Guarda |
| --- | --- | --- | --- | --- | --- |
| F01 | POST `/auth/registro` | Registrar identidad | identificador, secreto, perfiles públicos y aceptación de condiciones | identidad, perfiles y siguiente acción | Datos válidos; el registro público asigna únicamente cliente y maker. |
| F01 | POST `/auth/sesion` | Iniciar sesión | credenciales y tipo de cliente | identidad, capacidades y expiración | Cuenta habilitada y protección frente a intentos inválidos. |
| F01 | DELETE `/auth/sesion` | Cerrar sesión | sesión vigente | resultado de cierre | Retira o revoca la autorización conforme a la política. |
| F02 | GET `/clientes/me` | Consultar perfil propio | sesión | datos propios y versión | Cliente titular. |
| F02 | PATCH `/clientes/me` | Actualizar perfil | contacto, referencia de ubicación y versión | perfil y versión nueva | Titularidad, formato y concurrencia. |
| F03 | GET `/makers/{id}` | Consultar perfil público | maker_id | zona pública, capacidades, catálogo, portfolio y reputación | Contenido público vigente y precisión autorizada. |
| F03 | PATCH `/makers/me` | Actualizar perfil productivo | descripción, zona, disponibilidad y versión | perfil y capacidades | Maker titular. |
| F03 | POST `/makers/me/impresoras` | Registrar impresora | nombre, tecnología, dimensiones y estado | impresora_id | Dimensiones positivas y titularidad. |
| F03 | PATCH `/makers/me/impresoras/{id}` | Actualizar o desactivar impresora | dimensiones, estado y versión | impresora actualizada | Conserva referencias históricas. |
| F03 | PUT `/makers/me/impresoras/{id}/capacidades` | Mantener materiales y colores | capacidades y disponibilidad | capacidades válidas | Impresora propia y materiales habilitados. |
| F03 | POST `/makers/me/habilitacion` | Habilitar perfil | confirmación y clave de operación | perfil, beneficio inicial y fechas | Datos mínimos y concesión inicial única. |
| F04 | GET `/makers/{id}/portfolio` | Consultar trabajos publicados | cursor | trabajos y medios autorizados | Publicados y visibles. |
| F04 | POST `/makers/me/portfolio` | Crear trabajo | título, descripción y archivos autorizados | trabajo_id y versión | Maker titular. |
| F04 | PATCH `/makers/me/portfolio/{id}` | Editar o publicar trabajo | contenido, estado y versión | trabajo actualizado | Titularidad y autorización de medios. |
| F04 | DELETE `/makers/me/portfolio/{id}` | Retirar trabajo | versión | retiro lógico | Conservación de referencias y auditoría. |
| F05 | POST `/solicitudes` | Crear borrador personalizado | STL, unidad, material, color, cantidad, urgencia, descripción y ubicación | solicitud_id, versión y estado | Cliente titular y límites. |
| F05 | PATCH `/solicitudes/{id}` | Actualizar borrador o crear versión | campos y versión esperada | versión actualizada | Reglas de edición antes de contratación. |
| F05 | POST `/solicitudes/{id}/enviar` | Enviar solicitud | versión y clave de operación | solicitud enviada y ronda | Archivo habilitado y especificaciones completas. |
| F06 | GET `/solicitudes/{id}/estimacion` | Consultar estimación automática | versión de solicitud | importe o rango, moneda, método, entradas y estado | Cliente titular; motivo explícito si no está disponible. |
| F07 | GET `/makers` | Consultar candidatos | referencia geográfica, material, capacidad y cursor | candidatos y precisión de zona | Política de búsqueda y privacidad. |
| F08 | GET `/makers/me/invitaciones` | Consultar invitaciones propias | estado y cursor | invitaciones autorizadas | Maker destinatario. |
| F08 | GET `/invitaciones/{id}` | Consultar solicitud invitada | invitacion_id | especificaciones y capacidades de acción | Maker invitado; archivos autorizados. |
| F09 | POST `/invitaciones/{id}/rechazo` | Rechazar invitación | motivo opcional y clave de operación | estado de invitación | Destinatario y estado vigente. |
| F09 | GET `/solicitudes/{id}/ofertas` | Comparar ofertas | filtros y cursor | versiones, condiciones y vencimientos | Cliente titular. |
| F09 | POST `/solicitudes/{id}/ofertas` | Presentar oferta | versión de solicitud, precio total, moneda, plazo, condiciones y vigencia | oferta_id y versión | Maker invitado y habilitado. |
| F09 | POST `/ofertas/{id}/versiones` | Publicar versión de oferta | versión esperada y condiciones nuevas | versión publicada | Maker titular; conserva las anteriores. |
| F09 | POST `/ofertas/{id}/propuestas-cambio` | Proponer contraoferta | versión, precio total, moneda, plazo y observación | propuesta_id y estado | Cliente titular y oferta vigente. |
| F09 | POST `/propuestas-cambio/{id}/resolucion` | Resolver contraoferta | decisión y versión esperada | respuesta y versión resultante | Maker titular; crea versión si acepta. |
| F10 | POST `/ofertas/{id}/aceptar` | Confirmar oferta | versión y clave estable | pedido_id y condiciones | Aceptación atómica, identidad y vigencia. |
| F11 | GET `/planes/membresia` | Consultar plan | modo y entorno | condiciones publicadas | Un único plan inicial. |
| F11 | GET `/makers/me/membresia` | Consultar acceso propio | sesión | beneficio, períodos y vencimiento | Maker titular. |
| F11 | GET `/makers/me/membresia/compras` | Consultar compras propias | cursor | compras autorizadas | Maker titular. |
| F11 | POST `/makers/me/membresia/compras` | Crear compra del abono | versión de plan y clave estable | compra_id y condiciones conservadas | Backend determina importe, moneda y duración. |
| F11 | POST `/compras-membresia/{id}/checkout` | Preparar o recuperar checkout | compra_id y clave estable | referencia y enlace del proveedor | Compra propia; resultado incierto se concilia. |
| F11 | GET `/compras-membresia/{id}` | Consultar compra verificada | compra_id | estado y períodos concedidos | Titular o administración con capacidad. |
| F11 | POST `/webhooks/mercadopago` | Recibir notificación | firma, contexto y referencia externa | recepción duradera | Validación del proveedor y consulta de su recurso. |
| F11 | POST `/admin/compras-membresia/{id}/conciliacion` | Conciliar compra | motivo y referencia | resultado verificado | Capacidad administrativa y auditoría. |
| F11 | POST `/admin/compras-membresia/{id}/devoluciones` | Solicitar devolución de abono | motivo, importe autorizado y clave estable | operación y estado | Política PD-09 y resultado conciliado. |
| F11 | PATCH `/admin/configuracion/membresia` | Versionar plan y beneficios | parámetros, versión y motivo | configuración nueva | Permiso específico; conserva operaciones anteriores. |
| F11 | POST `/admin/makers/{id}/fundador` | Asignar fundador | configuración y motivo | asignación y cupo | Elegibilidad y consumo atómico de cupo. |
| F12 | GET `/makers/me/cola` | Consultar cola propia | estado y cursor | pedidos y acciones permitidas | Orden estable por confirmación e identidad. |
| F12 | GET `/pedidos/{id}` | Consultar pedido | pedido_id | condiciones, historial, revisión y entrega | Participante autorizado. |
| F12 | POST `/pedidos/{id}/transiciones` | Actualizar avance | estado destino, versión, motivo y clave estable | estado e historial | Transición y actor permitidos. |
| F13 | GET `/conversaciones` | Consultar bandeja propia | cursor | conversaciones de pedidos confirmados | Participante de cada pedido. |
| F13 | GET `/pedidos/{id}/conversacion` | Abrir conversación del pedido | pedido_id | conversación y capacidades | Pedido confirmado y participante autorizado. |
| F13 | GET `/conversaciones/{id}/mensajes` | Recuperar mensajes | cursor | mensajes y cursor siguiente | Revalida participación y conservación. |
| F13 | POST `/conversaciones/{id}/mensajes` | Enviar mensaje | clave_cliente, texto y archivo_ids | mensaje_id y fecha | Persistencia antes de confirmar y deduplicación. |
| F14 | GET `/notificaciones` | Consultar avisos | cursor y filtro leído | avisos propios y cursor | Destinatario autenticado. |
| F14 | PATCH `/notificaciones/{id}` | Marcar aviso leído | leido y versión | estado leído | Aviso del destinatario. |
| F15 | POST `/pedidos/{id}/evidencias` | Preparar revisión | archivo_ids y observación | revision_id y estado | Maker del pedido y archivos habilitados. |
| F15 | POST `/revisiones/{id}/presentar` | Presentar revisión | versión y clave estable | revisión pendiente y aviso | Maker titular y evidencia completa. |
| F16 | POST `/pedidos/{id}/entrega` | Proponer encuentro | punto, horario y versión | entrega y propuesta | Revisión aprobada y participante. |
| F16 | POST `/entregas/{id}/acuerdo` | Aceptar propuesta de encuentro | versión y clave estable | acuerdo vigente | Contraparte de quien propuso. |
| F17 | POST `/entregas/{id}/completar` | Confirmar recepción | versión y clave estable | recepción y pedido completado | Cliente titular y revisión/acuerdo vigentes. |
| F18 | POST `/pedidos/{id}/valoraciones` | Valorar contraparte | configuración, criterios, comentario y clave estable | valoracion_id y puntaje | Pedido completado y unicidad por autor. |
| F18 | GET `/makers/{id}/reputacion` | Consultar reputación pública | cursor | cantidad, escala, promedio y valoraciones visibles | Agregado de valoraciones publicadas. |
| F18 | GET `/pedidos/{id}/valoraciones` | Consultar valoraciones del pedido | pedido_id | valoraciones autorizadas | Participantes o soporte con capacidad. |
| F18 | POST `/admin/valoraciones/{id}/moderacion` | Moderar valoración | ocultar o restituir, versión y motivo | visibilidad y auditoría | Capacidad específica. |
| F19 | GET `/pedidos` | Consultar historial propio | rol, estado, origen, desde, hasta, referencia y cursor | pedidos propios y cursor | Ámbito autorizado y orden estable. |
| F20 | GET `/admin/casos` | Consultar soporte | filtros y cursor | casos autorizados | Capacidad administrativa. |
| F20 | POST `/admin/casos/{id}/intervenciones` | Intervenir recurso | acción, recurso, versión, motivo y clave estable | resultado y auditoría | Permiso específico y validación del caso de uso. |
| F20 | POST `/admin/publicaciones/{tipo}/{id}/moderacion` | Moderar publicación | acción, versión y motivo | estado público y auditoría | Catálogo o portfolio; permiso específico. |
| F21 | GET `/admin/reportes/actividad` | Consultar indicadores | desde inclusivo, hasta exclusivo y zona horaria | indicadores, filtros, fecha y fuentes | Capacidad administrativa y período válido. |
| F22 | POST `/revisiones/{id}/decisiones` | Aprobar o registrar observaciones | versión, decisión, comentario y clave estable | decisión y estado del pedido | Cliente titular y revisión actual pendiente. |
| F23 | POST `/archivos/autorizaciones` | Autorizar transferencia | contexto, finalidad, nombre, tipo y tamaño declarado | archivo_id y autorización temporal | Permiso sobre recurso y cuotas. |
| F23 | POST `/archivos/{id}/finalizacion` | Completar transferencia | integridad y referencia de objeto | estado de validación | Propietario o actor autorizado del recurso. |
| F23 | GET `/archivos/{id}/acceso` | Obtener acceso autorizado | archivo_id y contexto | acceso temporal o derivado autorizado | Finalidad, permisos y estado del archivo. |
| F23 | DELETE `/archivos/{id}` | Solicitar retiro | motivo y versión | retiro lógico o condición de conservación | Propiedad y política de referencias. |
| F24 | GET `/eventos` | Recuperar cambios autorizados | cursor y ámbitos permitidos | eventos identificados y cursor | Reautorización por recurso y recuperación tras reconexión. |
| F25 | GET `/makers/{id}/productos` | Consultar catálogo público | cursor | productos publicados y condiciones actuales | Visibilidad pública autorizada. |
| F25 | GET `/productos/{id}` | Consultar producto | producto_id | versión, configuración, precio y disponibilidad de pedido | Publicación visible y medios derivados. |
| F25 | POST `/makers/me/productos` | Crear borrador de producto | configuración, precio, moneda, cantidades, plazo y condiciones | producto_id y versión | Maker titular y campos válidos. |
| F25 | PATCH `/makers/me/productos/{id}` | Editar condiciones de producto | versión esperada y condiciones | versión actualizada | Conserva versiones publicadas anteriores. |
| F25 | POST `/makers/me/productos/{id}/publicacion` | Publicar, pausar o retirar | acción y versión | estado de publicación | Acceso comercial para admitir pedidos nuevos. |
| F25 | POST `/productos/{id}/pedidos` | Confirmar pedido directo | versión, cantidad y clave estable | pedido y condiciones conservadas | Precio del servidor, versión vigente e idempotencia. |

## Pedidos personalizados y de catálogo

La aceptación de una oferta y la confirmación de un producto aplican la misma unicidad por solicitud y conservan sus condiciones. El producto de catálogo utiliza una versión publicada y un precio unitario del servidor. Su confirmación materializa el acuerdo en una transacción y habilita la conversación desde el pedido confirmado.

## Membresía y conciliación

La compra del abono conserva plan, importe, moneda, duración, modo y entorno. La notificación se persiste y se verifica con el recurso del proveedor antes de conceder un período. Dos compras distintas se conservan; un mismo evento se deduplica. Las renovaciones serializan los intervalos y conservan el acceso vigente según la configuración contratada.

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
