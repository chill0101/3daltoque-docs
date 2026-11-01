---
title: "Perfil de aceptación PERF-01"
---

# PERF-01: perfil de aceptación del piloto

Versión 1.0. Fecha: 1 de noviembre de 2026.

Este perfil fija un escenario reproducible para evaluar los 19 RNF. Sus valores forman la referencia técnica del piloto. Cada ejecución conserva la configuración utilizada y sus resultados.

## Entorno y datos

| Parámetro | Referencia |
| --- | --- |
| Backend y worker | Dos procesos del mismo release; API con 2 vCPU y 2 GiB de RAM; worker con 1 vCPU y 1 GiB. Registrar límites efectivos. |
| Persistencia | PostgreSQL/PostGIS; volumen persistente; registrar versiones e índices de la migración aplicada. |
| Clientes | Web en dos navegadores de escritorio; Android en emulador y un dispositivo físico. Registrar versión y tamaño de pantalla. |
| Datos base | 50 makers, 100 clientes, 500 solicitudes, 1.000 ofertas, 200 pedidos y 2.000 mensajes. |
| Escalabilidad | Repetir la búsqueda con 200 makers, conservando distribución, mezcla y capacidad de infraestructura. |
| Ubicación | Zonas sintéticas de CABA y alrededores; coordenadas de prueba separadas de domicilios reales. |
| Carga | Diez usuarios concurrentes; 60% consultas, 20% búsqueda, 10% mensajes y 10% mutaciones de pedidos. |
| Duración | Cinco minutos de calentamiento y quince de medición; tres repeticiones. Disponibilidad: ventana independiente de 24 horas. |
| Tiempo | UTC en persistencia; America/Argentina/Buenos_Aires en las vistas de encuentro. Reloj controlable en pruebas temporales. |
| Proveedores | Adaptadores deterministas para rendimiento; ensayos externos separados en sandbox. Registrar latencia del proveedor por separado. |

Los datos sintéticos se reconstruyen antes de cada serie. La carga identifica usuario, recurso y clave de operación. Los pedidos y mensajes conservan las pertenencias previstas para que la evaluación compruebe permisos reales.

## Objetivos y método

| RNF | Criterio de aceptación del perfil | Método y evidencia |
| --- | --- | --- |
| 01 | Al menos 99% de sondas satisfactorias en 24 h, cada 60 s. | Serie de 1.440 sondas; declarar denominador, interrupciones y causa. |
| 02 | Búsqueda p95 de hasta 2 s y menos de 1% de errores técnicos. | Tiempos del cliente, percentiles por repetición y validación de los candidatos devueltos. |
| 03 | Con 200 makers conserva corrección y el objetivo de RNF-02 con el mismo entorno. | Comparar consultas e índices con la ejecución base. |
| 04 | Todos los intentos ajenos a recurso quedan denegados; sesión revocada pierde acceso. | Matriz de permisos positiva y negativa, cuerpos de respuesta sin datos privados. |
| 05 | Un pedido por solicitud, un período por compra y cupo fundador respetado. | Dos conexiones concurrentes; claves iguales y diferentes; consulta de invariantes al terminar. |
| 06 | Cada transición sensible conserva actor, recurso, momento, motivo y correlación. | Reconciliar operaciones de prueba con historial y auditoría. |
| 07 | Cada error técnico se identifica por request_id y servicio, sin credenciales ni contenido privado. | Inspección de logs, métricas y eventos de integración. |
| 08 | Recorridos críticos operables por teclado; foco visible; contraste 4,5:1 para texto normal y 3:1 para grande. | Checklist manual y medición sobre los componentes y sus estados; registrar excepciones de la referencia WCAG. |
| 09 | Importe, moneda, receptor y compra verificados; cada compra pagada concede un período como máximo. | PNF y casos de abono con eventos repetidos, firma alterada y recurso ajeno. |
| 10 | Simulación identificada y restringida al entorno permitido. | Misma intención en demo y entorno comercial; inspección de modo y períodos. |
| 11 | El retiro revoca nuevas consultas y URLs temporales vencen según su TTL. | Acceso antes/después de revocar; vencimiento con reloj controlado; auditoría conservada. |
| 12 | Consentimiento versionado y avisos accesibles en alta, ubicación y abono. | Registro de aceptación y recorrido de interfaz por rol. |
| 13 | Nueva configuración afecta operaciones futuras; compras y períodos históricos conservan su versión. | Modificar plan y cupo entre dos compras; cotejar condiciones. |
| 14 | El 100% de las respuestas muestreadas cumple el contrato publicado. | Validación de esquema, códigos y errores por operación. |
| 15 | Una falla externa conserva el hecho local y permite recuperación o alternativa prevista. | Inyectar timeout, error temporal y resultado incierto en cada adaptador. |
| 16 | Límites de payload, lista, adjuntos y tasa se aplican sin alterar otro recurso. | Valores mínimo, máximo y fuera de rango; comprobar 413, 422 o 429 según la causa. |
| 17 | Web y Mobile obtienen el mismo estado y permisos sobre el mismo recurso. | Intercalar mutaciones y lecturas entre ambos clientes. |
| 18 | Un entorno limpio arranca desde release, configuración y migraciones identificados. | Registro de comandos, hashes y comprobación de servicios; seguir el manual de instalación. |
| 19 | Objetivos del piloto: RPO de 24 h y RTO de 60 min para datos persistidos. | Restaurar en entorno aislado y comprobar filas, referencias, objetos y permisos. |

## Límites del conjunto de prueba

STL: 20 MiB; imagen: 10 MiB; cinco archivos por revisión; mensaje: 4.000 caracteres; listas: 20 elementos por defecto y 100 como máximo. El límite de acceso del ensayo usa cinco fallos por minuto. Estos valores se conservan en la configuración del fixture y se informan a los clientes para validar sus fronteras.

## Registro de ejecución

Cada ejecución registra ID PNF/CP, release y commit, perfil y configuración, versiones de herramientas, fecha de inicio/fin, dataset y semilla, resultados, incidencias y ubicación de evidencia. Una repetición que cambia infraestructura o datos genera otra ejecución. La evaluación compara cada medición con su umbral y explica cualquier exclusión.

## Referencias

[RNF](/3daltoque-docs/analisis/requisitos/no-funcionales/), [plan de pruebas](/3daltoque-docs/planificacion/pruebas/), [trazabilidad](/3daltoque-docs/specs/02-matriz-de-cobertura/) y [WCAG 2.2, contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
