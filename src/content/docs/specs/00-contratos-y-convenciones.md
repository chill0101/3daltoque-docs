---
title: "Convenciones y contratos compartidos"
---

# Convenciones y contratos compartidos

Fecha: 25 de octubre de 2026. Versión: 2.0.

## Fuente y alcance de decisión

Las reglas funcionales se fundamentan en el catálogo F01 a F25, los RF/RNF, ADR-002 y [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Las rutas ya listadas en API se identifican como catálogo. Las ampliaciones de rutas, DTO, capacidades y organización visual constituyen propuestas de implementación de este paquete. Cada PD conserva la decisión comercial o de operación que debe acordarse.

## Representaciones

| Elemento | Contrato propuesto |
| --- | --- |
| Prefijo | /api/v1 |
| Identidades | UUID opaco; propiedad y pertenencia se verifican en servidor. |
| Importes | Cadena decimal y moneda separada; cálculo y redondeo en servidor. La interfaz conserva la precisión del contrato. |
| Fechas | ISO 8601 en UTC; zona horaria identificada al presentar horarios de encuentro. |
| Vigencia | Intervalos de acceso [inicio, fin); fecha efectiva del servidor. |
| Versiones | Entero o referencia versionada identificada en cada recurso; version_esperada en mutaciones concurrentes. |
| Listas | items y next_cursor opaco; filtros normalizados y orden estable. |
| Capacidades | Acciones permitidas derivadas por servidor de identidad, recurso, estado y vigencia aplicable. |
| Claves de operación | Identidad estable para el mismo intento lógico; nueva intención utiliza otra clave. |
| Correlación | request_id y referencia del recurso; excluir secretos y datos personales innecesarios. |

La elección de cookie o token, recuperación de sesión y política de revocación se resuelve en PD-01. La capa de acceso encapsula esa decisión para los clientes.

## Éxito y error

Las respuestas de éxito identifican el recurso, su versión, estado y acciones permitidas cuando corresponda. Las operaciones aceptadas para procesamiento devuelven su referencia y una forma de consultar el resultado.

Se propone application/problem+json, con type, title, status, detail e instance, y extensiones code, request_id y errors. Los errores de campo utilizan field y message. Los textos sirven a la persona; code permite decidir el comportamiento del cliente. El formato se fundamenta en [RFC 9457](https://www.rfc-editor.org/rfc/rfc9457).

| HTTP propuesto | code de aplicación | Tratamiento de interfaz |
| --- | --- | --- |
| 401 | authentication_required | Recuperar autenticación y preservar una intención de navegación segura. |
| 403 | action_forbidden | Mostrar la condición de acceso y mantener acciones permitidas. |
| 404 | resource_unavailable | Mensaje seguro según política de visibilidad. |
| 409 | version_conflict | Consultar versión actual y pedir revisar los cambios. |
| 409 | offer_expired / request_closed | Recuperar alternativas disponibles. |
| 409 | founder_capacity_exhausted | Conservar el formulario y mostrar el estado del programa. |
| 409 | membership_required | Ofrecer renovación y mantener pedidos existentes. |
| 422 | validation_failed | Relacionar errores con campos y enfocar el resumen. |
| 429 | usage_limit_reached | Mostrar la ventana o acción de recuperación informada por servidor. |
| 502/503 | integration_unavailable | Conservar el recurso local y mostrar recuperación. |
| 202 | operation_pending | Consultar resultado antes de repetir una operación sensible. |

Un timeout de transporte representa incertidumbre del cliente. Para aceptación de oferta, pedido de producto, compra de abono, devolución y cierre se consulta la operación existente antes de reenviar. Se propone transportar la clave mediante Idempotency-Key y relacionarla con clave_operacion en persistencia. La clave se acota a actor, operación, recurso y payload normalizado. Una repetición con contenido distinto debe producir un conflicto identificable. Retención y ventana de deduplicación quedan sujetas a la política de operación.

## Consistencia y eventos

- Aceptación y cierre de alternativas se conservan en la misma transacción del pedido.
- La asignación fundadora comprueba cupo y conserva inscripción y autor.
- Una compra concede como máximo un período; las renovaciones serializan el cálculo del intervalo.
- Mensajes y avisos se conservan antes de anunciar confirmación de su registro.
- El evento de salida acompaña la transacción de negocio; consumidores deduplican por su identidad.
- Los webhooks del abono se conservan y verifican con el recurso del proveedor antes de aplicar efectos.
- Las decisiones sobre evidencia referencian revisión y archivos exactos.
- El vencimiento de membresía conserva la operativa de pedidos confirmados.

Los nombres de eventos existentes se mantienen en [API y eventos](/3daltoque-docs/diseno/api-eventos/). Los nuevos contratos deben registrar nombre, versión, recurso, correlación, payload mínimo y consumidores.

## Estados de interfaz compartidos

| Estado | Representación y recuperación |
| --- | --- |
| Carga inicial | Skeleton o progreso con nombre accesible; conservar estructura. |
| Vacío | Explicar el recurso ausente y ofrecer la acción relevante. |
| Error de campo | Mensaje junto al control y enlace desde ErrorSummary. |
| Error recuperable | Alert con acción de reintento segura. |
| Sin permiso | Mensaje contextual y acciones autorizadas; backend aplica la restricción. |
| Conflicto | Mostrar datos actuales y solicitar revisión antes de confirmar. |
| Sin conexión | Indicar la interrupción y conservar únicamente información permitida. |
| Pendiente externo | Estado explícito con consulta del resultado persistido. |
| Éxito | Confirmación referida al recurso y su estado. |
| Información desactualizada | Recuperar versión; el servidor valida nuevamente la mutación. |

## Condiciones de seguridad y accesibilidad

Verificar propiedad y permisos en cada lectura, escritura, descarga y suscripción. Las credenciales del proveedor permanecen en servidor. La ruta de retorno del checkout utiliza una referencia de compra autorizada.

Formularios con etiqueta visible, ayuda y errores asociados; foco visible; navegación por teclado y lector de pantalla; mensajes de estado identificables. Los componentes se describen en [el design system](/3daltoque-docs/design-system/).

## Convenciones de aceptación

AC-Fxx-nn identifica condiciones de aceptación de esta spec. Los CP mantienen sus identificadores en el plan de pruebas y deben relacionarse con estas condiciones. Cada caso de ejecución agrega versión, ambiente, fecha, datos y evidencia.

Las reglas de catálogo, portfolio, reputación, historial y reportes cuentan con RF, CU y modelo de datos. Los valores operativos pendientes se concentran en [PD-01 a PD-15](/3daltoque-docs/planificacion/parametros/).

## Dos orígenes del pedido

La aceptación de una oferta personalizada y la confirmación directa de un producto crean el mismo agregado de pedido. El pedido conserva cliente, maker, origen, versión de condiciones, cantidades, importes, moneda y plazo. La ruta de producto utiliza la configuración publicada por su maker. La transacción conserva solicitud y oferta de referencia, pedido, condiciones, conversación y eventos.

La clave de confirmación pertenece al cliente y a la intención normalizada. Una repetición con el mismo cuerpo recupera el resultado original antes de verificar nuevamente una publicación que pudo cambiar después del acuerdo. Reutilizar la clave con otra cantidad o producto produce conflicto. Una intención nueva valida la versión actual, la publicación y el acceso comercial del maker.

## Comunicación y acceso comercial

La conversación única pertenece a un pedido confirmado. La bandeja, el historial, los envíos, los adjuntos y las actualizaciones comprueban la participación actual. El vencimiento comercial impide nuevos acuerdos y mantiene la finalización de pedidos, mensajes y evidencias existentes. Los archivos públicos de catálogo y portfolio utilizan derivados autorizados; originales, STL y evidencia privada conservan sus controles de acceso.

## Lecturas públicas y cálculos

El perfil público integra capacidades, zona autorizada, catálogo, portfolio y reputación publicada. Los valores monetarios y los agregados se calculan en el servidor. El reporte devuelve intervalo, zona horaria y versión de fórmula. Los filtros de historial y reporte tienen orden y paginación estables. La API común cubre las 25 funcionalidades en [su catálogo de operaciones](/3daltoque-docs/diseno/api-eventos/).
