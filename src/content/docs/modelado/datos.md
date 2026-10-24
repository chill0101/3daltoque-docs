---
title: "Diagrama entidad-relación"
---

# Diagrama entidad-relación

Versión 2.0-borrador, 14 de octubre de 2026. Ocho vistas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): 50 tablas, 460 columnas. Las vistas muestran claves y atributos seleccionados para ser legibles; el diccionario es la especificación completa. Las entidades repetidas conectan las vistas y representan las mismas tablas del modelo lógico.

La venta del abono pertenece al maker y a la plataforma. No existe relación pedido → pago del abono. [Modelo comercial](/3daltoque-docs/proyecto/modelo-comercial/).

## Pedidos de impresión y membresías: circuitos separados

![DER: Pedidos de impresión y membresías: circuitos separados](/3daltoque-docs/documentos/b603b79b1a48-der-general.svg)

[Abrir imagen](/3daltoque-docs/documentos/b603b79b1a48-der-general.svg) · [Fuente Mermaid](/3daltoque-docs/documentos/20d7c914f94a-der-general.mmd).

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
erDiagram
  clientes {
    UUID usuario_id PK
    UUID ubicacion_id FK
  }
  solicitudes {
    UUID id PK
    UUID cliente_id FK
    Entero version_actual FK
    EstadoSolicitud estado
  }
  makers {
    UUID id PK
    UUID usuario_id FK
    UUID ubicacion_id FK
    EstadoPerfil estado
  }
  ofertas {
    UUID id PK
    UUID solicitud_id FK
    UUID maker_id FK
    Entero version_actual FK
    EstadoOferta estado
  }
  pedidos {
    UUID id PK
    UUID solicitud_id FK
    UUID oferta_id FK
    Entero oferta_version_numero FK
    EstadoPedido estado
    UUID revision_actual_id FK
  }
  revisiones_resultado {
    UUID id PK
    UUID pedido_id FK
    UUID presentada_por FK
    EstadoRevision estado
  }
  entregas {
    UUID id PK
    UUID pedido_id FK
    UUID revision_aprobada_id FK
    UUID punto_encuentro_id FK
    EstadoEntrega estado
  }
  membresias_maker {
    UUID id PK
    UUID maker_id FK
    Booleano es_fundador
    UUID fundador_configuracion_id FK
    UUID fundador_asignado_por FK
  }
  planes_membresia_versiones {
    UUID id PK
    Monto importe
    Moneda moneda
    Texto periodo_unidad
    Entero periodo_cantidad
    UUID configuracion_version_id FK
    UUID creado_por FK
  }
  compras_membresia {
    UUID id PK
    UUID membresia_id FK
    UUID plan_version_id FK
    Monto importe
    Moneda moneda
    Texto periodo_unidad
    Entero periodo_cantidad
    EstadoCompra estado
  }
  periodos_membresia {
    UUID id PK
    UUID membresia_id FK
    OrigenAcceso origen
    UUID compra_id FK
    UUID configuracion_version_id FK
    FechaHora inicio_en
    FechaHora fin_en
    EstadoPeriodo estado
  }
  pagos {
    UUID id PK
    UUID compra_id FK
    Moneda moneda
    EstadoPago estado
  }
  clientes ||--o{ solicitudes : "cliente_id"
  solicitudes ||--o{ ofertas : "solicitud_id"
  makers ||--o{ ofertas : "maker_id"
  ofertas ||--o{ pedidos : "oferta_id_solicitud_id"
  solicitudes ||--o| pedidos : "solicitud_id"
  revisiones_resultado o|--o{ pedidos : "id_revision_actual_id"
  pedidos ||--o{ revisiones_resultado : "pedido_id"
  pedidos ||--o| entregas : "pedido_id"
  revisiones_resultado ||--o{ entregas : "pedido_id_revision_aprobada_id"
  makers ||--o| membresias_maker : "maker_id"
  membresias_maker ||--o{ compras_membresia : "membresia_id"
  planes_membresia_versiones ||--o{ compras_membresia : "plan_version_id"
  membresias_maker ||--o{ periodos_membresia : "membresia_id"
  compras_membresia o|--o{ periodos_membresia : "compra_id_membresia_id"
  compras_membresia ||--o| pagos : "compra_id"

```

</div>
</details>


## Identidad, ubicaciones y capacidades

![DER: Identidad, ubicaciones y capacidades](/3daltoque-docs/documentos/ccaa2a178084-der-identidad.svg)

[Abrir imagen](/3daltoque-docs/documentos/ccaa2a178084-der-identidad.svg) · [Fuente Mermaid](/3daltoque-docs/documentos/c9a8a7b5f5d5-der-identidad.mmd).

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
erDiagram
  usuarios {
    UUID id PK
    EstadoUsuario estado
  }
  usuario_roles {
    UUID usuario_id PK
    Rol rol PK
    UUID otorgado_por FK
  }
  clientes {
    UUID usuario_id PK
    UUID ubicacion_id FK
  }
  makers {
    UUID id PK
    UUID usuario_id FK
    UUID ubicacion_id FK
    EstadoPerfil estado
  }
  sesiones {
    UUID id PK
    UUID usuario_id FK
  }
  ubicaciones {
    UUID id PK
    UUID propietario_id FK
    OrigenUbicacion origen
  }
  impresoras {
    UUID id PK
    UUID maker_id FK
    EstadoRecurso estado
  }
  materiales {
    UUID id PK
  }
  capacidades_impresora {
    UUID id PK
    UUID impresora_id FK
    UUID material_id FK
  }
  usuarios ||--o{ usuario_roles : "usuario_id"
  usuarios o|--o{ usuario_roles : "otorgado_por"
  usuarios ||--o| clientes : "usuario_id"
  ubicaciones o|--o{ clientes : "ubicacion_id"
  usuarios ||--o| makers : "usuario_id"
  ubicaciones o|--o{ makers : "ubicacion_id"
  usuarios ||--o{ sesiones : "usuario_id"
  usuarios ||--o{ ubicaciones : "propietario_id"
  makers ||--o{ impresoras : "maker_id"
  impresoras ||--o{ capacidades_impresora : "impresora_id"
  materiales ||--o{ capacidades_impresora : "material_id"

```

</div>
</details>


## Archivos y análisis

![DER: Archivos y análisis](/3daltoque-docs/documentos/66377b824f4a-der-archivos.svg)

[Abrir imagen](/3daltoque-docs/documentos/66377b824f4a-der-archivos.svg) · [Fuente Mermaid](/3daltoque-docs/documentos/86c73d05e0e9-der-archivos.mmd).

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
erDiagram
  archivos {
    UUID id PK
    UUID propietario_id FK
    EstadoArchivo estado
  }
  analisis_archivos {
    UUID id PK
    UUID archivo_id FK
    EstadoAnalisis estado
  }
  usuarios {
    UUID id PK
  }
  usuarios ||--o{ archivos : "propietario_id"
  archivos ||--o{ analisis_archivos : "archivo_id"

```

</div>
</details>


## Solicitudes, búsqueda y ofertas

![DER: Solicitudes, búsqueda y ofertas](/3daltoque-docs/documentos/57c3386e5db7-der-cotizaciones.svg)

[Abrir imagen](/3daltoque-docs/documentos/57c3386e5db7-der-cotizaciones.svg) · [Fuente Mermaid](/3daltoque-docs/documentos/a77b05bb3349-der-cotizaciones.mmd).

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
erDiagram
  solicitudes {
    UUID id PK
    UUID cliente_id FK
    Entero version_actual FK
    EstadoSolicitud estado
  }
  solicitud_versiones {
    UUID solicitud_id PK
    Entero numero PK
    UUID archivo_stl_id FK
    UUID material_id FK
    UUID ubicacion_id FK
  }
  rondas_busqueda {
    UUID id PK
    UUID solicitud_id FK
    Entero solicitud_version_numero FK
    UUID configuracion_version_id FK
    EstadoRonda estado
  }
  invitaciones_maker {
    UUID id PK
    UUID ronda_id FK
    UUID solicitud_id FK
    UUID maker_id FK
    EstadoInvitacion estado
  }
  estimaciones {
    UUID id PK
    UUID solicitud_id FK
    Entero solicitud_version_numero FK
    UUID analisis_archivo_id FK
    Moneda moneda
    EstadoEstimacion estado
  }
  ofertas {
    UUID id PK
    UUID solicitud_id FK
    UUID maker_id FK
    Entero version_actual FK
    EstadoOferta estado
  }
  oferta_versiones {
    UUID oferta_id PK
    Entero numero PK
    UUID solicitud_id FK
    Entero solicitud_version_numero FK
    UUID maker_id FK
    UUID invitacion_id FK
    UUID configuracion_financiera_version_id FK
    Moneda moneda
  }
  clientes {
    UUID usuario_id PK
    UUID ubicacion_id FK
  }
  archivos {
    UUID id PK
    UUID propietario_id FK
  }
  materiales {
    UUID id PK
  }
  ubicaciones {
    UUID id PK
    UUID propietario_id FK
  }
  configuraciones_versiones {
    UUID id PK
    UUID creada_por FK
  }
  makers {
    UUID id PK
    UUID usuario_id FK
    UUID ubicacion_id FK
  }
  analisis_archivos {
    UUID id PK
    UUID archivo_id FK
  }
  clientes ||--o{ solicitudes : "cliente_id"
  solicitud_versiones ||--o{ solicitudes : "id_version_actual"
  solicitudes ||--o{ solicitud_versiones : "solicitud_id"
  archivos o|--o{ solicitud_versiones : "archivo_stl_id"
  materiales o|--o{ solicitud_versiones : "material_id"
  ubicaciones o|--o{ solicitud_versiones : "ubicacion_id"
  solicitud_versiones ||--o{ rondas_busqueda : "solicitud_id_solicitud_version_numero"
  configuraciones_versiones ||--o{ rondas_busqueda : "configuracion_version_id"
  rondas_busqueda ||--o{ invitaciones_maker : "ronda_id_solicitud_id"
  makers ||--o{ invitaciones_maker : "maker_id"
  solicitud_versiones ||--o{ estimaciones : "solicitud_id_solicitud_version_numero"
  analisis_archivos o|--o{ estimaciones : "analisis_archivo_id"
  solicitudes ||--o{ ofertas : "solicitud_id"
  makers ||--o{ ofertas : "maker_id"
  oferta_versiones ||--o{ ofertas : "id_version_actual"
  ofertas ||--o{ oferta_versiones : "oferta_id_solicitud_id_maker_id"
  solicitud_versiones ||--o{ oferta_versiones : "solicitud_id_solicitud_version_numero"
  invitaciones_maker ||--o{ oferta_versiones : "invitacion_id_solicitud_id_maker_id"
  configuraciones_versiones ||--o{ oferta_versiones : "configuracion_financiera_version_id"

```

</div>
</details>


## Pedidos, revisión y entrega

![DER: Pedidos, revisión y entrega](/3daltoque-docs/documentos/6a68fff74395-der-pedidos.svg)

[Abrir imagen](/3daltoque-docs/documentos/6a68fff74395-der-pedidos.svg) · [Fuente Mermaid](/3daltoque-docs/documentos/78e4f83529b8-der-pedidos.mmd).

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
erDiagram
  pedidos {
    UUID id PK
    UUID solicitud_id FK
    UUID oferta_id FK
    Entero oferta_version_numero FK
    EstadoPedido estado
    UUID revision_actual_id FK
  }
  condiciones_pedido {
    UUID pedido_id PK
    Monto precio_pieza
    Moneda moneda
  }
  historial_pedidos {
    UUID id PK
    UUID pedido_id FK
    UUID actor_id FK
  }
  revisiones_resultado {
    UUID id PK
    UUID pedido_id FK
    UUID presentada_por FK
    EstadoRevision estado
  }
  evidencias {
    UUID id PK
    UUID revision_id FK
    UUID archivo_id FK
  }
  decisiones_revision {
    UUID id PK
    UUID revision_id FK
    UUID cliente_id FK
  }
  puntos_encuentro {
    UUID id PK
    UUID ubicacion_id FK
    UUID creado_por FK
  }
  entregas {
    UUID id PK
    UUID pedido_id FK
    UUID revision_aprobada_id FK
    UUID punto_encuentro_id FK
    EstadoEntrega estado
  }
  confirmaciones_entrega {
    UUID id PK
    UUID entrega_id FK
    UUID actor_id FK
  }
  ofertas {
    UUID id PK
    UUID solicitud_id FK
    UUID maker_id FK
    Entero version_actual FK
  }
  oferta_versiones {
    UUID oferta_id PK
    Entero numero PK
    UUID solicitud_id FK
    Entero solicitud_version_numero FK
    UUID maker_id FK
    UUID invitacion_id FK
    UUID configuracion_financiera_version_id FK
  }
  solicitudes {
    UUID id PK
    UUID cliente_id FK
    Entero version_actual FK
  }
  usuarios {
    UUID id PK
  }
  archivos {
    UUID id PK
    UUID propietario_id FK
  }
  clientes {
    UUID usuario_id PK
    UUID ubicacion_id FK
  }
  ubicaciones {
    UUID id PK
    UUID propietario_id FK
  }
  ofertas ||--o{ pedidos : "oferta_id_solicitud_id"
  oferta_versiones ||--o| pedidos : "oferta_id_oferta_version_numero"
  solicitudes ||--o| pedidos : "solicitud_id"
  revisiones_resultado o|--o{ pedidos : "id_revision_actual_id"
  pedidos ||--o| condiciones_pedido : "pedido_id"
  pedidos ||--o{ historial_pedidos : "pedido_id"
  usuarios o|--o{ historial_pedidos : "actor_id"
  pedidos ||--o{ revisiones_resultado : "pedido_id"
  usuarios ||--o{ revisiones_resultado : "presentada_por"
  revisiones_resultado ||--o{ evidencias : "revision_id"
  archivos ||--o{ evidencias : "archivo_id"
  revisiones_resultado ||--o{ decisiones_revision : "revision_id"
  clientes ||--o{ decisiones_revision : "cliente_id"
  ubicaciones ||--o{ puntos_encuentro : "ubicacion_id"
  usuarios ||--o{ puntos_encuentro : "creado_por"
  pedidos ||--o| entregas : "pedido_id"
  revisiones_resultado ||--o{ entregas : "pedido_id_revision_aprobada_id"
  puntos_encuentro o|--o{ entregas : "punto_encuentro_id"
  entregas ||--o{ confirmaciones_entrega : "entrega_id"
  usuarios ||--o{ confirmaciones_entrega : "actor_id"

```

</div>
</details>


## Membresías y cobros del abono

![DER: Membresías y cobros del abono](/3daltoque-docs/documentos/5950f8bd018c-der-pagos.svg)

[Abrir imagen](/3daltoque-docs/documentos/5950f8bd018c-der-pagos.svg) · [Fuente Mermaid](/3daltoque-docs/documentos/3dc6180a8ed6-der-pagos.mmd).

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
erDiagram
  cuentas_pago {
    UUID id PK
    Texto estado
  }
  pagos {
    UUID id PK
    UUID compra_id FK
    Moneda moneda
    EstadoPago estado
  }
  intentos_pago {
    UUID id PK
    UUID pago_id FK
    UUID cuenta_pago_id FK
    Moneda moneda
    EstadoIntento estado
  }
  operaciones_pago {
    UUID id PK
    UUID intento_id FK
    UUID cuenta_pago_id FK
    Moneda moneda
  }
  eventos_proveedor {
    UUID id PK
    UUID cuenta_pago_id FK
    UUID operacion_pago_id FK
  }
  reembolsos {
    UUID id PK
    UUID pago_id FK
    UUID operacion_cobro_id FK
    UUID operacion_resultado_id FK
    UUID solicitado_por FK
    Moneda moneda
    EstadoReembolso estado
  }
  planes_membresia_versiones {
    UUID id PK
    Monto importe
    Moneda moneda
    Texto periodo_unidad
    Entero periodo_cantidad
    UUID configuracion_version_id FK
    UUID creado_por FK
  }
  membresias_maker {
    UUID id PK
    UUID maker_id FK
    Booleano es_fundador
    UUID fundador_configuracion_id FK
    UUID fundador_asignado_por FK
  }
  compras_membresia {
    UUID id PK
    UUID membresia_id FK
    UUID plan_version_id FK
    Monto importe
    Moneda moneda
    Texto periodo_unidad
    Entero periodo_cantidad
    EstadoCompra estado
  }
  periodos_membresia {
    UUID id PK
    UUID membresia_id FK
    OrigenAcceso origen
    UUID compra_id FK
    UUID configuracion_version_id FK
    FechaHora inicio_en
    FechaHora fin_en
    EstadoPeriodo estado
  }
  usuarios {
    UUID id PK
  }
  configuraciones_versiones {
    UUID id PK
    UUID creada_por FK
  }
  makers {
    UUID id PK
    UUID usuario_id FK
    UUID ubicacion_id FK
  }
  compras_membresia ||--o| pagos : "compra_id"
  pagos ||--o{ intentos_pago : "pago_id"
  cuentas_pago o|--o{ intentos_pago : "cuenta_pago_id"
  intentos_pago ||--o{ operaciones_pago : "intento_id"
  cuentas_pago o|--o{ operaciones_pago : "cuenta_pago_id"
  cuentas_pago ||--o{ eventos_proveedor : "cuenta_pago_id"
  operaciones_pago o|--o{ eventos_proveedor : "operacion_pago_id"
  pagos ||--o{ reembolsos : "pago_id"
  operaciones_pago ||--o{ reembolsos : "operacion_cobro_id"
  operaciones_pago o|--o{ reembolsos : "operacion_resultado_id"
  usuarios ||--o{ reembolsos : "solicitado_por"
  configuraciones_versiones ||--o{ planes_membresia_versiones : "configuracion_version_id"
  usuarios ||--o{ planes_membresia_versiones : "creado_por"
  makers ||--o| membresias_maker : "maker_id"
  configuraciones_versiones o|--o{ membresias_maker : "fundador_configuracion_id"
  usuarios o|--o{ membresias_maker : "fundador_asignado_por"
  membresias_maker ||--o{ compras_membresia : "membresia_id"
  planes_membresia_versiones ||--o{ compras_membresia : "plan_version_id"
  membresias_maker ||--o{ periodos_membresia : "membresia_id"
  compras_membresia o|--o{ periodos_membresia : "compra_id_membresia_id"
  configuraciones_versiones ||--o{ periodos_membresia : "configuracion_version_id"

```

</div>
</details>


## Conversaciones y notificaciones

![DER: Conversaciones y notificaciones](/3daltoque-docs/documentos/e596445273e8-der-comunicacion.svg)

[Abrir imagen](/3daltoque-docs/documentos/e596445273e8-der-comunicacion.svg) · [Fuente Mermaid](/3daltoque-docs/documentos/94b9740f694c-der-comunicacion.mmd).

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
erDiagram
  conversaciones {
    UUID id PK
    UUID pedido_id FK
    UUID invitacion_id FK
    Texto estado
  }
  participantes_conversacion {
    UUID conversacion_id PK
    UUID usuario_id PK
  }
  mensajes {
    UUID id PK
    UUID conversacion_id FK
    UUID remitente_id FK
  }
  mensaje_archivos {
    UUID mensaje_id PK
    UUID archivo_id PK
  }
  notificaciones {
    UUID id PK
    UUID evento_salida_id FK
    UUID destinatario_id FK
  }
  envios_notificacion {
    UUID id PK
    UUID notificacion_id FK
    EstadoEnvio estado
  }
  pedidos {
    UUID id PK
    UUID solicitud_id FK
    UUID oferta_id FK
    Entero oferta_version_numero FK
    UUID revision_actual_id FK
  }
  invitaciones_maker {
    UUID id PK
    UUID ronda_id FK
    UUID solicitud_id FK
    UUID maker_id FK
  }
  usuarios {
    UUID id PK
  }
  archivos {
    UUID id PK
    UUID propietario_id FK
  }
  eventos_salida {
    UUID id PK
  }
  pedidos o|--o| conversaciones : "pedido_id"
  invitaciones_maker o|--o| conversaciones : "invitacion_id"
  conversaciones ||--o{ participantes_conversacion : "conversacion_id"
  usuarios ||--o{ participantes_conversacion : "usuario_id"
  conversaciones ||--o{ mensajes : "conversacion_id"
  participantes_conversacion ||--o{ mensajes : "conversacion_id_remitente_id"
  mensajes ||--o{ mensaje_archivos : "mensaje_id"
  archivos ||--o{ mensaje_archivos : "archivo_id"
  eventos_salida ||--o{ notificaciones : "evento_salida_id"
  usuarios ||--o{ notificaciones : "destinatario_id"
  notificaciones ||--o{ envios_notificacion : "notificacion_id"

```

</div>
</details>


## Configuración, operación y auditoría

![DER: Configuración, operación y auditoría](/3daltoque-docs/documentos/4b5695cb3462-der-operacion.svg)

[Abrir imagen](/3daltoque-docs/documentos/4b5695cb3462-der-operacion.svg) · [Fuente Mermaid](/3daltoque-docs/documentos/e618405f9449-der-operacion.mmd).

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
erDiagram
  configuraciones_versiones {
    UUID id PK
    UUID creada_por FK
  }
  activaciones_configuracion {
    UUID id PK
    UUID configuracion_version_id FK
    UUID activada_por FK
    UUID cerrada_por FK
  }
  eventos_salida {
    UUID id PK
  }
  trabajos {
    UUID id PK
    UUID evento_salida_id FK
    EstadoTrabajo estado
  }
  auditoria {
    UUID id PK
    UUID actor_usuario_id FK
  }
  casos_soporte {
    UUID id PK
    UUID reportado_por FK
    UUID pedido_id FK
    UUID solicitud_id FK
    UUID pago_id FK
    UUID asignado_a FK
    EstadoCaso estado
  }
  aceptaciones_condiciones {
    UUID id PK
    UUID usuario_id FK
  }
  usuarios {
    UUID id PK
  }
  pedidos {
    UUID id PK
    UUID solicitud_id FK
    UUID oferta_id FK
    Entero oferta_version_numero FK
    UUID revision_actual_id FK
  }
  solicitudes {
    UUID id PK
    UUID cliente_id FK
    Entero version_actual FK
  }
  pagos {
    UUID id PK
    UUID compra_id FK
  }
  usuarios ||--o{ configuraciones_versiones : "creada_por"
  configuraciones_versiones ||--o{ activaciones_configuracion : "configuracion_version_id"
  usuarios ||--o{ activaciones_configuracion : "activada_por"
  usuarios o|--o{ activaciones_configuracion : "cerrada_por"
  eventos_salida o|--o{ trabajos : "evento_salida_id"
  usuarios o|--o{ auditoria : "actor_usuario_id"
  usuarios ||--o{ casos_soporte : "reportado_por"
  pedidos o|--o{ casos_soporte : "pedido_id"
  solicitudes o|--o{ casos_soporte : "solicitud_id"
  pagos o|--o{ casos_soporte : "pago_id"
  usuarios o|--o{ casos_soporte : "asignado_a"
  usuarios ||--o{ aceptaciones_condiciones : "usuario_id"

```

</div>
</details>

