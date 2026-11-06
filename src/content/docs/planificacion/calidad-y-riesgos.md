---
title: "Calidad, riesgos y cambios"
---

# Calidad, riesgos y control de cambios

Versión 1.0. Fecha: 1 de noviembre de 2026.

## Objetivos de calidad

El equipo controla coherencia entre requisitos, CU, contratos, modelos y pruebas; preserva la integridad de acuerdos, pagos y archivos; y verifica los recorridos Web y Mobile. Los objetivos medibles se evalúan con [PERF-01](/3daltoque-docs/planificacion/perfil-perf-01/).

## Responsabilidades y revisión

| Función | Responsabilidad | Resultado verificable |
| --- | --- | --- |
| Autor del cambio | Actualizar la fuente y las referencias afectadas. | Documento, código o diagrama con versión e identificadores conservados. |
| Revisor del equipo | Cotejar alcance, reglas, alternativas y evidencia. | Comentarios resueltos y registro de revisión. |
| Responsable de integración | Ejecutar controles y comprobar despliegue. | Compilación, rutas, huellas y enlace del release. |
| Responsable de pruebas | Preparar datos, ejecutar y registrar incidencias. | Ejecuciones CP/PNF con resultado y evidencia. |

Los nombres y disponibilidad se registran en la planificación semanal acordada por Bernardez, Cariaga y Ruiz. Cada cambio tiene un autor y un revisor distintos cuando la disponibilidad del equipo lo permite.

## Criterios de entrada y salida

Una funcionalidad entra a implementación con RF/CU identificados, estados y permisos definidos, contrato y datos revisados y CP derivados. Su cierre exige revisión del código, migración reproducible cuando corresponda, pruebas críticas aprobadas y documentación de usuario actualizada. Un defecto que permite acceso ajeno, doble pedido, doble concesión o pérdida de un acuerdo bloquea la entrega del módulo.

La revisión documental comprueba campos de las plantillas, correspondencia de diagramas y fuentes, enlaces, numeración, ortografía y consistencia comercial. La publicación ejecuta compilación y cotejo exacto de los preparados.

## Registro de riesgos

Escala: probabilidad e impacto de 1 a 3; exposición = producto. El equipo revisa los riesgos cada semana y conserva fecha, responsable nominal y evidencia de su evolución.

| ID | Riesgo y disparador | P | I | Respuesta y contingencia | Función responsable |
| --- | --- | --- | --- | --- | --- |
| R01 | Alcance supera capacidad; tareas críticas se arrastran dos iteraciones. | 3 | 3 | Implementar recorridos verticales y revisar estimaciones; escalonar mejoras manteniendo los requisitos comprometidos. | Coordinación |
| R02 | Cobro externo pendiente o proveedor indisponible. | 2 | 3 | Persistir compra y evento; verificar y conciliar; usar sandbox o simulador identificado para la demostración. | Backend/integraciones |
| R03 | Aceptación concurrente duplica pedido o cupo fundador. | 2 | 3 | Transacción, unicidad e idempotencia; ejecutar CP de concurrencia antes del release. | Backend/datos |
| R04 | Un archivo privado queda expuesto. | 2 | 3 | Autorización por recurso y URL temporal; revocar acceso, contener incidente y auditar. | Seguridad/archivos |
| R05 | STL inválido consume recursos o no puede analizarse. | 2 | 2 | Límites previos, análisis aislado y timeout; conservar borrador y explicar la indisponibilidad de estimación. | Backend/worker |
| R06 | Pocos makers compatibles en la zona del piloto. | 3 | 2 | Medir cobertura, reclutar makers dentro de CABA e informar al cliente cuando la búsqueda quede vacía. | Validación de producto |
| R07 | Cambios del mock y de contratos divergen entre canales. | 2 | 2 | Mantener inventario y estados por pantalla; cotejar Web/Mobile con la misma API. | Interfaz/QA |
| R08 | Pérdida de datos o respaldo incompleto. | 2 | 3 | Copia de base y objetos con manifiesto; restauración aislada periódica bajo PNF-008. | Operación |
| R09 | Evidencia de investigación insuficiente para una conclusión. | 2 | 2 | Separar hipótesis y resultados, conservar instrumento y muestra; realizar entrevistas antes de evaluar conversión. | Investigación |
| R10 | Cambia una condición académica o fecha. | 2 | 3 | Registrar la comunicación oficial y ajustar dependencias y entregables; mantener margen de cierre. | Coordinación |

## Control de cambios

1. Registrar motivo, solicitante, regla afectada y resultado esperado.
2. Identificar impacto en F, RF/RNF, CU, vistas, contratos, tablas, migraciones y CP.
3. Estimar esfuerzo y riesgo; revisar con el equipo los cambios de alcance y condiciones comerciales.
4. Editar la fuente canónica, sus diagramas y su matriz. Conservar identificadores retirados y antecedentes.
5. Validar, revisar y publicar el lote autorizado con procedencia y huellas.
6. Comprobar la versión visible y actualizar la checklist.

## Incidencias y evidencia

Cada incidencia registra ID, entorno, release, precondiciones, pasos, resultado obtenido/esperado, severidad, evidencia, responsable y estado. La severidad crítica comprende pérdida de datos, acceso ajeno o violación de invariantes comerciales. La regresión repite el caso corregido y los recorridos que comparten su regla.

## Métricas de seguimiento

Cobertura documental: RF con CU, contrato y CP asociados sobre 68 RF. Ejecución: CP aprobados, fallidos y bloqueados sobre casos ejecutables del release. Avance: tareas terminadas sobre compromiso de la semana y esfuerzo restante. Integridad documental: enlaces y huellas verificados sobre el lote publicado. Cada informe identifica su denominador y fecha.
