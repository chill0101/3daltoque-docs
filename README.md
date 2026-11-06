# 3DAltoque · Documentación

Una plataforma para conectar a quienes necesitan una pieza impresa en 3D con makers cercanos y compatibles con su solicitud.

El portal reúne el alcance, los requisitos, los modelos, los contratos, los prototipos, las pruebas y los manuales del proyecto.

## Contenido

- [Presentación del proyecto](src/content/docs/proyecto/presentacion.md).
- [Manifiesto de la aplicación](src/content/docs/proyecto/manifiesto.md).
- [Base técnica](src/content/docs/proyecto/base-tecnica.md).
- [Repositorios y equipo](src/content/docs/proyecto/repositorios.md).
- [Roadmap](src/content/docs/planificacion/roadmap.md).
- [Estado de la documentación](src/content/docs/planificacion/estado.md).
- [Manuales](src/content/docs/manuales/index.md).
- [Prototipos de catálogo y conversaciones](src/content/docs/specs/prototipo-catalogo-y-chat.md).
- [Contratos operativos y OpenAPI](src/content/docs/diseno/contratos-operativos.md).
- [Plan de trabajo y Gantt](src/content/docs/planificacion/cronograma.md).
- [Material de presentación](src/content/docs/presentacion/material.md).

El catálogo conserva 25 funcionalidades, 68 RF, 19 RNF, 25 casos de uso, 58 tablas y 161 escenarios de prueba. Los manuales, el cronograma, el plan post cursada y la presentación completan los puntos documentales de la materia.

## Repositorios del proyecto

| Repositorio | Responsabilidad |
| --- | --- |
| [3daltoque-docs](https://github.com/chill0101/3daltoque-docs) | Documentación y presentación |
| [3daltoque-backend](https://github.com/chill0101/3daltoque-backend) | API y reglas de negocio con FastAPI y Python |
| [3daltoque-frontend](https://github.com/chill0101/3daltoque-frontend) | Interfaz web; acceso privado informado |
| [3daltoque-mobile](https://github.com/chill0101/3daltoque-mobile) | Aplicación React Native para cliente y maker |

## Desarrollo del portal

El sitio utiliza Astro y Starlight. Requiere **Node.js 24** y **npm 11 o superior**. Las versiones directas están fijadas y las dependencias resueltas se conservan en `package-lock.json`.

```sh
npm ci
npm run dev
```

La ruta local es `http://localhost:4321/3daltoque-docs/`. Si el puerto está ocupado, Astro informará el utilizado.

Para generar y previsualizar la versión estática:

```sh
npm run build
npm run preview
```

El buscador se genera durante el build. Para revisar la búsqueda, utilizá la previsualización de la versión generada.

## Publicación en GitHub Pages

El portal del proyecto se consulta en [chill0101.github.io/3daltoque-docs/](https://chill0101.github.io/3daltoque-docs/).

1. Seleccionar **GitHub Actions** en **Settings → Pages → Build and deployment → Source** del repositorio.
2. Revisar e integrar los cambios en `main`.
3. El workflow de `.github/workflows/deploy.yml` instalará las dependencias, generará el sitio y lo desplegará. También admite ejecución manual desde `main`.

La primera ejecución necesita que GitHub Pages esté habilitado y que las políticas del repositorio permitan las acciones utilizadas. El workflow publica desde main con los permisos de GitHub Actions.

Las rutas `site` y `base` están configuradas en `astro.config.mjs`. Si cambia el nombre del repositorio o se utiliza un dominio propio, habrá que adaptar también los enlaces internos con prefijo.

## Organización de archivos

| Ruta | Contenido |
| --- | --- |
| `src/content/docs/` | Páginas Markdown del portal |
| `src/content.config.ts` | Colección de documentos y esquema de Starlight |
| `src/styles/custom.css` | Identidad visual y ajustes responsive |
| `src/assets/` y `public/` | Recursos propios del sitio |
| `astro.config.mjs` | Navegación, idioma y rutas de publicación |
| `.github/workflows/deploy.yml` | Generación y despliegue con GitHub Actions |

## Equipo y entrega

Lucas Bernardez, María del Rosario Cariaga y Lucas Ruiz. Horizonte de entrega final informado: **marzo de 2027**.

Las contribuciones y el criterio de publicación se describen en [CONTRIBUTING.md](CONTRIBUTING.md). La preparación del portal sigue la [guía de Starlight](https://starlight.astro.build/manual-setup/) y la [guía oficial de Astro para GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).
