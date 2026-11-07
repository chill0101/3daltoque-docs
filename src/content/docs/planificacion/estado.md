---
title: "Estado de la documentación"
---

# Estado de la documentación

La documentación reúne el producto, sus reglas, modelos, contratos, pruebas, manuales y planificación. Los enlaces siguen los puntos de la checklist académica.

## Entregables

| Punto | Material documental disponible | Verificación sobre el producto o acuerdo pendiente |
| --- | --- | --- |
| [Documento de funcionalidades](/3daltoque-docs/proyecto/funcionalidades/) | 25 funcionalidades y sus specs, actores, canales y referencias. | Implementar y verificar cada recorrido. |
| [1. Requisitos funcionales](/3daltoque-docs/analisis/requisitos/funcionales/) | 68 fichas y criterios de éxito. | Evidencia de ejecución por release. |
| [2. Requisitos no funcionales](/3daltoque-docs/analisis/requisitos/no-funcionales/) | 19 fichas, justificación arquitectónica y perfil PERF-01. | Ejecutar los ensayos con el entorno identificado. |
| [3. Diagrama de casos de uso](/3daltoque-docs/analisis/casos-de-uso/) | 25 CU y actores; relaciones y punto EP-03; SVG y fuente. | Cotejar cambios futuros con las fichas. |
| [4. Especificaciones de CU](/3daltoque-docs/analisis/casos-de-uso/) | 25 fichas con plantilla de la materia y flujos numerados. | Validar recorridos sobre el producto. |
| [5. Prototipo Web](/3daltoque-docs/specs/recorridos-y-estados/) | 60 composiciones Figma y seis vistas HTML con recorridos y estados. | Validar los recorridos y estados con usuarios. |
| [6. Prototipo Mobile](/3daltoque-docs/specs/recorridos-y-estados/) | 50 composiciones Figma y seis vistas HTML con paridad y recuperación. | Validar los recorridos y estados con usuarios. |
| [7. Clases de dominio](/3daltoque-docs/modelado/clases-y-arquitectura/) | 39 clases, relaciones y cardinalidades con fuente editable. | Cotejar con implementación y evolución de reglas. |
| [8. DER y modelo lógico](/3daltoque-docs/modelado/modelo-logico/) | 58 tablas, 552 columnas y diez vistas DER. | Aplicar y verificar migraciones del release. |
| [9. Definición de pruebas](/3daltoque-docs/planificacion/pruebas/) | 161 escenarios, 29 fichas detalladas, ocho PNF y fixtures relacionados. | Ejecutar y registrar resultados. |
| [10. Trazabilidad](/3daltoque-docs/specs/02-matriz-de-cobertura/) | Relaciones RF/RNF, F, CU, vista, contrato, datos y CP. | Incorporar resultados y evidencia de ejecución. |
| [11. Arquitectura](/3daltoque-docs/diseno/arquitectura/) | Monolito modular, puertos/adaptadores y mecanismos para RNF. | Fijar versiones y proveedores en el release. |
| [12. Clases de diseño](/3daltoque-docs/diseno/clases-de-diseno/) | 14 servicios, operaciones, puertos y colaboraciones. | Cotejar dependencias con el código. |
| [13. Componentes](/3daltoque-docs/diseno/arquitectura/#componentes) | Módulos, responsabilidades e interfaces. | Verificar despliegue e integración. |
| [14. Interfaces entre sistemas](/3daltoque-docs/diseno/contratos-operativos/) | Siete integraciones y OpenAPI con 83 operaciones funcionales y dos técnicas. | Validar implementación y sandbox de proveedores. |
| 15. Manual de instalación | Pendiente de elaboración para la aplicación 3DAltoque. | Documentar dependencias, configuración, migraciones e instalación de servicios, Web y Mobile, con comandos y resultados verificados sobre el producto. |
| [16. Plan post cursada](/3daltoque-docs/planificacion/post-cursada/) | Doce tareas priorizadas, dependencias, ventanas y criterios de cierre. | Asignar responsables nominales y ajustar calendario oficial. |
| Manual de usuario | Pendiente de elaboración para la aplicación 3DAltoque Web y Mobile. | Documentar los recorridos de cliente, maker y administración sobre el producto, con capturas e instrucciones verificadas. |
| [Material de presentación](/3daltoque-docs/presentacion/material/) | Diez diapositivas navegables, notas y guion de demo. | Grabar funcionamiento y ajustar duración al formato de cátedra. |

## Control documental realizado

La revisión comprobó cobertura y referencias de RF/RNF, funcionalidades, CU, vistas, contratos, modelo de datos y CP; los campos de las 29 fichas detalladas y ocho PNF; el contrato OpenAPI; y la compilación y enlaces del portal. Los resultados de ejecución de la aplicación se incorporan por release con versión, entorno, fecha y evidencia.

## Decisiones y datos abiertos

| Tema | Acuerdo o dato que falta | Registro |
| --- | --- | --- |
| Modelo comercial | Cuenta receptora y configuración de cobro por entorno. | [PD-09 y PD-10](/3daltoque-docs/planificacion/parametros/#pd-09) |
| Reglas operativas | Calibración de la estimación con cinco piezas, criterios de valoración, políticas de conservación pendientes y tratamiento de otros incidentes de revisión. | [PD-01 a PD-15](/3daltoque-docs/planificacion/parametros/) |
| Notificaciones | Clasificación de los canales por tipo de aviso y configuración de Resend. | [Preferencias de avisos](/3daltoque-docs/specs/f14-notificaciones/#preferencias-por-tipo-de-aviso) |
| Herramientas y proveedores | Versiones y ORM, alojamiento de API, worker y autenticación, proveedor de PostgreSQL con PostGIS, mapas y geocodificación, almacenamiento privado y capacidad del piloto. | [Base técnica](/3daltoque-docs/proyecto/base-tecnica/) y [PD-11](/3daltoque-docs/planificacion/parametros/#pd-11) |
| Organización | Responsables nominales y dedicación semanal. | [Ficha del proyecto](/3daltoque-docs/planificacion/ficha-proyecto/) |
| Cátedra | Fechas de parciales y simulacro, docente, condiciones de diciembre y fecha final. | [Cronograma](/3daltoque-docs/planificacion/cronograma/) |

La [hoja de ruta](/3daltoque-docs/planificacion/roadmap/) relaciona estos acuerdos con la implementación y las verificaciones de cada etapa.

## Planificación y seguimiento

La [ficha del proyecto](/3daltoque-docs/planificacion/ficha-proyecto/), el [cronograma y WBS](/3daltoque-docs/planificacion/cronograma/), el [análisis de contexto y viabilidad](/3daltoque-docs/proyecto/investigacion-y-viabilidad/) y el [plan de calidad y riesgos](/3daltoque-docs/planificacion/calidad-y-riesgos/) organizan el trabajo y sus criterios de cierre. Los responsables nominales, fechas de instancias y condiciones de entrega se registran con los acuerdos del equipo y de la cátedra.

[Prototipos complementarios](/3daltoque-docs/specs/prototipo-catalogo-y-chat/): doce vistas Web/Mobile de catálogo y conversaciones, con capturas y navegación.
