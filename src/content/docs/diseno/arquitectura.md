---
title: "Arquitectura y componentes"
description: "Documentación de análisis y diseño de 3DAltoque."
---

Versión 2.0-borrador. Fecha: 14 de octubre de 2026.

## Enfoque adoptado

Backend FastAPI y Python en un monolito modular con separación hexagonal simple. Web y mobile comparten la API y las reglas; la inclusión de la app nativa en la primera implementación sigue pendiente.

No se agrega un sistema de custodia, transferencias a makers o comisión por impresión. El nuevo contexto comercial cobra el servicio propio de membresía mediante Checkout Pro y concede períodos temporales de acceso.

## Componentes

<figure class="diagram-frame">
<a href="/3daltoque-docs/diagramas/componentes.svg" target="_blank" rel="noopener"><img src="/3daltoque-docs/diagramas/componentes.svg" alt="Componentes lógicos" loading="lazy" /></a>
<figcaption>Componentes lógicos. Seleccioná el diagrama para ampliarlo.</figcaption>
</figure>

[Abrir SVG](/3daltoque-docs/diagramas/componentes.svg) · [Fuente editable](/3daltoque-docs/diagramas/componentes.mmd)

Identidad, archivos, solicitudes/ofertas, pedidos/revisión, entregas, conversaciones, membresías/cobros, notificaciones y administración son módulos internos, no microservicios.

## Núcleo, puertos y adaptadores

El dominio expresa reglas de ofertas, revisión y acceso. Aplicación coordina casos de uso, permisos y transacciones. FastAPI, persistencia y SDK del proveedor pertenecen a adaptadores y composición.

<figure class="diagram-frame">
<a href="/3daltoque-docs/diagramas/diseno-hexagonal.svg" target="_blank" rel="noopener"><img src="/3daltoque-docs/diagramas/diseno-hexagonal.svg" alt="Puertos y adaptadores" loading="lazy" /></a>
<figcaption>Puertos y adaptadores. Seleccioná el diagrama para ampliarlo.</figcaption>
</figure>

[Abrir SVG](/3daltoque-docs/diagramas/diseno-hexagonal.svg) · [Fuente editable](/3daltoque-docs/diagramas/diseno-hexagonal.mmd)

El puerto de pagos recibe una compra del abono con condiciones conservadas. El adaptador de Checkout Pro cobra a favor de la plataforma; el simulador conserva su modo y solo opera donde se permite.

## Límites de consistencia

- Aceptación, cierre de alternativas y creación del pedido son atómicos.
- Una asignación concurrente no supera el cupo fundador.
- La prueba general y la de fundador no se acumulan ni se reinician con una edición de perfil.
- Compra pagada y concesión de acceso se procesan de forma recuperable e idempotente.
- Una misma compra concede como máximo un período; renovaciones diferentes serializan la elección del intervalo.
- La guarda de acceso consulta fechas del servidor. El worker de avisos no determina si venció.
- Vencer la membresía no bloquea la finalización de pedidos existentes.

## Datos e infraestructura propuestos

El catálogo lógico conserva versiones de solicitudes/ofertas y evidencia por revisión. Se agregan plan versionado, membresía del maker, compras y períodos; los pagos se vinculan a compras, no a pedidos.

PostgreSQL/PostGIS y SQLAlchemy/Alembic permanecen como propuestas por confirmar. Los archivos son privados y el análisis se aísla en un worker del mismo proyecto. Outbox y tareas persistidas permiten reintentos sin perder el hecho de negocio.

Se prevén frontend, API, worker, datos y almacenamiento de objetos. Hosting, presupuesto, contratos de proveedores y objetivos operativos requieren definición; publicar documentación no demuestra un despliegue del producto.

## Seguridad e integración

Cada operación valida identidad y permiso por recurso. Las credenciales receptoras de la plataforma permanecen en el backend, separadas por entorno. Un webhook debe persistirse de forma duradera y contrastarse con el recurso del proveedor antes de conceder un período.

El cliente no fija el importe del abono y no declara la compra pagada por regresar del checkout. No hay OAuth de cuentas de vendedores, pagos a makers ni un saldo de comisiones.

## Organización de repositorios

Backend conserva dominio, aplicación, adaptadores, API, worker y migraciones según las herramientas elegidas. Los repositorios web, mobile y documentación permanecen separados. La API es la fuente compartida del contrato, no una excusa para compartir secretos con los clientes.

## Vistas relacionadas

- [Requisitos](/3daltoque-docs/analisis/requisitos/).
- [Modelo comercial](/3daltoque-docs/proyecto/modelo-comercial/).
- [Modelo lógico](/3daltoque-docs/modelado/modelo-logico/).
- [Contratos de API](/3daltoque-docs/diseno/api-eventos/).
- [Integraciones](/3daltoque-docs/diseno/integraciones/).
- [Diagramas](/3daltoque-docs/diseno/arquitectura/).
