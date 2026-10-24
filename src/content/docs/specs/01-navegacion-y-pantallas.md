---
title: "Navegación y pantallas"
---

# Navegación y pantallas

Fecha: 17 de octubre de 2026.

El inventario conserva WEB-MEM-01, WEB-MEM-02, WEB-MEM-03, WEB-ADM-MEM-01 y MOB-MEM-01 del documento de prototipos. Los nuevos IDs identifican pantallas, paneles o superficies del flujo. Las rutas representan una propuesta de navegación; Mobile utiliza sus equivalentes en el navigator elegido.

## Vistas de referencia

Exportaciones de Figma del 23 de octubre de 2026. Cada captura incluye el acceso al frame original y a su spec. La vista previa permite recorrer la imagen completa y abrirla en tamaño original.

<div class="view-previews">

<div class="view-preview view-preview--web">

#### Web · Nueva solicitud

Carga del STL, datos de la pieza y acceso a la revisión de la solicitud.

<div class="view-preview__viewport" tabindex="0" role="region" aria-label="Captura de Web · Nueva solicitud">

![WEB-SOL-01 · Carga del STL, datos de la pieza y acceso a la revisión de la solicitud.](/3daltoque-docs/documentos/bec86659d33a-vista-web-solicitud.png)

</div>

[WEB-SOL-01 en Figma](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=10-1906) · [Abrir captura completa](/3daltoque-docs/documentos/bec86659d33a-vista-web-solicitud.png) · [Consultar spec](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/)

</div>

<div class="view-preview view-preview--mobile">

#### Mobile · Nueva solicitud

Formulario de solicitud y navegación principal en Mobile.

<div class="view-preview__viewport" tabindex="0" role="region" aria-label="Captura de Mobile · Nueva solicitud">

![MOB-SOL-01 · Formulario de solicitud y navegación principal en Mobile.](/3daltoque-docs/documentos/cc62b202a1bb-mobile-request.png)

</div>

[MOB-SOL-01 en Figma](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=10-3341) · [Abrir captura completa](/3daltoque-docs/documentos/cc62b202a1bb-mobile-request.png) · [Consultar spec](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/)

</div>

<div class="view-preview view-preview--mobile">

#### Mobile · Búsqueda de makers

Filtros, ubicación de referencia y lista de candidatos.

<div class="view-preview__viewport" tabindex="0" role="region" aria-label="Captura de Mobile · Búsqueda de makers">

![MOB-BUS-01 · Filtros, ubicación de referencia y lista de candidatos.](/3daltoque-docs/documentos/849429e79cb7-vista-mobile-busqueda.png)

</div>

[MOB-BUS-01 en Figma](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=10-2220) · [Abrir captura completa](/3daltoque-docs/documentos/849429e79cb7-vista-mobile-busqueda.png) · [Consultar spec](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/)

</div>

</div>

## Inventario

Las fichas se agrupan por plataforma y tarea. Cada acordeón conserva los identificadores, rutas, actores, specs y estados de sus pantallas.

### Web

<details class="doc-accordion">
<summary><span>Acceso y perfiles</span><span class="doc-accordion__count">5 fichas</span></summary>
<div class="doc-accordion__body">

<a id="web-auth-01"></a>

#### WEB-AUTH-01 · Acceso

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Visitante / usuario |
| Ruta lógica propuesta | /ingresar |
| Specs | [F01](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-auth-02"></a>

#### WEB-AUTH-02 · Registro

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Visitante / usuario |
| Ruta lógica propuesta | /registro |
| Specs | [F01](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-cli-01"></a>

#### WEB-CLI-01 · Perfil de cliente

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Cliente |
| Ruta lógica propuesta | /mi-perfil |
| Specs | [F02](/3daltoque-docs/specs/f02-gestion-de-perfil-de-cliente/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-mkr-01"></a>

#### WEB-MKR-01 · Perfil y capacidades maker

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Maker |
| Ruta lógica propuesta | /maker/perfil |
| Specs | [F03](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-mkr-02"></a>

#### WEB-MKR-02 · Portfolio

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Maker |
| Ruta lógica propuesta | /maker/portfolio |
| Specs | [F04](/3daltoque-docs/specs/f04-portfolio-del-maker/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Solicitudes y búsqueda</span><span class="doc-accordion__count">3 fichas</span></summary>
<div class="doc-accordion__body">

<a id="web-bus-01"></a>

#### WEB-BUS-01 · Mapa y lista de candidatos

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | /buscar |
| Specs | [F07](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-sol-01"></a>

#### WEB-SOL-01 · Nueva solicitud

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Cliente |
| Ruta lógica propuesta | /solicitudes/nueva |
| Specs | [F05](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/), [F06](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-sol-02"></a>

#### WEB-SOL-02 · Detalle de solicitud y estimación

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Cliente |
| Ruta lógica propuesta | /solicitudes/:id |
| Specs | [F06](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Invitaciones y ofertas</span><span class="doc-accordion__count">4 fichas</span></summary>
<div class="doc-accordion__body">

<a id="web-mkr-03"></a>

#### WEB-MKR-03 · Invitaciones recibidas

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Maker |
| Ruta lógica propuesta | /maker/solicitudes |
| Specs | [F08](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-ofe-01"></a>

#### WEB-OFE-01 · Comparación de ofertas

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Cliente |
| Ruta lógica propuesta | /solicitudes/:id/ofertas |
| Specs | [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/), [F10](/3daltoque-docs/specs/f10-confirmacion-de-oferta/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-ofe-02"></a>

#### WEB-OFE-02 · Preparar oferta

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Maker |
| Ruta lógica propuesta | /invitaciones/:id/oferta |
| Specs | [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-ofe-03"></a>

#### WEB-OFE-03 · Confirmar versión de oferta

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Cliente |
| Ruta lógica propuesta | /ofertas/:id/confirmar |
| Specs | [F10](/3daltoque-docs/specs/f10-confirmacion-de-oferta/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Producción y revisión</span><span class="doc-accordion__count">4 fichas</span></summary>
<div class="doc-accordion__body">

<a id="web-mkr-04"></a>

#### WEB-MKR-04 · Cola del maker

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Maker |
| Ruta lógica propuesta | /maker/pedidos |
| Specs | [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-ped-01"></a>

#### WEB-PED-01 · Seguimiento de pedido

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | /pedidos/:id |
| Specs | [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-rev-01"></a>

#### WEB-REV-01 · Presentar evidencia

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Maker |
| Ruta lógica propuesta | /pedidos/:id/evidencia |
| Specs | [F15](/3daltoque-docs/specs/f15-evidencia-previa-a-la-entrega/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-rev-02"></a>

#### WEB-REV-02 · Decidir sobre una revisión

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Cliente |
| Ruta lógica propuesta | /pedidos/:id/revision/:revision |
| Specs | [F22](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Entrega y reputación</span><span class="doc-accordion__count">3 fichas</span></summary>
<div class="doc-accordion__body">

<a id="web-ent-01"></a>

#### WEB-ENT-01 · Coordinar encuentro

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | /pedidos/:id/entrega |
| Specs | [F16](/3daltoque-docs/specs/f16-entrega-en-nodo-amigo/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-ent-02"></a>

#### WEB-ENT-02 · Registrar recepción

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | /entregas/:id/confirmar |
| Specs | [F17](/3daltoque-docs/specs/f17-validacion-de-recepcion/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-rep-01"></a>

#### WEB-REP-01 · Valoración

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | /pedidos/:id/valoracion |
| Specs | [F18](/3daltoque-docs/specs/f18-reputacion-bidireccional/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Membresía y pagos</span><span class="doc-accordion__count">3 fichas</span></summary>
<div class="doc-accordion__body">

<a id="web-mem-01"></a>

#### WEB-MEM-01 · Panel de membresía

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Maker |
| Ruta lógica propuesta | /maker/membresia |
| Specs | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-mem-02"></a>

#### WEB-MEM-02 · Compra o renovación

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Maker |
| Ruta lógica propuesta | /maker/membresia/comprar |
| Specs | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-mem-03"></a>

#### WEB-MEM-03 · Retorno del checkout

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Maker |
| Ruta lógica propuesta | /maker/membresia/retorno |
| Specs | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Mensajes, avisos e historial</span><span class="doc-accordion__count">4 fichas</span></summary>
<div class="doc-accordion__body">

<a id="web-chat-01"></a>

#### WEB-CHAT-01 · Conversación del pedido

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | /pedidos/:id/conversacion |
| Specs | [F13](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-his-01"></a>

#### WEB-HIS-01 · Historial

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | /actividad |
| Specs | [F19](/3daltoque-docs/specs/f19-historial-de-pedidos/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-not-01"></a>

#### WEB-NOT-01 · Bandeja de avisos

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | /notificaciones |
| Specs | [F14](/3daltoque-docs/specs/f14-notificaciones/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-sys-01"></a>

#### WEB-SYS-01 · Estado de conexión y acceso

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | Contenedor global |
| Specs | [F24](/3daltoque-docs/specs/f24-api-comun-y-sincronizacion/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Administración</span><span class="doc-accordion__count">3 fichas</span></summary>
<div class="doc-accordion__body">

<a id="web-adm-01"></a>

#### WEB-ADM-01 · Soporte y operación

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Administración |
| Ruta lógica propuesta | /admin/soporte |
| Specs | [F20](/3daltoque-docs/specs/f20-panel-de-administracion/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-adm-02"></a>

#### WEB-ADM-02 · Reporte de actividad

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Administración |
| Ruta lógica propuesta | /admin/actividad |
| Specs | [F21](/3daltoque-docs/specs/f21-reporte-de-actividad/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="web-adm-mem-01"></a>

#### WEB-ADM-MEM-01 · Plan y programa fundador

| Dato | Definición |
| --- | --- |
| Canal | Web |
| Actores | Administración |
| Ruta lógica propuesta | /admin/membresia |
| Specs | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F20](/3daltoque-docs/specs/f20-panel-de-administracion/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

</div>
</details>


### Mobile

<details class="doc-accordion">
<summary><span>Acceso y perfiles</span><span class="doc-accordion__count">5 fichas</span></summary>
<div class="doc-accordion__body">

<a id="mob-auth-01"></a>

#### MOB-AUTH-01 · Acceso

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Visitante / usuario |
| Ruta lógica propuesta | /ingresar |
| Specs | [F01](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-auth-02"></a>

#### MOB-AUTH-02 · Registro

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Visitante / usuario |
| Ruta lógica propuesta | /registro |
| Specs | [F01](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-cli-01"></a>

#### MOB-CLI-01 · Perfil de cliente

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Cliente |
| Ruta lógica propuesta | /mi-perfil |
| Specs | [F02](/3daltoque-docs/specs/f02-gestion-de-perfil-de-cliente/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-mkr-01"></a>

#### MOB-MKR-01 · Perfil y capacidades maker

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Maker |
| Ruta lógica propuesta | /maker/perfil |
| Specs | [F03](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-mkr-02"></a>

#### MOB-MKR-02 · Portfolio

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Maker |
| Ruta lógica propuesta | /maker/portfolio |
| Specs | [F04](/3daltoque-docs/specs/f04-portfolio-del-maker/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Solicitudes y búsqueda</span><span class="doc-accordion__count">3 fichas</span></summary>
<div class="doc-accordion__body">

<a id="mob-bus-01"></a>

#### MOB-BUS-01 · Mapa y lista de candidatos

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | /buscar |
| Specs | [F07](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-sol-01"></a>

#### MOB-SOL-01 · Nueva solicitud

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Cliente |
| Ruta lógica propuesta | /solicitudes/nueva |
| Specs | [F05](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/), [F06](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-sol-02"></a>

#### MOB-SOL-02 · Detalle de solicitud y estimación

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Cliente |
| Ruta lógica propuesta | /solicitudes/:id |
| Specs | [F06](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Invitaciones y ofertas</span><span class="doc-accordion__count">4 fichas</span></summary>
<div class="doc-accordion__body">

<a id="mob-mkr-03"></a>

#### MOB-MKR-03 · Invitaciones recibidas

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Maker |
| Ruta lógica propuesta | /maker/solicitudes |
| Specs | [F08](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-ofe-01"></a>

#### MOB-OFE-01 · Comparación de ofertas

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Cliente |
| Ruta lógica propuesta | /solicitudes/:id/ofertas |
| Specs | [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/), [F10](/3daltoque-docs/specs/f10-confirmacion-de-oferta/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-ofe-02"></a>

#### MOB-OFE-02 · Preparar oferta

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Maker |
| Ruta lógica propuesta | /invitaciones/:id/oferta |
| Specs | [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-ofe-03"></a>

#### MOB-OFE-03 · Confirmar versión de oferta

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Cliente |
| Ruta lógica propuesta | /ofertas/:id/confirmar |
| Specs | [F10](/3daltoque-docs/specs/f10-confirmacion-de-oferta/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Producción y revisión</span><span class="doc-accordion__count">4 fichas</span></summary>
<div class="doc-accordion__body">

<a id="mob-mkr-04"></a>

#### MOB-MKR-04 · Cola del maker

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Maker |
| Ruta lógica propuesta | /maker/pedidos |
| Specs | [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-ped-01"></a>

#### MOB-PED-01 · Seguimiento de pedido

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | /pedidos/:id |
| Specs | [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-rev-01"></a>

#### MOB-REV-01 · Presentar evidencia

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Maker |
| Ruta lógica propuesta | /pedidos/:id/evidencia |
| Specs | [F15](/3daltoque-docs/specs/f15-evidencia-previa-a-la-entrega/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-rev-02"></a>

#### MOB-REV-02 · Decidir sobre una revisión

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Cliente |
| Ruta lógica propuesta | /pedidos/:id/revision/:revision |
| Specs | [F22](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Entrega y reputación</span><span class="doc-accordion__count">3 fichas</span></summary>
<div class="doc-accordion__body">

<a id="mob-ent-01"></a>

#### MOB-ENT-01 · Coordinar encuentro

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | /pedidos/:id/entrega |
| Specs | [F16](/3daltoque-docs/specs/f16-entrega-en-nodo-amigo/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-ent-02"></a>

#### MOB-ENT-02 · Registrar recepción

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | /entregas/:id/confirmar |
| Specs | [F17](/3daltoque-docs/specs/f17-validacion-de-recepcion/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-rep-01"></a>

#### MOB-REP-01 · Valoración

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | /pedidos/:id/valoracion |
| Specs | [F18](/3daltoque-docs/specs/f18-reputacion-bidireccional/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Membresía y pagos</span><span class="doc-accordion__count">3 fichas</span></summary>
<div class="doc-accordion__body">

<a id="mob-mem-01"></a>

#### MOB-MEM-01 · Panel de membresía

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Maker |
| Ruta lógica propuesta | /maker/membresia |
| Specs | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-mem-02"></a>

#### MOB-MEM-02 · Compra o renovación

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Maker |
| Ruta lógica propuesta | /maker/membresia/comprar |
| Specs | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-mem-03"></a>

#### MOB-MEM-03 · Retorno del checkout

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Maker |
| Ruta lógica propuesta | /maker/membresia/retorno |
| Specs | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

</div>
</details>

<details class="doc-accordion">
<summary><span>Mensajes, avisos e historial</span><span class="doc-accordion__count">4 fichas</span></summary>
<div class="doc-accordion__body">

<a id="mob-chat-01"></a>

#### MOB-CHAT-01 · Conversación del pedido

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | /pedidos/:id/conversacion |
| Specs | [F13](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-his-01"></a>

#### MOB-HIS-01 · Historial

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | /actividad |
| Specs | [F19](/3daltoque-docs/specs/f19-historial-de-pedidos/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-not-01"></a>

#### MOB-NOT-01 · Bandeja de avisos

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | /notificaciones |
| Specs | [F14](/3daltoque-docs/specs/f14-notificaciones/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

<a id="mob-sys-01"></a>

#### MOB-SYS-01 · Estado de conexión y acceso

| Dato | Definición |
| --- | --- |
| Canal | Mobile |
| Actores | Participantes autorizados |
| Ruta lógica propuesta | Contenedor global |
| Specs | [F24](/3daltoque-docs/specs/f24-api-comun-y-sincronizacion/) |
| Estados | Carga, contenido, vacío, error, permiso y recuperación; agregar pendiente externo o conflicto cuando aplique. |

</div>
</details>


## Navegación por rol

| Perfil | Recorrido principal |
| --- | --- |
| Cliente | Acceso → perfil → solicitud → ofertas → confirmación → pedido/chat → revisión → entrega → actividad. |
| Maker | Acceso → capacidades/habilitación → membresía → invitaciones → ofertas → cola → pedido/evidencia → entrega. |
| Administración | Acceso autorizado → soporte → configuración del plan/fundadores → conciliación y acciones permitidas → reportes. |

## Condiciones de navegación

Las rutas privadas recuperan identidad y capacidades antes de mostrar acciones. El acceso vencido restringe compromisos nuevos y conserva el recorrido de pedidos aceptados. Retorno de checkout recupera el estado verificado de la compra. Enlaces directos revalidan recurso y permisos en el backend.

Los prototipos deben incluir carga, vacío, error, éxito y recuperación; el mapa tiene una alternativa textual y los formularios conservan los datos permitidos. Ver [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## Vistas complementarias y cierre por tarea

El [inventario de vistas y flujos](/3daltoque-docs/specs/03-inventario-de-vistas-y-flujos/) agrega confirmaciones, resultados y formularios derivados de los RF y CU. Conserva los identificadores del catálogo inicial y detalla 55 composiciones complementarias, con sus enlaces de Figma y decisiones pendientes. Los [datos estructurados](/3daltoque-docs/documentos/b06f2f01e8a2-vistas-complementarias.json) mantienen la relación RF → CU → vista y el trabajo restante por funcionalidad.
