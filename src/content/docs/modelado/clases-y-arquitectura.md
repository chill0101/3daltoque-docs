---
title: "Clases de dominio y modelado"
---

# Modelado y arquitectura

## Dominio

![Clases de dominio](/3daltoque-docs/documentos/3a38ed4d1833-dominio.svg)

[Abrir SVG](/3daltoque-docs/documentos/3a38ed4d1833-dominio.svg) · [Fuente editable](/3daltoque-docs/documentos/6420bfd40263-dominio.mmd)

Separar Pedido y sus condiciones de la Membresía del maker. La compra del abono no pertenece al pedido de impresión. [Modelo comercial](/3daltoque-docs/proyecto/modelo-comercial/).

## Datos

[Modelo lógico](/3daltoque-docs/modelado/modelo-logico/): 50 tablas, 460 columnas. [DER](/3daltoque-docs/modelado/datos/): ocho vistas con claves y relaciones. El catálogo estructurado conserva las definiciones de tablas, columnas, claves y reglas del diccionario.

## Arquitectura y componentes

![Componentes lógicos](/3daltoque-docs/documentos/44ac08b2bfc6-componentes.svg)

[Abrir SVG](/3daltoque-docs/documentos/44ac08b2bfc6-componentes.svg) · [Fuente editable](/3daltoque-docs/documentos/410048d78c61-componentes.mmd)

[Arquitectura](/3daltoque-docs/diseno/arquitectura/), [implementación](/3daltoque-docs/diseno/implementacion/), [API](/3daltoque-docs/diseno/api-eventos/) e [integraciones](/3daltoque-docs/diseno/integraciones/). FastAPI como monolito modular con puertos/adaptadores en límites útiles; una API compartida para web y mobile.

## Clases de diseño

![Puertos y adaptadores](/3daltoque-docs/documentos/a44c2fd72ab2-diseno-hexagonal.svg)

[Abrir SVG](/3daltoque-docs/documentos/a44c2fd72ab2-diseno-hexagonal.svg) · [Fuente editable](/3daltoque-docs/documentos/1061d2163efb-diseno-hexagonal.mmd)

La vista representa responsabilidades, puertos y dependencias. El punto 12 del checklist requiere desarrollar además las clases de diseño, sus operaciones y colaboraciones. Hosting, despliegue de workers y versiones concretas siguen pendientes. [Diagramas editables](/3daltoque-docs/modelado/diagramas/).
