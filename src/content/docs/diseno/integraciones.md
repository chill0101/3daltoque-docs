---
title: "Plan de integraciones"
---

# Plan de integraciones

Versión 3.2. Fecha: 7 de noviembre de 2026.

| ID | Integración | Alcance vigente | Pendientes |
| --- | --- | --- | --- |
| <a id="int-01"></a>INT-01 | Mercado Pago Checkout Pro | Cobro manual del abono del maker a favor de la plataforma | Cuenta, credenciales por entorno, retornos Web/Mobile y pruebas de cobro y devolución total autorizada |
| <a id="int-02"></a>INT-02 | Mapas y geocodificación | Ubicaciones, visualización y apoyo geográfico | Proveedor, límites contratados, licencias y configuración; la zona pública acordada es de 1 km |
| <a id="int-03"></a>INT-03 | Archivos y análisis | STL, imágenes y adjuntos privados con validación según finalidad | Proveedor, capacidad contratada, reglas de conservación aún abiertas y calibración de coeficientes de la fórmula acordada |
| <a id="int-04"></a>INT-04 | Notificaciones | Bandeja de la app y correo mediante Resend. Preferencias por tipo y canal | Dominio verificado, remitente, credenciales por entorno y política de otros avisos |
| <a id="int-05"></a>INT-05 | API común y recuperación de eventos | Web y Mobile consultan eventos autorizados cada 10 segundos con la pantalla activa. | Validación de integración en ambos clientes. |
| <a id="int-06"></a>INT-06 | Simulador de cobros | Demostración identificada del abono y su concesión de acceso | Entorno de demostración identificado y separado de producción. El backend exige permiso explícito por cuenta y el resultado simulado solo se aplica al abono de demostración. |
| <a id="int-07"></a>INT-07 | Better Auth | Credenciales, sesiones y enlaces de verificación y recuperación con Better Auth; Resend entrega los correos; FastAPI conserva autorización y habilitación comercial | Dominio y remitente de Resend, versión y adaptador de Better Auth, migraciones generadas, alojamiento y pruebas de integración según ADR-004 |

## Cobro propio de membresía

La compra conserva maker, plan, importe, moneda, duración, modo y entorno. El backend crea el checkout con la cuenta propia de la plataforma. La cuenta receptora cobra el abono propio; el pago de fabricación se acuerda directamente entre cliente y maker.

![Compra del abono](/3daltoque-docs/documentos/5b550fb39979-secuencia-pago.svg)

[Abrir SVG](/3daltoque-docs/documentos/5b550fb39979-secuencia-pago.svg) · [Fuente editable](/3daltoque-docs/documentos/2d10cc2b1ebd-secuencia-pago.mmd)

El retorno del navegador muestra el estado que informa el backend. El backend conserva la notificación autenticada y consulta el recurso del proveedor para verificar contexto y resultado, según RF-12.6 y RF-12.8.

Una compra pagada concede como máximo un período. Se detectan intentos inciertos y cargos adicionales y se aplica una política de recuperación sin repetir cobros a ciegas.

## Períodos gratis y programa de fundadores

Los períodos gratuitos se registran como concesiones internas de acceso desde la primera habilitación del perfil. Cada maker recibe un único beneficio inicial: 30 días generales o 90 días totales para fundadores, como valores configurables.

El fin de la prueba no crea un cobro. El maker debe iniciar una compra explícita; la plataforma no almacena datos de tarjeta ni un mandato de débito recurrente.

## Datos, fallas y permisos

Se verifican referencias, cuenta propia, entorno, importe y moneda; se minimiza el payload guardado y no se registran secretos. Cada operación externa tiene timeout, tratamiento de resultado incierto y política de reintento.

Los archivos requieren finalización controlada, integridad y acceso por recurso. Chat y estado de negocio se persisten antes de enviar avisos. Las tareas y el outbox son recuperables; su falla no revoca acuerdos ni extiende pruebas.

## Escenarios de prueba propuestos

Los [161 casos planificados](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) incluyen principal, alternativa por RF y recuperación entre módulos. Los CP-MEM conservan las pruebas de membresía, y los CP-X cubren autorización, catálogo, chat, publicación de medios, entrega y reportes. Cada ejecución incorporará versión, ambiente y evidencia.

## Fuentes

- [Checkout Pro](https://www.mercadopago.com.ar/developers/es/docs/checkout-pro-preferences/overview).
- [Webhooks](https://www.mercadopago.com.ar/developers/es/docs/your-integrations/notifications/webhooks).

El pago directo de la impresión queda documentado en las condiciones acordadas entre cliente y maker, conforme a ADR-002.

## Cobertura de catálogo, portfolio y comunicación

| Integración | Aplicación funcional | Condición de recuperación |
| --- | --- | --- |
| INT-01 | F11: checkout manual del abono de la plataforma. | Conservar compra y verificar notificación y recurso antes de conceder acceso. |
| INT-02 | F02/F03/F07/F08/F16: zona pública, compatibilidad geográfica y punto de encuentro. | Alternativa de ubicación textual y consulta por lista; cambios del encuentro requieren aceptación. |
| INT-03 | F04/F05/F06/F13/F15/F23/F25: STL, adjuntos privados y medios de presentación. | Verificar finalidad, integridad y pertenencia. Si el análisis geométrico agota su máximo inicial de 60 segundos, la solicitud con STL habilitado puede continuar a cotización por makers. La evidencia de revisión y las fotos del catálogo y del portfolio admiten JPEG y PNG de hasta 10 MiB por imagen. Los enlaces privados de descarga vencen a los cinco minutos. Solo se publican derivados autorizados. |
| INT-04 | F08/F09/F12/F13/F14/F15/F16/F22/F25: avisos duraderos sobre hechos conservados. | Outbox y deduplicación. Las versiones publicadas de ofertas personalizadas tienen app y correo activos por defecto para el cliente titular. Los recordatorios de revisión se programan a las 24 y 48 horas desde su presentación. Si la revisión sigue vigente y pendiente, cada plazo genera el aviso obligatorio en la app y prepara el correo opcional si está habilitado. El correo está activo por defecto. Una falla del correo conserva el historial y los avisos visibles. [Contrato del adaptador](/3daltoque-docs/diseno/contratos-operativos/#int-04-notificaciones). |
| INT-05 | F01 a F25: API común, consultas y actualización autorizada de Web y Mobile. | Reautorizar por recurso, recuperar cursor y deduplicar; el chat se vincula al pedido confirmado. |
| INT-06 | F11 y administración. Simulación de cobros del abono en un entorno de demostración identificado y separado de producción. | Modo identificado y separado de las concesiones comerciales reales. |
| INT-07 | F01/F03/F11: identidad, sesión y correo verificado del maker. | Conservar el vínculo de perfil, revalidar sesión y permitir retomar la verificación; una falla de autenticación conserva los recursos de negocio. |

Los productos de precio fijo crean pedidos directos mediante la API. Portfolio y reputación utilizan persistencia, archivos autorizados y lecturas públicas controladas. Los valores y credenciales reales de cada servicio quedan en [el registro operativo](/3daltoque-docs/planificacion/parametros/).

## Contratos de ejecución

Los [contratos operativos](/3daltoque-docs/diseno/contratos-operativos/) definen entradas, salidas, identidad, timeouts, deduplicación y recuperación por integración. [OpenAPI 3.1](/3daltoque-docs/documentos/e37598f41824-openapi.json) conserva el contrato intercambiable. [Seguridad y operación](/3daltoque-docs/diseno/seguridad/) detalla las fronteras y controles.
