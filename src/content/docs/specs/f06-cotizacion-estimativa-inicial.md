---
title: "SPEC-F06 · Cotización estimativa inicial"
---

# SPEC-F06 · Cotización estimativa inicial

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Ofrecer una referencia inicial comprensible para orientar la solicitud.

El sistema calcula automáticamente una estimación orientativa para solicitudes personalizadas con datos y parámetros de cálculo disponibles. Conserva método y configuración versionados, entradas, moneda, fecha y supuestos. Cuando la geometría, las unidades o los parámetros resultan insuficientes, informa el motivo y permite continuar a la cotización de makers. El precio de un producto de catálogo se obtiene de la publicación. La estrategia y sus parámetros de ejecución corresponden a PD-03.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F06](/3daltoque-docs/proyecto/funcionalidades/#f06) |
| Actores | Cliente; sistema de análisis. |
| Canales | Lógica de negocio. Web y Mobile. |
| RF | [RF-02.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-5) |
| RNF | [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16) |
| CU | [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/) |

## 2. Pantallas y permisos

[WEB-SOL-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-sol-01), [WEB-SOL-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-sol-02), [MOB-SOL-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-sol-01), [MOB-SOL-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-sol-02).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| solicitud_version | Versión | Sí | La estimación corresponde a esa versión |
| monto_desde y monto_hasta | Monto decimal | Si calculable | Referencia orientativa con moneda |
| supuestos | Lista | Si calculable | Método, versión e inputs relevantes |

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
| ALT-F06-01 | Paso 2. Archivo inválido, análisis pendiente o cuota excedida: Informa el estado, conserva el borrador y permite corregir o recuperar la transferencia. |
| ALT-F06-02 | Paso 5. Faltan datos o parámetros para estimar: Informa el motivo y mantiene disponible la cotización por makers. |
| ALT-F06-03 | Paso 6. Grupo insuficiente o mapas indisponibles: Registra el resultado y aplica únicamente la ampliación o alternativa textual configuradas. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| GET | `/solicitudes/{id}/estimacion` | versión de solicitud | importe o rango, moneda, método, entradas y estado | Cliente titular; motivo explícito si no está disponible. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `estimaciones`, `analisis_archivos`, `configuraciones_versiones`.

El sistema calcula automáticamente una estimación orientativa para solicitudes personalizadas con datos y parámetros de cálculo disponibles. Conserva método y configuración versionados, entradas, moneda, fecha y supuestos. Cuando la geometría, las unidades o los parámetros resultan insuficientes, informa el motivo y permite continuar a la cotización de makers. El precio de un producto de catálogo se obtiene de la publicación. La estrategia y sus parámetros de ejecución corresponden a PD-03.

## 8. Componentes y estados

[DS09](/3daltoque-docs/design-system/02-componentes/#ds09), [DS10](/3daltoque-docs/design-system/02-componentes/#ds10), [DS11](/3daltoque-docs/design-system/02-componentes/#ds11), [DS17](/3daltoque-docs/design-system/02-componentes/#ds17), [DS18](/3daltoque-docs/design-system/02-componentes/#ds18), [DS22](/3daltoque-docs/design-system/02-componentes/#ds22).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F06-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | La referencia muestra método y supuestos identificables. |
| AC-F06-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | El acuerdo conserva el precio de la oferta aceptada. |
| AC-F06-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F06-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-02.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-5) | 1. Una solicitud válida obtiene una referencia calculada con entradas y configuración identificables.<br>2. Un archivo sin volumen utilizable, una unidad ambigua o una configuración ausente produce un resultado indisponible con causa explícita.<br>3. La aceptación del cliente utiliza la oferta vigente o las condiciones del producto publicado, conservadas en el pedido. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-02](/3daltoque-docs/planificacion/parametros/#pd-02), [PD-03](/3daltoque-docs/planificacion/parametros/#pd-03), [PD-11](/3daltoque-docs/planificacion/parametros/#pd-11).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
