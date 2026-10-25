---
title: "SPEC-F02 · Gestión de perfil de cliente"
---

# SPEC-F02 · Gestión de perfil de cliente

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Mantener los datos de contacto y la ubicación de referencia necesarios para solicitar y recibir una impresión.

El cliente consulta y actualiza su perfil. El sistema informa la finalidad de cada dato, conserva la precisión de ubicación autorizada y limita su consulta según la operación y el actor. F07 detalla la selección y visualización geográfica.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F02](/3daltoque-docs/proyecto/funcionalidades/#f02) |
| Actores | Cliente titular; administración con permiso específico. |
| Canales | ABM. Web y Mobile. |
| RF | [RF-01.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-3), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17) |
| CU | [CU-22](/3daltoque-docs/analisis/casos/cu-22-gestionar-perfil-de-cliente/) |

## 2. Pantallas y permisos

[WEB-CLI-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-cli-01), [MOB-CLI-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-cli-01).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| contacto | Objeto | Según PD-01 | Campos admitidos y finalidad comunicada |
| ubicacion_id | UUID | Según operación | Referencia propia y confirmada |
| version_esperada | Versión | En modificación | Detectar edición concurrente |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Cliente | Abre su perfil. |
| 2 | Sistema | Recupera datos propios y permisos de edición. |
| 3 | Cliente | Edita contacto y selecciona o ingresa manualmente una ubicación de referencia. |
| 4 | Sistema | Valida campos, precisión, propiedad y versión. |
| 5 | Sistema | Conserva la referencia nueva y mantiene las ubicaciones ya utilizadas por acuerdos históricos. |
| 6 | Cliente | Consulta el perfil actualizado. |

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-22](/3daltoque-docs/analisis/casos/cu-22-gestionar-perfil-de-cliente/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F02-01 | Paso 3. Ubicación denegada o proveedor indisponible: Permite la alternativa textual habilitada y explica la precisión disponible. |
| ALT-F02-02 | Paso 4. Datos inválidos o cambio concurrente: Informa los campos y permite recuperar la versión actual. |
| ALT-F02-03 | Paso 2. Se solicita un perfil ajeno: Deniega el acceso. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| GET | `/clientes/me` | sesión | datos propios y versión | Cliente titular. |
| PATCH | `/clientes/me` | contacto, referencia de ubicación y versión | perfil y versión nueva | Titularidad, formato y concurrencia. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `clientes`, `ubicaciones`.

El cliente consulta y actualiza su perfil. El sistema informa la finalidad de cada dato, conserva la precisión de ubicación autorizada y limita su consulta según la operación y el actor. F07 detalla la selección y visualización geográfica.

## 8. Componentes y estados

[DS03](/3daltoque-docs/design-system/02-componentes/#ds03), [DS05](/3daltoque-docs/design-system/02-componentes/#ds05), [DS09](/3daltoque-docs/design-system/02-componentes/#ds09), [DS11](/3daltoque-docs/design-system/02-componentes/#ds11), [DS37](/3daltoque-docs/design-system/02-componentes/#ds37).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F02-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | El titular consulta y modifica sus datos autorizados. |
| AC-F02-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | La precisión compartida coincide con la configuración aprobada. |
| AC-F02-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F02-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-01.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-3) | 1. El titular guarda y recupera su información autorizada.<br>2. Otro usuario no modifica ni consulta datos privados del cliente.<br>3. La información enviada a makers o mostrada en pantallas respeta la precisión y finalidad acordadas. |
| [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1) | 1. Una selección confirmada conserva coordenadas y metadatos autorizados con significado inequívoco.<br>2. Un resultado ambiguo o inexistente requiere corrección o confirmación y no se adopta silenciosamente.<br>3. Permiso denegado o falla externa se informa con las alternativas que se hayan habilitado. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-01](/3daltoque-docs/planificacion/parametros/#pd-01), [PD-04](/3daltoque-docs/planificacion/parametros/#pd-04), [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
