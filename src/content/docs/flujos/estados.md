---
title: "Flujos y estados del producto"
---

# Flujos y estados del producto

Actualización: 14 de octubre de 2026. Diagramas de diseño propuesto; no evidencias de ejecución.

## Solicitud, ofertas y aceptación

![Solicitudes y ofertas](/3daltoque-docs/documentos/97d5eef655ae-secuencia-cotizacion.svg)

[Abrir SVG](/3daltoque-docs/documentos/97d5eef655ae-secuencia-cotizacion.svg) · [Fuente editable](/3daltoque-docs/documentos/3fcf0ef2e392-secuencia-cotizacion.mmd)

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
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
  API->>DB: Transacción: pedido único y cierre de alternativas
  DB-->>API: Acuerdo confirmado o conflicto
  API-->>Cliente: Pedido con precio pactado
  Note over Cliente,Maker: El pago de la impresión se acuerda directamente entre las partes
  Note over API,DB: Vencer el acceso no cancela pedidos ya confirmados

```

</div>
</details>


## Solicitud

![Estados de solicitud](/3daltoque-docs/documentos/5a3710605866-estados-solicitud.svg)

[Abrir SVG](/3daltoque-docs/documentos/5a3710605866-estados-solicitud.svg) · [Fuente editable](/3daltoque-docs/documentos/1441f04a2334-estados-solicitud.mmd)

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
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
    Conversar no reserva al cliente.
  end note

```

</div>
</details>


## Oferta

![Estados de oferta](/3daltoque-docs/documentos/a8692614b574-estados-oferta.svg)

[Abrir SVG](/3daltoque-docs/documentos/a8692614b574-estados-oferta.svg) · [Fuente editable](/3daltoque-docs/documentos/b1d5026866f3-estados-oferta.mmd)

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
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
    La política de ofertas al vencer la membresía requiere PD-05.
  end note

```

</div>
</details>


## Producción del pedido

![Estados del pedido](/3daltoque-docs/documentos/e9d99ad5c424-estados-pedido.svg)

[Abrir SVG](/3daltoque-docs/documentos/e9d99ad5c424-estados-pedido.svg) · [Fuente editable](/3daltoque-docs/documentos/51c245f91b6b-estados-pedido.mmd)

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
stateDiagram-v2
  direction TB
  state "Confirmado" as confirmado
  state "En producción" as produccion
  state "Pendiente de revisión" as revision
  state "Observado" as observado
  state "Aprobado para entrega" as aprobado
  state "Entrega coordinada" as coordinado
  state "Entregado" as entregado
  [*] --> confirmado: Aceptación única de oferta
  confirmado --> produccion: Inicio autorizado del trabajo
  produccion --> revision: Presentar revisión con evidencia
  revision --> observado: Cliente registra observaciones
  observado --> produccion: Corrección según política por definir
  revision --> aprobado: Cliente aprueba revisión vigente
  aprobado --> coordinado: Acordar encuentro
  coordinado --> entregado: Registrar recepción
  entregado --> [*]
  note right of revision
    El silencio no aprueba.
    La membresía vencida no bloquea este pedido.
    El pago de la impresión es externo a la plataforma.
  end note

```

</div>
</details>


## Revisión del resultado

![Estados de revisión](/3daltoque-docs/documentos/d72adef0e9f0-estados-revision.svg)

[Abrir SVG](/3daltoque-docs/documentos/d72adef0e9f0-estados-revision.svg) · [Fuente editable](/3daltoque-docs/documentos/bf6af2ee5236-estados-revision.mmd)

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
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

</div>
</details>


## Entrega y recepción

![Estados de entrega](/3daltoque-docs/documentos/1c6a0d8124ee-estados-entrega.svg)

[Abrir SVG](/3daltoque-docs/documentos/1c6a0d8124ee-estados-entrega.svg) · [Fuente editable](/3daltoque-docs/documentos/e91a1c54d94b-estados-entrega.mmd)

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
stateDiagram-v2
  direction LR
  state "Pendiente de coordinar" as pendiente
  state "Coordinada" as coordinada
  state "Completada" as completada
  [*] --> pendiente
  pendiente --> coordinada: Revisión aprobada y encuentro acordado
  coordinada --> completada: Recepción autorizada
  completada --> [*]
  note right of coordinada
    Encuentro personal sin custodia de terceros.
    Vencer la membresía no impide completar esta entrega.
  end note

```

</div>
</details>


## Membresía del maker

![Vigencia de la membresía](/3daltoque-docs/documentos/f2ba7a368209-estados-membresia.svg)

[Abrir SVG](/3daltoque-docs/documentos/f2ba7a368209-estados-membresia.svg) · [Fuente editable](/3daltoque-docs/documentos/8f909307fb54-estados-membresia.mmd)

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
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

</div>
</details>


## Compra y renovación del abono

![Compra del abono](/3daltoque-docs/documentos/5b550fb39979-secuencia-pago.svg)

[Abrir SVG](/3daltoque-docs/documentos/5b550fb39979-secuencia-pago.svg) · [Fuente editable](/3daltoque-docs/documentos/2d10cc2b1ebd-secuencia-pago.mmd)

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
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

</div>
</details>


## Pago del abono

![Estados del pago del abono](/3daltoque-docs/documentos/c748c25e7e54-estados-pago.svg)

[Abrir SVG](/3daltoque-docs/documentos/c748c25e7e54-estados-pago.svg) · [Fuente editable](/3daltoque-docs/documentos/564f67e434cc-estados-pago.mmd)

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
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
    El pago no pertenece a un pedido de impresión.
  end note

```

</div>
</details>


## Reglas comunes

La expiración de acceso no cancela pedidos existentes. La aprobación del resultado siempre es expresa; el silencio no autoriza entregar. El retorno de Checkout Pro no confirma un pago. El pago de la impresión es externo al procesamiento de 3DAltoque y no debe confundirse con el estado del abono. Las políticas abiertas se cierran antes de implementar transiciones dependientes de ellas.
