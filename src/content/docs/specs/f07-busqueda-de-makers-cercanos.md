---
title: "SPEC-F07 · Búsqueda de makers cercanos"
---

# SPEC-F07 · Búsqueda de makers cercanos

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Ubicar makers y puntos de referencia preservando la precisión autorizada.

El usuario selecciona o confirma una ubicación. El mapa y la lista muestran zonas y puntos autorizados; el sistema aplica los filtros acordados y diferencia la información pública de los datos privados necesarios para operar. La adjudicación se concreta mediante la elección de una oferta.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F07](/3daltoque-docs/proyecto/funcionalidades/#f07) |
| Actores | Cliente y maker para sus ubicaciones; participantes de la entrega. |
| Canales | Lógica de negocio. Web y Mobile. |
| RF | [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2), [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1) |
| RNF | [RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17) |
| CU | [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/) |

## 2. Pantallas y permisos

[WEB-BUS-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-bus-01), [MOB-BUS-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-bus-01).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| latitud | Decimal | Si coordenada | Entre -90 y 90 |
| longitud | Decimal | Si coordenada | Entre -180 y 180 |
| radio | Distancia | Según PD-04 | Unidad y límites visibles |
| filtros | Objeto | Opcional | Valores admitidos por el contrato |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Cliente | Carga STL, unidad, material, color, cantidad, urgencia y descripción. |
| 2 | Sistema | Autoriza el archivo, verifica su integridad y análisis y devuelve las validaciones. |
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
| ALT-F07-01 | Paso 2. Archivo inválido, análisis pendiente o cuota excedida: Informa el estado, conserva el borrador y permite corregir o recuperar la transferencia. |
| ALT-F07-02 | Paso 5. Faltan datos o parámetros para estimar: Informa el motivo y mantiene disponible la cotización por makers. |
| ALT-F07-03 | Paso 6. Grupo insuficiente o mapas indisponibles: Registra el resultado y aplica únicamente la ampliación o alternativa textual configuradas. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| GET | `/makers` | referencia geográfica, material, capacidad y cursor | candidatos y precisión de zona | Política de búsqueda y privacidad. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `ubicaciones`, `makers`, `capacidades_impresora`.

El usuario selecciona o confirma una ubicación. El mapa y la lista muestran zonas y puntos autorizados; el sistema aplica los filtros acordados y diferencia la información pública de los datos privados necesarios para operar. La adjudicación se concreta mediante la elección de una oferta.

## 8. Componentes y estados

[DS03](/3daltoque-docs/design-system/02-componentes/#ds03), [DS05](/3daltoque-docs/design-system/02-componentes/#ds05), [DS17](/3daltoque-docs/design-system/02-componentes/#ds17), [DS37](/3daltoque-docs/design-system/02-componentes/#ds37), [DS40](/3daltoque-docs/design-system/02-componentes/#ds40).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F07-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | La lista y el mapa refieren a los mismos criterios de búsqueda. |
| AC-F07-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | La vista pública conserva la precisión autorizada. |
| AC-F07-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F07-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1) | 1. Una selección confirmada conserva coordenadas y metadatos autorizados con significado inequívoco.<br>2. Un resultado ambiguo o inexistente requiere corrección o confirmación y no se adopta silenciosamente.<br>3. Permiso denegado o falla externa se informa con las alternativas que se hayan habilitado. |
| [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2) | 1. El mapa representa los recursos autorizados de un conjunto de prueba conocido.<br>2. La vista pública no permite reconstruir el domicilio privado del maker mediante los datos enviados.<br>3. Una falla de servicio se distingue de ausencia de resultados y no invalida acuerdos ya registrados. |
| [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1) | 1. Para un conjunto conocido de makers, los invitados cumplen los filtros y el límite configurados para la prueba.<br>2. Un maker incompatible o fuera del criterio geográfico no se incorpora por ser el único disponible.<br>3. Si no hay candidatos se informa el resultado y no se envía indiscriminadamente a toda la plataforma. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-04](/3daltoque-docs/planificacion/parametros/#pd-04), [PD-11](/3daltoque-docs/planificacion/parametros/#pd-11), [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
