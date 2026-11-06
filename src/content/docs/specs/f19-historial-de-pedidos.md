---
title: "SPEC-F19 · Historial de pedidos"
---

# SPEC-F19 Historial de pedidos

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Recuperar pedidos propios personalizados y de catálogo con filtros, cursor y condiciones históricas.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F19](/3daltoque-docs/proyecto/funcionalidades/#f19) |
| Actores | Cliente y maker titulares; soporte autorizado. |
| Canales | Reporte. Web y Mobile. |
| RF | [RF-02.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-4), [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RF-16.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-16-1) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11) |
| CU | [CU-17](/3daltoque-docs/analisis/casos/cu-17-consultar-historial-de-pedidos/) |

## 2. Pantallas y permisos

[WEB-HIS-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-his-01), [MOB-HIS-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-his-01).

La API comprueba actor, recurso, estado y versión en cada operación.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| rol | Rol | Sí | Ámbito propio cliente o maker. |
| estado | Estado | Opcional | Valores del catálogo de pedidos. |
| origen | TipoSolicitud | Opcional | Personalizada o catálogo. |
| desde y hasta | FechaHora | Opcional | Intervalo válido y zona explícita. |
| cursor | Texto opaco | Opcional | Cursor emitido para los mismos filtros. |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Usuario | Selecciona rol, estado, período y referencia de búsqueda. |
| 2 | Sistema | Autoriza el ámbito y aplica orden estable por fecha e identidad. |
| 3 | Sistema | Devuelve página, cursor y datos mínimos de pedidos personalizados y de catálogo. |
| 4 | Usuario | Abre un pedido. |
| 5 | Sistema | Comprueba pertenencia y muestra condiciones, historial, revisión y entrega autorizadas. |

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F19-01 | Paso 2. Intervalo o cursor inválidos: Informa el error y permite reiniciar la consulta. |
| ALT-F19-02 | Paso 3. No hay resultados: Presenta un estado vacío conservando los filtros. |
| ALT-F19-03 | Paso 5. Si la membresía está vencida, conserva la consulta de pedidos propios según la ventana de acceso de PD-12. |
| ALT-F19-04 | Paso 5. Al cumplirse el plazo de consulta, el pedido queda fuera del listado y detalle habituales. Los datos necesarios para una excepción se conservan bajo acceso restringido. |

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| GET | `/pedidos` | rol, estado, origen, desde, hasta, referencia y cursor | pedidos propios y cursor | Ámbito autorizado, ventana de acceso de PD-12 y orden estable. |

## 7. Datos, consistencia e integración

La cuenta puede tener perfiles cliente y maker. La colección compartida recibe rol obligatorio y FastAPI filtra por el papel autorizado del usuario en cada pedido. El cursor y la caché conservan ese contexto; cambiar de perfil recupera sus listas y capacidades.

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `pedidos`, `historial_pedidos`, `condiciones_pedido`.

El sistema debe mostrar al cliente el estado vigente de su solicitud y las acciones disponibles. Cuando exista un plazo definido debe mostrar su vencimiento o tiempo restante de forma consistente con la hora del servidor. La búsqueda conserva el radio inicial cuando faltan candidatos y muestra el resultado según PD-04. Una solicitud personalizada enviada permanece abierta hasta que el cliente confirma una oferta y se crea el pedido, o hasta que vence a los siete días del envío confirmado. El backend guarda la fecha de vencimiento al enviar la solicitud. Desde esa fecha, la solicitud deja de admitir cotizaciones, cambios de condiciones y aceptaciones nuevas. Las ofertas asociadas se consultan como historial durante el plazo de PD-12. El sistema debe conservar el historial de transiciones del pedido, con estado anterior/nuevo, actor o proceso, fecha y motivo pertinente. Las modificaciones administrativas también se registran. El historial y los datos de una solicitud personalizada enviada que vence sin generar un pedido se conservan durante 12 meses desde el vencimiento registrado en `expira_en`. El plazo abarca las ofertas asociadas en su consulta histórica. Al vencer, se retira el acceso habitual. Los datos necesarios para un reclamo abierto o una obligación legal vigente se conservan con acceso restringido mientras dure la excepción. El acceso al historial de pedidos completados y cancelados y su conservación siguen el plazo y las excepciones de PD-12. El participante consulta pedidos propios con filtros de estado, intervalo de fecha, referencia y origen personalizado o catálogo. La paginación utiliza orden estable por fecha e identidad. El detalle incluye condiciones, revisiones y entrega autorizadas durante el período de consulta, incluso después de vencer la membresía del maker. Cliente y maker pueden consultar el historial de un pedido completado durante 12 meses desde su cierre. En pedidos cancelados, el plazo es de 12 meses desde la fecha de cancelación registrada en el historial. Vencido el plazo, el sistema retira el pedido de las consultas habituales y conserva bajo acceso restringido los datos necesarios mientras haya un reclamo abierto o una obligación legal vigente. Un usuario ajeno no obtiene el pedido mediante filtros ni identificadores directos.
## 8. Componentes y estados

[DS05](/3daltoque-docs/design-system/02-componentes/#ds05), [DS19](/3daltoque-docs/design-system/02-componentes/#ds19), [DS20](/3daltoque-docs/design-system/02-componentes/#ds20), [DS28](/3daltoque-docs/design-system/02-componentes/#ds28), [DS40](/3daltoque-docs/design-system/02-componentes/#ds40).

Estados funcionales: carga, contenido, vacío, validación, permiso, conflicto, fallo recuperable y resultado pendiente cuando la operación lo requiera. Las mutaciones aplican las guardas del servidor. Las vistas de Figma conservan su contenido actual como mock de referencia.
## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F19-01 | Usuario autenticado con pedidos propios | Filtra el historial y recorre el cursor | Recupera pedidos propios con orden estable y ambas procedencias de contratación. |
| AC-F19-02 | Usuario autenticado | Solicita el detalle de un pedido ajeno | La respuesta aplica visibilidad segura y protege sus mensajes y archivos. |
| AC-F19-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F19-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-02.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-4) | 1. El cliente consulta el mismo estado que determina la API.<br>2. Los plazos mostrados corresponden a los almacenados y no habilitan operaciones ya vencidas.<br>3. Si el cliente deja sus ofertas sin aceptar, la solicitud permanece abierta hasta el vencimiento a los siete días del envío confirmado. El cliente puede consultar su fecha y estado de cierre. |
| [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3) | 1. Cada transición permitida deja un registro ligado al pedido.<br>2. Una transición rechazada no figura como realizada y conserva la evidencia operativa correspondiente.<br>3. La consulta permite reconstruir quién cambió el pedido y cuándo sin exponer secretos. |
| [RF-16.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-16-1) | 1. Los filtros y el cursor devuelven únicamente pedidos propios en orden estable.<br>2. Los pedidos propios completados o cancelados conservan sus condiciones históricas durante 12 meses desde el cierre o la cancelación, respectivamente.<br>3. Un usuario ajeno recibe una denegación sin datos del pedido.<br>4. Al vencer el plazo, el pedido deja de aparecer en la lista y el detalle habituales. Solo se conservan con acceso restringido los datos necesarios para reclamos abiertos u obligaciones legales vigentes. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
