---
title: "SPEC-F23 · Gestión de archivos privados"
---

# SPEC-F23 · Gestión de archivos privados

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Controlar el ingreso, uso, consulta y conservación de STL, evidencias y adjuntos.

El backend autoriza la transferencia y comprueba existencia, pertenencia, tamaño, contenido e integridad. La solicitud o revisión utiliza una referencia de archivo identificable. Cada consulta valida el permiso sobre su recurso. Retiro, conservación y borrado siguen la política de PD-12, con registro de acción y motivo. El STL original del pedido se conserva durante 90 días desde el cierre del pedido completado o desde su cancelación, según corresponda. El STL asociado a una solicitud personalizada enviada que vence sin generar un pedido se conserva durante 90 días desde el vencimiento registrado en `expira_en`. Al vencer el plazo, el backend deja de emitir enlaces de descarga en las consultas habituales. Los archivos necesarios para un reclamo abierto o una obligación legal vigente se conservan con acceso restringido mientras dure la excepción. Las fotos y los archivos de evidencia de revisión y entrega se conservan durante 12 meses desde el cierre del pedido completado o desde su cancelación, según corresponda. Al vencer el plazo, el backend retira el acceso habitual a las evidencias y conserva con acceso restringido las que sean necesarias para un reclamo abierto o una obligación legal vigente mientras dure la excepción. El sistema cuenta siete días desde que el archivo queda sin referencias. Antes de borrarlo, vuelve a comprobar que siga huérfano y que la política permita eliminarlo.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F23](/3daltoque-docs/proyecto/funcionalidades/#f23) |
| Actores | Cliente, maker y participantes autorizados por recurso. |
| Canales | Lógica de negocio. Web y Mobile. |
| RF | [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2), [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3), [RF-10.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-4) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-19](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19) |
| CU | [CU-24](/3daltoque-docs/analisis/casos/cu-24-gestionar-archivos-autorizados/), [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/), [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/), [CU-14](/3daltoque-docs/analisis/casos/cu-14-conversar-en-un-pedido/), [CU-15](/3daltoque-docs/analisis/casos/cu-15-mantener-y-consultar-portfolio/), [CU-19](/3daltoque-docs/analisis/casos/cu-19-mantener-catalogo-de-productos/) |

## 2. Pantallas y permisos

[WEB-SOL-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-sol-01), [WEB-REV-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-rev-01), [WEB-CHAT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-chat-01), [MOB-SOL-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-sol-01), [MOB-REV-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-rev-01), [MOB-CHAT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-chat-01).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| finalidad | Valor del contrato | Sí | Contexto STL, evidencia o adjunto |
| tamano_bytes | Entero | Cuando se verifica | Límite del servidor; desconocido se conserva pendiente |
| checksum | Texto | Según proveedor | Integridad del contenido conservado |
| storage_key | Referencia interna | Servidor | Excluir de la elección libre del cliente |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Usuario | Selecciona contexto, finalidad y archivo. |
| 2 | Sistema | Valida permiso y límites y emite una autorización temporal de transferencia. |
| 3 | Usuario | Transfiere el archivo y solicita finalizar. |
| 4 | Sistema | Verifica integridad, tipo y análisis y conserva el estado. |
| 5 | Usuario | Solicita consultar o descargar el archivo permitido. |
| 6 | Sistema | Revalida recurso, finalidad y permiso. Emite un enlace privado de descarga con vigencia de cinco minutos o entrega el derivado público autorizado. |

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-24](/3daltoque-docs/analisis/casos/cu-24-gestionar-archivos-autorizados/), [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/), [CU-04](/3daltoque-docs/analisis/casos/cu-04-produccion-y-evidencia/), [CU-14](/3daltoque-docs/analisis/casos/cu-14-conversar-en-un-pedido/), [CU-15](/3daltoque-docs/analisis/casos/cu-15-mantener-y-consultar-portfolio/), [CU-19](/3daltoque-docs/analisis/casos/cu-19-mantener-catalogo-de-productos/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F23-01 | Paso 4. Tipo, integridad o análisis inválidos: Rechaza la habilitación y mantiene una salida de recuperación. |
| ALT-F23-02 | Paso 5. Solicita retirar el archivo: El sistema aplica retiro lógico y conservación de referencias históricas. |
| ALT-F23-03 | Paso 6. Permiso ausente o acceso temporal vencido: Rechaza o permite obtener otro acceso mediante nueva autorización. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| POST | `/archivos/autorizaciones` | contexto, finalidad, nombre, tipo y tamaño declarado | archivo_id y autorización temporal | Permiso sobre recurso y cuotas. La finalidad chat requiere capacidad de envío vigente en la conversación. Un pedido completado o cancelado dentro de la ventana de consulta devuelve `409 chat_read_only`. |
| POST | `/archivos/{id}/finalizacion` | integridad y referencia de objeto | estado de validación | Propietario o actor autorizado del recurso. |
| GET | `/archivos/{id}/acceso` | archivo_id y contexto | enlace privado de descarga con `expires_at` a los 300 segundos de su emisión o derivado autorizado | Finalidad, permisos vigentes, estado del archivo y plazo según su finalidad en PD-12. |
| DELETE | `/archivos/{id}` | motivo y versión | retiro lógico o condición de conservación | Propiedad y política de referencias. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `archivos`, `analisis_archivos`.

El backend autoriza la transferencia y comprueba existencia, pertenencia, tamaño, contenido e integridad. La solicitud o revisión utiliza una referencia de archivo identificable. Cada consulta valida el permiso sobre su recurso. Retiro, conservación y borrado siguen una política acordada, con registro de acción y motivo.

El piloto admite hasta 20 MiB por STL y 10 MiB por imagen o PDF adjunto al chat. La evidencia de revisión y las fotos del catálogo y del portfolio admiten imágenes JPEG y PNG de hasta 10 MiB por archivo. El backend autoriza la carga según el tipo declarado para cada finalidad y verifica que el contenido real coincida antes de habilitar el archivo. El servidor valida el tamaño declarado antes de emitir la autorización de transferencia. La finalización comprueba el tamaño real del objeto y mantiene sin habilitar el archivo que supera el máximo. Los adjuntos propios del chat del piloto admiten JPEG, PNG y PDF. Al autorizar la carga, el backend comprueba el tipo declarado para esa finalidad. Al finalizar, verifica que el contenido corresponda al formato declarado y habilita únicamente los archivos válidos.

Los archivos propios del chat se conservan durante 12 meses desde el cierre del pedido completado o desde su cancelación, según corresponda. Al vencer el plazo, el backend deja de emitir enlaces de descarga para ese contexto, tanto desde el chat como por identificador de archivo. Los adjuntos necesarios para un reclamo abierto o una obligación legal vigente se conservan con acceso restringido mientras dure la excepción.

## 8. Componentes y estados

[DS03](/3daltoque-docs/design-system/02-componentes/#ds03), [DS11](/3daltoque-docs/design-system/02-componentes/#ds11), [DS18](/3daltoque-docs/design-system/02-componentes/#ds18), [DS25](/3daltoque-docs/design-system/02-componentes/#ds25), [DS26](/3daltoque-docs/design-system/02-componentes/#ds26).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F23-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Habilitar un archivo exige completar sus comprobaciones. |
| AC-F23-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | La consulta de cada archivo comprueba permisos sobre el recurso. |
| AC-F23-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F23-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1) | 1. Una autorización válida identifica archivo, propietario, finalidad y destino permitido.<br>2. Un usuario ajeno no obtiene permiso para escribir sobre archivos de otro participante.<br>3. El vencimiento o uso fuera de finalidad se trata como error y no vincula un archivo listo al negocio.<br>4. Para la finalidad chat, la autorización acepta los tipos declarados image/jpeg, image/png y application/pdf. Cualquier otro tipo declarado se rechaza.<br>5. Para cada PDF del chat, un tamaño declarado de 10.485.760 bytes cumple el límite. Un tamaño superior impide la autorización.<br>6. Para las finalidades evidencia, producto_presentacion y portfolio, la autorización admite image/jpeg e image/png hasta 10.485.760 bytes declarados por archivo. |
| [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2) | 1. Una transferencia completa y validada habilita el archivo correcto una sola vez.<br>2. Una subida interrumpida, fuera de límites o referida a otro objeto no se informa como lista.<br>3. El contenido usado en una revisión aprobada permanece identificable aunque haya una nueva subida o corrección.<br>4. La finalización de un adjunto del chat valida el formato real contra el declarado. El contenido inválido o de otro formato queda sin habilitar.<br>5. La finalización comprueba el tamaño real de cada PDF del chat y mantiene sin habilitar el objeto si supera los 10.485.760 bytes.<br>6. Para las finalidades evidencia, producto_presentacion y portfolio, la finalización habilita imágenes JPEG o PNG válidas que coincidan con el tipo declarado y pesen hasta 10.485.760 bytes. |
| [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3) | 1. El participante habilitado obtiene el archivo asociado al recurso solicitado.<br>2. Un usuario ajeno o sin permiso vigente no recibe contenido ni una nueva autorización de descarga.<br>3. El enlace privado vence a los cinco minutos de su emisión. Cada solicitud de un enlace nuevo comprueba los permisos vigentes.<br>4. La emisión de enlaces de evidencias valida el plazo de 12 meses desde el cierre del pedido completado o desde su cancelación y las excepciones de PD-12.<br>5. La emisión de enlaces al STL valida el plazo de 90 días desde el cierre o la cancelación del pedido, o desde el vencimiento de la solicitud personalizada sin pedido, según corresponda. Aplica las excepciones de PD-12.<br>6. Para emitir enlaces de adjuntos propios del chat se comprueba la participación y el plazo de 12 meses desde el cierre del pedido completado o desde su cancelación, con acceso restringido cuando aplica una excepción de PD-12. |
| [RF-10.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-4) | 1. Un objeto elegible se retira según la regla vigente y deja de ofrecer nuevos accesos.<br>2. Un archivo que debe preservarse para una operación pendiente no se elimina como si estuviera vencido.<br>3. El registro permite conocer qué se retiró y cómo se tratarán copias y respaldos según la política documentada.<br>4. Al cumplir siete días continuos sin referencias, el worker puede borrar el objeto huérfano si sigue elegible. Una referencia incorporada durante el plazo o una obligación de conservación impide el borrado.<br>5. Al vencer la conservación de la evidencia, el backend retira el acceso habitual. Conserva las evidencias necesarias para reclamos abiertos u obligaciones legales vigentes bajo acceso restringido.<br>6. Al vencer los 90 días, el retiro del STL conserva los metadatos históricos previstos y protege los archivos sujetos a una excepción vigente.<br>7. Al vencer el plazo de los adjuntos del chat, el backend retira su acceso habitual y conserva los necesarios para las excepciones vigentes. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-02](/3daltoque-docs/planificacion/parametros/#pd-02), [PD-11](/3daltoque-docs/planificacion/parametros/#pd-11), [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
