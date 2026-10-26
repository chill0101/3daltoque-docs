---
title: "Contratos y convenciones compartidas (Web, Mobile y API)"
description: "Convenciones de estados visuales, manejo de errores, privacidad geográfica, formatos de fecha/moneda e idempotencia compartidas entre Web, Mobile y Backend."
---

Versión: 2.0-borrador. Fecha: 25 de octubre de 2026.

Este documento complementa el **Entregable #14 (Diseño de las Interfaces entre Sistemas)** y los prototipos [Web y Mobile](/3daltoque-docs/specs/01-navegacion-y-pantallas/), fijando las convenciones compartidas que aseguran paridad funcional entre **Next.js (Web)**, **React Native / Expo (Mobile)** y **FastAPI (Backend)**.

---

## 1. Estados obligatorios de interfaz en cada vista

Toda pantalla o panel interactivo del inventario (`WEB-01..32` y `MOB-01..30`) contempla seis estados base más dos estados transaccionales específicos del dominio de **3DAltoque**:

| Estado de vista | Comportamiento requerido en Web y Mobile |
| --- | --- |
| **1. Carga (`Loading`)** | Indicador visual (`skeleton` o `spinner`) con bloqueo del botón de envío para evitar dobles clics accidentales. |
| **2. Contenido (`Ready`)** | Renderizado de los datos vigentes recibidos de `/api/v1`, mostrando versión y fecha de actualización cuando aplique. |
| **3. Vacío (`Empty`)** | Mensaje claro de ausencia de registros (ej. *"Todavía no recibiste ofertas para esta solicitud"*) acompañado de la acción siguiente recomendada. |
| **4. Error de validación (`Validation Error`)** | Marcado por campo junto al control afectado sin borrar los valores ya ingresados por el usuario ([CP-004](/3daltoque-docs/planificacion/pruebas/#cp-004)). |
| **5. Sin permiso / Membresía vencida (`Forbidden`)** | Explicación contextual diferenciando falta de rol (`403`) de vencimiento del abono comercial (`MEMBERSHIP_EXPIRED`), con acceso directo a renovar membresía ([CP-009](/3daltoque-docs/planificacion/pruebas/#cp-009)). |
| **6. Recuperación ante falla técnica (`Retry / Fallback`)** | Reintento seguro con la misma `Idempotency-Key` o degradación controlada (ej. selección manual de zona si el mapa externo no responde). |
| **7. Pendiente de verificación externa (`Pending Verification`)** | Exclusivo de pagos de abono (`CU-11`) y subida de archivos (`CU-INC-01`): informa que el retorno del navegador no confirma el pago hasta que el servidor verifique la notificación de Mercado Pago ([CP-023](/3daltoque-docs/planificacion/pruebas/#cp-023)). |
| **8. Conflicto de versión o concurrencia (`Conflict 409`)** | Cuando una oferta cambió de versión o venció antes de aceptarse, refresca los datos en pantalla y solicita nueva confirmación explícita ([CP-011](/3daltoque-docs/planificacion/pruebas/#cp-011), [CP-012](/3daltoque-docs/planificacion/pruebas/#cp-012)). |

---

## 2. Convenciones de datos, moneda, tiempo y privacidad

| Aspecto | Convención adoptada |
| --- | --- |
| **Identificadores de recursos** | `UUID v4` en rutas y payloads JSON; nunca exponer secuencias enteras autoincrementales en URLs públicas. |
| **Fechas y reloj de autoridad** | Transporte en `ISO-8601 UTC` (`2026-10-25T21:15:00Z`) y visualización localizada en `America/Argentina/Buenos_Aires` (`UTC-3`). Toda expiración de ofertas y membresías se evalúa exclusivamente con el reloj del servidor. |
| **Importes monetarios** | Tipo `DECIMAL(12,2)` serializado como string numérico exacto (`"17000.00"`) acompañado del código `ISO-4217` (`"ARS"`), evitando errores de punto flotante. |
| **Privacidad geográfica (`RF-09.2`, `RNF-04`)** | Ningún endpoint consumido por clientes expone la dirección exacta ni las coordenadas precisas del domicilio del maker. Solo se transmiten `zone_label`, `approx_distance_km` y `public_centroid` ([CP-020](/3daltoque-docs/planificacion/pruebas/#cp-020)). |
| **Archivos privados (`RF-10.1..10.3`)** | Las vistas nunca construyen URLs estáticas a archivos `.STL` ni a fotos de evidencia; solicitan siempre una URL pre-firmada efímera verificada por permiso de recurso ([CP-014](/3daltoque-docs/planificacion/pruebas/#cp-014)). |
| **Idempotencia de comandos críticos** | Las operaciones `POST` de creación de solicitud, aceptación de oferta, presentación de evidencia y creación de compra de abono envían la cabecera `Idempotency-Key`. |

---

## 3. Avisos contractuales obligatorios en la interfaz (`RF-02.5`, `RF-06.4`, `RF-12.15`)

1. **Carácter orientativo de la estimación inicial (`WEB-03`, `MOB-03`):** Debe mostrarse explícitamente que el rango calculado al cargar el archivo es una referencia orientativa no vinculante y que el precio final lo fija cada maker en su oferta.
2. **Pago de la impresión directo entre Cliente y Maker (`WEB-06`, `MOB-05`):** Antes de confirmar una oferta, la interfaz informa que 3DAltoque no procesa, retiene ni garantiza el dinero del pedido de impresión.
3. **No aprobación por silencio (`WEB-08`, `MOB-07`, `WEB-15`, `MOB-14`):** Se informa tanto al cliente como al maker que la falta de respuesta ante una evidencia pendiente envía recordatorios, pero jamás aprueba automáticamente la pieza ni habilita la entrega.
4. **Alcance del abono y de Makers Fundadores (`WEB-18..20`, `MOB-17..19`):** Se informa que la membresía otorga acceso operativo para recibir nuevas solicitudes y cotizar (30 días generales o 90 días totales para fundadores, con renovación manual posterior), sin garantizar un volumen mínimo de ventas ni alterar la continuidad de pedidos ya aceptados.
