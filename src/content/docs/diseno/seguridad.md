---
title: "Seguridad y operación"
---

# Especificaciones de seguridad y operación

Versión 1.0. Fecha: 1 de noviembre de 2026. Referencias: RNF-04, RNF-06, RNF-09 a RNF-12, RNF-15, RNF-16 y RNF-19.

## Activos y fronteras de confianza

Los activos protegidos comprenden identidades, sesiones, domicilios exactos, STL, mensajes, evidencia, acuerdos versionados, compras del abono y credenciales de proveedores. Web y Mobile son clientes de la API; el backend decide permisos, importes y transiciones. El almacén de objetos y los proveedores externos tienen credenciales y contratos propios. El worker procesa trabajos persistidos con la misma autorización de dominio del backend.

## Identidad y sesiones

La referencia de implementación utiliza sesiones opacas revocables respaldadas por la tabla sesiones. El servidor conserva la huella del secreto y consulta vigencia y estado de la cuenta. Web transporta la sesión mediante cookie HttpOnly, Secure en HTTPS y política SameSite compatible con su despliegue; las mutaciones por cookie verifican origen y token CSRF. Mobile utiliza Bearer sobre TLS y almacena el secreto en el almacén seguro del sistema. Ambos transportes resuelven la misma identidad y capacidades.

El perfil de prueba configura duración máxima de ocho horas, inactividad de treinta minutos y revocación al cerrar sesión. Una cuenta suspendida pierde acceso al consultar la guarda. Las contraseñas se almacenan mediante un hash adaptativo con sal y parámetros conservados; el código de identidad fija su biblioteca y parámetros en el release. El registro público admite cliente y maker; la creación administrativa utiliza un procedimiento autorizado y auditado.

## Autorización por recurso

| Recurso/acción | Control obligatorio |
| --- | --- |
| Perfil propio | Identidad titular; campos editables permitidos. |
| Perfil, catálogo y portfolio públicos | Estado publicado y derivados autorizados; zona con precisión pública. |
| Solicitud y ofertas | Propietario cliente o maker invitado según la acción. |
| Confirmación de pedido | Cliente titular, versión vigente y maker elegible; participantes diferentes. |
| Chat, historial y evidencia | Participante del pedido confirmado; archivo habilitado para ese contexto. |
| Revisión y recepción | Cliente titular; revisión y acuerdo vigentes. |
| Membresía | Maker titular o capacidad administrativa específica con motivo. |
| Moderación y soporte | Capacidad por acción, motivo y registro de auditoría; acceso mínimo al contenido necesario. |

Una denegación conserva el estado del recurso. Las respuestas ajenas pueden usar 404 para proteger su existencia. La interfaz presenta las capacidades devueltas por servidor y revalida al confirmar cada mutación.

## Archivos

1. Autorizar finalidad, titular, tamaño declarado y formato permitido.
2. Emitir una autorización de carga de corta duración para un objeto privado.
3. Al finalizar, comprobar tamaño real, integridad, tipo y análisis requerido.
4. Habilitar el archivo para el contexto permitido; generar derivados públicos únicamente con autorización explícita.
5. Emitir descargas temporales después de verificar pertenencia en cada solicitud.
6. Retirar accesos y aplicar conservación o anonimización según la política versionada del entorno.

Los nombres de objetos son opacos y el bucket bloquea el listado público. El analizador opera con límites de tiempo, memoria y tamaño. Un STL inválido conserva el borrador y devuelve su causa de rechazo o análisis insuficiente.

## Integridad de operaciones

La aceptación de oferta y el pedido directo ejecutan validación, conservación de condiciones, creación de pedido y eventos en una transacción. Una clave de operación se vincula a actor, operación, recurso y contenido normalizado. Repetir una intención devuelve su resultado; reutilizar su clave con otro contenido devuelve conflicto. El pedido directo recupera primero el resultado de esa clave para mantener un acuerdo ya confirmado aunque la publicación haya cambiado.

Los cobros del abono validan firma, referencia, receptor, entorno, importe, moneda y estado consultado al proveedor. El retorno del navegador consulta el backend. Los eventos se conservan en eventos_proveedor y las concesiones se deduplican por compra. Las credenciales permanecen en backend y worker.

## Límites y observabilidad

El entorno publica límites de archivos, longitud de mensajes, paginación, tasa y presupuesto de análisis. La referencia de prueba está en PERF-01. Las respuestas de tasa incluyen ventana y Retry-After cuando corresponda. Los logs conservan request_id, servicio, acción y código de resultado; los secretos, cuerpos de chat, archivos y domicilios privados se excluyen.

Liveness informa que el proceso responde. Readiness comprueba PostgreSQL y configuración indispensable. La indisponibilidad de mapas, correo o cobros se informa por integración y permite las alternativas previstas; cada dependencia tiene timeout y tratamiento de recuperación.

## Copias de resguardo y recuperación

Generar copia consistente de PostgreSQL y un manifiesto de los objetos referenciados con sus hashes. Conservar por entorno la hora, release, migración y política de retención. Restaurar en un destino aislado, verificar integridad referencial, cantidades y objetos privados, y ejecutar los recorridos de acceso, consulta de pedido y membresía. PERF-01 utiliza RPO de 24 horas y RTO de 60 minutos para el piloto.

## Respuesta a incidentes

Identificar entorno, alcance, recurso y hora; contener accesos comprometidos; revocar sesiones o credenciales afectadas; conservar evidencia con acceso restringido; recuperar desde estados consistentes y verificar invariantes. Registrar causa, acciones, responsables y prevención. Las comunicaciones sobre datos personales se revisan con la persona responsable de la plataforma y las condiciones aplicables al despliegue.

## Comprobación

CP-014, CP-020, CP-024 y CP-027 cubren permisos, privacidad, webhooks y entornos. PNF-005 a PNF-008 cubren límites, accesibilidad, conservación y recuperación. La ejecución conserva la evidencia según el [plan de pruebas](/3daltoque-docs/planificacion/pruebas/).
