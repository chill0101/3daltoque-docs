---
title: "Patrones, estados y contenido"
---

# Patrones, estados y contenido

## Formulario

Cada campo tiene etiqueta visible, ayuda pertinente y error asociado. Al confirmar una entrada inválida se presenta ErrorSummary y se mueve el foco mediante focusKey. Los mensajes explican cómo corregir el dato y preservan la información permitida.

Un formulario sensible muestra un resumen antes de confirmar. El botón de envío expresa su resultado: Crear solicitud, Revisar oferta, Aprobar resultado o Renovar membresía.

## Resultado incierto y reintento

Carga visual representa la operación en curso. Ante interrupción se consulta su referencia persistida. Aceptaciones, compras, devoluciones, mensajes y cierres mantienen la misma clave al recuperar el mismo intento.

El mensaje debe identificar el recurso y una acción segura: Consultar compra, Recuperar pedido o Reintentar envío. Una operación confirmada conserva una vista persistente del resultado.

## Archivos

FileDropzone prepara selección y FileItem informa transferencia, análisis, habilitación o rechazo. La lista muestra nombre, finalidad, estado y acción de recuperación. El backend habilita el archivo antes de utilizarlo en solicitud, evidencia o conversación.

La evidencia indica pedido y revisión. El cliente revisa esa referencia y confirma la decisión correspondiente.

## Oferta y aceptación

OfferCard muestra maker, precio, moneda, plazo, vigencia y versión. La confirmación presenta las condiciones exactas y el backend vuelve a comprobarlas. Un conflicto conduce a recuperar la versión actual.

## Membresía

MembershipCard muestra estado efectivo, período y condiciones del plan. FounderBadge identifica pertenencia al programa. Las compras se inician expresamente y el retorno consulta el estado verificado.

Al vencer, las acciones de compromisos nuevos remiten a la renovación. Chat, producción, evidencia, revisión y entrega de pedidos aceptados conservan sus acciones autorizadas.

## Estados del producto

| Dominio | Texto de interfaz | Uso visual |
| --- | --- | --- |
| Archivo en transferencia o análisis | Cargando / En análisis | Progreso e información |
| Archivo rechazado | Revisá el archivo | Error con motivo y recuperación |
| Oferta vigente | Disponible hasta la fecha informada | Información con vigencia |
| Oferta vencida | Oferta vencida | Advertencia y acción restringida |
| Revisión pendiente | Esperando tu revisión | Advertencia y acciones explícitas |
| Revisión aprobada | Resultado aprobado | Éxito y referencia de revisión |
| Compra pendiente | Estamos verificando el pago | Información y consulta del resultado |
| Acceso vencido | Membresía vencida | Advertencia y renovación manual |
| Pedido confirmado | Pedido confirmado | Estado de seguimiento |
| Entrega completada | Recepción registrada | Éxito con referencia persistida |

Las etiquetas se vinculan con los valores del contrato al cerrar el modelo de estados. El componente recibe texto y tono desde un adaptador de presentación.

## Chat y actividad

El mensaje conserva autor, hora y estado de envío. La reconexión recupera mensajes persistidos y deduplica por identidad. El historial y la cola conservan el orden acordado y permiten abrir el recurso autorizado.

Las notificaciones persistidas viven en su bandeja. ToastRegion presenta avisos recientes sin desplazar el foco.

## Mapas y ubicación

El contenedor ofrece resumen textual y confirmación de ubicación. MapLocationPicker recibe la vista del proveedor mediante un slot. La alternativa manual, precisión y permisos se cierran en PD-04. La lista conserva utilidad cuando falla la visualización del mapa.

## Accesibilidad por recorrido

Revisar teclado, foco visible, ampliación de texto, etiquetas, anuncio de errores y comprensión del estado. En Mobile registrar accessibilityLabel, accessibilityRole y accessibilityState según el componente, como documenta [React Native](https://reactnative.dev/docs/accessibility).

Los controles de tabs siguen flechas, Home/End y la relación entre pestaña y panel de [APG](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/). Las acciones de confirmación utilizan Dialog y conservan contexto al regresar.
