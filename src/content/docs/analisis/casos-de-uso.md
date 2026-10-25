---
title: "Casos de uso y aceptación"
---

# Casos de uso y aceptación

Versión 2.0-borrador. Fecha: 14 de octubre de 2026. Especificación de trabajo; revisión de fichas y trazabilidad académica pendientes.

La autorización combina identidad, permisos por recurso y vigencia comercial según RF-12.10. Mercado Pago procesa el abono del maker a la plataforma. El cliente elige la oferta de impresión y acuerda su pago directamente con el maker.

## Diagrama de casos de uso

![Casos de uso y actores](/3daltoque-docs/documentos/56672ecacb3e-casos-de-uso.svg)

[Abrir SVG](/3daltoque-docs/documentos/56672ecacb3e-casos-de-uso.svg) · [Fuente editable](/3daltoque-docs/documentos/c14d6068439c-casos-de-uso.puml)

## CU-01 Publicar solicitud

| Campo | Contenido |
| --- | --- |
| Identificador y nombre | CU-01 Publicar solicitud |
| Actor principal | Cliente |
| Objetivo | Solicitar una impresión con un archivo y condiciones comprensibles. |
| Disparador | Acción del actor o evento autorizado descrito en el flujo |
| Precondiciones | Cliente autenticado y archivo habilitado. |
| Flujo principal | El cliente confirma especificaciones; el sistema conserva la solicitud e invita a un grupo reducido de makers compatibles y habilitados. |
| Alternativas y errores | Datos incompletos, archivo rechazado, ubicación no válida o ausencia de makers elegibles. |
| Postcondiciones | Solicitud conservada e invitaciones trazables. El pedido se confirma mediante CU-03. |
| Requisitos relacionados | RF-02.1, RF-02.2, RF-02.3, RF-03.1, RF-12.10 |
| Pruebas relacionadas | [Catálogo de pruebas](planificacion/05-pruebas-y-trazabilidad.md); completar los IDs de CP y su cobertura. |

## CU-02 Recibir y responder ofertas

| Campo | Contenido |
| --- | --- |
| Identificador y nombre | CU-02 Recibir y responder ofertas |
| Actor principal | Maker |
| Objetivo | Cotizar un trabajo compatible. |
| Disparador | Acción del actor o evento autorizado descrito en el flujo |
| Precondiciones | Invitación válida y habilitación aplicable para trabajos nuevos. |
| Flujo principal | El maker consulta la solicitud y publica una oferta con precio, plazo, versión y vigencia; puede rechazar la invitación. |
| Alternativas y errores | Oferta inválida, invitación cerrada o acceso vencido; política de ofertas al vencer pendiente en PD-05. |
| Postcondiciones | Oferta versionada o respuesta de rechazo conservada. |
| Requisitos relacionados | RF-03.2, RF-04.1, RF-04.2, RF-04.5, RF-12.10 |
| Pruebas relacionadas | [Catálogo de pruebas](planificacion/05-pruebas-y-trazabilidad.md); completar los IDs de CP y su cobertura. |

## CU-03 Elegir oferta

| Campo | Contenido |
| --- | --- |
| Identificador y nombre | CU-03 Elegir oferta |
| Actor principal | Cliente |
| Objetivo | Confirmar un único acuerdo de impresión. |
| Disparador | Acción del actor o evento autorizado descrito en el flujo |
| Precondiciones | Solicitud abierta, versión vigente y maker elegible para el nuevo acuerdo. |
| Flujo principal | El cliente compara condiciones y acepta una versión; el sistema confirma el pedido y cierra alternativas en una transacción. |
| Alternativas y errores | Cambio de versión, oferta vencida, selección concurrente o habilitación no válida. |
| Postcondiciones | Un único pedido por solicitud con precio y condiciones conservados; el pago de la impresión se acuerda fuera de nuestra pasarela. |
| Requisitos relacionados | RF-04.3, RF-04.4, RF-12.10, RF-12.15 |
| Pruebas relacionadas | [Catálogo de pruebas](planificacion/05-pruebas-y-trazabilidad.md); completar los IDs de CP y su cobertura. |

## CU-04 Producción y evidencia

| Campo | Contenido |
| --- | --- |
| Identificador y nombre | CU-04 Producción y evidencia |
| Actor principal | Maker del pedido |
| Objetivo | Fabricar la pieza y presentar su resultado. |
| Disparador | Acción del actor o evento autorizado descrito en el flujo |
| Precondiciones | Pedido confirmado y actor autorizado; no exige renovar la membresía para terminarlo. |
| Flujo principal | El maker actualiza avance y presenta evidencia habilitada en una revisión identificable. |
| Alternativas y errores | Archivo no habilitado, revisión no válida o actor ajeno. |
| Postcondiciones | Revisión presentada e historial conservado. |
| Requisitos relacionados | RF-06.1, RF-06.2, RF-06.5, RF-12.10 |
| Pruebas relacionadas | [Catálogo de pruebas](planificacion/05-pruebas-y-trazabilidad.md); completar los IDs de CP y su cobertura. |

## CU-05 Revisión y aprobación

| Campo | Contenido |
| --- | --- |
| Identificador y nombre | CU-05 Revisión y aprobación |
| Actor principal | Cliente del pedido |
| Objetivo | Decidir sobre el resultado concreto presentado. |
| Disparador | Acción del actor o evento autorizado descrito en el flujo |
| Precondiciones | Revisión vigente con evidencia consultable. |
| Flujo principal | El cliente aprueba expresamente o registra observaciones; el sistema conserva la decisión y su referencia. |
| Alternativas y errores | Silencio mantiene pendiente; correcciones y reclamos requieren la política aplicable. |
| Postcondiciones | La aprobación expresa de la revisión vigente habilita la coordinación de entrega. |
| Requisitos relacionados | RF-06.3, RF-06.4, RF-12.15 |
| Pruebas relacionadas | [Catálogo de pruebas](planificacion/05-pruebas-y-trazabilidad.md); completar los IDs de CP y su cobertura. |

## CU-06 Entrega personal

| Campo | Contenido |
| --- | --- |
| Identificador y nombre | CU-06 Entrega personal |
| Actor principal | Cliente y maker del pedido |
| Objetivo | Acordar el encuentro y registrar recepción. |
| Disparador | Acción del actor o evento autorizado descrito en el flujo |
| Precondiciones | Revisión vigente aprobada y participantes autorizados. |
| Flujo principal | Las partes acuerdan punto y horario y registran recepción según mecanismo acordado. |
| Alternativas y errores | Cambio de encuentro o incidente; no hay custodia por comercios ni cierre por silencio. |
| Postcondiciones | Recepción registrada y pedido finalizado conforme a la política. |
| Requisitos relacionados | RF-06.6, RF-06.7, RF-12.10 |
| Pruebas relacionadas | [Catálogo de pruebas](planificacion/05-pruebas-y-trazabilidad.md); completar los IDs de CP y su cobertura. |

## CU-07 Administración operativa

| Campo | Contenido |
| --- | --- |
| Identificador y nombre | CU-07 Administración operativa |
| Actor principal | Administración autorizada |
| Objetivo | Gestionar soporte con trazabilidad y permisos limitados. |
| Disparador | Acción del actor o evento autorizado descrito en el flujo |
| Precondiciones | Permiso específico y caso pertinente. |
| Flujo principal | Administración consulta el caso y registra la acción habilitada y su motivo. |
| Alternativas y errores | Permiso insuficiente o política de intervención todavía no definida. |
| Postcondiciones | Acción registrada con actor, motivo, recurso y permiso aplicado. Las operaciones financieras disponibles corresponden al abono de membresía. |
| Requisitos relacionados | RF-07.2, RNF-04, RNF-06 |
| Pruebas relacionadas | [Catálogo de pruebas](planificacion/05-pruebas-y-trazabilidad.md); completar los IDs de CP y su cobertura. |

## CU-08 Consultar membresía

| Campo | Contenido |
| --- | --- |
| Identificador y nombre | CU-08 Consultar membresía |
| Actor principal | Maker |
| Objetivo | Conocer beneficios, vencimiento y condiciones del abono. |
| Disparador | Acción del actor o evento autorizado descrito en el flujo |
| Precondiciones | Maker autenticado. |
| Flujo principal | El sistema muestra la prueba o período pago efectivo, programa fundador y renovación manual. |
| Alternativas y errores | Sin beneficio iniciado, acceso vencido o compra todavía pendiente. |
| Postcondiciones | Estado comprensible calculado con fechas del servidor. |
| Requisitos relacionados | RF-12.4, RF-12.11, RF-12.15 |
| Pruebas relacionadas | [Catálogo de pruebas](planificacion/05-pruebas-y-trazabilidad.md); completar los IDs de CP y su cobertura. |

## CU-09 Habilitar perfil e iniciar prueba

| Campo | Contenido |
| --- | --- |
| Identificador y nombre | CU-09 Habilitar perfil e iniciar prueba |
| Actor principal | Maker; actor de habilitación según PD-01 |
| Objetivo | Iniciar un único período gratuito cuando el perfil puede recibir solicitudes. |
| Disparador | Acción del actor o evento autorizado descrito en el flujo |
| Precondiciones | Perfil cumple el criterio de habilitación; no se consumió el beneficio inicial. |
| Flujo principal | Se registra la primera habilitación y se concede la prueba general o el beneficio fundador aplicable, nunca ambos acumulados. |
| Alternativas y errores | Perfil incompleto, habilitación repetida o beneficio no elegible. |
| Postcondiciones | Inicio, fin, modo y configuración del período conservados sin pedir tarjeta. |
| Requisitos relacionados | RF-12.2, RF-12.3 |
| Pruebas relacionadas | [Catálogo de pruebas](planificacion/05-pruebas-y-trazabilidad.md); completar los IDs de CP y su cobertura. |

## CU-10 Asignar beneficio fundador

| Campo | Contenido |
| --- | --- |
| Identificador y nombre | CU-10 Asignar beneficio fundador |
| Actor principal | Administración autorizada |
| Objetivo | Incluir al maker en el grupo inicial con cupo limitado. |
| Disparador | Acción del actor o evento autorizado descrito en el flujo |
| Precondiciones | Programa habilitado, cupo disponible y condiciones aplicables. |
| Flujo principal | Administración asigna el beneficio de forma atómica y auditada. |
| Alternativas y errores | Cupo agotado, maker ya inscrito o asignación posterior que requiere una política todavía no acordada. |
| Postcondiciones | Inscripción, cupo utilizado y condiciones del beneficio inicial de 90 días totales identificables. |
| Requisitos relacionados | RF-12.3, RF-12.13, RF-12.15 |
| Pruebas relacionadas | [Catálogo de pruebas](planificacion/05-pruebas-y-trazabilidad.md); completar los IDs de CP y su cobertura. |

## CU-11 Pagar o renovar abono

| Campo | Contenido |
| --- | --- |
| Identificador y nombre | CU-11 Pagar o renovar abono |
| Actor principal | Maker; Mercado Pago como sistema externo |
| Objetivo | Comprar explícitamente un período del servicio propio. |
| Disparador | Acción del actor o evento autorizado descrito en el flujo |
| Precondiciones | Plan publicado, importe y condiciones visibles, maker autenticado. |
| Flujo principal | Se conserva una compra idempotente y se abre Checkout Pro; tras verificar el resultado al proveedor, se concede una única vez el período aplicable. |
| Alternativas y errores | Pago rechazado, abandono, timeout, webhook repetido o contexto incorrecto; no se concede por retorno de navegador. |
| Postcondiciones | Compra y período trazables; renovación manual y sin cobro de impresiones. |
| Requisitos relacionados | RF-12.5, RF-12.6, RF-12.7, RF-12.8, RF-12.9, RF-12.14 |
| Pruebas relacionadas | [Catálogo de pruebas](planificacion/05-pruebas-y-trazabilidad.md); completar los IDs de CP y su cobertura. |

## CU-12 Gestionar plan y promociones

| Campo | Contenido |
| --- | --- |
| Identificador y nombre | CU-12 Gestionar plan y promociones |
| Actor principal | Administración autorizada |
| Objetivo | Configurar precio, duraciones y cupo sin cambiar código. |
| Disparador | Acción del actor o evento autorizado descrito en el flujo |
| Precondiciones | Permiso y versión vigente conocidos. |
| Flujo principal | Administración publica una configuración validada y conserva el motivo y la versión. |
| Alternativas y errores | Valor inválido, conflicto de versión o intento de modificar condiciones históricas. |
| Postcondiciones | Nueva configuración para operaciones futuras, sin reescribir compras o beneficios. |
| Requisitos relacionados | RF-12.1, RF-12.13, RNF-13 |
| Pruebas relacionadas | [Catálogo de pruebas](planificacion/05-pruebas-y-trazabilidad.md); completar los IDs de CP y su cobertura. |

## CU-13 Registrarse y acceder

| Campo | Contenido |
| --- | --- |
| Identificador y nombre | CU-13 Registrarse y acceder |
| Actor principal | Cliente, maker y administración |
| Objetivo | Acceder con identidad y permisos adecuados. |
| Disparador | Acción del actor o evento autorizado descrito en el flujo |
| Precondiciones | Credenciales o datos de registro según flujo aplicable. |
| Flujo principal | El sistema registra o autentica la identidad y aplica permisos por recurso. |
| Alternativas y errores | Credenciales inválidas, identidad bloqueada o datos incompletos. |
| Postcondiciones | Sesión y permisos autorizados; registrarse no inicia por sí solo la prueba. |
| Requisitos relacionados | RF-01.1, RF-01.4, RF-01.5, RNF-04 |
| Pruebas relacionadas | [Catálogo de pruebas](planificacion/05-pruebas-y-trazabilidad.md); completar los IDs de CP y su cobertura. |




