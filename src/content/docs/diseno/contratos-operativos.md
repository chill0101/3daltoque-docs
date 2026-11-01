---
title: "Contratos operativos entre sistemas"
---

# Contratos operativos entre sistemas

Versión 1.0. Fecha: 1 de noviembre de 2026.

El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva 75 operaciones funcionales. Este documento fija transporte, tiempos, identidad, recuperación y responsabilidades de las seis integraciones. Las entradas y salidas de negocio se mantienen en las 25 specs y sus contratos compartidos. El [contrato OpenAPI 3.1](/3daltoque-docs/documentos/e37598f41824-openapi.json) reúne solicitudes tipadas, esquemas de respuesta, autenticación, errores y parámetros de cada operación.

## Protocolo común

HTTPS y JSON UTF-8 para la API bajo /api/v1. UUID opaco por recurso; fecha ISO 8601 en UTC; importes como cadenas decimales con moneda explícita. Las listas usan items y next_cursor, con orden estable. Las mutaciones concurrentes envían version_esperada. Idempotency-Key transporta la clave de una intención y se conserva ante un resultado incierto.

La respuesta exitosa contiene el recurso y su versión; una creación utiliza 201, una consulta o actualización 200, y un trabajo externo aceptado 202 con recurso consultable. Una eliminación lógica puede devolver 204. El error contiene code, message, request_id y field_errors cuando corresponda. Los códigos funcionales se relacionan con los códigos HTTP de los contratos compartidos.

## INT-01: Checkout Pro del abono

| Aspecto | Contrato |
| --- | --- |
| Origen/destino | Backend y cuenta receptora de la plataforma; Checkout Pro alojado por Mercado Pago. |
| Entrada | compra_id, versión del plan, importe, moneda, referencia externa y entorno conservados en servidor. |
| Salida | Referencia del checkout y URL autorizada; el estado comercial se obtiene consultando la compra en backend. |
| Identidad | Credencial de la plataforma por entorno; firma del webhook validada según la documentación del proveedor. |
| Persistencia | compras_membresia, pagos, intentos_pago, eventos_proveedor y periodos_membresia. |
| Confirmación | Consultar el recurso de pago al proveedor y comprobar compra, importe, moneda, receptor y entorno antes de conceder acceso. |
| Timeout/reintento | Referencia de aplicación: 10 s; resultado incierto conserva la compra y se concilia antes de crear otro checkout. |
| Duplicados | Deduplicar evento y compra; cada compra pagada concede un período como máximo. |
| Retorno | Web y Mobile abren el checkout alojado y vuelven a consultar compra_id; el usuario puede retomar desde su historial. |
| Devolución | Acción autorizada con motivo, referencia externa y conciliación; conservar el efecto sobre períodos según política del plan. |

Las URLs de retorno y notificación se registran por entorno. Un webhook se reconoce después de conservar de forma duradera el evento o el trabajo de reconciliación. Un error temporal se recupera mediante trabajo persistido; una firma inválida queda rechazada y auditada con payload minimizado. [Documentación de Checkout Pro](https://www.mercadopago.com.ar/developers/es/docs/checkout-pro-preferences/overview).

## INT-02: mapas y geocodificación

Entrada: búsqueda textual o coordenada autorizada y precisión solicitada. Salida: ubicación normalizada, zona pública y metadatos de atribución. El cálculo de compatibilidad y distancia pertenece a PostgreSQL/PostGIS. Timeout de referencia: 3 s; un fallo permite cargar la zona manualmente y consultar una lista. El adaptador conserva proveedor, límite, atribución y política de caché. Un servicio público de mapas requiere verificar sus condiciones antes de asignarle tráfico del piloto.

## INT-03: archivos y análisis

Entrada: finalidad, nombre de presentación, tipo, tamaño y contexto; autorización emitida por backend. Salida: archivo_id, autorización temporal, estado de transferencia/análisis y referencia privada. La transferencia utiliza la URL emitida; finalización y acceso vuelven a la API. El análisis tiene un presupuesto de 30 s en el fixture y ejecución aislada. Un timeout conserva estado recuperable y permite cotización humana cuando la estimación geométrica resulta insuficiente.

La carga se deduplica por intención; el hash comprueba integridad del objeto. Los eventos posteriores se publican después de conservar el estado. Los medios públicos de catálogo y portfolio son derivados autorizados. La revocación impide nuevas autorizaciones y las URLs emitidas caducan según su TTL.

## INT-04: notificaciones

Entrada: evento_id, destinatario, plantilla versionada, canal y contexto autorizado. Salida: notificación interna y estado de cada intento externo. eventos_salida y trabajos conservan el hecho local; envios_notificacion registra el resultado externo. Timeout de referencia: 5 s. Reintentar fallas temporales a los 30 s, 2 min y 10 min; después dejar la incidencia consultable para operación. Deduplicar por evento, destinatario y canal. El canal externo conserva el mínimo contenido necesario y dirige al usuario al recurso autenticado.

## INT-05: API común y recuperación de eventos

Web y Mobile utilizan la misma API y permisos. Las consultas se paginan por recurso y cursor opaco. GET /eventos entrega un lote autorizado y el siguiente cursor; el cliente consulta periódicamente mientras la vista está activa y ajusta el intervalo en segundo plano. El cursor se guarda por cuenta y se descarta al cerrar sesión. Cada reconexión reautoriza recursos y deduplica eventos por ID. Un cursor vencido requiere una consulta completa de la vista.

El chat conserva el mensaje antes de confirmar; POST de mensajes usa una clave estable. El cliente muestra pendiente, confirmado o error recuperable. El vencimiento del abono preserva la conversación de pedidos existentes.

## INT-06: simulador de cobros

Entrada: compra del abono, resultado de prueba solicitado y permiso de demostración. Salida: operación y estado identificados como simulados. Backend separa modos y entornos en compras y períodos. La simulación se restringe a demo/prueba y utiliza las mismas invariantes de deduplicación y fechas. CP-027 comprueba el rechazo en el entorno comercial.

## Salud del despliegue

GET /health/live comprueba el proceso y devuelve 200 cuando responde. GET /health/ready devuelve 200 con la base disponible y configuración indispensable válida, o 503 con el identificador del control fallido. Estas dos operaciones técnicas complementan las 75 operaciones funcionales. Las respuestas públicas exponen estado mínimo; el detalle de proveedores y errores queda en observabilidad autorizada.

## Versionado y cambios

Un cambio compatible agrega campos opcionales o una operación. Modificar semántica, obligatoriedad o estado exige una revisión del contrato y de ambos clientes. Los eventos conservan ID, nombre, versión, fecha, recurso y correlación. La matriz relaciona cada cambio con RF/RNF, CU, operación y CP antes de publicarlo.
