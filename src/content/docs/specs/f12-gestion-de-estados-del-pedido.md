---
title: "SPEC-F12 · Gestión de estados del pedido"
---

# SPEC-F12 · Gestión de estados del pedido

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Consultar el avance del trabajo y organizar la actividad del maker.

El cliente consulta estados y plazos de su solicitud. El maker actualiza el avance productivo de sus pedidos. Las transiciones verifican actor, etapa y reglas y conservan estado anterior, nuevo estado, fecha y motivo. La vista de cola reúne trabajos del maker con acciones disponibles según su estado; su orden y las reglas de reordenación requieren definición.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F12](/3daltoque-docs/proyecto/funcionalidades/#f12) |
| Actores | Cliente, maker del pedido y procesos autorizados. |
| Canales | Lógica de negocio. Web y Mobile. |
| RF | [RF-02.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-4), [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RF-06.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-5), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08) |
| CU | [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/), [CU-05](/3daltoque-docs/analisis/casos/cu-05-revision-y-aprobacion/), [CU-06](/3daltoque-docs/analisis/casos/cu-06-entrega-personal/) |

## 2. Pantallas y permisos

[WEB-PED-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-ped-01), [WEB-MKR-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mkr-04), [MOB-PED-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-ped-01), [MOB-MKR-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mkr-04).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| accion | Acción del contrato | Sí | Permitida para actor y estado |
| version_esperada | Versión | Sí | Control de concurrencia |
| motivo | Texto | Según transición | Finalidad y tamaño configurados |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Maker | Abre su cola y selecciona un pedido. |
| 2 | Sistema | Entrega sus condiciones y acciones permitidas. |
| 3 | Maker | Actualiza el avance mediante una transición autorizada. |
| 4 | Sistema | Valida versión y transición y conserva el historial. |
| 5 | Maker | Carga fotos o videos y presenta una revisión del resultado. |
| 6 | Sistema | Comprueba archivos, conserva la revisión exacta y registra la solicitud de revisión al cliente. |
| 7 | Cliente | Consulta el avance y la evidencia autorizada. |

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/), [CU-05](/3daltoque-docs/analisis/casos/cu-05-revision-y-aprobacion/), [CU-06](/3daltoque-docs/analisis/casos/cu-06-entrega-personal/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F12-01 | Paso 4. Transición inválida o versión anterior: Conserva el estado y solicita recuperar el pedido vigente. |
| ALT-F12-02 | Paso 6. Archivo pendiente o rechazado: Mantiene la revisión en preparación y detalla la recuperación. |
| ALT-F12-03 | Paso 5. Presenta una corrección posterior: Crea una revisión nueva y conserva evidencia y decisiones anteriores. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| GET | `/makers/me/cola` | estado y cursor | pedidos y acciones permitidas | Orden estable por confirmación e identidad. |
| GET | `/pedidos/{id}` | pedido_id | condiciones, historial, revisión y entrega | Participante autorizado. |
| POST | `/pedidos/{id}/transiciones` | estado destino, versión, motivo y clave estable | estado e historial | Transición y actor permitidos. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `pedidos`, `historial_pedidos`, `revisiones_resultado`.

El cliente consulta estados y plazos de su solicitud. El maker actualiza el avance productivo de sus pedidos. Las transiciones verifican actor, etapa y reglas y conservan estado anterior, nuevo estado, fecha y motivo. La vista de cola reúne trabajos del maker con acciones disponibles según su estado; su orden y las reglas de reordenación requieren definición.

## 8. Componentes y estados

[DS10](/3daltoque-docs/design-system/02-componentes/#ds10), [DS19](/3daltoque-docs/design-system/02-componentes/#ds19), [DS28](/3daltoque-docs/design-system/02-componentes/#ds28), [DS35](/3daltoque-docs/design-system/02-componentes/#ds35), [DS43](/3daltoque-docs/design-system/02-componentes/#ds43).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F12-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Cada transición conserva actor, instante y estado anterior. |
| AC-F12-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Un maker vencido puede completar sus pedidos existentes. |
| AC-F12-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F12-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-02.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-4) | 1. El cliente consulta el mismo estado que determina la API.<br>2. Los plazos mostrados corresponden a los almacenados y no habilitan operaciones ya vencidas.<br>3. La ausencia de un plazo aprobado no se reemplaza por una fecha inventada. |
| [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3) | 1. Cada transición permitida deja un registro ligado al pedido.<br>2. Una transición rechazada no figura como realizada y conserva la evidencia operativa correspondiente.<br>3. La consulta permite reconstruir quién cambió el pedido y cuándo sin exponer secretos. |
| [RF-06.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-5) | 1. Los participantes consultan avance e historial.<br>2. Solo el actor autorizado ejecuta una transición válida.<br>3. El vencimiento comercial no cancela ni bloquea la finalización de pedidos existentes. |
| [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10) | 1. Un maker vencido no confirma un trabajo nuevo mediante una petición directa que eluda la interfaz.<br>2. Vencer el acceso no cancela pedidos ni bloquea su finalización.<br>3. La guarda determina la vigencia con la fecha del servidor, los permisos y los períodos concedidos. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-04](/3daltoque-docs/planificacion/parametros/#pd-04), [PD-05](/3daltoque-docs/planificacion/parametros/#pd-05), [PD-07](/3daltoque-docs/planificacion/parametros/#pd-07), [PD-08](/3daltoque-docs/planificacion/parametros/#pd-08).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
