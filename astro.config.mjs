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
        { label: 'Inicio', link: '/3daltoque-docs/' },
        {
          label: 'El proyecto',
          items: [
            { slug: 'proyecto/presentacion', label: 'Qué es 3DAltoque' },
            { slug: 'proyecto/manifiesto', label: 'Manifiesto' },
            { slug: 'proyecto/base-tecnica', label: 'Base técnica' },
            { slug: 'proyecto/repositorios', label: 'Repositorios y equipo' },
          ],
        },
        {
          label: 'Plan de trabajo',
          items: [
            { slug: 'planificacion/roadmap', label: 'Roadmap' },
            { slug: 'planificacion/estado', label: 'Estado de la documentación' },
          ],
        },
      ],
    }),
  ],
});
