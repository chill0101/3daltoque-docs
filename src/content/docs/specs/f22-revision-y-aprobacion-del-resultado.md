---
title: "SPEC-F22 · Revisión y aprobación del resultado"
---

# SPEC-F22 · Revisión y aprobación del resultado

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Registrar la decisión expresa del cliente sobre la evidencia de una revisión.

El cliente aprueba la revisión o registra observaciones. El sistema asocia la decisión con evidencia, actor y fecha. La entrega requiere aprobación expresa de la revisión aplicable. Mientras la revisión vigente siga pendiente, el cliente recibe un aviso obligatorio en la app a las 24 y 48 horas desde su presentación. El correo de cada recordatorio es opcional y está activo por defecto. Las correcciones y reclamos siguen PD-07.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F22](/3daltoque-docs/proyecto/funcionalidades/#f22) |
| Actores | Cliente del pedido para decidir la revisión. Cliente y maker para solicitar seguimiento a soporte. |
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
| ALT-F22-03 | Paso 3. Si el cliente sigue sin responder, conserva la revisión pendiente y procesa los recordatorios de las 24 y 48 horas en la app y prepara el correo según la preferencia del cliente. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| POST | `/revisiones/{id}/decisiones` | versión, decisión, comentario y clave estable | decisión y estado del pedido | Cliente titular y revisión actual pendiente. |
| POST | `/revisiones/{id}/seguimiento-soporte` | versión esperada, acción y clave estable | id y estado del caso | Participante de la revisión vigente y pendiente con al menos 72 horas desde su presentación. 201 crea el caso único y 200 recupera el existente o registra una solicitud de reapertura. Una nueva solicitud tras el rechazo definitivo devuelve `409 reopen_rejected`. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `decisiones_revision`, `revisiones_resultado`.

El cliente aprueba la revisión o registra observaciones. El sistema asocia la decisión con evidencia, actor y fecha. La entrega requiere aprobación expresa de la revisión aplicable. Mientras la revisión vigente siga pendiente, el cliente recibe un aviso obligatorio en la app a las 24 y 48 horas desde su presentación. El correo de cada recordatorio es opcional y está activo por defecto. Las correcciones y reclamos siguen PD-07.

Al cumplirse 72 horas desde la presentación, cliente y maker del pedido pueden solicitar seguimiento a soporte si la revisión sigue vigente y pendiente. El sistema mantiene un solo caso de seguimiento por revisión. La primera solicitud válida lo registra. Las siguientes devuelven la misma referencia y su estado vigente. Cada solicitud nueva registra a su participante en la auditoría del caso. Si soporte cerró el caso y la revisión sigue vigente y pendiente, cliente y maker pueden solicitar la reapertura desde el detalle de la revisión. La solicitud queda registrada en el mismo caso con la identidad del participante y la fecha. La solicitud queda pendiente de decisión de soporte. Una persona con permiso específico revisa el caso y registra el motivo y su decisión. Si aprueba, vuelve a abrir el mismo caso. Si soporte rechaza la reapertura, el caso queda cerrado con rechazo definitivo para esa revisión. Cualquier solicitud posterior de reapertura se rechaza y conserva el caso y la decisión registrada. Una revisión posterior tiene su propio seguimiento según PD-07. La revisión conserva su estado y sus evidencias. Cliente y maker consultan el resultado de la reapertura en el mismo caso, desde el detalle de la revisión. El caso muestra su estado y la decisión de soporte con su fecha. La aprobación sigue a cargo del cliente. Soporte puede contactar a las partes y registrar sus gestiones en el caso. La revisión presentada sigue vigente y pendiente hasta la decisión del cliente. El seguimiento conserva la versión, la evidencia y la fecha de presentación. Una corrección se presenta como otra revisión tras las observaciones del cliente. Web y Mobile muestran «Solicitar seguimiento» en el detalle de la revisión según las acciones que habilita la API. Si el caso está cerrado y la revisión sigue pendiente, muestran «Solicitar reapertura» según las acciones autorizadas. Una solicitud registrada se muestra como «Reapertura pendiente de soporte». Si soporte la rechaza, Web y Mobile muestran «Reapertura rechazada» y retiran la acción de solicitarla para esa revisión. El detalle toma el caso asociado a la revisión de `GET /pedidos/{id}`. Muestra «Reapertura aprobada» o «Reapertura rechazada» con la fecha cuando soporte decide. Al confirmar la acción, el backend revalida la versión, el estado pendiente y el plazo con su reloj.

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
| [RF-06.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-4) | 1. Avanzar el tiempo sobre una revisión sin respuesta no cambia su estado a aprobada.<br>2. Un recordatorio enviado no habilita entrega o finalización.<br>3. Toda aprobación registrada tiene una acción explícita y autorizada del cliente sobre la revisión.<br>4. Al cumplirse 72 horas de la presentación, cliente y maker pueden solicitar seguimiento para la revisión vigente y pendiente. Ambas solicitudes recuperan un único caso, incluso si llegan en paralelo. Un reintento con la misma clave conserva su registro de auditoría. Registrar seguimiento conserva la versión y el estado. Un intento de presentar otra revisión mientras la vigente está pendiente se rechaza. La entrega sigue sujeta a aprobación expresa.<br>5. Si el caso está cerrado y la revisión sigue vigente y pendiente, la solicitud de reapertura conserva el identificador del caso y queda auditada. Un reintento con la misma clave recupera la solicitud registrada.<br>6. Soporte autorizado aprueba o rechaza la reapertura con motivo. La aprobación vuelve a abrir el mismo caso y el rechazo lo deja cerrado. Ambas acciones registran actor, fecha, motivo y resultado.<br>7. Tras un rechazo definitivo, un intento nuevo de cliente o maker devuelve `409 reopen_rejected` y conserva el caso cerrado y su decisión.<br>8. Cliente y maker pueden consultar el estado, el resultado y la fecha en el caso. La consulta de un tercero se deniega. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-07](/3daltoque-docs/planificacion/parametros/#pd-07).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
