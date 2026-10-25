---
title: "Requerimientos funcionales de 3DAltoque"
---

# Requerimientos funcionales de 3DAltoque

Versión 3.0. Fecha: 25 de octubre de 2026. 68 fichas vigentes; nueve requisitos anteriores retirados.

El alcance comprende solicitudes personalizadas y pedidos directos de productos del maker, con oferta o condiciones publicadas conservadas, producción, revisión expresa, conversación desde el pedido confirmado y entrega personal. La plataforma cobra el abono del maker mediante renovación manual.

RF-08.1 a RF-08.9 conservan sus identificadores como antecedentes retirados del modelo de comisiones. El modelo comercial se define en [ADR-002](/3daltoque-docs/decisiones/modelo-comercial/) y la ampliación funcional en [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/).

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
| RF-04.6 | [Solicitar y resolver una contraoferta](#rf-04-6) |
| RF-05.1 | [Conversar en el contexto del pedido](#rf-05-1) |
| RF-05.2 | [Registrar mensajes y adjuntos autorizados](#rf-05-2) |
| RF-05.3 | [Auditar cambios de estado del pedido](#rf-05-3) |
| RF-05.4 | [Consultar la bandeja de conversaciones](#rf-05-4) |
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
| RF-07.5 | [Consultar y marcar avisos internos](#rf-07-5) |
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
| RF-13.1 | [Mantener productos del maker](#rf-13-1) |
| RF-13.2 | [Publicar y retirar productos del catálogo](#rf-13-2) |
| RF-13.3 | [Consultar el catálogo público del maker](#rf-13-3) |
| RF-13.4 | [Confirmar un pedido directo de catálogo](#rf-13-4) |
| RF-14.1 | [Mantener el portfolio del maker](#rf-14-1) |
| RF-14.2 | [Consultar trabajos publicados del maker](#rf-14-2) |
| RF-15.1 | [Valorar a la contraparte de un pedido](#rf-15-1) |
| RF-15.2 | [Consultar reputación publicada](#rf-15-2) |
| RF-15.3 | [Moderar valoraciones con trazabilidad](#rf-15-3) |
| RF-16.1 | [Consultar el historial propio de pedidos](#rf-16-1) |
| RF-17.1 | [Consultar el reporte de actividad](#rf-17-1) |

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

Funcionalidades: F01.

Casos de uso: [CU-13](/3daltoque-docs/analisis/casos/cu-13-registrarse-y-acceder/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

Integraciones: [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-01-2"></a>
### RF-01.2 Gestionar capacidades del maker

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-01.2 |
| Nombre | Gestionar capacidades del maker |
| Propósito | Permitir la búsqueda de proveedores que puedan fabricar la pieza. |
| Descripción | El maker administra perfil público, zona de referencia, impresoras, dimensiones útiles, materiales, colores y disponibilidad. El backend comprueba titularidad, rol y consistencia; una capacidad desactivada deja de participar en búsquedas nuevas. El perfil público muestra sus productos publicados, portfolio y reputación autorizados; los datos privados permanecen sujetos a permisos. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración.; 2026-10-25: revisión funcional de catálogo, comunicación y cobertura de v1. |
| Fecha | 2026-10-25 |
| Versión | 2.1 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. El maker guarda capacidades válidas y las recupera sin cambios de significado o unidad.<br>2. Se rechazan dimensiones o cantidades inválidas y cambios de un usuario no autorizado.<br>3. El matching utiliza las capacidades vigentes declaradas, sin asignar compatibilidad por cercanía solamente. |

Funcionalidades: F03.

Casos de uso: [CU-09](/3daltoque-docs/analisis/casos/cu-09-habilitar-perfil-e-iniciar-prueba/), [CU-21](/3daltoque-docs/analisis/casos/cu-21-gestionar-capacidades-del-maker/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

Integraciones: [INT-02](/3daltoque-docs/diseno/integraciones/#int-02), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F02.

Casos de uso: [CU-22](/3daltoque-docs/analisis/casos/cu-22-gestionar-perfil-de-cliente/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

Integraciones: [INT-02](/3daltoque-docs/diseno/integraciones/#int-02), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F01.

Casos de uso: [CU-13](/3daltoque-docs/analisis/casos/cu-13-registrarse-y-acceder/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

Integraciones: [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-01-5"></a>
### RF-01.5 Cerrar sesión

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-01.5 |
| Nombre | Cerrar sesión |
| Propósito | Finalizar el acceso autorizado desde el cliente utilizado. |
| Descripción | El sistema debe permitir cerrar la sesión activa y retirar o revocar la autorización correspondiente según la estrategia elegida. La duración residual y revocación de credenciales se especifican en PD-01. El cierre afecta al cliente indicado; no se presume cierre global de todos los dispositivos. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Después del cierre, el cliente deja de acceder a pantallas protegidas con esa sesión.<br>2. La credencial de renovación cerrada, si existe, no permite obtener una sesión nueva.<br>3. La API aplica el comportamiento de revocación y expiración documentado. |

Funcionalidades: F01.

Casos de uso: [CU-13](/3daltoque-docs/analisis/casos/cu-13-registrarse-y-acceder/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

Integraciones: [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-02-1"></a>
### RF-02.1 Cargar STL y parámetros de impresión

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-02.1 |
| Nombre | Cargar STL y parámetros de impresión |
| Propósito | Describir técnicamente la pieza que necesita el cliente. |
| Descripción | El cliente crea una solicitud personalizada con STL, unidad declarada, material, color, cantidad, urgencia y finalidad de la pieza. Los campos se validan y el borrador conserva los datos recuperables. Los pedidos originados en un producto del catálogo toman la configuración de su versión publicada y se rigen por RF-13.4. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración.; 2026-10-25: revisión funcional de catálogo, comunicación y cobertura de v1. |
| Fecha | 2026-10-25 |
| Versión | 2.1 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. El archivo completado y habilitado queda vinculado a la solicitud del cliente correcto.<br>2. Un archivo inexistente, ajeno o no habilitado no puede utilizarse para enviar la solicitud.<br>3. La información de escala y parámetros se conserva y puede consultarse para cotizar. |

Funcionalidades: F05.

Casos de uso: [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-02-2"></a>
### RF-02.2 Validar archivos y límites técnicos

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-02.2 |
| Nombre | Validar archivos y límites técnicos |
| Propósito | Detectar cargas incompletas o inválidas antes de utilizarlas. |
| Descripción | El sistema debe comprobar tamaño real, formato/contenido admitido e integridad del archivo recibido conforme a límites documentados. El análisis debe indicar si el archivo puede usarse o qué problema impide hacerlo. La validación examina el contenido recibido y registra los chequeos realizados. La evaluación de fabricación corresponde al maker; la reparación avanzada del archivo queda reservada para otra etapa. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Un STL válido dentro de los límites queda habilitado para su uso autorizado.<br>2. Un archivo truncado, de contenido no admitido o fuera de límites permanece sin habilitar y tiene un motivo de rechazo.<br>3. Durante un análisis pendiente no se informa validación final ni precio definitivo. |

Funcionalidades: F05.

Casos de uso: [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/), [CU-24](/3daltoque-docs/analisis/casos/cu-24-gestionar-archivos-autorizados/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-02-3"></a>
### RF-02.3 Crear solicitud de impresión

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-02.3 |
| Nombre | Crear solicitud de impresión |
| Propósito | Registrar la necesidad del cliente para obtener ofertas. |
| Descripción | El cliente envía una solicitud personalizada después de validar su archivo y parámetros. El sistema conserva una versión y organiza su búsqueda de makers. Para un producto del catálogo, el backend materializa la solicitud de origen y su acuerdo durante la confirmación de RF-13.4; ese circuito utiliza al maker de la publicación. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración.; 2026-10-25: revisión funcional de catálogo, comunicación y cobertura de v1. |
| Fecha | 2026-10-25 |
| Versión | 2.1 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Una creación válida conserva propietario, archivo y características de la solicitud.<br>2. Una solicitud incompleta según PD-02 no se envía a makers y explica qué debe corregirse.<br>3. Un presupuesto o estimación de referencia no se presenta como aceptación contractual de un maker. |

Funcionalidades: F05.

Casos de uso: [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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
| Criterio de éxito | 1. El cliente consulta el mismo estado que determina la API.<br>2. Los plazos mostrados corresponden a los almacenados y no habilitan operaciones ya vencidas.<br>3. La ausencia de un plazo aprobado no se reemplaza por una fecha inventada. |

Funcionalidades: F12, F19.

Casos de uso: [CU-17](/3daltoque-docs/analisis/casos/cu-17-consultar-historial-de-pedidos/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-02-5"></a>
### RF-02.5 Presentar estimación orientativa

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-02.5 |
| Nombre | Presentar estimación orientativa |
| Propósito | Ayudar al cliente a comparar referencias sin sustituir la oferta humana. |
| Descripción | El sistema calcula automáticamente una estimación orientativa para solicitudes personalizadas con datos y parámetros de cálculo disponibles. Conserva método y configuración versionados, entradas, moneda, fecha y supuestos. Cuando la geometría, las unidades o los parámetros resultan insuficientes, informa el motivo y permite continuar a la cotización de makers. El precio de un producto de catálogo se obtiene de la publicación. La estrategia y sus parámetros de ejecución corresponden a PD-03. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones.; 2026-10-25: revisión funcional de catálogo, comunicación y cobertura de v1. |
| Fecha | 2026-10-25 |
| Versión | 2.1 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Should (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Baja. Aplicabilidad, política o valores condicionados a decisiones aún abiertas. |
| Criterio de éxito | 1. Una solicitud válida obtiene una referencia calculada con entradas y configuración identificables.<br>2. Un archivo sin volumen utilizable, una unidad ambigua o una configuración ausente produce un resultado indisponible con causa explícita.<br>3. La aceptación del cliente utiliza la oferta vigente o las condiciones del producto publicado, conservadas en el pedido. |

Funcionalidades: F06.

Casos de uso: [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/).

Requisitos de calidad: [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-03-1"></a>
### RF-03.1 Enviar solicitud a makers compatibles y cercanos

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-03.1 |
| Nombre | Enviar solicitud a makers compatibles y cercanos |
| Propósito | Conectar la demanda con un grupo reducido de proveedores elegibles. |
| Descripción | El sistema filtra makers por capacidades, material, volumen útil y habilitación comercial; luego considera ubicación y disponibilidad para seleccionar un grupo limitado. Conserva la política aplicada y sus candidatos. El pedido de un producto publicado utiliza directamente al maker titular del producto, según RF-13.4. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración.; 2026-10-25: revisión funcional de catálogo, comunicación y cobertura de v1. |
| Fecha | 2026-10-25 |
| Versión | 2.1 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Para un conjunto conocido de makers, los invitados cumplen los filtros y el límite configurados para la prueba.<br>2. Un maker incompatible o fuera del criterio geográfico no se incorpora por ser el único disponible.<br>3. Si no hay candidatos se informa el resultado y no se envía indiscriminadamente a toda la plataforma. |

Funcionalidades: F07, F08.

Casos de uso: [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/).

Requisitos de calidad: [RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-03](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-03), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06).

Integraciones: [INT-02](/3daltoque-docs/diseno/integraciones/#int-02), [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-03-2"></a>
### RF-03.2 Consultar solicitudes recibidas por el maker

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-03.2 |
| Nombre | Consultar solicitudes recibidas por el maker |
| Propósito | Organizar las oportunidades de trabajo habilitadas para cada maker. |
| Descripción | El sistema debe presentar al maker las solicitudes para las que fue invitado, con información necesaria, estado y plazos. El orden de presentación se define en PD-04; experiencia y reputación no se convierten en filtros obligatorios sin definir sus datos y reglas. El acceso a archivos se rige por RF-10.3. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Should (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. El maker consulta las solicitudes habilitadas para su cuenta y no las reservadas a otros destinatarios.<br>2. La lista sigue el orden acordado y muestra estados/plazos actuales.<br>3. Una solicitud cerrada o no elegible no se presenta como una invitación todavía accionable. |

Funcionalidades: F08.

Casos de uso: [CU-02](/3daltoque-docs/analisis/casos/cu-02-recibir-y-responder-ofertas/).

Requisitos de calidad: [RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02), [RNF-03](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-03), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06).

Integraciones: [INT-02](/3daltoque-docs/diseno/integraciones/#int-02), [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F09.

Casos de uso: [CU-02](/3daltoque-docs/analisis/casos/cu-02-recibir-y-responder-ofertas/), [CU-25](/3daltoque-docs/analisis/casos/cu-25-negociar-condiciones-de-una-oferta/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F09.

Casos de uso: [CU-02](/3daltoque-docs/analisis/casos/cu-02-recibir-y-responder-ofertas/), [CU-25](/3daltoque-docs/analisis/casos/cu-25-negociar-condiciones-de-una-oferta/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F09.

Casos de uso: [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-04-4"></a>
### RF-04.4 Aceptar una sola oferta y confirmar pedido

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-04.4 |
| Nombre | Aceptar una sola oferta y confirmar pedido |
| Propósito | Materializar el acuerdo y cerrar las alternativas de la solicitud. |
| Descripción | El cliente acepta una versión vigente de una oferta propia. El backend comprueba identidad, titularidad, maker distinto del cliente, habilitación comercial, versión y estado; confirma un único pedido por solicitud, conserva condiciones, cierra alternativas y crea su conversación en una transacción. La misma intención identificada recupera el pedido existente; otro contenido con esa clave produce conflicto. RF-13.4 reutiliza estas invariantes para el pedido directo de catálogo. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración.; 2026-10-25: revisión funcional de catálogo, comunicación y cobertura de v1. |
| Fecha | 2026-10-25 |
| Versión | 2.1 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Alta. Regla principal estable en el alcance vigente; la ficha requiere revisión del equipo. |
| Criterio de éxito | 1. Una aceptación válida crea un pedido y deja las ofertas competidoras cerradas.<br>2. Dos aceptaciones concurrentes no crean dos pedidos para la misma solicitud.<br>3. Una oferta vencida/modificada se rechaza de forma controlada; repetir la misma operación confirmada devuelve el mismo acuerdo, sin uno adicional. |

Funcionalidades: F10.

Casos de uso: [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/), [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F09.

Casos de uso: [CU-02](/3daltoque-docs/analisis/casos/cu-02-recibir-y-responder-ofertas/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-04-6"></a>
### RF-04.6 Solicitar y resolver una contraoferta

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-04.6 |
| Nombre | Solicitar y resolver una contraoferta |
| Propósito | Conservar la negociación de condiciones antes del acuerdo. |
| Descripción | El cliente propone precio, plazo y observación sobre una versión concreta de una oferta. El maker acepta o rechaza la propuesta. Aceptarla publica una nueva versión de su oferta con condiciones y vigencia explícitas; el cliente conserva la decisión final de contratación. Se registra proponente, versión de origen, respuesta y versión resultante. Una oferta aceptada, vencida o modificada impide resolver una propuesta obsoleta. |
| Historial | 2026-10-25: incorporación durante la revisión funcional completa. |
| Fecha | 2026-10-25 |
| Versión | 1.0 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). |
| Prioridad | Must para el alcance funcional de v1. |
| Estabilidad | Alta en el comportamiento; parámetros operativos versionados. |
| Criterio de éxito | 1. Una propuesta aceptada por el maker genera una nueva versión trazable de la oferta.<br>2. El cliente confirma el pedido mediante la aceptación de la versión resultante.<br>3. Una propuesta sobre una versión reemplazada produce conflicto y conserva el pedido y las condiciones existentes. |

Funcionalidades: F09.

Casos de uso: [CU-25](/3daltoque-docs/analisis/casos/cu-25-negociar-condiciones-de-una-oferta/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-05-1"></a>
### RF-05.1 Conversar en el contexto del pedido

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-05.1 |
| Nombre | Conversar en el contexto del pedido |
| Propósito | Permitir coordinación y seguimiento entre cliente y maker. |
| Descripción | La conversación se vincula a un pedido confirmado y a sus participantes autorizados. Cliente y maker consultan el historial y envían mensajes mientras el pedido siga accesible conforme a la política de conservación. La creación del pedido habilita una sola conversación. La consulta previa a la contratación queda fuera del circuito de chat de v1. El vencimiento comercial del maker mantiene la comunicación de los pedidos existentes. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración.; 2026-10-25: revisión funcional de catálogo, comunicación y cobertura de v1. |
| Fecha | 2026-10-25 |
| Versión | 2.1 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Un pedido confirmado dispone de una única conversación para sus participantes.<br>2. Una solicitud, invitación o producto sin pedido confirmado impide abrir o enviar mensajes en una conversación de pedido.<br>3. Un usuario ajeno recibe una denegación de acceso; los participantes conservan historial al reconectar o vencer la membresía del maker. |

Funcionalidades: F13.

Casos de uso: [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/), [CU-14](/3daltoque-docs/analisis/casos/cu-14-conversar-en-un-pedido/), [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-05-2"></a>
### RF-05.2 Registrar mensajes y adjuntos autorizados

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-05.2 |
| Nombre | Registrar mensajes y adjuntos autorizados |
| Propósito | Conservar el intercambio y las referencias de progreso. |
| Descripción | El backend verifica participante y permiso actual, exige texto o al menos un adjunto habilitado, y persiste el mensaje antes de confirmar envío. Conserva remitente, conversación, fecha del servidor y clave estable del cliente. La repetición del mismo contenido y clave recupera el mensaje; una clave reutilizada con otro contenido produce conflicto. Los estados pendiente, enviado y fallido representan el resultado del comando y se reconcilian con el historial persistido. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración.; 2026-10-25: revisión funcional de catálogo, comunicación y cobertura de v1. |
| Fecha | 2026-10-25 |
| Versión | 2.1 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Un mensaje informado como enviado puede recuperarse en el historial autorizado.<br>2. Repetir el mismo envío identificado no genera otro mensaje visible.<br>3. Un adjunto ajeno, inválido o no habilitado no se publica como parte del mensaje. |

Funcionalidades: F13.

Casos de uso: [CU-14](/3daltoque-docs/analisis/casos/cu-14-conversar-en-un-pedido/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F12, F19.

Casos de uso: [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/), [CU-17](/3daltoque-docs/analisis/casos/cu-17-consultar-historial-de-pedidos/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-05-4"></a>
### RF-05.4 Consultar la bandeja de conversaciones

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-05.4 |
| Nombre | Consultar la bandeja de conversaciones |
| Propósito | Ubicar la comunicación de los pedidos propios. |
| Descripción | El cliente y el maker consultan una bandeja paginada de sus conversaciones de pedidos confirmados, con referencia de pedido y último mensaje autorizado. La lectura comprueba permisos actuales y permite abrir el historial. La vista vacía ofrece acceso a los pedidos; los mensajes pendientes del dispositivo se reconcilian con el servidor. |
| Historial | 2026-10-25: incorporación durante la revisión funcional completa. |
| Fecha | 2026-10-25 |
| Versión | 1.0 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). |
| Prioridad | Must para el alcance funcional de v1. |
| Estabilidad | Alta en el comportamiento; parámetros operativos versionados. |
| Criterio de éxito | 1. La bandeja contiene únicamente conversaciones de pedidos en los que participa el usuario.<br>2. Una paginación estable permite recuperar las conversaciones sin duplicarlas.<br>3. Una pérdida de conexión conserva los mensajes pendientes y permite reintentar con su identidad original. |

Funcionalidades: F13.

Casos de uso: [CU-14](/3daltoque-docs/analisis/casos/cu-14-conversar-en-un-pedido/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F15.

Casos de uso: [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-06-2"></a>
### RF-06.2 Solicitar revisión del cliente

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-06.2 |
| Nombre | Solicitar revisión del cliente |
| Propósito | Abrir el control de conformidad de la pieza. |
| Descripción | El sistema debe poner el resultado presentado en pendiente de revisión cuando la evidencia obligatoria esté disponible y habilitada. Debe mostrar al cliente lo que tiene que revisar y las acciones de aprobación u observación. La revisión permanece pendiente hasta la aprobación expresa del cliente, que habilita la coordinación de entrega. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Alta. Regla principal estable en el alcance vigente; la ficha requiere revisión del equipo. |
| Criterio de éxito | 1. Una evidencia final válida genera una revisión pendiente identificable.<br>2. Una presentación sin evidencia requerida no habilita la revisión final ni la entrega.<br>3. El cliente ve la revisión actual y el maker puede conocer que espera su respuesta. |

Funcionalidades: F15.

Casos de uso: [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-06-3"></a>
### RF-06.3 Aprobar resultado o registrar observaciones

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-06.3 |
| Nombre | Aprobar resultado o registrar observaciones |
| Propósito | Expresar conformidad o iniciar la resolución de un problema. |
| Descripción | El sistema debe permitir al cliente del pedido aprobar explícitamente la revisión presentada o registrar observaciones/reclamo. La decisión se asocia a esa evidencia, actor y fecha. La corrección y el escalamiento requieren PD-07; una aprobación de una revisión anterior no se presume válida para archivos sustituidos. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Una aprobación válida identifica la revisión y permite las acciones de entrega autorizadas.<br>2. Una observación conserva el motivo y mantiene bloqueada la entrega hasta resolver el proceso acordado.<br>3. Otro usuario o una solicitud sin revisión pendiente no produce una aprobación válida. |

Funcionalidades: F22.

Casos de uso: [CU-05](/3daltoque-docs/analisis/casos/cu-05-revision-y-aprobacion/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F22.

Casos de uso: [CU-05](/3daltoque-docs/analisis/casos/cu-05-revision-y-aprobacion/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F12.

Casos de uso: [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-06-6"></a>
### RF-06.6 Coordinar entrega personal

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-06.6 |
| Nombre | Coordinar entrega personal |
| Propósito | Acordar el encuentro y proteger los domicilios particulares. |
| Descripción | Cliente y maker coordinan un punto neutral y un horario para una revisión aprobada. La propuesta identifica versión y autor; la contraparte acepta esa versión. Un cambio de punto u horario crea una nueva propuesta y exige renovar el acuerdo. La ubicación privada del maker se protege y los incidentes se registran mediante soporte. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones.; 2026-10-25: revisión funcional de catálogo, comunicación y cobertura de v1. |
| Fecha | 2026-10-25 |
| Versión | 2.1 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Un pedido aprobado puede registrar un acuerdo de punto y horario entre sus participantes.<br>2. Un pedido sin aprobación vigente no habilita coordinación de entrega.<br>3. La búsqueda pública no expone el domicilio privado del maker como consecuencia de coordinar el encuentro. |

Funcionalidades: F16.

Casos de uso: [CU-06](/3daltoque-docs/analisis/casos/cu-06-entrega-personal/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

Integraciones: [INT-02](/3daltoque-docs/diseno/integraciones/#int-02), [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-06-7"></a>
### RF-06.7 Registrar recepción y completar entrega

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-06.7 |
| Nombre | Registrar recepción y completar entrega |
| Propósito | Conservar evidencia del cierre físico del pedido. |
| Descripción | El cliente titular confirma expresamente la recepción desde su sesión autenticada, sobre la entrega y revisión aprobada vigentes. El backend comprueba el acuerdo de entrega, autoriza al cliente, registra fecha y clave idempotente y completa una sola vez la entrega y el pedido. El maker puede informar un incidente y consultar el resultado. La evidencia de fabricación y el silencio mantienen la recepción pendiente. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones.; 2026-10-25: revisión funcional de catálogo, comunicación y cobertura de v1. |
| Fecha | 2026-10-25 |
| Versión | 2.1 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Baja. Aplicabilidad, política o valores condicionados a decisiones aún abiertas. |
| Criterio de éxito | 1. El cliente autorizado confirma la entrega acordada y obtiene un único registro de recepción.<br>2. Una repetición de la confirmación recupera el mismo resultado y conserva su fecha original.<br>3. Un maker, un tercero, una entrega sin acuerdo o una revisión sin aprobación vigente no completan la recepción. |

Funcionalidades: F17.

Casos de uso: [CU-06](/3daltoque-docs/analisis/casos/cu-06-entrega-personal/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F14.

Casos de uso: [CU-23](/3daltoque-docs/analisis/casos/cu-23-recibir-y-consultar-notificaciones/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-07-2"></a>
### RF-07.2 Gestionar moderación y soporte

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-07.2 |
| Nombre | Gestionar moderación y soporte |
| Propósito | Permitir intervención operativa controlada. |
| Descripción | Administración gestiona soporte y moderación mediante capacidades específicas. Cada intervención sobre perfiles, publicaciones, portfolio, reputación o pedidos identifica recurso, motivo, actor, fecha y efecto. Las consultas privadas requieren autorización y auditoría. Las operaciones financieras de administración corresponden al abono de membresía; el pago de impresiones se acuerda entre cliente y maker. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración.; 2026-10-25: revisión funcional de catálogo, comunicación y cobertura de v1. |
| Fecha | 2026-10-25 |
| Versión | 2.1 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Should (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Baja. Aplicabilidad, política o valores condicionados a decisiones aún abiertas. |
| Criterio de éxito | 1. Solo un rol autorizado consulta o resuelve un caso de soporte.<br>2. Una acción de moderación registra actor, motivo y resultado.<br>3. La intervención no concede acceso privado irrestricto ni modifica pagos reales sin el circuito de verificación correspondiente. |

Funcionalidades: F20.

Casos de uso: [CU-07](/3daltoque-docs/analisis/casos/cu-07-administracion-operativa/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-07-3"></a>
### RF-07.3 Enviar avisos por canales externos habilitados

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-07.3 |
| Nombre | Enviar avisos por canales externos habilitados |
| Propósito | Extender los avisos cuando el usuario no está usando la plataforma. |
| Descripción | Si se adopta un canal externo, el sistema debe entregar al proveedor un aviso con destinatario, plantilla y datos mínimos, y registrar aceptación/error. Correo, push y SMS requieren selección en PD-11; no se presume utilizar todos. Las confirmaciones de entrega se registran separadas de la aceptación del envío cuando estén disponibles. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Should (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Baja. Aplicabilidad, política o valores condicionados a decisiones aún abiertas. |
| Criterio de éxito | 1. Un aviso elegible utiliza el canal configurado y conserva su referencia de envío.<br>2. Un fallo o destinatario inválido se registra sin deshacer el hecho de negocio ni declarar entrega exitosa.<br>3. Las preferencias/permisos y los reintentos acordados se respetan, sin generar envíos duplicados por errores propios de la plataforma. |

Funcionalidades: F14.

Casos de uso: [CU-23](/3daltoque-docs/analisis/casos/cu-23-recibir-y-consultar-notificaciones/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F14.

Casos de uso: [CU-05](/3daltoque-docs/analisis/casos/cu-05-revision-y-aprobacion/), [CU-23](/3daltoque-docs/analisis/casos/cu-23-recibir-y-consultar-notificaciones/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-07-5"></a>
### RF-07.5 Consultar y marcar avisos internos

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-07.5 |
| Nombre | Consultar y marcar avisos internos |
| Propósito | Recuperar los avisos relevantes del usuario. |
| Descripción | El destinatario consulta una bandeja paginada de avisos internos y marca cada aviso como leído. El backend autoriza por destinatario y vuelve a comprobar el recurso al abrir su destino. Los recordatorios duplicados de un mismo evento se deduplican; el estado leído se conserva entre dispositivos. |
| Historial | 2026-10-25: incorporación durante la revisión funcional completa. |
| Fecha | 2026-10-25 |
| Versión | 1.0 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). |
| Prioridad | Must para el alcance funcional de v1. |
| Estabilidad | Alta en el comportamiento; parámetros operativos versionados. |
| Criterio de éxito | 1. Un destinatario recupera sus avisos y conserva el estado leído al volver a entrar.<br>2. Un identificador de aviso ajeno recibe una denegación.<br>3. Un destino retirado o sin permiso muestra una salida de recuperación que protege sus datos. |

Funcionalidades: F14.

Casos de uso: [CU-23](/3daltoque-docs/analisis/casos/cu-23-recibir-y-consultar-notificaciones/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F02, F07, F16.

Casos de uso: [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/), [CU-06](/3daltoque-docs/analisis/casos/cu-06-entrega-personal/), [CU-21](/3daltoque-docs/analisis/casos/cu-21-gestionar-capacidades-del-maker/), [CU-22](/3daltoque-docs/analisis/casos/cu-22-gestionar-perfil-de-cliente/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05).

Integraciones: [INT-02](/3daltoque-docs/diseno/integraciones/#int-02), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F07, F16.

Casos de uso: [CU-06](/3daltoque-docs/analisis/casos/cu-06-entrega-personal/).

Requisitos de calidad: [RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12).

Integraciones: [INT-02](/3daltoque-docs/diseno/integraciones/#int-02), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F23.

Casos de uso: [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/), [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/), [CU-24](/3daltoque-docs/analisis/casos/cu-24-gestionar-archivos-autorizados/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F23.

Casos de uso: [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/), [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/), [CU-24](/3daltoque-docs/analisis/casos/cu-24-gestionar-archivos-autorizados/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-10-3"></a>
### RF-10.3 Consultar y descargar archivos con permiso

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-10.3 |
| Nombre | Consultar y descargar archivos con permiso |
| Propósito | Entregar referencias y evidencias solo a usuarios habilitados. |
| Descripción | El sistema entrega archivos únicamente mediante la autorización del recurso, finalidad y estado. Los originales de STL, adjuntos y evidencias mantienen acceso restringido. Las publicaciones de catálogo y portfolio pueden mostrar derivados de imágenes o videos autorizados, conservando privados los originales y las claves de almacenamiento. La retirada o moderación de una publicación retira su visualización pública y conserva las referencias históricas permitidas. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones.; 2026-10-25: revisión funcional de catálogo, comunicación y cobertura de v1. |
| Fecha | 2026-10-25 |
| Versión | 2.1 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. El participante habilitado obtiene el archivo asociado al recurso solicitado.<br>2. Un usuario ajeno o sin permiso vigente no recibe contenido ni una nueva autorización de descarga.<br>3. El acceso temporal y su vencimiento siguen el contrato; se documentan los límites de revocación de accesos ya concedidos. |

Funcionalidades: F23.

Casos de uso: [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/), [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/), [CU-24](/3daltoque-docs/analisis/casos/cu-24-gestionar-archivos-autorizados/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F23.

Casos de uso: [CU-24](/3daltoque-docs/analisis/casos/cu-24-gestionar-archivos-autorizados/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-11-1"></a>
### RF-11.1 Exponer operaciones mediante API común

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-11.1 |
| Nombre | Exponer operaciones mediante API común |
| Propósito | Permitir que los canales habilitados utilicen el mismo negocio. |
| Descripción | La API FastAPI versionada expone los recorridos de cliente y maker para Web y React Native y la administración autorizada en Web. Incluye solicitudes personalizadas, catálogo del maker, pedidos directos, ofertas, conversación de pedido, portfolio, reputación, historial, membresía y reportes. El backend aplica los mismos permisos, importes, versiones y transiciones para todos los clientes. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones.; 2026-10-25: revisión funcional de catálogo, comunicación y cobertura de v1. |
| Fecha | 2026-10-25 |
| Versión | 2.1 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Alta. Regla principal estable en el alcance vigente; la ficha requiere revisión del equipo. |
| Criterio de éxito | 1. Una operación equivalente desde clientes habilitados conserva las mismas condiciones de negocio y autorizaciones.<br>2. El contrato identifica datos obligatorios, errores y resultados que cada cliente debe manejar.<br>3. El cliente no puede modificar importes, destinatarios o estados autoritativos omitiendo la validación del backend. |

Funcionalidades: F24.

Casos de uso: [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/), [CU-02](/3daltoque-docs/analisis/casos/cu-02-recibir-y-responder-ofertas/), [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/), [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/), [CU-05](/3daltoque-docs/analisis/casos/cu-05-revision-y-aprobacion/), [CU-06](/3daltoque-docs/analisis/casos/cu-06-entrega-personal/), [CU-07](/3daltoque-docs/analisis/casos/cu-07-administracion-operativa/), [CU-08](/3daltoque-docs/analisis/casos/cu-08-consultar-membresia/), [CU-09](/3daltoque-docs/analisis/casos/cu-09-habilitar-perfil-e-iniciar-prueba/), [CU-10](/3daltoque-docs/analisis/casos/cu-10-asignar-beneficio-fundador/), [CU-11](/3daltoque-docs/analisis/casos/cu-11-pagar-o-renovar-abono/), [CU-12](/3daltoque-docs/analisis/casos/cu-12-gestionar-plan-y-promociones/), [CU-13](/3daltoque-docs/analisis/casos/cu-13-registrarse-y-acceder/), [CU-14](/3daltoque-docs/analisis/casos/cu-14-conversar-en-un-pedido/), [CU-15](/3daltoque-docs/analisis/casos/cu-15-mantener-y-consultar-portfolio/), [CU-16](/3daltoque-docs/analisis/casos/cu-16-valorar-y-consultar-reputacion/), [CU-17](/3daltoque-docs/analisis/casos/cu-17-consultar-historial-de-pedidos/), [CU-18](/3daltoque-docs/analisis/casos/cu-18-consultar-reporte-de-actividad/), [CU-19](/3daltoque-docs/analisis/casos/cu-19-mantener-catalogo-de-productos/), [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/), [CU-21](/3daltoque-docs/analisis/casos/cu-21-gestionar-capacidades-del-maker/), [CU-22](/3daltoque-docs/analisis/casos/cu-22-gestionar-perfil-de-cliente/), [CU-23](/3daltoque-docs/analisis/casos/cu-23-recibir-y-consultar-notificaciones/), [CU-24](/3daltoque-docs/analisis/casos/cu-24-gestionar-archivos-autorizados/), [CU-25](/3daltoque-docs/analisis/casos/cu-25-negociar-condiciones-de-una-oferta/).

Requisitos de calidad: [RNF-01](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-01), [RNF-03](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-03), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-18](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-18), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

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

Funcionalidades: F13, F24.

Casos de uso: [CU-14](/3daltoque-docs/analisis/casos/cu-14-conversar-en-un-pedido/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19), [RNF-01](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-01), [RNF-03](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-03), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14), [RNF-18](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-18).

Integraciones: [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-12-1"></a>
### RF-12.1 Configurar el único plan de membresía

| Campo de la plantilla | Contenido |
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

Funcionalidades: F11, F20.

Casos de uso: [CU-12](/3daltoque-docs/analisis/casos/cu-12-gestionar-plan-y-promociones/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-12-2"></a>
### RF-12.2 Iniciar la prueba gratuita general

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-12.2 |
| Nombre | Iniciar la prueba gratuita general |
| Propósito | Permitir evaluar el servicio antes del primer abono. |
| Descripción | Al habilitar por primera vez el perfil para recibir solicitudes, se concede una prueba general de 30 días como parámetro inicial configurable. La fecha de alta de usuario por sí sola no inicia el plazo. No se solicita tarjeta ni se crea un cobro automático. El criterio de habilitación se completa en PD-01. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Alta |
| Criterio de éxito | 1. La primera habilitación concede un único beneficio inicial identificable.<br>2. Repetir la habilitación, cerrar sesión o editar el perfil no reinicia la prueba.<br>3. Inicio, fin y versión de configuración quedan conservados con hora del servidor. |

Funcionalidades: F03, F11.

Casos de uso: [CU-09](/3daltoque-docs/analisis/casos/cu-09-habilitar-perfil-e-iniciar-prueba/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-12-3"></a>
### RF-12.3 Asignar el programa Makers Fundadores

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-12.3 |
| Nombre | Asignar el programa Makers Fundadores |
| Propósito | Reconocer al grupo inicial sin otorgar acceso gratuito indefinido. |
| Descripción | Administración puede asignar manualmente el beneficio de fundadores dentro de un programa habilitado y con cupo disponible. El beneficio fundador inicial comprende un único período gratuito de 90 días totales, con duración configurable. La inscripción y el consumo del cupo son atómicos y auditados. Cupo concreto, ventana y tratamiento de asignaciones posteriores al inicio requieren PD-10. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Media |
| Criterio de éxito | 1. Una misma identidad maker no consume dos cupos ni obtiene pruebas acumuladas.<br>2. Dos asignaciones concurrentes no superan el cupo configurado.<br>3. Se muestran duración y condiciones; no se promete precio vitalicio, pedidos, prioridad de búsqueda ni mejor reputación. |

Funcionalidades: F11, F20.

Casos de uso: [CU-10](/3daltoque-docs/analisis/casos/cu-10-asignar-beneficio-fundador/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-12-4"></a>
### RF-12.4 Consultar estado y vencimiento de acceso

| Campo de la plantilla | Contenido |
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
| Criterio de éxito | 1. El maker solo consulta sus propios datos comerciales y compras.<br>2. La vista distingue prueba, beneficio fundador, acceso pago y vencimiento.<br>3. No se representa una compra pendiente, un retorno de checkout o un pago simulado como una renovación real. |

Funcionalidades: F11.

Casos de uso: [CU-08](/3daltoque-docs/analisis/casos/cu-08-consultar-membresia/), [CU-09](/3daltoque-docs/analisis/casos/cu-09-habilitar-perfil-e-iniciar-prueba/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-12-5"></a>
### RF-12.5 Iniciar el pago del abono

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-12.5 |
| Nombre | Iniciar el pago del abono |
| Propósito | Cobrar el servicio propio de la plataforma al maker. |
| Descripción | El maker inicia o recupera una compra del plan vigente y su checkout de Mercado Pago Checkout Pro. El backend fija importe, moneda, versión y referencia; la plataforma es la receptora de sus propios abonos. No se cobra al cliente por la impresión ni se utiliza OAuth de vendedores, split, retención o Payouts. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Alta |
| Criterio de éxito | 1. El intento pertenece a una compra y al maker autenticado.<br>2. Repetir la misma operación recupera el intento existente o informa su estado incierto.<br>3. Importe y moneda enviados por la interfaz no sustituyen las condiciones conservadas en la compra. |

Funcionalidades: F11.

Casos de uso: [CU-11](/3daltoque-docs/analisis/casos/cu-11-pagar-o-renovar-abono/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-12-6"></a>
### RF-12.6 Verificar notificaciones de pago del abono

| Campo de la plantilla | Contenido |
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

Funcionalidades: F11.

Casos de uso: [CU-11](/3daltoque-docs/analisis/casos/cu-11-pagar-o-renovar-abono/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-12-7"></a>
### RF-12.7 Consultar y conciliar compras de membresía

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-12.7 |
| Nombre | Consultar y conciliar compras de membresía |
| Propósito | Resolver pagos pendientes o inciertos sin duplicar cargos. |
| Descripción | El maker consulta sus compras e intentos y el proceso autorizado contrasta con Mercado Pago sus resultados pendientes o inciertos. Cada cobro efectivo adicional queda registrado como anomalía para su conciliación y resolución. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Alta |
| Criterio de éxito | 1. Se recupera la compra correcta por su referencia y contexto.<br>2. Un timeout no provoca un nuevo cobro a ciegas.<br>3. La resolución y las diferencias quedan auditadas sin exponer secretos. |

Funcionalidades: F11, F20.

Casos de uso: [CU-07](/3daltoque-docs/analisis/casos/cu-07-administracion-operativa/), [CU-11](/3daltoque-docs/analisis/casos/cu-11-pagar-o-renovar-abono/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-12-8"></a>
### RF-12.8 Conceder acceso por un pago confirmado

| Campo de la plantilla | Contenido |
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

Funcionalidades: F11.

Casos de uso: [CU-11](/3daltoque-docs/analisis/casos/cu-11-pagar-o-renovar-abono/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-12-9"></a>
### RF-12.9 Renovar manualmente la membresía

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-12.9 |
| Nombre | Renovar manualmente la membresía |
| Propósito | Mantener un cobro explícito y simple en la primera versión. |
| Descripción | El maker puede iniciar una nueva compra para renovar el acceso. No se almacena una autorización de débito recurrente ni se carga una tarjeta automáticamente al terminar la prueba. La interfaz muestra claramente que la renovación es manual. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Alta |
| Criterio de éxito | 1. Renovar requiere una acción expresa que inicia el checkout.<br>2. Vencer la prueba no genera cargos por sí mismo.<br>3. Una renovación fallida o abandonada no se informa como pagada. |

Funcionalidades: F11.

Casos de uso: [CU-11](/3daltoque-docs/analisis/casos/cu-11-pagar-o-renovar-abono/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-12-10"></a>
### RF-12.10 Aplicar vigencia a trabajos nuevos y preservar los activos

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-12.10 |
| Nombre | Aplicar vigencia a trabajos nuevos y preservar los activos |
| Propósito | Limitar el acceso comercial sin perjudicar acuerdos ya confirmados. |
| Descripción | El servidor comprueba períodos de acceso y habilitación al recibir invitaciones, emitir ofertas, publicar productos habilitados para pedidos nuevos o confirmar un trabajo nuevo. Al vencer, el maker conserva consulta y finalización de los pedidos existentes, conversación, evidencia, revisión y entrega. Puede mantener borradores y retirar publicaciones; una publicación visible de un maker sin acceso informa la restricción y el backend rechaza un pedido nuevo. El retorno de pago y los avisos no sustituyen esta guarda. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08.; 2026-10-25: revisión funcional de catálogo, comunicación y cobertura de v1. |
| Fecha | 2026-10-25 |
| Versión | 2.1 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Must |
| Estabilidad | Media |
| Criterio de éxito | 1. Un maker vencido no confirma un trabajo nuevo mediante una petición directa que eluda la interfaz.<br>2. Vencer el acceso no cancela pedidos ni bloquea su finalización.<br>3. La guarda determina la vigencia con la fecha del servidor, los permisos y los períodos concedidos. |

Funcionalidades: F08, F10, F11, F12, F13.

Casos de uso: [CU-02](/3daltoque-docs/analisis/casos/cu-02-recibir-y-responder-ofertas/), [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/), [CU-14](/3daltoque-docs/analisis/casos/cu-14-conversar-en-un-pedido/), [CU-17](/3daltoque-docs/analisis/casos/cu-17-consultar-historial-de-pedidos/), [CU-19](/3daltoque-docs/analisis/casos/cu-19-mantener-catalogo-de-productos/), [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/).

Requisitos de calidad: [RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02), [RNF-03](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-03), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-12-11"></a>
### RF-12.11 Recordar vencimientos de acceso

| Campo de la plantilla | Contenido |
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
| Criterio de éxito | 1. Los destinatarios son autorizados y los reintentos no duplican efectos comerciales.<br>2. Un fallo al avisar no extiende ni acorta la vigencia.<br>3. No se promete un precio todavía no configurado. |

Funcionalidades: F11, F14.

Casos de uso: [CU-08](/3daltoque-docs/analisis/casos/cu-08-consultar-membresia/), [CU-23](/3daltoque-docs/analisis/casos/cu-23-recibir-y-consultar-notificaciones/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05), [INT-04](/3daltoque-docs/diseno/integraciones/#int-04).

<a id="rf-12-12"></a>
### RF-12.12 Gestionar devoluciones del abono autorizadas

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-12.12 |
| Nombre | Gestionar devoluciones del abono autorizadas |
| Propósito | Resolver devoluciones de nuestro servicio sin intervenir en el precio de la impresión. |
| Descripción | Cuando la política aplicable lo autorice, el proceso registra y verifica una devolución total o parcial de un abono cobrado por la plataforma. Se conserva motivo, monto, operación y resultado. Condiciones, responsable y efecto sobre períodos futuros requieren PD-09; no se decide automáticamente por un reclamo sobre la pieza. |
| Historial | 2026-10-14: alta por ADR-002; nueva familia de requisitos, sin reutilizar RF-08. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Revisión académica pendiente. |
| Prioridad | Should |
| Estabilidad | Media |
| Criterio de éxito | 1. La devolución pertenece a un pago de membresía elegible, con moneda e importe correctos.<br>2. Repetir la misma operación no duplica el reembolso.<br>3. Una devolución pendiente no se informa como realizada y nunca bloquea por sí sola la finalización de pedidos ya aceptados. |

Funcionalidades: F11, F20.

Casos de uso: [CU-07](/3daltoque-docs/analisis/casos/cu-07-administracion-operativa/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-12-13"></a>
### RF-12.13 Auditar cambios del plan y beneficios

| Campo de la plantilla | Contenido |
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

Funcionalidades: F11, F20.

Casos de uso: [CU-10](/3daltoque-docs/analisis/casos/cu-10-asignar-beneficio-fundador/), [CU-12](/3daltoque-docs/analisis/casos/cu-12-gestionar-plan-y-promociones/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-12-14"></a>
### RF-12.14 Separar simulación y cobros reales de membresía

| Campo de la plantilla | Contenido |
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

Funcionalidades: F11.

Casos de uso: [CU-11](/3daltoque-docs/analisis/casos/cu-11-pagar-o-renovar-abono/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05), [INT-06](/3daltoque-docs/diseno/integraciones/#int-06).

<a id="rf-12-15"></a>
### RF-12.15 Informar el alcance del pago y del programa de fundadores

| Campo de la plantilla | Contenido |
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

Funcionalidades: F10, F11.

Casos de uso: [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/), [CU-08](/3daltoque-docs/analisis/casos/cu-08-consultar-membresia/), [CU-11](/3daltoque-docs/analisis/casos/cu-11-pagar-o-renovar-abono/), [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-13-1"></a>
### RF-13.1 Mantener productos del maker

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-13.1 |
| Nombre | Mantener productos del maker |
| Propósito | Preparar las publicaciones de productos prediseñados. |
| Descripción | El maker titular crea y edita borradores de productos con nombre, descripción, material, color, dimensiones, precio unitario, moneda, cantidades admitidas, plazo y condiciones de fabricación y entrega. Las imágenes o videos se vinculan mediante archivos autorizados. Los cambios de condiciones publicadas crean una nueva versión; los pedidos existentes conservan su versión original. |
| Historial | 2026-10-25: incorporación durante la revisión funcional completa. |
| Fecha | 2026-10-25 |
| Versión | 1.0 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). |
| Prioridad | Must para el alcance funcional de v1. |
| Estabilidad | Alta en el comportamiento; parámetros operativos versionados. |
| Criterio de éxito | 1. El maker conserva un borrador válido y sus archivos autorizados.<br>2. Cambiar precio, configuración o plazo de un producto publicado genera otra versión.<br>3. Una edición de un producto ajeno o una cantidad, moneda o importe inválidos se rechaza. |

Funcionalidades: F25.

Casos de uso: [CU-19](/3daltoque-docs/analisis/casos/cu-19-mantener-catalogo-de-productos/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-13-2"></a>
### RF-13.2 Publicar y retirar productos del catálogo

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-13.2 |
| Nombre | Publicar y retirar productos del catálogo |
| Propósito | Controlar la disponibilidad comercial de una publicación. |
| Descripción | El maker publica una versión completa de su producto, la pausa o la retira. Publicar y habilitar pedidos nuevos exige perfil y membresía vigentes. Pausar, retirar o moderar impide nuevos pedidos desde esa publicación. Las versiones y referencias usadas por pedidos se conservan. La administración puede ocultar una publicación con capacidad específica, motivo y auditoría. |
| Historial | 2026-10-25: incorporación durante la revisión funcional completa. |
| Fecha | 2026-10-25 |
| Versión | 1.0 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). |
| Prioridad | Must para el alcance funcional de v1. |
| Estabilidad | Alta en el comportamiento; parámetros operativos versionados. |
| Criterio de éxito | 1. Una publicación completa y autorizada aparece en el catálogo del maker.<br>2. Una publicación pausada, retirada o moderada impide pedidos nuevos.<br>3. Un retiro conserva los datos y archivos necesarios para los pedidos ya confirmados. |

Funcionalidades: F20, F25.

Casos de uso: [CU-07](/3daltoque-docs/analisis/casos/cu-07-administracion-operativa/), [CU-19](/3daltoque-docs/analisis/casos/cu-19-mantener-catalogo-de-productos/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-13-3"></a>
### RF-13.3 Consultar el catálogo público del maker

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-13.3 |
| Nombre | Consultar el catálogo público del maker |
| Propósito | Permitir elegir productos y conocer sus condiciones. |
| Descripción | El visitante o cliente consulta los productos publicados del maker y abre su detalle con versión, configuración, precio unitario, moneda, cantidades, plazo y condiciones. La respuesta expone la zona pública autorizada y sus medios derivados de presentación. El backend informa si el maker está habilitado para aceptar un pedido. La compra requiere identidad de cliente. |
| Historial | 2026-10-25: incorporación durante la revisión funcional completa. |
| Fecha | 2026-10-25 |
| Versión | 1.0 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). |
| Prioridad | Must para el alcance funcional de v1. |
| Estabilidad | Alta en el comportamiento; parámetros operativos versionados. |
| Criterio de éxito | 1. El perfil público presenta los productos publicados y sus condiciones completas.<br>2. Los borradores y archivos originales privados permanecen protegidos.<br>3. Una publicación retirada ofrece una salida al catálogo y una versión reemplazada informa sus condiciones actuales. |

Funcionalidades: F25.

Casos de uso: [CU-19](/3daltoque-docs/analisis/casos/cu-19-mantener-catalogo-de-productos/), [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-13-4"></a>
### RF-13.4 Confirmar un pedido directo de catálogo

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-13.4 |
| Nombre | Confirmar un pedido directo de catálogo |
| Propósito | Contratar un producto con el precio y condiciones publicados. |
| Descripción | El cliente elige producto, versión y cantidad, revisa las condiciones y confirma. El servidor valida publicación y versión actuales, cantidades, maker distinto del cliente y acceso comercial; calcula el total con el precio unitario conservado. En una transacción crea la solicitud de origen catálogo, su oferta publicada de referencia, el pedido, las condiciones y la conversación. Este circuito utiliza al maker del producto y continúa por producción, revisión y entrega. El cliente acuerda directamente con el maker el pago de la impresión. |
| Historial | 2026-10-25: incorporación durante la revisión funcional completa. |
| Fecha | 2026-10-25 |
| Versión | 1.0 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). |
| Prioridad | Must para el alcance funcional de v1. |
| Estabilidad | Alta en el comportamiento; parámetros operativos versionados. |
| Criterio de éxito | 1. Confirmar una versión vigente genera un pedido con cantidad, precio unitario, total, moneda, plazo y condiciones conservados.<br>2. Precio modificado, publicación pausada o maker sin acceso generan un conflicto antes de crear el pedido.<br>3. La repetición de la misma confirmación recupera el pedido; reutilizar su clave con otra cantidad produce conflicto. |

Funcionalidades: F25.

Casos de uso: [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05), [INT-04](/3daltoque-docs/diseno/integraciones/#int-04).

<a id="rf-14-1"></a>
### RF-14.1 Mantener el portfolio del maker

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-14.1 |
| Nombre | Mantener el portfolio del maker |
| Propósito | Presentar trabajos propios del maker. |
| Descripción | El maker crea, publica y retira trabajos de su portfolio con título, descripción y medios autorizados. La publicación utiliza derivados de presentación y conserva la autoría y finalidad declaradas. El uso de una evidencia privada de un cliente requiere la autorización de publicación aplicable. La moderación conserva motivo e historial. |
| Historial | 2026-10-25: incorporación durante la revisión funcional completa. |
| Fecha | 2026-10-25 |
| Versión | 1.0 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). |
| Prioridad | Must para el alcance funcional de v1. |
| Estabilidad | Alta en el comportamiento; parámetros operativos versionados. |
| Criterio de éxito | 1. Un trabajo publicado aparece en el portfolio del maker titular.<br>2. Un archivo ajeno, no habilitado o sin autorización de publicación es rechazado.<br>3. Retirar o moderar un trabajo elimina su presentación pública y conserva las referencias necesarias. |

Funcionalidades: F04, F20.

Casos de uso: [CU-07](/3daltoque-docs/analisis/casos/cu-07-administracion-operativa/), [CU-15](/3daltoque-docs/analisis/casos/cu-15-mantener-y-consultar-portfolio/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-14-2"></a>
### RF-14.2 Consultar trabajos publicados del maker

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-14.2 |
| Nombre | Consultar trabajos publicados del maker |
| Propósito | Comparar ejemplos de trabajos del prestador. |
| Descripción | El visitante o cliente consulta los trabajos publicados del portfolio de un maker y sus medios de presentación. La respuesta incluye descripción y autor; oculta datos privados de pedidos, clientes y archivos originales. Un portfolio vacío presenta el estado correspondiente y mantiene accesibles los datos públicos del maker. |
| Historial | 2026-10-25: incorporación durante la revisión funcional completa. |
| Fecha | 2026-10-25 |
| Versión | 1.0 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). |
| Prioridad | Must para el alcance funcional de v1. |
| Estabilidad | Alta en el comportamiento; parámetros operativos versionados. |
| Criterio de éxito | 1. La consulta devuelve exclusivamente trabajos publicados y autorizados.<br>2. Un trabajo retirado deja de estar disponible públicamente.<br>3. El detalle del portfolio conserva la privacidad de pedidos y archivos. |

Funcionalidades: F04.

Casos de uso: [CU-15](/3daltoque-docs/analisis/casos/cu-15-mantener-y-consultar-portfolio/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).

Integraciones: [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-15-1"></a>
### RF-15.1 Valorar a la contraparte de un pedido

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-15.1 |
| Nombre | Valorar a la contraparte de un pedido |
| Propósito | Registrar reputación basada en trabajos completados. |
| Descripción | Después de la recepción confirmada, cliente y maker pueden valorar a su contraparte una vez por pedido. La ficha aplica los criterios y escala de una configuración versionada, exige valores dentro del rango y admite comentario dentro del límite. Se conserva autor, destinatario, rol, pedido y configuración. Un participante no puede valorarse a sí mismo ni publicar una valoración por un pedido ajeno o cancelado. |
| Historial | 2026-10-25: incorporación durante la revisión funcional completa. |
| Fecha | 2026-10-25 |
| Versión | 1.0 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). |
| Prioridad | Must para el alcance funcional de v1. |
| Estabilidad | Alta en el comportamiento; parámetros operativos versionados. |
| Criterio de éxito | 1. Cada participante de un pedido completado registra una sola valoración de su contraparte.<br>2. Una repetición identificada conserva la valoración original y sus criterios.<br>3. Un pedido sin recepción, un tercero o un puntaje fuera de escala recibe una denegación. |

Funcionalidades: F18.

Casos de uso: [CU-16](/3daltoque-docs/analisis/casos/cu-16-valorar-y-consultar-reputacion/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-15-2"></a>
### RF-15.2 Consultar reputación publicada

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-15.2 |
| Nombre | Consultar reputación publicada |
| Propósito | Presentar indicadores verificables de la contraparte. |
| Descripción | El cliente consulta la reputación pública del maker y los participantes consultan las valoraciones autorizadas del cliente según permisos. El resumen identifica cantidad de valoraciones, promedio de los puntajes globales y escala utilizada. El puntaje global de una valoración se obtiene del promedio de sus criterios configurados. La ausencia de valoraciones se representa explícitamente. Se agregan únicamente valoraciones publicadas y compatibles con la escala informada. |
| Historial | 2026-10-25: incorporación durante la revisión funcional completa. |
| Fecha | 2026-10-25 |
| Versión | 1.0 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). |
| Prioridad | Must para el alcance funcional de v1. |
| Estabilidad | Alta en el comportamiento; parámetros operativos versionados. |
| Criterio de éxito | 1. El resumen coincide con las valoraciones publicadas y sus criterios.<br>2. Una cuenta sin valoraciones presenta cantidad cero y promedio ausente.<br>3. La consulta pública protege pedidos, identidad privada y contenidos moderados. |

Funcionalidades: F18.

Casos de uso: [CU-16](/3daltoque-docs/analisis/casos/cu-16-valorar-y-consultar-reputacion/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-15-3"></a>
### RF-15.3 Moderar valoraciones con trazabilidad

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-15.3 |
| Nombre | Moderar valoraciones con trazabilidad |
| Propósito | Resolver contenido denunciado preservando su historial. |
| Descripción | Administración oculta o restituye una valoración mediante permiso específico y motivo registrado. Cada acción conserva estado anterior, actor y fecha y recalcula la proyección de reputación. La intervención no altera los puntajes emitidos ni crea valoraciones en nombre de otra persona. |
| Historial | 2026-10-25: incorporación durante la revisión funcional completa. |
| Fecha | 2026-10-25 |
| Versión | 1.0 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). |
| Prioridad | Must para el alcance funcional de v1. |
| Estabilidad | Alta en el comportamiento; parámetros operativos versionados. |
| Criterio de éxito | 1. Una ocultación autorizada retira la valoración del agregado público.<br>2. Una restitución recupera su contribución al agregado.<br>3. Una intervención sin permiso o sin motivo se rechaza y conserva el estado. |

Funcionalidades: F18, F20.

Casos de uso: [CU-07](/3daltoque-docs/analisis/casos/cu-07-administracion-operativa/), [CU-16](/3daltoque-docs/analisis/casos/cu-16-valorar-y-consultar-reputacion/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13).

Integraciones: [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-16-1"></a>
### RF-16.1 Consultar el historial propio de pedidos

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-16.1 |
| Nombre | Consultar el historial propio de pedidos |
| Propósito | Recuperar la actividad del cliente y del maker. |
| Descripción | El participante consulta pedidos propios con filtros de estado, intervalo de fecha, referencia y origen personalizado o catálogo. La paginación utiliza orden estable por fecha e identidad. El detalle conserva condiciones, revisiones y entrega autorizadas, incluso después de vencer la membresía del maker. Un usuario ajeno no obtiene el pedido mediante filtros ni identificadores directos. |
| Historial | 2026-10-25: incorporación durante la revisión funcional completa. |
| Fecha | 2026-10-25 |
| Versión | 1.0 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). |
| Prioridad | Must para el alcance funcional de v1. |
| Estabilidad | Alta en el comportamiento; parámetros operativos versionados. |
| Criterio de éxito | 1. Los filtros y el cursor devuelven únicamente pedidos propios en orden estable.<br>2. Pedidos finalizados y de catálogo conservan sus condiciones históricas.<br>3. Un usuario ajeno recibe una denegación sin datos del pedido. |

Funcionalidades: F19.

Casos de uso: [CU-17](/3daltoque-docs/analisis/casos/cu-17-consultar-historial-de-pedidos/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11).

Integraciones: [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).

<a id="rf-17-1"></a>
### RF-17.1 Consultar el reporte de actividad

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RF-17.1 |
| Nombre | Consultar el reporte de actividad |
| Propósito | Medir la actividad operativa de la plataforma. |
| Descripción | Administración autorizada consulta indicadores de usuarios registrados, makers con pedidos confirmados, pedidos confirmados y cancelados y calificación publicada, con intervalo y zona horaria explícitos. Usuarios se cuentan por fecha de alta; makers operativos son los makers distintos con pedido confirmado en el intervalo; pedidos se cuentan por su evento de confirmación o cancelación; calificación es el promedio de valoraciones publicadas del período y escala indicada. Los resultados identifican fecha de generación, filtros y fuente y protegen los datos privados. |
| Historial | 2026-10-25: incorporación durante la revisión funcional completa. |
| Fecha | 2026-10-25 |
| Versión | 1.0 |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). |
| Prioridad | Must para el alcance funcional de v1. |
| Estabilidad | Alta en el comportamiento; parámetros operativos versionados. |
| Criterio de éxito | 1. Un conjunto de datos conocido produce los conteos, promedio y filtros esperados.<br>2. Un intervalo sin actividad devuelve ceros y promedios ausentes.<br>3. Una consulta sin permiso administrativo o con intervalo inválido se rechaza. |

Funcionalidades: F20, F21.

Casos de uso: [CU-18](/3daltoque-docs/analisis/casos/cu-18-consultar-reporte-de-actividad/).

Requisitos de calidad: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11).

Integraciones: [INT-05](/3daltoque-docs/diseno/integraciones/#int-05).
