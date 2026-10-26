---
title: "Alcance y producto de 3DAltoque"
---

# Alcance y producto de 3DAltoque

Versión 3.0. Fecha: 25 de octubre de 2026.

## Propósito

Conectar personas que necesitan piezas impresas en 3D con makers cercanos y compatibles, organizando solicitudes personalizadas, productos publicados, acuerdos, comunicación, producción, revisión y entrega personal.

## Solicitud personalizada

1. El cliente carga STL, unidad, material, color, cantidad, urgencia y especificaciones.
2. El sistema valida el archivo, calcula una estimación orientativa cuando dispone de los datos y parámetros y selecciona un grupo limitado de makers compatibles.
3. Los makers presentan ofertas versionadas con precio, plazo y vigencia. El cliente puede proponer cambios que el maker resuelve mediante otra versión.
4. El cliente acepta una versión vigente y confirma un único pedido por solicitud.

## Producto publicado por el maker

1. El maker publica una configuración fija con precio unitario, moneda, cantidades admitidas, plazo y condiciones.
2. El cliente revisa la versión publicada y confirma directamente una cantidad permitida.
3. El servidor comprueba publicación, versión y acceso del maker y conserva el total y las condiciones del pedido en una transacción.

## Operativa del pedido

Cada pedido confirmado habilita una conversación entre cliente y maker. El maker fabrica y presenta evidencia de una revisión; el cliente aprueba expresamente o registra observaciones. Ambos coordinan un encuentro neutral y el cliente confirma la recepción. El historial conserva condiciones y decisiones. La reputación se basa en pedidos completados.

El cliente acuerda y paga la impresión directamente al maker. La plataforma cobra su propio servicio de membresía.

## Acceso y monetización

Un plan mensual prepago con renovación manual mediante Checkout Pro. La primera habilitación del maker concede un único beneficio gratuito: 30 días generales o 90 días totales para fundadores, como valores configurables. El programa fundador conserva cupo, asignación y condiciones. El vencimiento restringe trabajos nuevos y mantiene la operativa de pedidos existentes.

## Canales y capacidades

Web y React Native cubren los recorridos de cliente y maker con una API FastAPI compartida. Administración opera en Web. El maker mantiene perfil, impresoras, materiales, disponibilidad, portfolio y productos. Los indicadores administrativos tienen definiciones, período y permisos.

## Límites de v1

La plataforma conserva las condiciones de la pieza y gestiona el cobro del abono. Se excluyen comisión por impresión, custodia de fondos de terceros, split y transferencias a makers. La entrega se coordina personalmente; logística propia, rastreo de repartidores, venta de archivos digitales y renovación automática de membresía corresponden a ampliaciones posteriores.

## Fundamento y trazabilidad

[ADR-002](/3daltoque-docs/decisiones/modelo-comercial/) define el modelo comercial. [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/) registra el catálogo y las decisiones de esta revisión. Las funcionalidades F01 a F25 se desarrollan en [el catálogo](/3daltoque-docs/proyecto/funcionalidades/), 68 RF y 25 casos de uso.
