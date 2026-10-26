---
title: "ADR-003 Catálogo y cobertura funcional"
---

# ADR-003 Catálogo del maker y cobertura funcional

Fecha: 25 de octubre de 2026.

## Contexto

La revisión encontró funciones descritas parcialmente entre alcance, RF, CU, datos y diagramas. El equipo confirmó el pedido directo con las condiciones publicadas y la conversación desde el pedido confirmado. Los diseños de Figma permanecen como mocks de referencia.

## Decisiones confirmadas

- El catálogo F25 permite productos prediseñados con configuración, precio unitario, moneda, cantidad, plazo y condiciones versionados.
- El cliente confirma directamente una versión vigente y el servidor materializa el pedido y sus condiciones en una transacción.
- Ambos orígenes de pedido comparten conversación, producción, aprobación expresa del resultado y entrega personal.
- El chat se habilita desde el pedido confirmado y permanece disponible para sus participantes aunque venza la membresía del maker.

## Cobertura funcional documentada

Portfolio, reputación, historial y reportes conservan sus identificadores y reciben RF, CU, persistencia y pruebas específicas. La negociación del cliente genera una propuesta de cambio; la respuesta favorable del maker publica otra versión que el cliente puede aceptar. La coordinación conserva propuesta y aceptación del encuentro y el cliente confirma recepción.

## Canales y diseño

Se documentan los canales Web y React Native indicados en la ficha del proyecto. Administración utiliza Web. El diseño visual se mantiene como referencia; esta revisión actualiza las definiciones de vistas y sus contratos funcionales.

## Consecuencias

- El catálogo comprende 25 funcionalidades, 68 RF, 19 RNF y 25 CU.
- Los datos incorporan productos, versiones, medios, portfolio, valoraciones, criterios y propuestas de cambio.
- Los diagramas explicitan comunicación, catálogo y reputación dentro del monolito.
- Los contratos, pruebas y matrices mantienen la misma correspondencia de identificadores.

## Parámetros operativos

Los valores de precio del abono, cupo, calendario, criterios de reputación, cuotas y proveedores se registran en [las decisiones PD](/3daltoque-docs/planificacion/parametros/). El plan de pruebas utiliza datos sintéticos propios.

## Fuentes

[Alcance y producto](/3daltoque-docs/proyecto/presentacion/), [catálogo funcional](/3daltoque-docs/proyecto/funcionalidades/) y [casos de uso](/3daltoque-docs/analisis/casos-de-uso/).
