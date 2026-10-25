---
title: "SPEC-F21 · Reporte de actividad"
---

# SPEC-F21 Reporte de actividad

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Consultar indicadores operativos con definiciones reproducibles y permisos administrativos.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F21](/3daltoque-docs/proyecto/funcionalidades/#f21) |
| Actores | Administración autorizada. |
| Canales | Reporte. Administración en Web. |
| RF | [RF-17.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-17-1) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11) |
| CU | [CU-18](/3daltoque-docs/analisis/casos/cu-18-consultar-reporte-de-actividad/) |

## 2. Pantallas y permisos

[WEB-ADM-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-adm-02).

La API comprueba actor, recurso, estado y versión en cada operación.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| desde | FechaHora | Sí | Inicio inclusivo. |
| hasta | FechaHora | Sí | Fin exclusivo y posterior al inicio. |
| zona_horaria | Texto | Sí | Zona utilizada al interpretar filtros y presentar el período. |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Administración | Elige período y zona horaria. |
| 2 | Sistema | Comprueba permiso y límites y normaliza el intervalo semiabierto. |
| 3 | Sistema | Consulta altas de usuarios, makers con pedidos, confirmaciones, cancelaciones y valoraciones publicadas. |
| 4 | Sistema | Calcula conteos y promedio con las definiciones del contrato. |
| 5 | Sistema | Devuelve indicadores, filtros aplicados, fecha y fuente. |
| 6 | Administración | Consulta el resultado. |

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F21-01 | Paso 2. Falta permiso o el intervalo es inválido: Rechaza la consulta. |
| ALT-F21-02 | Paso 3. El período carece de actividad: Devuelve ceros y promedio ausente. |
| ALT-F21-03 | Paso 3. Falla temporal o límite de consulta: Informa recuperación y permite reintento manteniendo los filtros. |

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| GET | `/admin/reportes/actividad` | desde inclusivo, hasta exclusivo y zona horaria | indicadores, filtros, fecha y fuentes | Capacidad administrativa y período válido. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `usuarios`, `makers`, `pedidos`, `historial_pedidos`, `valoraciones`.

Administración autorizada consulta indicadores de usuarios registrados, makers con pedidos confirmados, pedidos confirmados y cancelados y calificación publicada, con intervalo y zona horaria explícitos. Usuarios se cuentan por fecha de alta; makers operativos son los makers distintos con pedido confirmado en el intervalo; pedidos se cuentan por su evento de confirmación o cancelación; calificación es el promedio de valoraciones publicadas del período y escala indicada. Los resultados identifican fecha de generación, filtros y fuente y protegen los datos privados.
## 8. Componentes y estados

[DS05](/3daltoque-docs/design-system/02-componentes/#ds05), [DS19](/3daltoque-docs/design-system/02-componentes/#ds19), [DS20](/3daltoque-docs/design-system/02-componentes/#ds20), [DS36](/3daltoque-docs/design-system/02-componentes/#ds36), [DS40](/3daltoque-docs/design-system/02-componentes/#ds40).

Estados funcionales: carga, contenido, vacío, validación, permiso, conflicto, fallo recuperable y resultado pendiente cuando la operación lo requiera. Las mutaciones aplican las guardas del servidor. Las vistas de Figma conservan su contenido actual como mock de referencia.
## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F21-01 | Administrador con permiso de reporte e intervalo válido | Consulta actividad | Obtiene métricas calculadas sobre el intervalo y las fórmulas documentadas. |
| AC-F21-02 | Intervalo sin actividad ni valoraciones | Consulta el reporte | Los conteos valen cero y los promedios sin observaciones se presentan sin dato. |
| AC-F21-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F21-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-17.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-17-1) | 1. Un conjunto de datos conocido produce los conteos, promedio y filtros esperados.<br>2. Un intervalo sin actividad devuelve ceros y promedios ausentes.<br>3. Una consulta sin permiso administrativo o con intervalo inválido se rechaza. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-13](/3daltoque-docs/planificacion/parametros/#pd-13), [PD-14](/3daltoque-docs/planificacion/parametros/#pd-14).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
