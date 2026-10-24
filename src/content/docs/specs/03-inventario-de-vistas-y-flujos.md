---
title: "Inventario de vistas y flujos de Figma"
---

# Inventario de vistas, flujos y cobertura funcional

## Alcance del inventario

El inventario cruza las 24 funcionalidades con los 54 RF vigentes, los 13 casos de uso y las composiciones de Figma. Conserva los 55 identificadores del catálogo inicial y agrega 55 composiciones complementarias: 31 Web y 24 Mobile. El conjunto reúne 60 vistas/composiciones Web y 50 Mobile. Los 26 estados compartidos de recuperación se contabilizan por separado.

Cada entrada identifica pantallas, confirmaciones, resultados y estados necesarios para completar una tarea. La columna de pendientes precisa el trabajo restante de cada funcionalidad.

Fuentes: [RF](/3daltoque-docs/analisis/requisitos/funcionales/), [RNF](/3daltoque-docs/analisis/requisitos/no-funcionales/), [casos de uso](/3daltoque-docs/analisis/casos-de-uso/), [catálogo inicial](/3daltoque-docs/documentos/aeaae329b533-catalogo.json) y [datos de este inventario](/3daltoque-docs/documentos/b06f2f01e8a2-vistas-complementarias.json).

[Ver capturas de las vistas](/3daltoque-docs/specs/01-navegacion-y-pantallas/#vistas-de-referencia) y [consultar las fichas de navegación](/3daltoque-docs/specs/01-navegacion-y-pantallas/#inventario).

## Acceso a los componentes individuales

Cada familia tiene su propia sección de Figma, con el componente principal y sus variantes. Los índices contienen enlaces directos a los componentes. Las galerías de referencia quedan agrupadas en otra sección de la misma página.


<details class="doc-accordion">
<summary><span>Biblioteca Web</span><span class="doc-accordion__count">4 índices</span></summary>
<div class="doc-accordion__body">

| Biblioteca | Familias/secciones | Abrir índice |
| --- | ---: | --- |
| Web · Moléculas | 30 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=69-6724) |
| Web · Controles | 10 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=69-6788) |
| Web · Información y feedback | 16 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=69-6812) |
| Web · Producto | 19 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=69-6848) |

</div>
</details>

<details class="doc-accordion">
<summary><span>Biblioteca Mobile</span><span class="doc-accordion__count">4 índices</span></summary>
<div class="doc-accordion__body">

| Biblioteca | Familias/secciones | Abrir índice |
| --- | ---: | --- |
| Mobile · Moléculas | 31 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=69-911) |
| Mobile · Controles | 10 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=69-6890) |
| Mobile · Información y feedback | 16 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=69-6914) |
| Mobile · Producto | 19 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=69-6950) |

</div>
</details>


Las secciones incluyen variantes de tamaño de Button, navegación por rol y las piezas de composición. Los identificadores de los componentes principales se conservan.

## Acceso a los flujos complementarios

- [Flujos Web](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2540).
- [Flujos Mobile](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2076).

## Cobertura por funcionalidad

Los CU indicados vinculan el recorrido de la funcionalidad con las tareas del caso de uso. F04, F18 y F21 conservan su definición de origen pendiente.


<details class="doc-accordion">
<summary><span>Identidad, perfiles y portfolio</span><span class="doc-accordion__count">4 funcionalidades</span></summary>
<div class="doc-accordion__body">

| Funcionalidad | RF de origen | CU relacionados | Recorrido representado | Trabajo restante |
| --- | --- | --- | --- | --- |
| [F01 · Registro e inicio de sesión](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/) | RF-01.1, RF-01.4, RF-01.5 | CU-13 | Registro, acceso y cierre de sesión con confirmación. | Completar composiciones específicas de cuenta bloqueada, sesión vencida durante un comando y validación por campo. |
| [F02 · Gestión de perfil de cliente](/3daltoque-docs/specs/f02-gestion-de-perfil-de-cliente/) | RF-01.3, RF-09.1 | CU-13, CU-01 | Contacto, ubicación confirmada y alternativa de ingreso manual. | Dibujar conflicto de edición del perfil y recuperación del formulario ante pérdida de conexión. |
| [F03 · Gestión de perfil de maker](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/) | RF-01.2, RF-12.2 | CU-09 | Capacidades y revisión de habilitación con beneficio inicial. | Desglosar edición de impresoras y disponibilidad; cerrar criterios de perfil habilitable de PD-01. |
| [F04 · Portfolio del maker](/3daltoque-docs/specs/f04-portfolio-del-maker/) | Por definir | Pendiente | Portfolio incluido como propuesta complementaria. | Definir alcance v1, RF/CU, visibilidad y moderación; completar edición, retiro y consulta pública según esa decisión. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Solicitud, búsqueda y ofertas</span><span class="doc-accordion__count">6 funcionalidades</span></summary>
<div class="doc-accordion__body">

| Funcionalidad | RF de origen | CU relacionados | Recorrido representado | Trabajo restante |
| --- | --- | --- | --- | --- |
| [F05 · Alta de solicitud de impresión](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/) | RF-02.1, RF-02.2, RF-02.3 | CU-01 | Carga, parámetros, revisión con ubicación y resultado del envío. | Desarrollar estados específicos de análisis pendiente, rechazo del archivo y recuperación del borrador. |
| [F06 · Cotización estimativa inicial](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/) | RF-02.5 | CU-01 | Detalle de estimación con rango, entradas, método y supuestos. | Cerrar método de PD-06 y dibujar rango disponible, datos insuficientes y cálculo invalidado por nueva versión. |
| [F07 · Búsqueda de makers cercanos](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/) | RF-09.1, RF-09.2, RF-03.1 | CU-01 | Búsqueda, mapa/lista, filtros y referencia confirmada. | Completar permiso de ubicación denegado, mapa indisponible y ampliación permitida del radio ante resultados vacíos. |
| [F08 · Matching y envío a makers](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/) | RF-03.1, RF-03.2, RF-12.10 | CU-01, CU-02 | Ronda de envío y detalle de invitación con elegibilidad. | Dibujar ronda con candidatos insuficientes, invitación cerrada y aviso externo fallido; cerrar política versionada de matching. |
| [F09 · Gestión de ofertas](/3daltoque-docs/specs/f09-gestion-de-ofertas/) | RF-04.1, RF-04.2, RF-04.3, RF-04.5 | CU-02, CU-03 | Invitación, rechazo, cotización, comparación y oferta actualizada. | Completar edición de oferta y vencimiento contextual; decidir contraofertas en PD-05. |
| [F10 · Confirmación de oferta](/3daltoque-docs/specs/f10-confirmacion-de-oferta/) | RF-04.4, RF-12.10, RF-12.15 | CU-03 | Resumen de versión, confirmación y revisión de condiciones actualizadas. | Dibujar aceptación concurrente y resultado incierto con recuperación del pedido confirmado. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Membresía y producción</span><span class="doc-accordion__count">2 funcionalidades</span></summary>
<div class="doc-accordion__body">

| Funcionalidad | RF de origen | CU relacionados | Recorrido representado | Trabajo restante |
| --- | --- | --- | --- | --- |
| [F11 · Membresía y abono](/3daltoque-docs/specs/f11-membresia-y-abono/) | RF-12.1, RF-12.2, RF-12.3, RF-12.4, RF-12.5, RF-12.6, RF-12.7, RF-12.8, RF-12.9, RF-12.10, RF-12.11, RF-12.12, RF-12.13, RF-12.14, RF-12.15 | CU-08, CU-09, CU-10, CU-11, CU-12 | Membresía, compras y resultados de pago; formularios administrativos de beneficios y conciliación. | Completar estados de cupo agotado, asignación previa, devolución pendiente/parcial/confirmada y controles de entorno; cerrar PD-09 y PD-10. |
| [F12 · Gestión de estados del pedido](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/) | RF-02.4, RF-05.3, RF-06.5, RF-12.10 | CU-04 | Pedido del maker, acción de producción, confirmación e historial. | Cerrar catálogo de transiciones y acciones por estado; dibujar transición inválida y conflicto de versión. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Comunicación, revisión y entrega</span><span class="doc-accordion__count">6 funcionalidades</span></summary>
<div class="doc-accordion__body">

| Funcionalidad | RF de origen | CU relacionados | Recorrido representado | Trabajo restante |
| --- | --- | --- | --- | --- |
| [F13 · Mensajería cliente–maker](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/) | RF-05.1, RF-05.2, RF-11.2, RF-12.10 | CU-04 | Conversación y recuperación de un mensaje fallido conservando su identificador. | Completar carga de historial, adjunto rechazado, permiso revocado y reconexión con cursor vencido. |
| [F14 · Notificaciones](/3daltoque-docs/specs/f14-notificaciones/) | RF-07.1, RF-07.3, RF-07.4, RF-12.11 | CU-04, CU-05, CU-08 | Bandeja y acceso al recurso del evento. | Completar leído/pendiente, destino cerrado o sin permiso y preferencias de canales cuando su política esté definida. |
| [F15 · Evidencia previa a la entrega](/3daltoque-docs/specs/f15-evidencia-previa-a-la-entrega/) | RF-06.1, RF-06.2 | CU-04 | Carga de fotos/videos y confirmación de presentación de la revisión. | Completar análisis pendiente por archivo, revisión cerrada y recuperación de una transferencia incompleta. |
| [F16 · Entrega en Nodo Amigo](/3daltoque-docs/specs/f16-entrega-en-nodo-amigo/) | RF-06.6, RF-09.1, RF-09.2 | CU-06 | Punto, horario, zona horaria y confirmación del acuerdo. | Cerrar actores y reglas de acuerdo de PD-08; dibujar cambio de coordinación y alternativa textual del mapa. |
| [F17 · Validación de recepción](/3daltoque-docs/specs/f17-validacion-de-recepcion/) | RF-06.7 | CU-06 | Resumen de recepción y salida de cierre verificado. | Definir mecanismo de PD-08, completar captura y errores del mecanismo elegido; mantener la captura bloqueada mientras falte configuración. |
| [F18 · Reputación bidireccional](/3daltoque-docs/specs/f18-reputacion-bidireccional/) | Por definir | Pendiente | Vista de valoración conservada con captura bloqueada ante escala sin configurar. | Definir RF/CU, escala, elegibilidad, unicidad y moderación; completar estados de publicación según esas reglas. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Historial, administración e integraciones</span><span class="doc-accordion__count">6 funcionalidades</span></summary>
<div class="doc-accordion__body">

| Funcionalidad | RF de origen | CU relacionados | Recorrido representado | Trabajo restante |
| --- | --- | --- | --- | --- |
| [F19 · Historial de pedidos](/3daltoque-docs/specs/f19-historial-de-pedidos/) | RF-02.4, RF-05.3 | CU-04, CU-06 | Listado, filtros y consulta del historial de cambios del pedido. | Completar paginación/cursor, retención y consulta consolidada; ampliar trazabilidad de origen de F19. |
| [F20 · Panel de administración](/3daltoque-docs/specs/f20-panel-de-administracion/) | RF-07.2, RF-12.1, RF-12.3, RF-12.7, RF-12.12, RF-12.13 | CU-07, CU-10, CU-12 | Soporte, plan, beneficios, compras y auditoría con capacidades administrativas. | Completar confirmación y resultado de cada intervención sensible; cerrar permisos finos, devoluciones y conflictos de configuración. |
| [F21 · Reporte de actividad](/3daltoque-docs/specs/f21-reporte-de-actividad/) | Por definir | Pendiente | Reporte de actividad conservado como propuesta complementaria. | Definir RF/CU, fórmulas, fuentes, períodos e indicadores; completar detalle y ausencia de datos según esas definiciones. |
| [F22 · Revisión y aprobación del resultado](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/) | RF-06.3, RF-06.4 | CU-05 | Evidencia, aprobación expresa y confirmación de observaciones de una revisión exacta. | Cerrar correcciones, plazos y escalamiento de PD-07; dibujar revisión reemplazada y observación registrada. |
| [F23 · Gestión de archivos privados](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) | RF-10.1, RF-10.2, RF-10.3, RF-10.4 | CU-01, CU-04 | Transferencia contextual, detalle de archivo y retiro sujeto a autorización/retención. | Completar previsualización por tipo, enlace vencido, integridad inválida y resultados del retiro; cerrar política de retención. |
| [F24 · API común y sincronización](/3daltoque-docs/specs/f24-api-comun-y-sincronizacion/) | RF-11.1, RF-11.2 | CU-01 a CU-13 | Estados de acceso/conexión, conflicto de oferta y recuperación del mensaje/compra. | Completar reconciliación de comandos con resultado incierto y estados contextualizados de sesión/cursor vencidos; acordar contratos de transporte. |

</div>
</details>


## Recorridos de los casos de uso

Los sufijos de vista se aplican a Web y Mobile cuando ambos canales están incluidos. Las vistas ADM pertenecen al canal Web. Checkout Pro representa el recorrido externo del proveedor.


<details class="doc-accordion">
<summary><span>Solicitud y ofertas</span><span class="doc-accordion__count">3 recorridos</span></summary>
<div class="doc-accordion__body">

| Caso de uso | Vistas y pasos | Condición principal |
| --- | --- | --- |
| CU-01 | SOL-01 → SOL-03 → SOL-04 → SOL-02; BUS-01; SOL-05; ARC-01 | Archivo habilitado, referencia confirmada, recuperación del borrador y ronda insuficiente. |
| CU-02 | MKR-03 → MKR-06 → OFE-02; MKR-06 → MKR-07 | Invitación vigente, elegibilidad del maker y rechazo confirmado. |
| CU-03 | OFE-01 → OFE-03 → PED-01; OFE-04 → OFE-03 | Versión exacta, aceptación única, vencimiento y concurrencia. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Producción, revisión y entrega</span><span class="doc-accordion__count">3 recorridos</span></summary>
<div class="doc-accordion__body">

| Caso de uso | Vistas y pasos | Condición principal |
| --- | --- | --- |
| CU-04 | MKR-04 → PED-02 → PED-03; REV-01 → REV-03; CHAT-01 / CHAT-02; HIS-02 | Transición autorizada, archivos habilitados y revisión identificada. |
| CU-05 | REV-02 → REV-04 → ENT-01; REV-02 → REV-05 | Aprobación expresa, observaciones y revisión pendiente ante silencio. |
| CU-06 | ENT-01 → ENT-03 → ENT-02 → ENT-04; HIS-02 | Acuerdo y mecanismo de recepción sujetos a PD-08. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Membresía y administración</span><span class="doc-accordion__count">6 recorridos</span></summary>
<div class="doc-accordion__body">

| Caso de uso | Vistas y pasos | Condición principal |
| --- | --- | --- |
| CU-07 | ADM-01 → ADM-03; ADM-MEM-03 → ADM-MEM-04 → ADM-MEM-05; ADM-04 | Capacidad específica, motivo, confirmación sensible y auditoría. |
| CU-08 | MEM-01 → MEM-04; MEM-01 → MEM-02 | Estado y vencimiento del acceso; beneficio y renovación manual. |
| CU-09 | MKR-01 → MKR-05 → MEM-01 | Perfil completo e inicio único del beneficio inicial. |
| CU-10 | ADM-01 → ADM-MEM-02 → ADM-04 | Elegibilidad, cupo/ventana y asignación previa; PD-10. |
| CU-11 | MEM-02 → Checkout Pro → MEM-03; MEM-05 / MEM-06 / MEM-07 / MEM-08; MEM-04 | Resultado verificado, acreditación única y conservación de días vigentes. |
| CU-12 | ADM-MEM-01 → ADM-MEM-06 → ADM-04 | Nueva versión validada, permiso específico y motivo del cambio. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Identidad y acceso</span><span class="doc-accordion__count">1 recorridos</span></summary>
<div class="doc-accordion__body">

| Caso de uso | Vistas y pasos | Condición principal |
| --- | --- | --- |
| CU-13 | AUTH-02 → AUTH-01; AUTH-03 → AUTH-01; SYS-01 | Identidad, rol, permiso sobre recurso y cierre de sesión. |

</div>
</details>


## Trazabilidad de cada RF

Las operaciones de integración se vinculan con sus resultados visibles y con la spec que define el contrato. Su cierre incluye pruebas de proveedor, autorización, idempotencia y recuperación según corresponda.


<details class="doc-accordion">
<summary><span>RF-01</span><span class="doc-accordion__count">5 requisitos</span></summary>
<div class="doc-accordion__body">

| RF | Requisito | Naturaleza | Vistas relacionadas | Specs |
| --- | --- | --- | --- | --- |
| RF-01.1 | Registrar clientes y makers | Interacción de usuario | AUTH-02 | F01 |
| RF-01.2 | Gestionar capacidades del maker | Interacción de usuario | MKR-01, MKR-05 | F03 |
| RF-01.3 | Gestionar contacto y ubicación del cliente | Interacción de usuario | CLI-01 | F02 |
| RF-01.4 | Iniciar sesión | Interacción de usuario | AUTH-01, SYS-01 | F01 |
| RF-01.5 | Cerrar sesión | Interacción de usuario | AUTH-03 | F01 |

</div>
</details>

<details class="doc-accordion">
<summary><span>RF-02</span><span class="doc-accordion__count">5 requisitos</span></summary>
<div class="doc-accordion__body">

| RF | Requisito | Naturaleza | Vistas relacionadas | Specs |
| --- | --- | --- | --- | --- |
| RF-02.1 | Cargar STL y parámetros de impresión | Interacción de usuario | SOL-01, SOL-03 | F05 |
| RF-02.2 | Validar archivos y límites técnicos | Interacción de usuario | SOL-01, ARC-01 | F05 |
| RF-02.3 | Crear solicitud de impresión | Interacción de usuario | SOL-03, SOL-04 | F05 |
| RF-02.4 | Consultar estado y plazos de solicitud | Interacción de usuario | SOL-02, PED-01, HIS-01 | F12, F19 |
| RF-02.5 | Presentar estimación orientativa | Interacción de usuario | SOL-02, SOL-05 | F06 |

</div>
</details>

<details class="doc-accordion">
<summary><span>RF-03</span><span class="doc-accordion__count">2 requisitos</span></summary>
<div class="doc-accordion__body">

| RF | Requisito | Naturaleza | Vistas relacionadas | Specs |
| --- | --- | --- | --- | --- |
| RF-03.1 | Enviar solicitud a makers compatibles y cercanos | Interacción de usuario | BUS-01, SOL-04 | F07, F08 |
| RF-03.2 | Consultar solicitudes recibidas por el maker | Interacción de usuario | MKR-03, MKR-06 | F08 |

</div>
</details>

<details class="doc-accordion">
<summary><span>RF-04</span><span class="doc-accordion__count">5 requisitos</span></summary>
<div class="doc-accordion__body">

| RF | Requisito | Naturaleza | Vistas relacionadas | Specs |
| --- | --- | --- | --- | --- |
| RF-04.1 | Presentar oferta de precio y plazo | Interacción de usuario | MKR-06, OFE-02 | F09 |
| RF-04.2 | Gestionar vigencia y estado de oferta | Interacción de usuario | OFE-01, OFE-04 | F09 |
| RF-04.3 | Comparar ofertas disponibles | Interacción de usuario | OFE-01 | F09 |
| RF-04.4 | Aceptar una sola oferta y confirmar pedido | Interacción de usuario | OFE-03, OFE-04 | F10 |
| RF-04.5 | Responder o rechazar invitación de cotización | Interacción de usuario | MKR-06, MKR-07 | F09 |

</div>
</details>

<details class="doc-accordion">
<summary><span>RF-05</span><span class="doc-accordion__count">3 requisitos</span></summary>
<div class="doc-accordion__body">

| RF | Requisito | Naturaleza | Vistas relacionadas | Specs |
| --- | --- | --- | --- | --- |
| RF-05.1 | Conversar en el contexto del pedido | Interacción de usuario | CHAT-01 | F13 |
| RF-05.2 | Registrar mensajes y adjuntos autorizados | Interacción de usuario | CHAT-01, CHAT-02, ARC-01 | F13 |
| RF-05.3 | Auditar cambios de estado del pedido | Interacción de usuario | PED-02, PED-03, HIS-02 | F12, F19 |

</div>
</details>

<details class="doc-accordion">
<summary><span>RF-06</span><span class="doc-accordion__count">7 requisitos</span></summary>
<div class="doc-accordion__body">

| RF | Requisito | Naturaleza | Vistas relacionadas | Specs |
| --- | --- | --- | --- | --- |
| RF-06.1 | Presentar evidencia de la pieza terminada | Interacción de usuario | REV-01, REV-03 | F15 |
| RF-06.2 | Solicitar revisión del cliente | Interacción de usuario | REV-03, PED-01 | F15 |
| RF-06.3 | Aprobar resultado o registrar observaciones | Interacción de usuario | REV-02, REV-04, REV-05 | F22 |
| RF-06.4 | Conservar revisión pendiente ante silencio | Interacción de usuario | REV-02, PED-01, NOT-01 | F22 |
| RF-06.5 | Consultar y actualizar avance de producción | Interacción de usuario | PED-02, PED-03, MKR-04 | F12 |
| RF-06.6 | Coordinar entrega personal | Interacción de usuario | ENT-01, ENT-03 | F16 |
| RF-06.7 | Registrar recepción y completar entrega | Interacción de usuario | ENT-02, ENT-04 | F17 |

</div>
</details>

<details class="doc-accordion">
<summary><span>RF-07</span><span class="doc-accordion__count">4 requisitos</span></summary>
<div class="doc-accordion__body">

| RF | Requisito | Naturaleza | Vistas relacionadas | Specs |
| --- | --- | --- | --- | --- |
| RF-07.1 | Notificar eventos dentro de la plataforma | Interacción de usuario | NOT-01 | F14 |
| RF-07.2 | Gestionar moderación y soporte | Interacción de usuario | ADM-01, ADM-03 | F20 |
| RF-07.3 | Enviar avisos por canales externos habilitados | Integración con resultado visible | NOT-01, SYS-01 | F14 |
| RF-07.4 | Recordar revisiones pendientes | Integración con resultado visible | NOT-01, REV-02 | F14 |

</div>
</details>

<details class="doc-accordion">
<summary><span>RF-09</span><span class="doc-accordion__count">2 requisitos</span></summary>
<div class="doc-accordion__body">

| RF | Requisito | Naturaleza | Vistas relacionadas | Specs |
| --- | --- | --- | --- | --- |
| RF-09.1 | Seleccionar y confirmar ubicación de referencia | Interacción de usuario | CLI-01, BUS-01, SOL-03, ENT-01 | F02, F07, F16 |
| RF-09.2 | Visualizar zonas y puntos en mapa | Interacción de usuario | BUS-01, ENT-01 | F07, F16 |

</div>
</details>

<details class="doc-accordion">
<summary><span>RF-10</span><span class="doc-accordion__count">4 requisitos</span></summary>
<div class="doc-accordion__body">

| RF | Requisito | Naturaleza | Vistas relacionadas | Specs |
| --- | --- | --- | --- | --- |
| RF-10.1 | Autorizar transferencia de archivos privados | Integración con resultado visible | SOL-01, REV-01, CHAT-01 | F23 |
| RF-10.2 | Completar y habilitar archivo recibido | Integración con resultado visible | SOL-01, REV-01, CHAT-01, ARC-01 | F23 |
| RF-10.3 | Consultar y descargar archivos con permiso | Interacción de usuario | ARC-01 | F23 |
| RF-10.4 | Aplicar retiro y retención de archivos | Interacción de usuario | ARC-02 | F23 |

</div>
</details>

<details class="doc-accordion">
<summary><span>RF-11</span><span class="doc-accordion__count">2 requisitos</span></summary>
<div class="doc-accordion__body">

| RF | Requisito | Naturaleza | Vistas relacionadas | Specs |
| --- | --- | --- | --- | --- |
| RF-11.1 | Exponer operaciones mediante API común | Integración con resultado visible | SYS-01 | F24 |
| RF-11.2 | Sincronizar cambios de ofertas, chat y pedidos | Integración con resultado visible | CHAT-02, OFE-04, PED-01 | F13, F24 |

</div>
</details>

<details class="doc-accordion">
<summary><span>RF-12</span><span class="doc-accordion__count">15 requisitos</span></summary>
<div class="doc-accordion__body">

| RF | Requisito | Naturaleza | Vistas relacionadas | Specs |
| --- | --- | --- | --- | --- |
| RF-12.1 | Configurar el único plan de membresía | Interacción de usuario | ADM-MEM-01, ADM-MEM-06 | F11, F20 |
| RF-12.2 | Iniciar la prueba gratuita general | Interacción de usuario | MKR-05, MEM-01 | F03, F11 |
| RF-12.3 | Asignar el programa Makers Fundadores | Interacción de usuario | ADM-MEM-02, MEM-01 | F11, F20 |
| RF-12.4 | Consultar estado y vencimiento de acceso | Interacción de usuario | MEM-01 | F11 |
| RF-12.5 | Iniciar el pago del abono | Interacción de usuario | MEM-02 | F11 |
| RF-12.6 | Verificar notificaciones de pago del abono | Integración con resultado visible | MEM-03, MEM-05, MEM-06, MEM-08 | F11 |
| RF-12.7 | Consultar y conciliar compras de membresía | Interacción de usuario | MEM-04, ADM-MEM-03, ADM-MEM-04 | F11, F20 |
| RF-12.8 | Conceder acceso por un pago confirmado | Integración con resultado visible | MEM-05 | F11 |
| RF-12.9 | Renovar manualmente la membresía | Interacción de usuario | MEM-02, MEM-04, MEM-05 | F11 |
| RF-12.10 | Aplicar vigencia a trabajos nuevos y preservar los activos | Interacción de usuario | MEM-01, MKR-03, PED-02 | F08, F10, F11, F12, F13 |
| RF-12.11 | Recordar vencimientos de acceso | Integración con resultado visible | NOT-01, MEM-01 | F11, F14 |
| RF-12.12 | Gestionar devoluciones del abono autorizadas | Interacción de usuario | ADM-MEM-05 | F11, F20 |
| RF-12.13 | Auditar cambios del plan y beneficios | Interacción de usuario | ADM-04, ADM-MEM-06 | F11, F20 |
| RF-12.14 | Separar simulación y cobros reales de membresía | Integración con resultado visible | MEM-02, ADM-MEM-04 | F11 |
| RF-12.15 | Informar el alcance del pago y del programa de fundadores | Interacción de usuario | MEM-01, MEM-02, OFE-03 | F10, F11 |

</div>
</details>


## Composiciones añadidas

Las composiciones con dependencias pendientes mantienen esos controles identificados en su ficha. Los botones que requieren una configuración o validación todavía ausente aparecen deshabilitados en el estado inicial representado.


### Web

<details class="doc-accordion">
<summary><span>Acceso y perfiles</span><span class="doc-accordion__count">2 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| WEB-AUTH-03 | Cerrar sesión | Diálogo de confirmación | RF-01.5 | CU-13 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2543) |
| WEB-MKR-05 | Habilitar perfil de maker | Vista | RF-01.2, RF-12.2, RF-12.4 | CU-09 | PD-01 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2557) |

</div>
</details>

<details class="doc-accordion">
<summary><span>Solicitudes y búsqueda</span><span class="doc-accordion__count">3 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| WEB-SOL-03 | Revisar y publicar solicitud | Vista | RF-02.1, RF-02.2, RF-02.3, RF-09.1 | CU-01 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2623) |
| WEB-SOL-04 | Solicitud enviada | Vista | RF-02.3, RF-03.1, RF-07.1 | CU-01 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2730) |
| WEB-SOL-05 | Cómo se calculó la estimación | Vista | RF-02.5 | CU-01 | PD-06 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3694) |

</div>
</details>

<details class="doc-accordion">
<summary><span>Invitaciones y ofertas</span><span class="doc-accordion__count">3 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| WEB-MKR-06 | Detalle de invitación | Vista | RF-03.2, RF-04.5, RF-10.3, RF-12.10 | CU-02 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2793) |
| WEB-MKR-07 | Rechazar invitación | Diálogo de confirmación | RF-04.5 | CU-02 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2864) |
| WEB-OFE-04 | La oferta tiene una nueva versión | Vista | RF-04.2, RF-04.3, RF-04.4 | CU-03 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2881) |

</div>
</details>

<details class="doc-accordion">
<summary><span>Producción y revisión</span><span class="doc-accordion__count">5 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| WEB-PED-02 | Producción del pedido | Vista | RF-06.5, RF-05.3, RF-12.10 | CU-04 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2944) |
| WEB-PED-03 | Confirmar avance de producción | Diálogo de confirmación | RF-06.5, RF-05.3 | CU-04 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3032) |
| WEB-REV-03 | Presentar revisión al cliente | Diálogo de confirmación | RF-06.1, RF-06.2, RF-10.2 | CU-04 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3057) |
| WEB-REV-04 | Confirmar aprobación | Diálogo de confirmación | RF-06.3 | CU-05 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3082) |
| WEB-REV-05 | Enviar observaciones | Diálogo de confirmación | RF-06.3, RF-06.4 | CU-05 | PD-07 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3104) |

</div>
</details>

<details class="doc-accordion">
<summary><span>Entrega y reputación</span><span class="doc-accordion__count">2 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| WEB-ENT-03 | Confirmar coordinación | Diálogo de confirmación | RF-06.6, RF-09.1 | CU-06 | PD-08 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3134) |
| WEB-ENT-04 | Recepción registrada | Vista | RF-06.7 | CU-06 | PD-08 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3156) |

</div>
</details>

<details class="doc-accordion">
<summary><span>Membresía y pagos</span><span class="doc-accordion__count">5 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| WEB-MEM-04 | Mis compras de membresía | Vista | RF-12.7, RF-12.9 | CU-08, CU-11 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3219) |
| WEB-MEM-05 | Membresía acreditada | Vista | RF-12.6, RF-12.8, RF-12.9 | CU-11 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3294) |
| WEB-MEM-06 | Pago rechazado | Vista | RF-12.5, RF-12.6 | CU-11 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3360) |
| WEB-MEM-07 | Checkout interrumpido | Vista | RF-12.5, RF-12.6 | CU-11 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3423) |
| WEB-MEM-08 | Verificación demorada | Vista | RF-12.6, RF-12.7 | CU-11 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3483) |

</div>
</details>

<details class="doc-accordion">
<summary><span>Mensajes, avisos e historial</span><span class="doc-accordion__count">2 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| WEB-CHAT-02 | Mensaje pendiente de envío | Vista | RF-05.2, RF-11.2 | CU-04 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3631) |
| WEB-HIS-02 | Historial del pedido | Vista | RF-02.4, RF-05.3 | CU-04, CU-06 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3763) |

</div>
</details>

<details class="doc-accordion">
<summary><span>Archivos y recuperación</span><span class="doc-accordion__count">2 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| WEB-ARC-01 | Detalle de archivo privado | Vista | RF-10.3 | CU-01, CU-04 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3543) |
| WEB-ARC-02 | Retirar archivo | Diálogo de confirmación | RF-10.4 | CU-01, CU-04 | Política de retiro y retención | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3609) |

</div>
</details>

<details class="doc-accordion">
<summary><span>Administración</span><span class="doc-accordion__count">7 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| WEB-ADM-MEM-02 | Asignar beneficio fundador | Vista | RF-12.3, RF-12.13 | CU-10 | PD-10 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3842) |
| WEB-ADM-MEM-03 | Compras de membresía | Vista | RF-12.7 | CU-07, CU-11 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3916) |
| WEB-ADM-MEM-04 | Detalle y conciliación de compra | Vista | RF-12.6, RF-12.7, RF-12.8 | CU-07, CU-11 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3990) |
| WEB-ADM-MEM-05 | Devolución autorizada del abono | Vista | RF-12.12 | CU-07 | PD-09 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-4062) |
| WEB-ADM-MEM-06 | Publicar versión del plan | Diálogo de confirmación | RF-12.1, RF-12.13 | CU-12 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-4136) |
| WEB-ADM-03 | Detalle de soporte | Vista | RF-07.2 | CU-07 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-4164) |
| WEB-ADM-04 | Auditoría de plan y beneficios | Vista | RF-12.13 | CU-07, CU-10, CU-12 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-4242) |

</div>
</details>


### Mobile

<details class="doc-accordion">
<summary><span>Acceso y perfiles</span><span class="doc-accordion__count">2 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| MOB-AUTH-03 | Cerrar sesión | Sheet de confirmación | RF-01.5 | CU-13 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2079) |
| MOB-MKR-05 | Habilitar perfil de maker | Vista | RF-01.2, RF-12.2, RF-12.4 | CU-09 | PD-01 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2093) |

</div>
</details>

<details class="doc-accordion">
<summary><span>Solicitudes y búsqueda</span><span class="doc-accordion__count">3 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| MOB-SOL-03 | Revisar y publicar solicitud | Vista | RF-02.1, RF-02.2, RF-02.3, RF-09.1 | CU-01 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2166) |
| MOB-SOL-04 | Solicitud enviada | Vista | RF-02.3, RF-03.1, RF-07.1 | CU-01 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2272) |
| MOB-SOL-05 | Cómo se calculó la estimación | Vista | RF-02.5 | CU-01 | PD-06 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-3224) |

</div>
</details>

<details class="doc-accordion">
<summary><span>Invitaciones y ofertas</span><span class="doc-accordion__count">3 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| MOB-MKR-06 | Detalle de invitación | Vista | RF-03.2, RF-04.5, RF-10.3, RF-12.10 | CU-02 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2334) |
| MOB-MKR-07 | Rechazar invitación | Sheet de confirmación | RF-04.5 | CU-02 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2404) |
| MOB-OFE-04 | La oferta tiene una nueva versión | Vista | RF-04.2, RF-04.3, RF-04.4 | CU-03 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2421) |

</div>
</details>

<details class="doc-accordion">
<summary><span>Producción y revisión</span><span class="doc-accordion__count">5 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| MOB-PED-02 | Producción del pedido | Vista | RF-06.5, RF-05.3, RF-12.10 | CU-04 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2483) |
| MOB-PED-03 | Confirmar avance de producción | Sheet de confirmación | RF-06.5, RF-05.3 | CU-04 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2570) |
| MOB-REV-03 | Presentar revisión al cliente | Sheet de confirmación | RF-06.1, RF-06.2, RF-10.2 | CU-04 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2595) |
| MOB-REV-04 | Confirmar aprobación | Sheet de confirmación | RF-06.3 | CU-05 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2620) |
| MOB-REV-05 | Enviar observaciones | Sheet de confirmación | RF-06.3, RF-06.4 | CU-05 | PD-07 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2642) |

</div>
</details>

<details class="doc-accordion">
<summary><span>Entrega y reputación</span><span class="doc-accordion__count">2 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| MOB-ENT-03 | Confirmar coordinación | Sheet de confirmación | RF-06.6, RF-09.1 | CU-06 | PD-08 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2672) |
| MOB-ENT-04 | Recepción registrada | Vista | RF-06.7 | CU-06 | PD-08 | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2694) |

</div>
</details>

<details class="doc-accordion">
<summary><span>Membresía y pagos</span><span class="doc-accordion__count">5 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| MOB-MEM-04 | Mis compras de membresía | Vista | RF-12.7, RF-12.9 | CU-08, CU-11 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2756) |
| MOB-MEM-05 | Membresía acreditada | Vista | RF-12.6, RF-12.8, RF-12.9 | CU-11 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2830) |
| MOB-MEM-06 | Pago rechazado | Vista | RF-12.5, RF-12.6 | CU-11 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2895) |
| MOB-MEM-07 | Checkout interrumpido | Vista | RF-12.5, RF-12.6 | CU-11 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2957) |
| MOB-MEM-08 | Verificación demorada | Vista | RF-12.6, RF-12.7 | CU-11 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-3016) |

</div>
</details>

<details class="doc-accordion">
<summary><span>Mensajes, avisos e historial</span><span class="doc-accordion__count">2 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| MOB-CHAT-02 | Mensaje pendiente de envío | Vista | RF-05.2, RF-11.2 | CU-04 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-3162) |
| MOB-HIS-02 | Historial del pedido | Vista | RF-02.4, RF-05.3 | CU-04, CU-06 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-3292) |

</div>
</details>

<details class="doc-accordion">
<summary><span>Archivos y recuperación</span><span class="doc-accordion__count">2 composiciones</span></summary>
<div class="doc-accordion__body">

| ID | Composición | Tipo | RF | CU | Dependencias | Figma |
| --- | --- | --- | --- | --- | --- | --- |
| MOB-ARC-01 | Detalle de archivo privado | Vista | RF-10.3 | CU-01, CU-04 | Reglas de su spec | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-3075) |
| MOB-ARC-02 | Retirar archivo | Sheet de confirmación | RF-10.4 | CU-01, CU-04 | Política de retiro y retención | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-3140) |

</div>
</details>


## Estados que deben acompañar a cada tarea

Los estados de carga, validación, permisos, conexión y recuperación se aplican al recurso y al comando correspondiente. El cierre de una tarea requiere comprobar los textos, datos conservados y acciones de salida de cada alternativa.

- Formularios: datos válidos, errores por campo, resumen de errores, envío en curso y conflicto de versión.
- Archivos: autorización, transferencia, análisis pendiente, habilitado, rechazo y recuperación del enlace temporal.
- Ofertas: vigente, actualizada, vencida, aceptación concurrente y resultado incierto.
- Producción y revisión: acción permitida, revisión exacta, observación enviada, nueva revisión y recordatorio pendiente.
- Membresía: prueba, beneficio fundador, acceso activo/vencido, compra pendiente/aprobada/rechazada y retorno interrumpido.
- Administración: capacidad suficiente, permiso denegado, confirmación sensible, conflicto y resultado auditado.

## Decisiones para cerrar el diseño

| Tema | Decisión o trabajo necesario |
| --- | --- |
| Perfil y habilitación | Criterios de PD-01 y edición desglosada de capacidades/disponibilidad. |
| Matching y ofertas | Política versionada de rondas, transiciones y resolución de PD-04/PD-05 según las specs. |
| Estimación | Método, supuestos y condiciones de disponibilidad de PD-06. |
| Revisión | Correcciones, plazos y escalamiento de PD-07. |
| Entrega y recepción | Actores, acuerdo y mecanismo de cierre de PD-08. |
| Devoluciones del abono | Política, responsables y efecto en períodos futuros de PD-09. |
| Fundadores | Condiciones de asignación tardía de PD-10 y estados de cupo agotado/asignación previa. |
| Archivos y avisos | Retención, tipos/límites habilitados, preferencias y canales según las decisiones de origen. |
| Portfolio, reputación y reportes | Alcance v1, RF/CU y reglas específicas de F04, F18 y F21. |

## Criterio de cierre de una vista

Una vista se cierra con sus campos y validaciones, acciones por rol, transiciones, estados alternativos, dependencias resueltas y referencias RF/CU/AC. La revisión de accesibilidad incluye lectura y foco, teclado en Web, objetivos táctiles y escalado de texto en Mobile. La revisión funcional incluye permisos, concurrencia e idempotencia. Los objetivos medibles se toman de los RNF de origen.

## Cambios realizados en las vistas originales

- Solicitud: acceso a revisión y publicación antes del resultado de la ronda.
- Invitaciones: acceso a detalle y confirmación de rechazo.
- Producción: acceso al pedido del maker y confirmación de transición.
- Evidencia: texto de fotos/videos y confirmación de presentación.
- Revisión: aprobación y observaciones con confirmación explícita.
- Entrega: revisión del acuerdo antes del registro.
- Compras, habilitación, estimación e historial: accesos contextuales a las nuevas composiciones.
- Historial: referencias ATQ-024 y ATQ-025 diferenciadas.
- Reputación, recepción y checkout: captura condicionada a escala, mecanismo y precio publicados/configurados.

## Integración pendiente del prototipo

La configuración original del plan conserva pendiente el acceso contextual a ADM-MEM-06. La composición está disponible en el índice de flujos Web. Completar las alternativas por funcionalidad indicadas en esta matriz y revisar los recorridos de extremo a extremo.
