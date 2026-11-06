---
title: "SPEC-F06 · Cotización estimativa inicial"
---

# SPEC-F06 · Cotización estimativa inicial

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Ofrecer una referencia inicial comprensible para orientar la solicitud.

El sistema calcula la referencia orientativa de una solicitud personalizada como cantidad × (cargo base por pieza + volumen sólido por pieza en cm³ × coeficiente del material). Conserva método y configuración versionados, entradas, moneda, fecha y supuestos. Cuando la geometría, las unidades o los parámetros resultan insuficientes, informa el motivo y permite continuar a la cotización de makers. El análisis geométrico para estimar un STL tiene un máximo inicial configurable de 60 segundos desde que el worker lo inicia. Al agotar el plazo, el sistema informa la estimación indisponible y permite enviar la solicitud y recibir cotizaciones de makers con un STL habilitado. El precio de un producto de catálogo se obtiene de la publicación. La estrategia y sus parámetros de ejecución corresponden a PD-03.

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
| monto_desde y monto_hasta | Monto decimal | Si calculable | Límites inferior y superior calculados con el porcentaje versionado. Incluyen la moneda de la referencia. |
| supuestos | Lista | Si calculable | Método, versión y entradas relevantes. |
| volumen sólido por pieza | Decimal en cm³ | Si calculable | Volumen geométrico utilizable del análisis. |
| cantidad | Entero positivo | Sí | Cantidad de piezas en la versión de solicitud. |
| cargo base y coeficiente del material | Decimales | Si calculable | Moneda por pieza y moneda por cm³ de la configuración versionada. |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Cliente | Carga STL, unidad, material, color, cantidad, urgencia y descripción. |
| 2 | Sistema | Autoriza la carga y comprueba el tamaño, el formato y la integridad. El análisis geométrico para estimar se ejecuta sobre el STL habilitado. |
| 3 | Cliente | Corrige los datos, confirma la ubicación y solicita enviar. |
| 4 | Sistema | Comprueba titularidad, archivo habilitado, parámetros y límites. |
| 5 | Sistema | Conserva la versión y aplica la fórmula de PD-03 si hay volumen utilizable, unidad y configuración. Registra el método y los supuestos o la causa de indisponibilidad y continúa hacia cotización por makers. |
| 6 | Sistema | Selecciona un grupo limitado por capacidad, material, ubicación y acceso comercial y conserva la ronda. |
| 7 | Sistema | Registra invitaciones y eventos de aviso de forma duradera. |
| 8 | Cliente | Consulta la solicitud enviada y su estado. |

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F06-01 | Paso 2. Si el archivo es inválido, la validación sigue pendiente o se supera una cuota, informa el estado y conserva el borrador para corregir o recuperar la transferencia. |
| ALT-F06-02 | Paso 5. Si faltan datos para estimar o se agota el tiempo de análisis, informa el motivo y permite continuar a cotización por makers con el STL habilitado. |
| ALT-F06-03 | Paso 6. Si el grupo está incompleto, registra los candidatos disponibles dentro del radio inicial. Si queda vacío, informa el resultado. Si falla el mapa, ofrece la entrada textual y la vista de lista. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| GET | `/solicitudes/{id}/estimacion` | versión de solicitud | importe o rango orientativo según PD-03, moneda, método, supuestos y estado | Cliente titular. Si se agota el máximo de análisis, inicialmente 60 segundos, informa la causa y devuelve la estimación indisponible. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `estimaciones`, `analisis_archivos`, `configuraciones_versiones`.

El sistema calcula la referencia orientativa de una solicitud personalizada como cantidad × (cargo base por pieza + volumen sólido por pieza en cm³ × coeficiente del material). Conserva método y configuración versionados, entradas, moneda, fecha y supuestos. Cuando la geometría, las unidades o los parámetros resultan insuficientes, informa el motivo y permite continuar a la cotización de makers. El análisis geométrico para estimar un STL tiene un máximo inicial configurable de 60 segundos desde que el worker lo inicia. Al agotar el plazo, el sistema informa la estimación indisponible y permite enviar la solicitud y recibir cotizaciones de makers con un STL habilitado. El precio de un producto de catálogo se obtiene de la publicación. La estrategia y sus parámetros de ejecución corresponden a PD-03.

El volumen en cm³ se obtiene dividiendo por 1.000 el volumen normalizado en mm³ del análisis. La estimación usa los parámetros de una misma versión de configuración y conserva el valor de referencia que resulta de la fórmula. El rango orientativo del piloto aplica inicialmente ±20 % sobre el importe de referencia. Con un porcentaje configurado p, el límite inferior es la referencia × (1 − p/100) y el superior es la referencia × (1 + p/100). Cada estimación conserva el porcentaje y la versión de configuración aplicados. El backend calcula y redondea ambos límites según el contrato decimal de importes. Las condiciones del pedido provienen de la oferta aceptada o de la publicación de catálogo.

### Calibración para el piloto

Antes de habilitar la estimación monetaria del piloto, el equipo calibra el cargo base por pieza y los coeficientes por material con cinco piezas de muestra y cotizaciones de referencia de makers. La configuración inicial conserva los valores resultantes y la referencia al registro de calibración.

Para cada pieza, el equipo registra la versión del STL, unidad, volumen por pieza, material, cantidad, importe, moneda y condiciones de la cotización. Compara importes de alcance equivalente y conserva los parámetros elegidos y la diferencia observada entre el cálculo y las cotizaciones. Cuando falta una configuración habilitada para el material, se informa el motivo y se mantiene disponible la cotización por makers.

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
| [RF-02.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-5) | 1. La estimación coincide con la fórmula de PD-03. El rango inicial aplica ±20 % y conserva entradas, porcentaje y versión de configuración.<br>2. Un archivo sin volumen utilizable, una unidad ambigua o la falta de una configuración habilitada para el material produce un resultado indisponible con causa explícita y permite continuar hacia ofertas de makers.<br>3. La aceptación del cliente utiliza la oferta vigente o las condiciones del producto publicado, conservadas en el pedido.<br>4. Al agotar el máximo inicial de 60 segundos desde el inicio del análisis, el sistema informa la causa y permite cotizar un STL que ya pasó la validación obligatoria. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-02](/3daltoque-docs/planificacion/parametros/#pd-02), [PD-03](/3daltoque-docs/planificacion/parametros/#pd-03), [PD-11](/3daltoque-docs/planificacion/parametros/#pd-11).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
