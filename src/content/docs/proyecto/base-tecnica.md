---
title: "Herramientas y despliegue"
---

# Herramientas y despliegue

Actualización: 5 de noviembre de 2026. Selección técnica y decisiones de despliegue.

| Área | Base actual |
| --- | --- |
| Backend | FastAPI y Python confirmados |
| Arquitectura | Monolito modular con separación hexagonal simple |
| Web | React; Next.js como integración propuesta para alojar Better Auth |
| Autenticación | Better Auth elegido; credenciales, sesiones y enlaces en Node/TypeScript; envío de verificación y recuperación de contraseña mediante Resend |
| Correo de avisos | API de Resend desde el worker, con remitente y credencial por entorno |
| Mobile | React Native; recorridos cliente y maker sobre la API compartida |
| Persistencia | PostgreSQL con PostGIS en el diseño. Proveedor del piloto por definir. SQLAlchemy y Alembic como propuestas. |
| Archivos | Almacenamiento privado. El proveedor se elige junto con el alojamiento y la base de datos. Los límites por finalidad se registran en [PD-02](/3daltoque-docs/planificacion/parametros/#pd-02). |
| Cobros propios | Checkout Pro para abonos del maker; renovación manual |
| Pruebas gratuitas | Períodos internos configurables desde la primera habilitación |
| Documentación | Astro/Starlight; versión pública seleccionada mediante revisión |
| Hosting del producto | Pendiente; API, worker y autenticación requieren ejecución de servidor |

La membresía no exige OAuth de vendedores, split ni transferencias a makers. El plan único, el cupo de fundadores y los períodos concedidos se conservan en datos y se validan en servidor.

Antes de implementar se fijan versiones, secretos por entorno, migraciones, presupuestos, respaldos y procedimientos de operación. El presupuesto debe indicar proveedor, plan, fecha de consulta y estimación de consumo.

## Canales funcionales

Web y React Native utilizan la misma API FastAPI. Los contratos y permisos se mantienen en las specs. La API de Resend entrega los avisos de correo según la política y las preferencias de la cuenta. Quedan por definir mapas, almacenamiento, otros canales de avisos y el hosting de API y worker. La referencia geográfica OpenStreetMap de la ficha requiere concretar proveedor de mapas y geocodificación y sus límites.

## Operación y verificación

[Manual de instalación](/3daltoque-docs/manuales/instalacion/), [seguridad y operación](/3daltoque-docs/diseno/seguridad/), [contratos operativos](/3daltoque-docs/diseno/contratos-operativos/) y [PERF-01](/3daltoque-docs/planificacion/perfil-perf-01/) fijan preparación, configuración y controles. Los proveedores y precios de producción se registran con la selección del entorno.

## Autenticación elegida

[ADR-004](/3daltoque-docs/decisiones/autenticacion-better-auth/) define la responsabilidad de Better Auth y su integración con FastAPI. El cliente Web utiliza cookies protegidas y Mobile conserva la sesión en almacenamiento seguro. Resend entrega el enlace desde el callback de Better Auth mediante su API; requiere un dominio propio verificado y un remitente autorizado. El hosting debe ejecutar Node/TypeScript y admitir la configuración de orígenes y retornos de ambos clientes.
