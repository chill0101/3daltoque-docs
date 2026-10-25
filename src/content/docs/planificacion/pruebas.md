---
title: "Pruebas, seguridad y operación"
---

# Pruebas, seguridad y operación

Plan de evaluación funcional, de seguridad y de operación. [Catálogo y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/).

## Funcionalidad

Cubrir publicación, matching, ofertas versionadas, doble aceptación, producción, revisión con evidencia y entrega. Agregar prueba general y fundadora, cupo concurrente, pago propio del abono, renovación manual, webhook duplicado y vencimiento con pedidos activos. La cobertura comercial sigue los requisitos RF-12.1 a RF-12.15 y la decisión ADR-002.

## Seguridad

Autorización por recurso y rol; archivos privados y enlaces temporales; límites de carga, tipo y análisis del STL; claves del proveedor solo en backend; verificar firma y contexto de eventos según la integración elegida y consultar el recurso al proveedor. El backend determina el importe del plan y los permisos a partir de datos autorizados. Minimizar datos personales y no almacenar información de tarjetas. Auditar altas de fundadores y cambios de plan.

## Operación

Persistir notificación antes de confirmar recepción; deduplicar, conciliar pagos inciertos y aplicar el período en una transacción idempotente. No registrar secretos o datos completos del medio de pago. Alertas para discrepancias y fallas de notificaciones; procesos periódicos y reintentos dependen de hosting acordado. La concesión de acceso exige un resultado de pago verificado por el backend.

## Aceptación y contingencia

Usar cuentas y escenarios de prueba del proveedor. La simulación académica se presenta como simulada, aislada de acceso real y conciliación productiva. Probar copia/restauración y concurrencia cuando haya implementación y entorno acordados. El catálogo de pruebas registra los casos previstos y su estado de ejecución.

## Cobertura funcional de la revisión del 25 de octubre

El [plan de pruebas](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) define 160 CP planificados, datos y resultados esperados. Cubre los 68 RF y los 25 CU con pruebas principales, alternativas e integración. La ejecución requiere la implementación y un entorno identificable.

| Superficie | Control y escenario |
| --- | --- |
| Catálogo y pedido directo | Precio del servidor, versión publicada, acceso comercial, cantidad, bloqueo de pedido propio e idempotencia; conservar condiciones y archivo de fabricación. |
| Chat | Participante del pedido confirmado, adjunto autorizado, reintento sin duplicación y recuperación después del vencimiento comercial. |
| Portfolio y producto público | Derivados autorizados; impedir exposición de STL, evidencia privada o archivos de otro titular. |
| Reputación | Pedido entregado, contraparte válida, autor único por pedido, escala versionada y moderación auditada. |
| Historial y reportes | Pertenencia, permiso administrativo, filtros, límites temporales y agregados sin datos privados innecesarios. |
| Encuentro y recepción | Aceptar la versión de coordinación y confirmar recepción con la identidad del cliente. |

## Registro de ejecución

Una ejecución de CP debe conservar identificador, versión del sistema y de fixtures, entorno, fecha, actor de prueba, resultado y evidencia. Las relaciones documentales se controlan con `scripts/revisar-cobertura-funcional.mjs`.
