---
title: "Implementación Web y Mobile"
---

# Implementación Web y Mobile

## Artefactos

| Plataforma | Base |
| --- | --- |
| Web | web/components.tsx, web/patterns.tsx y web/index.ts; React y TypeScript del repositorio consumidor. |
| Estilo Web | tokens.css y components.css; clases atq- y atributo data-atq-theme. |
| Mobile | mobile/primitives.tsx y mobile/tokens.native.ts; React Native del repositorio consumidor. |
| Catálogo visual | galeria.html, con estilos y tokens incorporados. |

El kit Web define las 43 exportaciones del catálogo. La base Mobile incluye ThemeProvider y nueve primitivas: Button, TextField, Card, Badge, Alert, Progress, EmptyState, SwitchField y Money. Los componentes restantes de Mobile se componen según su contrato y la navegación del cliente.

## Fronteras de implementación

Los componentes reciben props, acciones y estado. Los contenedores realizan consultas, validan la representación de datos y aplican recuperación. El backend autoriza las operaciones, determina vigencias e importes y registra los resultados.

MapLocationPicker recibe el mapa del adaptador seleccionado. La librería de interfaz conserva el resumen y la confirmación. La capa de acceso del cliente encapsula la estrategia de sesión que se acuerde en PD-01.

## Integración Web

Registrar Manrope y Space Grotesk e importar tokens.css y components.css en el punto global de estilos. Importar componentes desde web/index.ts. El entorno consumidor resuelve React, TSX y los estilos con sus herramientas de aplicación.

AppShell define la raíz visual y el tema. Los componentes controlados reciben value y callbacks. Dialog recibe open y onClose. ErrorSummary recibe un focusKey actualizado al confirmar un formulario inválido.

## Integración Mobile

Registrar ambas familias y pesos en el proyecto React Native. ThemeProvider distribuye light o dark. Las primitivas utilizan valores lógicos de tokens.native.ts y los controles nativos de la plataforma.

Los importes se presentan mediante un texto formateado por el adaptador y su moneda. Los controles de contraseña, correo y teclado reciben los props específicos del sistema. Los componentes conservan el escalado de texto.

## Actualización de tokens

Editar tokens.json y ejecutar `node docs/design-system/build-tokens.mjs` desde la raíz del repositorio. El generador sincroniza tokens.css, tokens.native.ts y los estilos y el logo incorporados en galeria.html. La galería conserva sus imágenes y estilos dentro del HTML para funcionar desde un archivo local o como adjunto de Starlight. El cambio se revisa en temas claro/oscuro y en los componentes que utilizan esos valores. El repositorio de aplicación registra qué versión incorpora.

## Matriz de adaptación

| Grupo | Web | Mobile |
| --- | --- | --- |
| Acciones y campos básicos | Exportaciones del kit | Primitivas de referencia y adaptación de campos compuestos |
| Dialog / Sheet | Modal nativo y panel responsive | Presentación modal del navigator a seleccionar |
| Tabs / navegación | Patrón accesible del kit | Navegación y controles de la plataforma |
| Tablas y comparación | Tabla con encabezados | Tarjetas o lista con etiquetas equivalentes |
| Archivos | Input file y zona de selección | Selector de archivos/cámara según permisos y proveedor |
| Mapas | Slot del adaptador | Slot del proveedor y alternativa manual |
| Oferta / pedido / membresía | Patrones del kit | Composición con primitivas y mismos datos de vista |
| Chat y evidencia | Patrones de referencia | Teclado, adjuntos y medios según capacidades del cliente |

Las dependencias de navegación, mapas, carga de archivos y almacenamiento de sesión se registran en PD-01, PD-04 y PD-11 al elegir sus adaptadores.

## Ejemplo de composición Web

```tsx
import { Button, Card, Badge } from "./web";
import "./tokens.css";
import "./components.css";

export function AccionPedido({ onReview }: { onReview: () => void }) {
  return <div className="atq-ui"><Card title="Resultado del pedido">
    <Badge tone="warning">Esperando revisión</Badge>
    <Button onClick={onReview}>Revisar resultado</Button>
  </Card></div>;
}
```

## Ejemplo de composición Mobile

```tsx
import { ThemeProvider, Card, Badge, Button } from "./mobile";

export function AccionPedido({ onReview }: { onReview: () => void }) {
  return <ThemeProvider theme="light"><Card title="Resultado del pedido">
    <Badge tone="warning" label="Esperando revisión" />
    <Button label="Revisar resultado" onPress={onReview} />
  </Card></ThemeProvider>;
}
```
