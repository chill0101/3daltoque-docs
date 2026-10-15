---
title: "Requisitos: guía de lectura"
description: "Documentación de análisis y diseño de 3DAltoque."
---

Versión 2.0-borrador. Decisión de alcance adoptada el 14 de octubre de 2026; revisión académica pendiente.

## Modelo elegido para la primera versión

3DAltoque conecta clientes con makers y cobra al maker un abono mensual prepago por el uso del servicio. Hay un único plan inicial y cada renovación requiere una compra iniciada por el maker mediante Mercado Pago Checkout Pro.

El cliente paga la impresión directamente al maker, por el medio que acuerden. La plataforma no recibe, retiene, reparte, liquida ni garantiza ese dinero. No cobra comisiones por pedido ni registra deuda de comisiones del maker.

La integración de pagos permite cobrar el servicio de 3DAltoque al maker mediante una cuenta receptora propia de la plataforma. El pago de la impresión se acuerda y gestiona directamente entre cliente y maker.

## Catálogo vigente

54 requisitos funcionales y 19 no funcionales con las once filas de la plantilla de la materia. RF-08.1 a RF-08.9 quedan archivados con sus identificadores originales como antecedentes del cambio comercial. Su versión anterior queda preservada en el antecedente del cambio comercial.

- [Fichas funcionales](/3daltoque-docs/analisis/requisitos/funcionales/).
- [Fichas no funcionales](/3daltoque-docs/analisis/requisitos/no-funcionales/).
- Modelo comercial.
- ADR-002.

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
| RF-05.1 | [Conversar en el contexto del pedido](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-1) |
| RF-05.2 | [Registrar mensajes y adjuntos autorizados](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2) |
| RF-05.3 | [Auditar cambios de estado del pedido](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3) |
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

## Requisitos retirados

| IDs | Situación |
| --- | --- |
| RF-08.1 a RF-08.9 | Antecedente del modelo comercial, conservado para trazabilidad |

## Decisiones que condicionan el cierre

<a id="pd-01"></a>
### PD-01 Identidad y habilitación

Roles coexistentes, criterios de perfil completo y primera habilitación del maker. La prueba comienza con la primera habilitación del perfil maker.

<a id="pd-02"></a>
### PD-02 Archivos de entrada

Material, unidades, formatos, límites y finalidad de archivos.

<a id="pd-03"></a>
### PD-03 Estimación orientativa

Método, supuestos, límites y advertencias cuando se implemente.

<a id="pd-04"></a>
### PD-04 Búsqueda y ubicación

Radio, grupo, ampliación, orden, precisión pública y ubicación manual.

<a id="pd-05"></a>
### PD-05 Solicitudes, ofertas y vigencia comercial

Cambios tras envío, renovación y ofertas previas a un vencimiento de membresía. Los pedidos ya aceptados conservan su continuidad al vencer la membresía.

<a id="pd-06"></a>
### PD-06 Conversaciones y visibilidad

Participantes, chat previo al pedido y acceso administrativo autorizado.

<a id="pd-07"></a>
### PD-07 Revisión de piezas y reclamos

Correcciones, observaciones, escalamiento y cancelación del trabajo; sin devolución de fondos de impresiones por nuestra pasarela.

<a id="pd-08"></a>
### PD-08 Entrega y recepción

Encuentro personal, mecanismo de recepción y tratamiento de incidentes.

<a id="pd-09"></a>
### PD-09 Cobro y devolución del abono

Checkout Pro para nuestro servicio y renovación manual adoptados. Pendientes: configuración de cuentas, vencimientos de checkout y política de devoluciones de membresía. La cuenta de la plataforma recibe el importe de su propio servicio.

<a id="pd-10"></a>
### PD-10 Parámetros del plan y fundadores

Un plan, 30 días generales y 90 totales para fundadores como base configurable. Pendientes: importe, moneda, cupo, ventana, calendario mensual y beneficios asignados después del inicio.

<a id="pd-11"></a>
### PD-11 Servicios y canales

Mapas, archivos, avisos y transporte de actualizaciones en vivo.

<a id="pd-12"></a>
### PD-12 Datos y conservación

Permisos, retención, borrado, respaldos, términos y privacidad.

<a id="pd-13"></a>
### PD-13 Calidad y presupuesto

Objetivos medibles, límites de recursos, recuperación y costos de infraestructura.

<a id="pd-14"></a>
### PD-14 Soporte y administración

Permisos, acceso privado, moderación y acciones auditadas.

<a id="pd-15"></a>
### PD-15 Simulación

Entornos y permisos; los pagos simulados conceden acceso exclusivamente dentro del entorno de demostración.

## Revisión pendiente

Las prioridades y las metas numéricas de calidad siguen como propuestas. La planificación vincula cada requisito con sus casos de uso, elementos de diseño y casos de prueba. El seguimiento registra el estado y las evidencias de cada checkpoint.


<a id="perfil-de-medicion"></a>
## Perfil de medición

PERF-01 debe fijar entorno, volumen de datos, mezcla de operaciones, concurrencia, duración y herramientas antes de ejecutar. Las metas del catálogo RNF establecen los objetivos de rendimiento, disponibilidad y recuperación. Cada ejecución registra los resultados obtenidos bajo las condiciones acordadas. Referenciar la versión de cada RNF en el informe de ejecución y registrar las exclusiones autorizadas.
