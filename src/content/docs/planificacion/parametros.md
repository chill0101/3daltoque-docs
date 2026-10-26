---
title: "Decisiones y parámetros de implementación"
---

# Decisiones vigentes y parámetros de implementación

Actualización: 25 de octubre de 2026.

## Base funcional

[ADR-002](/3daltoque-docs/decisiones/modelo-comercial/) conserva la membresía prepaga. [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/) incorpora el pedido directo de catálogo y confirma el chat desde el pedido contratado. Los identificadores PD mantienen su tema.

<a id="pd-01"></a>
### PD-01 Identidad y habilitación

La identidad conserva roles públicos cliente/maker; administración se asigna por un procedimiento autorizado. Habilitar maker exige contacto, zona y capacidad productiva válidos y concede una única prueba.

Parámetros de implementación: Política de credenciales, verificación de contacto y plazos de sesión.

<a id="pd-02"></a>
### PD-02 Archivos y parámetros

La solicitud personalizada utiliza STL y unidad declarada; los archivos se habilitan por finalidad e integridad. El catálogo toma configuración de su versión publicada.

Parámetros de implementación: Formatos, cuotas, límites de tamaño y presupuestos de análisis.

<a id="pd-03"></a>
### PD-03 Estimación orientativa

El sistema calcula una referencia automática con método y configuración identificados; entradas insuficientes producen indisponibilidad explicada y permiten cotización de makers.

Parámetros de implementación: Método técnico y coeficientes de cálculo versionados antes de habilitar su resultado monetario.

<a id="pd-04"></a>
### PD-04 Búsqueda y ubicación

Se filtra por capacidad, material y acceso; luego ubicación y disponibilidad. Los grupos son limitados y la zona pública protege el domicilio. La cola utiliza confirmación e identidad como orden estable.

Parámetros de implementación: Radio, tamaño de grupo, ampliación y precisión publicada.

<a id="pd-05"></a>
### PD-05 Solicitudes, ofertas y catálogo

Las condiciones conservan versiones; el cliente propone cambios y el maker publica otra versión al aceptarlos. Un pedido directo confirma precio publicado. El acceso vencido impide acuerdos nuevos y conserva los existentes.

Parámetros de implementación: Vigencias y límites configurables de edición antes de contratar.

<a id="pd-06"></a>
### PD-06 Conversaciones y visibilidad

La conversación se habilita desde el pedido confirmado. Cliente y maker participan; una consulta administrativa exige capacidad, motivo y auditoría.

Parámetros de implementación: Límites de mensajes y adjuntos, conservación y mecanismo de actualización.

<a id="pd-07"></a>
### PD-07 Revisión y soporte

El cliente decide sobre la revisión vigente; las observaciones se conservan y las correcciones crean una revisión nueva. El silencio mantiene pendiente la aprobación.

Parámetros de implementación: Plazos de recordatorio, escalamiento e intervenciones sensibles permitidas en cada estado.

<a id="pd-08"></a>
### PD-08 Entrega y recepción

Cliente y maker acuerdan punto y horario; un cambio requiere otra aceptación. La recepción se completa con confirmación autenticada del cliente sobre revisión y acuerdo vigentes.

Parámetros de implementación: Límites de reprogramación y tratamiento operativo de incidentes.

<a id="pd-09"></a>
### PD-09 Cobro y devolución del abono

Checkout Pro cobra el servicio de membresía con la cuenta de la plataforma. La verificación precede a la concesión de acceso. Las devoluciones del abono son autorizadas y conciliadas.

Parámetros de implementación: Cuenta por entorno y política concreta de devolución y efecto sobre períodos futuros.

<a id="pd-10"></a>
### PD-10 Plan y fundadores

Un plan prepago de renovación manual. La primera habilitación concede 30 días generales o 90 totales para fundadores como valores configurables. La asignación fundadora inicial conserva cupo y beneficio único.

Parámetros de implementación: Precio, moneda, cupo, ventana, regla de calendario y tratamiento de asignaciones posteriores al beneficio inicial.

<a id="pd-11"></a>
### PD-11 Servicios y canales

Web y React Native comparten FastAPI. Mapas, archivos, avisos y recuperación de eventos utilizan puertos; los proveedores se seleccionan según sus contratos.

Parámetros de implementación: Hosting, proveedores, autenticación y transporte de actualizaciones.

<a id="pd-12"></a>
### PD-12 Privacidad y conservación

Los recursos se autorizan por contexto. Catálogo y portfolio muestran derivados aprobados; los originales y datos privados permanecen restringidos. Las referencias históricas se conservan.

Parámetros de implementación: Períodos de retención y anonimización, respaldo y condiciones de uso.

<a id="pd-13"></a>
### PD-13 Calidad y recursos

Los RNF utilizan perfil de carga, pruebas de permisos, concurrencia, accesibilidad y recuperación. Los límites se validan en backend.

Parámetros de implementación: Valores de presupuesto, objetivos medibles y capacidad del piloto.

<a id="pd-14"></a>
### PD-14 Administración y reputación

Las capacidades administrativas separan soporte, moderación y reportes. La valoración exige pedido completado, contraparte y unicidad; criterios y escala se conservan por configuración.

Parámetros de implementación: Escala y criterios publicados y límites de contenido y moderación.

<a id="pd-15"></a>
### PD-15 Simulación

Los cobros simulados utilizan modo y entorno identificados y separados de las operaciones productivas.

Parámetros de implementación: Permisos y cuentas de demostración por entorno.

Cada parámetro conserva valor, fecha, responsable, fundamento y versión. Las configuraciones se comprueban antes de habilitar la operación que las requiere.
