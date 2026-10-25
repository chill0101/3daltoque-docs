---
title: "Navegación y pantallas"
---

# Navegación y pantallas

Fecha: 25 de octubre de 2026.

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

## Contratos funcionales agregados

Doce contratos de navegación completan catálogo, perfil público e inbox de pedidos en Web y Mobile. Los mocks existentes conservan sus 110 composiciones.

<details class="doc-accordion">
<summary>Contratos Web</summary>

<a id="web-mkr-08"></a>

### WEB-MKR-08 · Perfil público del maker

| Dato | Definición |
| --- | --- |
| Actor | Visitante / cliente |
| Ruta lógica | `/makers/:id` |
| Funcionalidades | [F03](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/), [F04](/3daltoque-docs/specs/f04-portfolio-del-maker/), [F18](/3daltoque-docs/specs/f18-reputacion-bidireccional/), [F25](/3daltoque-docs/specs/f25-catalogo-de-productos-del-maker/) |
| Contrato | Consultar capacidades, zona pública, catálogo fijo, portfolio y reputación; abrir un producto o trabajo publicado. |
| Estados | Carga, vacío, contenido, validación por campo, sin permiso, conflicto de versión, desconexión y recuperación. |
| Diseño | Contrato funcional documentado; mock pendiente |

<a id="web-cat-01"></a>

### WEB-CAT-01 · Mis productos

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Ruta lógica | `/maker/productos` |
| Funcionalidades | [F25](/3daltoque-docs/specs/f25-catalogo-de-productos-del-maker/) |
| Contrato | Listar productos propios por estado; crear, editar, publicar, pausar o retirar según capacidad devuelta. |
| Estados | Carga, vacío, contenido, validación por campo, sin permiso, conflicto de versión, desconexión y recuperación. |
| Diseño | Contrato funcional documentado; mock pendiente |

<a id="web-cat-02"></a>

### WEB-CAT-02 · Editor de producto

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Ruta lógica | `/maker/productos/:id/editar` |
| Funcionalidades | [F25](/3daltoque-docs/specs/f25-catalogo-de-productos-del-maker/) |
| Contrato | Editar configuración fija, precio, moneda, cantidades, plazo, condiciones y archivos; mostrar validación y versión en conflicto. |
| Estados | Carga, vacío, contenido, validación por campo, sin permiso, conflicto de versión, desconexión y recuperación. |
| Diseño | Contrato funcional documentado; mock pendiente |

<a id="web-cat-03"></a>

### WEB-CAT-03 · Detalle público del producto

| Dato | Definición |
| --- | --- |
| Actor | Visitante / cliente |
| Ruta lógica | `/productos/:id` |
| Funcionalidades | [F25](/3daltoque-docs/specs/f25-catalogo-de-productos-del-maker/) |
| Contrato | Presentar condiciones publicadas, cantidad admitida y disponibilidad; autenticar al cliente antes de confirmar. |
| Estados | Carga, vacío, contenido, validación por campo, sin permiso, conflicto de versión, desconexión y recuperación. |
| Diseño | Contrato funcional documentado; mock pendiente |

<a id="web-cat-04"></a>

### WEB-CAT-04 · Confirmar pedido de producto

| Dato | Definición |
| --- | --- |
| Actor | Cliente |
| Ruta lógica | `/productos/:id/confirmar` |
| Funcionalidades | [F25](/3daltoque-docs/specs/f25-catalogo-de-productos-del-maker/) |
| Contrato | Revisar versión, cantidad, precio unitario, total, moneda, plazo y condiciones; conservar clave ante incertidumbre y abrir pedido confirmado. |
| Estados | Carga, vacío, contenido, validación por campo, sin permiso, conflicto de versión, desconexión y recuperación. |
| Diseño | Contrato funcional documentado; mock pendiente |

<a id="web-chat-00"></a>

### WEB-CHAT-00 · Conversaciones de pedidos

| Dato | Definición |
| --- | --- |
| Actor | Cliente / maker |
| Ruta lógica | `/conversaciones` |
| Funcionalidades | [F13](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/) |
| Contrato | Bandeja propia paginada con pedido y último mensaje; abrir conversación autorizada, resolver vacío y recuperar conexión. |
| Estados | Carga, vacío, contenido, validación por campo, sin permiso, conflicto de versión, desconexión y recuperación. |
| Diseño | Contrato funcional documentado; mock pendiente |

</details>

<details class="doc-accordion">
<summary>Contratos Mobile</summary>

<a id="mob-mkr-08"></a>

### MOB-MKR-08 · Perfil público del maker

| Dato | Definición |
| --- | --- |
| Actor | Visitante / cliente |
| Ruta lógica | `/makers/:id` |
| Funcionalidades | [F03](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/), [F04](/3daltoque-docs/specs/f04-portfolio-del-maker/), [F18](/3daltoque-docs/specs/f18-reputacion-bidireccional/), [F25](/3daltoque-docs/specs/f25-catalogo-de-productos-del-maker/) |
| Contrato | Consultar capacidades, zona pública, catálogo fijo, portfolio y reputación; abrir un producto o trabajo publicado. |
| Estados | Carga, vacío, contenido, validación por campo, sin permiso, conflicto de versión, desconexión y recuperación. |
| Diseño | Contrato funcional documentado; mock pendiente |

<a id="mob-cat-01"></a>

### MOB-CAT-01 · Mis productos

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Ruta lógica | `/maker/productos` |
| Funcionalidades | [F25](/3daltoque-docs/specs/f25-catalogo-de-productos-del-maker/) |
| Contrato | Listar productos propios por estado; crear, editar, publicar, pausar o retirar según capacidad devuelta. |
| Estados | Carga, vacío, contenido, validación por campo, sin permiso, conflicto de versión, desconexión y recuperación. |
| Diseño | Contrato funcional documentado; mock pendiente |

<a id="mob-cat-02"></a>

### MOB-CAT-02 · Editor de producto

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Ruta lógica | `/maker/productos/:id/editar` |
| Funcionalidades | [F25](/3daltoque-docs/specs/f25-catalogo-de-productos-del-maker/) |
| Contrato | Editar configuración fija, precio, moneda, cantidades, plazo, condiciones y archivos; mostrar validación y versión en conflicto. |
| Estados | Carga, vacío, contenido, validación por campo, sin permiso, conflicto de versión, desconexión y recuperación. |
| Diseño | Contrato funcional documentado; mock pendiente |

<a id="mob-cat-03"></a>

### MOB-CAT-03 · Detalle público del producto

| Dato | Definición |
| --- | --- |
| Actor | Visitante / cliente |
| Ruta lógica | `/productos/:id` |
| Funcionalidades | [F25](/3daltoque-docs/specs/f25-catalogo-de-productos-del-maker/) |
| Contrato | Presentar condiciones publicadas, cantidad admitida y disponibilidad; autenticar al cliente antes de confirmar. |
| Estados | Carga, vacío, contenido, validación por campo, sin permiso, conflicto de versión, desconexión y recuperación. |
| Diseño | Contrato funcional documentado; mock pendiente |

<a id="mob-cat-04"></a>

### MOB-CAT-04 · Confirmar pedido de producto

| Dato | Definición |
| --- | --- |
| Actor | Cliente |
| Ruta lógica | `/productos/:id/confirmar` |
| Funcionalidades | [F25](/3daltoque-docs/specs/f25-catalogo-de-productos-del-maker/) |
| Contrato | Revisar versión, cantidad, precio unitario, total, moneda, plazo y condiciones; conservar clave ante incertidumbre y abrir pedido confirmado. |
| Estados | Carga, vacío, contenido, validación por campo, sin permiso, conflicto de versión, desconexión y recuperación. |
| Diseño | Contrato funcional documentado; mock pendiente |

<a id="mob-chat-00"></a>

### MOB-CHAT-00 · Conversaciones de pedidos

| Dato | Definición |
| --- | --- |
| Actor | Cliente / maker |
| Ruta lógica | `/conversaciones` |
| Funcionalidades | [F13](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/) |
| Contrato | Bandeja propia paginada con pedido y último mensaje; abrir conversación autorizada, resolver vacío y recuperar conexión. |
| Estados | Carga, vacío, contenido, validación por campo, sin permiso, conflicto de versión, desconexión y recuperación. |
| Diseño | Contrato funcional documentado; mock pendiente |

</details>

## Vistas complementarias conservadas

Cada ficha conserva el enlace al mock de referencia. El contrato de su funcionalidad establece los permisos y reglas vigentes.

<details class="doc-accordion">
<summary>Vistas complementarias Web</summary>

<a id="web-auth-03"></a>

### WEB-AUTH-03 · Cerrar sesión

| Dato | Definición |
| --- | --- |
| Actor | Usuario |
| Funcionalidades | [F01](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2543) |
| Descripción del mock | Se cerrará la sesión de esta cuenta en el dispositivo. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-mkr-05"></a>

### WEB-MKR-05 · Habilitar perfil de maker

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F03](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/), [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2557) |
| Descripción del mock | Revisá las capacidades y el beneficio inicial antes de habilitar el perfil. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-sol-03"></a>

### WEB-SOL-03 · Revisar y publicar solicitud

| Dato | Definición |
| --- | --- |
| Actor | Cliente |
| Funcionalidades | [F05](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/), [F07](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2623) |
| Descripción del mock | Confirmá los parámetros de impresión y la ubicación que se usarán para buscar makers. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-sol-04"></a>

### WEB-SOL-04 · Solicitud enviada

| Dato | Definición |
| --- | --- |
| Actor | Cliente |
| Funcionalidades | [F05](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/), [F08](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/), [F14](/3daltoque-docs/specs/f14-notificaciones/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2730) |
| Descripción del mock | Consultá el estado de la ronda de invitaciones y las respuestas recibidas. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-mkr-06"></a>

### WEB-MKR-06 · Detalle de invitación

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F08](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/), [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2793) |
| Descripción del mock | Evaluá la pieza, los parámetros y el plazo de respuesta antes de cotizar. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-mkr-07"></a>

### WEB-MKR-07 · Rechazar invitación

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2864) |
| Descripción del mock | Confirmá que querés rechazar esta invitación de cotización. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-ofe-04"></a>

### WEB-OFE-04 · La oferta tiene una nueva versión

| Dato | Definición |
| --- | --- |
| Actor | Cliente |
| Funcionalidades | [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/), [F10](/3daltoque-docs/specs/f10-confirmacion-de-oferta/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2881) |
| Descripción del mock | Revisá las condiciones actualizadas antes de confirmar el pedido. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-ped-02"></a>

### WEB-PED-02 · Producción del pedido

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/), [F15](/3daltoque-docs/specs/f15-evidencia-previa-a-la-entrega/), [F13](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-2944) |
| Descripción del mock | Consultá el avance y las acciones autorizadas para este pedido. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-ped-03"></a>

### WEB-PED-03 · Confirmar avance de producción

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3032) |
| Descripción del mock | Revisá el cambio antes de registrarlo en el historial. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-rev-03"></a>

### WEB-REV-03 · Presentar revisión al cliente

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F15](/3daltoque-docs/specs/f15-evidencia-previa-a-la-entrega/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3057) |
| Descripción del mock | Verificá los archivos y el comentario de la revisión que recibirá el cliente. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-rev-04"></a>

### WEB-REV-04 · Confirmar aprobación

| Dato | Definición |
| --- | --- |
| Actor | Cliente |
| Funcionalidades | [F22](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/), [F16](/3daltoque-docs/specs/f16-entrega-en-nodo-amigo/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3082) |
| Descripción del mock | La aprobación corresponde a la revisión que acabás de consultar. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-rev-05"></a>

### WEB-REV-05 · Enviar observaciones

| Dato | Definición |
| --- | --- |
| Actor | Cliente |
| Funcionalidades | [F22](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3104) |
| Descripción del mock | Confirmá las observaciones que recibirá el maker sobre esta revisión. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-ent-03"></a>

### WEB-ENT-03 · Confirmar coordinación

| Dato | Definición |
| --- | --- |
| Actor | Participante |
| Funcionalidades | [F16](/3daltoque-docs/specs/f16-entrega-en-nodo-amigo/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3134) |
| Descripción del mock | Revisá el punto y el horario propuestos para la entrega personal. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-ent-04"></a>

### WEB-ENT-04 · Recepción registrada

| Dato | Definición |
| --- | --- |
| Actor | Participante |
| Funcionalidades | [F17](/3daltoque-docs/specs/f17-validacion-de-recepcion/), [F19](/3daltoque-docs/specs/f19-historial-de-pedidos/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3156) |
| Descripción del mock | El pedido muestra el resultado verificado del mecanismo de recepción configurado. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-mem-04"></a>

### WEB-MEM-04 · Mis compras de membresía

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3219) |
| Descripción del mock | Consultá las compras de abono y su estado verificado. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-mem-05"></a>

### WEB-MEM-05 · Membresía acreditada

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3294) |
| Descripción del mock | El pago confirmado habilitó el período de acceso correspondiente. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-mem-06"></a>

### WEB-MEM-06 · Pago rechazado

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3360) |
| Descripción del mock | Consultá el resultado de la compra y elegí cómo continuar. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-mem-07"></a>

### WEB-MEM-07 · Checkout interrumpido

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3423) |
| Descripción del mock | Recuperá el estado de la compra antes de iniciar otro pago. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-mem-08"></a>

### WEB-MEM-08 · Verificación demorada

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F24](/3daltoque-docs/specs/f24-api-comun-y-sincronizacion/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3483) |
| Descripción del mock | La compra conserva su referencia mientras se recupera el resultado del proveedor. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-arc-01"></a>

### WEB-ARC-01 · Detalle de archivo privado

| Dato | Definición |
| --- | --- |
| Actor | Participante autorizado |
| Funcionalidades | [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3543) |
| Descripción del mock | Consultá el archivo dentro del recurso que autoriza su acceso. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-arc-02"></a>

### WEB-ARC-02 · Retirar archivo

| Dato | Definición |
| --- | --- |
| Actor | Propietario autorizado |
| Funcionalidades | [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3609) |
| Descripción del mock | Revisá el efecto del retiro sobre el recurso vinculado. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-chat-02"></a>

### WEB-CHAT-02 · Mensaje pendiente de envío

| Dato | Definición |
| --- | --- |
| Actor | Participante |
| Funcionalidades | [F13](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/), [F24](/3daltoque-docs/specs/f24-api-comun-y-sincronizacion/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3631) |
| Descripción del mock | Conservá el mensaje mientras se recupera la conexión. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-sol-05"></a>

### WEB-SOL-05 · Cómo se calculó la estimación

| Dato | Definición |
| --- | --- |
| Actor | Cliente |
| Funcionalidades | [F06](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3694) |
| Descripción del mock | Consultá el rango orientativo y los supuestos de la solicitud vigente. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-his-02"></a>

### WEB-HIS-02 · Historial del pedido

| Dato | Definición |
| --- | --- |
| Actor | Participante autorizado |
| Funcionalidades | [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/), [F19](/3daltoque-docs/specs/f19-historial-de-pedidos/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3763) |
| Descripción del mock | Consultá los cambios y las referencias del pedido al que tenés acceso. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-adm-mem-02"></a>

### WEB-ADM-MEM-02 · Asignar beneficio fundador

| Dato | Definición |
| --- | --- |
| Actor | Administración |
| Funcionalidades | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F20](/3daltoque-docs/specs/f20-panel-de-administracion/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3842) |
| Descripción del mock | Comprobá la elegibilidad y confirmá la asignación con una razón auditable. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-adm-mem-03"></a>

### WEB-ADM-MEM-03 · Compras de membresía

| Dato | Definición |
| --- | --- |
| Actor | Administración |
| Funcionalidades | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F20](/3daltoque-docs/specs/f20-panel-de-administracion/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3916) |
| Descripción del mock | Consultá las compras autorizadas para soporte y conciliación. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-adm-mem-04"></a>

### WEB-ADM-MEM-04 · Detalle y conciliación de compra

| Dato | Definición |
| --- | --- |
| Actor | Administración |
| Funcionalidades | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F20](/3daltoque-docs/specs/f20-panel-de-administracion/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-3990) |
| Descripción del mock | Revisá el contexto del pago y el resultado de la última conciliación. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-adm-mem-05"></a>

### WEB-ADM-MEM-05 · Devolución autorizada del abono

| Dato | Definición |
| --- | --- |
| Actor | Administración |
| Funcionalidades | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F20](/3daltoque-docs/specs/f20-panel-de-administracion/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-4062) |
| Descripción del mock | Prepará la devolución de una compra de membresía que cumpla la política aplicable. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-adm-mem-06"></a>

### WEB-ADM-MEM-06 · Publicar versión del plan

| Dato | Definición |
| --- | --- |
| Actor | Administración |
| Funcionalidades | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F20](/3daltoque-docs/specs/f20-panel-de-administracion/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-4136) |
| Descripción del mock | Revisá los valores antes de publicar una nueva versión del plan. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-adm-03"></a>

### WEB-ADM-03 · Detalle de soporte

| Dato | Definición |
| --- | --- |
| Actor | Administración |
| Funcionalidades | [F20](/3daltoque-docs/specs/f20-panel-de-administracion/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-4164) |
| Descripción del mock | Consultá el recurso y prepará una acción dentro de las capacidades habilitadas. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="web-adm-04"></a>

### WEB-ADM-04 · Auditoría de plan y beneficios

| Dato | Definición |
| --- | --- |
| Actor | Administración |
| Funcionalidades | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F20](/3daltoque-docs/specs/f20-panel-de-administracion/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=72-4242) |
| Descripción del mock | Consultá cambios de configuración, asignaciones y operaciones autorizadas. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

</details>

<details class="doc-accordion">
<summary>Vistas complementarias Mobile</summary>

<a id="mob-auth-03"></a>

### MOB-AUTH-03 · Cerrar sesión

| Dato | Definición |
| --- | --- |
| Actor | Usuario |
| Funcionalidades | [F01](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2079) |
| Descripción del mock | Se cerrará la sesión de esta cuenta en el dispositivo. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-mkr-05"></a>

### MOB-MKR-05 · Habilitar perfil de maker

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F03](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/), [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2093) |
| Descripción del mock | Revisá las capacidades y el beneficio inicial antes de habilitar el perfil. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-sol-03"></a>

### MOB-SOL-03 · Revisar y publicar solicitud

| Dato | Definición |
| --- | --- |
| Actor | Cliente |
| Funcionalidades | [F05](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/), [F07](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2166) |
| Descripción del mock | Confirmá los parámetros de impresión y la ubicación que se usarán para buscar makers. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-sol-04"></a>

### MOB-SOL-04 · Solicitud enviada

| Dato | Definición |
| --- | --- |
| Actor | Cliente |
| Funcionalidades | [F05](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/), [F08](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/), [F14](/3daltoque-docs/specs/f14-notificaciones/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2272) |
| Descripción del mock | Consultá el estado de la ronda de invitaciones y las respuestas recibidas. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-mkr-06"></a>

### MOB-MKR-06 · Detalle de invitación

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F08](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/), [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2334) |
| Descripción del mock | Evaluá la pieza, los parámetros y el plazo de respuesta antes de cotizar. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-mkr-07"></a>

### MOB-MKR-07 · Rechazar invitación

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2404) |
| Descripción del mock | Confirmá que querés rechazar esta invitación de cotización. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-ofe-04"></a>

### MOB-OFE-04 · La oferta tiene una nueva versión

| Dato | Definición |
| --- | --- |
| Actor | Cliente |
| Funcionalidades | [F09](/3daltoque-docs/specs/f09-gestion-de-ofertas/), [F10](/3daltoque-docs/specs/f10-confirmacion-de-oferta/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2421) |
| Descripción del mock | Revisá las condiciones actualizadas antes de confirmar el pedido. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-ped-02"></a>

### MOB-PED-02 · Producción del pedido

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/), [F15](/3daltoque-docs/specs/f15-evidencia-previa-a-la-entrega/), [F13](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2483) |
| Descripción del mock | Consultá el avance y las acciones autorizadas para este pedido. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-ped-03"></a>

### MOB-PED-03 · Confirmar avance de producción

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2570) |
| Descripción del mock | Revisá el cambio antes de registrarlo en el historial. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-rev-03"></a>

### MOB-REV-03 · Presentar revisión al cliente

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F15](/3daltoque-docs/specs/f15-evidencia-previa-a-la-entrega/), [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2595) |
| Descripción del mock | Verificá los archivos y el comentario de la revisión que recibirá el cliente. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-rev-04"></a>

### MOB-REV-04 · Confirmar aprobación

| Dato | Definición |
| --- | --- |
| Actor | Cliente |
| Funcionalidades | [F22](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/), [F16](/3daltoque-docs/specs/f16-entrega-en-nodo-amigo/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2620) |
| Descripción del mock | La aprobación corresponde a la revisión que acabás de consultar. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-rev-05"></a>

### MOB-REV-05 · Enviar observaciones

| Dato | Definición |
| --- | --- |
| Actor | Cliente |
| Funcionalidades | [F22](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2642) |
| Descripción del mock | Confirmá las observaciones que recibirá el maker sobre esta revisión. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-ent-03"></a>

### MOB-ENT-03 · Confirmar coordinación

| Dato | Definición |
| --- | --- |
| Actor | Participante |
| Funcionalidades | [F16](/3daltoque-docs/specs/f16-entrega-en-nodo-amigo/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2672) |
| Descripción del mock | Revisá el punto y el horario propuestos para la entrega personal. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-ent-04"></a>

### MOB-ENT-04 · Recepción registrada

| Dato | Definición |
| --- | --- |
| Actor | Participante |
| Funcionalidades | [F17](/3daltoque-docs/specs/f17-validacion-de-recepcion/), [F19](/3daltoque-docs/specs/f19-historial-de-pedidos/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2694) |
| Descripción del mock | El pedido muestra el resultado verificado del mecanismo de recepción configurado. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-mem-04"></a>

### MOB-MEM-04 · Mis compras de membresía

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2756) |
| Descripción del mock | Consultá las compras de abono y su estado verificado. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-mem-05"></a>

### MOB-MEM-05 · Membresía acreditada

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2830) |
| Descripción del mock | El pago confirmado habilitó el período de acceso correspondiente. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-mem-06"></a>

### MOB-MEM-06 · Pago rechazado

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2895) |
| Descripción del mock | Consultá el resultado de la compra y elegí cómo continuar. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-mem-07"></a>

### MOB-MEM-07 · Checkout interrumpido

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-2957) |
| Descripción del mock | Recuperá el estado de la compra antes de iniciar otro pago. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-mem-08"></a>

### MOB-MEM-08 · Verificación demorada

| Dato | Definición |
| --- | --- |
| Actor | Maker |
| Funcionalidades | [F11](/3daltoque-docs/specs/f11-membresia-y-abono/), [F24](/3daltoque-docs/specs/f24-api-comun-y-sincronizacion/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-3016) |
| Descripción del mock | La compra conserva su referencia mientras se recupera el resultado del proveedor. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-arc-01"></a>

### MOB-ARC-01 · Detalle de archivo privado

| Dato | Definición |
| --- | --- |
| Actor | Participante autorizado |
| Funcionalidades | [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-3075) |
| Descripción del mock | Consultá el archivo dentro del recurso que autoriza su acceso. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-arc-02"></a>

### MOB-ARC-02 · Retirar archivo

| Dato | Definición |
| --- | --- |
| Actor | Propietario autorizado |
| Funcionalidades | [F23](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-3140) |
| Descripción del mock | Revisá el efecto del retiro sobre el recurso vinculado. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-chat-02"></a>

### MOB-CHAT-02 · Mensaje pendiente de envío

| Dato | Definición |
| --- | --- |
| Actor | Participante |
| Funcionalidades | [F13](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/), [F24](/3daltoque-docs/specs/f24-api-comun-y-sincronizacion/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-3162) |
| Descripción del mock | Conservá el mensaje mientras se recupera la conexión. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-sol-05"></a>

### MOB-SOL-05 · Cómo se calculó la estimación

| Dato | Definición |
| --- | --- |
| Actor | Cliente |
| Funcionalidades | [F06](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-3224) |
| Descripción del mock | Consultá el rango orientativo y los supuestos de la solicitud vigente. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

<a id="mob-his-02"></a>

### MOB-HIS-02 · Historial del pedido

| Dato | Definición |
| --- | --- |
| Actor | Participante autorizado |
| Funcionalidades | [F12](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/), [F19](/3daltoque-docs/specs/f19-historial-de-pedidos/) |
| Referencia de diseño | [Abrir mock](https://www.figma.com/design/PJTOrEKSxxiS2X4R4DImJn/3DAltoque?node-id=73-3292) |
| Descripción del mock | Consultá los cambios y las referencias del pedido al que tenés acceso. |
| Reglas vigentes | Consultar la spec y el caso de uso relacionados; los campos visuales existentes se conservan para la revisión de diseño. |

</details>
