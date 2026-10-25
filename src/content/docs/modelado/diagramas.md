---
title: "Diagramas del proyecto"
---

# Diagramas del proyecto

Actualización: 25 de octubre de 2026. Las imágenes y fuentes editables se insertan en el documento de su modelo.

| Modelo | Documento |
| --- | --- |
| Casos de uso | [25 CU y actores](/3daltoque-docs/analisis/casos-de-uso/#diagrama-de-casos-de-uso) |
| Dominio | [Clases, relaciones y cardinalidades](/3daltoque-docs/modelado/clases-y-arquitectura/#dominio) |
| Datos | [Diez vistas DER](/3daltoque-docs/modelado/datos/) y [diccionario lógico](/3daltoque-docs/modelado/modelo-logico/) |
| Clases de diseño | [Servicios, operaciones, puertos y colaboraciones](/3daltoque-docs/diseno/clases-de-diseno/) |
| Arquitectura | [Arquitectura y componentes](/3daltoque-docs/diseno/arquitectura/) |
| Estados y secuencias | [Solicitud, oferta, producto, pedido, revisión, entrega, chat y abono](/3daltoque-docs/flujos/estados/) |

## Casos de uso

![Casos de uso](/3daltoque-docs/documentos/56672ecacb3e-casos-de-uso.svg)

[Abrir SVG](/3daltoque-docs/documentos/56672ecacb3e-casos-de-uso.svg) · [Fuente editable](/3daltoque-docs/documentos/c14d6068439c-casos-de-uso.puml)

<details class="doc-accordion">
<summary>Fuente editable</summary>

```plantuml
@startuml
left to right direction
actor Cliente
actor Maker
actor Visitante
actor Administración as Admin
actor "Mercado Pago" as MP
rectangle "3DAltoque" {
  usecase "CU-01 Publicar solicitud" as CU01
  usecase "CU-02 Recibir y responder ofertas" as CU02
  usecase "CU-03 Elegir oferta" as CU03
  usecase "CU-04 Producción y evidencia" as CU04
  usecase "CU-05 Revisión y aprobación" as CU05
  usecase "CU-06 Entrega personal" as CU06
  usecase "CU-07 Administración operativa" as CU07
  usecase "CU-08 Consultar membresía" as CU08
  usecase "CU-09 Habilitar perfil e iniciar prueba" as CU09
  usecase "CU-10 Asignar beneficio fundador" as CU10
  usecase "CU-11 Pagar o renovar abono" as CU11
  usecase "CU-12 Gestionar plan y promociones" as CU12
  usecase "CU-13 Registrarse y acceder" as CU13
  usecase "CU-14 Conversar en un pedido" as CU14
  usecase "CU-15 Mantener y consultar portfolio" as CU15
  usecase "CU-16 Valorar y consultar reputación" as CU16
  usecase "CU-17 Consultar historial de pedidos" as CU17
  usecase "CU-18 Consultar reporte de actividad" as CU18
  usecase "CU-19 Mantener catálogo de productos" as CU19
  usecase "CU-20 Pedir un producto del maker" as CU20
  usecase "CU-21 Gestionar capacidades del maker" as CU21
  usecase "CU-22 Gestionar perfil de cliente" as CU22
  usecase "CU-23 Recibir y consultar notificaciones" as CU23
  usecase "CU-24 Gestionar archivos autorizados" as CU24
  usecase "CU-25 Negociar condiciones de una oferta" as CU25
}
Cliente -- CU01
Maker -- CU02
Cliente -- CU03
Maker -- CU04
Cliente -- CU04
Cliente -- CU05
Maker -- CU05
Cliente -- CU06
Maker -- CU06
Admin -- CU07
Maker -- CU08
Maker -- CU09
Admin -- CU10
Maker -- CU11
MP -- CU11
Admin -- CU12
Cliente -- CU13
Maker -- CU13
Admin -- CU13
Cliente -- CU14
Maker -- CU14
Maker -- CU15
Visitante -- CU15
Admin -- CU15
Cliente -- CU16
Maker -- CU16
Admin -- CU16
Cliente -- CU17
Maker -- CU17
Admin -- CU18
Maker -- CU19
Visitante -- CU19
Admin -- CU19
Cliente -- CU20
Maker -- CU21
Cliente -- CU22
Cliente -- CU23
Maker -- CU23
Cliente -- CU24
Maker -- CU24
Cliente -- CU25
Maker -- CU25
@enduml
```

</details>

## Clases de dominio

![Clases de dominio](/3daltoque-docs/documentos/3a38ed4d1833-dominio.svg)

[Abrir SVG](/3daltoque-docs/documentos/3a38ed4d1833-dominio.svg) · [Fuente editable](/3daltoque-docs/documentos/6420bfd40263-dominio.mmd)

<details class="doc-accordion">
<summary>Fuente editable</summary>

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#E4F5FA","primaryTextColor":"#082345","primaryBorderColor":"#00BFE5","lineColor":"#315574","secondaryColor":"#F5F8FC","tertiaryColor":"#FFFFFF","fontFamily":"Manrope, sans-serif"},"flowchart":{"htmlLabels":false},"class":{"htmlLabels":false}}}%%
classDiagram
  direction TB
  class Usuario
  class Cliente
  class Maker
  class Impresora
  class Material
  class CapacidadImpresora
  class TrabajoPortfolio
  class ProductoMaker
  class VersionProducto
  class Archivo
  class Solicitud
  class VersionSolicitud
  class InvitacionMaker
  class Estimacion
  class Oferta
  class VersionOferta
  class PropuestaCambioOferta
  class Pedido
  class CondicionesPedido
  class RevisionResultado
  class Evidencia
  class DecisionRevision
  class Entrega
  class PuntoEncuentro
  class ConfirmacionEntrega
  class Conversacion
  class ParticipanteConversacion
  class Mensaje
  class Notificacion
  class Valoracion
  class PuntajeCriterio
  class MembresiaMaker
  class PlanVersion
  class CompraMembresia
  class PeriodoAcceso
  class PagoAbono
  class IntentoPago
  class CasoSoporte
  class ReporteActividad
  Usuario --> Cliente : posee perfil
  Usuario --> Maker : posee perfil
  Maker --> Impresora : registra
  Impresora --> CapacidadImpresora : declara
  Material --> CapacidadImpresora : clasifica
  Maker --> TrabajoPortfolio : presenta
  Maker --> ProductoMaker : publica
  ProductoMaker --> VersionProducto : conserva condiciones
  TrabajoPortfolio --> Archivo : presenta medio autorizado
  VersionProducto --> Archivo : presenta medio autorizado
  Cliente --> Solicitud : crea
  Solicitud --> VersionSolicitud : conserva
  VersionSolicitud --> VersionProducto : origen de catálogo opcional
  Solicitud --> InvitacionMaker : dirige búsqueda personalizada
  Solicitud --> Estimacion : referencia orientativa
  Maker --> Oferta : emite
  Solicitud --> Oferta : recibe
  Oferta --> VersionOferta : conserva
  VersionOferta --> PropuestaCambioOferta : recibe propuesta del cliente
  PropuestaCambioOferta --> VersionOferta : origina versión del maker
  Solicitud --> Pedido : confirma acuerdo único
  VersionOferta --> Pedido : condiciones aceptadas
  VersionProducto --> Pedido : origen de pedido directo
  Pedido --> CondicionesPedido : conserva
  Pedido --> RevisionResultado : presenta
  RevisionResultado --> Evidencia : incluye
  RevisionResultado --> DecisionRevision : registra
  Pedido --> Entrega : coordina
  Entrega --> PuntoEncuentro : utiliza
  Entrega --> ConfirmacionEntrega : recibe del cliente
  Pedido --> Conversacion : habilita al confirmar
  Conversacion --> ParticipanteConversacion : autoriza
  Usuario --> ParticipanteConversacion : participa
  Conversacion --> Mensaje : conserva
  Mensaje --> Archivo : adjunta autorizado
  Usuario --> Notificacion : recibe
  Pedido --> Valoracion : habilita al completar
  Usuario --> Valoracion : emite y recibe
  Valoracion --> PuntajeCriterio : desglosa
  Maker --> MembresiaMaker : gestiona
  PlanVersion --> CompraMembresia : conserva condiciones
  MembresiaMaker --> CompraMembresia : registra
  MembresiaMaker --> PeriodoAcceso : concede
  CompraMembresia --> PeriodoAcceso : origina acceso pago
  CompraMembresia --> PagoAbono : registra cobro
  PagoAbono --> IntentoPago : conserva
  CasoSoporte --> Pedido : interviene con permiso
  ReporteActividad --> Pedido : consulta proyección
  ReporteActividad --> Valoracion : consulta agregado
```

</details>

## Componentes

![Componentes](/3daltoque-docs/documentos/44ac08b2bfc6-componentes.svg)

[Abrir SVG](/3daltoque-docs/documentos/44ac08b2bfc6-componentes.svg) · [Fuente editable](/3daltoque-docs/documentos/410048d78c61-componentes.mmd)

<details class="doc-accordion">
<summary>Fuente editable</summary>

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#E4F5FA","primaryTextColor":"#082345","primaryBorderColor":"#00BFE5","lineColor":"#315574","secondaryColor":"#F5F8FC","tertiaryColor":"#FFFFFF","fontFamily":"Manrope, sans-serif"},"flowchart":{"htmlLabels":false},"class":{"htmlLabels":false}}}%%
flowchart LR
  WEB["Cliente Web"]
  MOBILE["Cliente React Native"]
  API["FastAPI · monolito modular"]
  DB[("PostgreSQL")]
  FILES[("Archivos privados y derivados autorizados")]
  MP["Mercado Pago Checkout Pro · abono del maker"]
  MAPS["Mapas y geocodificación"]
  AUTH["Identidad y permisos"]
  PROFILE["Perfiles, impresoras y capacidades"]
  CAT["Catálogo y portfolio del maker"]
  MARKET["Solicitudes, estimación, ofertas y negociación"]
  ORDERS["Pedidos, revisión y entrega"]
  CHAT["Conversaciones de pedidos y mensajes"]
  REPUTATION["Reputación y moderación"]
  MEMBERS["Membresía, prueba y fundadores"]
  BILLING["Cobro del abono y períodos"]
  REPORTS["Historial e indicadores"]
  ADMIN["Soporte y auditoría"]
  NOTIFY["Avisos y recordatorios"]
  WEB --> API
  MOBILE --> API
  API --> AUTH
  AUTH --> DB
  API --> PROFILE
  PROFILE --> DB
  API --> CAT
  CAT --> DB
  API --> MARKET
  MARKET --> DB
  API --> ORDERS
  ORDERS --> DB
  API --> CHAT
  CHAT --> DB
  API --> REPUTATION
  REPUTATION --> DB
  API --> MEMBERS
  MEMBERS --> DB
  API --> BILLING
  BILLING --> DB
  API --> REPORTS
  REPORTS --> DB
  API --> ADMIN
  ADMIN --> DB
  API --> NOTIFY
  NOTIFY --> DB
  CAT --> FILES
  ORDERS --> FILES
  CHAT --> FILES
  MARKET --> MAPS
  BILLING --> MP
  MEMBERS --> BILLING
  CAT -.-> MEMBERS
  MARKET -.-> MEMBERS
  ORDERS --> CHAT
  REPUTATION --> ORDERS
  REPORTS --> REPUTATION
```

</details>

## Clases de diseño

![Clases de diseño](/3daltoque-docs/documentos/57e576c9dff0-clases-diseno.svg)

[Abrir SVG](/3daltoque-docs/documentos/57e576c9dff0-clases-diseno.svg) · [Fuente editable](/3daltoque-docs/documentos/4fad4154f542-clases-diseno.mmd)

<details class="doc-accordion">
<summary>Fuente editable</summary>

```mermaid
%%{init: {"theme":"base","themeVariables":{"primaryColor":"#E4F5FA","primaryTextColor":"#082345","primaryBorderColor":"#00BFE5","lineColor":"#315574","secondaryColor":"#F5F8FC","tertiaryColor":"#FFFFFF","fontFamily":"Manrope, sans-serif"},"flowchart":{"htmlLabels":false},"class":{"htmlLabels":false}}}%%
classDiagram
  direction LR
  class PerfilMakerService {
    +consultar_perfil(maker_id)
    +guardar_capacidades(command)
    +habilitar_perfil(command)
  }
  class CatalogoService {
    +guardar_producto(command)
    +publicar_producto(command)
    +confirmar_pedido_producto(command)
  }
  class PortfolioService {
    +publicar_trabajo(command)
    +retirar_trabajo(command)
  }
  class SolicitudService {
    +guardar_borrador(command)
    +enviar_solicitud(command)
    +consultar_estimacion(query)
  }
  class OfertaService {
    +publicar_oferta(command)
    +resolver_contraoferta(command)
    +aceptar_oferta(command)
  }
  class PedidoService {
    +consultar_pedido(query)
    +registrar_transicion(command)
  }
  class ConversacionService {
    +consultar_bandeja(query)
    +consultar_mensajes(query)
    +enviar_mensaje(command)
  }
  class RevisionService {
    +presentar_evidencia(command)
    +registrar_decision(command)
  }
  class EntregaService {
    +proponer_encuentro(command)
    +aceptar_encuentro(command)
    +confirmar_recepcion(command)
  }
  class ReputacionService {
    +publicar_valoracion(command)
    +consultar_resumen(query)
    +moderar_valoracion(command)
  }
  class MembresiaService {
    +consultar_acceso(query)
    +crear_compra(command)
    +verificar_pago(command)
    +conceder_periodo(command)
  }
  class ArchivoService {
    +autorizar_transferencia(command)
    +finalizar_archivo(command)
    +obtener_acceso(query)
  }
  class NotificacionService {
    +procesar_evento(command)
    +consultar_bandeja(query)
    +marcar_leida(command)
  }
  class ReporteQueries {
    +consultar_historial(query)
    +consultar_actividad(query)
  }
  class UnitOfWorkPort {
    <<interface>>
    +ejecutar_transaccion(operation)
  }
  class PerfilRepositoryPort {
    <<interface>>
    +consultar_propietario(id)
    +guardar_version(recurso)
  }
  class CatalogoRepositoryPort {
    <<interface>>
    +consultar_version(id, numero)
    +guardar_publicacion(producto)
  }
  class PedidoRepositoryPort {
    <<interface>>
    +aceptar_una_vez(command)
    +consultar_autorizado(query)
  }
  class ConversacionRepositoryPort {
    <<interface>>
    +obtener_por_pedido(id)
    +guardar_mensaje_una_vez(command)
  }
  class RevisionRepositoryPort {
    <<interface>>
    +registrar_revision(command)
    +registrar_decision(command)
  }
  class MembresiaRepositoryPort {
    <<interface>>
    +consultar_periodos(maker)
    +conceder_una_vez(compra)
  }
  class PaymentGatewayPort {
    <<interface>>
    +crear_checkout(compra)
    +verificar_notificacion(headers, body)
    +consultar_resultado(referencia)
  }
  class StoragePort {
    <<interface>>
    +autorizar_transferencia(meta)
    +consultar_integridad(archivo)
    +emitir_acceso(archivo)
  }
  class MapasPort {
    <<interface>>
    +resolver_referencia(query)
  }
  class NotificacionesPort {
    <<interface>>
    +enviar_aviso(evento)
  }
  class ReporteReadPort {
    <<interface>>
    +agregar_actividad(query)
  }
  PerfilMakerService --> PerfilRepositoryPort
  PerfilMakerService --> MembresiaRepositoryPort
  PerfilMakerService --> UnitOfWorkPort
  CatalogoService --> CatalogoRepositoryPort
  CatalogoService --> PedidoRepositoryPort
  CatalogoService --> MembresiaRepositoryPort
  CatalogoService --> ConversacionRepositoryPort
  CatalogoService --> UnitOfWorkPort
  PortfolioService --> PerfilRepositoryPort
  PortfolioService --> StoragePort
  SolicitudService --> PerfilRepositoryPort
  SolicitudService --> MapasPort
  SolicitudService --> StoragePort
  SolicitudService --> UnitOfWorkPort
  OfertaService --> PedidoRepositoryPort
  OfertaService --> MembresiaRepositoryPort
  OfertaService --> UnitOfWorkPort
  PedidoService --> PedidoRepositoryPort
  PedidoService --> UnitOfWorkPort
  ConversacionService --> ConversacionRepositoryPort
  ConversacionService --> StoragePort
  ConversacionService --> UnitOfWorkPort
  RevisionService --> RevisionRepositoryPort
  RevisionService --> StoragePort
  RevisionService --> UnitOfWorkPort
  EntregaService --> PedidoRepositoryPort
  EntregaService --> RevisionRepositoryPort
  EntregaService --> MapasPort
  EntregaService --> UnitOfWorkPort
  ReputacionService --> PedidoRepositoryPort
  ReputacionService --> PerfilRepositoryPort
  ReputacionService --> UnitOfWorkPort
  MembresiaService --> MembresiaRepositoryPort
  MembresiaService --> PaymentGatewayPort
  MembresiaService --> UnitOfWorkPort
  ArchivoService --> StoragePort
  ArchivoService --> PerfilRepositoryPort
  NotificacionService --> NotificacionesPort
  NotificacionService --> UnitOfWorkPort
  ReporteQueries --> ReporteReadPort
  class FastAPIAdapter
  class PersistenciaPostgresAdapter
  class MercadoPagoCheckoutProAdapter
  class PagoSimuladoAdapter
  FastAPIAdapter --> CatalogoService
  FastAPIAdapter --> ConversacionService
  MercadoPagoCheckoutProAdapter ..|> PaymentGatewayPort
  PagoSimuladoAdapter ..|> PaymentGatewayPort
  PersistenciaPostgresAdapter ..|> PedidoRepositoryPort
  PersistenciaPostgresAdapter ..|> ConversacionRepositoryPort
```

</details>
