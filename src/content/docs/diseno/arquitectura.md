---
title: "Arquitectura y diseño de implementación"
---

# Arquitectura y diseño de implementación

Versión 3.0. Fecha: 25 de octubre de 2026.

## Enfoque adoptado

Backend FastAPI y Python en un monolito modular con separación hexagonal simple. Web y React Native comparten la API y los recorridos de cliente y maker; administración utiliza Web.

El módulo comercial cobra el servicio de membresía mediante Checkout Pro y concede períodos temporales de acceso. Esta responsabilidad sigue ADR-002 y los requisitos RF-12.1 a RF-12.15.

## Fundamento de las decisiones

- El monolito modular mantiene juntas las operaciones que requieren consistencia: aceptación de una oferta, confirmación del pedido y cierre de alternativas, según RF-04.4.
- Los puertos separan las reglas del negocio de mapas, almacenamiento, cobros y notificaciones. Cada adaptador implementa el contrato de su integración, definido en el [plan de integraciones](/3daltoque-docs/diseno/integraciones/).
- Web y mobile consumen el mismo contrato de API, según RF-11.1, y comparten las validaciones de permisos y estados del servidor.
- La separación entre pedido y membresía conserva la operativa de acuerdos existentes al vencer el acceso comercial, según RF-12.10 y [ADR-002](/3daltoque-docs/decisiones/modelo-comercial/).

## Componentes

![Componentes lógicos](/3daltoque-docs/documentos/44ac08b2bfc6-componentes.svg)

[Abrir SVG](/3daltoque-docs/documentos/44ac08b2bfc6-componentes.svg) · [Fuente editable](/3daltoque-docs/documentos/410048d78c61-componentes.mmd)

El monolito se organiza en identidad/perfiles, archivos, catálogo/portfolio, solicitudes/ofertas/negociación, pedidos/revisión, entregas, conversaciones, reputación, membresías/cobros, notificaciones, historial/reportes y administración. Estos límites reúnen reglas relacionadas y permiten coordinar las operaciones que comparten una transacción.

## Núcleo, puertos y adaptadores

El dominio expresa reglas de ofertas, revisión y acceso. Aplicación coordina casos de uso, permisos y transacciones. FastAPI, persistencia y SDK del proveedor pertenecen a adaptadores y composición.

![Puertos y adaptadores](/3daltoque-docs/documentos/a44c2fd72ab2-diseno-hexagonal.svg)

[Abrir SVG](/3daltoque-docs/documentos/a44c2fd72ab2-diseno-hexagonal.svg) · [Fuente editable](/3daltoque-docs/documentos/1061d2163efb-diseno-hexagonal.mmd)

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

El catálogo lógico conserva versiones de solicitudes/ofertas y evidencia por revisión. Incluye plan versionado, membresía del maker, compras y períodos. Cada pago del abono referencia su compra de membresía mediante `pagos.compra_id`.

PostgreSQL/PostGIS y SQLAlchemy/Alembic permanecen como propuestas por confirmar. Los archivos son privados y el análisis se aísla en un worker del mismo proyecto. Outbox y tareas persistidas permiten reintentos sin perder el hecho de negocio.

El despliegue contempla frontend, API, worker, base de datos y almacenamiento de objetos. La selección del hosting requiere presupuesto, contratos de proveedores y objetivos operativos, registrados en PD-11 y PD-13.

## Seguridad e integración

Cada operación valida identidad y permiso por recurso. Las credenciales receptoras de la plataforma permanecen en el backend, separadas por entorno. Un webhook debe persistirse de forma duradera y contrastarse con el recurso del proveedor antes de conceder un período.

El cliente no fija el importe del abono y no declara la compra pagada por regresar del checkout. No hay OAuth de cuentas de vendedores, pagos a makers ni un saldo de comisiones.

## Organización de repositorios

Backend conserva dominio, aplicación, adaptadores, API, worker y migraciones según las herramientas elegidas. Los repositorios web, mobile y documentación permanecen separados. La API define el contrato compartido entre web y mobile. El backend conserva las credenciales de proveedores y aplica los permisos por recurso.

## Vistas relacionadas

- [Requisitos](/3daltoque-docs/analisis/requisitos/).
- [Modelo comercial](/3daltoque-docs/proyecto/modelo-comercial/).
- [Modelo lógico](/3daltoque-docs/modelado/modelo-logico/).
- [Contratos de API](/3daltoque-docs/diseno/api-eventos/).
- [Integraciones](/3daltoque-docs/diseno/integraciones/).
- [Diagramas](/3daltoque-docs/modelado/diagramas/).

## Cobertura de catálogo y comunicación

El pedido directo del catálogo conserva una versión publicada, cantidad y precio del servidor y utiliza la misma frontera de confirmación y seguimiento del pedido personalizado. El chat se habilita al confirmar el pedido y autoriza a sus participantes. Portfolio, reputación e indicadores tienen servicios y persistencia identificados en [clases de diseño](/3daltoque-docs/diseno/clases-de-diseno/) y [modelo lógico](/3daltoque-docs/modelado/modelo-logico/).
