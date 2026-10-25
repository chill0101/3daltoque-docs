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
| Documento de funcionalidades (Planificación de proyecto) | [Catálogo de 24 funcionalidades F01–F24 y prioridad de entrega](/3daltoque-docs/analisis/funcionalidades/) disponible |
| Requisitos funcionales | [54 fichas disponibles](/3daltoque-docs/analisis/requisitos/funcionales/); revisión del equipo pendiente de cierre |
| Requisitos no funcionales | [19 fichas disponibles](/3daltoque-docs/analisis/requisitos/no-funcionales/); metas y perfil de medición por acordar |
| Diagrama de casos de uso | [Diagrama de actores, CU-01 a CU-13 y relaciones include/extend](/3daltoque-docs/analisis/casos-de-uso/#diagrama-de-casos-de-uso) disponible, con imagen ampliable, fuente editable y 4 vistas modulares |
| Especificaciones de casos de uso | [13 fichas principales y 6 subcasos (`CU-INC-01..03`, `CU-EXT-01..03`) disponibles](/3daltoque-docs/analisis/casos-de-uso/) con flujos normales paso a paso (`Nro | Ejecutor | Paso`), flujos alternativos y criterios de aceptación |
| Prototipo de interfaz web | [60 vistas y composiciones inventariadas](/3daltoque-docs/specs/03-inventario-de-vistas-y-flujos/#web), con enlaces a Figma y [captura de referencia](/3daltoque-docs/specs/01-navegacion-y-pantallas/#vistas-de-referencia); completar estados alternativos y recorridos de extremo a extremo |
| Prototipo de interfaz mobile | [50 vistas y composiciones inventariadas](/3daltoque-docs/specs/03-inventario-de-vistas-y-flujos/#mobile), con enlaces a Figma y [capturas de solicitud y búsqueda](/3daltoque-docs/specs/01-navegacion-y-pantallas/#vistas-de-referencia); completar estados alternativos y recorridos de extremo a extremo |
| Diagrama de clases de dominio | [Diagrama disponible](/3daltoque-docs/modelado/clases-y-arquitectura/#dominio), con imagen ampliable y fuente editable; cerrar la revisión de relaciones |
| Diagrama entidad-relación y modelo lógico | [Ocho vistas del DER](/3daltoque-docs/modelado/datos/) y [modelo lógico de 50 tablas y 460 columnas](/3daltoque-docs/modelado/modelo-logico/) disponibles |
| Definición de casos de prueba | [Plan de pruebas disponible](/3daltoque-docs/planificacion/pruebas/); completar e incorporar las fichas detalladas de casos de prueba |
| Documento de trazabilidad | [Matriz de cobertura de specs y componentes disponible](/3daltoque-docs/specs/02-matriz-de-cobertura/); consolidar la relación con casos de prueba y evidencias |
| Diseño de arquitectura | [Arquitectura modular con puertos y adaptadores](/3daltoque-docs/diseno/arquitectura/) y [diseño de implementación](/3daltoque-docs/diseno/implementacion/) disponibles; cerrar hosting, workers y versiones concretas |
| Diagrama de clases de diseño | Pendiente de completar las clases, sus operaciones y colaboraciones; [vista de responsabilidades y dependencias disponible](/3daltoque-docs/modelado/clases-y-arquitectura/#clases-de-diseño) |
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

Los próximos avances comprenden el diagrama detallado de clases de diseño, las fichas de casos de prueba, la trazabilidad hasta evidencias, el cierre de alternativas de los prototipos y las definiciones pendientes de implementación e integración. También resta incorporar los manuales, el plan de tareas post cursada y el material de presentación. Cada documento se prepara y revisa en `docs-hidden` y se reproduce completo en el portal, según su mapa de origen y destino.
