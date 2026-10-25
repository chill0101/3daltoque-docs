---
title: "Fundamentos del design system"
---

# Fundamentos del design system

Fecha: 17 de octubre de 2026. Versión: 1.1.

## Dirección visual

La identidad parte del logo compartido por el equipo: cian y magenta en el aro y los filamentos, azul profundo en el cabezal y tonos de acero en la estructura. Estos elementos definen la paleta, los recorridos circulares y la composición por capas. Manrope organiza lectura y controles; Space Grotesk distingue títulos e importes.

La composición toma referencias de un taller digital: retículas claras, estados precisos, datos técnicos legibles y un acento luminoso reservado a puntos de atención. La interfaz mantiene la información de oferta, revisión y entrega por encima de la decoración.

## Fuente de tokens

tokens.json conserva colores primitivos, colores semánticos light/dark, familias, tamaños, pesos, espaciado, radios, controles, breakpoints, movimiento y capas. build-tokens.mjs produce tokens.css y mobile/tokens.native.ts a partir de esa fuente.

El código utiliza nombres semánticos: primary, onPrimary, surface, text, textMuted, border, focus y estados de información, éxito, advertencia y error. Las variantes del producto reutilizan esos significados.

## Color y aplicación

| Uso | Definición |
| --- | --- |
| Identidad | Azul profundo #082345, cian #00BFE5 y magenta #EA16B5, derivados visualmente del logo aportado. |
| Acción principal | primary con onPrimary; una acción primaria por grupo de decisión. |
| Acento cian | brandCyan #00BFE5 para filamentos, recorridos y detalles de identidad. El primary de cada tema conserva su par onPrimary. |
| Acento magenta | brandMagenta #EA16B5 para firma visual y detalles del programa fundador; accentText/accentBg para texto con contraste. |
| Estructura | brandInk y brandSteel recuperan los materiales del cabezal en contornos, superficies y datos técnicos. |
| Lectura | text sobre canvas o surface; textMuted para información secundaria. |
| Estado | Color, texto e iconografía o estructura complementaria; conservar el significado en escala de grises. |
| Error | danger y dangerBg, con explicación junto al recurso o campo. |
| Confirmación | success y successBg para resultados persistidos. |
| Advertencia | warning y warningBg para condiciones que requieren revisión. |

Las combinaciones deben comprobarse con sus contenidos reales. El criterio de proyecto exige contraste de texto de 4.5:1, o 3:1 para texto grande, y 3:1 en controles y señales visuales aplicables, conforme a [WCAG 2.2](https://www.w3.org/TR/WCAG22/#contrast-minimum).

## Logo y recursos de marca

[Logo original aportado por el equipo](/3daltoque-docs/documentos/bd9b070ce086-logo-3daltoque.png), incorporado el 17 de octubre de 2026. El archivo conserva su contenido y proporciones. La paleta de interfaz deriva visualmente de esa referencia.

Conservar el aro, el cabezal, la pieza y el nombre completos. Presentarlo sobre una superficie blanca, con una zona libre equivalente al 12 % de su ancho. Usar como base 160 px de ancho para una presentación de marca legible. La miniatura de navegación acompaña el nombre visible del producto; la presentación principal conserva el logo a mayor escala.

Usar un marco blanco en el tema oscuro, respetar la proporción 1:1 y mantener el archivo original. El contexto y el propósito determinan el texto alternativo: descripción para la imagen principal y alt vacío para la miniatura que acompaña un nombre visible.

Los aros abiertos, las líneas paralelas y los módulos escalonados trasladan el gesto de impresión a fondos y detalles. Los colores de estado mantienen su significado propio. El magenta se aplica a identidad y destaque; danger mantiene la semántica de una acción sensible o un error.

## Tipografía

| Nivel | Familia | Base propuesta |
| --- | --- | --- |
| Display | Space Grotesk | 40 px, peso 700 |
| Sección | Space Grotesk | 32 px, peso 700 |
| Título | Space Grotesk | 24 px, peso 700 |
| Introducción | Manrope | 20 px |
| Cuerpo y controles | Manrope | 16 px, interlínea 1.6 |
| Etiquetas | Manrope | 14 px, peso 600/700 |
| Metadatos | Manrope | 12 px, según jerarquía y ampliación |
| Referencias técnicas | Monoespaciada del entorno | IDs y versiones breves |

Los tamaños se adaptan al escalado de texto del sistema. Las fuentes deben registrarse en cada plataforma con sus licencias y los pesos utilizados.

## Espaciado y forma

Escala base de 4 px: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80 y 96. Radios de 6, 10, 16 y 24 px; pill para etiquetas breves.

Los controles táctiles tienen un área mínima propuesta de 48 por 48 unidades lógicas. WCAG 2.2 establece un criterio mínimo de 24 CSS px con excepciones; el objetivo de 48 es una decisión de diseño del proyecto para facilitar interacción. [Target Size](https://www.w3.org/TR/WCAG22/#target-size-minimum).

## Layout y responsive

| Ancho propuesto | Composición |
| --- | --- |
| Menor de 640 px | Una columna, formularios apilados, paneles inferiores y acciones con ancho disponible. |
| 640 a 899 px | Una o dos columnas según contenido; filtros apilables. |
| Desde 900 px | Navegación lateral y área principal; tablas con contexto y desplazamiento controlado. |
| Desde 1200 px | Comparación y detalle complementario cuando mejora el recorrido. |

Ancho máximo de contenido: 1344 px. Los textos largos, errores, cantidades y nombres deben envolver sin cubrir las acciones.

## Movimiento y capas

Transiciones breves de 120/180/260 ms para cambios de estado identificables. Skeleton y spinner comunican carga; reduced-motion elimina animación continua. El foco, los errores y la selección permanecen visibles al reducir movimiento.

Las capas definen contenido, elementos sticky, overlays y avisos. Dialog y Sheet utilizan una capa modal que gestiona foco y cierre.

## Fuentes de implementación

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/): criterios de accesibilidad.
- [APG Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/): teclado y asociación de paneles.
- [Dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog): comportamiento del diálogo modal nativo.
- [React useId](https://react.dev/reference/react/useId): asociación de etiquetas y mensajes.
- [React Native Accessibility](https://reactnative.dev/docs/accessibility): roles, etiquetas y estados en Mobile.
