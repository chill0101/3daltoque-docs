---
title: "SPEC-F16 · Entrega en Nodo Amigo"
---

# SPEC-F16 · Entrega en Nodo Amigo

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Acordar un encuentro para entregar una pieza cuya revisión está aprobada.

Las partes coordinan un punto neutral y un horario y conservan el acuerdo. Nodo Amigo designa el punto de encuentro utilizado en el catálogo de alcance; la modalidad vigente es encuentro personal entre cliente y maker. La visualización comparte la ubicación necesaria y preserva los datos privados.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F16](/3daltoque-docs/proyecto/funcionalidades/#f16) |
| Actores | Cliente y maker del pedido. |
| Canales | Lógica de negocio. Web y Mobile. |
| RF | [RF-06.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-6), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17) |
| CU | [CU-06](/3daltoque-docs/analisis/casos/cu-06-entrega-personal/) |

## 2. Pantallas y permisos

[WEB-ENT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ent-01), [MOB-ENT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ent-01).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| revision_aprobada_id | UUID | Sí | Revisión aprobada del mismo pedido |
| fecha_hora_acordada | Fecha UTC | Según política | Mostrar zona horaria |
| punto_encuentro_id | UUID | Sí | Referencia acordada y precisión autorizada |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Cliente o maker | Propone un punto neutral y un horario. |
| 2 | Sistema | Valida ubicación autorizada, revisión aprobada y versión del acuerdo. |
| 3 | Contraparte | Acepta la propuesta de encuentro. |
| 4 | Sistema | Conserva el acuerdo vigente para ambos participantes. |
| 5 | Cliente | Después del intercambio confirma expresamente la recepción desde su sesión. |
| 6 | Sistema | Comprueba cliente, acuerdo y revisión vigentes; registra la recepción idempotente y completa la entrega. |
| 7 | Sistema | Actualiza el pedido y avisa a las partes. |

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-06](/3daltoque-docs/analisis/casos/cu-06-entrega-personal/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F16-01 | Paso 3. Cambia lugar u horario: El sistema conserva otra propuesta y requiere aceptación de la contraparte. |
| ALT-F16-02 | Paso 5. Intenta confirmar como receptor: El sistema rechaza la acción y conserva la recepción pendiente. |
| ALT-F16-03 | Paso 6. Existe un incidente o falta aprobación vigente: Mantiene el cierre pendiente y permite registrar soporte con motivo. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| POST | `/pedidos/{id}/entrega` | punto, horario y versión | entrega y propuesta | Revisión aprobada y participante. |
| POST | `/entregas/{id}/acuerdo` | versión y clave estable | acuerdo vigente | Contraparte de quien propuso. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `entregas`, `puntos_encuentro`, `ubicaciones`.

Las partes coordinan un punto neutral y un horario y conservan el acuerdo. Nodo Amigo designa el punto de encuentro utilizado en el catálogo de alcance; la modalidad vigente es encuentro personal entre cliente y maker. La visualización comparte la ubicación necesaria y preserva los datos privados.

## 8. Componentes y estados

[DS03](/3daltoque-docs/design-system/02-componentes/#ds03), [DS12](/3daltoque-docs/design-system/02-componentes/#ds12), [DS23](/3daltoque-docs/design-system/02-componentes/#ds23), [DS37](/3daltoque-docs/design-system/02-componentes/#ds37).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F16-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Coordinar entrega exige la revisión aplicable aprobada. |
| AC-F16-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | El acuerdo conserva pedido, ubicación y horario. |
| AC-F16-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F16-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-06.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-6) | 1. Un pedido aprobado puede registrar un acuerdo de punto y horario entre sus participantes.<br>2. Un pedido sin aprobación vigente no habilita coordinación de entrega.<br>3. La búsqueda pública no expone el domicilio privado del maker como consecuencia de coordinar el encuentro. |
| [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1) | 1. Una selección confirmada conserva coordenadas y metadatos autorizados con significado inequívoco.<br>2. Un resultado ambiguo o inexistente requiere corrección o confirmación y no se adopta silenciosamente.<br>3. Permiso denegado o falla externa se informa con las alternativas que se hayan habilitado. |
| [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2) | 1. El mapa representa los recursos autorizados de un conjunto de prueba conocido.<br>2. La vista pública no permite reconstruir el domicilio privado del maker mediante los datos enviados.<br>3. Una falla de servicio se distingue de ausencia de resultados y no invalida acuerdos ya registrados. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-04](/3daltoque-docs/planificacion/parametros/#pd-04), [PD-08](/3daltoque-docs/planificacion/parametros/#pd-08), [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
