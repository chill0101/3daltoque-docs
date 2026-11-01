---
title: "Roadmap de 3DAltoque"
---

# Roadmap de 3DAltoque

Última actualización: **1 de noviembre de 2026**. Cada etapa se cierra con su evidencia y la fecha acordada por el equipo.

## Etapas y criterios de avance

| Etapa | Definición documentada | Trabajo pendiente para cerrar la etapa |
| --- | --- | --- |
| M0. Producto y organización | Alcance, repositorios y modelo de membresía prepaga. | Acordar precio, moneda, cupo y convocatoria de fundadores; asignar responsables y completar datos académicos. |
| M1. Análisis | 68 RF, 19 RNF, 25 CU, reglas, trazabilidad y referencias visuales Web/Mobile. | Resolver los parámetros de negocio abiertos y registrar la evaluación de los recorridos con usuarios. |
| M2. Diseño y base técnica | Arquitectura modular FastAPI, clases, DER, modelo lógico, seis integraciones y OpenAPI con 77 operaciones. | Seleccionar ORM y proveedores de hosting, mapas, geocodificación, almacenamiento y avisos; crear y probar migraciones al implementar. |
| M3. Identidad y acceso comercial | Specs, contratos y pruebas de perfil, habilitación, prueba general y fundadores. | Implementar los flujos y comprobar cupo concurrente, vigencias y permisos para trabajos nuevos y existentes. |
| M4. Abono propio | Checkout Pro, webhooks, conciliación, renovación manual e idempotencia especificados. | Configurar la cuenta de prueba; implementar y comprobar cobro, notificaciones, concesión de acceso y devolución; comprobar el modo de simulación de PD-15. |
| M5. Marketplace | Solicitudes, matching, ofertas, catálogo y pedido directo especificados y trazados. | Implementar el recorrido integrado y ejecutar las pruebas de aceptación concurrente y condiciones vigentes. |
| M6. Producción y recepción | Cola, chat, evidencia, revisión, entrega y recepción especificados. | Implementar y comprobar aprobación expresa, acuerdos de entrega y continuidad del pedido con membresía vencida. |
| M7. Calidad y entrega | Plan de pruebas, PERF-01, seguridad, manuales, diez diapositivas y guion de demo. | Ejecutar CP/PNF, registrar resultados, comprobar instalación, actualizar capturas del producto, generar APK y grabar la demo. |

Las etapas pueden solaparse. La integración del abono se explora desde el análisis para validar cuentas, credenciales, notificaciones y concesión de períodos antes del recorrido integrado.

## Decisiones y datos por completar

- **Comerciales:** precio y moneda del plan; cupo, ventana de convocatoria y vigencia del beneficio fundador; regla de calendario, cuenta de cobro y tratamiento de devoluciones. Los 30/90 días conservan su carácter de valores iniciales configurables en PD-09 y PD-10.
- **Operación del negocio:** método y coeficientes de estimación, radio y precisión de búsqueda, plazos de recordatorio y escalamiento, reprogramaciones, retención de datos y criterios de moderación. Cada acuerdo se registra con valor, responsable, fecha y fundamento en su PD.
- **Implementación:** ORM y versiones, hosting y proveedores definitivos; credenciales por entorno y capacidad del piloto. Los contratos de la API, sesiones, recuperación de eventos y perfil de calidad ya tienen una definición de referencia.
- **Organización académica:** responsables nominales, dedicación semanal, fechas de parciales y simulacro, docente y condiciones de entrega.

El [registro de parámetros](/3daltoque-docs/planificacion/parametros/) detalla PD-01 a PD-15 y las referencias operativas disponibles.

## Seguimiento

Cada hito requiere responsable, fecha acordada, documento/versiones y evidencia antes de cerrarse. El seguimiento registra por separado diseño, implementación y ejecución de pruebas. Marzo de 2027 es el horizonte informado por el equipo; parciales, simulacro y condiciones de diciembre dependen de confirmación de cátedra.

## Cobertura funcional consolidada

La [revisión funcional](/3daltoque-docs/planificacion/revision-funcional/) reúne 25 funcionalidades y 25 CU, incluido catálogo con pedido directo y chat desde el pedido confirmado. La [matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/) enlaza RF/RNF, funcionalidades, CU, vistas, contratos, datos y CP. El contrato OpenAPI y su validación documental forman parte del paquete publicado.

El control documental verificó referencias y cobertura, 28 fichas de prueba detalladas y ocho PNF. La ejecución sobre la aplicación agregará versión, entorno, resultados y evidencia a los 160 escenarios planificados. Las referencias visuales comprenden 110 composiciones de Figma y doce vistas HTML complementarias; la evaluación con usuarios requiere su registro de resultados.

## Paquete documental disponible

[Manuales](/3daltoque-docs/manuales/), [WBS y Gantt](/3daltoque-docs/planificacion/cronograma/), [plan post cursada](/3daltoque-docs/planificacion/post-cursada/), [prototipos complementarios](/3daltoque-docs/specs/prototipo-catalogo-y-chat/), [PERF-01](/3daltoque-docs/planificacion/perfil-perf-01/), [contratos operativos y OpenAPI](/3daltoque-docs/diseno/contratos-operativos/) y [presentación](/3daltoque-docs/presentacion/material/).
