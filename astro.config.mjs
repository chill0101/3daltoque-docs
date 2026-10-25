import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://chill0101.github.io',
  base: '/3daltoque-docs',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    starlight({
      title: '3DAltoque',
      description: 'Documentación del proyecto: impresión 3D, makers cercanos y acuerdos claros.',
      logo: { src: './src/assets/marca.svg', alt: '', replacesTitle: false },
      favicon: '/favicon.svg',
      locales: { root: { label: 'Español', lang: 'es' } },
      social: [
        {
          icon: 'github',
          label: 'Repositorio de documentación',
          href: 'https://github.com/chill0101/3daltoque-docs',
        },
      ],
      customCss: [
        '@fontsource-variable/manrope',
        '@fontsource-variable/space-grotesk',
        './src/styles/custom.css',
      ],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      sidebar: [
        {
          "label": "Inicio",
          "link": "/"
        },
        {
          "label": "El proyecto",
          "autogenerate": {
            "directory": "proyecto"
          }
        },
        {
          "label": "Análisis",
          "autogenerate": {
            "directory": "analisis"
          }
        },
        {
          "label": "Pantallas y prototipos",
          "autogenerate": {
            "directory": "specs"
          }
        },
        {
          "label": "Design system",
          "autogenerate": {
            "directory": "design-system"
          }
        },
        {
          "label": "Modelado y diagramas",
          "autogenerate": {
            "directory": "modelado"
          }
        },
        {
          "label": "Arquitectura y diseño",
          "autogenerate": {
            "directory": "diseno"
          }
        },
        {
          "label": "Flujos y estados",
          "autogenerate": {
            "directory": "flujos"
          }
        },
        {
          "label": "Plan de trabajo",
          "autogenerate": {
            "directory": "planificacion"
          }
        }
      ],
    }),
  ],
});
