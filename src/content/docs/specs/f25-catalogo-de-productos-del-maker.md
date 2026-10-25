---
title: "F25 Catálogo de productos del maker"
---

# SPEC-F25 Catálogo de productos del maker

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Publicar productos de configuración y precio fijos y generar pedidos directos que continúan por producción, revisión y entrega.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F25](/3daltoque-docs/proyecto/funcionalidades/#f25) |
| Actores | Maker titular, visitante, cliente autenticado y administración con capacidad de moderación. |
| Canales | ABM y lógica de negocio. Web y Mobile; moderación en Web. |
| RF | [RF-13.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-1), [RF-13.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-2), [RF-13.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-3), [RF-13.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-4) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-14](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17) |
| CU | [CU-19](/3daltoque-docs/analisis/casos/cu-19-mantener-catalogo-de-productos/), [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/) |

## 2. Pantallas y permisos

[WEB-CAT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-cat-01), [WEB-CAT-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-cat-02), [WEB-CAT-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-cat-03), [WEB-CAT-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-cat-04), [MOB-CAT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-cat-01), [MOB-CAT-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-cat-02), [MOB-CAT-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-cat-03), [MOB-CAT-04](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-cat-04), [WEB-MKR-08](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mkr-08), [MOB-MKR-08](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mkr-08).

La API comprueba actor, recurso, estado y versión en cada operación.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| producto_id y version | UUID y entero | En consulta o confirmación | Producto publicado y versión actual. |
| titulo y descripcion | Texto | Al mantener publicación | Contenido público y configuración de la pieza. |
| material, color y dimensiones | Configuración | Sí | Configuración fija publicada y dimensiones positivas. |
| precio_unitario y moneda | Decimal y código | Sí | Importe positivo y moneda explícita; el backend conserva y calcula. |
| cantidad_minima y maxima | Enteros | Mínimo sí | Rango válido; el máximo propio es opcional. |
| cantidad | Entero | Al confirmar | Cantidad dentro de los límites del producto y servicio. |
| plazo y condiciones | Duración y texto | Sí | Unidad explícita, entrega y pago directo. |
| archivo_ids | Lista UUID | Opcional | Medios autorizados y finalidad de presentación o fabricación. |
| clave_operacion | Texto | Al confirmar | Se conserva ante resultado incierto. |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Maker | Crea un borrador con configuración fija, precio unitario, moneda, cantidades y plazo. |
| 2 | Maker | Adjunta medios autorizados y completa las condiciones. |
| 3 | Sistema | Valida valores, archivos, titularidad y versión. |
| 4 | Maker | Solicita publicar. |
| 5 | Sistema | Verifica acceso comercial y conserva la versión y su estado público. |
| 6 | Visitante | Abre el perfil y consulta el catálogo y el detalle del producto. |
### Confirmación directa del producto

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Cliente | Abre el producto y elige una cantidad admitida. |
| 2 | Sistema | Presenta versión, configuración, precio unitario, total calculado, moneda, plazo y condiciones de entrega y pago directo. |
| 3 | Cliente | Confirma las condiciones con una clave estable. |
| 4 | Sistema | Recupera primero un resultado de esa clave y contenido o valida publicación actual, cantidad y acceso comercial. |
| 5 | Sistema | Materializa solicitud de catálogo, oferta de referencia y pedido con sus condiciones en una transacción; habilita la conversación. |
| 6 | Sistema | Registra avisos y devuelve el pedido confirmado. |
| 7 | Cliente y maker | Continúan por producción, revisión expresa y entrega del mismo circuito. |

Las alternativas de versión, habilitación e idempotencia se detallan en [CU-20](/3daltoque-docs/analisis/casos/cu-20-pedir-un-producto-del-maker/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F25-01 | Paso 3. Se editan condiciones de una versión publicada: Conserva una versión nueva y mantiene la referencia de pedidos existentes. |
| ALT-F25-02 | Paso 4. Pausa o retira la publicación: El sistema impide pedidos nuevos y conserva los datos históricos. |
| ALT-F25-03 | Paso 5. Acceso comercial vencido: Permite mantener borradores y retirar publicaciones; rechaza habilitar pedidos nuevos. |
| ALT-F25-04 | Paso 5. Modera con permiso y motivo: El sistema retira la disponibilidad pública y registra auditoría. |

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| GET | `/makers/{id}/productos` | cursor | productos publicados y condiciones actuales | Visibilidad pública autorizada. |
| GET | `/productos/{id}` | producto_id | versión, configuración, precio y disponibilidad de pedido | Publicación visible y medios derivados. |
| POST | `/makers/me/productos` | configuración, precio, moneda, cantidades, plazo y condiciones | producto_id y versión | Maker titular y campos válidos. |
| PATCH | `/makers/me/productos/{id}` | versión esperada y condiciones | versión actualizada | Conserva versiones publicadas anteriores. |
| POST | `/makers/me/productos/{id}/publicacion` | acción y versión | estado de publicación | Acceso comercial para admitir pedidos nuevos. |
| POST | `/productos/{id}/pedidos` | versión, cantidad y clave estable | pedido y condiciones conservadas | Precio del servidor, versión vigente e idempotencia. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `productos_maker`, `producto_versiones`, `producto_archivos`, `solicitudes`, `oferta_versiones`, `pedidos`.

El maker titular crea y edita borradores de productos con nombre, descripción, material, color, dimensiones, precio unitario, moneda, cantidades admitidas, plazo y condiciones de fabricación y entrega. Las imágenes o videos se vinculan mediante archivos autorizados. Los cambios de condiciones publicadas crean una nueva versión; los pedidos existentes conservan su versión original. El maker publica una versión completa de su producto, la pausa o la retira. Publicar y habilitar pedidos nuevos exige perfil y membresía vigentes. Pausar, retirar o moderar impide nuevos pedidos desde esa publicación. Las versiones y referencias usadas por pedidos se conservan. La administración puede ocultar una publicación con capacidad específica, motivo y auditoría. El visitante o cliente consulta los productos publicados del maker y abre su detalle con versión, configuración, precio unitario, moneda, cantidades, plazo y condiciones. La respuesta expone la zona pública autorizada y sus medios derivados de presentación. El backend informa si el maker está habilitado para aceptar un pedido. La compra requiere identidad de cliente. El cliente elige producto, versión y cantidad, revisa las condiciones y confirma. El servidor valida publicación y versión actuales, cantidades, maker distinto del cliente y acceso comercial; calcula el total con el precio unitario conservado. En una transacción crea la solicitud de origen catálogo, su oferta publicada de referencia, el pedido, las condiciones y la conversación. Este circuito utiliza al maker del producto y continúa por producción, revisión y entrega. El cliente acuerda directamente con el maker el pago de la impresión.
## 8. Componentes y estados

[DS01](/3daltoque-docs/design-system/02-componentes/#ds01), [DS03](/3daltoque-docs/design-system/02-componentes/#ds03), [DS05](/3daltoque-docs/design-system/02-componentes/#ds05), [DS09](/3daltoque-docs/design-system/02-componentes/#ds09), [DS10](/3daltoque-docs/design-system/02-componentes/#ds10), [DS22](/3daltoque-docs/design-system/02-componentes/#ds22), [DS25](/3daltoque-docs/design-system/02-componentes/#ds25), [DS26](/3daltoque-docs/design-system/02-componentes/#ds26), [DS40](/3daltoque-docs/design-system/02-componentes/#ds40), [DS43](/3daltoque-docs/design-system/02-componentes/#ds43).

Estados funcionales: carga, contenido, vacío, validación, permiso, conflicto, fallo recuperable y resultado pendiente cuando la operación lo requiera. Las mutaciones aplican las guardas del servidor. Las vistas de Figma conservan su contenido actual como mock de referencia.
## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F25-01 | Producto vigente y maker habilitado | El cliente confirma versión y cantidad válidas | Se crea directamente un pedido único con precio y condiciones conservados. |
| AC-F25-02 | Pedido ya creado con clave y contenido originales | El cliente repite la confirmación después de cambiar la publicación | Recupera el pedido original antes de volver a evaluar las condiciones actuales. |
| AC-F25-03 | Versión publicada reemplazada | Se intenta confirmar la versión anterior con una clave nueva | Se informa conflicto y se solicita revisar las condiciones actuales. |
| AC-F25-04 | Producto propio o acceso comercial vencido | Se intenta crear un pedido nuevo | La API impide confirmar y mantiene los pedidos existentes. |
| AC-F25-PERM | Actor ajeno o sin capacidad sobre el recurso | Solicita la operación por la API | La operación se deniega y el estado permanece protegido. |
| AC-F25-INPUT | Entradas fuera del formato o rango del contrato | Solicita confirmar la operación | Se informan los campos o condiciones y se conservan los datos recuperables. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-13.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-1) | 1. El maker conserva un borrador válido y sus archivos autorizados.<br>2. Cambiar precio, configuración o plazo de un producto publicado genera otra versión.<br>3. Una edición de un producto ajeno o una cantidad, moneda o importe inválidos se rechaza. |
| [RF-13.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-2) | 1. Una publicación completa y autorizada aparece en el catálogo del maker.<br>2. Una publicación pausada, retirada o moderada impide pedidos nuevos.<br>3. Un retiro conserva los datos y archivos necesarios para los pedidos ya confirmados. |
| [RF-13.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-3) | 1. El perfil público presenta los productos publicados y sus condiciones completas.<br>2. Los borradores y archivos originales privados permanecen protegidos.<br>3. Una publicación retirada ofrece una salida al catálogo y una versión reemplazada informa sus condiciones actuales. |
| [RF-13.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-4) | 1. Confirmar una versión vigente genera un pedido con cantidad, precio unitario, total, moneda, plazo y condiciones conservados.<br>2. Precio modificado, publicación pausada o maker sin acceso generan un conflicto antes de crear el pedido.<br>3. La repetición de la misma confirmación recupera el pedido; reutilizar su clave con otra cantidad produce conflicto. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-02](/3daltoque-docs/planificacion/parametros/#pd-02), [PD-05](/3daltoque-docs/planificacion/parametros/#pd-05), [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12), [PD-14](/3daltoque-docs/planificacion/parametros/#pd-14).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
