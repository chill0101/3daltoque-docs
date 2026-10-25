---
title: "SPEC-F14 · Notificaciones"
---

# SPEC-F14 · Notificaciones

Fecha: 25 de octubre de 2026. Versión: 2.0.

## 1. Objetivo y fundamento

Informar eventos relevantes y permitir consultar el recurso asociado.

El sistema registra avisos por solicitudes, ofertas, mensajes, membresía, producción, revisión y entrega. Los recordatorios verifican que la revisión o vencimiento todavía requiere aviso. Los canales externos conservan aceptación, error y confirmación de entrega cuando esté disponible. Cada aviso conduce a un recurso autorizado y conserva los datos mínimos.

| Referencia | Definición |
| --- | --- |
| Funcionalidad | [F14](/3daltoque-docs/proyecto/funcionalidades/#f14) |
| Actores | Participantes destinatarios y procesos del sistema. |
| Canales | Lógica de negocio. Web y Mobile; canales externos según selección. |
| RF | [RF-07.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-1), [RF-07.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-3), [RF-07.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-4), [RF-12.11](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-11), [RF-07.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-5) |
| RNF | [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-07](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16) |
| CU | [CU-23](/3daltoque-docs/analisis/casos/cu-23-recibir-y-consultar-notificaciones/) |

## 2. Pantallas y permisos

[WEB-NOT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#web-not-01), [MOB-NOT-01](/3daltoque-docs/specs/01-navegacion-y-pantallas/#mob-not-01).

El servidor comprueba actor, propiedad, estado y acción en cada operación. La interfaz utiliza las capacidades devueltas para presentar acciones y mantiene la finalización de pedidos existentes cuando aplica RF-12.10.

## 3. Entradas y validaciones

| Campo | Tipo | Obligatoriedad | Validación |
| --- | --- | --- | --- |
| recurso_tipo y recurso_id | Referencia | Sí | Revalidar acceso al abrir |
| canal | Configuración | Según aviso | Preferencia y canal seleccionado |
| clave_evento | Identidad | Sí | Deduplicación del aviso |

## 4. Flujo principal

| Paso | Ejecutor | Actividad |
| --- | --- | --- |
| 1 | Sistema | Recupera un evento pendiente y determina destinatarios y canales habilitados. |
| 2 | Sistema | Conserva el aviso interno y prepara el envío externo identificable cuando corresponda. |
| 3 | Usuario | Abre su bandeja de avisos. |
| 4 | Sistema | Autoriza destinatario y entrega la página y sus estados de lectura. |
| 5 | Usuario | Marca un aviso como leído o abre su destino. |
| 6 | Sistema | Conserva la lectura y revalida el acceso al recurso de destino. |

Los casos relacionados detallan los otros recorridos de la funcionalidad: [CU-23](/3daltoque-docs/analisis/casos/cu-23-recibir-y-consultar-notificaciones/).

## 5. Alternativas y errores

| ID | Condición y respuesta |
| --- | --- |
| ALT-F14-01 | Paso 2. Falla un canal externo: Conserva el hecho de negocio y aplica reintento conforme a configuración. |
| ALT-F14-02 | Paso 1. Se repite un evento o recordatorio: Recupera el aviso identificado y evita duplicados. |
| ALT-F14-03 | Paso 6. El destino fue retirado o el permiso cambió: Protege sus datos y ofrece volver a la bandeja. |

La salida de cada error sigue [los contratos compartidos](/3daltoque-docs/specs/00-contratos-y-convenciones/).

## 6. Contrato de API propuesto

Prefijo `/api/v1`. El [catálogo de API](/3daltoque-docs/diseno/api-eventos/) conserva las rutas y guardas comunes.

| Método | Ruta | Entrada relevante | Salida relevante | Guarda |
| --- | --- | --- | --- | --- |
| GET | `/notificaciones` | cursor y filtro leído | avisos propios y cursor | Destinatario autenticado. |
| PATCH | `/notificaciones/{id}` | leido y versión | estado leído | Aviso del destinatario. |

## 7. Datos, consistencia e integración

Tablas del [modelo lógico](/3daltoque-docs/modelado/modelo-logico/): `notificaciones`, `envios_notificacion`, `eventos_salida`.

El sistema registra avisos por solicitudes, ofertas, mensajes, membresía, producción, revisión y entrega. Los recordatorios verifican que la revisión o vencimiento todavía requiere aviso. Los canales externos conservan aceptación, error y confirmación de entrega cuando esté disponible. Cada aviso conduce a un recurso autorizado y conserva los datos mínimos.

## 8. Componentes y estados

[DS10](/3daltoque-docs/design-system/02-componentes/#ds10), [DS14](/3daltoque-docs/design-system/02-componentes/#ds14), [DS17](/3daltoque-docs/design-system/02-componentes/#ds17), [DS28](/3daltoque-docs/design-system/02-componentes/#ds28), [DS41](/3daltoque-docs/design-system/02-componentes/#ds41).

Aplicar carga, vacío, error, conflicto, permiso, pendiente externo y recuperación según el recorrido. Los componentes reciben el estado de su contenedor y los límites autorizados por el servidor. El detalle visual y accesible está en [patrones del design system](/3daltoque-docs/design-system/03-patrones-y-estados/).

## 9. Criterios de aceptación

| ID | Dado | Cuando | Entonces |
| --- | --- | --- | --- |
| AC-F14-01 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Un fallo de aviso conserva el resultado del negocio. |
| AC-F14-02 | Actor autorizado y condiciones del recorrido | Se ejecuta el flujo o la alternativa indicada | Los recordatorios consultan la revisión o vigencia actual. |
| AC-F14-PERM | Falta el permiso requerido por una operación | Se solicita la acción directamente al backend | La operación se deniega y conserva la privacidad del recurso. |
| AC-F14-INPUT | Entrada incompatible con la política vigente | Se confirma la operación | Se informa el campo o condición a corregir y se conserva el estado válido. |

### Condiciones heredadas de los RF

| RF | Criterio de éxito |
| --- | --- |
| [RF-07.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-1) | 1. El evento elegido genera un aviso para los destinatarios correctos después de quedar registrado.<br>2. Un usuario consulta solo sus avisos y recursos permitidos.<br>3. La repetición de procesamiento no duplica el mismo aviso visible. |
| [RF-07.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-3) | 1. Un aviso elegible utiliza el canal configurado y conserva su referencia de envío.<br>2. Un fallo o destinatario inválido se registra sin deshacer el hecho de negocio ni declarar entrega exitosa.<br>3. Las preferencias/permisos y los reintentos acordados se respetan, sin generar envíos duplicados por errores propios de la plataforma. |
| [RF-07.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-4) | 1. Una revisión pendiente genera recordatorios en los momentos previstos por la configuración aprobada.<br>2. Un recordatorio que se ejecuta después de aprobar o cancelar la revisión deja de enviarse.<br>3. La programación y el envío de recordatorios nunca producen una aprobación automática. |
| [RF-12.11](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-11) | 1. Los destinatarios son autorizados y los reintentos no duplican efectos comerciales.<br>2. Un fallo al avisar no extiende ni acorta la vigencia.<br>3. No se promete un precio todavía no configurado. |
| [RF-07.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-5) | 1. Un destinatario recupera sus avisos y conserva el estado leído al volver a entrar.<br>2. Un identificador de aviso ajeno recibe una denegación.<br>3. Un destino retirado o sin permiso muestra una salida de recuperación que protege sus datos. |

## 10. Decisiones y dependencias

Reglas funcionales: [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/). Configuración y servicios: [PD-07](/3daltoque-docs/planificacion/parametros/#pd-07), [PD-10](/3daltoque-docs/planificacion/parametros/#pd-10), [PD-11](/3daltoque-docs/planificacion/parametros/#pd-11), [PD-12](/3daltoque-docs/planificacion/parametros/#pd-12).

La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) y los [casos de prueba](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) relacionan esta funcionalidad con sus condiciones y escenarios.
