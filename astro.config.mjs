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
          "items": [
            {
              "autogenerate": {
                "directory": "proyecto"
              }
            }
          ]
        },
        {
          "label": "Análisis",
          "items": [
            {
              "autogenerate": {
                "directory": "analisis"
              }
            }
          ]
        },
        {
          "label": "Pantallas y prototipos",
          "items": [
            {
              "autogenerate": {
                "directory": "specs"
              }
            }
          ]
        },
        {
          "label": "Design system",
          "items": [
            {
              "autogenerate": {
                "directory": "design-system"
              }
            }
          ]
        },
        {
          "label": "Modelado y diagramas",
          "items": [
            {
              "autogenerate": {
                "directory": "modelado"
              }
            }
          ]
        },
        {
          "label": "Arquitectura y diseño",
          "items": [
            {
              "autogenerate": {
                "directory": "diseno"
              }
            }
          ]
        },
        {
          "label": "Flujos y estados",
          "items": [
            {
              "autogenerate": {
                "directory": "flujos"
              }
            }
          ]
        },
        {
          "label": "Decisiones del proyecto",
          "items": [{ "autogenerate": { "directory": "decisiones" } }]
        },
        {
          "label": "Plan de trabajo",
          "items": [
            {
              "autogenerate": {
                "directory": "planificacion"
              }
            }
          ]
        }
      ],
    }),
  ],
});
