# 3DAltoque · Documentación

Documentación pública del proyecto final de Bernardez, Cariaga y Ruiz. Plataforma que conecta clientes y makers de impresión 3D compatibles por ubicación y capacidad, con ofertas, cola, revisión y entrega personal.

## Repositorios del proyecto

| Repositorio | Responsabilidad |
| --- | --- |
| [3daltoque-docs](https://github.com/chill0101/3daltoque-docs) | Documentación y portal Astro/Starlight |
| [3daltoque-backend](https://github.com/chill0101/3daltoque-backend) | Backend FastAPI / Python y API compartida |
| [3daltoque-frontend](https://github.com/chill0101/3daltoque-frontend) | Aplicación web; puede requerir acceso al repositorio |
| [3daltoque-mobile](https://github.com/chill0101/3daltoque-mobile) | Aplicación React Native prevista |

Los repositorios identifican responsabilidades; no acreditan funcionalidades implementadas.

## Modelo vigente

Membresía mensual prepaga para makers, renovación manual y Checkout Pro para cobrar nuestro abono. Prueba general de 30 días y programa Makers Fundadores con 90 días totales propuestos, ambos configurables; cupo fundador por definir. Inicio al habilitar por primera vez el perfil para recibir solicitudes. No se exige tarjeta para la prueba ni se cobra automáticamente al vencer.

El cliente paga la impresión directamente al maker. No hay comisión por pedido, split, retención ni transferencias de impresión. Vencer el acceso comercial limita trabajos nuevos, pero no impide terminar los ya aceptados.

## Portal

[Documentación](https://chill0101.github.io/3daltoque-docs/) · [Manifiesto](https://chill0101.github.io/3daltoque-docs/proyecto/manifiesto/) · [Roadmap](https://chill0101.github.io/3daltoque-docs/planificacion/roadmap/).

La revisión local del 14 de octubre incorpora 54 RF vigentes, 19 RNF, casos de uso, diseño, flujos y ocho vistas DER de un catálogo de 50 tablas. Es análisis y diseño en revisión, no una entrega académica aprobada.

## Desarrollo del sitio

El proyecto usa Astro y Starlight. Con las dependencias del proyecto instaladas, npm run dev inicia la vista local, npm run build genera dist/ y npm run preview sirve ese resultado.

El despliegue configurado en GitHub Actions utiliza GitHub Pages y la base /3daltoque-docs/. Una actualización local no modifica el sitio público: requiere revisión y publicación acordada. No incluir archivos privados, secretos o fuentes de contexto en public/.
