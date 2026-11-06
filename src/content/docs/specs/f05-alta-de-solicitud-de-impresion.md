---
title: "SPEC-F05 · Alta de solicitud de impresión"
---

# SPEC-F05 · Alta de solicitud de impresión

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Expresar el trabajo requerido con un archivo y condiciones que los makers puedan interpretar.

El sistema autoriza la carga y comprueba el archivo mediante F23. El cliente completa los parámetros y confirma la solicitud. El backend registra propietario, archivo y condiciones, informa los datos que requieren corrección y habilita el envío a makers compatibles mediante F08.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F05](/3daltoque-docs/proyecto/funcionalidades/#f05) |
| Actores | Cliente. |
| Canales | Lógica de negocio. Web y Mobile. |
| RF | [RF-02.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-1), [RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2), [RF-02.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-3) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16) |
| CU | [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/) |

## 2. Pantallas y permisos

[WEB-SOL-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-sol-01), [MOB-SOL-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-sol-01).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| archivo_stl_id | UUID | Sí | Archivo habilitado, propiedad autorizada y hasta 20 MiB por STL en el piloto. |
| cantidad | Entero | Sí | Positivo; límites según configuración |
| unidad_declarada | Unidad | Según PD-02 | Confirmar antes de interpretar escala |
| material_id | UUID | Según PD-02 | Catálogo y tratamiento de desconocido por acordar |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Cliente | Carga STL, unidad, material, color, cantidad, urgencia y descripción. |
| 2 | Sistema | Autoriza la carga y comprueba el tamaño, el formato y la integridad. El análisis geométrico para estimar se ejecuta sobre el STL habilitado. |
| 3 | Cliente | Corrige los datos, confirma la ubicación y solicita enviar. |
| 4 | Sistema | Comprueba titularidad, archivo habilitado, parámetros y límites. |
| 5 | Sistema | Conserva la versión, calcula la estimación orientativa y registra método y supuestos o su causa de indisponibilidad. |
| 6 | Sistema | Selecciona un grupo limitado por capacidad, material, ubicación y acceso comercial y conserva la ronda. |
| 7 | Sistema | Registra invitaciones y eventos de aviso de forma duradera. |
| 8 | Cliente | Consulta la solicitud enviada y su estado. |

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F05-01 | Paso 2. Si el archivo es inválido, la validación sigue pendiente o se supera una cuota, informa el estado y conserva el borrador para corregir o recuperar la transferencia. |
| ALT-F05-02 | Paso 5. Si faltan datos para estimar o se agota el tiempo de análisis, informa el motivo y permite continuar a cotización por makers con el STL habilitado. |
| ALT-F05-03 | Paso 6. Si el grupo está incompleto, registra los candidatos disponibles dentro del radio inicial. Si queda vacío, informa el resultado. Si falla el mapa, ofrece la entrada textual y la vista de lista. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| POST | `/solicitudes` | STL, unidad, material, color, cantidad, urgencia, descripción y ubicación | solicitud_id, versión y estado | Cliente titular y límites. |
| PATCH | `/solicitudes/{id}` | campos y versión esperada | versión actualizada | Titular y versión vigente. Editar un borrador vigente renueva sus 90 días. Tras el envío, edición de fabricación hasta la primera oferta según PD-05. |
| POST | `/solicitudes/{id}/enviar` | versión y clave de operación | solicitud enviada y ronda | Borrador vigente, archivo habilitado y especificaciones completas. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `solicitudes`, `solicitud_versiones`, `archivos`, `analisis_archivos`.

El sistema autoriza la carga y comprueba el archivo mediante F23. El cliente completa los parámetros y confirma la solicitud. El backend registra propietario, archivo y condiciones, informa los datos que requieren corrección y habilita el envío a makers compatibles mediante F08.

Los borradores de solicitudes personalizadas se conservan durante 90 días desde el último guardado. El guardado inicial inicia el plazo y cada edición confirmada lo vuelve a contar. Al cumplirlo, el borrador sale de las consultas habituales y se retira según PD-12. La API devuelve la fecha vigente en `expira_en`. Al confirmar el envío, usa el nuevo plazo de siete días de PD-05.

Una solicitud personalizada enviada permanece abierta hasta que el cliente confirma una oferta y se crea el pedido, o hasta que vence a los siete días del envío confirmado. El backend guarda la fecha de vencimiento al enviar la solicitud. Desde esa fecha, la solicitud deja de admitir cotizaciones, cambios de condiciones y aceptaciones nuevas. Las ofertas asociadas se consultan como historial durante el plazo de PD-12. Web y Mobile muestran `expira_en` cuando la solicitud ya fue enviada y la etiqueta «Vencida» al cumplirse el plazo. Un reintento del envío recupera la fecha registrada. El vencimiento de una solicitud sin pedido inicia los 90 días de conservación del STL según [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12).

El cliente puede editar los datos de fabricación de una solicitud personalizada en borrador o, tras el envío, mientras siga abierta, dentro de su plazo y hasta la primera oferta publicada. La primera oferta publicada cierra esa edición durante el resto de la solicitud, aunque después venza. Una edición de fabricación posterior al envío crea una versión y una ronda para las nuevas especificaciones. Las invitaciones anteriores pierden su capacidad de recibir ofertas. El backend conserva la fecha de vencimiento original de la solicitud. La interfaz muestra la acción de edición de fabricación según las capacidades de la API. Al guardar, el backend valida archivo habilitado, versión esperada y campos de la nueva especificación.

## 8. Componentes y estados

[DS03](/3daltoque-docs/design-system/02-componentes/#ds03), [DS05](/3daltoque-docs/design-system/02-componentes/#ds05), [DS21](/3daltoque-docs/design-system/02-componentes/#ds21), [DS24](/3daltoque-docs/design-system/02-componentes/#ds24), [DS25](/3daltoque-docs/design-system/02-componentes/#ds25), [DS26](/3daltoque-docs/design-system/02-componentes/#ds26).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F05-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Una creación válida conserva propietario, archivo y versión de parámetros. |
| AC-F05-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Una solicitud incompleta muestra los campos a corregir. |
| AC-F05-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F05-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-02.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-1) | 1. El archivo completado y habilitado queda vinculado a la solicitud del cliente correcto.<br>2. Un archivo inexistente, ajeno o no habilitado no puede utilizarse para enviar la solicitud.<br>3. La información de escala y parámetros se conserva y puede consultarse para cotizar. |
| [RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2) | 1. Un STL válido dentro de los límites queda habilitado para su uso autorizado.<br>2. Un archivo truncado, de contenido no admitido o fuera de límites permanece sin habilitar y tiene un motivo de rechazo.<br>3. El archivo queda sin habilitar mientras estén pendientes los controles obligatorios. El análisis geométrico para la estimación tiene su propio estado. |
| [RF-02.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-3) | 1. Una creación válida conserva propietario, archivo y características de la solicitud.<br>2. Una solicitud incompleta según PD-02 no se envía a makers y explica qué debe corregirse.<br>3. Un presupuesto o estimación de referencia no se presenta como aceptación contractual de un maker.<br>4. Antes de la primera oferta, una edición válida de fabricación crea otra versión con invitaciones para las nuevas especificaciones y conserva el vencimiento original.<br>5. Después de publicar la primera oferta, el backend rechaza el cambio de fabricación y conserva la versión vigente.<br>6. Cada edición guardada en un borrador vigente fija un plazo de 90 días desde ese guardado. Al vencer, la consulta habitual, la edición y el envío dejan de estar disponibles. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-02](/3daltoque-docs/planificacion/parametros/#pd-02), [PD-04](/3daltoque-docs/planificacion/parametros/#pd-04), [PD-05](/3daltoque-docs/planificacion/parametros/#pd-05).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
