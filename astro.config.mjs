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
        { label: 'Inicio', link: '/' },
        {
          label: 'El proyecto',
          items: [
            { slug: 'proyecto/presentacion', label: 'Qué es 3DAltoque' },
            { slug: 'proyecto/manifiesto', label: 'Manifiesto' },
            { slug: 'proyecto/modelo-comercial', label: 'Modelo comercial y fundadores' },
            { slug: 'proyecto/base-tecnica', label: 'Base técnica' },
            { slug: 'proyecto/repositorios', label: 'Repositorios y equipo' },
          ],
        },
        {
          label: 'Análisis',
          items: [
            { slug: 'analisis/requisitos', label: 'Requisitos: guía de lectura' },
            { slug: 'analisis/requisitos/funcionales', label: 'Requisitos funcionales' },
            { slug: 'analisis/requisitos/no-funcionales', label: 'Requisitos no funcionales' },
            { slug: 'analisis/reglas-de-negocio', label: 'Reglas de negocio' },
            { slug: 'analisis/casos-de-uso', label: 'Casos de uso' },
          ],
        },
        {
          label: 'Modelado',
          items: [
            { slug: 'modelado/dominio', label: 'Modelo de dominio' },
            { slug: 'modelado/datos', label: 'Diagrama entidad-relación' },
            { slug: 'modelado/modelo-logico', label: 'Modelo lógico y diccionario' },
          ],
        },
        {
          label: 'Arquitectura y diseño',
          items: [
            { slug: 'diseno/arquitectura', label: 'Arquitectura y componentes' },
            { slug: 'diseno/hexagonal', label: 'Puertos, adaptadores y clases' },
            { slug: 'diseno/integraciones', label: 'Plan de integraciones' },
            { slug: 'diseno/api-eventos', label: 'API y eventos' },
          ],
        },
        {
          label: 'Flujos y estados',
          items: [
            { slug: 'flujos/cotizacion', label: 'Solicitudes y ofertas' },
            { slug: 'flujos/produccion', label: 'Producción y revisión' },
            { slug: 'flujos/membresia', label: 'Prueba, fundadores y vigencia' },
            { slug: 'flujos/pagos', label: 'Cobro del abono' },
            { slug: 'flujos/entrega', label: 'Entrega y recepción' },
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
