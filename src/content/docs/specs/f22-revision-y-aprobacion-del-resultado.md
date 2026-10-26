---
title: "SPEC-F22 · Revisión y aprobación del resultado"
---

# SPEC-F22 · Revisión y aprobación del resultado

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Registrar la decisión expresa del cliente sobre la evidencia de una revisión.

El cliente aprueba la revisión o registra observaciones. El sistema asocia la decisión con evidencia, actor y fecha. La entrega requiere aprobación expresa de la revisión aplicable. Ante falta de respuesta, la revisión permanece pendiente y se aplican los recordatorios acordados. Las correcciones y reclamos siguen PD-07.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F22](/3daltoque-docs/proyecto/funcionalidades/#f22) |
| Actores | Cliente del pedido; maker para la gestión posterior de observaciones. |
| Canales | Lógica de negocio. Web y Mobile. |
| RF | [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3), [RF-06.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-4) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08) |
| CU | [CU-05](/3daltoque-docs/analisis/casos/cu-05-revision-y-aprobacion/) |

## 2. Pantallas y permisos

[WEB-REV-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-rev-02), [MOB-REV-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-rev-02).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| revision_id | UUID | Sí | Revisión exacta que el cliente consultó |
| decision | Valor del contrato | Sí | Aprobación u observación admitida |
| observacion | Texto | Según decisión | Contenido y límite acordados |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Cliente | Abre la revisión pendiente del pedido. |
| 2 | Sistema | Presenta evidencia, referencia y versión de la revisión. |
| 3 | Cliente | Revisa el resultado y solicita aprobarlo. |
| 4 | Sistema | Comprueba identidad, revisión actual y estado pendiente. |
| 5 | Sistema | Conserva la aprobación y su referencia y habilita la coordinación de entrega. |
| 6 | Sistema | Notifica el resultado al maker. |

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-05](/3daltoque-docs/analisis/casos/cu-05-revision-y-aprobacion/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F22-01 | Paso 3. Registra observaciones: El sistema conserva el comentario y mantiene pendiente la aprobación hasta una revisión nueva o resolución autorizada. |
| ALT-F22-02 | Paso 4. La revisión fue reemplazada: Rechaza la decisión sobre la versión anterior y presenta la vigente. |
| ALT-F22-03 | Paso 3. El cliente permanece sin responder: Mantiene la revisión pendiente y genera únicamente los recordatorios configurados. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| POST | `/revisiones/{id}/decisiones` | versión, decisión, comentario y clave estable | decisión y estado del pedido | Cliente titular y revisión actual pendiente. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `decisiones_revision`, `revisiones_resultado`.

El cliente aprueba la revisión o registra observaciones. El sistema asocia la decisión con evidencia, actor y fecha. La entrega requiere aprobación expresa de la revisión aplicable. Ante falta de respuesta, la revisión permanece pendiente y se aplican los recordatorios acordados. Las correcciones y reclamos siguen PD-07.

## 8. Componentes y estados

[DS01](/3daltoque-docs/design-system/02-componentes/#ds01), [DS03](/3daltoque-docs/design-system/02-componentes/#ds03), [DS12](/3daltoque-docs/design-system/02-componentes/#ds12), [DS31](/3daltoque-docs/design-system/02-componentes/#ds31), [DS32](/3daltoque-docs/design-system/02-componentes/#ds32).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F22-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | La aprobación queda vinculada a la revisión y archivos consultados. |
| AC-F22-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | El paso del tiempo conserva la necesidad de aprobación expresa. |
| AC-F22-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F22-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3) | 1. Una aprobación válida identifica la revisión y permite las acciones de entrega autorizadas.<br>2. Una observación conserva el motivo y mantiene bloqueada la entrega hasta resolver el proceso acordado.<br>3. Otro usuario o una solicitud sin revisión pendiente no produce una aprobación válida. |
| [RF-06.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-4) | 1. Avanzar el tiempo sobre una revisión sin respuesta no cambia su estado a aprobada.<br>2. Un recordatorio enviado no habilita entrega o finalización.<br>3. Toda aprobación registrada tiene una acción explícita y autorizada del cliente sobre la revisión. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-07](/3daltoque-docs/planificacion/parametros/#pd-07).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
