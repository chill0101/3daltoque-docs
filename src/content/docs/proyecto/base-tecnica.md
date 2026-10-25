---
title: "Herramientas y despliegue"
---

# Herramientas y despliegue

Actualización: 14 de octubre de 2026. Selección técnica y decisiones de despliegue.

| Área | Base actual |
| --- | --- |
| Backend | FastAPI y Python confirmados |
| Arquitectura | Monolito modular con separación hexagonal simple |
| Web | React; framework de aplicación por cerrar |
| Mobile | React Native; alcance de implementación pendiente |
| Persistencia | PostgreSQL/PostGIS y SQLAlchemy/Alembic como propuestas |
| Archivos | Almacenamiento privado; proveedor y límites pendientes |
| Cobros propios | Checkout Pro para abonos del maker; renovación manual |
| Pruebas gratuitas | Períodos internos configurables desde la primera habilitación |
| Documentación | Astro/Starlight; versión pública seleccionada mediante revisión |
| Hosting del producto | Pendiente; API y worker requieren recursos propios del entorno |

La membresía no exige OAuth de vendedores, split ni transferencias a makers. El plan único, el cupo de fundadores y los períodos concedidos se conservan en datos y se validan en servidor.

Antes de implementar se fijan versiones, secretos por entorno, migraciones, presupuestos, respaldos y procedimientos de operación. El presupuesto debe indicar proveedor, plan, fecha de consulta y estimación de consumo.

## Canales funcionales

Web y React Native utilizan la misma API FastAPI. Los contratos y permisos se mantienen en las specs; los proveedores de mapas, almacenamiento y notificaciones y el hosting de API y workers se seleccionan durante la implementación. La referencia geográfica OpenStreetMap de la ficha requiere concretar proveedor de mapas y geocodificación y sus límites.
