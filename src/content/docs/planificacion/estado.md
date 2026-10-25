---
title: Estado de la documentación
description: Avance de los entregables académicos, documentos disponibles y tareas pendientes.
---

El portal reúne la presentación del producto, las funcionalidades, los requisitos, las specs, los casos de uso, los prototipos y el design system. También incluye diagramas de dominio, datos, arquitectura, componentes, estados y secuencias, junto con el modelo lógico, los contratos propuestos de API y el plan de integraciones. El avance se organiza según los checkpoints de la materia.

## Cómo leer los estados

El equipo selecciona y revisa cada documento antes de incorporarlo al portal. La publicación sigue el orden y el alcance acordados para cada checkpoint.

El checklist registra por separado la revisión del equipo, la publicación y la devolución del docente.

## Estado por entregable

| Elemento de la planificación académica | Situación en este portal |
| --- | --- |
| Requisitos funcionales | [68 fichas disponibles](/3daltoque-docs/analisis/requisitos/funcionales/); revisión del equipo pendiente de cierre |
| Requisitos no funcionales | [19 fichas disponibles](/3daltoque-docs/analisis/requisitos/no-funcionales/); metas y perfil de medición por acordar |
| Diagrama de casos de uso | [Diagrama de actores y CU-01 a CU-25](/3daltoque-docs/analisis/casos-de-uso/#diagrama-de-casos-de-uso) disponible, con imagen ampliable y fuente editable |
| Especificaciones de casos de uso | [25 fichas individuales con la plantilla de la materia](/3daltoque-docs/analisis/casos-de-uso/); flujos normales y alternativas numerados, con referencias a requisitos y pruebas |
| Prototipo de interfaz web | [60 vistas y composiciones inventariadas](/3daltoque-docs/specs/03-inventario-de-vistas-y-flujos/#web), con enlaces a Figma y [captura de referencia](/3daltoque-docs/specs/01-navegacion-y-pantallas/#vistas-de-referencia); completar estados alternativos y recorridos de extremo a extremo |
| Prototipo de interfaz mobile | [50 vistas y composiciones inventariadas](/3daltoque-docs/specs/03-inventario-de-vistas-y-flujos/#mobile), con enlaces a Figma y [capturas de solicitud y búsqueda](/3daltoque-docs/specs/01-navegacion-y-pantallas/#vistas-de-referencia); completar estados alternativos y recorridos de extremo a extremo |
| Diagrama de clases de dominio | [Diagrama disponible](/3daltoque-docs/modelado/clases-y-arquitectura/#dominio), con imagen ampliable y fuente editable; cerrar la revisión de relaciones |
| Diagrama entidad-relación y modelo lógico | [Diez vistas del DER](/3daltoque-docs/modelado/datos/) y [modelo lógico de 58 tablas y 548 columnas](/3daltoque-docs/modelado/modelo-logico/) disponibles |
| Definición de casos de prueba | [Plan de pruebas disponible](/3daltoque-docs/planificacion/pruebas/); 160 escenarios planificados con datos, acciones y resultados esperados |
| Documento de trazabilidad | [Matriz de cobertura de specs y componentes disponible](/3daltoque-docs/specs/02-matriz-de-cobertura/); relaciones con RF, CU, vistas, API, tablas y CP; evidencia de ejecución por incorporar |
| Diseño de arquitectura | [Arquitectura modular con puertos y adaptadores](/3daltoque-docs/diseno/arquitectura/) y [diseño de implementación](/3daltoque-docs/diseno/implementacion/) disponibles; cerrar hosting, workers y versiones concretas |
| Diagrama de clases de diseño | [14 servicios de aplicación con operaciones, puertos y colaboraciones](/3daltoque-docs/diseno/clases-de-diseno/) |
| Diseño de componentes | [Diagrama de componentes lógicos disponible](/3daltoque-docs/diseno/arquitectura/#componentes), con imagen ampliable y fuente editable |
| Interfaces entre sistemas e integraciones | [Plan de seis integraciones](/3daltoque-docs/diseno/integraciones/), [contratos propuestos de API y eventos](/3daltoque-docs/diseno/api-eventos/) y [convenciones compartidas](/3daltoque-docs/specs/00-contratos-y-convenciones/) disponibles; cerrar proveedores, contratos definitivos y OpenAPI |
| Manual de instalación | Pendiente de incorporación del manual de la aplicación |
| Plan de tareas post cursada | Pendiente de incorporación |
| Manual de usuario | Pendiente de incorporación |
| Material de presentación | Pendiente de incorporación |

## Criterio de incorporación

Cada documento debe identificar su versión o estado, mantener referencias consistentes y distinguir requisitos, propuestas y decisiones adoptadas. Los diagramas deben acompañarse de contexto y una fuente editable cuando corresponda.

Todo archivo publicado en el sitio queda accesible públicamente. El equipo selecciona material autorizado y conserva las credenciales, los datos privados y las notas internas en sus espacios de trabajo.

## Próximo avance documental

La [revisión funcional completa](/3daltoque-docs/planificacion/revision-funcional/) detalla la cobertura de las 25 funcionalidades, catálogo fijo, conversación, portfolio, reputación, historial y reportes. Los [parámetros operativos](/3daltoque-docs/planificacion/parametros/) reúnen los valores por acordar. El siguiente avance comprende consolidación de contratos en OpenAPI, implementación y ejecución de CP, junto con la revisión de los entregables restantes.
