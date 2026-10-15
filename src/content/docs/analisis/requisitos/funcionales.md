---
title: "Requerimientos funcionales"
description: "Documentación de análisis y diseño de 3DAltoque."
---

Versión 2.0-borrador. Fecha: 14 de octubre de 2026. 54 fichas vigentes; nueve requisitos anteriores retirados.

Decisión vigente: membresía mensual prepaga del maker, renovación manual, prueba general de 30 días y beneficio fundador de 90 días totales como valores iniciales configurables. El cliente y el maker gestionan directamente el pago de la impresión. El ingreso de la plataforma corresponde al abono.

RF-08.1 a RF-08.9 quedan archivados con sus identificadores originales como antecedentes del cambio comercial. Su versión anterior queda preservada en el antecedente del cambio comercial. Véase ADR-002.

## Índice de fichas vigentes

| ID | Nombre |
| --- | --- |
| RF-01.1 | [Registrar clientes y makers](#rf-01-1) |
| RF-01.2 | [Gestionar capacidades del maker](#rf-01-2) |
| RF-01.3 | [Gestionar contacto y ubicación del cliente](#rf-01-3) |
| RF-01.4 | [Iniciar sesión](#rf-01-4) |
| RF-01.5 | [Cerrar sesión](#rf-01-5) |
| RF-02.1 | [Cargar STL y parámetros de impresión](#rf-02-1) |
| RF-02.2 | [Validar archivos y límites técnicos](#rf-02-2) |
| RF-02.3 | [Crear solicitud de impresión](#rf-02-3) |
| RF-02.4 | [Consultar estado y plazos de solicitud](#rf-02-4) |
| RF-02.5 | [Presentar estimación orientativa](#rf-02-5) |
| RF-03.1 | [Enviar solicitud a makers compatibles y cercanos](#rf-03-1) |
| RF-03.2 | [Consultar solicitudes recibidas por el maker](#rf-03-2) |
| RF-04.1 | [Presentar oferta de precio y plazo](#rf-04-1) |
| RF-04.2 | [Gestionar vigencia y estado de oferta](#rf-04-2) |
| RF-04.3 | [Comparar ofertas disponibles](#rf-04-3) |
| RF-04.4 | [Aceptar una sola oferta y confirmar pedido](#rf-04-4) |
| RF-04.5 | [Responder o rechazar invitación de cotización](#rf-04-5) |
| RF-05.1 | [Conversar en el contexto del pedido](#rf-05-1) |
| RF-05.2 | [Registrar mensajes y adjuntos autorizados](#rf-05-2) |
| RF-05.3 | [Auditar cambios de estado del pedido](#rf-05-3) |
| RF-06.1 | [Presentar evidencia de la pieza terminada](#rf-06-1) |
| RF-06.2 | [Solicitar revisión del cliente](#rf-06-2) |
| RF-06.3 | [Aprobar resultado o registrar observaciones](#rf-06-3) |
| RF-06.4 | [Conservar revisión pendiente ante silencio](#rf-06-4) |
| RF-06.5 | [Consultar y actualizar avance de producción](#rf-06-5) |
| RF-06.6 | [Coordinar entrega personal](#rf-06-6) |
| RF-06.7 | [Registrar recepción y completar entrega](#rf-06-7) |
| RF-07.1 | [Notificar eventos dentro de la plataforma](#rf-07-1) |
| RF-07.2 | [Gestionar moderación y soporte](#rf-07-2) |
| RF-07.3 | [Enviar avisos por canales externos habilitados](#rf-07-3) |
| RF-07.4 | [Recordar revisiones pendientes](#rf-07-4) |
| RF-09.1 | [Seleccionar y confirmar ubicación de referencia](#rf-09-1) |
| RF-09.2 | [Visualizar zonas y puntos en mapa](#rf-09-2) |
| RF-10.1 | [Autorizar transferencia de archivos privados](#rf-10-1) |
| RF-10.2 | [Completar y habilitar archivo recibido](#rf-10-2) |
| RF-10.3 | [Consultar y descargar archivos con permiso](#rf-10-3) |
| RF-10.4 | [Aplicar retiro y retención de archivos](#rf-10-4) |
| RF-11.1 | [Exponer operaciones mediante API común](#rf-11-1) |
| RF-11.2 | [Sincronizar cambios de ofertas, chat y pedidos](#rf-11-2) |
| RF-12.1 | [Configurar el único plan de membresía](#rf-12-1) |
| RF-12.2 | [Iniciar la prueba gratuita general](#rf-12-2) |
| RF-12.3 | [Asignar el programa Makers Fundadores](#rf-12-3) |
| RF-12.4 | [Consultar estado y vencimiento de acceso](#rf-12-4) |
| RF-12.5 | [Iniciar el pago del abono](#rf-12-5) |
| RF-12.6 | [Verificar notificaciones de pago del abono](#rf-12-6) |
| RF-12.7 | [Consultar y conciliar compras de membresía](#rf-12-7) |
| RF-12.8 | [Conceder acceso por un pago confirmado](#rf-12-8) |
| RF-12.9 | [Renovar manualmente la membresía](#rf-12-9) |
| RF-12.10 | [Aplicar vigencia a trabajos nuevos y preservar los activos](#rf-12-10) |
| RF-12.11 | [Recordar vencimientos de acceso](#rf-12-11) |
| RF-12.12 | [Gestionar devoluciones del abono autorizadas](#rf-12-12) |
| RF-12.13 | [Auditar cambios del plan y beneficios](#rf-12-13) |
| RF-12.14 | [Separar simulación y cobros reales de membresía](#rf-12-14) |
| RF-12.15 | [Informar el alcance del pago y del programa de fundadores](#rf-12-15) |

<a id="rf-01-1"></a>
### RF-01.1 Registrar clientes y makers

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-01.1 |
| Nombre | Registrar clientes y makers |
| Propósito | Identificar a los participantes y habilitar las funciones correspondientes a su perfil. |
| Descripción | El sistema debe permitir crear una cuenta de cliente o maker con los datos obligatorios definidos, validar el identificador de acceso y asociar el perfil solicitado. La creación de cuentas administrativas requiere un procedimiento autorizado; el registro público no concede ese rol. La coexistencia de perfiles y la verificación de contacto se definen en PD-01. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Una solicitud válida crea una sola cuenta y su perfil, y permite consultar su estado.<br>2. Datos obligatorios ausentes o identificador de acceso duplicado producen un error comprensible sin una cuenta parcial.<br>3. Un usuario que se registra públicamente no obtiene permisos administrativos. |

Requisitos/CU relacionados: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), CU-01.

Integraciones: INT-05.

Decisiones a cerrar: [PD-01](/3daltoque-docs/analisis/requisitos/#pd-01).

<a id="rf-01-2"></a>
### RF-01.2 Gestionar capacidades del maker

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-01.2 |
| Nombre | Gestionar capacidades del maker |
| Propósito | Permitir la búsqueda de proveedores que puedan fabricar la pieza. |
| Descripción | El sistema debe permitir al maker registrar y actualizar materiales, colores, dimensiones máximas útiles, disponibilidad, plazos orientativos y modalidad de entrega admitida. Solo el titular o una intervención administrativa autorizada pueden modificar el perfil. Las capacidades declaradas alimentan la compatibilidad de solicitudes. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. El maker guarda capacidades válidas y las recupera sin cambios de significado o unidad.<br>2. Se rechazan dimensiones o cantidades inválidas y cambios de un usuario no autorizado.<br>3. El matching utiliza las capacidades vigentes declaradas, sin asignar compatibilidad por cercanía solamente. |

Requisitos/CU relacionados: [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04).

Integraciones: INT-05.

Decisiones a cerrar: [PD-02](/3daltoque-docs/analisis/requisitos/#pd-02), [PD-04](/3daltoque-docs/analisis/requisitos/#pd-04).

<a id="rf-01-3"></a>
### RF-01.3 Gestionar contacto y ubicación del cliente

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-01.3 |
| Nombre | Gestionar contacto y ubicación del cliente |
| Propósito | Disponer de información suficiente para buscar y coordinar el pedido. |
| Descripción | El sistema debe permitir al cliente consultar y actualizar su contacto y ubicación de referencia, informando la finalidad de los datos. La vista pública o compartida presenta la precisión autorizada; los datos privados se utilizan únicamente en las operaciones permitidas. La selección y confirmación de ubicación se relaciona con RF-09.1. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. El titular guarda y recupera su información autorizada.<br>2. Otro usuario no modifica ni consulta datos privados del cliente.<br>3. La información enviada a makers o mostrada en pantallas respeta la precisión y finalidad acordadas. |

Requisitos/CU relacionados: [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11).

Integraciones: INT-02, INT-05.

Decisiones a cerrar: [PD-01](/3daltoque-docs/analisis/requisitos/#pd-01), [PD-04](/3daltoque-docs/analisis/requisitos/#pd-04), [PD-12](/3daltoque-docs/analisis/requisitos/#pd-12).

<a id="rf-01-4"></a>
### RF-01.4 Iniciar sesión

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-01.4 |
| Nombre | Iniciar sesión |
| Propósito | Permitir el acceso a funciones protegidas. |
| Descripción | El sistema debe autenticar al usuario y habilitar las funciones de los perfiles autorizados. La comprobación de credenciales y del estado de cuenta se realiza en el backend. La estrategia de sesión y sus plazos se acuerdan en PD-01, manteniendo las mismas reglas de negocio en web y los clientes mobile que se implementen. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Credenciales válidas de una cuenta habilitada permiten acceder a sus funciones.<br>2. Credenciales inválidas o cuenta bloqueada impiden el acceso y muestran un mensaje sin exponer información sensible.<br>3. El cliente no puede concederse un perfil mediante un cambio de parámetros enviados. |

Requisitos/CU relacionados: [RF-01.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-1), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

Integraciones: INT-05.

Decisiones a cerrar: [PD-01](/3daltoque-docs/analisis/requisitos/#pd-01).

<a id="rf-01-5"></a>
### RF-01.5 Cerrar sesión

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-01.5 |
| Nombre | Cerrar sesión |
| Propósito | Finalizar el acceso autorizado desde el cliente utilizado. |
| Descripción | El sistema debe permitir cerrar la sesión activa y retirar o revocar la autorización correspondiente según la estrategia elegida. La duración residual y revocación de credenciales se especifican en PD-01. El cierre revoca la sesión del cliente indicado. El alcance de la revocación entre dispositivos se define en PD-01. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Después del cierre, el cliente deja de acceder a pantallas protegidas con esa sesión.<br>2. La credencial de renovación cerrada, si existe, no permite obtener una sesión nueva.<br>3. La API aplica el comportamiento de revocación y expiración documentado. |

Requisitos/CU relacionados: [RF-01.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-4), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04).

Integraciones: INT-05.

Decisiones a cerrar: [PD-01](/3daltoque-docs/analisis/requisitos/#pd-01).

<a id="rf-02-1"></a>
### RF-02.1 Cargar STL y parámetros de impresión

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-02.1 |
| Nombre | Cargar STL y parámetros de impresión |
| Propósito | Describir técnicamente la pieza que necesita el cliente. |
| Descripción | El sistema debe permitir al cliente asociar un archivo STL propio a una solicitud y registrar material, color, cantidad, unidad/escala prevista y observaciones aplicables. Los campos obligatorios, límites y tratamiento de materiales desconocidos se fijan en PD-02. La transferencia debe seguir RF-10.1 y RF-10.2. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. El archivo completado y habilitado queda vinculado a la solicitud del cliente correcto.<br>2. Un archivo inexistente, ajeno o no habilitado no puede utilizarse para enviar la solicitud.<br>3. La información de escala y parámetros se conserva y puede consultarse para cotizar. |

Requisitos/CU relacionados: [RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2), [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2), CU-01.

Integraciones: INT-03, INT-05.

Decisiones a cerrar: [PD-02](/3daltoque-docs/analisis/requisitos/#pd-02).

<a id="rf-02-2"></a>
### RF-02.2 Validar archivos y límites técnicos

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-02.2 |
| Nombre | Validar archivos y límites técnicos |
| Propósito | Detectar cargas incompletas o inválidas antes de utilizarlas. |
| Descripción | El sistema debe comprobar tamaño real, formato/contenido admitido e integridad del archivo recibido conforme a límites documentados. El análisis debe indicar si el archivo puede usarse o qué problema impide hacerlo. La validación comprueba el contenido y la integridad del archivo. El maker evalúa su imprimibilidad al preparar la oferta. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Un STL válido dentro de los límites queda habilitado para su uso autorizado.<br>2. Un archivo truncado, de contenido no admitido o fuera de límites permanece sin habilitar y tiene un motivo de rechazo.<br>3. Durante el análisis se muestra el estado pendiente. Los resultados y la estimación se publican al completar el procesamiento correspondiente. |

Requisitos/CU relacionados: [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

Integraciones: INT-03.

Decisiones a cerrar: [PD-02](/3daltoque-docs/analisis/requisitos/#pd-02), [PD-12](/3daltoque-docs/analisis/requisitos/#pd-12).

<a id="rf-02-3"></a>
### RF-02.3 Crear solicitud de impresión

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-02.3 |
| Nombre | Crear solicitud de impresión |
| Propósito | Registrar la necesidad del cliente para obtener ofertas. |
| Descripción | El sistema debe permitir crear una solicitud con el archivo y los parámetros definidos, cantidad, urgencia, comentarios técnicos y presupuesto de referencia cuando corresponda. Debe identificar al propietario y distinguir el presupuesto o estimación orientativa del precio de una oferta. Las modificaciones de una solicitud ya enviada requieren la política de PD-05. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Una creación válida conserva propietario, archivo y características de la solicitud.<br>2. Una solicitud incompleta según PD-02 no se envía a makers y explica qué debe corregirse.<br>3. El presupuesto o la estimación se identifica como referencia orientativa. La aceptación de una oferta confirma las condiciones del acuerdo. |

Requisitos/CU relacionados: [RF-02.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-1), [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), CU-01.

Integraciones: INT-03, INT-05.

Decisiones a cerrar: [PD-02](/3daltoque-docs/analisis/requisitos/#pd-02), [PD-05](/3daltoque-docs/analisis/requisitos/#pd-05).

<a id="rf-02-4"></a>
### RF-02.4 Consultar estado y plazos de solicitud

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-02.4 |
| Nombre | Consultar estado y plazos de solicitud |
| Propósito | Permitir conocer el avance de búsqueda y cotización. |
| Descripción | El sistema debe mostrar al cliente el estado vigente de su solicitud y las acciones disponibles. Cuando exista un plazo definido debe mostrar su vencimiento o tiempo restante de forma consistente con la hora del servidor. La expiración global de solicitudes, sus etiquetas de estado y la ampliación de búsqueda quedan sujetas a PD-04 y PD-05. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. El cliente consulta el mismo estado que determina la API.<br>2. Los plazos mostrados corresponden a los almacenados y no habilitan operaciones ya vencidas.<br>3. Cada fecha mostrada corresponde a un plazo registrado; los plazos pendientes aparecen por definir. |

Requisitos/CU relacionados: [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2), [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14), CU-01.

Integraciones: INT-05, INT-06.

Decisiones a cerrar: [PD-04](/3daltoque-docs/analisis/requisitos/#pd-04), [PD-05](/3daltoque-docs/analisis/requisitos/#pd-05).

<a id="rf-02-5"></a>
### RF-02.5 Presentar estimación orientativa

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-02.5 |
| Nombre | Presentar estimación orientativa |
| Propósito | Ayudar al cliente a comparar referencias sin sustituir la oferta humana. |
| Descripción | Si se adopta la estimación inicial, el sistema debe presentarla como importe o rango orientativo con sus supuestos y unidad monetaria. El método, sus entradas y el grado de análisis del STL requieren PD-03. Cuando faltan datos para estimar, el sistema identifica la información requerida y solicita completarla. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Should (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Baja. Aplicabilidad, política o valores condicionados a decisiones aún abiertas. |
| Criterio de éxito | 1. Una estimación disponible se identifica como orientativa y permite conocer sus supuestos.<br>2. Una entrada sin datos suficientes muestra que no hay estimación válida, en lugar de un precio contractual.<br>3. La oferta aceptada conserva el precio propuesto por el maker aunque difiera de la estimación. |

Requisitos/CU relacionados: [RF-02.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-3), [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1), CU-01.

Integraciones: INT-03.

Decisiones a cerrar: [PD-02](/3daltoque-docs/analisis/requisitos/#pd-02), [PD-03](/3daltoque-docs/analisis/requisitos/#pd-03).

<a id="rf-03-1"></a>
### RF-03.1 Enviar solicitud a makers compatibles y cercanos

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-03.1 |
| Nombre | Enviar solicitud a makers compatibles y cercanos |
| Propósito | Conectar la demanda con un grupo reducido de proveedores elegibles. |
| Descripción | El sistema debe seleccionar makers por capacidad, material, disponibilidad y cercanía, y enviar la solicitud a un grupo limitado. Debe conservar los destinatarios y parámetros utilizados. Radio, tamaño del grupo, orden de selección y ampliación requieren PD-04. La geolocalización apoya la búsqueda; la compatibilidad se determina con los datos de 3DAltoque. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Para un conjunto conocido de makers, los invitados cumplen los filtros y el límite configurados para la prueba.<br>2. Un maker incompatible o fuera del criterio geográfico no se incorpora por ser el único disponible.<br>3. Si no hay candidatos se informa el resultado y no se envía indiscriminadamente a toda la plataforma. |

Requisitos/CU relacionados: [RF-01.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), CU-01, CU-02.

Integraciones: INT-02, INT-04.

Decisiones a cerrar: [PD-04](/3daltoque-docs/analisis/requisitos/#pd-04).

<a id="rf-03-2"></a>
### RF-03.2 Consultar solicitudes recibidas por el maker

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-03.2 |
| Nombre | Consultar solicitudes recibidas por el maker |
| Propósito | Organizar las oportunidades de trabajo habilitadas para cada maker. |
| Descripción | El sistema debe presentar al maker las solicitudes para las que fue invitado, con información necesaria, estado y plazos. El orden de presentación se define en PD-04; los filtros de experiencia y reputación requieren datos y reglas definidos. El acceso a archivos se rige por RF-10.3. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Should (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. El maker consulta las solicitudes habilitadas para su cuenta y no las reservadas a otros destinatarios.<br>2. La lista sigue el orden acordado y muestra estados/plazos actuales.<br>3. Una solicitud cerrada o no elegible no se presenta como una invitación todavía accionable. |

Requisitos/CU relacionados: [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3), CU-02.

Integraciones: INT-05, INT-06.

Decisiones a cerrar: [PD-04](/3daltoque-docs/analisis/requisitos/#pd-04), [PD-12](/3daltoque-docs/analisis/requisitos/#pd-12).

<a id="rf-04-1"></a>
### RF-04.1 Presentar oferta de precio y plazo

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-04.1 |
| Nombre | Presentar oferta de precio y plazo |
| Propósito | Permitir al maker proponer condiciones concretas de fabricación. |
| Descripción | El sistema debe permitir a un maker invitado presentar una oferta con precio, moneda, plazo, condiciones, observaciones y vigencia. Aceptar el estimado, cuando exista, también genera una oferta explícita. La oferta expresa el compromiso vigente del maker; la negociación no reserva automáticamente al cliente. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Alta. Regla principal estable en el alcance vigente; la ficha requiere revisión del equipo. |
| Criterio de éxito | 1. Una oferta válida queda asociada al maker y solicitud correctos con sus condiciones.<br>2. Precio/plazo inválidos o un maker sin autorización impiden publicar la oferta.<br>3. El cliente sigue comparando hasta seleccionar una oferta vigente. |

Requisitos/CU relacionados: [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2), CU-02.

Integraciones: INT-05, INT-06.

Decisiones a cerrar: [PD-05](/3daltoque-docs/analisis/requisitos/#pd-05).

<a id="rf-04-2"></a>
### RF-04.2 Gestionar vigencia y estado de oferta

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-04.2 |
| Nombre | Gestionar vigencia y estado de oferta |
| Propósito | Evitar aceptar condiciones fuera de plazo o no disponibles. |
| Descripción | El sistema debe registrar y mostrar la vigencia y el estado de cada oferta. La aceptación comprueba el vencimiento en el servidor. Los cambios conservan historial y condiciones identificables; los valores de duración y la política de versiones/renovación requieren PD-05. Las etiquetas técnicas se consolidan con el modelo de estados. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Una oferta que llegó a su vencimiento no puede aceptarse aunque la pantalla no se haya actualizado.<br>2. Una oferta cerrada por otra selección deja de estar disponible.<br>3. La consulta permite identificar las condiciones y vigencia que se muestran al cliente. |

Requisitos/CU relacionados: [RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), CU-02, CU-03.

Integraciones: INT-05, INT-06.

Decisiones a cerrar: [PD-05](/3daltoque-docs/analisis/requisitos/#pd-05).

<a id="rf-04-3"></a>
### RF-04.3 Comparar ofertas disponibles

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-04.3 |
| Nombre | Comparar ofertas disponibles |
| Propósito | Permitir elegir con información equivalente y vigente. |
| Descripción | El sistema debe mostrar al cliente propietario las ofertas disponibles con maker, precio/moneda, plazo, condiciones y vencimiento. Debe permitir comparar y filtrar según criterios acordados. La distancia o reputación se muestran solo si existe información válida y autorizada. Antes de aceptar se identifican las condiciones elegidas. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Alta. Regla principal estable en el alcance vigente; la ficha requiere revisión del equipo. |
| Criterio de éxito | 1. Las ofertas de una misma solicitud presentan los campos acordados de forma comparable.<br>2. Una oferta vencida o cerrada se identifica y no aparece como seleccionable.<br>3. Los filtros no alteran los precios o condiciones y el cliente puede cambiar de opción antes de confirmar. |

Requisitos/CU relacionados: [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1), [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2), CU-03.

Integraciones: INT-02, INT-05, INT-06.

Decisiones a cerrar: [PD-04](/3daltoque-docs/analisis/requisitos/#pd-04), [PD-05](/3daltoque-docs/analisis/requisitos/#pd-05).

<a id="rf-04-4"></a>
### RF-04.4 Aceptar una sola oferta y confirmar pedido

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-04.4 |
| Nombre | Aceptar una sola oferta y confirmar pedido |
| Propósito | Materializar el acuerdo y cerrar las alternativas de la solicitud. |
| Descripción | El sistema debe permitir al cliente aceptar una oferta propia vigente con las condiciones que está viendo. La operación crea como máximo un pedido por solicitud, fija las condiciones acordadas y cierra las otras ofertas de forma atómica. No requiere otra confirmación del maker. Debe resolver solicitudes repetidas y cambios concurrentes sin alterar el acuerdo. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Alta. Regla principal estable en el alcance vigente; la ficha requiere revisión del equipo. |
| Criterio de éxito | 1. Una aceptación válida crea un pedido y deja las ofertas competidoras cerradas.<br>2. Dos aceptaciones concurrentes no crean dos pedidos para la misma solicitud.<br>3. Una oferta vencida/modificada se rechaza de forma controlada; repetir la misma operación confirmada devuelve el mismo acuerdo, sin uno adicional. |

Requisitos/CU relacionados: [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), CU-03.

Integraciones: INT-05.

Decisiones a cerrar: [PD-05](/3daltoque-docs/analisis/requisitos/#pd-05).

<a id="rf-04-5"></a>
### RF-04.5 Responder o rechazar invitación de cotización

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-04.5 |
| Nombre | Responder o rechazar invitación de cotización |
| Propósito | Registrar la decisión del maker sobre una solicitud recibida. |
| Descripción | El sistema debe permitir al maker invitado rechazar una solicitud, aceptar una referencia mediante una oferta o proponer precio/plazo propios. El rechazo se registra para la invitación y no confirma un pedido. Los motivos, retiro de una oferta ya emitida y eventuales sanciones requieren reglas específicas antes de habilitarse. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. El rechazo de una invitación no genera pedido ni cobro.<br>2. Aceptar referencia o contraofertar produce la oferta explícita de RF-04.1.<br>3. Un maker no invitado no responde una solicitud y una solicitud cerrada no recibe nuevas ofertas. |

Requisitos/CU relacionados: [RF-03.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-2), [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1), CU-02.

Integraciones: INT-05.

Decisiones a cerrar: [PD-05](/3daltoque-docs/analisis/requisitos/#pd-05), [PD-14](/3daltoque-docs/analisis/requisitos/#pd-14).

<a id="rf-05-1"></a>
### RF-05.1 Conversar en el contexto del pedido

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-05.1 |
| Nombre | Conversar en el contexto del pedido |
| Propósito | Permitir coordinación y seguimiento entre cliente y maker. |
| Descripción | El sistema debe disponer de una conversación vinculada al pedido confirmado y accesible por sus participantes autorizados. Debe permitir consultar el historial y enviar mensajes. El chat anterior a la selección de oferta, la participación administrativa y la visibilidad adicional se definen en PD-06. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Los participantes del pedido acceden a la conversación correcta.<br>2. Un usuario ajeno no consulta ni envía mensajes a esa conversación.<br>3. La consulta mantiene contexto e historial después de cerrar y volver a abrir la sesión. |

Requisitos/CU relacionados: [RF-05.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), CU-04, CU-05, CU-06.

Integraciones: INT-05, INT-06.

Decisiones a cerrar: [PD-06](/3daltoque-docs/analisis/requisitos/#pd-06).

<a id="rf-05-2"></a>
### RF-05.2 Registrar mensajes y adjuntos autorizados

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-05.2 |
| Nombre | Registrar mensajes y adjuntos autorizados |
| Propósito | Conservar el intercambio y las referencias de progreso. |
| Descripción | El sistema debe guardar los mensajes antes de informar su envío exitoso y relacionar los adjuntos permitidos con la conversación. Los formatos/límites se establecen en PD-02 y PD-12. Debe distinguir mensajes pendientes, enviados o fallidos y resolver reenvíos con una referencia de operación para evitar duplicados visibles. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Un mensaje informado como enviado puede recuperarse en el historial autorizado.<br>2. Repetir el mismo envío identificado no genera otro mensaje visible.<br>3. Un adjunto ajeno, inválido o no habilitado no se publica como parte del mensaje. |

Requisitos/CU relacionados: [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), CU-04.

Integraciones: INT-03, INT-04, INT-06.

Decisiones a cerrar: [PD-02](/3daltoque-docs/analisis/requisitos/#pd-02), [PD-06](/3daltoque-docs/analisis/requisitos/#pd-06), [PD-12](/3daltoque-docs/analisis/requisitos/#pd-12).

<a id="rf-05-3"></a>
### RF-05.3 Auditar cambios de estado del pedido

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-05.3 |
| Nombre | Auditar cambios de estado del pedido |
| Propósito | Permitir reconstruir decisiones y resolver diferencias entre participantes. |
| Descripción | El sistema debe conservar el historial de transiciones del pedido, con estado anterior/nuevo, actor o proceso, fecha y motivo pertinente. Las modificaciones administrativas también se registran. El historial es consultable según permisos y se conserva conforme a la política de retención. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Alta. Regla principal estable en el alcance vigente; la ficha requiere revisión del equipo. |
| Criterio de éxito | 1. Cada transición permitida deja un registro ligado al pedido.<br>2. Una transición rechazada no figura como realizada y conserva la evidencia operativa correspondiente.<br>3. La consulta permite reconstruir quién cambió el pedido y cuándo sin exponer secretos. |

Requisitos/CU relacionados: [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), CU-04, CU-05, CU-07.

Integraciones: INT-05.

Decisiones a cerrar: [PD-07](/3daltoque-docs/analisis/requisitos/#pd-07), [PD-12](/3daltoque-docs/analisis/requisitos/#pd-12), [PD-14](/3daltoque-docs/analisis/requisitos/#pd-14).

<a id="rf-06-1"></a>
### RF-06.1 Presentar evidencia de la pieza terminada

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-06.1 |
| Nombre | Presentar evidencia de la pieza terminada |
| Propósito | Permitir revisar el resultado antes de la entrega. |
| Descripción | El sistema debe permitir al maker del pedido adjuntar fotos o videos admitidos del resultado y sus observaciones. La evidencia se vincula al pedido y a una revisión identificable. El cliente accede a la versión presentada y los archivos aprobados no se sustituyen silenciosamente. Formatos, límites y correcciones se fijan en PD-02 y PD-07. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Una presentación válida conserva archivos, pedido, maker y fecha de la revisión.<br>2. Un usuario que no sea el maker autorizado no presenta evidencia en ese pedido.<br>3. El cliente puede consultar los mismos archivos que componen la revisión a aprobar. |

Requisitos/CU relacionados: [RF-06.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-2), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2), CU-04.

Integraciones: INT-03, INT-04.

Decisiones a cerrar: [PD-02](/3daltoque-docs/analisis/requisitos/#pd-02), [PD-07](/3daltoque-docs/analisis/requisitos/#pd-07), [PD-12](/3daltoque-docs/analisis/requisitos/#pd-12).

<a id="rf-06-2"></a>
### RF-06.2 Solicitar revisión del cliente

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-06.2 |
| Nombre | Solicitar revisión del cliente |
| Propósito | Abrir el control de conformidad de la pieza. |
| Descripción | El sistema debe poner el resultado presentado en pendiente de revisión cuando la evidencia obligatoria esté disponible y habilitada. Debe mostrar al cliente lo que tiene que revisar y las acciones de aprobación u observación. La aprobación expresa del cliente sobre la evidencia presentada habilita la coordinación de entrega. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Alta. Regla principal estable en el alcance vigente; la ficha requiere revisión del equipo. |
| Criterio de éxito | 1. Una evidencia final válida genera una revisión pendiente identificable.<br>2. Una presentación sin evidencia requerida no habilita la revisión final ni la entrega.<br>3. El cliente ve la revisión actual y el maker puede conocer que espera su respuesta. |

Requisitos/CU relacionados: [RF-06.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1), [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3), CU-05.

Integraciones: INT-03, INT-04, INT-05.

Decisiones a cerrar: [PD-07](/3daltoque-docs/analisis/requisitos/#pd-07).

<a id="rf-06-3"></a>
### RF-06.3 Aprobar resultado o registrar observaciones

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-06.3 |
| Nombre | Aprobar resultado o registrar observaciones |
| Propósito | Expresar conformidad o iniciar la resolución de un problema. |
| Descripción | El sistema debe permitir al cliente del pedido aprobar explícitamente la revisión presentada o registrar observaciones/reclamo. La decisión se asocia a esa evidencia, actor y fecha. La corrección y el escalamiento requieren PD-07; cada aprobación corresponde a una revisión identificada; los archivos sustituidos requieren una nueva revisión. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Una aprobación válida identifica la revisión y permite las acciones de entrega autorizadas.<br>2. Una observación conserva el motivo y mantiene bloqueada la entrega hasta resolver el proceso acordado.<br>3. Otro usuario o una solicitud sin revisión pendiente no produce una aprobación válida. |

Requisitos/CU relacionados: [RF-06.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-4), [RF-06.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-6), CU-05.

Integraciones: INT-04, INT-05.

Decisiones a cerrar: [PD-07](/3daltoque-docs/analisis/requisitos/#pd-07), [PD-08](/3daltoque-docs/analisis/requisitos/#pd-08).

<a id="rf-06-4"></a>
### RF-06.4 Conservar revisión pendiente ante silencio

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-06.4 |
| Nombre | Conservar revisión pendiente ante silencio |
| Propósito | Evitar dar por aceptado un resultado que el cliente no revisó. |
| Descripción | El sistema debe mantener la necesidad de aprobación expresa aunque transcurra el tiempo sin respuesta. Los recordatorios y un eventual escalamiento se registran según política, pero no aprueban ni completan automáticamente el pedido. La ausencia de respuesta no satisface la condición de entrega. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Alta. Regla principal estable en el alcance vigente; la ficha requiere revisión del equipo. |
| Criterio de éxito | 1. Avanzar el tiempo sobre una revisión sin respuesta no cambia su estado a aprobada.<br>2. Un recordatorio enviado no habilita entrega o finalización.<br>3. Toda aprobación registrada tiene una acción explícita y autorizada del cliente sobre la revisión. |

Requisitos/CU relacionados: [RF-07.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-4), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), CU-05.

Integraciones: INT-04.

Decisiones a cerrar: [PD-07](/3daltoque-docs/analisis/requisitos/#pd-07), [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11).

<a id="rf-06-5"></a>
### RF-06.5 Consultar y actualizar avance de producción

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-06.5 |
| Nombre | Consultar y actualizar avance de producción |
| Propósito | Dar visibilidad al trabajo realizado por el maker. |
| Descripción | El maker autorizado actualiza el avance y los participantes consultan el estado productivo. Las transiciones validan actor, revisión y reglas del pedido. La membresía vencida no impide terminar un pedido ya confirmado; 3DAltoque no verifica el pago de la impresión entre las partes. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Los participantes consultan avance e historial.<br>2. Solo el actor autorizado ejecuta una transición válida.<br>3. El vencimiento comercial no cancela ni bloquea la finalización de pedidos existentes. |

Requisitos/CU relacionados: [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), CU-04.

Integraciones: INT-05, INT-06.

Decisiones a cerrar: [PD-07](/3daltoque-docs/analisis/requisitos/#pd-07).

<a id="rf-06-6"></a>
### RF-06.6 Coordinar entrega personal

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-06.6 |
| Nombre | Coordinar entrega personal |
| Propósito | Acordar el encuentro y proteger los domicilios particulares. |
| Descripción | El sistema debe permitir coordinar entre cliente y maker un punto de encuentro y horario para un pedido aprobado. La modalidad inicial es encuentro personal sin custodia de terceros. Debe conservar el acuerdo y compartir solo la ubicación necesaria autorizada. El tratamiento de cambios de horario y desacuerdo se define en PD-08. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Un pedido aprobado puede registrar un acuerdo de punto y horario entre sus participantes.<br>2. Un pedido sin aprobación vigente no habilita coordinación de entrega.<br>3. La búsqueda pública no expone el domicilio privado del maker como consecuencia de coordinar el encuentro. |

Requisitos/CU relacionados: [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3), [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2), CU-06.

Integraciones: INT-02, INT-04, INT-05.

Decisiones a cerrar: [PD-08](/3daltoque-docs/analisis/requisitos/#pd-08).

<a id="rf-06-7"></a>
### RF-06.7 Registrar recepción y completar entrega

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-06.7 |
| Nombre | Registrar recepción y completar entrega |
| Propósito | Conservar evidencia del cierre físico del pedido. |
| Descripción | El sistema debe registrar la recepción y completar la entrega únicamente por el mecanismo y los actores autorizados que se acuerden en PD-08. La confirmación debe identificar pedido, actor, fecha y resultado. Código de recepción o doble confirmación son alternativas pendientes; el silencio y una evidencia previa no completan la entrega. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Baja. Aplicabilidad, política o valores condicionados a decisiones aún abiertas. |
| Criterio de éxito | 1. El mecanismo acordado registra una única finalización para una entrega válida.<br>2. Una repetición de la misma confirmación no genera otra entrega ni otro cierre financiero.<br>3. Sin aprobación vigente o sin validación del mecanismo elegido no se registra entrega completada. |

Requisitos/CU relacionados: [RF-06.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-6), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), CU-06.

Integraciones: INT-05.

Decisiones a cerrar: [PD-08](/3daltoque-docs/analisis/requisitos/#pd-08).

<a id="rf-07-1"></a>
### RF-07.1 Notificar eventos dentro de la plataforma

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-07.1 |
| Nombre | Notificar eventos dentro de la plataforma |
| Propósito | Informar a cada participante de los cambios que requieren su atención. |
| Descripción | El sistema debe generar avisos persistidos para eventos relevantes de solicitudes, ofertas, mensajes, membresía, producción, evidencia y entrega. Debe asociar destinatarios autorizados y permitir consultar el recurso relacionado. El listado de eventos se acuerda con los CU; un aviso no cambia por sí solo el estado de negocio. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. El evento elegido genera un aviso para los destinatarios correctos después de quedar registrado.<br>2. Un usuario consulta solo sus avisos y recursos permitidos.<br>3. La repetición de procesamiento no duplica el mismo aviso visible. |

Requisitos/CU relacionados: [RF-07.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-3), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), CU-01, CU-02, CU-04, CU-05.

Integraciones: INT-04, INT-05, INT-06.

Decisiones a cerrar: [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11).

<a id="rf-07-2"></a>
### RF-07.2 Gestionar moderación y soporte

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-07.2 |
| Nombre | Gestionar moderación y soporte |
| Propósito | Permitir intervención operativa controlada. |
| Descripción | Administración gestiona soporte y acciones habilitadas, conservando motivo e historial. Bloqueos, acceso privado, reputación y SLA requieren PD-14. La configuración del plan y del programa de fundadores tiene fichas propias RF-12.1 y RF-12.13. Soporte no cobra, retiene ni devuelve el dinero de impresiones entre cliente y maker. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Should (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Baja. Aplicabilidad, política o valores condicionados a decisiones aún abiertas. |
| Criterio de éxito | 1. Solo un rol autorizado consulta o resuelve un caso de soporte.<br>2. Una acción de moderación registra actor, motivo y resultado.<br>3. La intervención aplica los permisos definidos y el circuito de verificación correspondiente para cada acción. |

Requisitos/CU relacionados: [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), CU-07.

Integraciones: INT-05.

Decisiones a cerrar: [PD-07](/3daltoque-docs/analisis/requisitos/#pd-07), [PD-14](/3daltoque-docs/analisis/requisitos/#pd-14).

<a id="rf-07-3"></a>
### RF-07.3 Enviar avisos por canales externos habilitados

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-07.3 |
| Nombre | Enviar avisos por canales externos habilitados |
| Propósito | Extender los avisos cuando el usuario no está usando la plataforma. |
| Descripción | Si se adopta un canal externo, el sistema debe entregar al proveedor un aviso con destinatario, plantilla y datos mínimos, y registrar aceptación/error. La selección de canales de correo, push y SMS se define en PD-11. Las confirmaciones de entrega se registran separadas de la aceptación del envío cuando estén disponibles. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Should (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Baja. Aplicabilidad, política o valores condicionados a decisiones aún abiertas. |
| Criterio de éxito | 1. Un aviso elegible utiliza el canal configurado y conserva su referencia de envío.<br>2. Un fallo o destinatario inválido se registra sin deshacer el hecho de negocio ni declarar entrega exitosa.<br>3. Las preferencias/permisos y los reintentos acordados se respetan, sin generar envíos duplicados por errores propios de la plataforma. |

Requisitos/CU relacionados: [RF-07.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-1), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15).

Integraciones: INT-04.

Decisiones a cerrar: [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11).

<a id="rf-07-4"></a>
### RF-07.4 Recordar revisiones pendientes

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-07.4 |
| Nombre | Recordar revisiones pendientes |
| Propósito | Promover la respuesta del cliente sin sustituirla. |
| Descripción | El sistema debe programar recordatorios de revisión conforme a una frecuencia y canal acordados. Antes de enviar debe comprobar que la revisión continúa pendiente y corresponde al destinatario. Los plazos y el escalamiento se definen en PD-11 y PD-07. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Una revisión pendiente genera recordatorios en los momentos previstos por la configuración aprobada.<br>2. Un recordatorio que se ejecuta después de aprobar o cancelar la revisión deja de enviarse.<br>3. La programación y el envío de recordatorios nunca producen una aprobación automática. |

Requisitos/CU relacionados: [RF-06.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-4), [RF-07.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-1), CU-05.

Integraciones: INT-04.

Decisiones a cerrar: [PD-07](/3daltoque-docs/analisis/requisitos/#pd-07), [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11).

<a id="rf-09-1"></a>
### RF-09.1 Seleccionar y confirmar ubicación de referencia

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-09.1 |
| Nombre | Seleccionar y confirmar ubicación de referencia |
| Propósito | Obtener una ubicación utilizable para búsqueda y encuentro. |
| Descripción | El sistema debe permitir registrar y confirmar la ubicación necesaria para el cliente, maker o punto de encuentro. Cuando se utilice geocodificación debe permitir elegir un resultado no ambiguo e identificar su origen/precisión. El uso de permisos del dispositivo, entrada manual y datos persistidos se acuerda en PD-04 y PD-11. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Una selección confirmada conserva coordenadas y metadatos autorizados con significado inequívoco.<br>2. Un resultado ambiguo o inexistente requiere corrección o confirmación y no se adopta silenciosamente.<br>3. Permiso denegado o falla externa se informa con las alternativas que se hayan habilitado. |

Requisitos/CU relacionados: [RF-01.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-3), [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04).

Integraciones: INT-02.

Decisiones a cerrar: [PD-04](/3daltoque-docs/analisis/requisitos/#pd-04), [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11), [PD-12](/3daltoque-docs/analisis/requisitos/#pd-12).

<a id="rf-09-2"></a>
### RF-09.2 Visualizar zonas y puntos en mapa

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-09.2 |
| Nombre | Visualizar zonas y puntos en mapa |
| Propósito | Presentar cercanía y lugares de encuentro de forma comprensible. |
| Descripción | El sistema debe mostrar la información geográfica autorizada de makers y puntos de encuentro en el mapa elegido para el canal. Debe diferenciar la ubicación aproximada publicada de los datos privados utilizados para operar y aplicar las condiciones de visualización del proveedor. Productos y precisión se fijan en PD-04 y PD-11. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. El mapa representa los recursos autorizados de un conjunto de prueba conocido.<br>2. La vista pública no permite reconstruir el domicilio privado del maker mediante los datos enviados.<br>3. Una falla de servicio se distingue de ausencia de resultados y no invalida acuerdos ya registrados. |

Requisitos/CU relacionados: [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RF-06.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-6), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08).

Integraciones: INT-02, INT-05.

Decisiones a cerrar: [PD-04](/3daltoque-docs/analisis/requisitos/#pd-04), [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11).

<a id="rf-10-1"></a>
### RF-10.1 Autorizar transferencia de archivos privados

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-10.1 |
| Nombre | Autorizar transferencia de archivos privados |
| Propósito | Controlar quién puede cargar un archivo y para qué operación. |
| Descripción | El sistema debe autorizar cada subida de STL, imagen o video con una referencia local, propietario y finalidad. Debe emitir el mecanismo de transferencia elegido con límites y plazo documentados. El almacenamiento privado y sus capacidades concretas se seleccionan en PD-11; la autorización de transferencia no habilita por sí sola el uso del archivo. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Una autorización válida identifica archivo, propietario, finalidad y destino permitido.<br>2. Un usuario ajeno no obtiene permiso para escribir sobre archivos de otro participante.<br>3. El vencimiento o uso fuera de finalidad se trata como error y no vincula un archivo listo al negocio. |

Requisitos/CU relacionados: [RF-02.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-1), [RF-06.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04).

Integraciones: INT-03.

Decisiones a cerrar: [PD-02](/3daltoque-docs/analisis/requisitos/#pd-02), [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11), [PD-12](/3daltoque-docs/analisis/requisitos/#pd-12).

<a id="rf-10-2"></a>
### RF-10.2 Completar y habilitar archivo recibido

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-10.2 |
| Nombre | Completar y habilitar archivo recibido |
| Propósito | Vincular al negocio únicamente transferencias completas y verificadas. |
| Descripción | El sistema debe comprobar que el objeto transferido existe, tiene tamaño/tipo/integridad admitidos y pertenece a la autorización. Debe conservar su estado de recepción/análisis y habilitarlo solo después de la comprobación requerida. Debe fijar la referencia/version que utiliza la solicitud o evidencia, evitando sustitución posterior silenciosa. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Una transferencia completa y validada habilita el archivo correcto una sola vez.<br>2. Una subida interrumpida, fuera de límites o referida a otro objeto no se informa como lista.<br>3. El contenido usado en una revisión aprobada permanece identificable aunque haya una nueva subida o corrección. |

Requisitos/CU relacionados: [RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2), [RF-06.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05).

Integraciones: INT-03.

Decisiones a cerrar: [PD-02](/3daltoque-docs/analisis/requisitos/#pd-02), [PD-07](/3daltoque-docs/analisis/requisitos/#pd-07), [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11), [PD-12](/3daltoque-docs/analisis/requisitos/#pd-12).

<a id="rf-10-3"></a>
### RF-10.3 Consultar y descargar archivos con permiso

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-10.3 |
| Nombre | Consultar y descargar archivos con permiso |
| Propósito | Entregar referencias y evidencias solo a usuarios habilitados. |
| Descripción | El sistema debe comprobar autorización por recurso antes de conceder acceso a STL, evidencias o adjuntos privados. Debe permitir acceso del titular y participantes habilitados según la finalidad y etapa, con el mecanismo temporal acordado. Momento de acceso de makers invitados y participación de soporte requieren PD-06 y PD-12. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. El participante habilitado obtiene el archivo asociado al recurso solicitado.<br>2. Un usuario ajeno o sin permiso vigente no recibe contenido ni una nueva autorización de descarga.<br>3. El acceso temporal y su vencimiento siguen el contrato; se documentan los límites de revocación de accesos ya concedidos. |

Requisitos/CU relacionados: [RF-03.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-2), [RF-05.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2), [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04).

Integraciones: INT-03.

Decisiones a cerrar: [PD-06](/3daltoque-docs/analisis/requisitos/#pd-06), [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11), [PD-12](/3daltoque-docs/analisis/requisitos/#pd-12).

<a id="rf-10-4"></a>
### RF-10.4 Aplicar retiro y retención de archivos

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-10.4 |
| Nombre | Aplicar retiro y retención de archivos |
| Propósito | Controlar el ciclo de vida de datos y evidencias almacenados. |
| Descripción | El sistema debe aplicar la política aprobada de retención, retiro y borrado a objetos y metadatos, conservando lo que deba mantenerse para operaciones pendientes o evidencia autorizada. Debe registrar acción y motivo. Los plazos, excepciones y alcance de respaldo se fijan en PD-12 antes de ejecutar eliminaciones. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Baja. Aplicabilidad, política o valores condicionados a decisiones aún abiertas. |
| Criterio de éxito | 1. Un objeto elegible se retira según la regla vigente y deja de ofrecer nuevos accesos.<br>2. Un archivo que debe preservarse para una operación pendiente no se elimina como si estuviera vencido.<br>3. El registro permite conocer qué se retiró y cómo se tratarán copias y respaldos según la política documentada. |

Requisitos/CU relacionados: [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: INT-03.

Decisiones a cerrar: [PD-12](/3daltoque-docs/analisis/requisitos/#pd-12), [PD-13](/3daltoque-docs/analisis/requisitos/#pd-13).

<a id="rf-11-1"></a>
### RF-11.1 Exponer operaciones mediante API común

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-11.1 |
| Nombre | Exponer operaciones mediante API común |
| Propósito | Permitir que los canales habilitados utilicen el mismo negocio. |
| Descripción | El sistema debe exponer por la API FastAPI las operaciones autorizadas de perfiles, solicitudes, ofertas, pedidos, membresías, pagos de abonos, evidencia, entrega y avisos. Web y clientes mobile implementados utilizan las mismas reglas de negocio y permisos. Las rutas, entradas, salidas y errores se consolidan en el catálogo API. La aplicación mobile consume las operaciones de ese contrato según el alcance acordado. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Alta. Regla principal estable en el alcance vigente; la ficha requiere revisión del equipo. |
| Criterio de éxito | 1. Una operación equivalente desde clientes habilitados conserva las mismas condiciones de negocio y autorizaciones.<br>2. El contrato identifica datos obligatorios, errores y resultados que cada cliente debe manejar.<br>3. El cliente no puede modificar importes, destinatarios o estados autoritativos omitiendo la validación del backend. |

Requisitos/CU relacionados: [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), CU-01, CU-03.

Integraciones: INT-05.

Decisiones a cerrar: [PD-01](/3daltoque-docs/analisis/requisitos/#pd-01), [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11).

<a id="rf-11-2"></a>
### RF-11.2 Sincronizar cambios de ofertas, chat y pedidos

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-11.2 |
| Nombre | Sincronizar cambios de ofertas, chat y pedidos |
| Propósito | Recuperar el seguimiento después de una actualización o interrupción. |
| Descripción | El sistema debe ofrecer un mecanismo de consulta/sincronización que permita recuperar mensajes y estados persistidos. Si se implementan avisos en vivo, cada suscripción debe respetar los permisos del recurso y tolerar reconexión/eventos repetidos. WebSockets, consulta periódica, frecuencia y chat previo a contratación requieren PD-06 y PD-11. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Should (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Después de reconectarse, un cliente autorizado recupera mensajes y estado vigentes sin pérdida de datos persistidos.<br>2. Repetir un aviso no duplica mensajes ni transiciones visibles.<br>3. Una suscripción o consulta a un recurso ajeno es denegada y no filtra su contenido. |

Requisitos/CU relacionados: [RF-04.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-3), [RF-05.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15).

Integraciones: INT-05, INT-06.

Decisiones a cerrar: [PD-06](/3daltoque-docs/analisis/requisitos/#pd-06), [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11).

<a id="rf-12-1"></a>
### RF-12.1 Configurar el único plan de membresía

| Campo | Contenido |
| --- | --- |
| ID requerimiento | RF-12.1 |
| Nombre | Configurar el único plan de membresía |
| Propósito | Permitir ajustar el precio y las condiciones sin crear varios niveles comerciales. |
| Descripción | Administración consulta y publica versiones del único plan mensual prepago, con importe, moneda, período, vigencia y condiciones visibles. Precio definitivo, moneda y regla exacta de calendario requieren PD-10. No existen prorrateos, débito recurrente ni comisión por impresión en v1. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Media |
| Criterio de éxito | 1. Solo un rol autorizado publica una versión válida y auditada.<br>2. Una versión nueva no cambia las compras, períodos o condiciones ya concedidos.<br>3. El maker ve importe, duración y renovación manual antes de pagar. |

Requisitos relacionados: RNF-04, RNF-05, RNF-06, RNF-09, RNF-10, RNF-13.



<a id="rf-12-2"></a>
### RF-12.2 Iniciar la prueba gratuita general

| Campo | Contenido |
| --- | --- |
| ID requerimiento | RF-12.2 |
| Nombre | Iniciar la prueba gratuita general |
| Propósito | Permitir evaluar el servicio antes del primer abono. |
| Descripción | Al habilitar por primera vez el perfil para recibir solicitudes, se concede una prueba general de 30 días como parámetro inicial configurable. La primera habilitación del perfil establece el inicio de la prueba gratuita. La renovación posterior requiere una compra iniciada por el maker. El criterio de habilitación se completa en PD-01. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Alta |
| Criterio de éxito | 1. La primera habilitación concede un único beneficio inicial identificable.<br>2. Repetir la habilitación, cerrar sesión o editar el perfil no reinicia la prueba.<br>3. Inicio, fin y versión de configuración quedan conservados con hora del servidor. |

Requisitos relacionados: RNF-04, RNF-05, RNF-06, RNF-09, RNF-10, RNF-13.



<a id="rf-12-3"></a>
### RF-12.3 Asignar el programa Makers Fundadores

| Campo | Contenido |
| --- | --- |
| ID requerimiento | RF-12.3 |
| Nombre | Asignar el programa Makers Fundadores |
| Propósito | Reconocer al grupo inicial sin otorgar acceso gratuito indefinido. |
| Descripción | Administración puede asignar manualmente el beneficio de fundadores dentro de un programa habilitado y con cupo disponible. El beneficio inicial es de 90 días totales en lugar de 30, nunca 30 más 90. La inscripción y el consumo del cupo son atómicos y auditados. Cupo concreto, ventana y tratamiento de asignaciones posteriores al inicio requieren PD-10. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Media |
| Criterio de éxito | 1. Una misma identidad maker no consume dos cupos ni obtiene pruebas acumuladas.<br>2. Dos asignaciones concurrentes no superan el cupo configurado.<br>3. Se muestran la duración, las condiciones y los beneficios concretos del programa. La selección de ofertas y la reputación siguen las reglas generales de la plataforma. |

Requisitos relacionados: RNF-04, RNF-05, RNF-06, RNF-09, RNF-10, RNF-13.



<a id="rf-12-4"></a>
### RF-12.4 Consultar estado y vencimiento de acceso

| Campo | Contenido |
| --- | --- |
| ID requerimiento | RF-12.4 |
| Nombre | Consultar estado y vencimiento de acceso |
| Propósito | Dar al maker información clara sobre su habilitación comercial. |
| Descripción | El maker consulta prueba o período pago vigente, pertenencia al programa de fundadores, fecha de vencimiento, próximo precio conocido y opciones de renovación. El distintivo de fundador no prueba identidad, calidad ni participación societaria. El estado de acceso se calcula con fechas y permisos; no depende de que se haya enviado un recordatorio. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Alta |
| Criterio de éxito | 1. El maker solo consulta sus propios datos comerciales y compras.<br>2. La vista distingue prueba, beneficio fundador, acceso pago y vencimiento.<br>3. La vista identifica compras pendientes, confirmadas y simuladas según el estado verificado y el entorno correspondiente. |

Requisitos relacionados: RNF-04, RNF-05, RNF-06, RNF-09, RNF-10, RNF-13.



<a id="rf-12-5"></a>
### RF-12.5 Iniciar el pago del abono

| Campo | Contenido |
| --- | --- |
| ID requerimiento | RF-12.5 |
| Nombre | Iniciar el pago del abono |
| Propósito | Cobrar el servicio propio de la plataforma al maker. |
| Descripción | El maker inicia o recupera una compra del plan vigente y su checkout de Mercado Pago Checkout Pro. El backend fija importe, moneda, versión y referencia; la plataforma es la receptora de sus propios abonos. La compra corresponde exclusivamente al abono del maker a la plataforma. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Alta |
| Criterio de éxito | 1. El intento pertenece a una compra y al maker autenticado.<br>2. Repetir la misma operación recupera el intento existente o informa su estado incierto.<br>3. El backend utiliza el importe y la moneda conservados en la compra. |

Requisitos relacionados: RNF-04, RNF-05, RNF-06, RNF-09, RNF-10, RNF-13.



<a id="rf-12-6"></a>
### RF-12.6 Verificar notificaciones de pago del abono

| Campo | Contenido |
| --- | --- |
| ID requerimiento | RF-12.6 |
| Nombre | Verificar notificaciones de pago del abono |
| Propósito | Evitar acreditaciones falsas o repetidas. |
| Descripción | La API verifica autenticidad, registra la notificación válida de forma duradera y consulta el recurso al proveedor. Contrasta cuenta receptora de la plataforma, entorno, referencia, importe, moneda y estado. El procesamiento es recuperable e idempotente. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Alta |
| Criterio de éxito | 1. Un aviso auténtico y consistente se vincula a la compra correcta.<br>2. Un evento no auténtico, ajeno o de otro entorno no habilita acceso.<br>3. Duplicados o eventos fuera de orden no crean períodos adicionales ni reemplazan indebidamente un estado más reciente. |

Requisitos relacionados: RNF-04, RNF-05, RNF-06, RNF-09, RNF-10, RNF-13.



<a id="rf-12-7"></a>
### RF-12.7 Consultar y conciliar compras de membresía

| Campo | Contenido |
| --- | --- |
| ID requerimiento | RF-12.7 |
| Nombre | Consultar y conciliar compras de membresía |
| Propósito | Resolver pagos pendientes o inciertos sin duplicar cargos. |
| Descripción | El maker consulta sus compras e intentos y el proceso autorizado contrasta con Mercado Pago sus resultados pendientes o inciertos. Un segundo cobro efectivo se registra como anomalía para resolución y conciliación. La compra conserva una única concesión de acceso. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Alta |
| Criterio de éxito | 1. Se recupera la compra correcta por su referencia y contexto.<br>2. Un timeout no provoca un nuevo cobro a ciegas.<br>3. La resolución y las diferencias quedan auditadas sin exponer secretos. |

Requisitos relacionados: RNF-04, RNF-05, RNF-06, RNF-09, RNF-10, RNF-13.



<a id="rf-12-8"></a>
### RF-12.8 Conceder acceso por un pago confirmado

| Campo | Contenido |
| --- | --- |
| ID requerimiento | RF-12.8 |
| Nombre | Conceder acceso por un pago confirmado |
| Propósito | Traducir un cobro propio verificado en un período de servicio. |
| Descripción | Después de confirmar el pago elegible de una compra se registra una única concesión del período adquirido. Compra y plan conservan las condiciones aplicadas. La política propuesta para una renovación anticipada agrega el período al final del acceso vigente, sin borrar días ya concedidos; la regla de calendario se cierra en PD-10. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Media |
| Criterio de éxito | 1. Cada compra pagada origina como máximo un período de acceso.<br>2. Reprocesar el mismo pago no suma otro período.<br>3. La concesión preserva precio, plan, referencia y límites temporales; no existe habilitación por silencio o comprobante no verificado. |

Requisitos relacionados: RNF-04, RNF-05, RNF-06, RNF-09, RNF-10, RNF-13.



<a id="rf-12-9"></a>
### RF-12.9 Renovar manualmente la membresía

| Campo | Contenido |
| --- | --- |
| ID requerimiento | RF-12.9 |
| Nombre | Renovar manualmente la membresía |
| Propósito | Mantener un cobro explícito y simple en la primera versión. |
| Descripción | El maker puede iniciar una nueva compra para renovar el acceso. Cada renovación requiere una acción expresa del maker para iniciar una compra. La interfaz informa el importe, la duración y el carácter manual de la renovación. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Alta |
| Criterio de éxito | 1. Renovar requiere una acción expresa que inicia el checkout.<br>2. Vencer la prueba no genera cargos por sí mismo.<br>3. Una renovación fallida o abandonada no se informa como pagada. |

Requisitos relacionados: RNF-04, RNF-05, RNF-06, RNF-09, RNF-10, RNF-13.



<a id="rf-12-10"></a>
### RF-12.10 Aplicar vigencia a trabajos nuevos y preservar los activos

| Campo | Contenido |
| --- | --- |
| ID requerimiento | RF-12.10 |
| Nombre | Aplicar vigencia a trabajos nuevos y preservar los activos |
| Propósito | Limitar el acceso comercial sin perjudicar acuerdos ya confirmados. |
| Descripción | La selección de makers y las operaciones que crean compromisos nuevos verifican la habilitación aplicable. Al vencer el acceso se impide aceptar nuevos trabajos según la política de ofertas acordada, pero se mantienen las acciones necesarias sobre pedidos existentes: chat, producción, evidencia, revisión y entrega. El comportamiento de ofertas previas a un vencimiento se completa en PD-05. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Media |
| Criterio de éxito | 1. Un maker vencido no confirma un trabajo nuevo mediante una petición directa que eluda la interfaz.<br>2. Vencer el acceso no cancela pedidos ni bloquea su finalización.<br>3. La guarda utiliza la fecha y los permisos calculados por el servidor. |

Requisitos relacionados: RNF-04, RNF-05, RNF-06, RNF-09, RNF-10, RNF-13.



<a id="rf-12-11"></a>
### RF-12.11 Recordar vencimientos de acceso

| Campo | Contenido |
| --- | --- |
| ID requerimiento | RF-12.11 |
| Nombre | Recordar vencimientos de acceso |
| Propósito | Facilitar una renovación voluntaria sin cobrar automáticamente. |
| Descripción | Se generan avisos de vencimiento y opciones de renovación con canales y frecuencia acordados. El aviso informa precio conocido, fecha y condición manual, sin alterar por sí mismo períodos o compras. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Alta |
| Criterio de éxito | 1. Los destinatarios son autorizados y los reintentos no duplican efectos comerciales.<br>2. Un fallo al avisar no extiende ni acorta la vigencia.<br>3. Los avisos de precio utilizan exclusivamente los valores del plan configurado. |

Requisitos relacionados: RNF-04, RNF-05, RNF-06, RNF-09, RNF-10, RNF-13.



<a id="rf-12-12"></a>
### RF-12.12 Gestionar devoluciones del abono autorizadas

| Campo | Contenido |
| --- | --- |
| ID requerimiento | RF-12.12 |
| Nombre | Gestionar devoluciones del abono autorizadas |
| Propósito | Resolver devoluciones de nuestro servicio sin intervenir en el precio de la impresión. |
| Descripción | Cuando la política aplicable lo autorice, el proceso registra y verifica una devolución total o parcial de un abono cobrado por la plataforma. Se conserva motivo, monto, operación y resultado. Condiciones, responsable y efecto sobre períodos futuros requieren PD-09; la autorización de devolución sigue la política específica del abono. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Should |
| Estabilidad | Media |
| Criterio de éxito | 1. La devolución pertenece a un pago de membresía elegible, con moneda e importe correctos.<br>2. Repetir la misma operación no duplica el reembolso.<br>3. Una devolución pendiente no se informa como realizada y nunca bloquea por sí sola la finalización de pedidos ya aceptados. |

Requisitos relacionados: RNF-04, RNF-05, RNF-06, RNF-09, RNF-10, RNF-13.



<a id="rf-12-13"></a>
### RF-12.13 Auditar cambios del plan y beneficios

| Campo | Contenido |
| --- | --- |
| ID requerimiento | RF-12.13 |
| Nombre | Auditar cambios del plan y beneficios |
| Propósito | Conservar trazabilidad de habilitación comercial y promociones. |
| Descripción | Administración consulta y registra cambios autorizados de versiones del plan, duraciones gratuitas, cupo y asignaciones de fundadores. Las concesiones guardan la configuración aplicada y no se recalculan con cambios posteriores. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Alta |
| Criterio de éxito | 1. Se identifica actor, fecha, motivo y condiciones anteriores y nuevas.<br>2. Un rol no autorizado no cambia precios, cupos ni períodos.<br>3. No se eliminan compras o concesiones históricas para simular otra antigüedad. |

Requisitos relacionados: RNF-04, RNF-05, RNF-06, RNF-09, RNF-10, RNF-13.



<a id="rf-12-14"></a>
### RF-12.14 Separar simulación y cobros reales de membresía

| Campo | Contenido |
| --- | --- |
| ID requerimiento | RF-12.14 |
| Nombre | Separar simulación y cobros reales de membresía |
| Propósito | Mantener una contingencia académica sin habilitar accesos reales indebidamente. |
| Descripción | El adaptador simulado puede demostrar compra, notificación y concesión únicamente en entornos permitidos e identificados. Los registros conservan modo y contexto. La simulación no cobra ni habilita períodos comerciales reales en producción. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Alta |
| Criterio de éxito | 1. Cada vista y registro identifica el modo del intento y del período originado.<br>2. Un cambio del modo por defecto no convierte intentos históricos.<br>3. Un resultado simulado no satisface una compra real ni utiliza credenciales reales. |

Requisitos relacionados: RNF-04, RNF-05, RNF-06, RNF-09, RNF-10, RNF-13.



<a id="rf-12-15"></a>
### RF-12.15 Informar el alcance del pago y del programa de fundadores

| Campo | Contenido |
| --- | --- |
| ID requerimiento | RF-12.15 |
| Nombre | Informar el alcance del pago y del programa de fundadores |
| Propósito | Evitar que el usuario confunda la membresía con una garantía de la impresión. |
| Descripción | La interfaz explica que el abono corresponde al uso de 3DAltoque por el maker y que el pago de la impresión se acuerda directamente entre cliente y maker. La plataforma no recibe, custodia, reparte ni garantiza esos fondos. Los fundadores no reciben pedidos o calificaciones garantizados ni derechos societarios por ese nombre. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Alta |
| Criterio de éxito | 1. Las pantallas de compra, prueba y fundadores muestran las condiciones antes de la aceptación correspondiente.<br>2. Una transferencia o comprobante entre cliente y maker no aparece como pago verificado por 3DAltoque.<br>3. La aprobación de la pieza sigue siendo explícita antes de la entrega, independiente del cobro del abono. |

Requisitos relacionados: RNF-04, RNF-05, RNF-06, RNF-09, RNF-10, RNF-13.
