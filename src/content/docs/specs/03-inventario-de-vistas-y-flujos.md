---
title: "Inventario de vistas y flujos de Figma"
---

# Inventario de vistas, flujos y cobertura funcional

Actualización: 25 de octubre de 2026.

El catálogo funcional reúne 25 funcionalidades, 68 RF y 25 casos de uso. La referencia de Figma conserva 110 composiciones: 60 Web y 50 Mobile, con 26 estados compartidos contabilizados aparte. Se agregan doce contratos funcionales de vistas para completar el perfil público, catálogo y bandeja de chat. El inventario funcional reúne 122 superficies.

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

| Funcionalidad | RF | CU | Vistas documentadas | Contrato |
| --- | --- | --- | --- | --- |
| [F01 · Registro e inicio de sesión](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/) | RF-01.1, RF-01.4, RF-01.5 | CU-13 | WEB-AUTH-01, WEB-AUTH-02, MOB-AUTH-01, MOB-AUTH-02 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F02 · Gestión de perfil de cliente](/3daltoque-docs/specs/f02-gestion-de-perfil-de-cliente/) | RF-01.3, RF-09.1 | CU-22 | WEB-CLI-01, MOB-CLI-01 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F03 · Gestión de perfil de maker](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/) | RF-01.2, RF-12.2 | CU-09, CU-21 | WEB-MKR-01, MOB-MKR-01, WEB-MKR-08, MOB-MKR-08 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F04 · Portfolio del maker](/3daltoque-docs/specs/f04-portfolio-del-maker/) | RF-14.1, RF-14.2 | CU-15 | WEB-MKR-02, MOB-MKR-02, WEB-MKR-08, MOB-MKR-08 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F05 · Alta de solicitud de impresión](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/) | RF-02.1, RF-02.2, RF-02.3 | CU-01 | WEB-SOL-01, MOB-SOL-01 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F06 · Cotización estimativa inicial](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/) | RF-02.5 | CU-01 | WEB-SOL-01, WEB-SOL-02, MOB-SOL-01, MOB-SOL-02 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F07 · Búsqueda de makers cercanos](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/) | RF-09.1, RF-09.2, RF-03.1 | CU-01 | WEB-BUS-01, MOB-BUS-01 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F08 · Matching y envío a makers](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/) | RF-03.1, RF-03.2, RF-12.10 | CU-01, CU-02 | WEB-MKR-03, MOB-MKR-03 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F09 · Gestión de ofertas](/3daltoque-docs/specs/f09-gestion-de-ofertas/) | RF-04.1, RF-04.2, RF-04.3, RF-04.5, RF-04.6 | CU-02, CU-03, CU-25 | WEB-OFE-01, WEB-OFE-02, MOB-OFE-01, MOB-OFE-02 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F10 · Confirmación de oferta](/3daltoque-docs/specs/f10-confirmacion-de-oferta/) | RF-04.4, RF-12.10, RF-12.15 | CU-03, CU-20 | WEB-OFE-01, WEB-OFE-03, MOB-OFE-01, MOB-OFE-03 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F11 · Membresía y abono](/3daltoque-docs/specs/f11-membresia-y-abono/) | RF-12.1, RF-12.2, RF-12.3, RF-12.4, RF-12.5, RF-12.6, RF-12.7, RF-12.8, RF-12.9, RF-12.10, RF-12.11, RF-12.12, RF-12.13, RF-12.14, RF-12.15 | CU-08, CU-09, CU-10, CU-11, CU-12 | WEB-MEM-01, WEB-MEM-02, WEB-MEM-03, WEB-ADM-MEM-01, MOB-MEM-01, MOB-MEM-02, MOB-MEM-03 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F12 · Gestión de estados del pedido](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/) | RF-02.4, RF-05.3, RF-06.5, RF-12.10 | CU-04, CU-05, CU-06 | WEB-PED-01, WEB-MKR-04, MOB-PED-01, MOB-MKR-04 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F13 · Mensajería cliente–maker](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/) | RF-05.1, RF-05.2, RF-11.2, RF-12.10, RF-05.4 | CU-14, CU-03, CU-20 | WEB-CHAT-01, MOB-CHAT-01 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F14 · Notificaciones](/3daltoque-docs/specs/f14-notificaciones/) | RF-07.1, RF-07.3, RF-07.4, RF-12.11, RF-07.5 | CU-23 | WEB-NOT-01, MOB-NOT-01 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F15 · Evidencia previa a la entrega](/3daltoque-docs/specs/f15-evidencia-previa-a-la-entrega/) | RF-06.1, RF-06.2 | CU-04 | WEB-REV-01, MOB-REV-01 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F16 · Entrega en Nodo Amigo](/3daltoque-docs/specs/f16-entrega-en-nodo-amigo/) | RF-06.6, RF-09.1, RF-09.2 | CU-06 | WEB-ENT-01, MOB-ENT-01 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F17 · Validación de recepción](/3daltoque-docs/specs/f17-validacion-de-recepcion/) | RF-06.7 | CU-06 | WEB-ENT-02, MOB-ENT-02 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F18 · Reputación bidireccional](/3daltoque-docs/specs/f18-reputacion-bidireccional/) | RF-15.1, RF-15.2, RF-15.3 | CU-16 | WEB-REP-01, MOB-REP-01, WEB-MKR-08, MOB-MKR-08 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F19 · Historial de pedidos](/3daltoque-docs/specs/f19-historial-de-pedidos/) | RF-02.4, RF-05.3, RF-16.1 | CU-17 | WEB-HIS-01, MOB-HIS-01 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F20 · Panel de administración](/3daltoque-docs/specs/f20-panel-de-administracion/) | RF-07.2, RF-12.1, RF-12.3, RF-12.7, RF-12.12, RF-12.13, RF-13.2, RF-14.1, RF-15.3, RF-17.1 | CU-07, CU-10, CU-12, CU-18, CU-19 | WEB-ADM-01, WEB-ADM-MEM-01 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F21 · Reporte de actividad](/3daltoque-docs/specs/f21-reporte-de-actividad/) | RF-17.1 | CU-18 | WEB-ADM-02 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F22 · Revisión y aprobación del resultado](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/) | RF-06.3, RF-06.4 | CU-05 | WEB-REV-02, MOB-REV-02 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F23 · Gestión de archivos privados](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) | RF-10.1, RF-10.2, RF-10.3, RF-10.4 | CU-24, CU-01, CU-04, CU-14, CU-15, CU-19 | WEB-SOL-01, WEB-REV-01, WEB-CHAT-01, MOB-SOL-01, MOB-REV-01, MOB-CHAT-01 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F24 · API común y sincronización](/3daltoque-docs/specs/f24-api-comun-y-sincronizacion/) | RF-11.1, RF-11.2 | CU-01, CU-02, CU-03, CU-04, CU-05, CU-06, CU-07, CU-08, CU-09, CU-10, CU-11, CU-12, CU-13, CU-14, CU-15, CU-16, CU-17, CU-18, CU-19, CU-20, CU-21, CU-22, CU-23, CU-24, CU-25 | WEB-SYS-01, MOB-SYS-01 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |
| [F25 · Catálogo de productos del maker](/3daltoque-docs/specs/f25-catalogo-de-productos-del-maker/) | RF-13.1, RF-13.2, RF-13.3, RF-13.4 | CU-19, CU-20 | WEB-CAT-01, WEB-CAT-02, WEB-CAT-03, WEB-CAT-04, MOB-CAT-01, MOB-CAT-02, MOB-CAT-03, MOB-CAT-04, WEB-MKR-08, MOB-MKR-08 | Actores, entradas, permisos, flujo, alternativas, datos y aceptación en la spec. |

## Web

| ID | Referencia |
| --- | --- |
| [WEB-ADM-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-adm-01) | Soporte y operación |
| [WEB-ADM-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-adm-02) | Reporte de actividad |
| [WEB-ADM-MEM-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-adm-mem-01) | Plan y programa fundador |
| [WEB-AUTH-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-auth-01) | Acceso |
| [WEB-AUTH-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-auth-02) | Registro |
| [WEB-BUS-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-bus-01) | Mapa y lista de candidatos |
| [WEB-CHAT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-chat-01) | Conversación del pedido |
| [WEB-CLI-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-cli-01) | Perfil de cliente |
| [WEB-ENT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ent-01) | Coordinar encuentro |
| [WEB-ENT-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ent-02) | Registrar recepción |
| [WEB-HIS-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-his-01) | Historial |
| [WEB-MEM-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mem-01) | Panel de membresía |
| [WEB-MEM-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mem-02) | Compra o renovación |
| [WEB-MEM-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mem-03) | Retorno del checkout |
| [WEB-MKR-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mkr-01) | Perfil y capacidades maker |
| [WEB-MKR-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mkr-02) | Portfolio |
| [WEB-MKR-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mkr-03) | Invitaciones recibidas |
| [WEB-MKR-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mkr-04) | Cola del maker |
| [WEB-NOT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-not-01) | Bandeja de avisos |
| [WEB-OFE-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ofe-01) | Comparación de ofertas |
| [WEB-OFE-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ofe-02) | Preparar oferta |
| [WEB-OFE-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ofe-03) | Confirmar versión de oferta |
| [WEB-PED-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ped-01) | Seguimiento de pedido |
| [WEB-REP-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-rep-01) | Valoración |
| [WEB-REV-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-rev-01) | Presentar evidencia |
| [WEB-REV-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-rev-02) | Decidir sobre una revisión |
| [WEB-SOL-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-sol-01) | Nueva solicitud |
| [WEB-SOL-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-sol-02) | Detalle de solicitud y estimación |
| [WEB-SYS-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-sys-01) | Estado de conexión y acceso |
| [WEB-MKR-08](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mkr-08) | Perfil público del maker |
| [WEB-CAT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-cat-01) | Mis productos |
| [WEB-CAT-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-cat-02) | Editor de producto |
| [WEB-CAT-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-cat-03) | Detalle público del producto |
| [WEB-CAT-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-cat-04) | Confirmar pedido de producto |
| [WEB-CHAT-00](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-chat-00) | Conversaciones de pedidos |
| [WEB-AUTH-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-auth-03) | Cerrar sesión |
| [WEB-MKR-05](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mkr-05) | Habilitar perfil de maker |
| [WEB-SOL-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-sol-03) | Revisar y publicar solicitud |
| [WEB-SOL-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-sol-04) | Solicitud enviada |
| [WEB-MKR-06](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mkr-06) | Detalle de invitación |
| [WEB-MKR-07](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mkr-07) | Rechazar invitación |
| [WEB-OFE-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ofe-04) | La oferta tiene una nueva versión |
| [WEB-PED-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ped-02) | Producción del pedido |
| [WEB-PED-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ped-03) | Confirmar avance de producción |
| [WEB-REV-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-rev-03) | Presentar revisión al cliente |
| [WEB-REV-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-rev-04) | Confirmar aprobación |
| [WEB-REV-05](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-rev-05) | Enviar observaciones |
| [WEB-ENT-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ent-03) | Confirmar coordinación |
| [WEB-ENT-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ent-04) | Recepción registrada |
| [WEB-MEM-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mem-04) | Mis compras de membresía |
| [WEB-MEM-05](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mem-05) | Membresía acreditada |
| [WEB-MEM-06](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mem-06) | Pago rechazado |
| [WEB-MEM-07](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mem-07) | Checkout interrumpido |
| [WEB-MEM-08](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mem-08) | Verificación demorada |
| [WEB-ARC-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-arc-01) | Detalle de archivo privado |
| [WEB-ARC-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-arc-02) | Retirar archivo |
| [WEB-CHAT-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-chat-02) | Mensaje pendiente de envío |
| [WEB-SOL-05](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-sol-05) | Cómo se calculó la estimación |
| [WEB-HIS-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-his-02) | Historial del pedido |
| [WEB-ADM-MEM-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-adm-mem-02) | Asignar beneficio fundador |
| [WEB-ADM-MEM-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-adm-mem-03) | Compras de membresía |
| [WEB-ADM-MEM-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-adm-mem-04) | Detalle y conciliación de compra |
| [WEB-ADM-MEM-05](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-adm-mem-05) | Devolución autorizada del abono |
| [WEB-ADM-MEM-06](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-adm-mem-06) | Publicar versión del plan |
| [WEB-ADM-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-adm-03) | Detalle de soporte |
| [WEB-ADM-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-adm-04) | Auditoría de plan y beneficios |

## Mobile

| ID | Referencia |
| --- | --- |
| [MOB-AUTH-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-auth-01) | Acceso |
| [MOB-AUTH-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-auth-02) | Registro |
| [MOB-BUS-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-bus-01) | Mapa y lista de candidatos |
| [MOB-CHAT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-chat-01) | Conversación del pedido |
| [MOB-CLI-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-cli-01) | Perfil de cliente |
| [MOB-ENT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ent-01) | Coordinar encuentro |
| [MOB-ENT-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ent-02) | Registrar recepción |
| [MOB-HIS-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-his-01) | Historial |
| [MOB-MEM-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mem-01) | Panel de membresía |
| [MOB-MEM-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mem-02) | Compra o renovación |
| [MOB-MEM-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mem-03) | Retorno del checkout |
| [MOB-MKR-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mkr-01) | Perfil y capacidades maker |
| [MOB-MKR-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mkr-02) | Portfolio |
| [MOB-MKR-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mkr-03) | Invitaciones recibidas |
| [MOB-MKR-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mkr-04) | Cola del maker |
| [MOB-NOT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-not-01) | Bandeja de avisos |
| [MOB-OFE-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ofe-01) | Comparación de ofertas |
| [MOB-OFE-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ofe-02) | Preparar oferta |
| [MOB-OFE-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ofe-03) | Confirmar versión de oferta |
| [MOB-PED-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ped-01) | Seguimiento de pedido |
| [MOB-REP-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-rep-01) | Valoración |
| [MOB-REV-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-rev-01) | Presentar evidencia |
| [MOB-REV-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-rev-02) | Decidir sobre una revisión |
| [MOB-SOL-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-sol-01) | Nueva solicitud |
| [MOB-SOL-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-sol-02) | Detalle de solicitud y estimación |
| [MOB-SYS-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-sys-01) | Estado de conexión y acceso |
| [MOB-MKR-08](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mkr-08) | Perfil público del maker |
| [MOB-CAT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-cat-01) | Mis productos |
| [MOB-CAT-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-cat-02) | Editor de producto |
| [MOB-CAT-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-cat-03) | Detalle público del producto |
| [MOB-CAT-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-cat-04) | Confirmar pedido de producto |
| [MOB-CHAT-00](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-chat-00) | Conversaciones de pedidos |
| [MOB-AUTH-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-auth-03) | Cerrar sesión |
| [MOB-MKR-05](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mkr-05) | Habilitar perfil de maker |
| [MOB-SOL-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-sol-03) | Revisar y publicar solicitud |
| [MOB-SOL-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-sol-04) | Solicitud enviada |
| [MOB-MKR-06](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mkr-06) | Detalle de invitación |
| [MOB-MKR-07](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mkr-07) | Rechazar invitación |
| [MOB-OFE-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ofe-04) | La oferta tiene una nueva versión |
| [MOB-PED-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ped-02) | Producción del pedido |
| [MOB-PED-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ped-03) | Confirmar avance de producción |
| [MOB-REV-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-rev-03) | Presentar revisión al cliente |
| [MOB-REV-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-rev-04) | Confirmar aprobación |
| [MOB-REV-05](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-rev-05) | Enviar observaciones |
| [MOB-ENT-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ent-03) | Confirmar coordinación |
| [MOB-ENT-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ent-04) | Recepción registrada |
| [MOB-MEM-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mem-04) | Mis compras de membresía |
| [MOB-MEM-05](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mem-05) | Membresía acreditada |
| [MOB-MEM-06](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mem-06) | Pago rechazado |
| [MOB-MEM-07](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mem-07) | Checkout interrumpido |
| [MOB-MEM-08](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mem-08) | Verificación demorada |
| [MOB-ARC-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-arc-01) | Detalle de archivo privado |
| [MOB-ARC-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-arc-02) | Retirar archivo |
| [MOB-CHAT-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-chat-02) | Mensaje pendiente de envío |
| [MOB-SOL-05](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-sol-05) | Cómo se calculó la estimación |
| [MOB-HIS-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-his-02) | Historial del pedido |

## Ajustes visuales pendientes

Revisar los mocks de perfil público, productos, confirmación directa, bandeja de conversaciones y estados alternativos contra sus contratos. Las asociaciones RF, CU y pruebas están en [la matriz funcional](/3daltoque-docs/specs/02-matriz-de-cobertura/).
