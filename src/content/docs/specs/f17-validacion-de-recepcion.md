---
title: "SPEC-F17 · Validación de recepción"
---

# SPEC-F17 · Validación de recepción

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Registrar la recepción física y completar la entrega.

El cliente titular confirma expresamente la recepción desde su sesión autenticada, sobre la entrega y revisión aprobada vigentes. El backend comprueba el acuerdo de entrega, autoriza al cliente, registra fecha y clave idempotente y completa una sola vez la entrega y el pedido. El maker puede informar un incidente y consultar el resultado. La evidencia de fabricación y el silencio mantienen la recepción pendiente.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F17](/3daltoque-docs/proyecto/funcionalidades/#f17) |
| Actores | Participantes habilitados por la política de recepción. |
| Canales | Lógica de negocio. Web y Mobile. |
| RF | [RF-06.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-7) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08) |
| CU | [CU-06](/3daltoque-docs/analisis/casos/cu-06-entrega-personal/) |

## 2. Pantallas y permisos

[WEB-ENT-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ent-02), [MOB-ENT-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ent-02).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| mecanismo | Configuración | Sí | Mecanismo aprobado en PD-08 |
| verificacion_ref | Referencia | Según mecanismo | Verificación en servidor y contexto de entrega |
| clave_operacion | Identidad | Sí | Cierre idempotente |

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
| ALT-F17-01 | Paso 3. Cambia lugar u horario: El sistema conserva otra propuesta y requiere aceptación de la contraparte. |
| ALT-F17-02 | Paso 5. Intenta confirmar como receptor: El sistema rechaza la acción y conserva la recepción pendiente. |
| ALT-F17-03 | Paso 6. Existe un incidente o falta aprobación vigente: Mantiene el cierre pendiente y permite registrar soporte con motivo. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| POST | `/entregas/{id}/completar` | versión y clave estable | recepción y pedido completado | Cliente titular y revisión/acuerdo vigentes. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `confirmaciones_entrega`, `entregas`, `pedidos`.

El cliente titular confirma expresamente la recepción desde su sesión autenticada, sobre la entrega y revisión aprobada vigentes. El backend comprueba el acuerdo de entrega, autoriza al cliente, registra fecha y clave idempotente y completa una sola vez la entrega y el pedido. El maker puede informar un incidente y consultar el resultado. La evidencia de fabricación y el silencio mantienen la recepción pendiente.

## 8. Componentes y estados

[DS01](/3daltoque-docs/design-system/02-componentes/#ds01), [DS11](/3daltoque-docs/design-system/02-componentes/#ds11), [DS12](/3daltoque-docs/design-system/02-componentes/#ds12), [DS28](/3daltoque-docs/design-system/02-componentes/#ds28).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F17-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | La confirmación identifica actor, pedido y fecha. |
| AC-F17-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Repetir una confirmación conserva un único cierre. |
| AC-F17-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F17-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-06.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-7) | 1. El cliente autorizado confirma la entrega acordada y obtiene un único registro de recepción.<br>2. Una repetición de la confirmación recupera el mismo resultado y conserva su fecha original.<br>3. Un maker, un tercero, una entrega sin acuerdo o una revisión sin aprobación vigente no completan la recepción. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-08](/3daltoque-docs/planificacion/parametros/#pd-08).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
