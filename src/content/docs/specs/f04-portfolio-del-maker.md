---
title: "SPEC-F04 · Portfolio del maker"
---

# SPEC-F04 Portfolio del maker

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Presentar y mantener trabajos del maker mediante un portfolio público autorizado.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F04](/3daltoque-docs/proyecto/funcionalidades/#f04) |
| Actores | Maker; visitantes autorizados y administración según política. |
| Canales | ABM. Web y Mobile; moderación en Web. |
| RF | [RF-14.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-1), [RF-14.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-2) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16) |
| CU | [CU-15](/3daltoque-docs/analisis/casos/cu-15-mantener-y-consultar-portfolio/) |

## 2. Pantallas y permisos

[WEB-MKR-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mkr-02), [MOB-MKR-02](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mkr-02), [WEB-MKR-08](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mkr-08), [MOB-MKR-08](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mkr-08).

La API comprueba actor, recurso, estado y versión en cada operación.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| titulo | Texto | Sí | Título del trabajo dentro del límite configurado. |
| descripcion | Texto | Sí | Descripción pública autorizada. |
| archivo_ids | Lista UUID | Según contenido | Archivos propios habilitados y autorizados para presentación. |
| estado | Estado | Sí | Borrador, publicado o retirado conforme a permiso. |
| version | Entero | En edición | Versión actual esperada. |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Maker | Crea un trabajo con título, descripción y medios de presentación. |
| 2 | Sistema | Comprueba titularidad, archivo habilitado y autorización de publicación. |
| 3 | Maker | Publica el trabajo. |
| 4 | Sistema | Conserva el registro y habilita sus derivados de presentación. |
| 5 | Visitante | Consulta el portfolio del maker y abre un trabajo. |
| 6 | Sistema | Entrega únicamente el contenido publicado y autorizado. |

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F04-01 | Paso 2. Archivo ajeno o evidencia privada sin permiso: Rechaza su publicación. |
| ALT-F04-02 | Paso 3. Retira el trabajo: El sistema retira la presentación pública y conserva las referencias históricas necesarias. |
| ALT-F04-03 | Paso 4. Modera contenido con capacidad y motivo: El sistema registra la intervención y su efecto público. |

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| GET | `/makers/{id}/portfolio` | cursor | trabajos y medios autorizados | Publicados y visibles. |
| POST | `/makers/me/portfolio` | título, descripción y archivos autorizados | trabajo_id y versión | Maker titular. |
| PATCH | `/makers/me/portfolio/{id}` | contenido, estado y versión | trabajo actualizado | Titularidad y autorización de medios. |
| DELETE | `/makers/me/portfolio/{id}` | versión | retiro lógico | Conservación de referencias y auditoría. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `portfolio_trabajos`, `portfolio_archivos`, `archivos`.

El maker crea, publica y retira trabajos de su portfolio con título, descripción y medios autorizados. La publicación utiliza derivados de presentación y conserva la autoría y finalidad declaradas. El uso de una evidencia privada de un cliente requiere la autorización de publicación aplicable. La moderación conserva motivo e historial. El visitante o cliente consulta los trabajos publicados del portfolio de un maker y sus medios de presentación. La respuesta incluye descripción y autor; oculta datos privados de pedidos, clientes y archivos originales. Un portfolio vacío presenta el estado correspondiente y mantiene accesibles los datos públicos del maker.
## 8. Componentes y estados

[DS01](/3daltoque-docs/design-system/02-componentes/#ds01), [DS03](/3daltoque-docs/design-system/02-componentes/#ds03), [DS25](/3daltoque-docs/design-system/02-componentes/#ds25), [DS26](/3daltoque-docs/design-system/02-componentes/#ds26), [DS31](/3daltoque-docs/design-system/02-componentes/#ds31).

Estados funcionales: carga, contenido, vacío, validación, permiso, conflicto, fallo recuperable y resultado pendiente cuando la operación lo requiera. Las mutaciones aplican las guardas del servidor. Las vistas de Figma conservan su contenido actual como mock de referencia.
## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F04-01 | Maker titular y medios autorizados | Publica un trabajo | El portfolio público presenta el trabajo y sus derivados autorizados. |
| AC-F04-02 | Trabajo publicado | El titular lo retira | La consulta pública lo excluye y las referencias históricas se conservan. |
| AC-F04-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F04-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-14.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-1) | 1. Un trabajo publicado aparece en el portfolio del maker titular.<br>2. Un archivo ajeno, no habilitado o sin autorización de publicación es rechazado.<br>3. Retirar o moderar un trabajo elimina su presentación pública y conserva las referencias necesarias. |
| [RF-14.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-2) | 1. La consulta devuelve exclusivamente trabajos publicados y autorizados.<br>2. Un trabajo retirado deja de estar disponible públicamente.<br>3. El detalle del portfolio conserva la privacidad de pedidos y archivos. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-02](/3daltoque-docs/planificacion/parametros/#pd-02), [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12), [PD-14](/3daltoque-docs/planificacion/parametros/#pd-14).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
