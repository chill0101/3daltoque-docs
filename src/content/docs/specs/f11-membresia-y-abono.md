---
title: "SPEC-F11 · Membresía y abono"
---

# SPEC-F11 · Membresía y abono

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Cobrar el servicio de 3DAltoque y determinar el acceso del maker a trabajos nuevos.

El plan es mensual prepago y se renueva mediante una compra iniciada por el maker. La primera habilitación concede un único beneficio gratuito: 30 días generales o 90 días totales para fundadores, como valores configurables. Administración asigna fundadores con cupo y auditoría. Checkout Pro cobra a favor de 3DAltoque; el backend verifica el resultado y concede como máximo un período por compra. La vigencia conserva la operativa de pedidos aceptados al vencer. Se registran compras, conciliación, devoluciones autorizadas, avisos y modo de simulación.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F11](/3daltoque-docs/proyecto/funcionalidades/#f11) |
| Actores | Maker, administración autorizada, sistema y Mercado Pago. |
| Canales | Lógica de negocio. Web y Mobile para el maker; administración en Web. |
| RF | [RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1), [RF-12.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2), [RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3), [RF-12.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-4), [RF-12.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-5), [RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.8](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8), [RF-12.9](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-9), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RF-12.11](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-11), [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12), [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13), [RF-12.14](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-14), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19) |
| CU | [CU-08](/3daltoque-docs/analisis/casos/cu-08-consultar-membresia/), [CU-09](/3daltoque-docs/analisis/casos/cu-09-habilitar-perfil-e-iniciar-prueba/), [CU-10](/3daltoque-docs/analisis/casos/cu-10-asignar-beneficio-fundador/), [CU-11](/3daltoque-docs/analisis/casos/cu-11-pagar-o-renovar-abono/), [CU-12](/3daltoque-docs/analisis/casos/cu-12-gestionar-plan-y-promociones/) |

## 2. Pantallas y permisos

[WEB-MEM-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mem-01), [WEB-MEM-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mem-02), [WEB-MEM-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mem-03), [WEB-ADM-MEM-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-adm-mem-01), [MOB-MEM-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mem-01), [MOB-MEM-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mem-02), [MOB-MEM-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mem-03).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| plan_version_id | UUID | Para compra | Versión publicada y condiciones visibles |
| importe y moneda | Datos del servidor | Sí | Se conservan con la compra |
| inicio_en y fin_en | Fechas UTC | Al conceder | Intervalo de acceso calculado en servidor |
| modo y entorno | Contexto | Sí | Aislamiento de simulación y producción |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Maker | Abre la membresía propia. |
| 2 | Sistema | Recupera períodos concedidos, compras y versión de condiciones. |
| 3 | Sistema | Calcula vigencia con la fecha del servidor. |
| 4 | Sistema | Presenta prueba o abono, inicio, vencimiento, beneficio y acciones disponibles. |
| 5 | Maker | Consulta las condiciones y decide si inicia una compra manual. |

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-08](/3daltoque-docs/analisis/casos/cu-08-consultar-membresia/), [CU-09](/3daltoque-docs/analisis/casos/cu-09-habilitar-perfil-e-iniciar-prueba/), [CU-10](/3daltoque-docs/analisis/casos/cu-10-asignar-beneficio-fundador/), [CU-11](/3daltoque-docs/analisis/casos/cu-11-pagar-o-renovar-abono/), [CU-12](/3daltoque-docs/analisis/casos/cu-12-gestionar-plan-y-promociones/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F11-01 | Paso 2. Todavía no hubo habilitación: Informa el estado y permite continuar por CU-09. |
| ALT-F11-02 | Paso 4. El acceso venció: Restringe trabajos nuevos y mantiene disponibles los pedidos existentes. |
| ALT-F11-03 | Paso 4. Corresponde un recordatorio: Registra un aviso deduplicado conforme a la frecuencia configurada. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| GET | `/planes/membresia` | modo y entorno | condiciones publicadas | Un único plan inicial. |
| GET | `/makers/me/membresia` | sesión | beneficio, períodos y vencimiento | Maker titular. |
| GET | `/makers/me/membresia/compras` | cursor | compras autorizadas | Maker titular. |
| POST | `/makers/me/membresia/compras` | versión de plan y clave estable | compra_id y condiciones conservadas | Backend determina importe, moneda y duración. |
| POST | `/compras-membresia/{id}/checkout` | compra_id y clave estable | referencia y enlace del proveedor | Compra propia; resultado incierto se concilia. |
| GET | `/compras-membresia/{id}` | compra_id | estado y períodos concedidos | Titular o administración con capacidad. |
| POST | `/webhooks/mercadopago` | firma, contexto y referencia externa | recepción duradera | Validación del proveedor y consulta de su recurso. |
| POST | `/admin/compras-membresia/{id}/conciliacion` | motivo y referencia | resultado verificado | Capacidad administrativa y auditoría. |
| POST | `/admin/compras-membresia/{id}/devoluciones` | motivo, importe autorizado y clave estable | operación y estado | Política PD-09 y resultado conciliado. |
| PATCH | `/admin/configuracion/membresia` | parámetros, versión y motivo | configuración nueva | Permiso específico; conserva operaciones anteriores. |
| POST | `/admin/makers/{id}/fundador` | configuración y motivo | asignación y cupo | Elegibilidad y consumo atómico de cupo. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `planes_membresia_versiones`, `membresias_maker`, `compras_membresia`, `periodos_membresia`, `pagos`, `eventos_proveedor`.

El plan es mensual prepago y se renueva mediante una compra iniciada por el maker. La primera habilitación concede un único beneficio gratuito: 30 días generales o 90 días totales para fundadores, como valores configurables. Administración asigna fundadores con cupo y auditoría. Checkout Pro cobra a favor de 3DAltoque; el backend verifica el resultado y concede como máximo un período por compra. La vigencia conserva la operativa de pedidos aceptados al vencer. Se registran compras, conciliación, devoluciones autorizadas, avisos y modo de simulación.

## 8. Componentes y estados

[DS01](/3daltoque-docs/design-system/02-componentes/#ds01), [DS10](/3daltoque-docs/design-system/02-componentes/#ds10), [DS11](/3daltoque-docs/design-system/02-componentes/#ds11), [DS12](/3daltoque-docs/design-system/02-componentes/#ds12), [DS18](/3daltoque-docs/design-system/02-componentes/#ds18), [DS20](/3daltoque-docs/design-system/02-componentes/#ds20), [DS22](/3daltoque-docs/design-system/02-componentes/#ds22), [DS33](/3daltoque-docs/design-system/02-componentes/#ds33), [DS34](/3daltoque-docs/design-system/02-componentes/#ds34).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F11-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Cada compra elegible concede como máximo un período. |
| AC-F11-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | El beneficio gratuito inicial se concede una sola vez. |
| AC-F11-03 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | El vencimiento conserva chat, producción, revisión y entrega de pedidos aceptados. |
| AC-F11-04 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Simulación y producción conservan contextos separados. |
| AC-F11-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F11-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1) | 1. Solo un rol autorizado publica una versión válida y auditada.<br>2. Una versión nueva no cambia las compras, períodos o condiciones ya concedidos.<br>3. El maker ve importe, duración y renovación manual antes de pagar. |
| [RF-12.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2) | 1. La primera habilitación concede un único beneficio inicial identificable.<br>2. Repetir la habilitación, cerrar sesión o editar el perfil no reinicia la prueba.<br>3. Inicio, fin y versión de configuración quedan conservados con hora del servidor. |
| [RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3) | 1. Una misma identidad maker no consume dos cupos ni obtiene pruebas acumuladas.<br>2. Dos asignaciones concurrentes no superan el cupo configurado.<br>3. Se muestran duración y condiciones; no se promete precio vitalicio, pedidos, prioridad de búsqueda ni mejor reputación. |
| [RF-12.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-4) | 1. El maker solo consulta sus propios datos comerciales y compras.<br>2. La vista distingue prueba, beneficio fundador, acceso pago y vencimiento.<br>3. No se representa una compra pendiente, un retorno de checkout o un pago simulado como una renovación real. |
| [RF-12.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-5) | 1. El intento pertenece a una compra y al maker autenticado.<br>2. Repetir la misma operación recupera el intento existente o informa su estado incierto.<br>3. Importe y moneda enviados por la interfaz no sustituyen las condiciones conservadas en la compra. |
| [RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6) | 1. Un aviso auténtico y consistente se vincula a la compra correcta.<br>2. Un evento no auténtico, ajeno o de otro entorno no habilita acceso.<br>3. Duplicados o eventos fuera de orden no crean períodos adicionales ni reemplazan indebidamente un estado más reciente. |
| [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7) | 1. Se recupera la compra correcta por su referencia y contexto.<br>2. Un timeout no provoca un nuevo cobro a ciegas.<br>3. La resolución y las diferencias quedan auditadas sin exponer secretos. |
| [RF-12.8](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8) | 1. Cada compra pagada origina como máximo un período de acceso.<br>2. Reprocesar el mismo pago no suma otro período.<br>3. La concesión preserva precio, plan, referencia y límites temporales; no existe habilitación por silencio o comprobante no verificado. |
| [RF-12.9](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-9) | 1. Renovar requiere una acción expresa que inicia el checkout.<br>2. Vencer la prueba no genera cargos por sí mismo.<br>3. Una renovación fallida o abandonada no se informa como pagada. |
| [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10) | 1. Un maker vencido no confirma un trabajo nuevo mediante una petición directa que eluda la interfaz.<br>2. Vencer el acceso no cancela pedidos ni bloquea su finalización.<br>3. La guarda determina la vigencia con la fecha del servidor, los permisos y los períodos concedidos. |
| [RF-12.11](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-11) | 1. Los destinatarios son autorizados y los reintentos no duplican efectos comerciales.<br>2. Un fallo al avisar no extiende ni acorta la vigencia.<br>3. No se promete un precio todavía no configurado. |
| [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12) | 1. La devolución pertenece a un pago de membresía elegible, con moneda e importe correctos.<br>2. Repetir la misma operación no duplica el reembolso.<br>3. Una devolución pendiente no se informa como realizada y nunca bloquea por sí sola la finalización de pedidos ya aceptados. |
| [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13) | 1. Se identifica actor, fecha, motivo y condiciones anteriores y nuevas.<br>2. Un rol no autorizado no cambia precios, cupos ni períodos.<br>3. No se eliminan compras o concesiones históricas para simular otra antigüedad. |
| [RF-12.14](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-14) | 1. Cada vista y registro identifica el modo del intento y del período originado.<br>2. Un cambio del modo por defecto no convierte intentos históricos.<br>3. Un resultado simulado no satisface una compra real ni utiliza credenciales reales. |
| [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15) | 1. Las pantallas de compra, prueba y fundadores muestran las condiciones antes de la aceptación correspondiente.<br>2. Una transferencia o comprobante entre cliente y maker no aparece como pago verificado por 3DAltoque.<br>3. La aprobación de la pieza sigue siendo explícita antes de la entrega, independiente del cobro del abono. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-01](/3daltoque-docs/planificacion/parametros/#pd-01), [PD-09](/3daltoque-docs/planificacion/parametros/#pd-09), [PD-10](/3daltoque-docs/planificacion/parametros/#pd-10), [PD-15](/3daltoque-docs/planificacion/parametros/#pd-15).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.

## 11. Subflujos de membresía

| Subflujo | Condición y efecto |
| --- | --- |
| Prueba general | Primera habilitación elegible; duración inicial configurable de 30 días; una concesión inicial. |
| Fundadores | Asignación autorizada con cupo; 90 días totales iniciales configurables como único beneficio. |
| Compra | Maker acepta condiciones de una versión publicada y conserva importe, moneda y duración. |
| Verificación | Persistir notificación, consultar recurso y contrastar cuenta, referencia, modo, entorno, importe y moneda. |
| Concesión | Una compra elegible concede como máximo un período. |
| Renovación | Conservar días ya concedidos y serializar cálculo del intervalo según PD-10. |
| Vencimiento | Restringir compromisos nuevos y conservar pedidos confirmados. |
| Devolución | Motivo, importe, moneda y autorización según PD-09; conciliar el resultado. |
| Simulación | Identificar el modo y aplicar únicamente los entornos y permisos de PD-15. |
