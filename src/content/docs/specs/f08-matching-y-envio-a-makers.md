---
title: "SPEC-F08 · Matching y envío a makers"
---

# SPEC-F08 · Matching y envío a makers

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Enviar una solicitud a un grupo limitado de makers capaces de atenderla.

El sistema aplica compatibilidad técnica y los criterios de selección acordados. Conserva el grupo de destinatarios, los parámetros y las invitaciones. El maker consulta las solicitudes que le corresponden, con información y plazos actuales. La consulta de archivos respeta la finalidad y etapa de cada invitación.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F08](/3daltoque-docs/proyecto/funcionalidades/#f08) |
| Actores | Sistema y makers elegibles. |
| Canales | Lógica de negocio. Web y Mobile. |
| RF | [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RF-03.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-2), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10) |
| RNF | [RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02), [RNF-03](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-03), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06) |
| CU | [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/), [CU-02](/3daltoque-docs/analisis/casos/cu-02-recibir-y-responder-ofertas/) |

## 2. Pantallas y permisos

[WEB-MKR-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-mkr-03), [MOB-MKR-03](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-mkr-03).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| solicitud_version | Versión | Sí | Parámetros conservados |
| limite_makers | Entero configurado | Sí | Política versionada |
| radio_metros | Decimal configurado | Sí | Coherencia con PD-04 |

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

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-01](/3daltoque-docs/analisis/casos/cu-01-publicar-solicitud/), [CU-02](/3daltoque-docs/analisis/casos/cu-02-recibir-y-responder-ofertas/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F08-01 | Paso 2. Archivo inválido, análisis pendiente o cuota excedida: Informa el estado, conserva el borrador y permite corregir o recuperar la transferencia. |
| ALT-F08-02 | Paso 5. Faltan datos o parámetros para estimar: Informa el motivo y mantiene disponible la cotización por makers. |
| ALT-F08-03 | Paso 6. Grupo insuficiente o mapas indisponibles: Registra el resultado y aplica únicamente la ampliación o alternativa textual configuradas. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| GET | `/makers/me/invitaciones` | estado y cursor | invitaciones autorizadas | Maker destinatario. |
| GET | `/invitaciones/{id}` | invitacion_id | especificaciones y capacidades de acción | Maker invitado; archivos autorizados. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `rondas_busqueda`, `invitaciones_maker`, `membresias_maker`, `periodos_membresia`.

El sistema aplica compatibilidad técnica y los criterios de selección acordados. Conserva el grupo de destinatarios, los parámetros y las invitaciones. El maker consulta las solicitudes que le corresponden, con información y plazos actuales. La consulta de archivos respeta la finalidad y etapa de cada invitación.

## 8. Componentes y estados

[DS09](/3daltoque-docs/design-system/02-componentes/#ds09), [DS10](/3daltoque-docs/design-system/02-componentes/#ds10), [DS17](/3daltoque-docs/design-system/02-componentes/#ds17), [DS19](/3daltoque-docs/design-system/02-componentes/#ds19), [DS20](/3daltoque-docs/design-system/02-componentes/#ds20).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F08-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Cada invitación registra destinatario y versión de búsqueda. |
| AC-F08-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Un fallo al notificar conserva la invitación creada. |
| AC-F08-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F08-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1) | 1. Para un conjunto conocido de makers, los invitados cumplen los filtros y el límite configurados para la prueba.<br>2. Un maker incompatible o fuera del criterio geográfico no se incorpora por ser el único disponible.<br>3. Si no hay candidatos se informa el resultado y no se envía indiscriminadamente a toda la plataforma. |
| [RF-03.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-2) | 1. El maker consulta las solicitudes habilitadas para su cuenta y no las reservadas a otros destinatarios.<br>2. La lista sigue el orden acordado y muestra estados/plazos actuales.<br>3. Una solicitud cerrada o no elegible no se presenta como una invitación todavía accionable. |
| [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10) | 1. Un maker vencido no confirma un trabajo nuevo mediante una petición directa que eluda la interfaz.<br>2. Vencer el acceso no cancela pedidos ni bloquea su finalización.<br>3. La guarda determina la vigencia con la fecha del servidor, los permisos y los períodos concedidos. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-04](/3daltoque-docs/planificacion/parametros/#pd-04), [PD-05](/3daltoque-docs/planificacion/parametros/#pd-05), [PD-11](/3daltoque-docs/planificacion/parametros/#pd-11).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
