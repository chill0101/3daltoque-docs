---
title: "SPEC-F13 · Mensajería cliente–maker"
---

# SPEC-F13 · Mensajería cliente–maker

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Conservar la comunicación relacionada con un pedido.

La conversación se vincula a un pedido confirmado y a sus participantes autorizados. Cliente y maker consultan el historial y envían mensajes mientras el pedido siga accesible conforme a la política de conservación. La creación del pedido habilita una sola conversación. La consulta previa a la contratación queda fuera del circuito de chat de v1. El vencimiento comercial del maker mantiene la comunicación de los pedidos existentes. El backend verifica participante y permiso actual, exige texto o al menos un adjunto habilitado, y persiste el mensaje antes de confirmar envío. Conserva remitente, conversación, fecha del servidor y clave estable del cliente. La repetición del mismo contenido y clave recupera el mensaje; una clave reutilizada con otro contenido produce conflicto. Los estados pendiente, enviado y fallido representan el resultado del comando y se reconcilian con el historial persistido. El cliente y el maker consultan una bandeja paginada de sus conversaciones de pedidos confirmados, con referencia de pedido y último mensaje autorizado. La lectura comprueba permisos actuales y permite abrir el historial. La vista vacía ofrece acceso a los pedidos; los mensajes pendientes del dispositivo se reconcilian con el servidor.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F13](/3daltoque-docs/proyecto/funcionalidades/#f13) |
| Actores | Cliente y maker del pedido; consulta administrativa con capacidad específica y auditoría. |
| Canales | Lógica de negocio. Web y Mobile. |
| RF | [RF-05.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-1), [RF-05.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2), [RF-11.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RF-05.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-4) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19) |
| CU | [CU-14](/3daltoque-docs/analisis/casos/cu-14-conversar-en-un-pedido/), [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/), [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/) |

## 2. Pantallas y permisos

[WEB-CHAT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-chat-01), [MOB-CHAT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-chat-01).

La bandeja y conversación pertenecen a pedidos confirmados. El vencimiento comercial mantiene la comunicación de pedidos existentes.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| clave_cliente | Identidad opaca | Sí | Conservar al reintentar el mismo mensaje |
| texto | Texto | Según contenido | Longitud configurada |
| archivo_ids | Lista UUID | Opcional | Adjuntos autorizados para la conversación |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Participante | Consulta su bandeja y selecciona un pedido. |
| 2 | Sistema | Comprueba pertenencia y recupera la conversación única y su historial paginado. |
| 3 | Participante | Escribe texto o selecciona adjuntos habilitados y envía con una clave estable. |
| 4 | Sistema | Revalida permiso y contenido y persiste el mensaje antes de confirmar. |
| 5 | Sistema | Registra el aviso y devuelve identidad y fecha del mensaje. |
| 6 | Participante | Consulta el historial y recupera cambios al reconectar. |

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-14](/3daltoque-docs/analisis/casos/cu-14-conversar-en-un-pedido/), [CU-03](/3daltoque-docs/analisis/casos/cu-03-elegir-oferta/), [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F13-01 | Paso 2. Todavía no existe pedido confirmado o el usuario es ajeno: Deniega la conversación y protege el historial. |
| ALT-F13-02 | Paso 4. Red interrumpida o resultado incierto: Permite reintentar con la misma clave y reconciliar el mensaje. |
| ALT-F13-03 | Paso 4. Misma clave con contenido distinto: Devuelve conflicto y conserva el mensaje original. |
| ALT-F13-04 | Paso 2. Membresía vencida con pedido existente: Mantiene la conversación autorizada del pedido. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| GET | `/conversaciones` | cursor | conversaciones de pedidos confirmados | Participante de cada pedido. |
| GET | `/pedidos/{id}/conversacion` | pedido_id | conversación y capacidades | Pedido confirmado y participante autorizado. |
| GET | `/conversaciones/{id}/mensajes` | cursor | mensajes y cursor siguiente | Revalida participación y conservación. |
| POST | `/conversaciones/{id}/mensajes` | clave_cliente, texto y archivo_ids | mensaje_id y fecha | Persistencia antes de confirmar y deduplicación. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `conversaciones`, `participantes_conversacion`, `mensajes`, `mensaje_archivos`.

La conversación se vincula a un pedido confirmado y a sus participantes autorizados. Cliente y maker consultan el historial y envían mensajes mientras el pedido siga accesible conforme a la política de conservación. La creación del pedido habilita una sola conversación. La consulta previa a la contratación queda fuera del circuito de chat de v1. El vencimiento comercial del maker mantiene la comunicación de los pedidos existentes. El backend verifica participante y permiso actual, exige texto o al menos un adjunto habilitado, y persiste el mensaje antes de confirmar envío. Conserva remitente, conversación, fecha del servidor y clave estable del cliente. La repetición del mismo contenido y clave recupera el mensaje; una clave reutilizada con otro contenido produce conflicto. Los estados pendiente, enviado y fallido representan el resultado del comando y se reconcilian con el historial persistido. El cliente y el maker consultan una bandeja paginada de sus conversaciones de pedidos confirmados, con referencia de pedido y último mensaje autorizado. La lectura comprueba permisos actuales y permite abrir el historial. La vista vacía ofrece acceso a los pedidos; los mensajes pendientes del dispositivo se reconcilian con el servidor.

## 8. Componentes y estados

[DS16](/3daltoque-docs/design-system/02-componentes/#ds16), [DS25](/3daltoque-docs/design-system/02-componentes/#ds25), [DS29](/3daltoque-docs/design-system/02-componentes/#ds29), [DS30](/3daltoque-docs/design-system/02-componentes/#ds30), [DS41](/3daltoque-docs/design-system/02-componentes/#ds41).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F13-01 | Participante de un pedido confirmado | Envía texto o adjuntos habilitados con clave estable | El historial devuelve un mensaje persistido con remitente y fecha del servidor. |
| AC-F13-02 | Mensaje previamente confirmado | Reintenta el mismo contenido con la misma clave | Recupera el mensaje original; el historial conserva una sola entrada. |
| AC-F13-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F13-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-05.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-1) | 1. Un pedido confirmado dispone de una única conversación para sus participantes.<br>2. Una solicitud, invitación o producto sin pedido confirmado impide abrir o enviar mensajes en una conversación de pedido.<br>3. Un usuario ajeno recibe una denegación de acceso; los participantes conservan historial al reconectar o vencer la membresía del maker. |
| [RF-05.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2) | 1. Un mensaje informado como enviado puede recuperarse en el historial autorizado.<br>2. Repetir el mismo envío identificado no genera otro mensaje visible.<br>3. Un adjunto ajeno, inválido o no habilitado no se publica como parte del mensaje. |
| [RF-11.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2) | 1. Después de reconectarse, un cliente autorizado recupera mensajes y estado vigentes sin pérdida de datos persistidos.<br>2. Repetir un aviso no duplica mensajes ni transiciones visibles.<br>3. Una suscripción o consulta a un recurso ajeno es denegada y no filtra su contenido. |
| [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10) | 1. Un maker vencido no confirma un trabajo nuevo mediante una petición directa que eluda la interfaz.<br>2. Vencer el acceso no cancela pedidos ni bloquea su finalización.<br>3. La guarda determina la vigencia con la fecha del servidor, los permisos y los períodos concedidos. |
| [RF-05.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-4) | 1. La bandeja contiene únicamente conversaciones de pedidos en los que participa el usuario.<br>2. Una paginación estable permite recuperar las conversaciones sin duplicarlas.<br>3. Una pérdida de conexión conserva los mensajes pendientes y permite reintentar con su identidad original. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-02](/3daltoque-docs/planificacion/parametros/#pd-02), [PD-06](/3daltoque-docs/planificacion/parametros/#pd-06), [PD-11](/3daltoque-docs/planificacion/parametros/#pd-11), [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
