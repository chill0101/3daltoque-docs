---
title: "Documento de funcionalidades"
---

# Documento de funcionalidades

**Proyecto:** 3DAltoque  
**Documento:** Planificación de Proyecto: Catálogo funcional  
**Equipo:** Bernardez, Cariaga y Ruiz  
**Versión:** 2.0  
**Fecha:** 25 de octubre de 2026

## 1. Propósito y fundamento

La plataforma reúne solicitudes personalizadas de impresión y pedidos directos de productos publicados por makers. Cada acuerdo conserva sus condiciones y continúa por seguimiento, conversación, producción, revisión expresa y entrega personal. La plataforma cobra el abono del maker, según [ADR-002](/3daltoque-docs/decisiones/modelo-comercial/). La ampliación y sus reglas están en [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/).

## 2. Actores y canales

| Actor | Intervención |
| --- | --- |
| Cliente | Mantiene su perfil, publica solicitudes, acepta ofertas o productos, conversa en pedidos, revisa, recibe y valora. |
| Maker | Mantiene perfil, impresoras, capacidades, portfolio y catálogo; cotiza, fabrica, entrega, conversa y gestiona su abono. |
| Administración | Configura, atiende soporte, modera y consulta indicadores con capacidades específicas y auditoría. |
| Sistema y proveedores | Validan permisos, calculan resultados, conservan hechos y procesan integraciones autorizadas. |

Web y React Native cubren los recorridos de cliente y maker con la misma API. Administración utiliza Web. Las vistas de Figma permanecen como mocks de referencia.

## 3. Recorridos y reglas

### Solicitud personalizada

El cliente carga el STL y especificaciones; el sistema valida, estima y selecciona makers compatibles. Las ofertas conservan versiones; una contraoferta aceptada por el maker publica otra versión. El cliente decide la contratación y confirma un único pedido por solicitud.

### Producto publicado por el maker

El maker publica configuración, precio unitario, moneda, cantidades, plazo y condiciones. El cliente confirma directamente una versión vigente. El servidor calcula el total y conserva solicitud de catálogo, oferta de referencia, pedido y conversación en una transacción.

### Pedido, comunicación y entrega

El pedido confirmado habilita su conversación. El maker informa avance y presenta evidencia; el cliente aprueba expresamente la revisión. Ambas partes acuerdan punto y horario y el cliente confirma la recepción. La reputación se registra después del cierre.

### Acceso del maker

El maker utiliza un plan mensual prepago con renovación manual. La primera habilitación concede un único beneficio general o fundador, con duraciones configurables. El vencimiento restringe trabajos nuevos y mantiene la operativa de pedidos existentes.

## 4. Catálogo general

| ID | Funcionalidad | Tipo y canal | Actores | Referencias |
| --- | --- | --- | --- | --- |
| F01 | [Registro e inicio de sesión](#f01) | ABM. Web y Mobile; administración en Web. | Cliente, maker y administración autorizada. | RF-01.1, RF-01.4, RF-01.5; CU-13 |
| F02 | [Gestión de perfil de cliente](#f02) | ABM. Web y Mobile. | Cliente titular; administración con permiso específico. | RF-01.3, RF-09.1; CU-22 |
| F03 | [Gestión de perfil de maker](#f03) | ABM. Web y Mobile. | Maker titular; administración con intervención autorizada. | RF-01.2, RF-12.2; CU-09, CU-21 |
| F04 | [Portfolio del maker](#f04) | ABM. Web y Mobile; moderación en Web. | Maker; visitantes autorizados y administración según política. | RF-14.1, RF-14.2; CU-15 |
| F05 | [Alta de solicitud de impresión](#f05) | Lógica de negocio. Web y Mobile. | Cliente. | RF-02.1, RF-02.2, RF-02.3; CU-01 |
| F06 | [Cotización estimativa inicial](#f06) | Lógica de negocio. Web y Mobile. | Cliente; sistema de análisis. | RF-02.5; CU-01 |
| F07 | [Búsqueda de makers cercanos](#f07) | Lógica de negocio. Web y Mobile. | Cliente y maker para sus ubicaciones; participantes de la entrega. | RF-09.1, RF-09.2, RF-03.1; CU-01 |
| F08 | [Matching y envío a makers](#f08) | Lógica de negocio. Web y Mobile. | Sistema y makers elegibles. | RF-03.1, RF-03.2, RF-12.10; CU-01, CU-02 |
| F09 | [Gestión de ofertas](#f09) | Lógica de negocio. Web y Mobile. | Maker invitado y cliente propietario de la solicitud. | RF-04.1, RF-04.2, RF-04.3, RF-04.5, RF-04.6; CU-02, CU-03, CU-25 |
| F10 | [Confirmación de oferta](#f10) | Lógica de negocio. Web y Mobile. | Cliente propietario; sistema. | RF-04.4, RF-12.10, RF-12.15; CU-03, CU-20 |
| F11 | [Membresía y abono](#f11) | Lógica de negocio. Web y Mobile para el maker; administración en Web. | Maker, administración autorizada, sistema y Mercado Pago. | RF-12.1, RF-12.2, RF-12.3, RF-12.4, RF-12.5, RF-12.6, RF-12.7, RF-12.8, RF-12.9, RF-12.10, RF-12.11, RF-12.12, RF-12.13, RF-12.14, RF-12.15; CU-08, CU-09, CU-10, CU-11, CU-12 |
| F12 | [Gestión de estados del pedido](#f12) | Lógica de negocio. Web y Mobile. | Cliente, maker del pedido y procesos autorizados. | RF-02.4, RF-05.3, RF-06.5, RF-12.10; CU-04, CU-05, CU-06 |
| F13 | [Mensajería cliente–maker](#f13) | Lógica de negocio. Web y Mobile. | Cliente y maker del pedido; consulta administrativa con capacidad específica y auditoría. | RF-05.1, RF-05.2, RF-11.2, RF-12.10, RF-05.4; CU-14, CU-03, CU-20 |
| F14 | [Notificaciones](#f14) | Lógica de negocio. Web y Mobile; canales externos según selección. | Participantes destinatarios y procesos del sistema. | RF-07.1, RF-07.3, RF-07.4, RF-12.11, RF-07.5; CU-23 |
| F15 | [Evidencia previa a la entrega](#f15) | Lógica de negocio. Web y Mobile. | Maker del pedido y cliente destinatario. | RF-06.1, RF-06.2; CU-04 |
| F16 | [Entrega en Nodo Amigo](#f16) | Lógica de negocio. Web y Mobile. | Cliente y maker del pedido. | RF-06.6, RF-09.1, RF-09.2; CU-06 |
| F17 | [Validación de recepción](#f17) | Lógica de negocio. Web y Mobile. | Participantes habilitados por la política de recepción. | RF-06.7; CU-06 |
| F18 | [Reputación bidireccional](#f18) | Lógica de negocio. Web y Mobile; moderación en Web. | Cliente y maker; administración según reglas de moderación. | RF-15.1, RF-15.2, RF-15.3; CU-16 |
| F19 | [Historial de pedidos](#f19) | Reporte. Web y Mobile. | Cliente y maker titulares; soporte autorizado. | RF-02.4, RF-05.3, RF-16.1; CU-17 |
| F20 | [Panel de administración](#f20) | ABM / Lógica de negocio. Web. | Administración con permisos específicos. | RF-07.2, RF-12.1, RF-12.3, RF-12.7, RF-12.12, RF-12.13, RF-13.2, RF-14.1, RF-15.3, RF-17.1; CU-07, CU-10, CU-12, CU-18, CU-19 |
| F21 | [Reporte de actividad](#f21) | Reporte. Administración en Web. | Administración autorizada. | RF-17.1; CU-18 |
| F22 | [Revisión y aprobación del resultado](#f22) | Lógica de negocio. Web y Mobile. | Cliente del pedido; maker para la gestión posterior de observaciones. | RF-06.3, RF-06.4; CU-05 |
| F23 | [Gestión de archivos privados](#f23) | Lógica de negocio. Web y Mobile. | Cliente, maker y participantes autorizados por recurso. | RF-10.1, RF-10.2, RF-10.3, RF-10.4; CU-24, CU-01, CU-04, CU-14, CU-15, CU-19 |
| F24 | [API común y sincronización](#f24) | Lógica de negocio / soporte transversal. Web y Mobile. | Clientes Web y Mobile, backend y procesos autorizados. | RF-11.1, RF-11.2; CU-01, CU-02, CU-03, CU-04, CU-05, CU-06, CU-07, CU-08, CU-09, CU-10, CU-11, CU-12, CU-13, CU-14, CU-15, CU-16, CU-17, CU-18, CU-19, CU-20, CU-21, CU-22, CU-23, CU-24, CU-25 |
| F25 | [Catálogo de productos del maker](#f25) | ABM y lógica de negocio. Web y Mobile; moderación en Web. | Maker titular, visitante, cliente autenticado y administración con capacidad de moderación. | RF-13.1, RF-13.2, RF-13.3, RF-13.4; CU-19, CU-20 |

## 5. Fichas funcionales
<a id="f01"></a>
### F01 Registro e inicio de sesión

| Campo | Definición |
| --- | --- |
| Tipo y canal | ABM. Web y Mobile; administración en Web. |
| Actores | Cliente, maker y administración autorizada. |
| Propósito | Crear y utilizar una identidad con los perfiles y permisos correspondientes. |
| Entradas | Datos de registro, credenciales y perfil solicitado. |
| Comportamiento y reglas | El backend valida el identificador y el estado de la cuenta, registra el perfil y autentica el acceso. El cierre de sesión retira o revoca la autorización según la estrategia acordada. Las cuentas administrativas se crean mediante un procedimiento autorizado. La primera habilitación comercial del maker se trata en F11. |
| Resultado | Cuenta y perfil asociados, acceso autorizado y cierre de sesión conforme a su política. |
| Requerimientos funcionales | [RF-01.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-1), [RF-01.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-4), [RF-01.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-5). |
| Relación con casos de uso | [CU-13](/3daltoque-docs/analisis/casos/cu-13-registrarse-y-acceder/). |
| Integraciones | [INT-05](/3daltoque-docs/diseno/integraciones/#int-05). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-01, PD-12, PD-13. |

[Spec de implementación](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/). Datos: `usuarios`, `usuario_roles`, `sesiones`.

<a id="f02"></a>
### F02 Gestión de perfil de cliente

| Campo | Definición |
| --- | --- |
| Tipo y canal | ABM. Web y Mobile. |
| Actores | Cliente titular; administración con permiso específico. |
| Propósito | Mantener los datos de contacto y la ubicación de referencia necesarios para solicitar y recibir una impresión. |
| Entradas | Datos de contacto, ubicación elegida y consentimiento aplicable. |
| Comportamiento y reglas | El cliente consulta y actualiza su perfil. El sistema informa la finalidad de cada dato, conserva la precisión de ubicación autorizada y limita su consulta según la operación y el actor. F07 detalla la selección y visualización geográfica. |
| Resultado | Perfil actualizado y datos disponibles para las operaciones autorizadas. |
| Requerimientos funcionales | [RF-01.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-3), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1). |
| Relación con casos de uso | [CU-22](/3daltoque-docs/analisis/casos/cu-22-gestionar-perfil-de-cliente/). |
| Integraciones | [INT-02](/3daltoque-docs/diseno/integraciones/#int-02), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-01, PD-04, PD-12. |

[Spec de implementación](/3daltoque-docs/specs/f02-gestion-de-perfil-de-cliente/). Datos: `clientes`, `ubicaciones`.

<a id="f03"></a>
### F03 Gestión de perfil de maker

| Campo | Definición |
| --- | --- |
| Tipo y canal | ABM. Web y Mobile. |
| Actores | Maker titular; administración con intervención autorizada. |
| Propósito | Describir las capacidades que permiten evaluar la compatibilidad de una solicitud. |
| Entradas | Materiales, colores, dimensiones útiles, disponibilidad, plazos orientativos y modalidad de entrega. |
| Comportamiento y reglas | El maker registra y actualiza sus capacidades. El sistema controla el titular o el permiso administrativo y utiliza los datos declarados en F08. La primera habilitación del perfil para recibir solicitudes inicia el beneficio gratuito aplicable en F11. |
| Resultado | Perfil y capacidades disponibles para la búsqueda de candidatos. |
| Requerimientos funcionales | [RF-01.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2), [RF-12.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2). |
| Relación con casos de uso | [CU-09](/3daltoque-docs/analisis/casos/cu-09-habilitar-perfil-e-iniciar-prueba/), [CU-21](/3daltoque-docs/analisis/casos/cu-21-gestionar-capacidades-del-maker/). |
| Integraciones | [INT-02](/3daltoque-docs/diseno/integraciones/#int-02), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05), [INT-01](/3daltoque-docs/diseno/integraciones/#int-01). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-01, PD-02, PD-04. |

[Spec de implementación](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/). Datos: `makers`, `impresoras`, `materiales`, `capacidades_impresora`.

<a id="f04"></a>
### F04 Portfolio del maker

| Campo | Definición |
| --- | --- |
| Tipo y canal | ABM. Web y Mobile; moderación en Web. |
| Actores | Maker; visitantes autorizados y administración según política. |
| Propósito | Presentar y mantener trabajos del maker mediante un portfolio público autorizado. |
| Entradas | titulo, descripcion, archivo_ids, estado, version. |
| Comportamiento y reglas | El maker crea, publica y retira trabajos de su portfolio con título, descripción y medios autorizados. La publicación utiliza derivados de presentación y conserva la autoría y finalidad declaradas. El uso de una evidencia privada de un cliente requiere la autorización de publicación aplicable. La moderación conserva motivo e historial. El visitante o cliente consulta los trabajos publicados del portfolio de un maker y sus medios de presentación. La respuesta incluye descripción y autor; oculta datos privados de pedidos, clientes y archivos originales. Un portfolio vacío presenta el estado correspondiente y mantiene accesibles los datos públicos del maker. |
| Resultado | Trabajos publicados y medios de presentación autorizados. |
| Requerimientos funcionales | [RF-14.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-1), [RF-14.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-2). |
| Relación con casos de uso | [CU-15](/3daltoque-docs/analisis/casos/cu-15-mantener-y-consultar-portfolio/). |
| Integraciones | [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-02, PD-12, PD-14. |

[Spec de implementación](/3daltoque-docs/specs/f04-portfolio-del-maker/). Datos: `portfolio_trabajos`, `portfolio_archivos`, `archivos`.

<a id="f05"></a>
### F05 Alta de solicitud de impresión

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente. |
| Propósito | Expresar el trabajo requerido con un archivo y condiciones que los makers puedan interpretar. |
| Entradas | STL, material, color, cantidad, unidad o escala, urgencia y observaciones según la política de entrada. |
| Comportamiento y reglas | El sistema autoriza la carga y comprueba el archivo mediante F23. El cliente completa los parámetros y confirma la solicitud. El backend registra propietario, archivo y condiciones, informa los datos que requieren corrección y habilita el envío a makers compatibles mediante F08. |
| Resultado | Solicitud identificada, con archivo habilitado y especificaciones conservadas. |
| Requerimientos funcionales | [RF-02.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-1), [RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2), [RF-02.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-3). |
| Relación con casos de uso | [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/). |
| Integraciones | [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-02, PD-04, PD-05. |

[Spec de implementación](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/). Datos: `solicitudes`, `solicitud_versiones`, `archivos`, `analisis_archivos`.

<a id="f06"></a>
### F06 Cotización estimativa inicial

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente; sistema de análisis. |
| Propósito | Ofrecer una referencia inicial comprensible para orientar la solicitud. |
| Entradas | Datos del STL y parámetros de impresión que admita el método seleccionado. |
| Comportamiento y reglas | El sistema calcula automáticamente una estimación orientativa para solicitudes personalizadas con datos y parámetros de cálculo disponibles. Conserva método y configuración versionados, entradas, moneda, fecha y supuestos. Cuando la geometría, las unidades o los parámetros resultan insuficientes, informa el motivo y permite continuar a la cotización de makers. El precio de un producto de catálogo se obtiene de la publicación. La estrategia y sus parámetros de ejecución corresponden a PD-03. |
| Resultado | Estimación identificada con sus supuestos o explicación de los datos faltantes. |
| Requerimientos funcionales | [RF-02.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-5). |
| Relación con casos de uso | [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/). |
| Integraciones | [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-02, PD-03, PD-11. |

[Spec de implementación](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/). Datos: `estimaciones`, `analisis_archivos`, `configuraciones_versiones`.

<a id="f07"></a>
### F07 Búsqueda de makers cercanos

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente y maker para sus ubicaciones; participantes de la entrega. |
| Propósito | Ubicar makers y puntos de referencia preservando la precisión autorizada. |
| Entradas | Ubicación confirmada, capacidades, material y filtros admitidos. |
| Comportamiento y reglas | El usuario selecciona o confirma una ubicación. El mapa y la lista muestran zonas y puntos autorizados; el sistema aplica los filtros acordados y diferencia la información pública de los datos privados necesarios para operar. La adjudicación se concreta mediante la elección de una oferta. |
| Resultado | Ubicación confirmada y vista de candidatos o puntos compatibles con los filtros aplicables. |
| Requerimientos funcionales | [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2), [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1). |
| Relación con casos de uso | [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/). |
| Integraciones | [INT-02](/3daltoque-docs/diseno/integraciones/#int-02), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05), [INT-04](/3daltoque-docs/diseno/integraciones/#int-04). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-04, PD-11, PD-12. |

[Spec de implementación](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/). Datos: `ubicaciones`, `makers`, `capacidades_impresora`.

<a id="f08"></a>
### F08 Matching y envío a makers

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Sistema y makers elegibles. |
| Propósito | Enviar una solicitud a un grupo limitado de makers capaces de atenderla. |
| Entradas | Solicitud habilitada, capacidades, disponibilidad, ubicación y vigencia comercial del maker. |
| Comportamiento y reglas | El sistema aplica compatibilidad técnica y los criterios de selección acordados. Conserva el grupo de destinatarios, los parámetros y las invitaciones. El maker consulta las solicitudes que le corresponden, con información y plazos actuales. La consulta de archivos respeta la finalidad y etapa de cada invitación. |
| Resultado | Invitaciones trazables y bandeja de solicitudes accesible por sus destinatarios. |
| Requerimientos funcionales | [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RF-03.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-2), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10). |
| Relación con casos de uso | [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/), [CU-02](/3daltoque-docs/analisis/casos/cu-02-recibir-y-responder-ofertas/). |
| Integraciones | [INT-02](/3daltoque-docs/diseno/integraciones/#int-02), [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05), [INT-01](/3daltoque-docs/diseno/integraciones/#int-01). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-04, PD-05, PD-11. |

[Spec de implementación](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/). Datos: `rondas_busqueda`, `invitaciones_maker`, `membresias_maker`, `periodos_membresia`.

<a id="f09"></a>
### F09 Gestión de ofertas

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Maker invitado y cliente propietario de la solicitud. |
| Propósito | Proponer y comparar condiciones de fabricación identificables. |
| Entradas | Invitación, precio, moneda, plazo, vigencia y observaciones. |
| Comportamiento y reglas | El maker responde la invitación con una oferta explícita o registra un rechazo. Las modificaciones conservan versiones y condiciones. El cliente compara ofertas disponibles, identifica la versión que está viendo y consulta los datos autorizados del maker. La negociación mantiene la solicitud abierta hasta F10. El cliente propone precio, plazo y observación sobre una versión concreta de una oferta. El maker acepta o rechaza la propuesta. Aceptarla publica una nueva versión de su oferta con condiciones y vigencia explícitas; el cliente conserva la decisión final de contratación. Se registra proponente, versión de origen, respuesta y versión resultante. Una oferta aceptada, vencida o modificada impide resolver una propuesta obsoleta. |
| Resultado | Ofertas versionadas, respuestas de invitación y condiciones comparables. |
| Requerimientos funcionales | [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1), [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2), [RF-04.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-3), [RF-04.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-5), [RF-04.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-6). |
| Relación con casos de uso | [CU-02](/3daltoque-docs/analisis/casos/cu-02-recibir-y-responder-ofertas/), [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/), [CU-25](/3daltoque-docs/analisis/casos/cu-25-negociar-condiciones-de-una-oferta/). |
| Integraciones | [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-05. |

[Spec de implementación](/3daltoque-docs/specs/f09-gestion-de-ofertas/). Datos: `ofertas`, `oferta_versiones`, `propuestas_cambio_oferta`.

<a id="f10"></a>
### F10 Confirmación de oferta

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente propietario; sistema. |
| Propósito | Confirmar un único acuerdo de impresión con las condiciones aceptadas. |
| Entradas | Solicitud abierta y versión de oferta elegida por el cliente. |
| Comportamiento y reglas | El backend comprueba propietario, vigencia, versión y habilitación aplicable del maker. La aceptación conserva las condiciones, crea como máximo un pedido por solicitud y cierra alternativas en una operación atómica. Las repeticiones y conflictos se resuelven conservando el acuerdo confirmado. El cliente y el maker coordinan directamente el pago de la impresión. |
| Resultado | Pedido único, oferta aceptada identificada y alternativas cerradas. |
| Requerimientos funcionales | [RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15). |
| Relación con casos de uso | [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/), [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/). |
| Integraciones | [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05), [INT-01](/3daltoque-docs/diseno/integraciones/#int-01). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-05, PD-10. |

[Spec de implementación](/3daltoque-docs/specs/f10-confirmacion-de-oferta/). Datos: `pedidos`, `condiciones_pedido`, `solicitudes`, `oferta_versiones`.

<a id="f11"></a>
### F11 Membresía y abono

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile para el maker; administración en Web. |
| Actores | Maker, administración autorizada, sistema y Mercado Pago. |
| Propósito | Cobrar el servicio de 3DAltoque y determinar el acceso del maker a trabajos nuevos. |
| Entradas | Plan versionado, primera habilitación, beneficio aplicable, compra, pago y fechas de acceso. |
| Comportamiento y reglas | El plan es mensual prepago y se renueva mediante una compra iniciada por el maker. La primera habilitación concede un único beneficio gratuito: 30 días generales o 90 días totales para fundadores, como valores configurables. Administración asigna fundadores con cupo y auditoría. Checkout Pro cobra a favor de 3DAltoque; el backend verifica el resultado y concede como máximo un período por compra. La vigencia conserva la operativa de pedidos aceptados al vencer. Se registran compras, conciliación, devoluciones autorizadas, avisos y modo de simulación. |
| Resultado | Estado de acceso, condiciones del plan, compras y períodos trazables. |
| Requerimientos funcionales | [RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1), [RF-12.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2), [RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3), [RF-12.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-4), [RF-12.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-5), [RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.8](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8), [RF-12.9](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-9), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RF-12.11](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-11), [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12), [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13), [RF-12.14](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-14), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15). |
| Relación con casos de uso | [CU-08](/3daltoque-docs/analisis/casos/cu-08-consultar-membresia/), [CU-09](/3daltoque-docs/analisis/casos/cu-09-habilitar-perfil-e-iniciar-prueba/), [CU-10](/3daltoque-docs/analisis/casos/cu-10-asignar-beneficio-fundador/), [CU-11](/3daltoque-docs/analisis/casos/cu-11-pagar-o-renovar-abono/), [CU-12](/3daltoque-docs/analisis/casos/cu-12-gestionar-plan-y-promociones/). |
| Integraciones | [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05), [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-06](/3daltoque-docs/diseno/integraciones/#int-06). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-01, PD-09, PD-10, PD-15. |

[Spec de implementación](/3daltoque-docs/specs/f11-membresia-y-abono/). Datos: `planes_membresia_versiones`, `membresias_maker`, `compras_membresia`, `periodos_membresia`, `pagos`, `eventos_proveedor`.

<a id="f12"></a>
### F12 Gestión de estados del pedido

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente, maker del pedido y procesos autorizados. |
| Propósito | Consultar el avance del trabajo y organizar la actividad del maker. |
| Entradas | Solicitud, pedido, estado vigente, actor y transición solicitada. |
| Comportamiento y reglas | El cliente consulta estados y plazos de su solicitud. El maker actualiza el avance productivo de sus pedidos. Las transiciones verifican actor, etapa y reglas y conservan estado anterior, nuevo estado, fecha y motivo. La vista de cola reúne trabajos del maker con acciones disponibles según su estado; su orden y las reglas de reordenación requieren definición. |
| Resultado | Estados actuales e historial de transiciones consultable por los participantes. |
| Requerimientos funcionales | [RF-02.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-4), [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RF-06.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-5), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10). |
| Relación con casos de uso | [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/), [CU-05](/3daltoque-docs/analisis/casos/cu-05-revision-y-aprobacion/), [CU-06](/3daltoque-docs/analisis/casos/cu-06-entrega-personal/). |
| Integraciones | [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05), [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-01](/3daltoque-docs/diseno/integraciones/#int-01). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-04, PD-05, PD-07, PD-08. |

[Spec de implementación](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/). Datos: `pedidos`, `historial_pedidos`, `revisiones_resultado`.

<a id="f13"></a>
### F13 Mensajería cliente–maker

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente y maker del pedido; consulta administrativa con capacidad específica y auditoría. |
| Propósito | Conservar la comunicación relacionada con un pedido. |
| Entradas | Pedido, participantes, mensaje, referencia de envío y adjuntos autorizados. |
| Comportamiento y reglas | La conversación se vincula a un pedido confirmado y a sus participantes autorizados. Cliente y maker consultan el historial y envían mensajes mientras el pedido siga accesible conforme a la política de conservación. La creación del pedido habilita una sola conversación. La consulta previa a la contratación queda fuera del circuito de chat de v1. El vencimiento comercial del maker mantiene la comunicación de los pedidos existentes. El backend verifica participante y permiso actual, exige texto o al menos un adjunto habilitado, y persiste el mensaje antes de confirmar envío. Conserva remitente, conversación, fecha del servidor y clave estable del cliente. La repetición del mismo contenido y clave recupera el mensaje; una clave reutilizada con otro contenido produce conflicto. Los estados pendiente, enviado y fallido representan el resultado del comando y se reconcilian con el historial persistido. El cliente y el maker consultan una bandeja paginada de sus conversaciones de pedidos confirmados, con referencia de pedido y último mensaje autorizado. La lectura comprueba permisos actuales y permite abrir el historial. La vista vacía ofrece acceso a los pedidos; los mensajes pendientes del dispositivo se reconcilian con el servidor. |
| Resultado | Conversación persistida, mensajes identificados y acceso autorizado al historial. |
| Requerimientos funcionales | [RF-05.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-1), [RF-05.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2), [RF-11.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RF-05.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-4). |
| Relación con casos de uso | [CU-14](/3daltoque-docs/analisis/casos/cu-14-conversar-en-un-pedido/), [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/), [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/). |
| Integraciones | [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05), [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-01](/3daltoque-docs/diseno/integraciones/#int-01). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-02, PD-06, PD-11, PD-12. |

[Spec de implementación](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/). Datos: `conversaciones`, `participantes_conversacion`, `mensajes`, `mensaje_archivos`.

<a id="f14"></a>
### F14 Notificaciones

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile; canales externos según selección. |
| Actores | Participantes destinatarios y procesos del sistema. |
| Propósito | Informar eventos relevantes y permitir consultar el recurso asociado. |
| Entradas | Evento de negocio, destinatarios autorizados, plantilla, canal y estado del recurso. |
| Comportamiento y reglas | El sistema registra avisos por solicitudes, ofertas, mensajes, membresía, producción, revisión y entrega. Los recordatorios verifican que la revisión o vencimiento todavía requiere aviso. Los canales externos conservan aceptación, error y confirmación de entrega cuando esté disponible. Cada aviso conduce a un recurso autorizado y conserva los datos mínimos. |
| Resultado | Avisos persistidos e historial de intentos según el canal utilizado. |
| Requerimientos funcionales | [RF-07.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-1), [RF-07.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-3), [RF-07.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-4), [RF-12.11](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-11), [RF-07.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-5). |
| Relación con casos de uso | [CU-23](/3daltoque-docs/analisis/casos/cu-23-recibir-y-consultar-notificaciones/). |
| Integraciones | [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05), [INT-01](/3daltoque-docs/diseno/integraciones/#int-01). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-07, PD-10, PD-11, PD-12. |

[Spec de implementación](/3daltoque-docs/specs/f14-notificaciones/). Datos: `notificaciones`, `envios_notificacion`, `eventos_salida`.

<a id="f15"></a>
### F15 Evidencia previa a la entrega

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Maker del pedido y cliente destinatario. |
| Propósito | Presentar el resultado de fabricación asociado a una revisión concreta. |
| Entradas | Pedido, fotos o videos habilitados y observaciones del maker. |
| Comportamiento y reglas | El maker presenta evidencia que F23 ha habilitado y que queda vinculada a su revisión. El sistema conserva la referencia del archivo y coloca el resultado en pendiente de revisión. El cliente consulta exactamente la versión presentada y decide mediante F22. |
| Resultado | Revisión presentada con evidencia identificable y disponible para el cliente. |
| Requerimientos funcionales | [RF-06.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1), [RF-06.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-2). |
| Relación con casos de uso | [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/). |
| Integraciones | [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-02, PD-07, PD-12. |

[Spec de implementación](/3daltoque-docs/specs/f15-evidencia-previa-a-la-entrega/). Datos: `revisiones_resultado`, `evidencias`, `archivos`.

<a id="f16"></a>
### F16 Entrega en Nodo Amigo

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente y maker del pedido. |
| Propósito | Acordar un encuentro para entregar una pieza cuya revisión está aprobada. |
| Entradas | Revisión aprobada, punto propuesto, horario y datos autorizados. |
| Comportamiento y reglas | Las partes coordinan un punto neutral y un horario y conservan el acuerdo. Nodo Amigo designa el punto de encuentro utilizado en el catálogo de alcance; la modalidad vigente es encuentro personal entre cliente y maker. La visualización comparte la ubicación necesaria y preserva los datos privados. |
| Resultado | Acuerdo de encuentro vinculado al pedido. |
| Requerimientos funcionales | [RF-06.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-6), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2). |
| Relación con casos de uso | [CU-06](/3daltoque-docs/analisis/casos/cu-06-entrega-personal/). |
| Integraciones | [INT-02](/3daltoque-docs/diseno/integraciones/#int-02), [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-04, PD-08, PD-12. |

[Spec de implementación](/3daltoque-docs/specs/f16-entrega-en-nodo-amigo/). Datos: `entregas`, `puntos_encuentro`, `ubicaciones`.

<a id="f17"></a>
### F17 Validación de recepción

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Participantes habilitados por la política de recepción. |
| Propósito | Registrar la recepción física y completar la entrega. |
| Entradas | Entrega, mecanismo de confirmación acordado, actor y resultado. |
| Comportamiento y reglas | El cliente titular confirma expresamente la recepción desde su sesión autenticada, sobre la entrega y revisión aprobada vigentes. El backend comprueba el acuerdo de entrega, autoriza al cliente, registra fecha y clave idempotente y completa una sola vez la entrega y el pedido. El maker puede informar un incidente y consultar el resultado. La evidencia de fabricación y el silencio mantienen la recepción pendiente. |
| Resultado | Recepción identificada y entrega completada o incidente registrado. |
| Requerimientos funcionales | [RF-06.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-7). |
| Relación con casos de uso | [CU-06](/3daltoque-docs/analisis/casos/cu-06-entrega-personal/). |
| Integraciones | [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-08. |

[Spec de implementación](/3daltoque-docs/specs/f17-validacion-de-recepcion/). Datos: `confirmaciones_entrega`, `entregas`, `pedidos`.

<a id="f18"></a>
### F18 Reputación bidireccional

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile; moderación en Web. |
| Actores | Cliente y maker; administración según reglas de moderación. |
| Propósito | Registrar y consultar reputación derivada de pedidos completados, con criterios, escala y moderación trazables. |
| Entradas | pedido_id, configuracion_version_id, criterios, comentario, clave_operacion. |
| Comportamiento y reglas | Después de la recepción confirmada, cliente y maker pueden valorar a su contraparte una vez por pedido. La ficha aplica los criterios y escala de una configuración versionada, exige valores dentro del rango y admite comentario dentro del límite. Se conserva autor, destinatario, rol, pedido y configuración. Un participante no puede valorarse a sí mismo ni publicar una valoración por un pedido ajeno o cancelado. El cliente consulta la reputación pública del maker y los participantes consultan las valoraciones autorizadas del cliente según permisos. El resumen identifica cantidad de valoraciones, promedio de los puntajes globales y escala utilizada. El puntaje global de una valoración se obtiene del promedio de sus criterios configurados. La ausencia de valoraciones se representa explícitamente. Se agregan únicamente valoraciones publicadas y compatibles con la escala informada. Administración oculta o restituye una valoración mediante permiso específico y motivo registrado. Cada acción conserva estado anterior, actor y fecha y recalcula la proyección de reputación. La intervención no altera los puntajes emitidos ni crea valoraciones en nombre de otra persona. |
| Resultado | Valoraciones únicas por participante y pedido completado; resumen verificable. |
| Requerimientos funcionales | [RF-15.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-1), [RF-15.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-2), [RF-15.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-3). |
| Relación con casos de uso | [CU-16](/3daltoque-docs/analisis/casos/cu-16-valorar-y-consultar-reputacion/). |
| Integraciones | [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-12, PD-14. |

[Spec de implementación](/3daltoque-docs/specs/f18-reputacion-bidireccional/). Datos: `valoraciones`, `valoracion_criterios`, `configuraciones_versiones`.

<a id="f19"></a>
### F19 Historial de pedidos

| Campo | Definición |
| --- | --- |
| Tipo y canal | Reporte. Web y Mobile. |
| Actores | Cliente y maker titulares; soporte autorizado. |
| Propósito | Recuperar pedidos propios personalizados y de catálogo con filtros, cursor y condiciones históricas. |
| Entradas | rol, estado, origen, desde y hasta, cursor. |
| Comportamiento y reglas | El sistema debe mostrar al cliente el estado vigente de su solicitud y las acciones disponibles. Cuando exista un plazo definido debe mostrar su vencimiento o tiempo restante de forma consistente con la hora del servidor. La expiración global de solicitudes, sus etiquetas de estado y la ampliación de búsqueda quedan sujetas a PD-04 y PD-05. El sistema debe conservar el historial de transiciones del pedido, con estado anterior/nuevo, actor o proceso, fecha y motivo pertinente. Las modificaciones administrativas también se registran. El historial es consultable según permisos y se conserva conforme a la política de retención. El participante consulta pedidos propios con filtros de estado, intervalo de fecha, referencia y origen personalizado o catálogo. La paginación utiliza orden estable por fecha e identidad. El detalle conserva condiciones, revisiones y entrega autorizadas, incluso después de vencer la membresía del maker. Un usuario ajeno no obtiene el pedido mediante filtros ni identificadores directos. |
| Resultado | Historial propio paginado y detalle de pedidos de ambos orígenes. |
| Requerimientos funcionales | [RF-02.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-4), [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RF-16.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-16-1). |
| Relación con casos de uso | [CU-17](/3daltoque-docs/analisis/casos/cu-17-consultar-historial-de-pedidos/). |
| Integraciones | [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05), [INT-04](/3daltoque-docs/diseno/integraciones/#int-04). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-12. |

[Spec de implementación](/3daltoque-docs/specs/f19-historial-de-pedidos/). Datos: `pedidos`, `historial_pedidos`, `condiciones_pedido`.

<a id="f20"></a>
### F20 Panel de administración

| Campo | Definición |
| --- | --- |
| Tipo y canal | ABM / Lógica de negocio. Web. |
| Actores | Administración con permisos específicos. |
| Propósito | Gestionar soporte, configuración comercial y operaciones autorizadas con trazabilidad. |
| Entradas | Recurso, permiso, motivo, versión de configuración y acción solicitada. |
| Comportamiento y reglas | Administración gestiona los casos de soporte habilitados y registra actor y motivo. Publica versiones del plan, configura pruebas y cupo, asigna fundadores y participa en conciliación y devoluciones autorizadas del abono. El acceso a datos privados y las intervenciones sobre usuarios, pedidos o puntos de encuentro requieren la política específica. |
| Resultado | Configuraciones versionadas, asignaciones y acciones administrativas auditadas. |
| Requerimientos funcionales | [RF-07.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-2), [RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1), [RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12), [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13), [RF-13.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-2), [RF-14.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-1), [RF-15.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-3), [RF-17.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-17-1). |
| Relación con casos de uso | [CU-07](/3daltoque-docs/analisis/casos/cu-07-administracion-operativa/), [CU-10](/3daltoque-docs/analisis/casos/cu-10-asignar-beneficio-fundador/), [CU-12](/3daltoque-docs/analisis/casos/cu-12-gestionar-plan-y-promociones/), [CU-18](/3daltoque-docs/analisis/casos/cu-18-consultar-reporte-de-actividad/), [CU-19](/3daltoque-docs/analisis/casos/cu-19-mantener-catalogo-de-productos/). |
| Integraciones | [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05), [INT-01](/3daltoque-docs/diseno/integraciones/#int-01), [INT-03](/3daltoque-docs/diseno/integraciones/#int-03). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-09, PD-10, PD-12, PD-14. |

[Spec de implementación](/3daltoque-docs/specs/f20-panel-de-administracion/). Datos: `casos_soporte`, `auditoria`, `configuraciones_versiones`.

<a id="f21"></a>
### F21 Reporte de actividad

| Campo | Definición |
| --- | --- |
| Tipo y canal | Reporte. Administración en Web. |
| Actores | Administración autorizada. |
| Propósito | Consultar indicadores operativos con definiciones reproducibles y permisos administrativos. |
| Entradas | desde, hasta, zona_horaria. |
| Comportamiento y reglas | Administración autorizada consulta indicadores de usuarios registrados, makers con pedidos confirmados, pedidos confirmados y cancelados y calificación publicada, con intervalo y zona horaria explícitos. Usuarios se cuentan por fecha de alta; makers operativos son los makers distintos con pedido confirmado en el intervalo; pedidos se cuentan por su evento de confirmación o cancelación; calificación es el promedio de valoraciones publicadas del período y escala indicada. Los resultados identifican fecha de generación, filtros y fuente y protegen los datos privados. |
| Resultado | Indicadores operativos con filtros, fuente y fecha de generación. |
| Requerimientos funcionales | [RF-17.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-17-1). |
| Relación con casos de uso | [CU-18](/3daltoque-docs/analisis/casos/cu-18-consultar-reporte-de-actividad/). |
| Integraciones | [INT-05](/3daltoque-docs/diseno/integraciones/#int-05). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-13, PD-14. |

[Spec de implementación](/3daltoque-docs/specs/f21-reporte-de-actividad/). Datos: `usuarios`, `makers`, `pedidos`, `historial_pedidos`, `valoraciones`.

<a id="f22"></a>
### F22 Revisión y aprobación del resultado

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente del pedido; maker para la gestión posterior de observaciones. |
| Propósito | Registrar la decisión expresa del cliente sobre la evidencia de una revisión. |
| Entradas | Revisión vigente, evidencia consultable y decisión u observaciones del cliente. |
| Comportamiento y reglas | El cliente aprueba la revisión o registra observaciones. El sistema asocia la decisión con evidencia, actor y fecha. La entrega requiere aprobación expresa de la revisión aplicable. Ante falta de respuesta, la revisión permanece pendiente y se aplican los recordatorios acordados. Las correcciones y reclamos siguen PD-07. |
| Resultado | Revisión aprobada o con observaciones y decisión trazable. |
| Requerimientos funcionales | [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3), [RF-06.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-4). |
| Relación con casos de uso | [CU-05](/3daltoque-docs/analisis/casos/cu-05-revision-y-aprobacion/). |
| Integraciones | [INT-04](/3daltoque-docs/diseno/integraciones/#int-04), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-07. |

[Spec de implementación](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/). Datos: `decisiones_revision`, `revisiones_resultado`.

<a id="f23"></a>
### F23 Gestión de archivos privados

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente, maker y participantes autorizados por recurso. |
| Propósito | Controlar el ingreso, uso, consulta y conservación de STL, evidencias y adjuntos. |
| Entradas | Archivo, propietario, finalidad, recurso, autorización y límites aplicables. |
| Comportamiento y reglas | El backend autoriza la transferencia y comprueba existencia, pertenencia, tamaño, contenido e integridad. La solicitud o revisión utiliza una referencia de archivo identificable. Cada consulta valida el permiso sobre su recurso. Retiro, conservación y borrado siguen una política acordada, con registro de acción y motivo. |
| Resultado | Archivo habilitado o rechazo explicado, referencias conservadas y acceso autorizado. |
| Requerimientos funcionales | [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2), [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3), [RF-10.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-4). |
| Relación con casos de uso | [CU-24](/3daltoque-docs/analisis/casos/cu-24-gestionar-archivos-autorizados/), [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/), [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/), [CU-14](/3daltoque-docs/analisis/casos/cu-14-conversar-en-un-pedido/), [CU-15](/3daltoque-docs/analisis/casos/cu-15-mantener-y-consultar-portfolio/), [CU-19](/3daltoque-docs/analisis/casos/cu-19-mantener-catalogo-de-productos/). |
| Integraciones | [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-02, PD-11, PD-12. |

[Spec de implementación](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/). Datos: `archivos`, `analisis_archivos`.

<a id="f24"></a>
### F24 API común y sincronización

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio / soporte transversal. Web y Mobile. |
| Actores | Clientes Web y Mobile, backend y procesos autorizados. |
| Propósito | Aplicar las mismas reglas del negocio y recuperar estados consistentes en ambos canales. |
| Entradas | Operación, identidad, permisos, referencia del recurso y versión o cursor aplicable. |
| Comportamiento y reglas | La API FastAPI expone las operaciones autorizadas de perfiles, solicitudes, ofertas, pedidos, membresías y seguimiento. Los clientes consultan y recuperan mensajes y estados persistidos. Las suscripciones o consultas de actualización respetan los permisos del recurso y toleran reconexión y eventos repetidos. El backend determina importes, vigencias y transiciones. |
| Resultado | Contrato compartido y estado recuperable de los recursos autorizados. |
| Requerimientos funcionales | [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1), [RF-11.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2). |
| Relación con casos de uso | [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/), [CU-02](/3daltoque-docs/analisis/casos/cu-02-recibir-y-responder-ofertas/), [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/), [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/), [CU-05](/3daltoque-docs/analisis/casos/cu-05-revision-y-aprobacion/), [CU-06](/3daltoque-docs/analisis/casos/cu-06-entrega-personal/), [CU-07](/3daltoque-docs/analisis/casos/cu-07-administracion-operativa/), [CU-08](/3daltoque-docs/analisis/casos/cu-08-consultar-membresia/), [CU-09](/3daltoque-docs/analisis/casos/cu-09-habilitar-perfil-e-iniciar-prueba/), [CU-10](/3daltoque-docs/analisis/casos/cu-10-asignar-beneficio-fundador/), [CU-11](/3daltoque-docs/analisis/casos/cu-11-pagar-o-renovar-abono/), [CU-12](/3daltoque-docs/analisis/casos/cu-12-gestionar-plan-y-promociones/), [CU-13](/3daltoque-docs/analisis/casos/cu-13-registrarse-y-acceder/), [CU-14](/3daltoque-docs/analisis/casos/cu-14-conversar-en-un-pedido/), [CU-15](/3daltoque-docs/analisis/casos/cu-15-mantener-y-consultar-portfolio/), [CU-16](/3daltoque-docs/analisis/casos/cu-16-valorar-y-consultar-reputacion/), [CU-17](/3daltoque-docs/analisis/casos/cu-17-consultar-historial-de-pedidos/), [CU-18](/3daltoque-docs/analisis/casos/cu-18-consultar-reporte-de-actividad/), [CU-19](/3daltoque-docs/analisis/casos/cu-19-mantener-catalogo-de-productos/), [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/), [CU-21](/3daltoque-docs/analisis/casos/cu-21-gestionar-capacidades-del-maker/), [CU-22](/3daltoque-docs/analisis/casos/cu-22-gestionar-perfil-de-cliente/), [CU-23](/3daltoque-docs/analisis/casos/cu-23-recibir-y-consultar-notificaciones/), [CU-24](/3daltoque-docs/analisis/casos/cu-24-gestionar-archivos-autorizados/), [CU-25](/3daltoque-docs/analisis/casos/cu-25-negociar-condiciones-de-una-oferta/). |
| Integraciones | [INT-05](/3daltoque-docs/diseno/integraciones/#int-05). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-01, PD-11, PD-13. |

[Spec de implementación](/3daltoque-docs/specs/f24-api-comun-y-sincronizacion/). Datos: `eventos_salida`, `trabajos`, `sesiones`.

<a id="f25"></a>
### F25 Catálogo de productos del maker

| Campo | Definición |
| --- | --- |
| Tipo y canal | ABM y lógica de negocio. Web y Mobile; moderación en Web. |
| Actores | Maker titular, visitante, cliente autenticado y administración con capacidad de moderación. |
| Propósito | Publicar productos de configuración y precio fijos y generar pedidos directos que continúan por producción, revisión y entrega. |
| Entradas | producto_id y version, titulo y descripcion, material, color y dimensiones, precio_unitario y moneda, cantidad_minima y maxima, cantidad, plazo y condiciones, archivo_ids, clave_operacion. |
| Comportamiento y reglas | El maker titular crea y edita borradores de productos con nombre, descripción, material, color, dimensiones, precio unitario, moneda, cantidades admitidas, plazo y condiciones de fabricación y entrega. Las imágenes o videos se vinculan mediante archivos autorizados. Los cambios de condiciones publicadas crean una nueva versión; los pedidos existentes conservan su versión original. El maker publica una versión completa de su producto, la pausa o la retira. Publicar y habilitar pedidos nuevos exige perfil y membresía vigentes. Pausar, retirar o moderar impide nuevos pedidos desde esa publicación. Las versiones y referencias usadas por pedidos se conservan. La administración puede ocultar una publicación con capacidad específica, motivo y auditoría. El visitante o cliente consulta los productos publicados del maker y abre su detalle con versión, configuración, precio unitario, moneda, cantidades, plazo y condiciones. La respuesta expone la zona pública autorizada y sus medios derivados de presentación. El backend informa si el maker está habilitado para aceptar un pedido. La compra requiere identidad de cliente. El cliente elige producto, versión y cantidad, revisa las condiciones y confirma. El servidor valida publicación y versión actuales, cantidades, maker distinto del cliente y acceso comercial; calcula el total con el precio unitario conservado. En una transacción crea la solicitud de origen catálogo, su oferta publicada de referencia, el pedido, las condiciones y la conversación. Este circuito utiliza al maker del producto y continúa por producción, revisión y entrega. El cliente acuerda directamente con el maker el pago de la impresión. |
| Resultado | Publicaciones versionadas y pedidos directos con condiciones conservadas. |
| Requerimientos funcionales | [RF-13.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-1), [RF-13.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-2), [RF-13.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-3), [RF-13.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-4). |
| Relación con casos de uso | [CU-19](/3daltoque-docs/analisis/casos/cu-19-mantener-catalogo-de-productos/), [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/). |
| Integraciones | [INT-03](/3daltoque-docs/diseno/integraciones/#int-03), [INT-05](/3daltoque-docs/diseno/integraciones/#int-05), [INT-04](/3daltoque-docs/diseno/integraciones/#int-04). |
| Cierre de definición | Reglas funcionales vinculadas a RF y CU. Los valores de configuración y proveedores se registran en PD-02, PD-05, PD-12, PD-14. |

[Spec de implementación](/3daltoque-docs/specs/f25-catalogo-de-productos-del-maker/). Datos: `productos_maker`, `producto_versiones`, `producto_archivos`, `solicitudes`, `oferta_versiones`, `pedidos`.

## 6. Integraciones y calidad

Las seis integraciones conservan su finalidad en [el plan correspondiente](/3daltoque-docs/diseno/integraciones/). Los [19 RNF](/3daltoque-docs/analisis/requisitos/no-funcionales/) se relacionan con las funcionalidades y pruebas en [la matriz de trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/).

## 7. Cobertura y mantenimiento

El catálogo comprende 25 funcionalidades, 68 RF y 25 casos de uso. La [matriz de specs](/3daltoque-docs/specs/02-matriz-de-cobertura/) identifica datos, contratos, pantallas funcionales y criterios; el catálogo de pruebas conserva los escenarios y su estado.

## Historial

| Fecha | Versión | Cambio |
| --- | --- | --- |
| 2026-10-15 | 1.0 | Catálogo F01 a F24 y referencias de origen. |
| 2026-10-25 | 2.0 | Catálogo del maker F25, conversación desde pedido confirmado, cierre de portfolio/reputación/reportes y cobertura funcional completa. |
