---
title: "Plan post cursada"
---

# Plan de tareas post cursada

Versión 1.0. Fecha: 1 de noviembre de 2026.

El plan comienza al cerrar la cursada y conserva como referencia la entrega objetivo de marzo de 2027. Las semanas son relativas a ese cierre y permiten ajustar el calendario a las fechas oficiales. Web y React Native forman parte del alcance vigente.

## Criterio de prioridad

P0 reúne integridad, acceso y reproducción necesarios para operar. P1 completa recorridos comprometidos y evidencia de entrega. P2 comprende mejoras que requieren datos del piloto. La función responsable coordina la tarea y el equipo registra su asignación nominal y disponibilidad en la planificación semanal.

| ID | Prioridad | Tarea y resultado | Dependencia | Ventana relativa | Función responsable | Criterio de cierre |
| --- | --- | --- | --- | --- | --- | --- |
| PC01 | P0 | Consolidar release de backend, Web y Mobile y configuración reproducible. | Código base y decisiones de infraestructura. | Semanas 1–2 | Integración/operación | Arranque limpio y registro de instalación. |
| PC02 | P0 | Verificar permisos, privacidad y transacciones críticas. | PC01 y migraciones. | Semanas 2–3 | Backend/datos y QA | CP de acceso, concurrencia y deduplicación aprobados. |
| PC03 | P1 | Completar solicitud, búsqueda, ofertas y contratación personalizada. | PC01; archivos y capacidades. | Semanas 2–4 | Producto/backend/interfaz | Recorrido cliente–maker completo en ambos canales. Para habilitar la estimación del piloto, calibrar cinco piezas con cotizaciones de makers y registrar la configuración resultante según PD-03. |
| PC04 | P1 | Completar catálogo fijo, pedido directo y portfolio autorizado. | PC02; versionado de producto y archivos. | Semanas 3–5 | Producto/backend/interfaz | Pedido conserva publicación y reintentos recuperan el mismo acuerdo. |
| PC05 | P1 | Integrar abono, retorno Web/Mobile, verificación y conciliación. | Cuenta sandbox, PC02 y plan versionado. | Semanas 3–5 | Integraciones y QA | Pago confirmado concede un período; simulación separada. |
| PC06 | P1 | Cerrar chat, producción, revisión, encuentro y recepción. | Pedidos confirmados de PC03/PC04. | Semanas 4–6 | Backend/Web/Mobile | Misma regla y estado en ambos clientes; aprobación expresa y recepción autenticada. |
| PC07 | P1 | Implementar estados y doce vistas del inventario siguiendo las referencias visuales. | Contratos de PC03 a PC06. | Semanas 4–6 | Diseño/interfaz | Navegación, vacío, carga, error y recuperación revisados por flujo. |
| PC08 | P0 | Ejecutar restauración, límites y degradación de proveedores. | PC01, almacenamiento y jobs. | Semanas 5–6 | Operación y QA | PNF-003, PNF-005, PNF-007 y PNF-008 con evidencia. |
| PC09 | P1 | Actualizar manuales con comandos del release y capturas de ejecución. | PC03 a PC08. | Semanas 6–7 | Documentación y QA | Instalación reproducible y recorridos por rol cotejados. |
| PC10 | P1 | Preparar entrega final, APK, accesos, demo y respaldo documental. | PC09 y condiciones de cátedra. | Semanas 7–8 | Coordinación/integración | Links comprobados, versión identificada y ensayo de presentación. |
| PC11 | P2 | Evaluar conversión de prueba, disposición a pagar y costo por maker. | Piloto e instrumento de investigación. | Después del piloto | Validación de producto | Informe con muestra, período, consumo y conclusiones justificadas. |
| PC12 | P2 | Ajustar matching, reputación y soporte con datos de uso. | PC11 y métricas autorizadas. | Iteración posterior | Producto/backend | Hipótesis, experimento y efecto medido. |

## Extensiones sujetas a evaluación

Renovación automática, planes adicionales, envíos e intermediación de pagos de impresión requieren evidencia de necesidad y una revisión propia de alcance, costos, operación y condiciones aplicables. Cada extensión registra su decisión y sus requisitos antes de incorporarse.

## Seguimiento y replanificación

Cada semana se revisan tareas terminadas, evidencia, dependencias y capacidad disponible. Una dependencia externa bloqueada conserva su motivo y alternativa. El cierre de un documento se sigue separado de la ejecución del software al que refiere. Los riesgos y el control de cambios se registran en [el plan de calidad](/3daltoque-docs/planificacion/calidad-y-riesgos/).
