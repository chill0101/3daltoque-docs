---
title: "CU-07 Administración operativa"
---

# CU-07 Administración operativa

Fecha: 4 de noviembre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Administración operativa |
| Identificador | CU-07 |
| Actores | Administración, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F20. [RF-07.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-2), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12), [RF-13.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-2), [RF-14.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-1), [RF-15.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-3), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Identidad administrativa con sesión vigente, autenticación de menos de 8 horas, capacidad específica y recurso identificable. |
| Postcondición | Intervención autorizada y auditada o consulta de soporte conservada. |
| Descripción | Una persona autorizada abre un caso o una operación administrativa. |
| Resumen | Intervención autorizada y auditada o consulta de soporte conservada. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Administración | Registra el caso recibido o consulta uno existente, su recurso y la acción requerida. Para un abono, vincula el pago involucrado. |
| 2 | Sistema | Comprueba la capacidad y muestra únicamente datos autorizados. |
| 3 | Administración | Revisa el caso individualmente, registra motivo y decisión y confirma la intervención. Para devolver un abono debe autorizar expresamente el caso. |
| 4 | Sistema | Valida estado y versión y aplica el caso de uso específico. |
| 5 | Sistema | Conserva actor, motivo, recurso, estado anterior y resultado en auditoría. |
| 6 | Administración | Consulta el resultado y su referencia. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 2.A | Sistema | Falta permiso sobre datos o acción: Deniega la operación y protege la información privada. |
| 4.B | Sistema | La operación devuelve un abono: Exige caso autorizado del mismo pago, obtiene el importe total del cobro y concilia el resultado antes de retirar su período. Un caso rechazado conserva cobro y acceso. |
| 4.C | Sistema | El recurso cambió: Conserva la intervención pendiente y solicita revisar el estado actual. |
| 4.D | Sistema | Cancelación por inasistencia: Comprueba que el caso vinculado fue revisado, el último encuentro quedó atrás, se agotaron las reprogramaciones y la recepción sigue pendiente. Con permiso y motivo válidos, cancela el pedido y su entrega, registra la resolución y conserva el acuerdo en el historial. Registra el evento para avisar a cliente y maker en la app y por correo. |
| 4.E | Sistema | En un caso de seguimiento de revisión, registra la gestión con su motivo y conserva la revisión vigente, sus evidencias y el estado pendiente. |
| 4.F | Sistema | Ante una reapertura solicitada, valida permiso, motivo, versión del caso y vigencia de la revisión. Una aprobación abre el mismo caso. Un rechazo lo deja cerrado de forma definitiva para la revisión vinculada. Registra la decisión en auditoría. |

## Vencimiento del acceso administrativo

Al alcanzar 8 horas desde la autenticación, el panel y la API solicitan iniciar sesión nuevamente con 401 reauthentication_required. El recurso conserva su estado. Una autenticación nueva permite retomar la consulta; una intervención sensible recupera la versión vigente y solicita otra confirmación. La actividad y la renovación del vencimiento conservan la fecha original de autenticación.

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F20](/3daltoque-docs/specs/f20-panel-de-administracion/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-07, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
