# Contribuir a la documentación

## Fuente del contenido

Las páginas del portal viven en `src/content/docs/`. Los documentos de trabajo no se sincronizan automáticamente: se incorporan únicamente las versiones seleccionadas para mostrar el avance.

Este repositorio no debe contener credenciales, conversaciones privadas, datos personales de pruebas ni archivos del campus sin autorización para su publicación. Los archivos de un repositorio público son accesibles aunque no aparezcan en la navegación.

## Agregar una página

1. Crear un archivo `.md` dentro de `src/content/docs/`, en una carpeta acorde al tema.
2. Agregar el frontmatter con `title` y `description`.
3. Incorporar la página a `sidebar` en `astro.config.mjs`, utilizando su `slug` sin extensión.
4. Identificar la versión o estado documental y enlazar los elementos relacionados.
5. Proponer el cambio para revisión antes de integrarlo en `main`.

```md
---
title: Título del documento
description: Descripción breve del contenido.
---

## Objetivo

Contenido del documento.
```

## Enlaces y recursos

Los enlaces internos del sitio utilizan el prefijo `/3daltoque-docs/` y no terminan en `.md`. Por ejemplo: `/3daltoque-docs/proyecto/manifiesto/`.

El README del repositorio utiliza rutas relativas a los archivos para que también se puedan leer desde GitHub. No enlazar rutas absolutas de una computadora ni repositorios privados como si fueran material accesible al profesor.

Las fuentes tipográficas se distribuyen con las dependencias; el sitio no solicita fuentes a servicios externos. La marca geométrica es un recurso visual provisional del portal, no una identidad institucional aprobada.

## Criterios editoriales

- Escribir en español, con tildes y terminología consistente.
- Diferenciar lo planificado, diseñado, implementado y probado.
- No dar por aprobadas decisiones pendientes ni atribuir aprobación académica sin confirmación.
- No presentar pruebas propuestas como ejecutadas.
- Mantener la trazabilidad entre requisitos, casos de uso, modelos y pruebas cuando se incorporen.
- Conservar las fuentes editables de los diagramas y publicar una representación legible.

## Preparación de una entrega

La incorporación de un documento al portal y la entrega formal a la cátedra son eventos distintos. Cada entrega deberá identificar el conjunto de documentos y versiones efectivamente presentados, sin sustituir el contenido del proyecto por el checklist.
