---
title: "Documento de funcionalidades"
description: "Planificación de Proyecto — Catálogo funcional F01 a F24 de 3DAltoque."
---

# Documento de funcionalidades

**Proyecto:** 3DAltoque  
**Documento:** Planificación de Proyecto — Catálogo funcional  
**Equipo:** Lucas Bernardez · Rocío Cariaga · Lucas Ruiz  
**Versión:** 2.0  
**Fecha:** 25 de octubre de 2026

## 1. Propósito y fundamento

3DAltoque conecta a clientes que necesitan una impresión 3D con makers compatibles por capacidad y ubicación. El recorrido reúne solicitud, comparación de ofertas, acuerdo, comunicación, producción, revisión del resultado y entrega personal.

Este documento organiza las funcionalidades por módulo, actor y canal, e identifica sus entradas, comportamiento y resultados. Cada ficha conserva referencias a los [requerimientos funcionales](/3daltoque-docs/analisis/requisitos/funcionales/), los [requerimientos no funcionales](/3daltoque-docs/analisis/requisitos/no-funcionales/), los [casos de uso](/3daltoque-docs/analisis/casos-de-uso/) y las [decisiones pendientes](/3daltoque-docs/analisis/requisitos/#decisiones-que-condicionan-el-cierre).

Los identificadores `F01` a `F21` provienen del catálogo de alcance del equipo. `F22` explicita la aprobación del resultado definida en `RF-06.3` y `RF-06.4`; `F23` agrupa la gestión de archivos privados de `RF-10.1` a `RF-10.4`; `F24` reúne la API común y sincronización de `RF-11.1` y `RF-11.2`.

El modelo comercial adoptado (`ADR-002`) establece que el ingreso de la plataforma corresponde al abono mensual prepago del maker mediante Mercado Pago Checkout Pro, con renovación manual. El cliente acuerda el pago de cada impresión directamente con el maker.

## 2. Actores, canales y tipos funcionales

### Actores

| Actor | Intervención |
| --- | --- |
| Cliente | Mantiene su perfil, publica solicitudes, compara y acepta ofertas, consulta el avance, revisa evidencia y participa en la entrega. |
| Maker | Mantiene sus capacidades, responde invitaciones, administra sus pedidos, presenta evidencia, entrega las piezas y gestiona su membresía. |
| Administración | Ejecuta acciones de soporte, moderación y configuración con permisos específicos, conserva motivos y registra sus intervenciones. |
| Procesos del sistema | Aplican validaciones, seleccionan candidatos, registran eventos, comprueban vigencias y procesan avisos y resultados externos. |
| Sistemas externos | Intervienen mediante las interfaces de cobros (Mercado Pago), mapas, almacenamiento de archivos y notificaciones seleccionadas para cada finalidad. |

### Canales

| Canal | Alcance funcional |
| --- | --- |
| Web | Recorridos de cliente y maker; panel de administración y reportes. |
| Mobile | Recorridos de cliente y maker, con las mismas reglas de negocio y permisos definidos para la API compartida. |
| Backend y procesos | Validación de identidad, importes, permisos, estados, vigencias y resultados de integración para ambos canales. |

La columna **Canal** identifica dónde se planifica cada interacción. Los criterios de compatibilidad, navegación y accesibilidad se relacionan con [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14) y [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17). Las pantallas asociadas se detallan en [Navegación y pantallas](/3daltoque-docs/specs/01-navegacion-y-pantallas/) e [Inventario de vistas y flujos](/3daltoque-docs/specs/03-inventario-de-vistas-y-flujos/).

El catálogo conserva los tipos **ABM** para mantenimiento de datos, **Lógica de negocio** para operaciones y reglas, y **Reporte** para consultas consolidadas.

## 3. Recorrido y reglas que organizan el producto

### Recorrido de impresión

1. El cliente accede, confirma su ubicación y carga el archivo STL junto con las especificaciones técnicas y la categoría de uso de la pieza.
2. El sistema valida el archivo privado (`CU-INC-01`) y presenta una estimación orientativa cuando el método y sus datos lo permiten (`CU-EXT-01`).
3. La solicitud se envía a un grupo limitado de makers técnicamente compatibles y comercialmente habilitados (`CU-INC-02`).
4. Los makers responden con ofertas identificables por versión, precio, plazo y vigencia (`CU-02`).
5. El cliente acepta una versión vigente; el sistema conserva el acuerdo y confirma en una operación atómica un único pedido por solicitud, cerrando el resto (`CU-03`).
6. Cliente y maker utilizan el seguimiento y la conversación del pedido (`CU-EXT-02`) mientras se realiza la fabricación (`CU-04`).
7. El maker presenta evidencia visual y el cliente aprueba expresamente la revisión (`CU-05`) o registra observaciones (`CU-EXT-03`).
8. Con la revisión aplicable aprobada, las partes coordinan el encuentro personal en punto neutral y registran la recepción conforme al mecanismo acordado (`CU-06`).

### Acceso del maker

La primera habilitación del perfil inicia un único beneficio gratuito (`CU-09`): prueba general de 30 días o beneficio fundador de 90 días totales (`CU-10`), como valores iniciales configurables (`CU-12`). El programa fundador utiliza un cupo administrado y conserva la asignación y las condiciones concedidas.

El maker consulta su estado (`CU-08`) e inicia manualmente cada compra del plan mensual prepago y su renovación (`CU-11`). La plataforma verifica el resultado autenticado del pago (`CU-INC-03`) antes de conceder el período correspondiente. Al vencer el acceso se restringen los trabajos nuevos y se mantiene la operativa completa de los pedidos existentes, según [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10).

### Límites y decisiones de alcance

| Tema | Definición |
| --- | --- |
| Precio de impresión | Se fija en la versión de oferta aceptada y se paga directamente entre cliente y maker. |
| Cobro de 3DAltoque | Corresponde al abono de membresía mediante Checkout Pro, con renovación manual (`CU-11`). |
| Aprobación del resultado | Requiere decisión expresa sobre una revisión y su evidencia, según `RF-06.3` y `RF-06.4` (`CU-05`). |
| Entrega | Encuentro personal en punto neutral y registro de recepción, según `RF-06.6` y `RF-06.7` (`CU-06`). |
| Archivos y ubicaciones | Acceso por recurso y precisión autorizada, según `RF-09` y `RF-10` (`CU-INC-01`). |
| Extensiones posteriores | Renovación automática, planes adicionales, logística propia y reparación avanzada de STL requieren decisiones de alcance específicas. |

## 4. Catálogo general

| ID | Funcionalidad | Tipo | Actores | Canal | Casos de uso | Estado de definición |
| --- | --- | --- | --- | --- | --- | --- |
| [F01](#f01) | Registro e inicio de sesión | ABM | Cliente, maker y administración autorizada | Web y Mobile; administración en Web | [CU-13](/3daltoque-docs/analisis/casos-de-uso/#cu-13) | Definida en RF; política de sesión sujeta a PD-01 |
| [F02](#f02) | Gestión de perfil de cliente | ABM | Cliente titular; administración con permiso específico | Web y Mobile | [CU-13](/3daltoque-docs/analisis/casos-de-uso/#cu-13) | Definida en RF; privacidad de detalle en PD-01/PD-12 |
| [F03](#f03) | Gestión de perfil de maker | ABM | Maker titular; administración con intervención autorizada | Web y Mobile | [CU-09](/3daltoque-docs/analisis/casos-de-uso/#cu-09), [CU-13](/3daltoque-docs/analisis/casos-de-uso/#cu-13) | Definida en RF; criterio de primera habilitación en PD-01 |
| [F04](#f04) | Portfolio del maker | ABM | Maker; visitantes autorizados y administración según política | Web y Mobile previstos | [CU-09](/3daltoque-docs/analisis/casos-de-uso/#cu-09), [CU-07](/3daltoque-docs/analisis/casos-de-uso/#cu-07) | Especificada a nivel de perfil y moderación |
| [F05](#f05) | Alta de solicitud de impresión | Lógica de negocio | Cliente | Web y Mobile | [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01), [CU-INC-01](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-01) | Definida en RF; límites de entrada en PD-02 |
| [F06](#f06) | Cotización estimativa inicial | Lógica de negocio | Cliente; sistema de análisis | Web y Mobile | [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01), [CU-EXT-01](/3daltoque-docs/analisis/casos-de-uso/#cu-ext-01) | Definida en RF; fórmula de detalle en PD-03 |
| [F07](#f07) | Búsqueda de makers cercanos | Lógica de negocio | Cliente y maker para sus ubicaciones; participantes de la entrega | Web y Mobile | [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01), [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06) | Definida en RF; radios y precisión en PD-04 |
| [F08](#f08) | Matching y envío a makers | Lógica de negocio | Sistema y makers elegibles | Web y Mobile | [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01), [CU-INC-02](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-02), [CU-02](/3daltoque-docs/analisis/casos-de-uso/#cu-02) | Definida en RF; tamaño de lote en PD-04 |
| [F09](#f09) | Gestión de ofertas | Lógica de negocio | Maker invitado y cliente propietario de la solicitud | Web y Mobile | [CU-02](/3daltoque-docs/analisis/casos-de-uso/#cu-02), [CU-03](/3daltoque-docs/analisis/casos-de-uso/#cu-03) | Definida en RF; reglas de renegociación en PD-05 |
| [F10](#f10) | Confirmación de oferta | Lógica de negocio | Cliente propietario; sistema | Web y Mobile | [CU-03](/3daltoque-docs/analisis/casos-de-uso/#cu-03) | Definida en RF |
| [F11](#f11) | Membresía y abono | Lógica de negocio | Maker, administración autorizada, sistema y Mercado Pago | Web y Mobile para el maker; administración en Web | [CU-08](/3daltoque-docs/analisis/casos-de-uso/#cu-08), [CU-09](/3daltoque-docs/analisis/casos-de-uso/#cu-09), [CU-10](/3daltoque-docs/analisis/casos-de-uso/#cu-10), [CU-11](/3daltoque-docs/analisis/casos-de-uso/#cu-11), [CU-12](/3daltoque-docs/analisis/casos-de-uso/#cu-12) | Modelo adoptado en ADR-002; parámetros en PD-09/PD-10 |
| [F12](#f12) | Gestión de estados del pedido | Lógica de negocio | Cliente, maker del pedido y procesos autorizados | Web y Mobile | [CU-04](/3daltoque-docs/analisis/casos-de-uso/#cu-04), [CU-05](/3daltoque-docs/analisis/casos-de-uso/#cu-05), [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06) | Definida en RF |
| [F13](#f13) | Mensajería cliente–maker | Lógica de negocio | Cliente y maker del pedido; soporte con permiso específico | Web y Mobile | [CU-EXT-02](/3daltoque-docs/analisis/casos-de-uso/#cu-ext-02), [CU-04](/3daltoque-docs/analisis/casos-de-uso/#cu-04) | Definida en RF; políticas de soporte en PD-06 |
| [F14](#f14) | Notificaciones | Lógica de negocio | Participantes destinatarios y procesos del sistema | Web y Mobile; canales externos según selección | Transversal ([CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01) a [CU-11](/3daltoque-docs/analisis/casos-de-uso/#cu-11)) | Definida en RF; frecuencia en PD-07/PD-11 |
| [F15](#f15) | Evidencia previa a la entrega | Lógica de negocio | Maker del pedido y cliente destinatario | Web y Mobile | [CU-04](/3daltoque-docs/analisis/casos-de-uso/#cu-04), [CU-05](/3daltoque-docs/analisis/casos-de-uso/#cu-05) | Definida en RF |
| [F16](#f16) | Entrega en Nodo Amigo | Lógica de negocio | Cliente y maker del pedido | Web y Mobile | [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06) | Encuentro personal definido en RF; reprogramación en PD-08 |
| [F17](#f17) | Validación de recepción | Lógica de negocio | Participantes habilitados por la política de recepción | Web y Mobile | [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06) | Definida en RF; mecanismo de confirmación en PD-08 |
| [F18](#f18) | Reputación bidireccional | Lógica de negocio | Cliente y maker; administración según reglas de moderación | Web y Mobile previstos | [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06), [CU-07](/3daltoque-docs/analisis/casos-de-uso/#cu-07) | Especificada vinculada a pedidos finalizados y moderación |
| [F19](#f19) | Historial de pedidos | Reporte | Cliente y maker titulares; soporte autorizado | Web y Mobile | [CU-04](/3daltoque-docs/analisis/casos-de-uso/#cu-04), [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06) | Definida en RF |
| [F20](#f20) | Panel de administración | ABM / Lógica de negocio | Administración con permisos específicos | Web | [CU-07](/3daltoque-docs/analisis/casos-de-uso/#cu-07), [CU-10](/3daltoque-docs/analisis/casos-de-uso/#cu-10), [CU-12](/3daltoque-docs/analisis/casos-de-uso/#cu-12) | Definida en RF; matriz de permisos en PD-14 |
| [F21](#f21) | Reporte de actividad | Reporte | Administración autorizada | Web | [CU-07](/3daltoque-docs/analisis/casos-de-uso/#cu-07) | Especificada sobre métricas operativas y comerciales |
| [F22](#f22) | Revisión y aprobación del resultado | Lógica de negocio | Cliente del pedido; maker para la gestión posterior de observaciones | Web y Mobile | [CU-05](/3daltoque-docs/analisis/casos-de-uso/#cu-05), [CU-EXT-03](/3daltoque-docs/analisis/casos-de-uso/#cu-ext-03) | Definida en RF |
| [F23](#f23) | Gestión de archivos privados | Lógica de negocio | Cliente, maker y participantes autorizados por recurso | Web y Mobile | [CU-INC-01](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-01), [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01), [CU-04](/3daltoque-docs/analisis/casos-de-uso/#cu-04) | Definida en RF; retención en PD-12 |
| [F24](#f24) | API común y sincronización | Lógica de negocio / soporte transversal | Clientes Web y Mobile, backend y procesos autorizados | Web y Mobile | Transversal ([CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01) a [CU-13](/3daltoque-docs/analisis/casos-de-uso/#cu-13)) | Definida en RF |

## 5. Detalle funcional por módulo

### Identidad y perfiles

<a id="f01"></a>

#### F01 · Registro e inicio de sesión

| Campo | Definición |
| --- | --- |
| Tipo y canal | ABM. Web y Mobile; administración en Web. |
| Actores | Cliente, maker y administración autorizada. |
| Propósito | Crear y utilizar una identidad con los perfiles y permisos correspondientes. |
| Entradas | Datos de registro, credenciales, perfil solicitado (`Cliente` o `Maker`) y aceptación de términos. |
| Comportamiento y reglas | El backend valida el identificador y el estado de la cuenta, registra el perfil y autentica el acceso. El cierre de sesión retira o revoca la autorización según la estrategia acordada. Las cuentas administrativas se crean mediante un procedimiento autorizado; el registro público nunca concede ese rol. La primera habilitación comercial del maker se trata en F11. |
| Resultado | Cuenta y perfil asociados, acceso autorizado y cierre de sesión conforme a su política. |
| Requerimientos funcionales | [RF-01.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-1), [RF-01.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-4), [RF-01.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-5). |
| Relación con casos de uso | [CU-13](/3daltoque-docs/analisis/casos-de-uso/#cu-13). |
| Pantallas relacionadas | `WEB-AUTH-01`, `WEB-AUTH-02`, `MOB-AUTH-01`, `MOB-AUTH-02`. |
| Cierre de definición | PD-01: coexistencia de perfiles, datos obligatorios, verificación de contacto, sesiones y revocación. |

<a id="f02"></a>

#### F02 · Gestión de perfil de cliente

| Campo | Definición |
| --- | --- |
| Tipo y canal | ABM. Web y Mobile. |
| Actores | Cliente titular; administración con permiso específico. |
| Propósito | Mantener los datos de contacto y la ubicación de referencia necesarios para solicitar y recibir una impresión. |
| Entradas | Datos de contacto, ubicación elegida y consentimiento aplicable. |
| Comportamiento y reglas | El cliente consulta y actualiza su perfil. El sistema informa la finalidad de cada dato, conserva la precisión de ubicación autorizada y limita su consulta según la operación y el actor. F07 detalla la selección y visualización geográfica. |
| Resultado | Perfil actualizado y datos disponibles para las operaciones autorizadas. |
| Requerimientos funcionales | [RF-01.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-3), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1). |
| Relación con casos de uso | [CU-13](/3daltoque-docs/analisis/casos-de-uso/#cu-13). |
| Pantallas relacionadas | `WEB-CLI-01`, `MOB-CLI-01`. |
| Cierre de definición | PD-01, PD-04 y PD-12: obligatoriedad, precisión compartida y conservación de datos. |

<a id="f03"></a>

#### F03 · Gestión de perfil de maker

| Campo | Definición |
| --- | --- |
| Tipo y canal | ABM. Web y Mobile. |
| Actores | Maker titular; administración con intervención autorizada. |
| Propósito | Describir las capacidades que permiten evaluar la compatibilidad de una solicitud. |
| Entradas | Materiales, colores, dimensiones útiles ($X \times Y \times Z$), disponibilidad, plazos orientativos y modalidad de entrega. |
| Comportamiento y reglas | El maker registra y actualiza sus capacidades. El sistema controla el titular o el permiso administrativo y utiliza los datos declarados en F08. La primera habilitación del perfil para recibir solicitudes inicia el beneficio gratuito aplicable en F11 (`CU-09`). |
| Resultado | Perfil y capacidades disponibles para la búsqueda de candidatos. |
| Requerimientos funcionales | [RF-01.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2), [RF-12.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2). |
| Relación con casos de uso | [CU-09](/3daltoque-docs/analisis/casos-de-uso/#cu-09), [CU-13](/3daltoque-docs/analisis/casos-de-uso/#cu-13). |
| Pantallas relacionadas | `WEB-MAK-01`, `MOB-MAK-01`. |
| Cierre de definición | PD-01 y PD-04: criterio de perfil habilitado, disponibilidad y ubicación utilizada para el matching. |

<a id="f04"></a>

#### F04 · Portfolio del maker

| Campo | Definición |
| --- | --- |
| Tipo y canal | ABM. Web y Mobile previstos. |
| Actores | Maker; visitantes autorizados y administración según política. |
| Propósito | Presentar ejemplos de trabajos previos del maker para aportar contexto técnico y visual a la elección del cliente. |
| Entradas | Imágenes o videos validados mediante F23, título/descripción de la pieza, material utilizado y declaración de autoría. |
| Comportamiento y reglas | El maker carga y mantiene una selección acotada de muestras de impresión en su perfil. Todos los archivos pasan por la validación de F23 (`CU-INC-01`) y pueden ser retirados por el titular o por moderación administrativa (`CU-07`, `RF-10.4`). El portfolio tiene finalidad informativa del perfil; la evidencia obligatoria de un pedido en curso se gestiona por separado en F15. |
| Resultado | Galería de muestras asociada al perfil del maker y visible al comparar ofertas en F09/F10. |
| Requerimientos funcionales | [RF-01.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2), [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2), [RF-10.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-4). |
| Relación con casos de uso | [CU-09](/3daltoque-docs/analisis/casos-de-uso/#cu-09), [CU-07](/3daltoque-docs/analisis/casos-de-uso/#cu-07), [CU-INC-01](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-01). |
| Pantallas relacionadas | `WEB-MAK-02`, `MOB-MAK-02`. |
| Cierre de definición | PD-02, PD-12 y PD-14: cupo máximo de piezas por portfolio, formatos y moderación. |

### Solicitud, estimación y búsqueda

<a id="f05"></a>

#### F05 · Alta de solicitud de impresión

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente. |
| Propósito | Expresar el trabajo requerido con un archivo STL y condiciones que los makers puedan interpretar. |
| Entradas | STL, material, color, cantidad, unidad o escala, categoría de uso (decorativo, mecánico, alta temperatura), urgencia, observaciones y declaración de derechos sobre el archivo. |
| Comportamiento y reglas | El sistema autoriza la carga y comprueba el archivo mediante F23 (`CU-INC-01`). El cliente completa los parámetros y confirma la solicitud. El backend registra propietario, archivo y condiciones, informa los datos que requieren corrección y habilita el envío a makers compatibles mediante F08 (`CU-INC-02`). |
| Resultado | Solicitud identificada en estado `ABIERTA`, con archivo habilitado y especificaciones conservadas. |
| Requerimientos funcionales | [RF-02.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-1), [RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2), [RF-02.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-3). |
| Relación con casos de uso | [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01), [CU-INC-01](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-01). |
| Pantallas relacionadas | `WEB-SOL-01`, `MOB-SOL-01`. |
| Cierre de definición | PD-02 y PD-05: unidades, campos obligatorios, límites y cambios posteriores al envío. |

<a id="f06"></a>

#### F06 · Cotización estimativa inicial

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente; sistema de análisis. |
| Propósito | Ofrecer una referencia inicial comprensible para orientar la solicitud sin sustituir la oferta del maker. |
| Entradas | Datos geométricos del STL y parámetros de impresión que admita el método seleccionado. |
| Comportamiento y reglas | La estimación se presenta como importe o rango orientativo, con moneda, supuestos y datos utilizados (`CU-EXT-01`). Cuando la información resulta insuficiente se explica qué falta sin bloquear la solicitud. El maker expresa precio y plazo mediante una oferta versionada en F09; el cliente fija el acuerdo al aceptarla en F10. |
| Resultado | Estimación identificada con sus supuestos o explicación de los datos faltantes. |
| Requerimientos funcionales | [RF-02.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-5). |
| Relación con casos de uso | [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01), [CU-EXT-01](/3daltoque-docs/analisis/casos-de-uso/#cu-ext-01). |
| Pantallas relacionadas | `WEB-SOL-02`, `MOB-SOL-02`. |
| Cierre de definición | PD-03: adopción del método, entradas, unidades, costos, límites de análisis y tratamiento de archivos insuficientes. |

<a id="f07"></a>

#### F07 · Búsqueda de makers cercanos

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente y maker para sus ubicaciones; participantes de la entrega. |
| Propósito | Ubicar makers y puntos de referencia preservando la precisión autorizada y el domicilio privado. |
| Entradas | Ubicación confirmada, capacidades, material y filtros admitidos. |
| Comportamiento y reglas | El usuario selecciona o confirma una ubicación. El mapa y la lista muestran zonas aproximadas y puntos autorizados; el sistema aplica los filtros acordados y diferencia la información pública de los datos privados necesarios para operar. La adjudicación se concreta mediante la elección de una oferta. |
| Resultado | Ubicación confirmada y vista de candidatos o puntos compatibles con los filtros aplicables. |
| Requerimientos funcionales | [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2), [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1). |
| Relación con casos de uso | [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01), [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06), [CU-INC-02](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-02). |
| Pantallas relacionadas | `WEB-BUS-01`, `MOB-BUS-01`. |
| Cierre de definición | PD-04 y PD-11: radio, orden, precisión, entrada manual, permisos del dispositivo y proveedor de mapas. |

<a id="f08"></a>

#### F08 · Matching y envío a makers

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Sistema y makers elegibles. |
| Propósito | Enviar una solicitud a un grupo limitado de makers capaces de atenderla y con membresía o beneficio vigente. |
| Entradas | Solicitud habilitada, capacidades, disponibilidad, ubicación y vigencia comercial del maker. |
| Comportamiento y reglas | El sistema aplica compatibilidad técnica, vigencia de acceso comercial (`RF-12.10`) y los criterios de selección acordados (`CU-INC-02`). Conserva el grupo de destinatarios, los parámetros y las invitaciones. El maker consulta las solicitudes que le corresponden (`CU-02`), con información y plazos actuales. La consulta de archivos respeta la finalidad y etapa de cada invitación. |
| Resultado | Invitaciones trazables y bandeja de solicitudes accesible por sus destinatarios. |
| Requerimientos funcionales | [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RF-03.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-2), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10). |
| Relación con casos de uso | [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01), [CU-INC-02](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-02), [CU-02](/3daltoque-docs/analisis/casos-de-uso/#cu-02). |
| Pantallas relacionadas | `WEB-MAK-INV-01`, `MOB-MAK-INV-01`. |
| Cierre de definición | PD-04 y PD-05: tamaño del grupo, rondas, ampliación, orden y ofertas previas a un vencimiento. |

### Ofertas y contratación

<a id="f09"></a>

#### F09 · Gestión de ofertas

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Maker invitado y cliente propietario de la solicitud. |
| Propósito | Proponer y comparar condiciones de fabricación identificables. |
| Entradas | Invitación, precio, moneda, plazo, vigencia y observaciones. |
| Comportamiento y reglas | El maker responde la invitación con una oferta explícita o registra un rechazo (`CU-02`). Las modificaciones conservan versiones y condiciones. El cliente compara ofertas disponibles, identifica la versión que está viendo y consulta los datos autorizados del maker (`CU-03`). La negociación mantiene la solicitud abierta hasta F10. |
| Resultado | Ofertas versionadas, respuestas de invitación y condiciones comparables. |
| Requerimientos funcionales | [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1), [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2), [RF-04.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-3), [RF-04.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-5). |
| Relación con casos de uso | [CU-02](/3daltoque-docs/analisis/casos-de-uso/#cu-02), [CU-03](/3daltoque-docs/analisis/casos-de-uso/#cu-03). |
| Pantallas relacionadas | `WEB-OFE-01`, `WEB-OFE-02`, `MOB-OFE-01`, `MOB-OFE-02`. |
| Cierre de definición | PD-05: vigencia, renovación, retiro, contraofertas y edición de solicitudes ya enviadas. |

<a id="f10"></a>

#### F10 · Confirmación de oferta

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente propietario; sistema. |
| Propósito | Confirmar un único acuerdo de impresión con las condiciones aceptadas. |
| Entradas | Solicitud abierta y versión de oferta elegida por el cliente. |
| Comportamiento y reglas | El backend comprueba propietario, vigencia, versión y habilitación aplicable del maker. La aceptación conserva las condiciones, crea como máximo un pedido por solicitud y cierra alternativas en una operación atómica (`CU-03`). Las repeticiones y conflictos se resuelven conservando el acuerdo confirmado. El cliente y el maker coordinan directamente el pago de la impresión. |
| Resultado | Pedido único, oferta aceptada identificada y alternativas cerradas. |
| Requerimientos funcionales | [RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15). |
| Relación con casos de uso | [CU-03](/3daltoque-docs/analisis/casos-de-uso/#cu-03). |
| Pantallas relacionadas | `WEB-OFE-03`, `MOB-OFE-03`. |
| Cierre de definición | PD-05: precisar el tratamiento de ofertas emitidas antes del vencimiento del acceso del maker. |

### Membresía y acceso del maker

<a id="f11"></a>

#### F11 · Membresía y abono

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile para el maker; administración en Web. |
| Actores | Maker, administración autorizada, sistema y Mercado Pago. |
| Propósito | Cobrar el servicio de 3DAltoque y determinar el acceso del maker a trabajos nuevos. |
| Entradas | Plan versionado, primera habilitación, beneficio aplicable, compra, pago y fechas de acceso. |
| Comportamiento y reglas | El plan es mensual prepago y se renueva mediante una compra iniciada por el maker (`CU-11`). La primera habilitación concede un único beneficio gratuito (`CU-09`): 30 días generales o 90 días totales para fundadores, como valores configurables (`CU-12`). Administración asigna fundadores con cupo y auditoría (`CU-10`). Checkout Pro cobra a favor de 3DAltoque; el backend verifica el resultado (`CU-INC-03`) y concede como máximo un período por compra. La vigencia conserva la operativa de pedidos aceptados al vencer (`CU-08`). Se registran compras, conciliación, devoluciones autorizadas, avisos y modo de simulación. |
| Resultado | Estado de acceso, condiciones del plan, compras y períodos trazables. |
| Requerimientos funcionales | [RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1) a [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15). |
| Relación con casos de uso | [CU-08](/3daltoque-docs/analisis/casos-de-uso/#cu-08), [CU-09](/3daltoque-docs/analisis/casos-de-uso/#cu-09), [CU-10](/3daltoque-docs/analisis/casos-de-uso/#cu-10), [CU-11](/3daltoque-docs/analisis/casos-de-uso/#cu-11), [CU-12](/3daltoque-docs/analisis/casos-de-uso/#cu-12), [CU-INC-03](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-03). |
| Pantallas relacionadas | `WEB-MEM-01`, `WEB-MEM-02`, `WEB-MEM-03`, `WEB-ADM-MEM-01`, `MOB-MEM-01`. |
| Cierre de definición | PD-01, PD-05, PD-09, PD-10 y PD-15: habilitación, precio, moneda, cupo, ventana, calendario y políticas del abono. |

### Pedido, comunicación, revisión y entrega

<a id="f12"></a>

#### F12 · Gestión de estados del pedido

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente, maker del pedido y procesos autorizados. |
| Propósito | Consultar el avance del trabajo y organizar la actividad del maker. |
| Entradas | Solicitud, pedido, estado vigente, actor y transición solicitada. |
| Comportamiento y reglas | El cliente consulta estados y plazos de su solicitud y pedido. El maker actualiza el avance productivo de sus pedidos (`CU-04`). Las transiciones verifican actor, etapa y reglas y conservan estado anterior, nuevo estado, fecha y motivo. La vista de cola reúne trabajos del maker con acciones disponibles según su estado. |
| Resultado | Estados actuales e historial de transiciones consultable por los participantes. |
| Requerimientos funcionales | [RF-02.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-4), [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RF-06.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-5), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10). |
| Relación con casos de uso | [CU-04](/3daltoque-docs/analisis/casos-de-uso/#cu-04), [CU-05](/3daltoque-docs/analisis/casos-de-uso/#cu-05), [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06). |
| Pantallas relacionadas | `WEB-PED-01`, `MOB-PED-01`. |
| Cierre de definición | PD-04 y PD-05: orden de la cola, plazos y cambios de estado; PD-14 para intervenciones administrativas. |

<a id="f13"></a>

#### F13 · Mensajería cliente–maker

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente y maker del pedido; soporte con permiso específico. |
| Propósito | Conservar la comunicación relacionada con un pedido. |
| Entradas | Pedido, participantes, mensaje, referencia de envío y adjuntos autorizados. |
| Comportamiento y reglas | El backend valida los participantes y conserva el mensaje antes de confirmar su envío (`CU-EXT-02`). La interfaz diferencia pendiente, enviado y fallido y permite recuperar el historial. Los reenvíos mantienen una identidad para evitar duplicados visibles. Los adjuntos siguen F23 y la recuperación de estados utiliza F24. |
| Resultado | Conversación persistida, mensajes identificados y acceso autorizado al historial. |
| Requerimientos funcionales | [RF-05.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-1), [RF-05.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2), [RF-11.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10). |
| Relación con casos de uso | [CU-EXT-02](/3daltoque-docs/analisis/casos-de-uso/#cu-ext-02), [CU-04](/3daltoque-docs/analisis/casos-de-uso/#cu-04), [CU-05](/3daltoque-docs/analisis/casos-de-uso/#cu-05), [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06). |
| Pantallas relacionadas | `WEB-CHAT-01`, `MOB-CHAT-01`. |
| Cierre de definición | PD-02, PD-06 y PD-12: chat previo al pedido, acceso administrativo, formatos y conservación. |

<a id="f14"></a>

#### F14 · Notificaciones

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile; canales externos según selección. |
| Actores | Participantes destinatarios y procesos del sistema. |
| Propósito | Informar eventos relevantes y permitir consultar el recurso asociado. |
| Entradas | Evento de negocio, destinatarios autorizados, plantilla, canal y estado del recurso. |
| Comportamiento y reglas | El sistema registra avisos por solicitudes, ofertas, mensajes, membresía, producción, revisión y entrega. Los recordatorios verifican que la revisión o vencimiento todavía requiere aviso. Los canales externos conservan aceptación, error y confirmación de entrega cuando esté disponible. Cada aviso conduce a un recurso autorizado y conserva los datos mínimos. |
| Resultado | Avisos persistidos e historial de intentos según el canal utilizado. |
| Requerimientos funcionales | [RF-07.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-1), [RF-07.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-3), [RF-07.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-4), [RF-12.11](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-11). |
| Relación con casos de uso | [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01), [CU-02](/3daltoque-docs/analisis/casos-de-uso/#cu-02), [CU-03](/3daltoque-docs/analisis/casos-de-uso/#cu-03), [CU-04](/3daltoque-docs/analisis/casos-de-uso/#cu-04), [CU-05](/3daltoque-docs/analisis/casos-de-uso/#cu-05), [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06), [CU-08](/3daltoque-docs/analisis/casos-de-uso/#cu-08), [CU-11](/3daltoque-docs/analisis/casos-de-uso/#cu-11). |
| Pantallas relacionadas | `WEB-NOT-01`, `MOB-NOT-01`. |
| Cierre de definición | PD-07 y PD-11: canales, frecuencia, preferencias, escalamiento y reintentos. |

<a id="f15"></a>

#### F15 · Evidencia previa a la entrega

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Maker del pedido y cliente destinatario. |
| Propósito | Presentar el resultado de fabricación asociado a una revisión concreta. |
| Entradas | Pedido, fotos o videos habilitados y observaciones del maker. |
| Comportamiento y reglas | El maker presenta evidencia que F23 ha habilitado y que queda vinculada a su revisión (`CU-04`). El sistema conserva la referencia del archivo y coloca el resultado en pendiente de revisión. El cliente consulta exactamente la versión presentada y decide mediante F22 (`CU-05`). |
| Resultado | Revisión presentada con evidencia identificable y disponible para el cliente. |
| Requerimientos funcionales | [RF-06.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1), [RF-06.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-2). |
| Relación con casos de uso | [CU-04](/3daltoque-docs/analisis/casos-de-uso/#cu-04), [CU-05](/3daltoque-docs/analisis/casos-de-uso/#cu-05), [CU-INC-01](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-01). |
| Pantallas relacionadas | `WEB-REV-01`, `MOB-REV-01`. |
| Cierre de definición | PD-02 y PD-07: formatos, límites, correcciones y sustitución controlada de evidencia. |

<a id="f16"></a>

#### F16 · Entrega en Nodo Amigo

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente y maker del pedido. |
| Propósito | Acordar un encuentro en punto neutral para entregar una pieza cuya revisión está aprobada. |
| Entradas | Revisión aprobada, punto propuesto, horario y datos autorizados. |
| Comportamiento y reglas | Las partes coordinan un punto neutral y un horario y conservan el acuerdo (`CU-06`). Nodo Amigo designa el punto de encuentro utilizado en el catálogo de alcance; la modalidad vigente en v1 es encuentro personal entre cliente y maker, protegiendo el domicilio particular de ambos. La visualización comparte la ubicación necesaria y preserva los datos privados. |
| Resultado | Acuerdo de encuentro vinculado al pedido. |
| Requerimientos funcionales | [RF-06.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-6), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2). |
| Relación con casos de uso | [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06). |
| Pantallas relacionadas | `WEB-ENT-01`, `MOB-ENT-01`. |
| Cierre de definición | PD-08 y PD-12: cambios, visibilidad y tratamiento de incidentes; gestión central de puntos por definir. |

<a id="f17"></a>

#### F17 · Validación de recepción

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Participantes habilitados por la política de recepción. |
| Propósito | Registrar la recepción física y completar la entrega. |
| Entradas | Entrega, mecanismo de confirmación acordado, actor y resultado. |
| Comportamiento y reglas | El backend verifica el pedido, los participantes y las condiciones del mecanismo seleccionado (`CU-06`). La confirmación conserva actor, fecha y resultado. Los incidentes siguen la política de recepción y soporte (`CU-07`). La aprobación del resultado en F22 precede obligatoriamente a la coordinación del encuentro. |
| Resultado | Recepción identificada y entrega completada o incidente registrado. |
| Requerimientos funcionales | [RF-06.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-7). |
| Relación con casos de uso | [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06). |
| Pantallas relacionadas | `WEB-ENT-02`, `MOB-ENT-02`. |
| Cierre de definición | PD-08: actor habilitado, código o doble confirmación, desacuerdos y cierre por incidente. |

<a id="f22"></a>

#### F22 · Revisión y aprobación del resultado

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente del pedido; maker para la gestión posterior de observaciones. |
| Propósito | Registrar la decisión expresa del cliente sobre la evidencia de una revisión. |
| Entradas | Revisión vigente, evidencia consultable y decisión u observaciones del cliente. |
| Comportamiento y reglas | El cliente aprueba la revisión (`CU-05`) o registra observaciones (`CU-EXT-03`). El sistema asocia la decisión con evidencia, actor y fecha. La entrega requiere aprobación expresa de la revisión aplicable. Ante falta de respuesta, la revisión permanece pendiente y se aplican los recordatorios acordados. Las correcciones y reclamos siguen PD-07. |
| Resultado | Revisión aprobada o con observaciones y decisión trazable. |
| Requerimientos funcionales | [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3), [RF-06.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-4). |
| Relación con casos de uso | [CU-05](/3daltoque-docs/analisis/casos-de-uso/#cu-05), [CU-EXT-03](/3daltoque-docs/analisis/casos-de-uso/#cu-ext-03). |
| Pantallas relacionadas | `WEB-REV-02`, `MOB-REV-02`. |
| Cierre de definición | PD-07: cantidad de correcciones, plazos, escalamiento, reclamos y cancelación del trabajo. |

### Reputación y consulta de actividad

<a id="f18"></a>

#### F18 · Reputación bidireccional

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile previstos. |
| Actores | Cliente y maker titulares del pedido finalizado; administración según reglas de moderación. |
| Propósito | Recoger valoraciones cruzadas asociadas exclusivamente a pedidos con recepción completada. |
| Entradas | Pedido elegible (`ENTREGADO`/`FINALIZADO`), calificación en escala de 1 a 5 (calidad, cumplimiento de plazo y comunicación) y comentario opcional. |
| Comportamiento y reglas | Una vez validada la recepción en F17 (`CU-06`), el sistema habilita por única vez por participante la valoración mutua cliente ↔ maker. Las valoraciones quedan vinculadas de forma inmutable al pedido que las originó (impidiendo reseñas sin transacción real) y pueden ser moderadas con motivo auditado en F20 (`CU-07`). |
| Resultado | Valoraciones auditables vinculadas a pedidos reales y promedio actualizado en el perfil. |
| Requerimientos funcionales | [RF-06.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-7), [RF-07.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-2). |
| Relación con casos de uso | [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06), [CU-07](/3daltoque-docs/analisis/casos-de-uso/#cu-07). |
| Pantallas relacionadas | `WEB-REP-01`, `MOB-REP-01`. |
| Cierre de definición | PD-04 y PD-14: ponderación en el ranking de búsqueda y reglas de moderación de comentarios. |

<a id="f19"></a>

#### F19 · Historial de pedidos

| Campo | Definición |
| --- | --- |
| Tipo y canal | Reporte. Web y Mobile. |
| Actores | Cliente y maker titulares; soporte autorizado. |
| Propósito | Recuperar el recorrido y las condiciones de los trabajos de cada participante. |
| Entradas | Identidad, solicitudes y pedidos propios, filtros y permisos. |
| Comportamiento y reglas | Reúne solicitudes, ofertas aceptadas, condiciones congeladas e historial auditable de estados accesible por el usuario titular. `RF-02.4` cubre el estado de la solicitud y `RF-05.3` el historial de transiciones. El historial de compras de membresía se consulta mediante F11 (`CU-08`). |
| Resultado | Vista de actividad propia con acceso a las referencias autorizadas de cada trabajo. |
| Requerimientos funcionales | [RF-02.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-4), [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3). |
| Relación con casos de uso | [CU-04](/3daltoque-docs/analisis/casos-de-uso/#cu-04), [CU-06](/3daltoque-docs/analisis/casos-de-uso/#cu-06). |
| Pantallas relacionadas | `WEB-HIS-01`, `MOB-HIS-01`. |
| Cierre de definición | PD-12: plazo de retención y acceso a archivos de trabajos finalizados. |

### Administración y reportes

<a id="f20"></a>

#### F20 · Panel de administración

| Campo | Definición |
| --- | --- |
| Tipo y canal | ABM / Lógica de negocio. Web. |
| Actores | Administración con permisos específicos. |
| Propósito | Gestionar soporte, moderación, configuración comercial y operaciones autorizadas con trazabilidad. |
| Entradas | Recurso, permiso, motivo obligatorio, versión de configuración y acción solicitada. |
| Comportamiento y reglas | Administración gestiona los casos de soporte y moderación habilitados y registra actor y motivo (`CU-07`). Publica versiones del plan, configura pruebas y cupo (`CU-12`), asigna Makers Fundadores (`CU-10`) y participa en conciliación y devoluciones autorizadas del abono (`CU-11`/`CU-12`). |
| Resultado | Configuraciones versionadas, asignaciones y acciones administrativas auditadas. |
| Requerimientos funcionales | [RF-07.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-2), [RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1), [RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12), [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13). |
| Relación con casos de uso | [CU-07](/3daltoque-docs/analisis/casos-de-uso/#cu-07), [CU-10](/3daltoque-docs/analisis/casos-de-uso/#cu-10), [CU-12](/3daltoque-docs/analisis/casos-de-uso/#cu-12). |
| Pantallas relacionadas | `WEB-ADM-01`, `WEB-ADM-MEM-01`. |
| Cierre de definición | PD-09, PD-10 y PD-14: permisos, devoluciones, intervenciones, reportes y gestión de puntos. |

<a id="f21"></a>

#### F21 · Reporte de actividad

| Campo | Definición |
| --- | --- |
| Tipo y canal | Reporte. Web. |
| Actores | Administración autorizada. |
| Propósito | Analizar la actividad del piloto y las operaciones comerciales y productivas de la plataforma. |
| Entradas | Rango de fechas, estado de pedidos/membresías y filtros operativos. |
| Comportamiento y reglas | Consolida indicadores verificables a partir de los eventos persistidos: usuarios registrados por rol, makers con acceso vigente (prueba, fundador, abono pago), cupo fundador utilizado, solicitudes publicadas, tasa de conversión a pedido confirmado, pedidos entregados e incidentes de soporte. |
| Resultado | Panel de indicadores con trazabilidad directa a las tablas operativas y de membresía. |
| Requerimientos funcionales | [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RF-07.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-2), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13). |
| Relación con casos de uso | [CU-07](/3daltoque-docs/analisis/casos-de-uso/#cu-07), [CU-12](/3daltoque-docs/analisis/casos-de-uso/#cu-12). |
| Pantallas relacionadas | `WEB-ADM-REP-01`. |
| Cierre de definición | PD-13 y PD-14: permisos de exportación y metas del piloto. |

### Archivos y API compartida

<a id="f23"></a>

#### F23 · Gestión de archivos privados

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio. Web y Mobile. |
| Actores | Cliente, maker y participantes autorizados por recurso. |
| Propósito | Controlar el ingreso, uso, consulta y conservación de STL, evidencias y adjuntos. |
| Entradas | Archivo, propietario, finalidad, recurso, autorización y límites aplicables. |
| Comportamiento y reglas | El backend autoriza la transferencia y comprueba existencia, pertenencia, tamaño, contenido e integridad (`CU-INC-01`). La solicitud o revisión utiliza una referencia de archivo identificable. Cada consulta valida el permiso sobre su recurso. Retiro, conservación y borrado siguen una política acordada, con registro de acción y motivo. |
| Resultado | Archivo habilitado o rechazo explicado, referencias conservadas y acceso autorizado. |
| Requerimientos funcionales | [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2), [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3), [RF-10.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-4). |
| Relación con casos de uso | [CU-INC-01](/3daltoque-docs/analisis/casos-de-uso/#cu-inc-01), [CU-01](/3daltoque-docs/analisis/casos-de-uso/#cu-01), [CU-04](/3daltoque-docs/analisis/casos-de-uso/#cu-04), [CU-07](/3daltoque-docs/analisis/casos-de-uso/#cu-07). |
| Cierre de definición | PD-02, PD-06, PD-11 y PD-12: proveedor, formatos, límites, conservación y acceso de invitados o soporte. |

<a id="f24"></a>

#### F24 · API común y sincronización

| Campo | Definición |
| --- | --- |
| Tipo y canal | Lógica de negocio / soporte transversal. Web y Mobile. |
| Actores | Clientes Web y Mobile, backend y procesos autorizados. |
| Propósito | Aplicar las mismas reglas del negocio y recuperar estados consistentes en ambos canales. |
| Entradas | Operación, identidad, permisos, referencia del recurso y versión o cursor aplicable. |
| Comportamiento y reglas | La API FastAPI expone las operaciones autorizadas de perfiles, solicitudes, ofertas, pedidos, membresías y seguimiento. Los clientes consultan y recuperan mensajes y estados persistidos. Las suscripciones o consultas de actualización respetan los permisos del recurso y toleran reconexión y eventos repetidos. El backend determina importes, vigencias y transiciones. |
| Resultado | Contrato compartido y estado recuperable de los recursos autorizados. |
| Requerimientos funcionales | [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1), [RF-11.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2). |
| Relación con casos de uso | Relación transversal con `CU-01` a `CU-13`. |
| Cierre de definición | PD-06 y PD-11: transporte, reconexión y frecuencia; contratos de solicitudes, respuestas y errores. |

## 6. Integraciones funcionales

| ID | Finalidad | Funcionalidades relacionadas | Decisión por cerrar |
| --- | --- | --- | --- |
| INT-01 | Checkout Pro para compras del abono del maker | F11 y F20 | Cuenta receptora, credenciales por entorno, retornos, conciliación y política de devolución. |
| INT-02 | Selección de ubicación, mapa y apoyo al matching | F02, F03, F07, F08 y F16 | Proveedor, precisión, permisos y límites de uso. |
| INT-03 | Transferencia, almacenamiento y análisis de archivos | F04, F05, F06, F13, F15 y F23 | Proveedor, formatos, cuotas, conservación y método de estimación. |
| INT-04 | Avisos y recordatorios | F08, F09, F11, F12, F14, F15, F16, F17 y F22 | Canales, frecuencia, preferencias y reintentos. |
| INT-05 | API compartida y recuperación de estados | F24 y las operaciones de los demás módulos | Solicitudes, respuestas, errores, transporte y reconexión. |
| INT-06 | Simulación identificada del cobro de membresía | F11 | Entornos, permisos y separación de registros respecto de producción. |

## 7. Requisitos de calidad aplicables

| RNF | Criterio | Aplicación funcional |
| --- | --- | --- |
| [RNF-01](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-01) | Disponibilidad del servicio | F24 y los recorridos de acceso, solicitud, pedido y membresía. |
| [RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02) | Rendimiento de búsqueda | F07 y F08: medición de búsquedas con un perfil de carga identificado. |
| [RNF-03](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-03) | Escalabilidad por módulos y parámetros | F08, F11 y F24: grupos, configuración y límites por módulo. |
| [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04) | Seguridad de acceso y datos privados | F01, F02, F03, F20 y F23: identidad y autorización por recurso. |
| [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05) | Consistencia de operaciones críticas | F10, F11, F17 y F22: aceptación, acceso, recepción y decisiones identificables. |
| [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06) | Trazabilidad de decisiones y cambios | F10, F11, F12, F20 y F22: actor, fecha, referencia y motivo. |
| [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07) | Observabilidad del sistema e integraciones | F11, F14, F23 y F24: estados, errores y correlación de operaciones. |
| [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08) | Accesibilidad y comprensión de los flujos | Pantallas de ambos canales, con mensajes y acciones comprensibles. |
| [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09) | Integridad financiera del abono | F11: compra, pago, conciliación y período de acceso. |
| [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10) | Compatibilidad de pago real y simulado | F11: identificación de modo y entorno en todo el recorrido. |
| [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11) | Retención y borrado de datos personales | F02, F13, F19 y F23: finalidad, conservación y retiro según política. |
| [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12) | Condiciones de uso, datos y proveedores | F01, F05, F11 y F23: información de condiciones y permisos aplicables. |
| [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13) | Configurabilidad del plan y promociones | F11 y F20: versiones de plan, duraciones y cupo fundador. |
| [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14) | Interoperabilidad y contrato de API | F24: representación coherente de importes, fechas, estados y errores. |
| [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15) | Tolerancia a fallas de integraciones | F11, F14, F23 y F24: resultado incierto, reintento y recuperación. |
| [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16) | Límites de uso y recursos | F05, F06 y F23: tamaño, análisis, peticiones y consumo de proveedores. |
| [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17) | Compatibilidad de los canales | Recorridos Web y Mobile definidos para cliente y maker. |
| [RNF-18](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-18) | Mantenibilidad y reproducción del entorno | F20 y F24: configuración identificada y contrato común por versión. |
| [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19) | Respaldo y recuperación | F11, F13, F19 y F23: períodos, mensajes, historial y referencias conservadas. |

## 8. Correspondencia con requerimientos funcionales

| RF | Nombre | Funcionalidades relacionadas |
| --- | --- | --- |
| [RF-01.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-1) | Registrar clientes y makers | [F01](#f01) |
| [RF-01.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2) | Gestionar capacidades del maker | [F03](#f03), [F04](#f04) |
| [RF-01.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-3) | Gestionar contacto y ubicación del cliente | [F02](#f02) |
| [RF-01.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-4) | Iniciar sesión | [F01](#f01) |
| [RF-01.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-5) | Cerrar sesión | [F01](#f01) |
| [RF-02.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-1) | Cargar STL y parámetros de impresión | [F05](#f05) |
| [RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2) | Validar archivos y límites técnicos | [F05](#f05), [F23](#f23) |
| [RF-02.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-3) | Crear solicitud de impresión | [F05](#f05) |
| [RF-02.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-4) | Consultar estado y plazos de solicitud | [F12](#f12), [F19](#f19) |
| [RF-02.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-5) | Presentar estimación orientativa | [F06](#f06) |
| [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1) | Enviar solicitud a makers compatibles y cercanos | [F07](#f07), [F08](#f08) |
| [RF-03.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-2) | Consultar solicitudes recibidas por el maker | [F08](#f08) |
| [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1) | Presentar oferta de precio y plazo | [F09](#f09) |
| [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2) | Gestionar vigencia y estado de oferta | [F09](#f09) |
| [RF-04.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-3) | Comparar ofertas disponibles | [F09](#f09) |
| [RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4) | Aceptar una sola oferta y confirmar pedido | [F10](#f10) |
| [RF-04.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-5) | Responder o rechazar invitación de cotización | [F09](#f09) |
| [RF-05.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-1) | Conversar en el contexto del pedido | [F13](#f13) |
| [RF-05.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2) | Registrar mensajes y adjuntos autorizados | [F13](#f13) |
| [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3) | Auditar cambios de estado del pedido | [F12](#f12), [F19](#f19), [F21](#f21) |
| [RF-06.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1) | Presentar evidencia de la pieza terminada | [F15](#f15) |
| [RF-06.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-2) | Solicitar revisión del cliente | [F15](#f15) |
| [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3) | Aprobar resultado o registrar observaciones | [F22](#f22) |
| [RF-06.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-4) | Conservar revisión pendiente ante silencio | [F22](#f22) |
| [RF-06.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-5) | Consultar y actualizar avance de producción | [F12](#f12) |
| [RF-06.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-6) | Coordinar entrega personal | [F16](#f16) |
| [RF-06.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-7) | Registrar recepción y completar entrega | [F17](#f17), [F18](#f18) |
| [RF-07.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-1) | Notificar eventos dentro de la plataforma | [F14](#f14) |
| [RF-07.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-2) | Gestionar moderación y soporte | [F18](#f18), [F20](#f20), [F21](#f21) |
| [RF-07.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-3) | Enviar avisos por canales externos habilitados | [F14](#f14) |
| [RF-07.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-4) | Recordar revisiones pendientes | [F14](#f14) |
| [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1) | Seleccionar y confirmar ubicación de referencia | [F02](#f02), [F07](#f07), [F16](#f16) |
| [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2) | Visualizar zonas y puntos en mapa | [F07](#f07), [F16](#f16) |
| [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1) | Autorizar transferencia de archivos privados | [F04](#f04), [F23](#f23) |
| [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2) | Completar y habilitar archivo recibido | [F04](#f04), [F23](#f23) |
| [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3) | Consultar y descargar archivos con permiso | [F23](#f23) |
| [RF-10.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-4) | Aplicar retiro y retención de archivos | [F04](#f04), [F23](#f23) |
| [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1) | Exponer operaciones mediante API común | [F24](#f24) |
| [RF-11.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2) | Sincronizar cambios de ofertas, chat y pedidos | [F13](#f13), [F24](#f24) |
| [RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1) | Configurar el único plan de membresía | [F11](#f11), [F20](#f20) |
| [RF-12.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2) | Iniciar la prueba gratuita general | [F03](#f03), [F11](#f11) |
| [RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3) | Asignar el programa Makers Fundadores | [F11](#f11), [F20](#f20) |
| [RF-12.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-4) | Consultar estado y vencimiento de acceso | [F11](#f11) |
| [RF-12.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-5) | Iniciar el pago del abono | [F11](#f11) |
| [RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6) | Verificar notificaciones de pago del abono | [F11](#f11) |
| [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7) | Consultar y conciliar compras de membresía | [F11](#f11), [F20](#f20), [F21](#f21) |
| [RF-12.8](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8) | Conceder acceso por un pago confirmado | [F11](#f11) |
| [RF-12.9](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-9) | Renovar manualmente la membresía | [F11](#f11) |
| [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10) | Aplicar vigencia a trabajos nuevos y preservar los activos | [F08](#f08), [F10](#f10), [F11](#f11), [F12](#f12), [F13](#f13) |
| [RF-12.11](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-11) | Recordar vencimientos de acceso | [F11](#f11), [F14](#f14) |
| [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12) | Gestionar devoluciones del abono autorizadas | [F11](#f11), [F20](#f20) |
| [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13) | Auditar cambios del plan y beneficios | [F11](#f11), [F20](#f20), [F21](#f21) |
| [RF-12.14](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-14) | Separar simulación y cobros reales de membresía | [F11](#f11) |
| [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15) | Informar el alcance del pago y del programa de fundadores | [F10](#f10), [F11](#f11) |
