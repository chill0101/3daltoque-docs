---
title: "Catálogo de componentes"
---

# Catálogo de componentes

Fecha: 17 de octubre de 2026. Versión: 1.0.

Las 43 definiciones relacionan interfaz, estados y reglas del producto. El kit Web utiliza los contratos de este catálogo; la adaptación Mobile se detalla en [Web y Mobile](/3daltoque-docs/design-system/04-web-mobile/).

## Familias de componentes

Cada familia reúne su índice y las fichas completas de contrato, variantes, estados, accesibilidad y reglas de uso.

<details class="doc-accordion">
<summary><span>Acciones</span><span class="doc-accordion__count">2 componentes</span></summary>
<div class="doc-accordion__body">

| ID | Componente | Capa | Spec relacionada |
| --- | --- | --- | --- |
| [DS01](#ds01) | Button | primitiva | [F01](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/), [F04](/3daltoque-docs/specs/f04-portfolio-del-maker/), [F10](/3daltoque-docs/specs/f10-confirmacion-de-oferta/), [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F17](/3daltoque-docs/specs/f17-validacion-de-recepcion/), [F22](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/) |
| [DS02](#ds02) | IconButton | primitiva | Composición transversal |

<a id="ds01"></a>

#### DS01 · Button

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | variant, size, loading, disabled, type, onClick |
| Variantes | primary, secondary, ghost, danger; sm, md, lg |
| Estados | reposo, foco, presionado, deshabilitado, carga |
| Interacción y accesibilidad | Texto visible; botón nativo; aria-busy en carga; tamaño táctil de 48. |
| Regla de uso | Las mutaciones reciben estado y confirmación del contenedor. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds02"></a>

#### DS02 · IconButton

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | label, icon, disabled, onClick |
| Variantes | neutral, danger |
| Estados | reposo, foco, deshabilitado |
| Interacción y accesibilidad | Nombre accesible obligatorio; icono decorativo dentro del control. |
| Regla de uso | Reservar para acciones reconocibles junto a contexto visible. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Formularios y validación</span><span class="doc-accordion__count">8 componentes</span></summary>
<div class="doc-accordion__body">

| ID | Componente | Capa | Spec relacionada |
| --- | --- | --- | --- |
| [DS03](#ds03) | TextField | primitiva | [F01](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/), [F02](/3daltoque-docs/specs/f02-gestion-de-perfil-de-cliente/), [F03](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/), [F04](/3daltoque-docs/specs/f04-portfolio-del-maker/), [F05](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/), [F07](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/), [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/), [F15](/3daltoque-docs/specs/f15-evidencia-previa-a-la-entrega/), [F16](/3daltoque-docs/specs/f16-entrega-en-nodo-amigo/), [F18](/3daltoque-docs/specs/f18-reputacion-bidireccional/), [F20](/3daltoque-docs/specs/f20-panel-de-administracion/), [F22](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| [DS04](#ds04) | TextArea | primitiva | Composición transversal |
| [DS05](#ds05) | Select | primitiva | [F02](/3daltoque-docs/specs/f02-gestion-de-perfil-de-cliente/), [F03](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/), [F05](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/), [F07](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/), [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/), [F19](/3daltoque-docs/specs/f19-historial-de-pedidos/), [F21](/3daltoque-docs/specs/f21-reporte-de-actividad/) |
| [DS06](#ds06) | Checkbox | primitiva | [F01](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/) |
| [DS07](#ds07) | RadioGroup | primitiva | [F03](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/), [F18](/3daltoque-docs/specs/f18-reputacion-bidireccional/) |
| [DS08](#ds08) | SwitchField | primitiva | [F03](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/) |
| [DS24](#ds24) | ErrorSummary | primitiva | [F01](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/), [F05](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/), [F20](/3daltoque-docs/specs/f20-panel-de-administracion/) |
| [DS39](#ds39) | RatingInput | producto | [F18](/3daltoque-docs/specs/f18-reputacion-bidireccional/) |

<a id="ds03"></a>

#### DS03 · TextField

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | label, hint, error, id y props de input |
| Variantes | text, email, password, search, number |
| Estados | vacío, completo, inválido, deshabilitado, solo lectura |
| Interacción y accesibilidad | Label y mensajes asociados por ID; conservar autocomplete pertinente. |
| Regla de uso | El tipo y los límites siguen el contrato de campo. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds04"></a>

#### DS04 · TextArea

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | label, hint, error, rows y props de textarea |
| Variantes | descripción, observación, mensaje |
| Estados | vacío, completo, inválido |
| Interacción y accesibilidad | Etiqueta visible y mensajes asociados; altura adaptable. |
| Regla de uso | Conservar contenido permitido ante errores recuperables. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds05"></a>

#### DS05 · Select

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | label, options, value, onChange, hint, error |
| Variantes | selección simple nativa |
| Estados | vacío, seleccionado, deshabilitado, inválido |
| Interacción y accesibilidad | Select nativo con etiqueta; opciones deshabilitadas identificadas. |
| Regla de uso | Opciones válidas provienen del catálogo o política del servidor. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds06"></a>

#### DS06 · Checkbox

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | label, checked, onChange, hint, disabled |
| Variantes | aceptación, selección |
| Estados | marcado, desmarcado, foco, deshabilitado |
| Interacción y accesibilidad | Control nativo y texto que explica el consentimiento. |
| Regla de uso | Cada aceptación debe identificar las condiciones aplicables. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds07"></a>

#### DS07 · RadioGroup

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | label, options, value, onValueChange, error |
| Variantes | opciones exclusivas |
| Estados | seleccionado, error, deshabilitado |
| Interacción y accesibilidad | Fieldset y legend; navegación nativa entre radios. |
| Regla de uso | Valores y etiquetas explícitos; escala configurada. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds08"></a>

#### DS08 · SwitchField

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | label, checked, onChange, hint, disabled |
| Variantes | preferencia booleana |
| Estados | activo, inactivo, foco, deshabilitado |
| Interacción y accesibilidad | Rol switch; nombre y estado accesibles. |
| Regla de uso | Utilizar para una preferencia con efecto comprensible. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds24"></a>

#### DS24 · ErrorSummary

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | title, errors de fieldId y message |
| Variantes | validación de formulario |
| Estados | visible cuando hay errores |
| Interacción y accesibilidad | Enlaces a campos; foco programático al confirmar un formulario inválido. |
| Regla de uso | Conservar mensajes junto al control. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds39"></a>

#### DS39 · RatingInput

| Contrato | Definición |
| --- | --- |
| Capa | producto |
| Props principales | label, options, value, onValueChange, error |
| Variantes | escala configurada |
| Estados | sin selección, seleccionado |
| Interacción y accesibilidad | Radios con valores y etiquetas legibles. |
| Regla de uso | La escala y elegibilidad se acuerdan en F18. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Navegación y acceso</span><span class="doc-accordion__count">7 componentes</span></summary>
<div class="doc-accordion__body">

| ID | Componente | Capa | Spec relacionada |
| --- | --- | --- | --- |
| [DS13](#ds13) | Tabs | primitiva | Composición transversal |
| [DS14](#ds14) | Accordion | primitiva | [F14](/3daltoque-docs/specs/f14-notificaciones/) |
| [DS20](#ds20) | Pagination | primitiva | [F08](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/), [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F19](/3daltoque-docs/specs/f19-historial-de-pedidos/), [F21](/3daltoque-docs/specs/f21-reporte-de-actividad/) |
| [DS21](#ds21) | Stepper | primitiva | [F03](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/), [F05](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/) |
| [DS38](#ds38) | AppShell | estructura | [F24](/3daltoque-docs/specs/f24-api-comun-y-sincronizacion/) |
| [DS40](#ds40) | FilterBar | producto | [F07](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/), [F19](/3daltoque-docs/specs/f19-historial-de-pedidos/), [F21](/3daltoque-docs/specs/f21-reporte-de-actividad/) |
| [DS43](#ds43) | PermissionGate | estructura | [F10](/3daltoque-docs/specs/f10-confirmacion-de-oferta/), [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/), [F20](/3daltoque-docs/specs/f20-panel-de-administracion/), [F24](/3daltoque-docs/specs/f24-api-comun-y-sincronizacion/) |

<a id="ds13"></a>

#### DS13 · Tabs

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | label, items, value, onValueChange |
| Variantes | pestañas locales horizontales |
| Estados | activa, foco, deshabilitada |
| Interacción y accesibilidad | Tablist, tabs y paneles asociados; flechas, Home y End. |
| Regla de uso | La activación automática se reserva a paneles locales disponibles. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds14"></a>

#### DS14 · Accordion

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | title, children, open |
| Variantes | detalle expandible |
| Estados | abierto, cerrado |
| Interacción y accesibilidad | Details y summary nativos; encabezado comprensible. |
| Regla de uso | Mantener visible la información necesaria para decidir. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds20"></a>

#### DS20 · Pagination

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | hasPrevious, hasNext, onPrevious, onNext, label |
| Variantes | cursor anterior/siguiente |
| Estados | inicio, continuación, fin |
| Interacción y accesibilidad | Navegación nombrada y botones accesibles. |
| Regla de uso | Los cursores y el orden estable provienen de la respuesta. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds21"></a>

#### DS21 · Stepper

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | steps, current, label |
| Variantes | formulario por etapas |
| Estados | actual, completada, siguiente |
| Interacción y accesibilidad | Lista ordenada y aria-current=step. |
| Regla de uso | Las etapas conservan los datos válidos y señalan errores. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds38"></a>

#### DS38 · AppShell

| Contrato | Definición |
| --- | --- |
| Capa | estructura |
| Props principales | brand, navigation, header, children, aside, theme |
| Variantes | cliente, maker, administración |
| Estados | responsive |
| Interacción y accesibilidad | Enlace para saltar al contenido y regiones semánticas. |
| Regla de uso | Las capacidades del usuario determinan la navegación. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds40"></a>

#### DS40 · FilterBar

| Contrato | Definición |
| --- | --- |
| Capa | producto |
| Props principales | label, children, onSubmit, onReset |
| Variantes | búsqueda, historial, reporte |
| Estados | filtros aplicados |
| Interacción y accesibilidad | Formulario con nombre; aplicar y limpiar explícitos. |
| Regla de uso | Cambios de filtro reinician el cursor de consulta. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds43"></a>

#### DS43 · PermissionGate

| Contrato | Definición |
| --- | --- |
| Capa | estructura |
| Props principales | allowed, fallback, children |
| Variantes | acción, sección |
| Estados | permitido, restringido |
| Interacción y accesibilidad | Explicación accesible en fallback. |
| Regla de uso | El servidor revalida permisos y recursos en cada operación. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Información y feedback</span><span class="doc-accordion__count">12 componentes</span></summary>
<div class="doc-accordion__body">

| ID | Componente | Capa | Spec relacionada |
| --- | --- | --- | --- |
| [DS09](#ds09) | Card | primitiva | [F02](/3daltoque-docs/specs/f02-gestion-de-perfil-de-cliente/), [F06](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/), [F08](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/), [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/), [F18](/3daltoque-docs/specs/f18-reputacion-bidireccional/) |
| [DS10](#ds10) | Badge | primitiva | [F06](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/), [F08](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/), [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/), [F14](/3daltoque-docs/specs/f14-notificaciones/) |
| [DS11](#ds11) | Alert | primitiva | [F01](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/), [F02](/3daltoque-docs/specs/f02-gestion-de-perfil-de-cliente/), [F06](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/), [F10](/3daltoque-docs/specs/f10-confirmacion-de-oferta/), [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F17](/3daltoque-docs/specs/f17-validacion-de-recepcion/), [F20](/3daltoque-docs/specs/f20-panel-de-administracion/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/), [F24](/3daltoque-docs/specs/f24-api-comun-y-sincronizacion/) |
| [DS15](#ds15) | Avatar | primitiva | Composición transversal |
| [DS16](#ds16) | Skeleton | primitiva | [F13](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/), [F24](/3daltoque-docs/specs/f24-api-comun-y-sincronizacion/) |
| [DS17](#ds17) | EmptyState | primitiva | [F06](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/), [F07](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/), [F08](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/), [F14](/3daltoque-docs/specs/f14-notificaciones/) |
| [DS18](#ds18) | Progress | primitiva | [F06](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/), [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| [DS19](#ds19) | DataTable | primitiva | [F08](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/), [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/), [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/), [F19](/3daltoque-docs/specs/f19-historial-de-pedidos/), [F20](/3daltoque-docs/specs/f20-panel-de-administracion/), [F21](/3daltoque-docs/specs/f21-reporte-de-actividad/) |
| [DS22](#ds22) | Money | primitiva | [F06](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/), [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| [DS23](#ds23) | DateTime | primitiva | [F16](/3daltoque-docs/specs/f16-entrega-en-nodo-amigo/) |
| [DS36](#ds36) | MetricCard | producto | [F21](/3daltoque-docs/specs/f21-reporte-de-actividad/) |
| [DS41](#ds41) | ToastRegion | estructura | [F13](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/), [F14](/3daltoque-docs/specs/f14-notificaciones/), [F24](/3daltoque-docs/specs/f24-api-comun-y-sincronizacion/) |

<a id="ds09"></a>

#### DS09 · Card

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | title, description, actions, children |
| Variantes | default, elevated, inset |
| Estados | contenido, carga mediante composición |
| Interacción y accesibilidad | Jerarquía de títulos configurable por contexto. |
| Regla de uso | Las acciones mantienen su semántica de botón o enlace. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds10"></a>

#### DS10 · Badge

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | tone, children |
| Variantes | neutral, info, success, warning, danger |
| Estados | etiqueta de estado |
| Interacción y accesibilidad | Texto de estado visible; color complementario. |
| Regla de uso | El mapeo de estados se define en patrones del producto. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds11"></a>

#### DS11 · Alert

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | tone, title, children, action |
| Variantes | info, success, warning, danger |
| Estados | persistente, recuperable |
| Interacción y accesibilidad | Anuncio de error cuando se incorpora; texto y acción comprensibles. |
| Regla de uso | La alerta identifica la acción o condición que requiere atención. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds15"></a>

#### DS15 · Avatar

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | name, src, size |
| Variantes | sm, md, lg |
| Estados | imagen, iniciales |
| Interacción y accesibilidad | La imagen y el nombre evitan repetición innecesaria del lector. |
| Regla de uso | Fallback determinista mediante iniciales del nombre. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds16"></a>

#### DS16 · Skeleton

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | lines, label |
| Variantes | línea, bloque por composición |
| Estados | carga inicial |
| Interacción y accesibilidad | Nombre del contenedor; decoración oculta al lector. |
| Regla de uso | Conservar la geometría del contenido que se está cargando. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds17"></a>

#### DS17 · EmptyState

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | title, description, action |
| Variantes | sin datos, sin resultados, primer uso |
| Estados | vacío con contexto |
| Interacción y accesibilidad | Título y acción específica para el recorrido. |
| Regla de uso | Explicar filtros o condición que originó el vacío. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds18"></a>

#### DS18 · Progress

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | label, value, max |
| Variantes | determinado, indeterminado |
| Estados | progreso, procesamiento |
| Interacción y accesibilidad | Progress nativo y etiqueta; valor solo si existe medición. |
| Regla de uso | El avance proviene de la operación real. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds19"></a>

#### DS19 · DataTable

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | columns, rows, rowKey, caption, emptyLabel |
| Variantes | listado, comparación por composición |
| Estados | contenido, vacío, desplazamiento |
| Interacción y accesibilidad | Table con encabezados y caption; región desplazable nombrada. |
| Regla de uso | La versión compacta conserva las etiquetas de cada dato. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds22"></a>

#### DS22 · Money

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | amountLabel, currency, pendingLabel |
| Variantes | importe, rango por composición |
| Estados | informado, pendiente |
| Interacción y accesibilidad | Moneda y carácter orientativo se comunican en texto. |
| Regla de uso | Recibe un texto formateado con precisión por el adaptador de presentación. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds23"></a>

#### DS23 · DateTime

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | iso, timeZone, locale, pendingLabel |
| Variantes | fecha y hora |
| Estados | informada, pendiente |
| Interacción y accesibilidad | Time con datetime y zona visible en acuerdos de entrega. |
| Regla de uso | El contrato conserva UTC y la interfaz presenta su zona. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds36"></a>

#### DS36 · MetricCard

| Contrato | Definición |
| --- | --- |
| Capa | producto |
| Props principales | label, valueLabel, periodLabel, sourceLabel |
| Variantes | indicador del piloto |
| Estados | dato, pendiente |
| Interacción y accesibilidad | Unidad, período y origen identificados. |
| Regla de uso | Cada métrica utiliza la definición y alcance de F21. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds41"></a>

#### DS41 · ToastRegion

| Contrato | Definición |
| --- | --- |
| Capa | estructura |
| Props principales | items, onDismiss |
| Variantes | info, success, warning, danger |
| Estados | mensaje agregado o retirado |
| Interacción y accesibilidad | Región polite; errores importantes permanecen también junto al recurso. |
| Regla de uso | La confirmación sensible conserva una vista persistente del resultado. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Diálogos y paneles</span><span class="doc-accordion__count">2 componentes</span></summary>
<div class="doc-accordion__body">

| ID | Componente | Capa | Spec relacionada |
| --- | --- | --- | --- |
| [DS12](#ds12) | Dialog | primitiva | [F10](/3daltoque-docs/specs/f10-confirmacion-de-oferta/), [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F16](/3daltoque-docs/specs/f16-entrega-en-nodo-amigo/), [F17](/3daltoque-docs/specs/f17-validacion-de-recepcion/), [F20](/3daltoque-docs/specs/f20-panel-de-administracion/), [F22](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/) |
| [DS42](#ds42) | Sheet | estructura | Composición transversal |

<a id="ds12"></a>

#### DS12 · Dialog

| Contrato | Definición |
| --- | --- |
| Capa | primitiva |
| Props principales | open, title, description, onClose, children, actions |
| Variantes | confirmación, información |
| Estados | abierto, cerrado, operación en curso |
| Interacción y accesibilidad | Dialog modal nativo; título, Escape y foco gestionado por navegador. |
| Regla de uso | Confirmar explícitamente las operaciones sensibles. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds42"></a>

#### DS42 · Sheet

| Contrato | Definición |
| --- | --- |
| Capa | estructura |
| Props principales | props de Dialog |
| Variantes | panel lateral, panel inferior responsive |
| Estados | abierto, cerrado |
| Interacción y accesibilidad | Mismas reglas de foco y cierre del diálogo modal. |
| Regla de uso | Utilizar para filtros o detalle complementario. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Componentes de producto</span><span class="doc-accordion__count">12 componentes</span></summary>
<div class="doc-accordion__body">

| ID | Componente | Capa | Spec relacionada |
| --- | --- | --- | --- |
| [DS25](#ds25) | FileDropzone | producto | [F04](/3daltoque-docs/specs/f04-portfolio-del-maker/), [F05](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/), [F13](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/), [F15](/3daltoque-docs/specs/f15-evidencia-previa-a-la-entrega/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| [DS26](#ds26) | FileItem | producto | [F04](/3daltoque-docs/specs/f04-portfolio-del-maker/), [F05](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/), [F15](/3daltoque-docs/specs/f15-evidencia-previa-a-la-entrega/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| [DS27](#ds27) | OfferCard | producto | [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/), [F10](/3daltoque-docs/specs/f10-confirmacion-de-oferta/) |
| [DS28](#ds28) | OrderTimeline | producto | [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/), [F14](/3daltoque-docs/specs/f14-notificaciones/), [F17](/3daltoque-docs/specs/f17-validacion-de-recepcion/), [F19](/3daltoque-docs/specs/f19-historial-de-pedidos/) |
| [DS29](#ds29) | MessageBubble | producto | [F13](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/) |
| [DS30](#ds30) | ChatComposer | producto | [F13](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/) |
| [DS31](#ds31) | EvidenceGallery | producto | [F04](/3daltoque-docs/specs/f04-portfolio-del-maker/), [F15](/3daltoque-docs/specs/f15-evidencia-previa-a-la-entrega/), [F22](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/) |
| [DS32](#ds32) | ReviewDecisionPanel | producto | [F22](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/) |
| [DS33](#ds33) | MembershipCard | producto | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| [DS34](#ds34) | FounderBadge | producto | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| [DS35](#ds35) | QueueItem | producto | [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/) |
| [DS37](#ds37) | MapLocationPicker | producto | [F02](/3daltoque-docs/specs/f02-gestion-de-perfil-de-cliente/), [F03](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/), [F07](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/), [F16](/3daltoque-docs/specs/f16-entrega-en-nodo-amigo/) |

<a id="ds25"></a>

#### DS25 · FileDropzone

| Contrato | Definición |
| --- | --- |
| Capa | producto |
| Props principales | label, accept, multiple, disabled, onFiles |
| Variantes | STL, evidencia, adjunto |
| Estados | selección, deshabilitado |
| Interacción y accesibilidad | Input file accesible y selección mediante teclado. |
| Regla de uso | La selección prepara archivos; el backend autoriza y habilita su uso. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds26"></a>

#### DS26 · FileItem

| Contrato | Definición |
| --- | --- |
| Capa | producto |
| Props principales | name, status, detail, progress, onRemove, onRetry |
| Variantes | temporal, habilitado, rechazado |
| Estados | carga, análisis, éxito, error |
| Interacción y accesibilidad | Nombre y estado explícitos; acciones accesibles. |
| Regla de uso | Conservar la referencia de archivo y su finalidad. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds27"></a>

#### DS27 · OfferCard

| Contrato | Definición |
| --- | --- |
| Capa | producto |
| Props principales | makerName, amountLabel, currency, deadline, expiry, version, onSelect, disabled |
| Variantes | resumen, comparación |
| Estados | vigente, vencida, seleccionada |
| Interacción y accesibilidad | Datos etiquetados; botón de revisar oferta. |
| Regla de uso | La confirmación utiliza la versión exacta de condiciones. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds28"></a>

#### DS28 · OrderTimeline

| Contrato | Definición |
| --- | --- |
| Capa | producto |
| Props principales | items con id, title, dateLabel y detail |
| Variantes | pedido, auditoría permitida |
| Estados | eventos persistidos |
| Interacción y accesibilidad | Lista ordenada y etiquetas textuales de evento. |
| Regla de uso | Mostrar únicamente hechos autorizados del recurso. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds29"></a>

#### DS29 · MessageBubble

| Contrato | Definición |
| --- | --- |
| Capa | producto |
| Props principales | author, text, timeLabel, status, own |
| Variantes | propio, recibido |
| Estados | pendiente, enviado, fallido |
| Interacción y accesibilidad | Autor, hora y estado; crecimiento de texto sin recortes esenciales. |
| Regla de uso | La persistencia determina la confirmación de envío. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds30"></a>

#### DS30 · ChatComposer

| Contrato | Definición |
| --- | --- |
| Capa | producto |
| Props principales | value, onValueChange, onSend, busy, disabled, error |
| Variantes | texto; adjuntos por composición |
| Estados | edición, enviando, bloqueado |
| Interacción y accesibilidad | Textarea etiquetada y botón explícito de enviar. |
| Regla de uso | La clave de envío y recuperación se gestionan en el contenedor. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds31"></a>

#### DS31 · EvidenceGallery

| Contrato | Definición |
| --- | --- |
| Capa | producto |
| Props principales | items con id, url, alt y kind |
| Variantes | imagen, video |
| Estados | disponible, vacío; error en contenedor |
| Interacción y accesibilidad | Alternativa textual y controles de video. |
| Regla de uso | Cada URL pertenece a una revisión y requiere autorización vigente. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds32"></a>

#### DS32 · ReviewDecisionPanel

| Contrato | Definición |
| --- | --- |
| Capa | producto |
| Props principales | revisionLabel, onApprove, onObserve, busy, disabled |
| Variantes | decisión del cliente |
| Estados | pendiente, enviando, disponible |
| Interacción y accesibilidad | Acciones explícitas; contexto de revisión visible. |
| Regla de uso | El contenedor confirma revisión y evidencia antes de enviar. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds33"></a>

#### DS33 · MembershipCard

| Contrato | Definición |
| --- | --- |
| Capa | producto |
| Props principales | statusLabel, periodLabel, priceLabel, founder, action |
| Variantes | prueba, vigente, vencida, pendiente |
| Estados | estado de acceso |
| Interacción y accesibilidad | Duración, estado y renovación manual expresados en texto. |
| Regla de uso | El backend decide el acceso efectivo y las acciones disponibles. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds34"></a>

#### DS34 · FounderBadge

| Contrato | Definición |
| --- | --- |
| Capa | producto |
| Props principales | label |
| Variantes | distintivo fundador |
| Estados | pertenencia al programa |
| Interacción y accesibilidad | Nombre del programa y texto del beneficio según contexto. |
| Regla de uso | Representa pertenencia y condiciones de acceso concedidas. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds35"></a>

#### DS35 · QueueItem

| Contrato | Definición |
| --- | --- |
| Capa | producto |
| Props principales | title, stateLabel, dateLabel, detail, action |
| Variantes | trabajo en cola |
| Estados | estado productivo |
| Interacción y accesibilidad | Orden explicado y acción del trabajo accesible. |
| Regla de uso | La ordenación utiliza el criterio acordado en la spec F12. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

<a id="ds37"></a>

#### DS37 · MapLocationPicker

| Contrato | Definición |
| --- | --- |
| Capa | producto |
| Props principales | label, map, summary, onConfirm, disabled |
| Variantes | mapa con alternativa textual |
| Estados | sin confirmar, confirmada, proveedor no disponible |
| Interacción y accesibilidad | Región nombrada y resumen textual de ubicación. |
| Regla de uso | El adaptador inyecta el mapa elegido; la confirmación llama al servidor. |
| Composición | Tokens semánticos, acciones explícitas y estados proporcionados por el contenedor. |

##### Composición Web del mapa

DS37 utiliza la molécula M34 · MapViewport para representar la zona geográfica. El viewport adapta su ancho al contenedor y conserva una altura de referencia de 240 px. Los marcadores, sus anillos y los grosores de las calles mantienen sus dimensiones durante el cambio de ancho. El marco recorta la cobertura geográfica al tamaño disponible.

| Molécula | Contrato |
| --- | --- |
| M34 · MapViewport | Región geográfica de referencia con marcadores de tamaño constante. |
| Props de diseño | AreaLabel: nombre de la zona; ShowMakers: visibilidad de los indicadores de makers compatibles. |
| Composición | Superficie, calles, marcadores y etiqueta construidos con elementos editables y tokens semánticos. |
| Confirmación | DS37 conserva el resumen textual y la acción explícita de confirmar la ubicación. |
| Alternativa | El estado de proveedor indisponible ofrece ingreso manual de referencia. |
| Aplicación | RF-09.1 y RF-09.2; la selección y la confirmación permanecen en el contexto de la tarea. |

WEB-SOL-03 organiza el resumen de la solicitud y el estado del archivo en una columna; el ingreso de referencia y el mapa ocupan la otra columna. Las acciones de edición y publicación quedan juntas al final del formulario. La composición conserva los datos y las validaciones de F05/F07 y sus referencias a CU-01.

</div>
</details>

