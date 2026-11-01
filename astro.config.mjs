import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://chill0101.github.io',
  base: '/3daltoque-docs',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    starlight({
      head: [{ tag: "script", attrs: { type: "module" }, content: "const normalizeTitle = value => value.normalize('NFC').replace(/[·•—–]/g, ' ').replace(/\\s+/g, ' ').trim(); const hideDuplicateTitle = () => { const pageTitle = document.querySelector('h1#_top'); const sourceTitle = document.querySelector('.sl-markdown-content > .sl-heading-wrapper:first-child h1, .sl-markdown-content > h1:first-child'); if (pageTitle && sourceTitle && normalizeTitle(pageTitle.textContent) === normalizeTitle(sourceTitle.textContent)) { const target = sourceTitle.closest('.sl-heading-wrapper') || sourceTitle; target.hidden = true; target.style.display = 'none'; } }; hideDuplicateTitle(); document.addEventListener('astro:page-load', hideDuplicateTitle);" }],
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
        },
        { label: "Manuales", items: [{ autogenerate: { directory: "manuales" } }] },
        { label: "Presentación", items: [{ autogenerate: { directory: "presentacion" } }] }
      ],
    }),
  ],
});
