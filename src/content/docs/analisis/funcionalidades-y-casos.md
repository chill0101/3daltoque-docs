---
title: "Funcionalidades y casos de uso"
---

# Funcionalidades y casos de uso

El [Documento de funcionalidades](/3daltoque-docs/proyecto/funcionalidades/) reúne el catálogo F01 a F25, sus actores, canales, entradas, comportamiento, resultados y referencias. Conserva F01 a F21 del alcance del equipo y explicita revisión del resultado, archivos y API a partir de los RF vigentes.

Fuente vigente: [68 RF](/3daltoque-docs/analisis/requisitos/funcionales/), [19 RNF](/3daltoque-docs/analisis/requisitos/no-funcionales/), [25 casos de uso](/3daltoque-docs/analisis/casos-de-uso/), [reglas](/3daltoque-docs/analisis/reglas-de-negocio/) y [modelo comercial](/3daltoque-docs/proyecto/modelo-comercial/).

Las fichas RF/RNF conservan los once campos de la plantilla de la materia. Los CU son borradores de trabajo: falta contrastar cada ejecutor, alternativa, excepción, pantalla y referencia con la plantilla de CU. Los diagramas y las fichas deben conservar los mismos actores, identificadores y relaciones.

## Cambio comercial

RF-08.1 a RF-08.9 se retiran y se conservan como antecedente, sin reutilizar sus IDs. RF-12.1 a RF-12.15 cubren membresía, prueba, fundadores, cobro del abono, renovación, vigencia y auditoría. Mercado Pago procesa la compra del abono que el maker paga a 3DAltoque.

## Revisión antes de cerrar

Relacionar RF/RNF, CU, pantallas, CP, dominio, persistencia e interfaces. Cerrar precio, moneda, cupo, calendario, criterios de habilitación y política del abono. Mantener aprobación expresa del resultado y capacidad de finalizar pedidos cuando venza el acceso comercial.

## Cobertura funcional consolidada al 25 de octubre

El [catálogo](/3daltoque-docs/proyecto/funcionalidades/) reúne 25 funcionalidades, con [68 RF](/3daltoque-docs/analisis/requisitos/funcionales/) y [19 RNF](/3daltoque-docs/analisis/requisitos/no-funcionales/). Los [25 casos de uso](/3daltoque-docs/analisis/casos-de-uso/) conservan fichas individuales con los campos de la plantilla, flujo normal numerado, alternativas referidas a pasos y sus referencias.

| CU | Nombre | Funcionalidades |
| --- | --- | --- |
| [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/) | Publicar solicitud | F05, F06, F07, F08, F23 |
| [CU-02](/3daltoque-docs/analisis/casos/cu-02-recibir-y-responder-ofertas/) | Recibir y responder ofertas | F08, F09 |
| [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/) | Elegir oferta | F09, F10, F13 |
| [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/) | Producción y evidencia | F12, F15, F23 |
| [CU-05](/3daltoque-docs/analisis/casos/cu-05-revision-y-aprobacion/) | Revisión y aprobación | F22, F12, F14 |
| [CU-06](/3daltoque-docs/analisis/casos/cu-06-entrega-personal/) | Entrega personal | F16, F17 |
| [CU-07](/3daltoque-docs/analisis/casos/cu-07-administracion-operativa/) | Administración operativa | F20 |
| [CU-08](/3daltoque-docs/analisis/casos/cu-08-consultar-membresia/) | Consultar membresía | F11 |
| [CU-09](/3daltoque-docs/analisis/casos/cu-09-habilitar-perfil-e-iniciar-prueba/) | Habilitar perfil e iniciar prueba | F03, F11 |
| [CU-10](/3daltoque-docs/analisis/casos/cu-10-asignar-beneficio-fundador/) | Asignar beneficio fundador | F11, F20 |
| [CU-11](/3daltoque-docs/analisis/casos/cu-11-pagar-o-renovar-abono/) | Pagar o renovar abono | F11 |
| [CU-12](/3daltoque-docs/analisis/casos/cu-12-gestionar-plan-y-promociones/) | Gestionar plan y promociones | F11, F20 |
| [CU-13](/3daltoque-docs/analisis/casos/cu-13-registrarse-y-acceder/) | Registrarse y acceder | F01 |
| [CU-14](/3daltoque-docs/analisis/casos/cu-14-conversar-en-un-pedido/) | Conversar en un pedido | F13 |
| [CU-15](/3daltoque-docs/analisis/casos/cu-15-mantener-y-consultar-portfolio/) | Mantener y consultar portfolio | F04 |
| [CU-16](/3daltoque-docs/analisis/casos/cu-16-valorar-y-consultar-reputacion/) | Valorar y consultar reputación | F18 |
| [CU-17](/3daltoque-docs/analisis/casos/cu-17-consultar-historial-de-pedidos/) | Consultar historial de pedidos | F19 |
| [CU-18](/3daltoque-docs/analisis/casos/cu-18-consultar-reporte-de-actividad/) | Consultar reporte de actividad | F21 |
| [CU-19](/3daltoque-docs/analisis/casos/cu-19-mantener-catalogo-de-productos/) | Mantener catálogo de productos | F25 |
| [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/) | Pedir un producto del maker | F25, F10, F12, F13 |
| [CU-21](/3daltoque-docs/analisis/casos/cu-21-gestionar-capacidades-del-maker/) | Gestionar capacidades del maker | F03 |
| [CU-22](/3daltoque-docs/analisis/casos/cu-22-gestionar-perfil-de-cliente/) | Gestionar perfil de cliente | F02 |
| [CU-23](/3daltoque-docs/analisis/casos/cu-23-recibir-y-consultar-notificaciones/) | Recibir y consultar notificaciones | F14 |
| [CU-24](/3daltoque-docs/analisis/casos/cu-24-gestionar-archivos-autorizados/) | Gestionar archivos autorizados | F23 |
| [CU-25](/3daltoque-docs/analisis/casos/cu-25-negociar-condiciones-de-una-oferta/) | Negociar condiciones de una oferta | F09 |

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) relaciona cada RF con CU, vistas, modelo, operaciones y pruebas.
