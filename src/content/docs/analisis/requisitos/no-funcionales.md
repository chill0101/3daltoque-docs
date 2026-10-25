---
title: "Requerimientos no funcionales de 3DAltoque"
---

# Requerimientos no funcionales de 3DAltoque

> Actualización del 14 de octubre de 2026: ADR-002 cambia la integración financiera a cobro de membresías. La vigencia se calcula con el reloj del servidor y vencer no bloquea pedidos activos.

Versión: 2.1. Fecha: 25 de octubre de 2026.

Cada ficha reproduce los 11 campos de la plantilla de requerimiento de la materia, Template de Requerimiento.docx. Los vínculos posteriores permiten relacionar el requisito con integraciones, otros requisitos y decisiones de negocio. Los CU relacionados se desarrollan en fichas individuales con referencias, precondiciones, postcondiciones y flujos normales y alternativos.

La prioridad MoSCoW, la estabilidad y las metas propuestas requieren revisión del equipo. Un criterio definido sobre una política abierta se comprueba con esa política una vez acordada; la política acordada determina los datos y condiciones de comprobación. El [índice del catálogo](/3daltoque-docs/analisis/requisitos/) registra esas decisiones y las condiciones de medición. El campo Autor identifica al equipo del proyecto y registra la preparación asistida.

## Índice de fichas

- [RNF-01 Disponibilidad del servicio](#rnf-01)
- [RNF-02 Rendimiento de búsqueda](#rnf-02)
- [RNF-03 Escalabilidad por módulos y parámetros](#rnf-03)
- [RNF-04 Seguridad de acceso y datos privados](#rnf-04)
- [RNF-05 Consistencia de operaciones críticas](#rnf-05)
- [RNF-06 Trazabilidad de decisiones y cambios](#rnf-06)
- [RNF-07 Observabilidad del sistema e integraciones](#rnf-07)
- [RNF-08 Accesibilidad y comprensión de los flujos](#rnf-08)
- [RNF-09 Integridad de cobros de membresía](#rnf-09)
- [RNF-10 Compatibilidad de pago real y simulado](#rnf-10)
- [RNF-11 Retención y borrado de datos personales](#rnf-11)
- [RNF-12 Condiciones de uso, datos y proveedores](#rnf-12)
- [RNF-13 Configurabilidad del plan y beneficios](#rnf-13)
- [RNF-14 Interoperabilidad y contrato de API](#rnf-14)
- [RNF-15 Tolerancia a fallas de integraciones](#rnf-15)
- [RNF-16 Límites de uso y recursos](#rnf-16)
- [RNF-17 Compatibilidad de los canales](#rnf-17)
- [RNF-18 Mantenibilidad y reproducción del entorno](#rnf-18)
- [RNF-19 Respaldo y recuperación](#rnf-19)

## Condiciones de medición

Las metas numéricas de disponibilidad, rendimiento, tamaño de vista y recuperación se presentan como propuestas para el piloto. El perfil PERF-01 y los valores a revisar están en el [catálogo](/3daltoque-docs/analisis/requisitos/#perfil-de-medicion). Antes de ejecutar se acuerdan entorno, dataset, carga, herramientas y umbrales; el resultado se registra con versión y evidencia.

<a id="rnf-01"></a>
### RNF-01 Disponibilidad del servicio

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-01 |
| Nombre | Disponibilidad del servicio |
| Propósito | Permitir utilizar el recorrido acordado durante la evaluación académica. |
| Descripción | El servicio debe sostener la disponibilidad del recorrido base en el entorno de demostración. Se propone inicialmente una disponibilidad de al menos 99% durante una ventana continua de 24 horas, medida cada minuto sobre una operación de lectura representativa con sus dependencias necesarias. Ventana, hosting y objetivo requieren PD-13. Las fallas de proveedores se registran por función y no se ocultan en la medición. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Baja. Aplicabilidad, política o valores condicionados a decisiones aún abiertas. |
| Criterio de éxito | 1. Con el objetivo aprobado, el informe de monitoreo identifica ventana, comprobaciones exitosas/fallidas y disponibilidad calculada.<br>2. El resultado alcanza la meta acordada y registra cualquier exclusión autorizada.<br>3. Una dependencia necesaria caída no produce una comprobación exitosa ficticia. |

Requisitos/CU relacionados: [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/), [INT-03](/3daltoque-docs/diseno/integraciones/), [INT-05](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11), [PD-13](/3daltoque-docs/analisis/requisitos/#pd-13).

<a id="rnf-02"></a>
### RNF-02 Rendimiento de búsqueda

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-02 |
| Nombre | Rendimiento de búsqueda |
| Propósito | Obtener resultados de makers dentro de un tiempo comprobable. |
| Descripción | Se propone que la búsqueda con ubicaciones ya registradas alcance p95 de tiempo de respuesta de hasta 2 segundos y menos de 1% de errores técnicos bajo el perfil PERF-01. Las llamadas externas de geocodificación se miden por separado y muestran su estado mientras se resuelven. PD-13 debe acordar el objetivo y PERF-01 debe identificar el volumen y la concurrencia utilizados para medirlo. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Should (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. El ensayo aprobado informa dataset, concurrencia, duración, percentiles y errores técnicos.<br>2. La búsqueda alcanza p95 y tasa de error acordados conservando los resultados funcionalmente correctos.<br>3. La medición identifica por separado la latencia de proveedores y no omite operaciones fallidas para mejorar el resultado. |

Requisitos/CU relacionados: [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RF-03.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-2), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07).

Integraciones: [INT-02](/3daltoque-docs/diseno/integraciones/), [INT-05](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-04](/3daltoque-docs/analisis/requisitos/#pd-04), [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11), [PD-13](/3daltoque-docs/analisis/requisitos/#pd-13).

<a id="rnf-03"></a>
### RNF-03 Escalabilidad por módulos y parámetros

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-03 |
| Nombre | Escalabilidad por módulos y parámetros |
| Propósito | Permitir ampliar el piloto sin rediseñar el núcleo de negocio. |
| Descripción | La solución debe conservar límites de módulos y una API común, permitiendo variar datos, parámetros de búsqueda y recursos técnicos sin alterar las reglas de aceptación, revisión y pago. El crecimiento que se probará se acuerda en PD-13. Se propone comparar el perfil PERF-01 con un dataset de 200 makers manteniendo los demás factores y la corrección del matching. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Should (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. El dataset ampliado conserva compatibilidad, privacidad y unicidad de pedido.<br>2. Los resultados y tiempos se informan frente al perfil base; la capacidad aceptable se acuerda antes de cerrar la prueba.<br>3. Los cambios de parámetros previstos no obligan a duplicar reglas de negocio en web/mobile ni en proveedores. |

Requisitos/CU relacionados: [RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02), [RNF-18](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-18).

Integraciones: [INT-02](/3daltoque-docs/diseno/integraciones/), [INT-05](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-04](/3daltoque-docs/analisis/requisitos/#pd-04), [PD-13](/3daltoque-docs/analisis/requisitos/#pd-13).

<a id="rnf-04"></a>
### RNF-04 Seguridad de acceso y datos privados

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-04 |
| Nombre | Seguridad de acceso y datos privados |
| Propósito | Proteger recursos, credenciales y domicilios. |
| Descripción | Las operaciones HTTP, archivos, suscripciones y administración deben verificar identidad y autorización por recurso en el backend. Contraseñas y credenciales se protegen mediante la estrategia elegida, fuera de respuestas y registros públicos. Las notificaciones de pago requieren autenticación del proveedor y las vistas públicas no transmiten ubicaciones privadas exactas. Los plazos de sesión y permisos específicos requieren PD-01, PD-06 y PD-12. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Los escenarios de acceso ajeno no permiten leer, modificar, descargar ni suscribirse a recursos privados.<br>2. La inspección de respuestas, eventos y registros no encuentra contraseñas, tokens privados o coordenadas privadas expuestas.<br>3. Un webhook no auténtico o una acción administrativa sin permiso no cambia el estado del negocio. |

Requisitos/CU relacionados: [RF-01.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-4), [RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6), [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/), [INT-02](/3daltoque-docs/diseno/integraciones/), [INT-03](/3daltoque-docs/diseno/integraciones/), [INT-05](/3daltoque-docs/diseno/integraciones/), [INT-06](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-01](/3daltoque-docs/analisis/requisitos/#pd-01), [PD-06](/3daltoque-docs/analisis/requisitos/#pd-06), [PD-12](/3daltoque-docs/analisis/requisitos/#pd-12), [PD-14](/3daltoque-docs/analisis/requisitos/#pd-14).

<a id="rnf-05"></a>
### RNF-05 Consistencia de operaciones críticas

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-05 |
| Nombre | Consistencia de operaciones críticas |
| Propósito | Evitar acuerdos o estados parciales y duplicados. |
| Descripción | La aceptación de oferta, cierre de alternativas y creación de pedido deben ser atómicos y conservar como máximo un pedido por solicitud. Transiciones de producción/revisión y cambios críticos deben validar permisos, condiciones y versión vigente cuando corresponda. Las repeticiones de la misma operación identificada deben conservar el mismo efecto, sin omitir conflictos con otro contenido. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Alta. Regla principal estable en el alcance vigente; la ficha requiere revisión del equipo. |
| Criterio de éxito | 1. Dos aceptaciones concurrentes dejan exactamente un pedido confirmado como máximo.<br>2. Una falla dentro de la aceptación no deja pedido parcial ni ofertas incompatibles con el acuerdo.<br>3. Repetir una operación identificada no duplica mensajes, revisiones o finalizaciones y cambiar su contenido recibe el tratamiento de conflicto definido. |

Requisitos/CU relacionados: [RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4), [RF-05.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2), [RF-06.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-7).

Integraciones: [INT-05](/3daltoque-docs/diseno/integraciones/), [INT-06](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-05](/3daltoque-docs/analisis/requisitos/#pd-05), [PD-07](/3daltoque-docs/analisis/requisitos/#pd-07), [PD-08](/3daltoque-docs/analisis/requisitos/#pd-08).

<a id="rnf-06"></a>
### RNF-06 Trazabilidad de decisiones y cambios

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-06 |
| Nombre | Trazabilidad de decisiones y cambios |
| Propósito | Reconstruir hechos comerciales y administrativos. |
| Descripción | El historial debe identificar operación, recurso, actor/proceso, fecha con zona horaria, resultado y motivo pertinente para oferta, pedido, revisión, entrega, compra de membresía, concesión de acceso y configuración. Los registros se agregan y su acceso/modificación se restringe. El plazo de conservación y el detalle permitido se fijan en PD-12. La trazabilidad no incluye secretos ni contenido privado innecesario. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Alta. Regla principal estable en el alcance vigente; la ficha requiere revisión del equipo. |
| Criterio de éxito | 1. Cada escenario crítico ejecutado tiene registros correlacionables con sus recursos y actores.<br>2. Un acuerdo o una configuración anterior puede reconstruirse sin depender del valor global vigente.<br>3. Los roles sin autorización no alteran historial y los registros no contienen credenciales. |

Requisitos/CU relacionados: [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RF-12.8](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8), [RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/), [INT-03](/3daltoque-docs/diseno/integraciones/), [INT-04](/3daltoque-docs/diseno/integraciones/), [INT-05](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-12](/3daltoque-docs/analisis/requisitos/#pd-12), [PD-14](/3daltoque-docs/analisis/requisitos/#pd-14).

<a id="rnf-07"></a>
### RNF-07 Observabilidad del sistema e integraciones

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-07 |
| Nombre | Observabilidad del sistema e integraciones |
| Propósito | Detectar problemas y evaluar operación y rendimiento. |
| Descripción | Se deben registrar tiempos de API/proveedores, errores por operación, estado de tareas/avisos e intentos financieros pendientes, y métricas de aceptación, cancelación y reclamo cuando estén definidas. Deben distinguirse entorno y modo real/simulado. Umbrales, panel y alertas se acuerdan en PD-13 y se relacionan con incidentes mediante identificadores, sin datos sensibles innecesarios. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Una falla inducida de cada servicio elegido queda visible con integración, operación, entorno y resultado.<br>2. Se pueden calcular tiempos y errores del perfil de rendimiento a partir de registros conservados.<br>3. El panel o informe identifica avisos fallidos e intentos inciertos sin confundirlos con éxito ni mezclar simulación con producción. |

Requisitos/CU relacionados: [RNF-01](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-01), [RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/), [INT-02](/3daltoque-docs/diseno/integraciones/), [INT-03](/3daltoque-docs/diseno/integraciones/), [INT-04](/3daltoque-docs/diseno/integraciones/), [INT-05](/3daltoque-docs/diseno/integraciones/), [INT-06](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11), [PD-13](/3daltoque-docs/analisis/requisitos/#pd-13).

<a id="rnf-08"></a>
### RNF-08 Accesibilidad y comprensión de los flujos

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-08 |
| Nombre | Accesibilidad y comprensión de los flujos |
| Propósito | Permitir completar operaciones sin conocimiento técnico especializado. |
| Descripción | La interfaz debe identificar campos, errores y estados con texto comprensible, explicar estimado versus oferta y modo de pago, y ofrecer foco visible y operación con teclado en los controles web aplicables. Se propone utilizar los criterios de contraste y teclado citados en las referencias como parte del objetivo de accesibilidad: 4,5:1 para texto normal y 3:1 para texto grande, con las excepciones de la referencia. Su alcance y revisión se acuerdan en PD-13. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Los flujos web críticos se recorren por teclado y los errores se relacionan con el campo o acción afectados.<br>2. Las mediciones de contraste de los textos incluidos cumplen los umbrales aprobados; estado o error no se comunican únicamente por color.<br>3. Antes de aceptar/pagar el usuario identifica precio acordado, estimación y modo real/simulado; la revisión requiere una acción explícita. |

Requisitos/CU relacionados: [RF-04.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-3), [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3), [RF-12.14](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-14), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

Integraciones: [INT-02](/3daltoque-docs/diseno/integraciones/), [INT-05](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-13](/3daltoque-docs/analisis/requisitos/#pd-13).

<a id="rnf-09"></a>
### RNF-09 Integridad financiera del abono

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-09 |
| Nombre | Integridad financiera del abono |
| Propósito | Mantener importes, estados y referencias coherentes. |
| Descripción | Los importes de compras de membresía utilizan precisión decimal y condiciones conservadas por compra. Se verifica proveedor, cuenta receptora propia, entorno, importe, moneda y referencia antes de conceder acceso. Cada compra pagada concede como máximo un período y los eventos repetidos no añaden meses. No se modelan saldos de impresiones ni netos de makers. |
| Historial | 2026-10-14: actualización de alcance por ADR-002; pagos exclusivos del abono de makers. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Alta. Regla principal estable en el alcance vigente; la ficha requiere revisión del equipo. |
| Criterio de éxito | 1. Un pago repetido o fuera de contexto no crea otra concesión.<br>2. Compra, intentos, operaciones y período concedido son correlacionables.<br>3. Cobros duplicados, resultados inciertos y devoluciones se conservan para resolución sin fingir un resultado normal. |

Requisitos/CU relacionados: [RF-12.8](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8), [RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-09](/3daltoque-docs/analisis/requisitos/#pd-09), [PD-10](/3daltoque-docs/analisis/requisitos/#pd-10).

<a id="rnf-10"></a>
### RNF-10 Compatibilidad de pago real y simulado

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-10 |
| Nombre | Compatibilidad de pago real y simulado |
| Propósito | Ensayar el flujo conservando contratos y trazabilidad. |
| Descripción | Los adaptadores real y simulado deben satisfacer el mismo contrato de aplicación dentro de las capacidades acordadas, conservando el modo en cada intento. La simulación debe ser visible y sus datos/credenciales estar separados. El cambio de configuración no modifica el modo histórico ni convierte un intento real incierto en simulado. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Alta. Regla principal estable en el alcance vigente; la ficha requiere revisión del equipo. |
| Criterio de éxito | 1. Los escenarios comunes pueden ejecutarse contra el simulador y el adaptador real de prueba con el mismo contrato local.<br>2. Cada intento y su vista permiten identificar inequívocamente su modo.<br>3. Un cambio de modo por defecto deja los intentos anteriores y sus referencias sin conversión. |

Requisitos/CU relacionados: [RF-12.14](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-14), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/), [INT-05](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-09](/3daltoque-docs/analisis/requisitos/#pd-09), [PD-15](/3daltoque-docs/analisis/requisitos/#pd-15).

<a id="rnf-11"></a>
### RNF-11 Retención y borrado de datos personales

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-11 |
| Nombre | Retención y borrado de datos personales |
| Propósito | Conservar solo lo necesario conforme a una política explícita. |
| Descripción | La política debe definir plazos y finalidad por categoría de perfil, contacto, ubicación, archivos, mensajes, evidencias y registros, incluidas excepciones por operaciones pendientes y tratamiento de respaldos. Los procesos deben aplicar esa política y restringir el acceso a los datos retenidos. Los valores y excepciones requieren PD-12 antes de habilitar borrados automáticos o usar datos reales. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Baja. Aplicabilidad, política o valores condicionados a decisiones aún abiertas. |
| Criterio de éxito | 1. Cada categoría utilizada tiene finalidad, plazo/regla, responsable y tratamiento de excepciones documentados.<br>2. Un dato elegible se retira según la política aprobada y no queda accesible mediante las consultas habituales.<br>3. La evidencia que debe conservarse y el tratamiento de copias de respaldo están justificados y son coherentes con la regla de borrado. |

Requisitos/CU relacionados: [RF-10.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-4), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19).

Integraciones: [INT-02](/3daltoque-docs/diseno/integraciones/), [INT-03](/3daltoque-docs/diseno/integraciones/), [INT-04](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-12](/3daltoque-docs/analisis/requisitos/#pd-12), [PD-13](/3daltoque-docs/analisis/requisitos/#pd-13).

<a id="rnf-12"></a>
### RNF-12 Condiciones de uso, datos y proveedores

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-12 |
| Nombre | Condiciones de uso, datos y proveedores |
| Propósito | Documentar obligaciones y permisos aplicables a la operación. |
| Descripción | Antes de tratar datos reales o habilitar una modalidad comercial, se deben identificar y revisar las condiciones aplicables al uso de datos, archivos STL, comunicaciones y servicios contratados. Se deben documentar términos/privacidad y los permisos pertinentes con versión y fuente. La jurisdicción, responsable y revisión de obligaciones requieren PD-12; esta ficha no presume una certificación ni sustituye esa revisión. |
| Historial | 2026-10-10: primera ficha estructurada a partir del ID existente; precisión de alcance, criterios y referencias de integración. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Baja. Aplicabilidad, política o valores condicionados a decisiones aún abiertas. |
| Criterio de éxito | 1. El inventario aplicable identifica condiciones, fuente/fecha, responsable y cómo se atienden en el producto.<br>2. La aceptación requerida, cuando corresponda, conserva usuario, versión y fecha de la acción.<br>3. Las funciones y el uso de datos externos están alineados con las condiciones verificadas del proveedor y la política aprobada. |

Requisitos/CU relacionados: [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/), [INT-02](/3daltoque-docs/diseno/integraciones/), [INT-03](/3daltoque-docs/diseno/integraciones/), [INT-04](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-09](/3daltoque-docs/analisis/requisitos/#pd-09), [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11), [PD-12](/3daltoque-docs/analisis/requisitos/#pd-12).

<a id="rnf-13"></a>
### RNF-13 Configurabilidad del plan y promociones

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-13 |
| Nombre | Configurabilidad del plan y promociones |
| Propósito | Modificar la política propia sin alterar código ni acuerdos anteriores. |
| Descripción | Precio, moneda, duración del período, prueba general, duración total de fundadores, cupo, ventana y habilitación del programa se gestionan mediante configuración validada y versionada. Los cambios no alteran períodos concedidos ni compras existentes. Solo hay un plan comercial inicial y renovación manual. |
| Historial | 2026-10-14: actualización de alcance por ADR-002; pagos exclusivos del abono de makers. |
| Fecha | 14 de octubre de 2026 |
| Versión | 2.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Alta. Regla principal estable en el alcance vigente; la ficha requiere revisión del equipo. |
| Criterio de éxito | 1. Un cambio autorizado de parámetros válidos no requiere recompilar.<br>2. Un precio o plazo inválido, cupo excedido o actor no autorizado es rechazado.<br>3. Se conserva la versión aplicada a cada compra y beneficio, sin modificar cargos o acceso históricos. |

Requisitos/CU relacionados: [RF-12.8](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8), [RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/), [INT-05](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-09](/3daltoque-docs/analisis/requisitos/#pd-09), [PD-10](/3daltoque-docs/analisis/requisitos/#pd-10), [PD-15](/3daltoque-docs/analisis/requisitos/#pd-15).

<a id="rnf-14"></a>
### RNF-14 Interoperabilidad y contrato de API

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-14 |
| Nombre | Interoperabilidad y contrato de API |
| Propósito | Permitir integración consistente de clientes y adaptadores. |
| Descripción | La API debe disponer de un contrato versionado con entradas, salidas, autenticación y errores, en un esquema verificable como OpenAPI. Los importes se representan con precisión definida y moneda explícita; las fechas intercambiadas identifican su zona horaria. Los adaptadores traducen contratos externos a los tipos locales y las rutas alternativas existentes se consolidan antes de congelar una versión. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Las operaciones documentadas pueden validarse frente al esquema de la versión elegida.<br>2. Cliente web y clientes mobile implementados interpretan el mismo importe, fecha y código de error de forma equivalente.<br>3. Un cambio incompatible modifica la versión o sigue la política de compatibilidad acordada; no aparece como cambio silencioso. |

Requisitos/CU relacionados: [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/), [INT-03](/3daltoque-docs/diseno/integraciones/), [INT-04](/3daltoque-docs/diseno/integraciones/), [INT-05](/3daltoque-docs/diseno/integraciones/), [INT-06](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-01](/3daltoque-docs/analisis/requisitos/#pd-01), [PD-09](/3daltoque-docs/analisis/requisitos/#pd-09), [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11).

<a id="rnf-15"></a>
### RNF-15 Tolerancia a fallas de integraciones

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-15 |
| Nombre | Tolerancia a fallas de integraciones |
| Propósito | Conservar acuerdos y ofrecer recuperación controlada. |
| Descripción | Las llamadas a proveedores deben tener tiempo máximo y tratamiento de errores/reintentos definidos por operación. Las tareas persistidas deben poder recuperarse después de interrupciones. No se habilitan archivos incompletos ni se deshacen acuerdos por un aviso fallido. Las operaciones financieras inciertas se concilian antes de repetir el cobro. Valores y políticas de reintento requieren PD-11 y PD-13. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Una respuesta ausente termina conforme al timeout definido, registra el problema y permite el tratamiento de recuperación acordado.<br>2. Interrumpir y restablecer un worker conserva tareas y evita duplicar efectos de negocio.<br>3. Fallas de pago, mapa, archivo y aviso producen estados diferenciados; no se muestran como éxito o como ausencia normal de resultados. |

Requisitos/CU relacionados: [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/), [INT-02](/3daltoque-docs/diseno/integraciones/), [INT-03](/3daltoque-docs/diseno/integraciones/), [INT-04](/3daltoque-docs/diseno/integraciones/), [INT-06](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-09](/3daltoque-docs/analisis/requisitos/#pd-09), [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11), [PD-13](/3daltoque-docs/analisis/requisitos/#pd-13).

<a id="rnf-16"></a>
### RNF-16 Límites de uso y recursos

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-16 |
| Nombre | Límites de uso y recursos |
| Propósito | Controlar cargas y consumo de servicios. |
| Descripción | Se deben definir y aplicar límites de peticiones, tamaño/tipo de archivos, análisis y uso de proveedores por entorno. Los límites, cuotas, presupuesto y umbrales se documentan con unidades y responsables. El consumo real de servicios se mide y se identifican excedentes. Se documentan por proveedor las alertas, los límites disponibles y el responsable de actuar ante cada umbral. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Los casos por debajo, en el límite y por encima del umbral acordado tienen resultados previstos y consistentes.<br>2. Un archivo con tamaño declarado falso no elude la comprobación real ni los límites de análisis.<br>3. El informe identifica llamadas/almacenamiento consumidos y errores de cuota por integración con su entorno. |

Requisitos/CU relacionados: [RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2), [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07).

Integraciones: [INT-02](/3daltoque-docs/diseno/integraciones/), [INT-03](/3daltoque-docs/diseno/integraciones/), [INT-04](/3daltoque-docs/diseno/integraciones/), [INT-05](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-02](/3daltoque-docs/analisis/requisitos/#pd-02), [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11), [PD-13](/3daltoque-docs/analisis/requisitos/#pd-13).

<a id="rnf-17"></a>
### RNF-17 Compatibilidad de los canales

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-17 |
| Nombre | Compatibilidad de los canales |
| Propósito | Mantener el recorrido utilizable en las plataformas aprobadas. |
| Descripción | Los canales implementados deben conservar las mismas reglas de negocio y funcionar en una matriz de navegadores/dispositivos acordada. Para web se propone revisar formularios y listas críticas entre 320 y 1440 píxeles CSS, con controles accesibles y contenido legible; vistas espaciales/tablas que requieran desplazamiento se documentan. La entrega funcional comprende los recorridos de cliente y maker en Web y React Native mediante la misma API. El panel administrativo se utiliza en Web. Las vistas de Figma conservan su función de referencia visual. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. Cada combinación aprobada de canal/dispositivo permite completar sus recorridos críticos.<br>2. El mismo acuerdo, importe y estado se interpretan de forma consistente en los canales disponibles.<br>3. La interfaz web conserva controles y mensajes utilizables en los anchos acordados, sin desbordamiento que impida una operación. |

Requisitos/CU relacionados: [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14).

Integraciones: [INT-02](/3daltoque-docs/diseno/integraciones/), [INT-05](/3daltoque-docs/diseno/integraciones/), [INT-06](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11), [PD-13](/3daltoque-docs/analisis/requisitos/#pd-13).

<a id="rnf-18"></a>
### RNF-18 Mantenibilidad y reproducción del entorno

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-18 |
| Nombre | Mantenibilidad y reproducción del entorno |
| Propósito | Permitir evolucionar adaptadores e instalar versiones de forma controlada. |
| Descripción | El núcleo de negocio debe conservar los límites de la arquitectura hexagonal confirmada; dependencias de FastAPI, persistencia y SDK externos permanecen en los adaptadores/composición. La versión implementada debe fijar dependencias, configuración y migraciones y disponer de instrucciones de instalación. Las herramientas concretas y el entorno requieren PD-11 y PD-13. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Must (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Media. Propósito definido; existen parámetros o decisiones de detalle que pueden modificar la ficha. |
| Criterio de éxito | 1. La revisión de dependencias confirma que dominio/casos de uso no importan SDK de proveedor ni tipos HTTP/ORM.<br>2. Un adaptador alternativo satisface el contrato local sin modificar reglas de ofertas, aprobación o membresía.<br>3. Un entorno limpio reproduce la versión siguiendo sus dependencias, migraciones y manual, con ejemplos de configuración sin secretos. |

Requisitos/CU relacionados: [RNF-03](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-03), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/), [INT-02](/3daltoque-docs/diseno/integraciones/), [INT-03](/3daltoque-docs/diseno/integraciones/), [INT-04](/3daltoque-docs/diseno/integraciones/), [INT-05](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11), [PD-13](/3daltoque-docs/analisis/requisitos/#pd-13).

<a id="rnf-19"></a>
### RNF-19 Respaldo y recuperación

| Campo de la plantilla | Contenido |
| --- | --- |
| ID requerimiento | RNF-19 |
| Nombre | Respaldo y recuperación |
| Propósito | Restaurar información coherente después de una pérdida o falla. |
| Descripción | Se deben respaldar datos y referencias de archivos de acuerdo con su política, probar restauración y registrar resultados. Para el piloto se propone RPO de hasta 24 horas y RTO de hasta 4 horas sobre el volumen acordado. Las metas, retención, almacenamiento y recursos requieren PD-12 y PD-13. La recuperación mantiene permisos y permite reconciliar información financiera externa posterior al respaldo. |
| Historial | 2026-10-10: alta de ficha complementaria para completar el flujo y/o el plan de integraciones. |
| Fecha | 2026-10-10 |
| Versión | 1.0-borrador |
| Autor | Equipo 3DAltoque (Bernardez, Cariaga y Ruiz). Redacción asistida; revisión del equipo pendiente. |
| Prioridad | Should (MoSCoW propuesto; sujeto a revisión) |
| Estabilidad | Baja. Aplicabilidad, política o valores condicionados a decisiones aún abiertas. |
| Criterio de éxito | 1. Una restauración de prueba informa fecha de respaldo, punto recuperado, tiempo total y alcance.<br>2. Los datos y archivos recuperados mantienen referencias, permisos y ausencia de registros parciales.<br>3. Con metas aprobadas, pérdida de datos y tiempo de recuperación están dentro del objetivo; pagos externos posteriores se identifican para conciliación. |

Requisitos/CU relacionados: [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-10.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-4), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11).

Integraciones: [INT-01](/3daltoque-docs/diseno/integraciones/), [INT-03](/3daltoque-docs/diseno/integraciones/).

Decisiones a cerrar: [PD-11](/3daltoque-docs/analisis/requisitos/#pd-11), [PD-12](/3daltoque-docs/analisis/requisitos/#pd-12), [PD-13](/3daltoque-docs/analisis/requisitos/#pd-13).

## Referencias de accesibilidad

RNF-08 propone incorporar los criterios de contraste y teclado como parte de las verificaciones de accesibilidad. Registrar por pantalla los criterios evaluados, el método aplicado y los resultados obtenidos.

- [W3C, criterio 1.4.3 de contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
- [W3C, criterio 2.1.1 de teclado](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html).

Las referencias fueron consultadas el 10 de octubre de 2026; los objetivos del proyecto requieren la revisión de PD-13.

## Aplicación a la ampliación funcional

Los 19 RNF se aplican también al catálogo, portfolio, reputación, historial y reportes. La compra de producto conserva decimales, moneda, versión e idempotencia; el chat exige pedido confirmado; el contenido público utiliza derivados autorizados y conserva privados los originales. La [trazabilidad funcional](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relaciona los escenarios de control con los requisitos.
