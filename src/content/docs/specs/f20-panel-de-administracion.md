---
title: "SPEC-F20 · Panel de administración"
---

# SPEC-F20 · Panel de administración

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Gestionar soporte, configuración comercial y operaciones autorizadas con trazabilidad.

Administración gestiona los casos de soporte habilitados y registra actor y motivo. Publica versiones del plan, configura pruebas y cupo, asigna fundadores y participa en conciliación y devoluciones totales autorizadas del abono. El acceso a datos privados y las intervenciones sobre usuarios, pedidos o puntos de encuentro requieren la política específica.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F20](/3daltoque-docs/proyecto/funcionalidades/#f20) |
| Actores | Administración con permisos específicos. |
| Canales | ABM / Lógica de negocio. Web. |
| RF | [RF-07.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-2), [RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1), [RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12), [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13), [RF-13.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-2), [RF-14.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-1), [RF-15.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-3), [RF-17.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-17-1) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13) |
| CU | [CU-07](/3daltoque-docs/analisis/casos/cu-07-administracion-operativa/), [CU-10](/3daltoque-docs/analisis/casos/cu-10-asignar-beneficio-fundador/), [CU-12](/3daltoque-docs/analisis/casos/cu-12-gestionar-plan-y-promociones/), [CU-18](/3daltoque-docs/analisis/casos/cu-18-consultar-reporte-de-actividad/), [CU-19](/3daltoque-docs/analisis/casos/cu-19-mantener-catalogo-de-productos/) |

## 2. Pantallas y permisos

[WEB-ADM-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-adm-01), [WEB-ADM-MEM-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-adm-mem-01).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| motivo | Texto | Para cambio sensible | Trazabilidad y límite configurado |
| permiso | Capacidad del servidor | Sí | Verificación por operación y recurso |
| version_esperada | Versión | En mutaciones versionadas | Versión del recurso que indica la acción |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Administración | Consulta el caso, su recurso y la acción requerida. |
| 2 | Sistema | Comprueba la capacidad y muestra únicamente datos autorizados. |
| 3 | Administración | Registra el motivo y confirma la intervención. |
| 4 | Sistema | Valida estado y versión y aplica el caso de uso específico. |
| 5 | Sistema | Conserva actor, motivo, recurso, estado anterior y resultado en auditoría. |
| 6 | Administración | Consulta el resultado y su referencia. |

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-07](/3daltoque-docs/analisis/casos/cu-07-administracion-operativa/), [CU-10](/3daltoque-docs/analisis/casos/cu-10-asignar-beneficio-fundador/), [CU-12](/3daltoque-docs/analisis/casos/cu-12-gestionar-plan-y-promociones/), [CU-18](/3daltoque-docs/analisis/casos/cu-18-consultar-reporte-de-actividad/), [CU-19](/3daltoque-docs/analisis/casos/cu-19-mantener-catalogo-de-productos/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F20-01 | Paso 2. Falta permiso sobre datos o acción: Deniega la operación y protege la información privada. |
| ALT-F20-02 | Paso 4. La operación requiere conciliar o devolver un abono: Aplica la política de membresía y verifica el resultado externo antes de modificar acceso. |
| ALT-F20-03 | Paso 4. El recurso cambió: Conserva la intervención pendiente y solicita revisar el estado actual. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| GET | `/admin/casos` | filtros y cursor | casos autorizados | Capacidad administrativa. |
| POST | `/admin/casos` | tipo, descripción, reportado_por, referencias y clave estable | caso_id y estado inicial | Capacidad de soporte; referencias del mismo contexto y auditoría. El tipo `inasistencia_entrega` requiere `pedido_id`. |
| POST | `/admin/casos/{id}/intervenciones` | acción, recurso, versión, motivo y clave estable | resultado y auditoría | Permiso específico y validación del caso de uso. `cancelar_pedido_por_inasistencia` aplica PD-08 al pedido asociado al caso. `aprobar_reapertura` y `rechazar_reapertura` usan la versión del caso y un motivo obligatorio. |
| POST | `/admin/publicaciones/{tipo}/{id}/moderacion` | acción, versión y motivo | estado público y auditoría | Catálogo o portfolio; permiso específico. |

## 7. Datos, consistencia e integración

El panel y sus operaciones requieren una autenticación con antigüedad menor a 8 horas. FastAPI comprueba session.createdAt de Better Auth, vigencia, estado de cuenta y capacidad específica. La actividad conserva el plazo original. Al alcanzar el límite responde 401 reauthentication_required, conserva el recurso y dirige a iniciar sesión nuevamente. Al volver, la vista recupera datos y versión vigentes y solicita confirmar nuevamente una intervención sensible.

Las solicitudes de devolución se revisan manualmente, caso por caso, desde soporte. Administración registra el caso, el pago involucrado, el motivo y su decisión; una autorización explícita habilita la devolución total. Un rechazo conserva el cobro y el acceso. El backend verifica que el caso autorizado corresponda al mismo pago y conserva las referencias del caso y del reembolso en auditoría.

Cada revisión genera un único caso de seguimiento en la bandeja de soporte. El caso vincula pedido y revisión y la auditoría registra las solicitudes de cliente y maker, incluidas las de reapertura. La solicitud de reapertura utiliza el mismo caso y conserva su historial de gestiones. La bandeja identifica el estado `reapertura_solicitada`. Soporte comprueba la revisión vinculada y registra el motivo al aprobar o rechazar. La aprobación devuelve el caso a abierto. El rechazo lo deja cerrado en `reapertura_rechazada`. Ese estado conserva la decisión definitiva para la revisión vinculada y bloquea nuevas reaperturas. La bandeja muestra el resultado junto al historial del caso. El detalle que consultan cliente y maker muestra el estado, el resultado y la fecha de la decisión. Soporte consulta el motivo en la auditoría del caso. Soporte puede contactar a las partes y registrar las gestiones y su motivo en el caso. El seguimiento conserva la revisión vigente pendiente y sus evidencias. El cliente conserva la decisión sobre la revisión.

Si una de las partes falta al último encuentro acordado y se agotaron las dos reprogramaciones, soporte puede cancelar el pedido tras revisar el incidente y registrar el motivo. La cancelación requiere un caso vinculado al pedido, el permiso específico y una recepción pendiente. El sistema conserva el último acuerdo y registra la cancelación en el historial del pedido y en auditoría. La cancelación del pedido por soporte genera un aviso obligatorio en la app y un correo obligatorio para cliente y maker. La entrega queda cancelada y el conteo se conserva. El operador confirma desde el caso el motivo y la resolución tras revisar el incidente. El caso registra su resolución. El pago de la impresión conserva el acuerdo directo entre cliente y maker.

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `casos_soporte`, `auditoria`, `configuraciones_versiones`, `pedidos`, `entregas`, `historial_pedidos`.

Administración gestiona los casos de soporte habilitados y registra actor y motivo. Publica versiones del plan, configura pruebas y cupo, asigna fundadores y participa en conciliación y devoluciones totales autorizadas del abono. El acceso a datos privados y las intervenciones sobre usuarios, pedidos o puntos de encuentro requieren la política específica.

## 8. Componentes y estados

[DS03](/3daltoque-docs/design-system/02-componentes/#ds03), [DS11](/3daltoque-docs/design-system/02-componentes/#ds11), [DS12](/3daltoque-docs/design-system/02-componentes/#ds12), [DS19](/3daltoque-docs/design-system/02-componentes/#ds19), [DS24](/3daltoque-docs/design-system/02-componentes/#ds24), [DS43](/3daltoque-docs/design-system/02-componentes/#ds43).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F20-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Cada operación sensible conserva actor, motivo y resultado. |
| AC-F20-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Dos asignaciones concurrentes respetan el cupo configurado. |
| AC-F20-03 | Cuenta con capacidad específica y autenticación de menos de 8 horas | Consulta o interviene un recurso permitido | Se aplica la operación autorizada y su auditoría; el límite administrativo conserva la fecha de creación de la sesión. |
| AC-F20-04 | Autenticación con 8 horas o más, aunque la sesión general siga vigente | Solicita el panel o una operación administrativa directamente a la API | Se devuelve 401 reauthentication_required; el recurso conserva su estado y se requiere iniciar sesión nuevamente. |
| AC-F20-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F20-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-07.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-2) | 1. Solo un rol autorizado consulta o resuelve un caso de soporte.<br>2. Una acción de moderación registra actor, motivo y resultado.<br>3. La intervención no concede acceso privado irrestricto ni modifica pagos reales sin el circuito de verificación correspondiente.<br>4. Un caso revisado de inasistencia con el cupo agotado permite a soporte autorizado cancelar un pedido pendiente de recepción y conservar caso, actor, motivo y fecha. Se rechaza la acción si falta alguna condición.<br>5. Una cancelación confirmada registra el evento de aviso obligatorio en app y correo para los dos participantes. Repetir la intervención recupera la misma cancelación y sus avisos. |
| [RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1) | 1. Solo un rol autorizado publica una versión válida y auditada.<br>2. Una versión nueva no cambia las compras, períodos o condiciones ya concedidos.<br>3. El maker ve importe, duración y renovación manual antes de pagar. |
| [RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3) | 1. Una misma identidad maker no consume dos cupos ni obtiene pruebas acumuladas.<br>2. Dos asignaciones concurrentes no superan el cupo configurado.<br>3. Se muestran duración y condiciones; no se promete precio vitalicio, pedidos, prioridad de búsqueda ni mejor reputación. |
| [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7) | 1. Se recupera la compra correcta por su referencia y contexto.<br>2. Un timeout no provoca un nuevo cobro a ciegas.<br>3. La resolución y las diferencias quedan auditadas sin exponer secretos. |
| [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12) | 1. La devolución total pertenece a un pago de membresía elegible; backend toma el importe completo y la moneda del cobro original verificado.<br>2. Repetir la misma operación no duplica el reembolso.<br>3. Una devolución pendiente no se informa como realizada y nunca bloquea por sí sola la finalización de pedidos ya aceptados.<br>4. Confirmada la devolución, se retira únicamente el período de esa compra; conserva otros períodos válidos y los pedidos ya aceptados. |
| [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13) | 1. Se identifica actor, fecha, motivo y condiciones anteriores y nuevas.<br>2. Un rol no autorizado no cambia precios, cupos ni períodos.<br>3. No se eliminan compras o concesiones históricas para simular otra antigüedad. |
| [RF-13.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-2) | 1. Una publicación completa y autorizada aparece en el catálogo del maker.<br>2. Una publicación pausada, retirada o moderada impide pedidos nuevos.<br>3. Un retiro conserva los datos y archivos necesarios para los pedidos ya confirmados. |
| [RF-14.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-1) | 1. Un trabajo publicado aparece en el portfolio del maker titular.<br>2. Un archivo ajeno, no habilitado o sin autorización de publicación es rechazado.<br>3. Retirar o moderar un trabajo elimina su presentación pública y conserva las referencias necesarias.<br>4. El portfolio admite imágenes JPEG o PNG habilitadas y autorizadas para presentación. La vista pública entrega sus derivados autorizados.<br>5. El backend aplica el máximo vigente por trabajo al guardar, editar y publicar. Si se supera, responde con 422 e informa el máximo permitido. |
| [RF-15.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-3) | 1. Una ocultación autorizada retira la valoración del agregado público.<br>2. Una restitución recupera su contribución al agregado.<br>3. Una intervención sin permiso o sin motivo se rechaza y conserva el estado. |
| [RF-17.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-17-1) | 1. Un conjunto de datos conocido produce los conteos, promedio y filtros esperados.<br>2. Un intervalo sin actividad devuelve ceros y promedios ausentes.<br>3. Una consulta sin permiso administrativo o con intervalo inválido se rechaza. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-09](/3daltoque-docs/planificacion/parametros/#pd-09), [PD-10](/3daltoque-docs/planificacion/parametros/#pd-10), [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12), [PD-14](/3daltoque-docs/planificacion/parametros/#pd-14).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
