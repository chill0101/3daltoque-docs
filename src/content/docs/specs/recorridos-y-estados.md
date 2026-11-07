---
title: "Recorridos y estados del prototipo"
---

# Prototipos de interfaz

Este documento organiza los recorridos y los identificadores propuestos para diseñar los prototipos visuales web y mobile.

El [inventario de navegación y pantallas](/3daltoque-docs/specs/01-navegacion-y-pantallas/) conserva los IDs de membresía de esta base y amplía las superficies del producto. El [design system](/3daltoque-docs/design-system/) define los componentes y estados que deben utilizar los prototipos.

## Recorrido principal

Registro y acceso, perfil maker y capacidades, carga de STL y unidad/escala, mapa y lista compatibles, ofertas comparables, aceptación, pedido y chat, cola del maker, evidencia y revisión, corrección, aprobación expresa y entrega personal. El cliente ve el precio acordado y que la impresión se paga al maker directamente.

## Pantallas del modelo comercial

| ID propuesto | Pantalla | CU | Contenido y estados |
| --- | --- | --- | --- |
| WEB-MEM-01 | Panel de membresía | CU-08 | Estado, inicio/fin, días de prueba, fundador y explicación de trabajos nuevos/existentes. |
| WEB-MEM-02 | Comprar o renovar | CU-11 | Precio y moneda del plan, condiciones, renovación manual y acceso al checkout del proveedor. |
| WEB-MEM-03 | Retorno del checkout | CU-11 | Pendiente, confirmado o rechazado desde backend; no conceder acceso por URL. |
| WEB-ADM-MEM-01 | Plan y beneficio fundador | CU-10, CU-12 | Versionado de parámetros, cupo, asignación autorizada, confirmación y auditoría. |
| MOB-MEM-01 | Membresía mobile | CU-08, CU-11 | Mismos estados; checkout alojado y retorno a definir para React Native. |

## Criterios de UX

Mostrar diferencias entre registro y habilitación, prueba general y fundadora, acceso vigente y vencido. No pedir tarjeta para iniciar prueba ni insinuar renovación automática. El distintivo fundador identifica la pertenencia al programa y sus beneficios de acceso. Vencido el acceso, ofrecer renovar sin ocultar los pedidos en curso. Cada pantalla necesita estados de carga, vacío, error, éxito, autorización y recuperación.

## Mobile

React Native forma parte del alcance vigente y comparte la API FastAPI con Web, según RF-11.1. El checkout alojado vuelve al recurso compra_id; después de recuperar la aplicación se consulta el estado en backend. La navegación conserva los mismos permisos y estados del pedido.

## Recorridos y cobertura de pantallas

El inventario reúne 128 superficies funcionales: 110 composiciones de referencia, doce vistas HTML y seis contratos de recuperación/verificación pendientes de mock. Las composiciones de Figma conservan su versión. Las doce vistas adicionales tienen [prototipo HTML navegable y capturas](/3daltoque-docs/specs/prototipo-catalogo-y-chat/), con referencias a sus specs.

| Funcionalidad | Recorrido y pantallas | Contrato |
| --- | --- | --- |
| F01 Registro e inicio de sesión | WEB/MOB-AUTH-01 a AUTH-06 | [Abrir spec](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/) |
| F02 Gestión de perfil de cliente | WEB-CLI-01, MOB-CLI-01 | [Abrir spec](/3daltoque-docs/specs/f02-gestion-de-perfil-de-cliente/) |
| F03 Gestión de perfil de maker | WEB-MKR-01, MOB-MKR-01, WEB-MKR-08, MOB-MKR-08 | [Abrir spec](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/) |
| F04 Portfolio del maker | WEB-MKR-02, MOB-MKR-02, WEB-MKR-08, MOB-MKR-08 | [Abrir spec](/3daltoque-docs/specs/f04-portfolio-del-maker/) |
| F05 Alta de solicitud de impresión | WEB-SOL-01, MOB-SOL-01 | [Abrir spec](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/) |
| F06 Cotización estimativa inicial | WEB-SOL-01, WEB-SOL-02, MOB-SOL-01, MOB-SOL-02 | [Abrir spec](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/) |
| F07 Búsqueda de makers cercanos | WEB-BUS-01, MOB-BUS-01 | [Abrir spec](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/) |
| F08 Matching y envío a makers | WEB-MKR-03, MOB-MKR-03 | [Abrir spec](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/) |
| F09 Gestión de ofertas | WEB-OFE-01, WEB-OFE-02, MOB-OFE-01, MOB-OFE-02 | [Abrir spec](/3daltoque-docs/specs/f09-gestion-de-ofertas/) |
| F10 Confirmación de oferta | WEB-OFE-01, WEB-OFE-03, MOB-OFE-01, MOB-OFE-03 | [Abrir spec](/3daltoque-docs/specs/f10-confirmacion-de-oferta/) |
| F11 Membresía y abono | WEB-MEM-01, WEB-MEM-02, WEB-MEM-03, WEB-ADM-MEM-01, MOB-MEM-01, MOB-MEM-02, MOB-MEM-03 | [Abrir spec](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| F12 Gestión de estados del pedido | WEB-PED-01, WEB-MKR-04, MOB-PED-01, MOB-MKR-04 | [Abrir spec](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/) |
| F13 Mensajería cliente–maker | WEB-CHAT-01, MOB-CHAT-01 | [Abrir spec](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/) |
| F14 Notificaciones | WEB-NOT-01, MOB-NOT-01 | [Abrir spec](/3daltoque-docs/specs/f14-notificaciones/) |
| F15 Evidencia previa a la entrega | WEB-REV-01, MOB-REV-01 | [Abrir spec](/3daltoque-docs/specs/f15-evidencia-previa-a-la-entrega/) |
| F16 Entrega en Nodo Amigo | WEB-ENT-01, MOB-ENT-01 | [Abrir spec](/3daltoque-docs/specs/f16-entrega-en-nodo-amigo/) |
| F17 Validación de recepción | WEB-ENT-02, MOB-ENT-02 | [Abrir spec](/3daltoque-docs/specs/f17-validacion-de-recepcion/) |
| F18 Reputación bidireccional | WEB-REP-01, MOB-REP-01, WEB-MKR-08, MOB-MKR-08 | [Abrir spec](/3daltoque-docs/specs/f18-reputacion-bidireccional/) |
| F19 Historial de pedidos | WEB-HIS-01, MOB-HIS-01 | [Abrir spec](/3daltoque-docs/specs/f19-historial-de-pedidos/) |
| F20 Panel de administración | WEB-ADM-01, WEB-ADM-MEM-01 | [Abrir spec](/3daltoque-docs/specs/f20-panel-de-administracion/) |
| F21 Reporte de actividad | WEB-ADM-02 | [Abrir spec](/3daltoque-docs/specs/f21-reporte-de-actividad/) |
| F22 Revisión y aprobación del resultado | WEB-REV-02, MOB-REV-02 | [Abrir spec](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/) |
| F23 Gestión de archivos privados | WEB-SOL-01, WEB-REV-01, WEB-CHAT-01, MOB-SOL-01, MOB-REV-01, MOB-CHAT-01 | [Abrir spec](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| F24 API común y sincronización | WEB-SYS-01, MOB-SYS-01 | [Abrir spec](/3daltoque-docs/specs/f24-api-comun-y-sincronizacion/) |
| F25 Catálogo de productos del maker | WEB-CAT-01, WEB-CAT-02, WEB-CAT-03, WEB-CAT-04, MOB-CAT-01, MOB-CAT-02, MOB-CAT-03, MOB-CAT-04, WEB-MKR-08, MOB-MKR-08 | [Abrir spec](/3daltoque-docs/specs/f25-catalogo-de-productos-del-maker/) |

## Estados y navegación de cada recorrido

| Estado | Presentación | Acción y recuperación |
| --- | --- | --- |
| Carga inicial | Indicador con nombre de tarea y estructura estable. | Cancelar navegación o esperar respuesta; conservar datos previos válidos. |
| Vacío | Explicación específica del recurso. | Crear solicitud/producto o ajustar filtros según el rol. |
| Campo inválido | Mensaje asociado al campo y resumen accesible. | Corregir sin perder entradas válidas. |
| Sesión vencida | Acción para volver a acceder. | Autenticar y recuperar el recurso permitido. |
| Conflicto de versión | Condiciones actuales identificadas. | Revisar y confirmar una intención nueva cuando corresponda. |
| Red interrumpida | Operación pendiente y referencia conservada. | Consultar resultado y reintentar con la misma clave. |
| Acceso comercial vencido | Estado y acción de renovación. | Conservar recorridos del pedido existente y bloquear acuerdos nuevos. |
| Archivo pendiente/rechazado | Estado, finalidad y causa. | Retomar transferencia o corregir el archivo. |
| Confirmación | Resultado identificado y siguiente acción. | Abrir pedido, compra, conversación o historial autorizado. |

## Evaluación de navegación

Ejecutar los recorridos de solicitud/oferta y producto directo hasta la recepción, y el de habilitación/abono hasta verificar acceso. Repetir con error de red, cambio de versión y sesión vencida. Revisar foco, teclado, nombre de controles y contraste según PERF-01. El registro conserva canal, pantalla, versión del prototipo o release y resultado observado.
