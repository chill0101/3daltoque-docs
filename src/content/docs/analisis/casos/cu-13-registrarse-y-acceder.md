---
title: "CU-13 Registrarse y acceder"
---

# CU-13 Registrarse y acceder

Fecha: 25 de octubre de 2026. Autoría: equipo 3DAltoque (Bernardez, Cariaga y Ruiz).

| Campo de la plantilla | Contenido |
| --- | --- |
| Caso de uso | Registrarse y acceder |
| Identificador | CU-13 |
| Actores | Cliente, Maker, Administración, Sistema |
| Tipo | Primario; objetivo funcional de sus actores. |
| Referencias | F01. [RF-01.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-1), [RF-01.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-4), [RF-01.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-5), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1). |
| Precondición | Datos públicos de registro o credenciales de una cuenta existente. |
| Postcondición | Identidad y perfiles autorizados; sesión vigente o cierre confirmado. |
| Descripción | Una persona solicita crear una cuenta o iniciar sesión. |
| Resumen | Identidad y perfiles autorizados; sesión vigente o cierre confirmado. |

## Flujo Normal

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Usuario | Elige registro o acceso y completa los datos requeridos. |
| 2 | Sistema | Valida identificador, credenciales, estado de cuenta y límites. |
| 3 | Sistema | Crea la identidad y roles públicos solicitados o autentica la cuenta existente. |
| 4 | Sistema | Entrega las capacidades y la sesión conforme a la política de seguridad. |
| 5 | Usuario | Abre el recorrido de cliente, maker o administración autorizado. |

## Flujos Alternativos

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 2.A | Sistema | Credenciales inválidas, cuenta bloqueada o identificador duplicado: Responde de forma comprensible y protege los datos de la cuenta. |
| 3.B | Usuario | Intenta asignar administración desde registro público: El sistema rechaza el privilegio solicitado. |
| 5.C | Usuario | Solicita cerrar sesión: El sistema retira la autorización del cliente y aplica la revocación definida para sus credenciales. |

## Datos y controles

Las entradas, validaciones y contratos de este recorrido se desarrollan en [F01](/3daltoque-docs/specs/f01-registro-e-inicio-de-sesion/). La autorización se verifica sobre cada recurso y las mutaciones sensibles conservan versión y clave estable.

Las condiciones de calidad corresponden a [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-08](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-08), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).

## Casos de prueba relacionados

El [catálogo de pruebas y trazabilidad](/3daltoque-docs/analisis/pruebas-y-trazabilidad/) identifica los escenarios de CU-13, sus precondiciones, pasos y resultados esperados.

## Salidas e incidencias

El resultado conserva la referencia del recurso, estado y fecha del servidor. Las alternativas mantienen los datos recuperables y ofrecen la acción de salida especificada en el paso correspondiente.
