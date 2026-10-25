---
title: "Specs de implementación de 3DAltoque"
---

# Especificaciones funcionales

Actualización: 25 de octubre de 2026.

Las 25 specs definen el comportamiento de Web y Mobile, sus permisos, datos, API, alternativas y aceptación. Los recorridos personalizados y de catálogo convergen en pedidos, conversación, producción, revisión y entrega.

| ID | Funcionalidad | RF | CU |
| --- | --- | --- | --- |
| F01 | [Registro e inicio de sesión](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/) | RF-01.1, RF-01.4, RF-01.5 | CU-13 |
| F02 | [Gestión de perfil de cliente](/3daltoque-docs/specs/f02-gestion-de-perfil-de-cliente/) | RF-01.3, RF-09.1 | CU-22 |
| F03 | [Gestión de perfil de maker](/3daltoque-docs/specs/f03-gestion-de-perfil-de-maker/) | RF-01.2, RF-12.2 | CU-09, CU-21 |
| F04 | [Portfolio del maker](/3daltoque-docs/specs/f04-portfolio-del-maker/) | RF-14.1, RF-14.2 | CU-15 |
| F05 | [Alta de solicitud de impresión](/3daltoque-docs/specs/f05-alta-de-solicitud-de-impresion/) | RF-02.1, RF-02.2, RF-02.3 | CU-01 |
| F06 | [Cotización estimativa inicial](/3daltoque-docs/specs/f06-cotizacion-estimativa-inicial/) | RF-02.5 | CU-01 |
| F07 | [Búsqueda de makers cercanos](/3daltoque-docs/specs/f07-busqueda-de-makers-cercanos/) | RF-09.1, RF-09.2, RF-03.1 | CU-01 |
| F08 | [Matching y envío a makers](/3daltoque-docs/specs/f08-matching-y-envio-a-makers/) | RF-03.1, RF-03.2, RF-12.10 | CU-01, CU-02 |
| F09 | [Gestión de ofertas](/3daltoque-docs/specs/f09-gestion-de-ofertas/) | RF-04.1, RF-04.2, RF-04.3, RF-04.5, RF-04.6 | CU-02, CU-03, CU-25 |
| F10 | [Confirmación de oferta](/3daltoque-docs/specs/f10-confirmacion-de-oferta/) | RF-04.4, RF-12.10, RF-12.15 | CU-03, CU-20 |
| F11 | [Membresía y abono](/3daltoque-docs/specs/f11-membresia-y-abono/) | RF-12.1, RF-12.2, RF-12.3, RF-12.4, RF-12.5, RF-12.6, RF-12.7, RF-12.8, RF-12.9, RF-12.10, RF-12.11, RF-12.12, RF-12.13, RF-12.14, RF-12.15 | CU-08, CU-09, CU-10, CU-11, CU-12 |
| F12 | [Gestión de estados del pedido](/3daltoque-docs/specs/f12-gestion-de-estados-del-pedido/) | RF-02.4, RF-05.3, RF-06.5, RF-12.10 | CU-04, CU-05, CU-06 |
| F13 | [Mensajería cliente–maker](/3daltoque-docs/specs/f13-mensajeria-cliente-maker/) | RF-05.1, RF-05.2, RF-11.2, RF-12.10, RF-05.4 | CU-14, CU-03, CU-20 |
| F14 | [Notificaciones](/3daltoque-docs/specs/f14-notificaciones/) | RF-07.1, RF-07.3, RF-07.4, RF-12.11, RF-07.5 | CU-23 |
| F15 | [Evidencia previa a la entrega](/3daltoque-docs/specs/f15-evidencia-previa-a-la-entrega/) | RF-06.1, RF-06.2 | CU-04 |
| F16 | [Entrega en Nodo Amigo](/3daltoque-docs/specs/f16-entrega-en-nodo-amigo/) | RF-06.6, RF-09.1, RF-09.2 | CU-06 |
| F17 | [Validación de recepción](/3daltoque-docs/specs/f17-validacion-de-recepcion/) | RF-06.7 | CU-06 |
| F18 | [Reputación bidireccional](/3daltoque-docs/specs/f18-reputacion-bidireccional/) | RF-15.1, RF-15.2, RF-15.3 | CU-16 |
| F19 | [Historial de pedidos](/3daltoque-docs/specs/f19-historial-de-pedidos/) | RF-02.4, RF-05.3, RF-16.1 | CU-17 |
| F20 | [Panel de administración](/3daltoque-docs/specs/f20-panel-de-administracion/) | RF-07.2, RF-12.1, RF-12.3, RF-12.7, RF-12.12, RF-12.13, RF-13.2, RF-14.1, RF-15.3, RF-17.1 | CU-07, CU-10, CU-12, CU-18, CU-19 |
| F21 | [Reporte de actividad](/3daltoque-docs/specs/f21-reporte-de-actividad/) | RF-17.1 | CU-18 |
| F22 | [Revisión y aprobación del resultado](/3daltoque-docs/specs/f22-revision-y-aprobacion-del-resultado/) | RF-06.3, RF-06.4 | CU-05 |
| F23 | [Gestión de archivos privados](/3daltoque-docs/specs/f23-gestion-de-archivos-privados/) | RF-10.1, RF-10.2, RF-10.3, RF-10.4 | CU-24, CU-01, CU-04, CU-14, CU-15, CU-19 |
| F24 | [API común y sincronización](/3daltoque-docs/specs/f24-api-comun-y-sincronizacion/) | RF-11.1, RF-11.2 | CU-01, CU-02, CU-03, CU-04, CU-05, CU-06, CU-07, CU-08, CU-09, CU-10, CU-11, CU-12, CU-13, CU-14, CU-15, CU-16, CU-17, CU-18, CU-19, CU-20, CU-21, CU-22, CU-23, CU-24, CU-25 |
| F25 | [Catálogo de productos del maker](/3daltoque-docs/specs/f25-catalogo-de-productos-del-maker/) | RF-13.1, RF-13.2, RF-13.3, RF-13.4 | CU-19, CU-20 |

## Documentos compartidos

- [Contratos y convenciones](/3daltoque-docs/specs/00-contratos-y-convenciones/).
- [Navegación y pantallas](/3daltoque-docs/specs/01-navegacion-y-pantallas/).
- [Matriz de cobertura](/3daltoque-docs/specs/02-matriz-de-cobertura/).
- [Decisiones de implementación](/3daltoque-docs/specs/03-decisiones-de-implementacion/).
- [Inventario visual y contratos de vistas](/3daltoque-docs/specs/03-inventario-de-vistas-y-flujos/).
- [Revisión funcional completa](/3daltoque-docs/planificacion/revision-funcional/).
- [Casos de prueba y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/).
