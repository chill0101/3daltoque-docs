---
title: "Plan de trabajo y cronograma"
---

# Plan de trabajo, WBS y cronograma

Versión 1.0. Fecha: 1 de noviembre de 2026.

La planificación toma diecisiete semanas desde el 2 de noviembre de 2026 hasta el 28 de febrero de 2027, con entrega objetivo en marzo de 2027. Las fechas son estimaciones internas de trabajo; las instancias académicas se registran cuando la cátedra las confirme.

## WBS y dependencias

| ID | Paquete de trabajo | Inicio | Duración estimada | Dependencias | Función responsable | Resultado verificable |
| --- | --- | --- | --- | --- | --- | --- |
| W01 | Revisión documental y contratos | Semana 1 | 2 semanas | Base vigente | Documentación/producto | Requisitos, CU, datos y pruebas consistentes. |
| W02 | Entorno, persistencia y despliegue | Semana 1 | 2 semanas | Base técnica | Backend/operación | API, worker, base y objetos con configuración de prueba. |
| W03 | Identidad, perfiles y capacidades | Semana 3 | 2 semanas | W01, W02 | Backend/interfaz | Acceso y perfiles disponibles con permisos. |
| W04 | Archivos, solicitud y matching | Semana 5 | 2 semanas | W03 | Backend/interfaz | Solicitud y candidatos con archivo autorizado. |
| W05 | Ofertas, versiones y aceptación | Semana 7 | 2 semanas | W04 | Backend/Web | Pedido personalizado atómico. |
| W06 | Catálogo, portfolio y pedido directo | Semana 5 | 3 semanas | W03 | Backend/interfaz | Publicaciones versionadas y pedido directo. |
| W07 | Membresías, abono y conciliación | Semana 5 | 3 semanas | W03 | Integraciones | Checkout y concesión idempotente. |
| W08 | Chat, revisión, entrega y reputación | Semana 9 | 3 semanas | W05, W06 | Backend/interfaz | Pedido completado con evidencia y recepción. |
| W09 | Paridad y recorridos Mobile | Semana 9 | 4 semanas | W05, W06; integración final con W08 | Mobile/QA | Recorridos equivalentes y recuperación de red. |
| W10 | Integración, seguridad y ensayos | Semana 13 | 2 semanas | W07, W08, W09 | QA/operación | CP/PNF y restauración documentados. |
| W11 | Manuales, demo y paquete de entrega | Semana 15 | 2 semanas | W10 | Documentación/integración | Versiones, capturas, APK, links y presentación. |
| W12 | Margen de correcciones y ensayo final | Semana 17 | 1 semana | W11 | Equipo | Correcciones críticas y ensayo de entrega. |

![Gantt del plan de trabajo](/3daltoque-docs/documentos/af9426ba7619-gantt-proyecto.svg)

[Datos editables del cronograma](/3daltoque-docs/documentos/4479b5969367-gantt-proyecto.json).

## Priorización y valor/esfuerzo

| Grupo | Funcionalidades | Prioridad | Valor y esfuerzo relativo | Motivo |
| --- | --- | --- | --- | --- |
| Base y contratación | F01–F03, F05–F10, F23–F25 | Must | Valor alto; esfuerzo alto | Cuentas, archivo, búsqueda, ofertas y pedido directo. |
| Acuerdo y finalización | F12–F17, F22 | Must | Valor alto; esfuerzo alto | Comunicación, evidencia, aprobación y recepción. |
| Sustentabilidad | F11, F20 | Must | Valor alto; esfuerzo medio/alto | Acceso comercial, cobro propio y operación autorizada. |
| Confianza y consulta | F04, F18, F19 | Should | Valor medio/alto; esfuerzo medio | Portfolio, reputación e historial de acuerdos. |
| Indicadores | F21 | Should | Valor medio; esfuerzo medio | Evaluación del piloto y decisiones de operación. |

La prioridad ordena la implementación. Las 25 funcionalidades conservan su documentación y trazabilidad. Ante cambios de capacidad, el equipo revisa paquetes y riesgos antes de modificar el compromiso.

## Compromiso semanal

En la reunión de planificación, cada integrante registra tarea WBS, resultado, horas disponibles, esfuerzo estimado, dependencia y fecha interna. Al cierre agrega horas utilizadas, estado, evidencia y motivo del desvío. La asignación nominal se acuerda entre Lucas Bernardez, María del Rosario Cariaga y Lucas Ruiz.

| Campo | Contenido del registro |
| --- | --- |
| Semana y participante | Intervalo e integrante responsable. |
| Compromiso | Tarea y resultado que se verificará al cierre. |
| Disponibilidad/esfuerzo | Horas disponibles y estimadas para esa semana. |
| Dependencia/riesgo | Recurso externo, decisión o tarea necesaria. |
| Seguimiento | Resultado, horas reales, evidencia y acción de recuperación. |

## Instancias académicas

| Instancia | Dato vigente | Registro necesario |
| --- | --- | --- |
| Primer parcial | Consigna histórica disponible en el archivo de la materia. | Fecha y alcance de la instancia actual. |
| Segundo parcial | Fecha por confirmar con cátedra. | Alcance, formato y fecha oficial. |
| Condiciones de diciembre de 2026 | Confirmación de cátedra pendiente. | Comunicación, requisitos y canal. |
| Simulacro de tesis | Fecha por confirmar con cátedra. | Duración, material y devolución. |
| Entrega final | Marzo de 2027, objetivo informado por el equipo. | Día, docente y condiciones oficiales. |

La consigna histórica de Planificación de Seminario Final identifica a la profesora Carina Carballido. El docente de entrega de la instancia actual se confirma con la cátedra.

## Cierre de una entrega

Verificar checklist, versión del producto, accesos, links, resultados críticos de pruebas y correspondencia de documentos. Registrar devolución docente y acciones de corrección. Conservar paquete y commit para reproducir la presentación.
