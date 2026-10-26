---
title: "Requerimientos de 3DAltoque"
---

# Requerimientos de 3DAltoque

Versión 3.0. Fecha: 25 de octubre de 2026.

## Alcance vigente

3DAltoque conecta clientes con makers y cobra al maker un abono mensual prepago por el uso del servicio. Hay un único plan inicial y la renovación es manual mediante Mercado Pago Checkout Pro. No se utiliza débito recurrente.

El cliente paga la impresión directamente al maker por el medio acordado entre las partes. Los ingresos de 3DAltoque corresponden al abono del maker, de acuerdo con ADR-002.

La integración de pagos cobra el servicio de 3DAltoque al maker mediante Checkout Pro con la cuenta receptora de la plataforma. Esta decisión concentra el desarrollo financiero en compras de membresía, confirmación de pagos y períodos de acceso.

## Catálogo vigente

68 requisitos funcionales y 19 no funcionales con las once filas de la plantilla de la materia. RF-08.1 a RF-08.9 se retiran del alcance vigente; no se reutilizan sus identificadores. Su versión anterior queda preservada en el antecedente del cambio comercial.

- [Fichas funcionales](/3daltoque-docs/analisis/requisitos/funcionales/).
- [Fichas no funcionales](/3daltoque-docs/analisis/requisitos/no-funcionales/).
- [Modelo comercial](/3daltoque-docs/proyecto/modelo-comercial/).
- [ADR-002](/3daltoque-docs/decisiones/modelo-comercial/).

| ID | Nombre |
| --- | --- |
| RF-01.1 | [Registrar clientes y makers](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-1) |
| RF-01.2 | [Gestionar capacidades del maker](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2) |
| RF-01.3 | [Gestionar contacto y ubicación del cliente](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-3) |
| RF-01.4 | [Iniciar sesión](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-4) |
| RF-01.5 | [Cerrar sesión](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-5) |
| RF-02.1 | [Cargar STL y parámetros de impresión](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-1) |
| RF-02.2 | [Validar archivos y límites técnicos](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2) |
| RF-02.3 | [Crear solicitud de impresión](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-3) |
| RF-02.4 | [Consultar estado y plazos de solicitud](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-4) |
| RF-02.5 | [Presentar estimación orientativa](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-5) |
| RF-03.1 | [Enviar solicitud a makers compatibles y cercanos](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1) |
| RF-03.2 | [Consultar solicitudes recibidas por el maker](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-2) |
| RF-04.1 | [Presentar oferta de precio y plazo](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1) |
| RF-04.2 | [Gestionar vigencia y estado de oferta](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2) |
| RF-04.3 | [Comparar ofertas disponibles](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-3) |
| RF-04.4 | [Aceptar una sola oferta y confirmar pedido](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4) |
| RF-04.5 | [Responder o rechazar invitación de cotización](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-5) |
| RF-04.6 | [Solicitar y resolver una contraoferta](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-6) |
| RF-05.1 | [Conversar en el contexto del pedido](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-1) |
| RF-05.2 | [Registrar mensajes y adjuntos autorizados](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2) |
| RF-05.3 | [Auditar cambios de estado del pedido](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3) |
| RF-05.4 | [Consultar la bandeja de conversaciones](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-4) |
| RF-06.1 | [Presentar evidencia de la pieza terminada](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1) |
| RF-06.2 | [Solicitar revisión del cliente](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-2) |
| RF-06.3 | [Aprobar resultado o registrar observaciones](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3) |
| RF-06.4 | [Conservar revisión pendiente ante silencio](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-4) |
| RF-06.5 | [Consultar y actualizar avance de producción](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-5) |
| RF-06.6 | [Coordinar entrega personal](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-6) |
| RF-06.7 | [Registrar recepción y completar entrega](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-7) |
| RF-07.1 | [Notificar eventos dentro de la plataforma](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-1) |
| RF-07.2 | [Gestionar moderación y soporte](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-2) |
| RF-07.3 | [Enviar avisos por canales externos habilitados](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-3) |
| RF-07.4 | [Recordar revisiones pendientes](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-4) |
| RF-07.5 | [Consultar y marcar avisos internos](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-5) |
| RF-09.1 | [Seleccionar y confirmar ubicación de referencia](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1) |
| RF-09.2 | [Visualizar zonas y puntos en mapa](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2) |
| RF-10.1 | [Autorizar transferencia de archivos privados](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1) |
| RF-10.2 | [Completar y habilitar archivo recibido](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2) |
| RF-10.3 | [Consultar y descargar archivos con permiso](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3) |
| RF-10.4 | [Aplicar retiro y retención de archivos](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-4) |
| RF-11.1 | [Exponer operaciones mediante API común](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1) |
| RF-11.2 | [Sincronizar cambios de ofertas, chat y pedidos](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2) |
| RF-12.1 | [Configurar el único plan de membresía](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1) |
| RF-12.2 | [Iniciar la prueba gratuita general](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2) |
| RF-12.3 | [Asignar el programa Makers Fundadores](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3) |
| RF-12.4 | [Consultar estado y vencimiento de acceso](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-4) |
| RF-12.5 | [Iniciar el pago del abono](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-5) |
| RF-12.6 | [Verificar notificaciones de pago del abono](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6) |
| RF-12.7 | [Consultar y conciliar compras de membresía](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7) |
| RF-12.8 | [Conceder acceso por un pago confirmado](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8) |
| RF-12.9 | [Renovar manualmente la membresía](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-9) |
| RF-12.10 | [Aplicar vigencia a trabajos nuevos y preservar los activos](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10) |
| RF-12.11 | [Recordar vencimientos de acceso](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-11) |
| RF-12.12 | [Gestionar devoluciones del abono autorizadas](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12) |
| RF-12.13 | [Auditar cambios del plan y beneficios](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13) |
| RF-12.14 | [Separar simulación y cobros reales de membresía](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-14) |
| RF-12.15 | [Informar el alcance del pago y del programa de fundadores](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15) |
| RF-13.1 | [Mantener productos del maker](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-1) |
| RF-13.2 | [Publicar y retirar productos del catálogo](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-2) |
| RF-13.3 | [Consultar el catálogo público del maker](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-3) |
| RF-13.4 | [Confirmar un pedido directo de catálogo](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-4) |
| RF-14.1 | [Mantener el portfolio del maker](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-1) |
| RF-14.2 | [Consultar trabajos publicados del maker](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-2) |
| RF-15.1 | [Valorar a la contraparte de un pedido](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-1) |
| RF-15.2 | [Consultar reputación publicada](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-2) |
| RF-15.3 | [Moderar valoraciones con trazabilidad](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-3) |
| RF-16.1 | [Consultar el historial propio de pedidos](/3daltoque-docs/analisis/requisitos/funcionales/#rf-16-1) |
| RF-17.1 | [Consultar el reporte de actividad](/3daltoque-docs/analisis/requisitos/funcionales/#rf-17-1) |


### Requerimientos no funcionales

| ID | Nombre |
| --- | --- |
| RNF-01 | [Disponibilidad del servicio](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-01) |
| RNF-02 | [Rendimiento de búsqueda](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02) |
| RNF-03 | [Escalabilidad por módulos y parámetros](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-03) |
| RNF-04 | [Seguridad de acceso y datos privados](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04) |
| RNF-05 | [Consistencia de operaciones críticas](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05) |
| RNF-06 | [Trazabilidad de decisiones y cambios](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06) |
| RNF-07 | [Observabilidad del sistema e integraciones](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-07) |
| RNF-08 | [Accesibilidad y comprensión de los flujos](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08) |
| RNF-09 | [Integridad financiera del abono](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09) |
| RNF-10 | [Compatibilidad de pago real y simulado](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10) |
| RNF-11 | [Retención y borrado de datos personales](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11) |
| RNF-12 | [Condiciones de uso, datos y proveedores](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12) |
| RNF-13 | [Configurabilidad del plan y promociones](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13) |
| RNF-14 | [Interoperabilidad y contrato de API](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-14) |
| RNF-15 | [Tolerancia a fallas de integraciones](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15) |
| RNF-16 | [Límites de uso y recursos](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16) |
| RNF-17 | [Compatibilidad de los canales](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17) |
| RNF-18 | [Mantenibilidad y reproducción del entorno](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-18) |
| RNF-19 | [Respaldo y recuperación](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-19) |

## Requisitos retirados

| IDs | Situación |
| --- | --- |
| RF-08.1 a RF-08.9 | Modelo anterior de cobro y comisión por impresión; Retirado por ADR-002; versión conservada en el historial del cambio comercial |

## Decisiones que condicionan el cierre

<a id="pd-01"></a>
### PD-01 Identidad y habilitación

La identidad conserva roles públicos cliente/maker; administración se asigna por un procedimiento autorizado. Habilitar maker exige contacto, zona y capacidad productiva válidos y concede una única prueba.

Parámetros: Política de credenciales, verificación de contacto y plazos de sesión.

<a id="pd-02"></a>
### PD-02 Archivos y parámetros

La solicitud personalizada utiliza STL y unidad declarada; los archivos se habilitan por finalidad e integridad. El catálogo toma configuración de su versión publicada.

Parámetros: Formatos, cuotas, límites de tamaño y presupuestos de análisis.

<a id="pd-03"></a>
### PD-03 Estimación orientativa

El sistema calcula una referencia automática con método y configuración identificados; entradas insuficientes producen indisponibilidad explicada y permiten cotización de makers.

Parámetros: Método técnico y coeficientes de cálculo versionados antes de habilitar su resultado monetario.

<a id="pd-04"></a>
### PD-04 Búsqueda y ubicación

Se filtra por capacidad, material y acceso; luego ubicación y disponibilidad. Los grupos son limitados y la zona pública protege el domicilio. La cola utiliza confirmación e identidad como orden estable.

Parámetros: Radio, tamaño de grupo, ampliación y precisión publicada.

<a id="pd-05"></a>
### PD-05 Solicitudes, ofertas y catálogo

Las condiciones conservan versiones; el cliente propone cambios y el maker publica otra versión al aceptarlos. Un pedido directo confirma precio publicado. El acceso vencido impide acuerdos nuevos y conserva los existentes.

Parámetros: Vigencias y límites configurables de edición antes de contratar.

<a id="pd-06"></a>
### PD-06 Conversaciones y visibilidad

La conversación se habilita desde el pedido confirmado. Cliente y maker participan; una consulta administrativa exige capacidad, motivo y auditoría.

Parámetros: Límites de mensajes y adjuntos, conservación y mecanismo de actualización.

<a id="pd-07"></a>
### PD-07 Revisión y soporte

El cliente decide sobre la revisión vigente; las observaciones se conservan y las correcciones crean una revisión nueva. El silencio mantiene pendiente la aprobación.

Parámetros: Plazos de recordatorio, escalamiento e intervenciones sensibles permitidas en cada estado.

<a id="pd-08"></a>
### PD-08 Entrega y recepción

Cliente y maker acuerdan punto y horario; un cambio requiere otra aceptación. La recepción se completa con confirmación autenticada del cliente sobre revisión y acuerdo vigentes.

Parámetros: Límites de reprogramación y tratamiento operativo de incidentes.

<a id="pd-09"></a>
### PD-09 Cobro y devolución del abono

Checkout Pro cobra el servicio de membresía con la cuenta de la plataforma. La verificación precede a la concesión de acceso. Las devoluciones del abono son autorizadas y conciliadas.

Parámetros: Cuenta por entorno y política concreta de devolución y efecto sobre períodos futuros.

<a id="pd-10"></a>
### PD-10 Plan y fundadores

Un plan prepago de renovación manual. La primera habilitación concede 30 días generales o 90 totales para fundadores como valores configurables. La asignación fundadora inicial conserva cupo y beneficio único.

Parámetros: Precio, moneda, cupo, ventana, regla de calendario y tratamiento de asignaciones posteriores al beneficio inicial.

<a id="pd-11"></a>
### PD-11 Servicios y canales

Web y React Native comparten FastAPI. Mapas, archivos, avisos y recuperación de eventos utilizan puertos; los proveedores se seleccionan según sus contratos.

Parámetros: Hosting, proveedores, autenticación y transporte de actualizaciones.

<a id="pd-12"></a>
### PD-12 Privacidad y conservación

Los recursos se autorizan por contexto. Catálogo y portfolio muestran derivados aprobados; los originales y datos privados permanecen restringidos. Las referencias históricas se conservan.

Parámetros: Períodos de retención y anonimización, respaldo y condiciones de uso.

<a id="pd-13"></a>
### PD-13 Calidad y recursos

Los RNF utilizan perfil de carga, pruebas de permisos, concurrencia, accesibilidad y recuperación. Los límites se validan en backend.

Parámetros: Valores de presupuesto, objetivos medibles y capacidad del piloto.

<a id="pd-14"></a>
### PD-14 Administración y reputación

Las capacidades administrativas separan soporte, moderación y reportes. La valoración exige pedido completado, contraparte y unicidad; criterios y escala se conservan por configuración.

Parámetros: Escala y criterios publicados y límites de contenido y moderación.

<a id="pd-15"></a>
### PD-15 Simulación

Los cobros simulados utilizan modo y entorno identificados y separados de las operaciones productivas.

Parámetros: Permisos y cuentas de demostración por entorno.

## Revisión pendiente

La [revisión funcional completa](/3daltoque-docs/planificacion/revision-funcional/) registra la cobertura de funcionalidades, requisitos, casos, datos y pruebas. Los valores operativos se gestionan en [el registro PD](/3daltoque-docs/planificacion/parametros/).

<a id="perfil-de-medicion"></a>

## Perfil de medición

PERF-01 debe fijar entorno, volumen de datos, mezcla de operaciones, concurrencia, duración y herramientas antes de ejecutar. Las metas propuestas se revisan con PD-13. Cada informe de ejecución debe identificar la versión del RNF, el resultado medido y las exclusiones autorizadas.

## Cobertura funcional ampliada

Las funcionalidades F01 a F25 se relacionan con 68 RF y 25 casos de uso. [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/) conserva la decisión de pedido directo de catálogo y conversación desde el pedido confirmado. El [catálogo funcional](/3daltoque-docs/proyecto/funcionalidades/) y la [matriz](/3daltoque-docs/specs/02-matriz-de-cobertura/) mantienen la correspondencia con datos, contratos y pruebas.
