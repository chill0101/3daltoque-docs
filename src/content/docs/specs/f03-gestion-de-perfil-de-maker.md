---
title: "SPEC-F03 · Gestión de perfil de maker"
---

# SPEC-F03 · Gestión de perfil de maker

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Describir las capacidades que permiten evaluar la compatibilidad de una solicitud.

El maker registra y actualiza sus capacidades. El sistema controla el titular o el permiso administrativo y utiliza los datos declarados en F08. La primera habilitación del perfil para recibir solicitudes inicia el beneficio gratuito aplicable en F11.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F03](/3daltoque-docs/proyecto/funcionalidades/#f03) |
| Actores | Maker titular; administración con intervención autorizada. |
| Canales | ABM. Web y Mobile. |
| RF | [RF-01.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2), [RF-12.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17) |
| CU | [CU-09](/3daltoque-docs/analisis/casos/cu-09-habilitar-perfil-e-iniciar-prueba/), [CU-21](/3daltoque-docs/analisis/casos/cu-21-gestionar-capacidades-del-maker/) |

## 2. Pantallas y permisos

[WEB-MKR-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mkr-01), [MOB-MKR-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mkr-01), [WEB-MKR-08](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mkr-08), [MOB-MKR-08](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mkr-08).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| dimensiones_mm | Decimales | Por capacidad | Valores positivos y unidad visible |
| materiales | Referencias | Según PD-01 | Catálogo activo y combinaciones admitidas |
| disponibilidad | Configuración | Según perfil | Horario y zona horaria explícitos |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Maker | Consulta perfil, impresoras, materiales y disponibilidad. |
| 2 | Sistema | Recupera los recursos propios y las restricciones vigentes. |
| 3 | Maker | Edita zona, descripción, impresoras y capacidades. |
| 4 | Sistema | Valida dimensiones positivas, materiales, titularidad y versión. |
| 5 | Sistema | Conserva cambios o desactivaciones y utiliza esas capacidades en búsquedas futuras. |
| 6 | Maker | Consulta el resultado y su perfil público autorizado. |

La habilitación inicial y el beneficio gratuito se detallan en [CU-09](/3daltoque-docs/analisis/casos/cu-09-habilitar-perfil-e-iniciar-prueba/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F03-01 | Paso 4. Dimensiones inválidas o recurso ajeno: Rechaza el cambio y conserva los datos recuperables. |
| ALT-F03-02 | Paso 5. Desactiva una impresora utilizada históricamente: El sistema conserva las referencias y excluye nuevas selecciones. |
| ALT-F03-03 | Paso 5. Cambian capacidades después de aceptar un pedido: Conserva las condiciones y las obligaciones del pedido confirmado. |

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| GET | `/makers/{id}` | maker_id | zona pública, capacidades, catálogo, portfolio y reputación | Contenido público vigente y precisión autorizada. |
| PATCH | `/makers/me` | descripción, zona, disponibilidad y versión | perfil y capacidades | Maker titular. |
| POST | `/makers/me/impresoras` | nombre, tecnología, dimensiones y estado | impresora_id | Dimensiones positivas y titularidad. |
| PATCH | `/makers/me/impresoras/{id}` | dimensiones, estado y versión | impresora actualizada | Conserva referencias históricas. |
| PUT | `/makers/me/impresoras/{id}/capacidades` | capacidades y disponibilidad | capacidades válidas | Impresora propia y materiales habilitados. |
| POST | `/makers/me/habilitacion` | confirmación y clave de operación | perfil, beneficio inicial y fechas | Datos mínimos y concesión inicial única. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `makers`, `impresoras`, `materiales`, `capacidades_impresora`.

El maker registra y actualiza sus capacidades. El sistema controla el titular o el permiso administrativo y utiliza los datos declarados en F08. La primera habilitación del perfil para recibir solicitudes inicia el beneficio gratuito aplicable en F11.

## 8. Componentes y estados

[DS03](/3daltoque-docs/design-system/02-componentes/#ds03), [DS05](/3daltoque-docs/design-system/02-componentes/#ds05), [DS07](/3daltoque-docs/design-system/02-componentes/#ds07), [DS08](/3daltoque-docs/design-system/02-componentes/#ds08), [DS21](/3daltoque-docs/design-system/02-componentes/#ds21), [DS37](/3daltoque-docs/design-system/02-componentes/#ds37).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F03-01 | Maker titular con una impresora válida | Guarda sus capacidades | Los filtros de compatibilidad utilizan los datos vigentes con unidades conservadas. |
| AC-F03-02 | Perfil completo sin beneficio inicial | Confirma su primera habilitación | Se registra una sola concesión inicial con fechas del servidor y configuración conservada. |
| AC-F03-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F03-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-01.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2) | 1. El maker guarda capacidades válidas y las recupera sin cambios de significado o unidad.<br>2. Se rechazan dimensiones o cantidades inválidas y cambios de un usuario no autorizado.<br>3. El matching utiliza las capacidades vigentes declaradas, sin asignar compatibilidad por cercanía solamente. |
| [RF-12.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2) | 1. La primera habilitación concede un único beneficio inicial identificable.<br>2. Repetir la habilitación, cerrar sesión o editar el perfil no reinicia la prueba.<br>3. Inicio, fin y versión de configuración quedan conservados con hora del servidor. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-01](/3daltoque-docs/planificacion/parametros/#pd-01), [PD-02](/3daltoque-docs/planificacion/parametros/#pd-02), [PD-04](/3daltoque-docs/planificacion/parametros/#pd-04).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
