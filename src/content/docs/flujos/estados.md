---
title: "Flujos y estados del producto"
---

# Flujos y estados del producto

Actualización: 25 de octubre de 2026. Las guardas corresponden a RF, CU y [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/).

## Solicitud, ofertas y aceptación

![Solicitud, ofertas y aceptación](/3daltoque-docs/documentos/97d5eef655ae-secuencia-cotizacion.svg)

[Abrir SVG](/3daltoque-docs/documentos/97d5eef655ae-secuencia-cotizacion.svg) · [Fuente editable](/3daltoque-docs/documentos/3fcf0ef2e392-secuencia-cotizacion.mmd)

<details class="doc-accordion">
<summary>Fuente editable</summary>

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#E4F5FA","primaryTextColor":"#082345","primaryBorderColor":"#00BFE5","lineColor":"#315574","secondaryColor":"#F5F8FC","tertiaryColor":"#FFFFFF","fontFamily":"Manrope, sans-serif"},"flowchart":{"htmlLabels":false},"class":{"htmlLabels":false}}}%%
sequenceDiagram
  actor Cliente
  actor Maker
  participant API as API FastAPI
  participant Access as Política de acceso
  participant DB as Persistencia
  Cliente->>API: Enviar solicitud y especificaciones
  API->>Access: Seleccionar makers compatibles y habilitados
  Access->>DB: Consultar capacidades y períodos efectivos
  DB-->>Access: Candidatos elegibles
  Access-->>API: Grupo reducido
  API->>DB: Conservar solicitud e invitaciones
  API-->>Maker: Avisar invitación
  Maker->>API: Publicar oferta con versión y vigencia
  API->>Access: Verificar permiso para trabajo nuevo
  API->>DB: Guardar versión de oferta
  Cliente->>API: Aceptar versión vigente
  API->>Access: Verificar habilitación aplicable al nuevo acuerdo
  API->>DB: Transacción: pedido único, condiciones, conversación y cierre de alternativas
  DB-->>API: Acuerdo confirmado o conflicto
  API-->>Cliente: Pedido con precio pactado
  Note over Cliente,Maker: El pago de la impresión se acuerda directamente entre las partes
  Note over API,DB: Vencer el acceso no cancela pedidos ya confirmados
```

</details>

## Solicitud

![Solicitud](/3daltoque-docs/documentos/5a3710605866-estados-solicitud.svg)

[Abrir SVG](/3daltoque-docs/documentos/5a3710605866-estados-solicitud.svg) · [Fuente editable](/3daltoque-docs/documentos/1441f04a2334-estados-solicitud.mmd)

<details class="doc-accordion">
<summary>Fuente editable</summary>

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#E4F5FA","primaryTextColor":"#082345","primaryBorderColor":"#00BFE5","lineColor":"#315574","secondaryColor":"#F5F8FC","tertiaryColor":"#FFFFFF","fontFamily":"Manrope, sans-serif"},"flowchart":{"htmlLabels":false},"class":{"htmlLabels":false}}}%%
stateDiagram-v2
  direction LR
  state "Borrador" as borrador
  state "Abierta" as abierta
  state "Cerrada por selección" as cerrada
  [*] --> borrador
  borrador --> abierta: Datos y archivo habilitados
  abierta --> cerrada: Aceptación válida y atómica de una oferta
  cerrada --> [*]
  note right of abierta
    Solo se invitan makers compatibles y habilitados.
    El chat se habilita al confirmar el pedido.
  end note
```

</details>

## Oferta

![Oferta](/3daltoque-docs/documentos/a8692614b574-estados-oferta.svg)

[Abrir SVG](/3daltoque-docs/documentos/a8692614b574-estados-oferta.svg) · [Fuente editable](/3daltoque-docs/documentos/b1d5026866f3-estados-oferta.mmd)

<details class="doc-accordion">
<summary>Fuente editable</summary>

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#E4F5FA","primaryTextColor":"#082345","primaryBorderColor":"#00BFE5","lineColor":"#315574","secondaryColor":"#F5F8FC","tertiaryColor":"#FFFFFF","fontFamily":"Manrope, sans-serif"},"flowchart":{"htmlLabels":false},"class":{"htmlLabels":false}}}%%
stateDiagram-v2
  direction TB
  state "Activa" as activa
  state "Aceptada" as aceptada
  state "Rechazada" as rechazada
  state "Vencida" as vencida
  state "Cerrada por otra selección" as cerrada
  [*] --> activa: Publicación autorizada con vigencia
  activa --> activa: Nueva versión conserva historial
  activa --> aceptada: Cliente acepta versión válida
  activa --> rechazada: Decisión autorizada según política
  activa --> vencida: Se supera el plazo aplicable
  activa --> cerrada: Se confirma otra oferta
  note right of activa
    La vigencia de oferta y el acceso del maker son condiciones distintas.
    El acuerdo nuevo requiere acceso comercial vigente.
  end note
```

</details>

## Producción del pedido

![Producción del pedido](/3daltoque-docs/documentos/e9d99ad5c424-estados-pedido.svg)

[Abrir SVG](/3daltoque-docs/documentos/e9d99ad5c424-estados-pedido.svg) · [Fuente editable](/3daltoque-docs/documentos/51c245f91b6b-estados-pedido.mmd)

<details class="doc-accordion">
<summary>Fuente editable</summary>

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#E4F5FA","primaryTextColor":"#082345","primaryBorderColor":"#00BFE5","lineColor":"#315574","secondaryColor":"#F5F8FC","tertiaryColor":"#FFFFFF","fontFamily":"Manrope, sans-serif"},"flowchart":{"htmlLabels":false},"class":{"htmlLabels":false}}}%%
stateDiagram-v2
  direction TB
  state "Confirmado" as confirmado
  state "En producción" as produccion
  state "Pendiente de revisión" as revision
  state "Observado" as observado
  state "Aprobado para entrega" as aprobado
  state "Entrega coordinada" as coordinado
  state "Entregado" as entregado
  [*] --> confirmado: Oferta aceptada o producto confirmado
  confirmado --> produccion: Inicio autorizado del trabajo
  produccion --> revision: Presentar revisión con evidencia
  revision --> observado: Cliente registra observaciones
  observado --> produccion: Maker registra corrección y nueva evidencia
  revision --> aprobado: Cliente aprueba revisión vigente
  aprobado --> coordinado: Acordar encuentro
  coordinado --> entregado: Cliente autenticado confirma recepción
  entregado --> [*]
  note right of revision
    El silencio no aprueba.
    La membresía vencida no bloquea este pedido.
    El pago de la impresión es externo a la plataforma.
  end note
```

</details>

## Revisión del resultado

![Revisión del resultado](/3daltoque-docs/documentos/d72adef0e9f0-estados-revision.svg)

[Abrir SVG](/3daltoque-docs/documentos/d72adef0e9f0-estados-revision.svg) · [Fuente editable](/3daltoque-docs/documentos/bf6af2ee5236-estados-revision.mmd)

<details class="doc-accordion">
<summary>Fuente editable</summary>

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#E4F5FA","primaryTextColor":"#082345","primaryBorderColor":"#00BFE5","lineColor":"#315574","secondaryColor":"#F5F8FC","tertiaryColor":"#FFFFFF","fontFamily":"Manrope, sans-serif"},"flowchart":{"htmlLabels":false},"class":{"htmlLabels":false}}}%%
stateDiagram-v2
  direction LR
  state "En preparación" as preparacion
  state "Pendiente" as pendiente
  state "Observada" as observada
  state "Aprobada" as aprobada
  [*] --> preparacion
  preparacion --> pendiente: Presentar evidencia habilitada
  pendiente --> observada: Decisión expresa con observación
  pendiente --> aprobada: Aprobación expresa del cliente
  note right of pendiente
    Se identifica exactamente lo presentado.
    Una corrección crea una nueva revisión.
    Recordatorios y silencio no aprueban.
  end note
```

</details>

## Entrega y recepción

![Entrega y recepción](/3daltoque-docs/documentos/1c6a0d8124ee-estados-entrega.svg)

[Abrir SVG](/3daltoque-docs/documentos/1c6a0d8124ee-estados-entrega.svg) · [Fuente editable](/3daltoque-docs/documentos/e91a1c54d94b-estados-entrega.mmd)

<details class="doc-accordion">
<summary>Fuente editable</summary>

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#E4F5FA","primaryTextColor":"#082345","primaryBorderColor":"#00BFE5","lineColor":"#315574","secondaryColor":"#F5F8FC","tertiaryColor":"#FFFFFF","fontFamily":"Manrope, sans-serif"},"flowchart":{"htmlLabels":false},"class":{"htmlLabels":false}}}%%
stateDiagram-v2
  direction LR
  state "Pendiente de coordinar" as pendiente
  state "Coordinada" as coordinada
  state "Completada" as completada
  [*] --> pendiente
  pendiente --> coordinada: Revisión aprobada y contraparte acepta versión de encuentro
  coordinada --> completada: Cliente autenticado confirma recepción
  completada --> [*]
  note right of coordinada
    Encuentro personal sin custodia de terceros.
    Vencer la membresía no impide completar esta entrega.
  end note
```

</details>

## Membresía del maker

![Membresía del maker](/3daltoque-docs/documentos/f2ba7a368209-estados-membresia.svg)

[Abrir SVG](/3daltoque-docs/documentos/f2ba7a368209-estados-membresia.svg) · [Fuente editable](/3daltoque-docs/documentos/8f909307fb54-estados-membresia.mmd)

<details class="doc-accordion">
<summary>Fuente editable</summary>

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#E4F5FA","primaryTextColor":"#082345","primaryBorderColor":"#00BFE5","lineColor":"#315574","secondaryColor":"#F5F8FC","tertiaryColor":"#FFFFFF","fontFamily":"Manrope, sans-serif"},"flowchart":{"htmlLabels":false},"class":{"htmlLabels":false}}}%%
stateDiagram-v2
  direction TB
  state "Sin beneficio iniciado" as sin_inicio
  state "Prueba general" as prueba_general
  state "Prueba de fundador" as prueba_fundador
  state "Acceso pago vigente" as pago_vigente
  state "Vencido" as vencido
  [*] --> sin_inicio
  sin_inicio --> prueba_general: Primera habilitación / 30 días configurables
  sin_inicio --> prueba_fundador: Programa y cupo válidos / 90 días totales configurables
  prueba_general --> vencido: Fin del intervalo gratuito sin período siguiente
  prueba_fundador --> vencido: Fin del intervalo gratuito sin período siguiente
  prueba_general --> pago_vigente: Comienza período pago verificado
  prueba_fundador --> pago_vigente: Comienza período pago verificado
  pago_vigente --> pago_vigente: Continúa una renovación concedida
  pago_vigente --> vencido: Fin del acceso sin período siguiente
  vencido --> pago_vigente: Compra verificada concede acceso efectivo
  note right of prueba_fundador
    Un único beneficio inicial por maker.
    Cupo y asignación auditados.
  end note
  note right of vencido
    No se aceptan trabajos nuevos.
    Se pueden terminar los pedidos existentes.
    No se ejecutan cargos automáticos.
  end note
```

</details>

## Compra y renovación del abono

![Compra y renovación del abono](/3daltoque-docs/documentos/5b550fb39979-secuencia-pago.svg)

[Abrir SVG](/3daltoque-docs/documentos/5b550fb39979-secuencia-pago.svg) · [Fuente editable](/3daltoque-docs/documentos/2d10cc2b1ebd-secuencia-pago.mmd)

<details class="doc-accordion">
<summary>Fuente editable</summary>

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#E4F5FA","primaryTextColor":"#082345","primaryBorderColor":"#00BFE5","lineColor":"#315574","secondaryColor":"#F5F8FC","tertiaryColor":"#FFFFFF","fontFamily":"Manrope, sans-serif"},"flowchart":{"htmlLabels":false},"class":{"htmlLabels":false}}}%%
sequenceDiagram
  actor Maker
  participant API as API FastAPI
  participant DB as Persistencia
  participant MP as Mercado Pago Checkout Pro
  Maker->>API: Comprar o renovar el plan manualmente
  API->>DB: Conservar plan, importe, moneda y compra idempotente
  API->>MP: Crear checkout del abono con cuenta propia
  MP-->>API: Referencia y enlace de pago
  API-->>Maker: Abrir checkout
  Maker->>MP: Pagar nuestro servicio
  MP->>API: Notificación del resultado
  API->>API: Verificar firma y contexto
  API->>DB: Persistir notificación válida
  API-->>MP: Acuse de recepción
  API->>MP: Consultar recurso y verificar cuenta, entorno e importe
  MP-->>API: Resultado del pago
  API->>DB: Transacción: registrar resultado y conceder una vez por compra
  DB-->>API: Período guardado o estado pendiente
  Maker->>API: Consultar vigencia
  API-->>Maker: Fechas y condición real o simulada
  Note over API,DB: Webhooks repetidos no suman períodos
  Note over Maker,MP: Renovación manual del abono propio
```

</details>

## Pago del abono

![Pago del abono](/3daltoque-docs/documentos/c748c25e7e54-estados-pago.svg)

[Abrir SVG](/3daltoque-docs/documentos/c748c25e7e54-estados-pago.svg) · [Fuente editable](/3daltoque-docs/documentos/564f67e434cc-estados-pago.mmd)

<details class="doc-accordion">
<summary>Fuente editable</summary>

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#E4F5FA","primaryTextColor":"#082345","primaryBorderColor":"#00BFE5","lineColor":"#315574","secondaryColor":"#F5F8FC","tertiaryColor":"#FFFFFF","fontFamily":"Manrope, sans-serif"},"flowchart":{"htmlLabels":false},"class":{"htmlLabels":false}}}%%
stateDiagram-v2
  direction TB
  state "Sin iniciar" as sin_iniciar
  state "Pendiente" as pendiente
  state "Aprobado" as aprobado
  state "Rechazado" as rechazado
  state "En revisión" as revision
  [*] --> sin_iniciar
  sin_iniciar --> pendiente: Crear intento de una compra de membresía
  pendiente --> aprobado: Cobro del abono verificado
  pendiente --> rechazado: Rechazo verificado
  pendiente --> revision: Resultado incierto o discrepancia
  revision --> aprobado: Conciliación confirma resultado
  revision --> rechazado: Conciliación confirma rechazo
  note right of aprobado
    Una compra concede como máximo un período.
    El cobro corresponde al abono de la plataforma.
  end note
```

</details>

## Publicación de producto

![Publicación de producto](/3daltoque-docs/documentos/f11a1eaae9d7-estados-producto.svg)

[Abrir SVG](/3daltoque-docs/documentos/f11a1eaae9d7-estados-producto.svg) · [Fuente editable](/3daltoque-docs/documentos/c4a9b64f607e-estados-producto.mmd)

<details class="doc-accordion">
<summary>Fuente editable</summary>

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#E4F5FA","primaryTextColor":"#082345","primaryBorderColor":"#00BFE5","lineColor":"#315574","secondaryColor":"#F5F8FC","tertiaryColor":"#FFFFFF","fontFamily":"Manrope, sans-serif"},"flowchart":{"htmlLabels":false},"class":{"htmlLabels":false}}}%%
stateDiagram-v2
  [*] --> Borrador
  Borrador --> Publicado: Condiciones válidas y acceso comercial
  Publicado --> Pausado: Maker pausa
  Pausado --> Publicado: Maker habilitado confirma
  Publicado --> Retirado: Maker retira
  Pausado --> Retirado: Maker retira
  Publicado --> Moderado: Administración con motivo
  Moderado --> Pausado: Restitución autorizada
  note right of Publicado
    Las condiciones conservan versión.
    El pedido confirma una versión vigente.
  end note
```

</details>

## Pedido directo de producto

![Pedido directo de producto](/3daltoque-docs/documentos/7652af2389d5-secuencia-producto.svg)

[Abrir SVG](/3daltoque-docs/documentos/7652af2389d5-secuencia-producto.svg) · [Fuente editable](/3daltoque-docs/documentos/2625bc0c8924-secuencia-producto.mmd)

<details class="doc-accordion">
<summary>Fuente editable</summary>

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#E4F5FA","primaryTextColor":"#082345","primaryBorderColor":"#00BFE5","lineColor":"#315574","secondaryColor":"#F5F8FC","tertiaryColor":"#FFFFFF","fontFamily":"Manrope, sans-serif"},"flowchart":{"htmlLabels":false},"class":{"htmlLabels":false}}}%%
sequenceDiagram
  participant C as Cliente
  participant A as API FastAPI
  participant D as Persistencia
  participant M as Maker
  C->>A: Consultar producto publicado
  A-->>C: Versión, precio unitario y condiciones
  C->>A: Confirmar versión, cantidad y clave estable
  A->>D: Recuperar resultado de clave o validar versión y acceso
  alt Condiciones vigentes
    A->>D: Transacción de solicitud, oferta, pedido, condiciones y conversación
    D-->>A: Pedido único y evento persistido
    A-->>C: Pedido confirmado
    A-->>M: Aviso del pedido
  else Versión modificada o acceso restringido
    A-->>C: Conflicto y condiciones actuales
  end
  Note over C,M: Pago de impresión directo entre las partes
  Note over C,M: Producción, revisión expresa y recepción del cliente
```

</details>

## Conversación del pedido

![Conversación del pedido](/3daltoque-docs/documentos/4e5ada0a8489-secuencia-chat.svg)

[Abrir SVG](/3daltoque-docs/documentos/4e5ada0a8489-secuencia-chat.svg) · [Fuente editable](/3daltoque-docs/documentos/df6ea54a560a-secuencia-chat.mmd)

<details class="doc-accordion">
<summary>Fuente editable</summary>

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#E4F5FA","primaryTextColor":"#082345","primaryBorderColor":"#00BFE5","lineColor":"#315574","secondaryColor":"#F5F8FC","tertiaryColor":"#FFFFFF","fontFamily":"Manrope, sans-serif"},"flowchart":{"htmlLabels":false},"class":{"htmlLabels":false}}}%%
sequenceDiagram
  participant P as Participante del pedido
  participant A as API FastAPI
  participant D as Persistencia
  participant N as Avisos
  P->>A: Abrir conversación de pedido confirmado
  A->>D: Autorizar participante y recuperar historial
  D-->>A: Conversación única y cursor
  A-->>P: Mensajes autorizados
  P->>A: Enviar contenido y clave estable
  A->>D: Validar y conservar una vez
  D-->>A: Mensaje y evento persistidos
  A-->>P: ID y fecha de envío
  A->>N: Procesar evento de aviso
  P->>A: Reintentar misma clave y contenido
  A->>D: Recuperar mensaje existente
  D-->>A: Mensaje existente
  A-->>P: Mismo resultado
```

</details>

## Guardas compartidas

La aprobación de revisión identifica la evidencia exacta y requiere decisión expresa del cliente. La entrega conserva punto, horario y aceptación de ambas partes sobre la misma versión. La recepción se registra por el cliente autenticado. El pedido confirmado conserva la conversación y la operativa al vencer la membresía. El retorno del checkout consulta el estado persistido y la concesión depende de verificar el pago del abono.
