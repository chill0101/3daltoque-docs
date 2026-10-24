---
title: "Diagramas del proyecto"
---

# Diagramas del proyecto

Actualización: 14 de octubre de 2026. Fuentes editables y vistas SVG de los modelos del proyecto. Se insertan también en el documento al que corresponden.

## Documentos relacionados

- [Casos de uso y actores](/3daltoque-docs/analisis/casos-de-uso/#diagrama-de-casos-de-uso).
- [Clases de dominio y modelado](/3daltoque-docs/modelado/clases-y-arquitectura/#dominio).
- [Diagrama entidad-relación: ocho vistas](/3daltoque-docs/modelado/datos/).
- [Modelo lógico y diccionario de datos](/3daltoque-docs/modelado/modelo-logico/).
- [Arquitectura, componentes, puertos y adaptadores](/3daltoque-docs/diseno/arquitectura/).
- [Flujos, estados y secuencias](/3daltoque-docs/flujos/estados/).

## Análisis y dominio

<details class="doc-accordion">
<summary><span>Casos de uso</span></summary>
<div class="doc-accordion__body">

#### Casos de uso

![Casos de uso y actores](/3daltoque-docs/documentos/56672ecacb3e-casos-de-uso.svg)

[Abrir SVG](/3daltoque-docs/documentos/56672ecacb3e-casos-de-uso.svg) · [Fuente editable](/3daltoque-docs/documentos/c14d6068439c-casos-de-uso.puml)

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```plantuml
@startuml
left to right direction
actor Cliente
actor Maker
actor Administrador
actor "Mercado Pago (abono)" as MercadoPago
rectangle "3DAltoque" {
  usecase "CU-01\nPublicar solicitud" as CU01
  usecase "CU-02\nRecibir y responder ofertas" as CU02
  usecase "CU-03\nElegir oferta" as CU03
  usecase "CU-04\nProducción y evidencia" as CU04
  usecase "CU-05\nRevisión y aprobación" as CU05
  usecase "CU-06\nEntrega personal" as CU06
  usecase "CU-07\nAdministración operativa" as CU07
  usecase "CU-08\nConsultar membresía" as CU08
  usecase "CU-09\nHabilitar perfil e iniciar prueba" as CU09
  usecase "CU-10\nAsignar beneficio fundador" as CU10
  usecase "CU-11\nPagar o renovar abono" as CU11
  usecase "CU-12\nGestionar plan y promociones" as CU12
  usecase "CU-13\nRegistrarse y acceder" as CU13
}
Cliente -- CU01
Maker -- CU02
Cliente -- CU03
Maker -- CU04
Cliente -- CU05
Cliente -- CU06
Maker -- CU06
Administrador -- CU07
Maker -- CU08
Maker -- CU09
Administrador -- CU09
Administrador -- CU10
Maker -- CU11
MercadoPago -- CU11
Administrador -- CU12
Cliente -- CU13
Maker -- CU13
Administrador -- CU13
note bottom of CU11
La plataforma cobra solo su abono.
El cliente paga la impresión al maker por fuera.
end note
@enduml

```

</div>
</details>

</div>
</details>

<details class="doc-accordion">
<summary><span>Clases de dominio</span></summary>
<div class="doc-accordion__body">

#### Clases de dominio

![Clases de dominio](/3daltoque-docs/documentos/3a38ed4d1833-dominio.svg)

[Abrir SVG](/3daltoque-docs/documentos/3a38ed4d1833-dominio.svg) · [Fuente editable](/3daltoque-docs/documentos/6420bfd40263-dominio.mmd)

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
classDiagram
  class Maker
  class Cliente
  class Solicitud
  class VersionSolicitud
  class Oferta
  class VersionOferta
  class Pedido
  class CondicionesPedido
  class RevisionResultado
  class Evidencia
  class DecisionRevision
  class Entrega
  class MembresiaMaker
  class PlanVersion
  class CompraMembresia
  class PeriodoAcceso
  class PagoAbono
  class IntentoPago
  Cliente "1" --> "0..*" Solicitud : crea
  Solicitud "1" *-- "1..*" VersionSolicitud
  Solicitud "1" --> "0..*" Oferta
  Maker "1" --> "0..*" Oferta
  Oferta "1" *-- "1..*" VersionOferta
  Solicitud "1" --> "0..1" Pedido : acuerdo único
  VersionOferta "1" --> "0..1" Pedido : versión aceptada
  Pedido "1" *-- "1" CondicionesPedido : precio pactado externo
  Pedido "1" --> "0..*" RevisionResultado
  RevisionResultado "1" --> "0..*" Evidencia
  RevisionResultado "1" --> "0..*" DecisionRevision
  Pedido "1" --> "0..1" Entrega
  Maker "1" --> "0..1" MembresiaMaker
  MembresiaMaker "1" --> "0..*" CompraMembresia
  PlanVersion "1" --> "0..*" CompraMembresia : condiciones conservadas
  MembresiaMaker "1" --> "0..*" PeriodoAcceso
  CompraMembresia "0..1" --> "0..1" PeriodoAcceso : origen del acceso pago
  CompraMembresia "1" --> "0..1" PagoAbono
  PagoAbono "1" --> "0..*" IntentoPago

```

</div>
</details>

</div>
</details>


## Arquitectura y componentes

<details class="doc-accordion">
<summary><span>Puertos y adaptadores</span></summary>
<div class="doc-accordion__body">

#### Puertos y adaptadores

![Puertos y adaptadores](/3daltoque-docs/documentos/a44c2fd72ab2-diseno-hexagonal.svg)

[Abrir SVG](/3daltoque-docs/documentos/a44c2fd72ab2-diseno-hexagonal.svg) · [Fuente editable](/3daltoque-docs/documentos/1061d2163efb-diseno-hexagonal.mmd)

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
classDiagram
  class AceptarOfertaUseCase {
    +execute(command)
  }
  class ConsultarMembresiaUseCase {
    +execute(query)
  }
  class ComprarAbonoUseCase {
    +execute(command)
  }
  class ConcederAccesoUseCase {
    +execute(paymentResult)
  }
  class AprobarResultadoUseCase {
    +execute(command)
  }
  class OfertaRepositoryPort {
    <<interface>>
    +aceptarAtomico(oferta, version)
  }
  class MembresiaRepositoryPort {
    <<interface>>
    +consultarPeriodos(maker)
    +concederUnaVez(compra)
  }
  class PlanRepositoryPort {
    <<interface>>
    +obtenerVersionVigente()
  }
  class PaymentGatewayPort {
    <<interface>>
    +crearCheckout(compra)
    +consultarResultado(referencia)
    +verificarNotificacion(headers, body)
  }
  class RevisionRepositoryPort {
    <<interface>>
    +registrarDecision(revision, decision)
  }
  class MercadoPagoCheckoutProAdapter
  class PagoSimuladoAdapter
  class PersistenciaPostgresAdapter
  AceptarOfertaUseCase --> OfertaRepositoryPort
  AceptarOfertaUseCase --> MembresiaRepositoryPort
  ConsultarMembresiaUseCase --> MembresiaRepositoryPort
  ComprarAbonoUseCase --> PlanRepositoryPort
  ComprarAbonoUseCase --> PaymentGatewayPort
  ConcederAccesoUseCase --> PaymentGatewayPort
  ConcederAccesoUseCase --> MembresiaRepositoryPort
  AprobarResultadoUseCase --> RevisionRepositoryPort
  MercadoPagoCheckoutProAdapter ..|> PaymentGatewayPort
  PagoSimuladoAdapter ..|> PaymentGatewayPort
  PersistenciaPostgresAdapter ..|> MembresiaRepositoryPort
  PersistenciaPostgresAdapter ..|> OfertaRepositoryPort

```

</div>
</details>

</div>
</details>

<details class="doc-accordion">
<summary><span>Componentes lógicos</span></summary>
<div class="doc-accordion__body">

#### Componentes lógicos

![Componentes lógicos](/3daltoque-docs/documentos/44ac08b2bfc6-componentes.svg)

[Abrir SVG](/3daltoque-docs/documentos/44ac08b2bfc6-componentes.svg) · [Fuente editable](/3daltoque-docs/documentos/410048d78c61-componentes.mmd)

<details class="doc-accordion">
<summary><span>Fuente editable</span></summary>
<div class="doc-accordion__body">

```mermaid
flowchart LR
  WEB["Cliente web"]
  MOBILE["Cliente mobile: alcance inicial pendiente"]
  API["FastAPI / monolito modular"]
  AUTH["Identidad y permisos"]
  MARKET["Solicitudes, makers y ofertas"]
  ORDERS["Pedidos, evidencia y entrega"]
  MEMBERS["Membresía, prueba y fundadores"]
  BILLING["Cobro del abono y períodos de acceso"]
  ADMIN["Administración y auditoría"]
  DB[("PostgreSQL propuesto")]
  FILES[("Archivos privados")]
  MP["Mercado Pago Checkout Pro: solo abonos"]
  MAPS["Mapas y geocodificación"]
  NOTIFY["Notificaciones y recordatorios"]
  WEB --> API
  MOBILE --> API
  API --> AUTH
  API --> MARKET
  API --> ORDERS
  API --> MEMBERS
  MEMBERS --> BILLING
  API --> ADMIN
  AUTH --> DB
  MARKET --> DB
  ORDERS --> DB
  MEMBERS --> DB
  BILLING --> DB
  ADMIN --> DB
  API --> FILES
  BILLING --> MP
  MARKET --> MAPS
  MARKET -.->|"Habilitación para trabajos nuevos"| MEMBERS
  API --> NOTIFY

```

</div>
</details>

</div>
</details>


## Secuencias

<details class="doc-accordion">
<summary><span>Solicitudes y ofertas</span></summary>
<div class="doc-accordion__body">

#### Solicitudes y ofertas

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

</div>
</details>

<details class="doc-accordion">
<summary><span>Compra del abono</span></summary>
<div class="doc-accordion__body">

#### Compra del abono

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

</div>
</details>


## Estados del producto

<details class="doc-accordion">
<summary><span>Estados de solicitud</span></summary>
<div class="doc-accordion__body">

#### Estados de solicitud

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

</div>
</details>

<details class="doc-accordion">
<summary><span>Estados de oferta</span></summary>
<div class="doc-accordion__body">

#### Estados de oferta

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

</div>
</details>

<details class="doc-accordion">
<summary><span>Estados del pedido</span></summary>
<div class="doc-accordion__body">

#### Estados del pedido

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

</div>
</details>

<details class="doc-accordion">
<summary><span>Estados de revisión</span></summary>
<div class="doc-accordion__body">

#### Estados de revisión

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

</div>
</details>

<details class="doc-accordion">
<summary><span>Estados de entrega</span></summary>
<div class="doc-accordion__body">

#### Estados de entrega

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

</div>
</details>

<details class="doc-accordion">
<summary><span>Vigencia de la membresía</span></summary>
<div class="doc-accordion__body">

#### Vigencia de la membresía

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

</div>
</details>

<details class="doc-accordion">
<summary><span>Estados del pago del abono</span></summary>
<div class="doc-accordion__body">

#### Estados del pago del abono

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

</div>
</details>


## Datos

[Ocho vistas DER con sus fuentes](/3daltoque-docs/modelado/datos/) y [diccionario](/3daltoque-docs/modelado/modelo-logico/). La compra de membresía no referencia al pedido de impresión; el acceso vencido no cancela el acuerdo de un trabajo aceptado.

## Diagramas en Figma

<details class="doc-accordion">
<summary><span>Referencias de reproducción en Figma</span></summary>
<div class="doc-accordion__body">

[Abrir el índice de diagramas](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=86-347).

La página organiza los 21 SVG existentes en análisis, arquitectura, datos, estados y secuencias. Cada lámina conserva su referencia de origen y una huella de fuente en el registro de importación.

| Grupo | Diagrama | Fuente SVG | Figma |
| --- | --- | --- | --- |
| Análisis | Casos de uso · CU-01 a CU-13 | [Fuente](/3daltoque-docs/documentos/56672ecacb3e-casos-de-uso.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=86-361) |
| Análisis | Clases de dominio | [Fuente](/3daltoque-docs/documentos/3a38ed4d1833-dominio.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-337) |
| Arquitectura | Arquitectura · componentes lógicos | [Fuente](/3daltoque-docs/documentos/44ac08b2bfc6-componentes.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-904) |
| Arquitectura | Arquitectura · puertos y adaptadores | [Fuente](/3daltoque-docs/documentos/a44c2fd72ab2-diseno-hexagonal.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-1040) |
| Datos | DER · vista general | [Fuente](/3daltoque-docs/documentos/b603b79b1a48-der-general.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-1281) |
| Datos | DER · identidad y capacidades | [Fuente](/3daltoque-docs/documentos/ccaa2a178084-der-identidad.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-2280) |
| Datos | DER · archivos y análisis | [Fuente](/3daltoque-docs/documentos/66377b824f4a-der-archivos.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-2772) |
| Datos | DER · solicitudes y ofertas | [Fuente](/3daltoque-docs/documentos/57c3386e5db7-der-cotizaciones.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-2926) |
| Datos | DER · pedido, revisión y entrega | [Fuente](/3daltoque-docs/documentos/6a68fff74395-der-pedidos.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-3875) |
| Datos | DER · membresías y pagos | [Fuente](/3daltoque-docs/documentos/5950f8bd018c-der-pagos.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-4888) |
| Datos | DER · conversaciones y notificaciones | [Fuente](/3daltoque-docs/documentos/e596445273e8-der-comunicacion.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-5908) |
| Datos | DER · operación y auditoría | [Fuente](/3daltoque-docs/documentos/4b5695cb3462-der-operacion.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-6513) |
| Estados | Estados · solicitud | [Fuente](/3daltoque-docs/documentos/5a3710605866-estados-solicitud.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-7146) |
| Estados | Estados · oferta | [Fuente](/3daltoque-docs/documentos/a8692614b574-estados-oferta.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-7214) |
| Estados | Estados · pedido | [Fuente](/3daltoque-docs/documentos/e9d99ad5c424-estados-pedido.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-7310) |
| Estados | Estados · revisión del resultado | [Fuente](/3daltoque-docs/documentos/d72adef0e9f0-estados-revision.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-7440) |
| Estados | Estados · entrega y recepción | [Fuente](/3daltoque-docs/documentos/1c6a0d8124ee-estados-entrega.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-7511) |
| Estados | Estados · membresía del maker | [Fuente](/3daltoque-docs/documentos/f2ba7a368209-estados-membresia.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-7580) |
| Estados | Estados · pago del abono | [Fuente](/3daltoque-docs/documentos/c748c25e7e54-estados-pago.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-7715) |
| Secuencias | Secuencia · solicitud, ofertas y aceptación | [Fuente](/3daltoque-docs/documentos/97d5eef655ae-secuencia-cotizacion.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-7808) |
| Secuencias | Secuencia · compra y renovación del abono | [Fuente](/3daltoque-docs/documentos/5b550fb39979-secuencia-pago.svg) | [Abrir](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=87-7915) |

### Modelo lógico

El [modelo lógico y diccionario](/3daltoque-docs/modelado/modelo-logico/) documenta 50 tablas y 460 columnas. El índice de Figma conserva esa referencia junto a las ocho vistas del DER.

### Clases de diseño

La vista de puertos y adaptadores conserva las responsabilidades y dependencias existentes. El checklist mantiene pendiente desarrollar las clases de diseño con sus operaciones y colaboraciones.

### Registro de la reproducción

[Correspondencia entre fuentes y nodos de Figma](/3daltoque-docs/documentos/7b1c6feb8bec-diagramas-docs-hidden-2026-10-23.json). La importación convierte las etiquetas HTML del SVG a texto compatible y utiliza Manrope en Figma. Los SVG y las fuentes Mermaid/PlantUML de docs-hidden conservan su contenido.

</div>
</details>

