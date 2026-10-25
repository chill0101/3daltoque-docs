---
title: "SPEC-F20 · Panel de administración"
---

# SPEC-F20 · Panel de administración

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Gestionar soporte, configuración comercial y operaciones autorizadas con trazabilidad.

Administración gestiona los casos de soporte habilitados y registra actor y motivo. Publica versiones del plan, configura pruebas y cupo, asigna fundadores y participa en conciliación y devoluciones autorizadas del abono. El acceso a datos privados y las intervenciones sobre usuarios, pedidos o puntos de encuentro requieren la política específica.

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
| version_esperada | Versión | En configuración | Control concurrente |

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
| POST | `/admin/casos/{id}/intervenciones` | acción, recurso, versión, motivo y clave estable | resultado y auditoría | Permiso específico y validación del caso de uso. |
| POST | `/admin/publicaciones/{tipo}/{id}/moderacion` | acción, versión y motivo | estado público y auditoría | Catálogo o portfolio; permiso específico. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `casos_soporte`, `auditoria`, `configuraciones_versiones`.

Administración gestiona los casos de soporte habilitados y registra actor y motivo. Publica versiones del plan, configura pruebas y cupo, asigna fundadores y participa en conciliación y devoluciones autorizadas del abono. El acceso a datos privados y las intervenciones sobre usuarios, pedidos o puntos de encuentro requieren la política específica.

## 8. Componentes y estados

[DS03](/3daltoque-docs/design-system/02-componentes/#ds03), [DS11](/3daltoque-docs/design-system/02-componentes/#ds11), [DS12](/3daltoque-docs/design-system/02-componentes/#ds12), [DS19](/3daltoque-docs/design-system/02-componentes/#ds19), [DS24](/3daltoque-docs/design-system/02-componentes/#ds24), [DS43](/3daltoque-docs/design-system/02-componentes/#ds43).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F20-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Cada operación sensible conserva actor, motivo y resultado. |
| AC-F20-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Dos asignaciones concurrentes respetan el cupo configurado. |
| AC-F20-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F20-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-07.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-2) | 1. Solo un rol autorizado consulta o resuelve un caso de soporte.<br>2. Una acción de moderación registra actor, motivo y resultado.<br>3. La intervención no concede acceso privado irrestricto ni modifica pagos reales sin el circuito de verificación correspondiente. |
| [RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1) | 1. Solo un rol autorizado publica una versión válida y auditada.<br>2. Una versión nueva no cambia las compras, períodos o condiciones ya concedidos.<br>3. El maker ve importe, duración y renovación manual antes de pagar. |
| [RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3) | 1. Una misma identidad maker no consume dos cupos ni obtiene pruebas acumuladas.<br>2. Dos asignaciones concurrentes no superan el cupo configurado.<br>3. Se muestran duración y condiciones; no se promete precio vitalicio, pedidos, prioridad de búsqueda ni mejor reputación. |
| [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7) | 1. Se recupera la compra correcta por su referencia y contexto.<br>2. Un timeout no provoca un nuevo cobro a ciegas.<br>3. La resolución y las diferencias quedan auditadas sin exponer secretos. |
| [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12) | 1. La devolución pertenece a un pago de membresía elegible, con moneda e importe correctos.<br>2. Repetir la misma operación no duplica el reembolso.<br>3. Una devolución pendiente no se informa como realizada y nunca bloquea por sí sola la finalización de pedidos ya aceptados. |
| [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13) | 1. Se identifica actor, fecha, motivo y condiciones anteriores y nuevas.<br>2. Un rol no autorizado no cambia precios, cupos ni períodos.<br>3. No se eliminan compras o concesiones históricas para simular otra antigüedad. |
| [RF-13.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-2) | 1. Una publicación completa y autorizada aparece en el catálogo del maker.<br>2. Una publicación pausada, retirada o moderada impide pedidos nuevos.<br>3. Un retiro conserva los datos y archivos necesarios para los pedidos ya confirmados. |
| [RF-14.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-1) | 1. Un trabajo publicado aparece en el portfolio del maker titular.<br>2. Un archivo ajeno, no habilitado o sin autorización de publicación es rechazado.<br>3. Retirar o moderar un trabajo elimina su presentación pública y conserva las referencias necesarias. |
| [RF-15.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-3) | 1. Una ocultación autorizada retira la valoración del agregado público.<br>2. Una restitución recupera su contribución al agregado.<br>3. Una intervención sin permiso o sin motivo se rechaza y conserva el estado. |
| [RF-17.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-17-1) | 1. Un conjunto de datos conocido produce los conteos, promedio y filtros esperados.<br>2. Un intervalo sin actividad devuelve ceros y promedios ausentes.<br>3. Una consulta sin permiso administrativo o con intervalo inválido se rechaza. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-09](/3daltoque-docs/planificacion/parametros/#pd-09), [PD-10](/3daltoque-docs/planificacion/parametros/#pd-10), [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12), [PD-14](/3daltoque-docs/planificacion/parametros/#pd-14).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
