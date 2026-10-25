---
title: "Casos de uso y aceptación"
description: "Diagrama de casos de uso (Entregable #3) y especificaciones completas CU-01 a CU-13 con flujos normales, alternativos y criterios de aceptación (Entregable #4)."
---

# Casos de uso y aceptación

**Versión:** 2.0 · **Fecha:** 25 de octubre de 2026 · **Equipo:** Lucas Bernardez · Rocío Cariaga · Lucas Ruiz

Este documento reúne el **Entregable #3 (Diagrama de Casos de Uso)** y el **Entregable #4 (Especificación de Casos de Uso y Criterios de Aceptación)** siguiendo los campos de la plantilla oficial de la cátedra (`Template de Caso de Uso.docx`).

La autorización combina identidad, permisos por recurso y vigencia comercial según [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10). Mercado Pago procesa exclusivamente el abono mensual del maker a la plataforma (`CU-11`). El cliente elige la oferta de impresión (`CU-03`) y acuerda su pago directamente con el maker.

---

## Diagrama de casos de uso

![Casos de uso y actores](/3daltoque-docs/documentos/56672ecacb3e-casos-de-uso.svg)

[Abrir SVG](/3daltoque-docs/documentos/56672ecacb3e-casos-de-uso.svg) · [Fuente editable (.puml)](/3daltoque-docs/documentos/c14d6068439c-casos-de-uso.puml)

### Catálogo de actores del modelo

| Actor | Tipo | Responsabilidad en el sistema |
| --- | --- | --- |
| **Cliente** | Primario (Humano) | Publica solicitudes con archivo STL, compara ofertas de makers cercanos, acepta una oferta vigente, conversa con el maker, revisa y aprueba la evidencia visual y coordina la entrega personal. |
| **Maker** | Primario (Humano) | Configura sus capacidades e inicia su prueba gratuita, consulta y paga su membresía mensual, responde invitaciones con ofertas versionadas, fabrica la pieza, sube evidencia y entrega en el punto acordado. |
| **Administrador** | Primario (Humano) | Modera reclamos y usuarios, publica versiones del plan comercial, asigna el beneficio de Makers Fundadores y ejecuta conciliaciones o devoluciones auditadas. |
| **Mercado Pago (abono)** | Secundario (Sistema externo) | Procesa el cobro del abono mensual del Maker mediante Checkout Pro (o adaptador simulado identificado) y emite notificaciones webhook sobre el resultado del pago. |
| **Servicio de Mapas** | Secundario (Sistema externo) | Provee geocodificación, cálculo de cercanía por radio y visualización de zonas aproximadas y puntos de encuentro preservando el domicilio privado. |
| **Almacenamiento de Archivos** | Secundario (Sistema externo) | Custodia de manera privada los archivos STL, evidencias fotográficas/video y adjuntos de mensajería con permisos por recurso. |

### Tabla resumen de casos de uso y subcasos (`include` / `extend`)

| ID | Nombre del caso de uso | Actor principal | Tipo / Relación | Prioridad | Funcionalidades |
| --- | --- | --- | --- | --- | --- |
| [CU-01](#cu-01) | Publicar solicitud | Cliente | Primario | P1 (`Must`) | F05, F06, F07, F08, F14, F23 |
| [CU-02](#cu-02) | Recibir y responder ofertas | Maker | Primario | P1 (`Must`) | F08, F09, F14, F23 |
| [CU-03](#cu-03) | Elegir oferta | Cliente | Primario | P1 (`Must`) | F09, F10, F14 |
| [CU-04](#cu-04) | Producción y evidencia | Maker del pedido | Primario | P1 (`Must`) | F12, F13, F14, F15, F19, F23 |
| [CU-05](#cu-05) | Revisión y aprobación | Cliente del pedido | Primario | P1 (`Must`) | F12, F14, F15, F22, F23 |
| [CU-06](#cu-06) | Entrega personal | Cliente y Maker | Primario | P1 (`Must`) | F07, F12, F14, F16, F17, F18, F19 |
| [CU-07](#cu-07) | Administración operativa | Administración | Primario | P2 (`Should`) | F04, F18, F20, F21, F23 |
| [CU-08](#cu-08) | Consultar membresía | Maker | Primario | P1 (`Must`) | F11, F14 |
| [CU-09](#cu-09) | Habilitar perfil e iniciar prueba | Maker / Administración | Primario | P1 (`Must`) | F03, F04, F11 |
| [CU-10](#cu-10) | Asignar beneficio fundador | Administración | Primario | P1 (`Must`) | F11, F20 |
| [CU-11](#cu-11) | Pagar o renovar abono | Maker | Primario | P1 (`Must`) | F11, F14, F20 |
| [CU-12](#cu-12) | Gestionar plan y promociones | Administración | Primario | P1 (`Must`) | F11, F20, F21 |
| [CU-13](#cu-13) | Registrarse y acceder | Cliente, Maker, Admin | Primario | P1 (`Must`) | F01, F02, F03, F24 |
| [CU-INC-01](#cu-inc-01) | Cargar y validar archivo privado | Cliente / Maker | `<<include>>` en CU-01, CU-04 | Obligatorio | F23 |
| [CU-INC-02](#cu-inc-02) | Ejecutar matching compatible | Sistema | `<<include>>` en CU-01 | Obligatorio | F07, F08, F14 |
| [CU-INC-03](#cu-inc-03) | Verificar notificación de pago | Mercado Pago / Sistema | `<<include>>` en CU-11 | Obligatorio | F11 |
| [CU-EXT-01](#cu-ext-01) | Calcular estimación orientativa | Sistema | `<<extend>>` de CU-01 | Condicional | F06 |
| [CU-EXT-02](#cu-ext-02) | Conversar en el pedido | Cliente y Maker | `<<extend>>` de CU-04, CU-05, CU-06 | Opcional | F13, F14, F23, F24 |
| [CU-EXT-03](#cu-ext-03) | Registrar observaciones | Cliente | `<<extend>>` de CU-05 | Condicional | F12, F14, F22 |

---

<a id="cu-01"></a>
## CU-01 Publicar solicitud

| Campo | Contenido |
| --- | --- |
| **Caso de Uso** | Publicar solicitud |
| **Identificador** | `CU-01` |
| **Actores** | **Principal:** Cliente.<br>**Secundarios:** Almacenamiento de Archivos (`CU-INC-01`), Servicio de Mapas (`CU-INC-02`), Makers elegibles (notificados). |
| **Tipo** | Primario · **Prioridad:** `P1` (`Must`) |
| **Referencias** | **Funcionalidades:** [F05](/3daltoque-docs/analisis/funcionalidades/#f05), [F06](/3daltoque-docs/analisis/funcionalidades/#f06), [F07](/3daltoque-docs/analisis/funcionalidades/#f07), [F08](/3daltoque-docs/analisis/funcionalidades/#f08), [F14](/3daltoque-docs/analisis/funcionalidades/#f14), [F23](/3daltoque-docs/analisis/funcionalidades/#f23).<br>**Requisitos:** [RF-02.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-1), [RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2), [RF-02.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-3), [RF-02.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-4), [RF-02.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-5), [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16).<br>**Casos relacionados:** Incluye [CU-INC-01](#cu-inc-01) y [CU-INC-02](#cu-inc-02); extendido por [CU-EXT-01](#cu-ext-01).<br>**Pantallas:** `WEB-SOL-01`, `MOB-SOL-01`. |
| **Precondición** | El Cliente ha iniciado sesión (`CU-13`), posee cuenta activa y tiene una ubicación de referencia y medio de contacto válidos. |
| **Postcondición** | Solicitud persistida en estado `ABIERTA` (versión 1) vinculada al archivo STL validado; estimación orientativa conservada (si procede) e invitaciones trazables generadas para el grupo reducido de makers compatibles y con acceso vigente. El pedido se confirma mediante `CU-03`. |
| **Descripción** | Permite al Cliente cargar un modelo 3D en formato STL junto con los parámetros técnicos y de urgencia de la pieza requerida, obtener una referencia orientativa inicial y despachar la solicitud a un conjunto cercano de makers compatibles. |
| **Resumen** | El Cliente sube y valida su STL (`CU-INC-01`), completa material, color, cantidad, escala, categoría de uso y urgencia, confirma ubicación, consulta la estimación orientativa (`CU-EXT-01`) y publica la solicitud para invitar a makers compatibles (`CU-INC-02`). |

### Flujo Normal (`CU-01`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Cliente | Selecciona "Nueva solicitud de impresión" en la interfaz Web (`WEB-SOL-01`) o Mobile (`MOB-SOL-01`). |
| 2 | Sistema | Presenta el formulario de alta de solicitud y precarga la ubicación de referencia vigente del Cliente. |
| 3 | Cliente | Selecciona el archivo `.stl` de su dispositivo e inicia la carga. |
| 4 | Sistema | Ejecuta el subcaso incluido **`CU-INC-01` (Cargar y validar archivo privado)**, verificando tamaño, estructura e integridad del STL, y asocia la referencia habilitada al borrador. |
| 5 | Cliente | Completa los parámetros: material, color, cantidad, unidad/escala, categoría de uso (decorativo, mecánico, alta temperatura), urgencia/plazo deseado y observaciones técnicas, declarando poseer derechos de uso sobre el archivo. |
| 6 | Cliente | Confirma o ajusta su ubicación de referencia para la búsqueda geográfica. |
| 7 | Sistema | Valida que todos los campos obligatorios estén completos y dentro de los límites de `PD-02`. |
| 8 | Sistema | Cuando el método y los datos del STL lo permiten, ejecuta el subcaso extendido **`CU-EXT-01` (Calcular estimación orientativa)** y muestra el rango orientativo aclarando que no es un precio final vinculante. |
| 9 | Cliente | Revisa el resumen de la solicitud y confirma la publicación. |
| 10 | Sistema | Registra la solicitud en estado `ABIERTA` (versión 1) con fecha/hora del servidor y vínculo al Cliente propietario y al archivo STL. |
| 11 | Sistema | Ejecuta el subcaso incluido **`CU-INC-02` (Ejecutar matching compatible)**, seleccionando e invitando a un grupo reducido de makers cercanos, técnicamente compatibles y con membresía o beneficio vigente (`RF-12.10`). |
| 12 | Sistema | Muestra al Cliente el detalle de la solicitud publicada con su estado vigente y la cantidad de makers invitados. |

### Flujos Alternativos (`CU-01`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| **4a** | Sistema | **Archivo rechazado o fuera de límites:** Si `CU-INC-01` detecta un archivo truncado, corrupto o que excede el tamaño máximo, rechaza el archivo, informa el motivo específico y mantiene la solicitud sin publicar (`RF-02.2`). |
| **6a** | Sistema | **Ubicación no disponible o permiso denegado:** Si falla la geolocalización automática o el servicio de mapas, el sistema permite ingresar manualmente la zona/barrio o mantener la ubicación de referencia guardada (`RF-09.1`). |
| **7a** | Sistema | **Datos incompletos:** Si falta material, cantidad válida, ubicación o declaración sobre el archivo, el sistema indica los campos pendientes y no envía la solicitud (`RF-02.3`). |
| **8a** | Sistema | **Información insuficiente para estimar:** Si el STL o los parámetros no permiten calcular la estimación, el sistema explica qué dato falta y permite publicar igual para cotización directa de los makers (`RF-02.5`). |
| **11a** | Sistema | **Ausencia de makers elegibles en el radio inicial:** Si `CU-INC-02` no encuentra candidatos compatibles y con acceso vigente en el radio inicial, conserva la solicitud `ABIERTA`, informa al Cliente y ofrece ampliar el radio según `PD-04`. |

### Criterios de Aceptación (`CU-01`)
- **[CONFIRMADA]** La solicitud válida queda almacenada con estado `ABIERTA` y asociada únicamente al Cliente autenticado.
- **[CONFIRMADA]** Se selecciona un grupo objetivo acotado de makers compatibles por capacidad, cercanía y vigencia comercial (`RF-12.10`).
- **[CONFIRMADA]** La estimación inicial se presenta siempre como orientativa y nunca como precio contractual cerrado.
- **[PENDIENTE — PD-04]** Parámetros exactos de radio inicial y tamaño máximo del lote de invitación.

---

<a id="cu-02"></a>
## CU-02 Recibir y responder ofertas

| Campo | Contenido |
| --- | --- |
| **Caso de Uso** | Recibir y responder ofertas |
| **Identificador** | `CU-02` |
| **Actores** | **Principal:** Maker.<br>**Secundarios:** Cliente (notificado), Almacenamiento de Archivos (consulta autorizada del STL). |
| **Tipo** | Primario · **Prioridad:** `P1` (`Must`) |
| **Referencias** | **Funcionalidades:** [F08](/3daltoque-docs/analisis/funcionalidades/#f08), [F09](/3daltoque-docs/analisis/funcionalidades/#f09), [F14](/3daltoque-docs/analisis/funcionalidades/#f14), [F23](/3daltoque-docs/analisis/funcionalidades/#f23).<br>**Requisitos:** [RF-03.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-2), [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1), [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2), [RF-04.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-5), [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10).<br>**Casos relacionados:** Precedido por [CU-01](#cu-01); precede a [CU-03](#cu-03).<br>**Pantallas:** `WEB-MAK-INV-01`, `WEB-OFE-01`, `MOB-MAK-INV-01`, `MOB-OFE-01`. |
| **Precondición** | El Maker está autenticado (`CU-13`), posee invitación válida para una solicitud `ABIERTA` y cuenta con membresía o beneficio gratuito vigente para trabajos nuevos (`CU-09` / `CU-11`). |
| **Postcondición** | Oferta versionada (`VersionOferta`) en estado `VIGENTE` con precio, plazo y vencimiento registrados, o respuesta de rechazo de la invitación conservada. |
| **Descripción** | Permite al Maker invitado consultar una solicitud compatible y su archivo STL, y responder publicando una oferta con precio, plazo y vigencia propios, actualizando una versión previa o rechazando la invitación. |
| **Resumen** | El Maker abre la invitación en su bandeja, evalúa los parámetros y el STL autorizado, y publica una oferta versionada con precio, plazo y vigencia (o rechaza la invitación). |

### Flujo Normal (`CU-02`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Maker | Accede a su bandeja de solicitudes recibidas en Web o Mobile. |
| 2 | Sistema | Verifica que el Maker sea destinatario de las invitaciones y muestra las solicitudes abiertas con sus especificaciones, zona aproximada y estado. |
| 3 | Maker | Selecciona una solicitud y consulta o descarga el archivo STL asociado para analizarlo. |
| 4 | Sistema | Comprueba el permiso del Maker invitado sobre ese recurso (`RF-10.3`) y autoriza el acceso al archivo STL. |
| 5 | Maker | Completa su oferta indicando precio propuesto, moneda, plazo de fabricación/entrega, fecha/hora de vigencia y observaciones técnicas, y confirma el envío. |
| 6 | Sistema | Valida que la solicitud siga `ABIERTA`, que el Maker tenga acceso comercial vigente (`RF-12.10`) y que el precio, plazo y vigencia sean válidos y futuros. |
| 7 | Sistema | Registra la `Oferta` en estado `VIGENTE` con su `VersionOferta` número `1` y marca la invitación como respondida. |
| 8 | Sistema | Envía una notificación al Cliente propietario informando que tiene una nueva oferta disponible para comparar. |

### Flujos Alternativos (`CU-02`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| **2a** | Sistema | **Maker no invitado:** Si un Maker intenta acceder a una solicitud para la cual no recibió invitación, el sistema deniega la consulta y bloquea el acceso al archivo STL (`RF-03.2`, `RF-10.3`). |
| **5a** | Maker | **Rechazar la invitación:** El Maker selecciona "Rechazar invitación" e indica opcionalmente el motivo. El sistema registra el rechazo, cierra la invitación para ese Maker y detiene recordatorios futuros (`RF-04.5`). |
| **5b** | Maker | **Actualizar oferta o contraofertar (Nueva versión):** Mientras la solicitud siga `ABIERTA` sin oferta aceptada, el Maker modifica precio, plazo o vigencia de su oferta; el sistema conserva la versión anterior en el historial y publica la `VersionOferta` `n + 1` como única versión vigente (`RF-04.2`). |
| **6a** | Sistema | **Invitación cerrada o acceso comercial vencido:** Si la solicitud ya fue adjudicada a otro Maker o si venció la membresía del Maker antes de ofertar, el sistema rechaza la emisión de la oferta e informa el motivo (`RF-12.10`). |

### Criterios de Aceptación (`CU-02`)
- **[CONFIRMADA]** Toda oferta guarda fecha/hora de vigencia obligatoria.
- **[CONFIRMADA]** Se permite ofertar y contraofertar con precio y plazo propios del Maker.
- **[CONFIRMADA]** Cada cambio en una oferta genera una versión numerada conservando el historial completo.

---

<a id="cu-03"></a>
## CU-03 Elegir oferta

| Campo | Contenido |
| --- | --- |
| **Caso de Uso** | Elegir oferta |
| **Identificador** | `CU-03` |
| **Actores** | **Principal:** Cliente.<br>**Secundarios:** Maker adjudicado y demás Makers ofertantes (notificados). |
| **Tipo** | Primario · **Prioridad:** `P1` (`Must`) |
| **Referencias** | **Funcionalidades:** [F09](/3daltoque-docs/analisis/funcionalidades/#f09), [F10](/3daltoque-docs/analisis/funcionalidades/#f10), [F14](/3daltoque-docs/analisis/funcionalidades/#f14).<br>**Requisitos:** [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2), [RF-04.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-3), [RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06).<br>**Casos relacionados:** Precedido por [CU-02](#cu-02); precede a [CU-04](#cu-04).<br>**Pantallas:** `WEB-OFE-02`, `WEB-OFE-03`, `MOB-OFE-02`, `MOB-OFE-03`. |
| **Precondición** | Solicitud en estado `ABIERTA` perteneciente al Cliente autenticado, con al menos una versión de oferta `VIGENTE` de un Maker elegible. |
| **Postcondición** | Se crea en una transacción atómica un único `Pedido` por solicitud con el precio y condiciones de la `VersionOferta` aceptada conservados; la oferta elegida pasa a `ACEPTADA` y todas las demás ofertas de la solicitud se cierran. El pago de la impresión se acuerda directamente entre Cliente y Maker. |
| **Descripción** | Permite al Cliente comparar las ofertas vigentes recibidas (precio, plazo, vigencia, cercanía y portfolio/reputación del Maker) y aceptar una versión vigente para confirmar el pedido. |
| **Resumen** | El Cliente compara las ofertas activas, revisa el detalle de la versión seleccionada y confirma su aceptación; el sistema ejecuta una operación atómica que crea el pedido único y cierra las alternativas. |

### Flujo Normal (`CU-03`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Cliente | Abre su solicitud `ABIERTA` y accede a la comparación de ofertas recibidas. |
| 2 | Sistema | Evalúa la vigencia con la hora del servidor (marcando como `VENCIDA` toda oferta expirada) y presenta las ofertas `VIGENTES` con su versión actual, precio, moneda, plazo, tiempo restante, zona y perfil del Maker (`RF-04.3`). |
| 3 | Cliente | Selecciona una oferta vigente para inspeccionar el detalle de la versión e informarse de que el pago de la pieza se acuerda directamente con el Maker (`RF-12.15`). |
| 4 | Cliente | Confirma la acción "Aceptar oferta" indicando el identificador de la versión visualizada. |
| 5 | Sistema | Ejecuta en el backend una transacción atómica que comprueba: titularidad del Cliente, solicitud `ABIERTA` sin pedido previo, coincidencia exacta con la última `VersionOferta` vigente no vencida y habilitación aplicable del Maker (`RF-04.4`, `RF-12.10`). |
| 6 | Sistema | En la misma transacción: marca la versión elegida como `ACEPTADA`, cierra todas las demás ofertas e invitaciones de la solicitud, cambia la solicitud a `CERRADA` y crea un único `Pedido` con las condiciones económicas y técnicas congeladas. |
| 7 | Sistema | Habilita la conversación del pedido (`F13`) y notifica al Maker adjudicado y a los demás ofertantes. |
| 8 | Sistema | Muestra al Cliente la pantalla del pedido confirmado con sus canales de comunicación y seguimiento. |

### Flujos Alternativos (`CU-03`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| **5a** | Sistema | **Oferta vencida al intentar aceptar:** Si la oferta venció antes de procesarse la confirmación, el sistema aborta la transacción, actualiza la oferta a `VENCIDA` e informa al Cliente sin crear el pedido (`RF-04.2`). |
| **5b** | Sistema | **Cambio de versión concurrente:** Si el Maker publicó una nueva versión de la oferta mientras el Cliente veía la anterior, el sistema rechaza la aceptación sobre la versión desactualizada, muestra la nueva versión y solicita confirmación expresa sobre las nuevas condiciones (`RF-04.4`). |
| **5c** | Sistema | **Selección concurrente / reintento:** Si el Cliente envía dos confirmaciones simultáneas, la restricción transaccional garantiza que se cree un único pedido; la petición repetida recibe el pedido ya confirmado sin generar duplicados (`RNF-05`). |

### Criterios de Aceptación (`CU-03`)
- **[CONFIRMADA]** El Cliente puede comparar y cambiar de oferta mientras ninguna haya sido aceptada.
- **[CONFIRMADA]** No se permite aceptar una oferta vencida ni una versión reemplazada.
- **[CONFIRMADA]** La aceptación confirma como máximo un pedido por solicitud y cierra automáticamente las demás ofertas en una transacción atómica.

---

<a id="cu-04"></a>
## CU-04 Producción y evidencia

| Campo | Contenido |
| --- | --- |
| **Caso de Uso** | Producción y evidencia |
| **Identificador** | `CU-04` |
| **Actores** | **Principal:** Maker del pedido.<br>**Secundarios:** Almacenamiento de Archivos (`CU-INC-01`), Cliente del pedido (notificado). |
| **Tipo** | Primario · **Prioridad:** `P1` (`Must`) |
| **Referencias** | **Funcionalidades:** [F12](/3daltoque-docs/analisis/funcionalidades/#f12), [F13](/3daltoque-docs/analisis/funcionalidades/#f13), [F14](/3daltoque-docs/analisis/funcionalidades/#f14), [F15](/3daltoque-docs/analisis/funcionalidades/#f15), [F19](/3daltoque-docs/analisis/funcionalidades/#f19), [F23](/3daltoque-docs/analisis/funcionalidades/#f23).<br>**Requisitos:** [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RF-06.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1), [RF-06.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-2), [RF-06.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-5), [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10).<br>**Casos relacionados:** Precedido por [CU-03](#cu-03); incluye [CU-INC-01](#cu-inc-01); extendido por [CU-EXT-02](#cu-ext-02); precede a [CU-05](#cu-05).<br>**Pantallas:** `WEB-PED-01`, `WEB-REV-01`, `MOB-PED-01`, `MOB-REV-01`. |
| **Precondición** | Pedido confirmado asignado al Maker autenticado; **no exige renovar la membresía si esta venció después de aceptado el pedido** (`RF-12.10`). |
| **Postcondición** | Avance productivo auditado y nueva `RevisionResultado` presentada en estado `PENDIENTE_REVISION` con evidencia visual habilitada e historial conservado. |
| **Descripción** | Permite al Maker actualizar los estados de fabricación de la pieza y presentar fotografías o videos del resultado terminado asociados a una revisión identificable para solicitar la aprobación del Cliente. |
| **Resumen** | El Maker registra el inicio de fabricación, produce la pieza, carga la evidencia visual validada (`CU-INC-01`) y envía la revisión al Cliente. |

### Flujo Normal (`CU-04`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Maker | Ingresa a su cola de pedidos activos y selecciona el pedido confirmado. |
| 2 | Sistema | Verifica que el usuario sea el Maker asignado al pedido y muestra las especificaciones, el archivo STL y las acciones de avance disponibles (`RF-06.5`, `RF-12.10`). |
| 3 | Maker | Actualiza el estado del pedido a `EN_PRODUCCION`. |
| 4 | Sistema | Registra la transición en el historial auditable (actor, fecha/hora, estado anterior y nuevo) y notifica al Cliente (`RF-05.3`). |
| 5 | Maker | Al finalizar la impresión, selecciona "Presentar evidencia de pieza terminada", adjunta fotos o video del resultado e ingresa notas u observaciones de la revisión. |
| 6 | Sistema | Ejecuta el subcaso incluido **`CU-INC-01` (Cargar y validar archivo privado)** sobre cada archivo multimedia de evidencia. |
| 7 | Maker | Confirma la presentación de la revisión. |
| 8 | Sistema | Crea una instancia numerada de `RevisionResultado` en estado `PENDIENTE_REVISION`, vincula los archivos de evidencia habilitados, pasa el pedido a `EN_REVISION` y notifica al Cliente para que tome una decisión en `CU-05` (`RF-06.1`, `RF-06.2`). |

### Flujos Alternativos (`CU-04`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| **2a** | Maker / Cliente | **Conversar sobre el pedido:** En cualquier momento, cualquiera de las partes ejecuta **`CU-EXT-02` (Conversar en el pedido)** para evacuar dudas técnicas. |
| **6a** | Sistema | **Archivo de evidencia no habilitado o ausente:** Si el Maker no adjunta evidencia o el archivo falla la validación en `CU-INC-01`, el sistema bloquea el paso a revisión e indica el error a corregir (`RF-06.1`). |
| **8a** | Maker | **Nueva revisión tras observaciones:** Si el pedido tenía una revisión previa observada en `CU-05` (`CU-EXT-03`), el sistema conserva todas las revisiones anteriores con sus evidencias y crea la revisión `n + 1` como la nueva revisión vigente. |

### Criterios de Aceptación (`CU-04`)
- **[CONFIRMADA]** Es obligatorio presentar evidencia visual habilitada para pasar el pedido a revisión del Cliente.
- **[CONFIRMADA]** Un Maker cuya membresía venció luego de confirmado el pedido conserva acceso completo para actualizar estados y presentar evidencia de ese pedido (`RF-12.10`).
- **[RECOMENDADA]** Asociación de metadata (fecha, comentario y número de revisión) a cada entrega de evidencia.

---

<a id="cu-05"></a>
## CU-05 Revisión y aprobación

| Campo | Contenido |
| --- | --- |
| **Caso de Uso** | Revisión y aprobación |
| **Identificador** | `CU-05` |
| **Actores** | **Principal:** Cliente del pedido.<br>**Secundario:** Maker del pedido (notificado). |
| **Tipo** | Primario · **Prioridad:** `P1` (`Must`) |
| **Referencias** | **Funcionalidades:** [F12](/3daltoque-docs/analisis/funcionalidades/#f12), [F14](/3daltoque-docs/analisis/funcionalidades/#f14), [F15](/3daltoque-docs/analisis/funcionalidades/#f15), [F22](/3daltoque-docs/analisis/funcionalidades/#f22), [F23](/3daltoque-docs/analisis/funcionalidades/#f23).<br>**Requisitos:** [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3), [RF-06.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-4), [RF-07.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-4), [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06).<br>**Casos relacionados:** Precedido por [CU-04](#cu-04); extendido por [CU-EXT-02](#cu-ext-02) y [CU-EXT-03](#cu-ext-03); precede a [CU-06](#cu-06).<br>**Pantallas:** `WEB-REV-02`, `MOB-REV-02`. |
| **Precondición** | Existe una `RevisionResultado` vigente en estado `PENDIENTE_REVISION` con evidencia consultable para un pedido del Cliente autenticado. |
| **Postcondición** | Se conserva la `DecisionRevision` vinculada al actor, fecha y evidencia evaluada. La aprobación expresa de la revisión vigente habilita la coordinación de entrega (`CU-06`). |
| **Descripción** | Permite al Cliente evaluar la evidencia fotográfica o de video de la revisión vigente y registrar su aprobación expresa o sus observaciones detalladas. |
| **Resumen** | El Cliente consulta la evidencia presentada por el Maker y aprueba expresamente la revisión (habilitando la entrega) o registra observaciones mediante `CU-EXT-03`. |

### Flujo Normal (`CU-05`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Cliente | Accede al detalle de la revisión pendiente desde su pedido en estado `EN_REVISION`. |
| 2 | Sistema | Verifica que el usuario sea el Cliente titular del pedido y presenta la evidencia visual de la `RevisionResultado` vigente junto con las observaciones del Maker (`RF-10.3`). |
| 3 | Cliente | Revisa las imágenes/video y selecciona "Aprobar resultado". |
| 4 | Sistema | Solicita confirmación explícita informando que la aprobación habilitará la coordinación del encuentro de entrega. |
| 5 | Cliente | Confirma la aprobación. |
| 6 | Sistema | Registra la `DecisionRevision` con estado `APROBADA`, identificando al Cliente, la fecha/hora del servidor y la revisión/evidencia exacta evaluada (`RF-06.3`, `RNF-06`). |
| 7 | Sistema | Actualiza la revisión a `APROBADA`, pasa el pedido a `PENDIENTE_ENTREGA` y notifica al Maker que puede coordinarse la entrega en `CU-06`. |

### Flujos Alternativos (`CU-05`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| **3a** | Cliente | **Registrar observaciones sobre el resultado:** Si el Cliente no está conforme con la pieza mostrada en la evidencia, ejecuta el caso extendido **`CU-EXT-03` (Registrar observaciones)**, pasando la revisión a `OBSERVADA` y manteniendo bloqueada la entrega (`RF-06.3`). |
| **3b** | Sistema | **Silencio del Cliente (Falta de respuesta):** Mientras el Cliente no tome una decisión expresa, la revisión **permanece en `PENDIENTE_REVISION`** (nunca se aprueba por silencio o vencimiento) y el sistema envía recordatorios verificando previamente que siga pendiente (`RF-06.4`, `RF-07.4`). |
| **6a** | Sistema | **Revisión desactualizada o ya decidida:** Si el Cliente intenta decidir sobre una revisión que no es la vigente o que ya tenía decisión, el sistema rechaza la operación conservando el estado válido (`RNF-05`). |

### Criterios de Aceptación (`CU-05`)
- **[CONFIRMADA]** Debe existir aprobación explícita del Cliente sobre la revisión vigente para habilitar la entrega.
- **[CONFIRMADA]** El silencio del Cliente mantiene la revisión pendiente y nunca equivale a aprobación (`RF-06.4`).
- **[CONFIRMADA]** Si hay observaciones, quedan registradas sobre la revisión y habilitan el diálogo y corrección (`CU-EXT-03`).
- **[PENDIENTE — PD-07]** Número máximo de correcciones antes de escalar a reclamo administrativo (`CU-07`).

---

<a id="cu-06"></a>
## CU-06 Entrega personal

| Campo | Contenido |
| --- | --- |
| **Caso de Uso** | Entrega personal |
| **Identificador** | `CU-06` |
| **Actores** | **Principales:** Cliente y Maker del pedido.<br>**Secundario:** Servicio de Mapas. |
| **Tipo** | Primario · **Prioridad:** `P1` (`Must`) |
| **Referencias** | **Funcionalidades:** [F07](/3daltoque-docs/analisis/funcionalidades/#f07), [F12](/3daltoque-docs/analisis/funcionalidades/#f12), [F14](/3daltoque-docs/analisis/funcionalidades/#f14), [F16](/3daltoque-docs/analisis/funcionalidades/#f16), [F17](/3daltoque-docs/analisis/funcionalidades/#f17), [F18](/3daltoque-docs/analisis/funcionalidades/#f18), [F19](/3daltoque-docs/analisis/funcionalidades/#f19).<br>**Requisitos:** [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RF-06.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-6), [RF-06.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-7), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05).<br>**Casos relacionados:** Precedido por [CU-05](#cu-05); extendido por [CU-EXT-02](#cu-ext-02).<br>**Pantallas:** `WEB-ENT-01`, `WEB-ENT-02`, `MOB-ENT-01`, `MOB-ENT-02`. |
| **Precondición** | Revisión vigente del pedido en estado `APROBADA` (`CU-05`) y participantes autorizados. |
| **Postcondición** | Encuentro acordado, recepción física registrada con actor y fecha, y pedido finalizado conforme a la política. |
| **Descripción** | Permite al Cliente y al Maker coordinar un punto de encuentro neutral ("Nodo Amigo" en modalidad de encuentro personal para v1, sin custodia en comercios y preservando los domicilios particulares) y un horario, y posteriormente registrar la recepción de la pieza entregada. |
| **Resumen** | Las partes acuerdan en la plataforma un punto neutral y horario de encuentro, realizan el intercambio presencial de la pieza y registran la validación de recepción para cerrar el pedido. |

### Flujo Normal (`CU-06`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Maker / Cliente | Accede a "Coordinar entrega" dentro del pedido con revisión aprobada. |
| 2 | Sistema | Comprueba que la revisión vigente esté `APROBADA` y muestra el mapa de selección de punto de encuentro neutral sin revelar el domicilio privado de ninguna de las partes (`RF-06.6`, `RF-09.2`). |
| 3 | Maker / Cliente | Propone un punto de encuentro público/neutral, fecha, horario e indicaciones adicionales. |
| 4 | Sistema | Registra la propuesta de `Entrega` y envía notificación a la contraparte. |
| 5 | Contraparte | Acepta y confirma el punto y horario de encuentro propuestos. |
| 6 | Sistema | Actualiza el estado de la `Entrega` a `COORDINADA` y del pedido a `LISTO_PARA_ENTREGAR`, notificando a ambas partes. |
| 7 | Cliente y Maker | Concurren al encuentro personal, entregan la pieza (y resuelven el pago directo acordado entre ellos) y registran la validación de recepción en la aplicación según el mecanismo de `PD-08`. |
| 8 | Sistema | Verifica los participantes y condiciones del mecanismo de recepción, registra actor, fecha/hora y resultado (`RF-06.7`), marca la `Entrega` como `COMPLETADA` y el pedido como `FINALIZADO`, habilitando el historial (`F19`) y la valoración mutua (`F18`). |

### Flujos Alternativos (`CU-06`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| **2a** | Sistema | **Revisión aún no aprobada:** Si el pedido no cuenta con la revisión aplicable en estado `APROBADA`, el sistema impide coordinar la entrega o registrar la recepción (`RF-06.6`). |
| **5a** | Contraparte | **Cambio de punto u horario:** Si la contraparte propone otro horario o punto neutral (apoyándose opcionalmente en el chat `CU-EXT-02`), el sistema conserva el historial de propuestas y vuelve al paso 4 hasta que ambas partes confirmen. |
| **7a** | Cliente / Maker | **Incidente en el encuentro o pieza no conforme:** Si una de las partes no asiste o la pieza física no coincide con la evidencia aprobada, el participante registra un incidente de entrega; el sistema no da por cerrado el pedido por silencio y habilita la intervención de soporte en `CU-07` (`PD-08`). |

### Criterios de Aceptación (`CU-06`)
- **[CONFIRMADA]** El domicilio particular se protege en todo momento.
- **[CONFIRMADA]** En v1 se utiliza **encuentro personal** acordado (no hay custodia tercerizada por comercios ni cierre automático por silencio).
- **[CONFIRMADA]** La recepción exige una revisión vigente aprobada previamente en `CU-05`.

---

<a id="cu-07"></a>
## CU-07 Administración operativa

| Campo | Contenido |
| --- | --- |
| **Caso de Uso** | Administración operativa |
| **Identificador** | `CU-07` |
| **Actores** | **Principal:** Administración autorizada.<br>**Secundarios:** Cliente, Maker, Almacenamiento de Archivos. |
| **Tipo** | Primario · **Prioridad:** `P2` (`Should`) |
| **Referencias** | **Funcionalidades:** [F04](/3daltoque-docs/analisis/funcionalidades/#f04), [F18](/3daltoque-docs/analisis/funcionalidades/#f18), [F20](/3daltoque-docs/analisis/funcionalidades/#f20), [F21](/3daltoque-docs/analisis/funcionalidades/#f21), [F23](/3daltoque-docs/analisis/funcionalidades/#f23).<br>**Requisitos:** [RF-07.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-2), [RF-10.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-4), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06).<br>**Casos relacionados:** Recibe escalamientos de [CU-05](#cu-05), [CU-06](#cu-06) y [CU-11](#cu-11).<br>**Pantallas:** `WEB-ADM-01`, `WEB-ADM-REP-01`. |
| **Precondición** | Administrador autenticado (`CU-13`) con permiso específico para la operación y existencia de un caso de soporte, denuncia o consulta administrativa pertinente. |
| **Postcondición** | Acción registrada en la bitácora de auditoría con actor, fecha/hora, motivo, recurso afectado y permiso aplicado. Las operaciones financieras disponibles corresponden exclusivamente al abono de membresía. |
| **Descripción** | Permite a la Administración gestionar reclamos de pedidos o entregas, moderar usuarios o archivos denunciados, conciliar o procesar devoluciones autorizadas del abono de membresía y consultar reportes de actividad dejando trazabilidad completa. |
| **Resumen** | Administración consulta el caso o métrica en el panel Web, ejecuta la acción habilitada por su permiso ingresando un motivo obligatorio y el sistema persiste la auditoría y notifica a los usuarios afectados. |

### Flujo Normal (`CU-07`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Administrador | Accede al Panel de Administración (`WEB-ADM-01`) desde el canal Web. |
| 2 | Sistema | Verifica los permisos específicos del Administrador y muestra la bandeja de casos de soporte, denuncias, conciliaciones de abono y reportes (`F20`, `F21`). |
| 3 | Administrador | Selecciona un caso abierto e inspecciona sus antecedentes autorizados (historial de estados del pedido, revisiones, evidencias o estado de una compra de membresía). |
| 4 | Administrador | Elige la acción habilitada por su rol (resolver reclamo, suspender cuenta infractora, retirar archivo prohibido según `RF-10.4`, o conciliar/reembolsar un abono según `RF-12.7`/`RF-12.12`) y redacta el motivo obligatorio. |
| 5 | Sistema | Valida que el Administrador posea el permiso para esa acción y que el motivo no esté vacío (`RF-07.2`, `RNF-04`). |
| 6 | Sistema | Aplica el cambio de estado sobre el recurso correspondiente, graba un registro inmutable en la bitácora administrativa (actor, fecha/hora, permiso, recurso, valor anterior, valor nuevo y motivo) y envía notificación a los usuarios involucrados (`RNF-06`). |

### Flujos Alternativos (`CU-07`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| **5a** | Sistema | **Falta de motivo o permiso insuficiente:** Si el Administrador omite el motivo o carece del permiso específico (`PD-14`), el sistema rechaza la operación sin modificar el recurso y registra el intento denegado. |
| **6a** | Sistema | **Intento de intervenir pagos de impresión:** Dado que la plataforma solo cobra su abono mensual de membresía, el sistema no ofrece ni ejecuta retenciones o reembolsos sobre el pago de la pieza acordado por fuera entre Cliente y Maker. |

### Criterios de Aceptación (`CU-07`)
- **[CONFIRMADA]** Toda acción administrativa exige permiso específico, motivo explícito y registro en la bitácora de auditoría (`RNF-06`).
- **[PENDIENTE — PD-07 / PD-14]** SLA de respuesta y alcance detallado de sanciones por tipo de reclamo.

---

<a id="cu-08"></a>
## CU-08 Consultar membresía

| Campo | Contenido |
| --- | --- |
| **Caso de Uso** | Consultar membresía |
| **Identificador** | `CU-08` |
| **Actores** | **Principal:** Maker.<br>**Secundario:** Reloj / Procesos de avisos de vencimiento. |
| **Tipo** | Primario · **Prioridad:** `P1` (`Must`) |
| **Referencias** | **Funcionalidades:** [F11](/3daltoque-docs/analisis/funcionalidades/#f11), [F14](/3daltoque-docs/analisis/funcionalidades/#f14).<br>**Requisitos:** [RF-12.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-4), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RF-12.11](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-11), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15).<br>**Casos relacionados:** Relacionado con [CU-09](#cu-09), [CU-10](#cu-10) y [CU-11](#cu-11).<br>**Pantallas:** `WEB-MEM-01`, `MOB-MEM-01`. |
| **Precondición** | Maker autenticado (`CU-13`). |
| **Postcondición** | Se presenta el estado comercial comprensible calculado con la fecha/hora del servidor (sin beneficio iniciado, en prueba general, con beneficio fundador, con abono pago activo o vencido), su historial de períodos y el acceso a iniciar la compra o renovación manual (`CU-11`). |
| **Descripción** | Permite al Maker conocer en todo momento el estado de su membresía, la fecha exacta de vencimiento de su acceso para recibir nuevas solicitudes, las condiciones del programa Makers Fundadores y el historial de sus compras y períodos, además de recibir avisos preventivos de próximo vencimiento. |
| **Resumen** | El Maker ingresa a su panel de membresía; el sistema calcula con hora del servidor su estado de acceso vigente, le informa que la renovación es manual y que sus pedidos en curso se mantienen operativos aunque venza el abono. |

### Flujo Normal (`CU-08`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Maker | Accede a la vista "Mi Membresía" en Web (`WEB-MEM-01`) o Mobile (`MOB-MEM-01`). |
| 2 | Sistema | Consulta con la hora actual del servidor los períodos de acceso y compras del Maker (`RF-12.4`). |
| 3 | Sistema | Presenta el estado vigente del acceso comercial (prueba gratuita de 30 días, beneficio fundador de 90 días totales, período mensual pago activo o acceso vencido), la fecha/hora exacta de inicio y fin del período actual y el historial de compras. |
| 4 | Sistema | Informa explícitamente que la renovación es **manual** (sin débitos automáticos), que el abono cubre únicamente el acceso a nuevas solicitudes en 3DAltoque y que los pedidos ya confirmados pueden completarse siempre aunque venza el período (`RF-12.10`, `RF-12.15`). |
| 5 | Maker | Si desea adquirir o extender un período, selecciona "Pagar o renovar abono", pasando a **`CU-11`**. |

### Flujos Alternativos (`CU-08`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| **3a** | Sistema | **Perfil aún sin beneficio inicial activado:** Si el Maker se registró pero todavía no completó su primera habilitación operativa, el sistema le indica qué datos faltan para iniciar su período gratuito en **`CU-09`**. |
| **3b** | Sistema | **Acceso vencido:** Si la fecha de vencimiento ya pasó y no hay un nuevo período acreditado, el sistema muestra el estado `VENCIDO`, explica que no recibirá invitaciones nuevas pero que sus pedidos activos siguen habilitados, y destaca el botón para renovar en **`CU-11`** (`RF-12.10`). |
| **3c** | Sistema | **Compra de abono en verificación:** Si existe una compra iniciada en `CU-11` pendiente de confirmación por Mercado Pago, el sistema muestra el estado `PENDIENTE_VERIFICACION` evitando compras duplicadas accidentales. |
| **3d** | Sistema | **Recordatorio preventivo de vencimiento:** Cuando un período activo entra en la ventana previa al vencimiento y el Maker aún no renovó, el sistema genera el aviso recordatorio correspondiente (`RF-12.11`). |

### Criterios de Aceptación (`CU-08`)
- **[CONFIRMADA]** El estado y vencimiento se determinan siempre con la hora del servidor.
- **[CONFIRMADA]** Se distingue con claridad entre prueba gratuita general, beneficio fundador, abono pago y estado vencido.
- **[CONFIRMADA]** Se informa visiblemente que al vencer el acceso solo se restringen trabajos nuevos y nunca se bloquean los pedidos ya aceptados (`RF-12.10`).

---

<a id="cu-09"></a>
## CU-09 Habilitar perfil e iniciar prueba

| Campo | Contenido |
| --- | --- |
| **Caso de Uso** | Habilitar perfil e iniciar prueba |
| **Identificador** | `CU-09` |
| **Actores** | **Principal:** Maker (y Administración según el criterio de habilitación de `PD-01`).<br>**Secundario:** Servicio de Mapas. |
| **Tipo** | Primario · **Prioridad:** `P1` (`Must`) |
| **Referencias** | **Funcionalidades:** [F03](/3daltoque-docs/analisis/funcionalidades/#f03), [F04](/3daltoque-docs/analisis/funcionalidades/#f04), [F11](/3daltoque-docs/analisis/funcionalidades/#f11).<br>**Requisitos:** [RF-01.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-12.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2), [RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06).<br>**Casos relacionados:** Precedido por [CU-13](#cu-13); interactúa con [CU-08](#cu-08) y [CU-10](#cu-10).<br>**Pantallas:** `WEB-MAK-01`, `WEB-MAK-02`, `MOB-MAK-01`. |
| **Precondición** | El perfil del Maker cumple el criterio de habilitación (`PD-01`: capacidades técnicas, materiales y ubicación confirmados) y no ha consumido aún su único beneficio gratuito inicial. |
| **Postcondición** | Capacidades del Maker guardadas y, en su primera habilitación histórica, se concede por única vez el período gratuito aplicable (30 días de prueba general o 90 días totales si posee beneficio fundador), conservando inicio, fin, modo y versión de configuración sin solicitar tarjeta. |
| **Descripción** | Permite al Maker completar o actualizar sus capacidades técnicas de impresión y, cuando el perfil queda habilitado por primera vez para recibir solicitudes, inicia automáticamente su único beneficio gratuito inicial (prueba general o beneficio de Maker Fundador, sin acumular ambos). |
| **Resumen** | El Maker registra sus impresoras, materiales, dimensiones útiles y ubicación; al quedar habilitado por primera vez para recibir solicitudes, el sistema inicia su único período gratuito sin pedir medio de pago. |

### Flujo Normal (`CU-09`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Maker | Accede a la configuración de su perfil y capacidades técnicas (`WEB-MAK-01` / `MOB-MAK-01`). |
| 2 | Sistema | Presenta los campos de capacidades: materiales, colores, dimensiones máximas útiles ($X \times Y \times Z$), disponibilidad, plazos orientativos, ubicación de trabajo y portfolio opcional (`F03`, `F04`). |
| 3 | Maker | Completa los datos requeridos y solicita habilitar su perfil para recibir solicitudes de impresión. |
| 4 | Sistema | Valida que las capacidades, dimensiones y ubicación de referencia sean válidas (`RF-01.2`, `RF-09.1`) y que se cumpla el criterio de habilitación definido en `PD-01`. |
| 5 | Sistema | Comprueba en una operación atómica que el Maker no haya recibido previamente su beneficio gratuito inicial (`RF-12.2`). |
| 6 | Sistema | Verifica si el Maker tiene asignado el beneficio de **Maker Fundador** (`CU-10`): si lo tiene, crea su único `PeriodoAcceso` gratuito por **90 días totales**; en caso contrario, crea su único `PeriodoAcceso` de **prueba general por 30 días** (según los valores configurables vigentes en `CU-12`), sin solicitar tarjeta ni medio de pago (`RF-12.2`, `RF-12.3`). |
| 7 | Sistema | Habilita al Maker para el matching de solicitudes (`CU-INC-02`), registra la trazabilidad del beneficio concedido y muestra la fecha de vencimiento en su panel (`CU-08`). |

### Flujos Alternativos (`CU-09`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| **4a** | Sistema | **Perfil incompleto o capacidades inválidas:** Si faltan materiales, ubicación confirmada o las dimensiones son inválidas, el sistema informa los errores a corregir y no inicia el período de prueba (`RF-01.2`). |
| **5a** | Sistema | **Habilitación o edición repetida (Beneficio ya consumido):** Si el Maker edita su perfil o vuelve a habilitarse habiendo consumido ya su beneficio inicial en el pasado, el sistema guarda las capacidades actualizadas pero **no concede un nuevo período gratuito** (`RF-12.2`). |

### Criterios de Aceptación (`CU-09`)
- **[CONFIRMADA]** El registro de cuenta por sí solo (`CU-13`) no inicia la prueba gratuita; esta comienza únicamente con la primera habilitación operativa del perfil (`RF-12.2`).
- **[CONFIRMADA]** Cada Maker recibe como máximo un (1) beneficio gratuito inicial en toda su historia, sin pedir datos de tarjeta.
- **[CONFIRMADA]** El beneficio de Maker Fundador (90 días totales) reemplaza a la prueba general (30 días); nunca se suman.

---

<a id="cu-10"></a>
## CU-10 Asignar beneficio fundador

| Campo | Contenido |
| --- | --- |
| **Caso de Uso** | Asignar beneficio fundador |
| **Identificador** | `CU-10` |
| **Actores** | **Principal:** Administración autorizada.<br>**Secundario:** Maker beneficiado (notificado). |
| **Tipo** | Primario · **Prioridad:** `P1` (`Must`) |
| **Referencias** | **Funcionalidades:** [F11](/3daltoque-docs/analisis/funcionalidades/#f11), [F20](/3daltoque-docs/analisis/funcionalidades/#f20).<br>**Requisitos:** [RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3), [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06).<br>**Casos relacionados:** Se vincula con [CU-08](#cu-08), [CU-09](#cu-09) y [CU-12](#cu-12).<br>**Pantallas:** `WEB-ADM-MEM-01`. |
| **Precondición** | Administrador autenticado con permiso comercial, programa de Makers Fundadores habilitado y cupo disponible. |
| **Postcondición** | Inscripción del Maker en el programa fundador registrada de forma atómica y auditada, descontando una plaza del cupo y fijando las condiciones del beneficio único de 90 días totales. |
| **Descripción** | Permite a la Administración adjudicar una plaza del cupo limitado del programa Makers Fundadores a un Maker seleccionado, otorgándole el beneficio promocional inicial de 90 días totales sin cargo (en reemplazo de la prueba general de 30 días). |
| **Resumen** | El Administrador selecciona un Maker elegible, ingresa el motivo de asignación y confirma; el sistema verifica el cupo de forma atómica, asigna la condición de Maker Fundador y audita la operación. |

### Flujo Normal (`CU-10`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Administrador | Accede a la gestión del programa "Makers Fundadores" en el panel Web (`WEB-ADM-MEM-01`). |
| 2 | Sistema | Muestra el cupo total configurado, las plazas ya asignadas, las plazas disponibles y el listado de makers candidatos. |
| 3 | Administrador | Selecciona al Maker destinatario, ingresa el motivo de la asignación y confirma la operación. |
| 4 | Sistema | Inicia una transacción atómica y comprueba: permiso del Administrador, motivo presente, elegibilidad del Maker y existencia de al menos una plaza libre en el cupo fundador (`RF-12.3`, `RNF-05`). |
| 5 | Sistema | Registra la asignación de Maker Fundador, incrementa el contador de cupo utilizado y aplica el beneficio único de **90 días totales** (que reemplaza y no se acumula con la prueba general de 30 días). |
| 6 | Sistema | Registra la intervención en la bitácora de auditoría con actor, fecha/hora, motivo y configuración aplicada (`RF-12.13`) y notifica al Maker. |

### Flujos Alternativos (`CU-10`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| **4a** | Sistema | **Cupo agotado (incluso ante asignaciones concurrentes):** Si dos administradores intentan asignar la última plaza simultáneamente o el cupo ya está completo, el control transaccional rechaza la operación excedente e informa que el cupo de Makers Fundadores está agotado (`RF-12.3`, `RNF-05`). |
| **4b** | Sistema | **Maker ya inscrito o con condición incompatible:** Si el Maker ya es Fundador o su estado requiere una política de transición aún abierta en `PD-10`, el sistema impide duplicar el beneficio e informa la restricción. |

### Criterios de Aceptación (`CU-10`)
- **[CONFIRMADA]** Ninguna asignación individual o concurrente puede superar el cupo máximo configurado para Makers Fundadores.
- **[CONFIRMADA]** El beneficio fundador otorga 90 días totales iniciales (parametrizables hacia futuro en `CU-12`) y nunca se suma a los 30 días de prueba general.
- **[CONFIRMADA]** Queda registro auditable de quién asignó cada plaza fundador, cuándo y con qué motivo (`RF-12.13`).

---

<a id="cu-11"></a>
## CU-11 Pagar o renovar abono

| Campo | Contenido |
| --- | --- |
| **Caso de Uso** | Pagar o renovar abono |
| **Identificador** | `CU-11` |
| **Actores** | **Principal:** Maker.<br>**Secundarios:** Mercado Pago (sistema externo de cobro del abono), Administración (para conciliación/devolución autorizada). |
| **Tipo** | Primario · **Prioridad:** `P1` (`Must`) |
| **Referencias** | **Funcionalidades:** [F11](/3daltoque-docs/analisis/funcionalidades/#f11), [F14](/3daltoque-docs/analisis/funcionalidades/#f14), [F20](/3daltoque-docs/analisis/funcionalidades/#f20).<br>**Requisitos:** [RF-12.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-5), [RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.8](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8), [RF-12.9](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-9), [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12), [RF-12.14](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-14), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09), [RNF-10](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-10), [RNF-15](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-15).<br>**Casos relacionados:** Incluye [CU-INC-03](#cu-inc-03); relacionado con [CU-08](#cu-08) y [CU-12](#cu-12).<br>**Pantallas:** `WEB-MEM-02`, `WEB-MEM-03`, `MOB-MEM-01`. |
| **Precondición** | Plan comercial publicado con importe y condiciones visibles (`CU-12`) y Maker autenticado (`CU-13`). |
| **Postcondición** | Compra y período de acceso trazables; tras verificar el resultado autenticado con el proveedor (`CU-INC-03`), se concede por única vez el período mensual correspondiente, con renovación manual y sin cobro de impresiones. |
| **Descripción** | Permite al Maker comprar o renovar manualmente un período mensual prepago del abono de 3DAltoque mediante Mercado Pago Checkout Pro (o el modo simulado identificado en entornos autorizados), acreditando el acceso únicamente cuando el backend verifica el pago ante el proveedor. |
| **Resumen** | El Maker inicia la compra manual de su mes de abono, el sistema crea una compra idempotente con el precio vigente congelado y abre Checkout Pro; al recibir y verificar la notificación de pago (`CU-INC-03`), concede una única vez el período de acceso. |

### Flujo Normal (`CU-11`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Maker | Desde su panel de membresía (`CU-08`), selecciona "Pagar o renovar abono" (`WEB-MEM-02`). |
| 2 | Sistema | Presenta el resumen de la versión vigente del plan mensual prepago: precio, moneda, duración del período y aclaración de que la renovación es manual y no intermedia el cobro de piezas a clientes (`RF-12.5`, `RF-12.15`). |
| 3 | Maker | Confirma el inicio del pago del abono. |
| 4 | Sistema | Comprueba u obtiene de forma idempotente la `CompraMembresia` pendiente para evitar cobros duplicados, congela la versión del plan, el importe y el modo (`REAL` o `SIMULADO` según `RF-12.14`) y solicita la preferencia de cobro a Mercado Pago Checkout Pro. |
| 5 | Mercado Pago | Retorna el identificador de preferencia y la URL de pago. |
| 6 | Sistema | Registra el `IntentoPago` asociado a la compra y redirige al Maker a Checkout Pro. |
| 7 | Maker | Completa el pago en Mercado Pago y regresa a la aplicación (`WEB-MEM-03`). |
| 8 | Sistema | Muestra la compra como "Pendiente de verificación con el proveedor", sin conceder el período por el mero retorno del navegador (`RF-12.6`, `RNF-09`). |
| 9 | Sistema | Ejecuta el subcaso incluido **`CU-INC-03` (Verificar notificación de pago)** al recibir el webhook (o en la consulta de conciliación `RF-12.7`), verifica el estado `APROBADO` en Mercado Pago y concede en una transacción idempotente un único `PeriodoAcceso` mensual para esa compra (`RF-12.8`, `RF-12.9`). |
| 10 | Sistema | Actualiza el estado de acceso del Maker a `ACTIVO`, extiende o inicia su vigencia según corresponda y le notifica la acreditación. |

### Flujos Alternativos (`CU-11`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| **4a** | Sistema | **Ejecución en modo simulado identificado:** En entornos de prueba/demostración autorizados (`RF-12.14`, `RNF-10`), el sistema utiliza el adaptador simulado identificando visiblemente el modo `SIMULADO` en la interfaz y en los registros, sin mezclar datos con cobros reales. |
| **7a** | Maker / MP | **Pago rechazado, abandonado o expirado:** Si el pago es rechazado o el Maker abandona el checkout, el sistema registra el intento como `RECHAZADO` o `EXPIRADO`, no concede período de acceso y permite iniciar un nuevo intento (`RF-12.6`). |
| **8a** | Administrador | **Resultado incierto / Conciliación o devolución autorizada:** Si una notificación demora o falla la red, el sistema conserva el estado `INCIERTO` y permite conciliar contra Mercado Pago (`RF-12.7`). En caso de devolución autorizada del abono, Administración ejecuta el reembolso con motivo auditado (`RF-12.12`). |
| **9a** | Mercado Pago | **Webhook repetido:** Si llega más de una notificación para el mismo pago aprobado, `CU-INC-03` comprueba que la compra ya concedió su único período y no vuelve a extender la vigencia (`RF-12.8`, `RNF-05`). |

### Criterios de Aceptación (`CU-11`)
- **[CONFIRMADA]** El retorno del navegador nunca aprueba el pago ni concede el período sin verificación del backend contra el proveedor (`RF-12.6`).
- **[CONFIRMADA]** Cada compra pagada concede como máximo un (1) período de acceso (idempotencia estricta, `RF-12.8`).
- **[CONFIRMADA]** No existen cobros automáticos recurrentes ni cobros de impresiones dentro de la pasarela de la plataforma (`ADR-002`).

---

<a id="cu-12"></a>
## CU-12 Gestionar plan y promociones

| Campo | Contenido |
| --- | --- |
| **Caso de Uso** | Gestionar plan y promociones |
| **Identificador** | `CU-12` |
| **Actores** | **Principal:** Administración autorizada. |
| **Tipo** | Primario · **Prioridad:** `P1` (`Must`) |
| **Referencias** | **Funcionalidades:** [F11](/3daltoque-docs/analisis/funcionalidades/#f11), [F20](/3daltoque-docs/analisis/funcionalidades/#f20), [F21](/3daltoque-docs/analisis/funcionalidades/#f21).<br>**Requisitos:** [RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1), [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06), [RNF-13](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-13).<br>**Casos relacionados:** Afecta operaciones futuras de [CU-09](#cu-09), [CU-10](#cu-10) y [CU-11](#cu-11).<br>**Pantallas:** `WEB-ADM-MEM-01`. |
| **Precondición** | Administrador autenticado con permiso de configuración comercial y versión vigente del plan conocida. |
| **Postcondición** | Se publica una nueva versión numerada de la configuración del plan y promociones para operaciones futuras, conservando motivo, autor, fecha y sin reescribir compras ni períodos ya concedidos. |
| **Descripción** | Permite a la Administración configurar y versionar sin cambios de código el precio mensual del único plan de membresía, la moneda, la duración de la prueba gratuita general (inicialmente 30 días), la duración total del beneficio fundador (inicialmente 90 días) y el cupo máximo de Makers Fundadores. |
| **Resumen** | Administración edita los parámetros del plan comercial e ingresa el motivo del cambio; el sistema valida los valores, crea una nueva versión inmutable aplicable hacia futuro y audita la modificación. |

### Flujo Normal (`CU-12`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Administrador | Ingresa a "Configuración del Plan y Promociones" en el panel de Administración Web (`WEB-ADM-MEM-01`). |
| 2 | Sistema | Presenta la versión actualmente vigente del plan único (número de versión, precio mensual, moneda, días de prueba general, días totales de fundador, cupo fundador total y utilizado) y el historial de versiones anteriores. |
| 3 | Administrador | Ingresa los nuevos parámetros propuestos para la siguiente versión junto con el motivo obligatorio de la actualización y confirma la publicación. |
| 4 | Sistema | Comprueba el permiso del Administrador, verifica que la versión base coincida con la última vigente (control de concurrencia optimista), valida que el precio, duraciones y cupo sean números válidos y que el nuevo cupo fundador no sea inferior a las plazas ya asignadas (`RF-12.1`, `RNF-13`). |
| 5 | Sistema | Crea una nueva `PlanVersion` (`n + 1`) como configuración activa para futuras habilitaciones (`CU-09`, `CU-10`) y futuras compras (`CU-11`), manteniendo intactas las condiciones congeladas en compras y períodos previos. |
| 6 | Sistema | Registra el cambio en la bitácora de auditoría con valores anteriores, valores nuevos, actor, fecha/hora y motivo (`RF-12.13`, `RNF-06`). |

### Flujos Alternativos (`CU-12`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| **4a** | Sistema | **Valor inválido o cupo menor al ya asignado:** Si se ingresa un importe negativo/cero, duraciones inválidas, falta el motivo o se intenta fijar un cupo fundador menor que la cantidad de fundadores ya inscritos, el sistema rechaza la publicación e informa el error exacto (`RF-12.1`). |
| **4b** | Sistema | **Conflicto de versión concurrente o intento de editar versión histórica:** Si otro Administrador publicó una versión en simultáneo o se intenta alterar una versión pasada ya referenciada por compras o períodos, el sistema bloquea la sobrescritura para preservar la integridad histórica (`RF-12.13`, `RNF-09`). |

### Criterios de Aceptación (`CU-12`)
- **[CONFIRMADA]** Los parámetros comerciales (precio, 30 días de prueba, 90 días de fundador, cupo) son configurables por Administración sin modificar el código (`RNF-13`).
- **[CONFIRMADA]** Cada modificación genera una nueva versión y nunca altera retroactivamente compras ni períodos de acceso ya otorgados (`RF-12.1`).
- **[CONFIRMADA]** Todo cambio de configuración queda auditado con actor, fecha, motivo y valores previos/nuevos (`RF-12.13`).

---

<a id="cu-13"></a>
## CU-13 Registrarse y acceder

| Campo | Contenido |
| --- | --- |
| **Caso de Uso** | Registrarse y acceder |
| **Identificador** | `CU-13` |
| **Actores** | **Principales:** Cliente, Maker y Administración.<br>**Secundario:** Servicio de Mapas (para ubicación de referencia del perfil). |
| **Tipo** | Primario · **Prioridad:** `P1` (`Must`) |
| **Referencias** | **Funcionalidades:** [F01](/3daltoque-docs/analisis/funcionalidades/#f01), [F02](/3daltoque-docs/analisis/funcionalidades/#f02), [F03](/3daltoque-docs/analisis/funcionalidades/#f03), [F24](/3daltoque-docs/analisis/funcionalidades/#f24).<br>**Requisitos:** [RF-01.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-1), [RF-01.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-3), [RF-01.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-4), [RF-01.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-5), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-11.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-1), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-11](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-11), [RNF-12](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-12), [RNF-17](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-17).<br>**Casos relacionados:** Precondición transversal de `CU-01` a `CU-12`.<br>**Pantallas:** `WEB-AUTH-01`, `WEB-AUTH-02`, `WEB-CLI-01`, `MOB-AUTH-01`, `MOB-AUTH-02`, `MOB-CLI-01`. |
| **Precondición** | El usuario dispone de los datos de registro o credenciales según el flujo aplicable. |
| **Postcondición** | Cuenta y perfil (`Cliente` o `Maker`) creados, sesión autenticada con permisos por recurso o sesión cerrada y revocada; registrarse no inicia por sí solo la prueba gratuita del Maker (la cual se inicia en `CU-09`). |
| **Descripción** | Gestiona el registro público de cuentas de Cliente y Maker, la autenticación de usuarios en Web y Mobile a través de la API común, el mantenimiento de los datos de contacto y ubicación de referencia del perfil, y el cierre seguro de sesión. |
| **Resumen** | El usuario se registra o inicia sesión; el backend valida sus credenciales y estado de cuenta, otorga acceso acorde a su rol, permite actualizar su contacto y ubicación de referencia y revoca la autorización al cerrar sesión. |

### Flujo Normal (`CU-13`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| 1 | Usuario | Accede a la pantalla de ingreso (`WEB-AUTH-01` / `MOB-AUTH-01`) o de registro (`WEB-AUTH-02` / `MOB-AUTH-02`). |
| 2 | Usuario | Si se registra: ingresa email, contraseña, nombre, datos de contacto, ubicación de referencia, selecciona el perfil solicitado (`Cliente` o `Maker`) y acepta las condiciones de uso y privacidad. Si inicia sesión: ingresa su email y contraseña. |
| 3 | Sistema | Valida en el backend los datos recibidos: en registro, comprueba que el identificador no esté duplicado y que el rol solicitado no sea administrativo (`RF-01.1`); en login, comprueba las credenciales y que la cuenta se encuentre activa (`RF-01.4`). |
| 4 | Sistema | Emite la sesión autenticada con los permisos correspondientes al perfil y redirige al usuario a su recorrido autorizado (sin activar todavía el período de prueba si es un Maker recién registrado, el cual se inicia en `CU-09`). |
| 5 | Usuario | Desde su perfil (`F02`/`F03`), consulta o actualiza sus datos de contacto y confirma su ubicación de referencia (`RF-01.3`, `RF-09.1`). |
| 6 | Sistema | Persiste los datos informando su finalidad y preservando la privacidad del domicilio exacto (`RNF-04`, `RNF-11`). |
| 7 | Usuario | Selecciona "Cerrar sesión" al finalizar su uso. |
| 8 | Sistema | Retira o revoca la sesión activa y su credencial de renovación para ese cliente (`RF-01.5`), impidiendo el acceso posterior a operaciones protegidas con esa sesión. |

### Flujos Alternativos (`CU-13`)

| Nro | Ejecutor | Paso o Actividad |
| --- | --- | --- |
| **3a** | Sistema | **Datos obligatorios faltantes o email duplicado en registro:** El sistema rechaza el registro sin crear una cuenta parcial y muestra un mensaje comprensible indicando qué dato corregir (`RF-01.1`). |
| **3b** | Sistema | **Credenciales inválidas o cuenta bloqueada en inicio de sesión:** El sistema impide el acceso y devuelve un mensaje seguro sin exponer información sensible sobre la cuenta (`RF-01.4`). |
| **3c** | Sistema | **Intento de escalamiento de permisos o acceso a recurso ajeno:** Si un cliente manipula parámetros para adjudicarse rol de `Administrador` o consultar datos privados de otro usuario, el backend rechaza la operación con error de autorización (`RF-01.1`, `RF-01.3`, `RNF-04`). |

### Criterios de Aceptación (`CU-13`)
- **[CONFIRMADA]** El registro público crea únicamente perfiles `Cliente` o `Maker` y nunca otorga permisos administrativos (`RF-01.1`).
- **[CONFIRMADA]** Registrarse como Maker no consume ni inicia automáticamente el período gratuito hasta cumplir la habilitación en `CU-09` (`RF-12.2`).
- **[CONFIRMADA]** Cerrar sesión invalida el acceso desde ese cliente e impide renovar la sesión cerrada (`RF-01.5`).

---

## Especificación de subcasos incluidos y extendidos (`<<include>>` / `<<extend>>`)

<a id="cu-inc-01"></a>
### CU-INC-01 Cargar y validar archivo privado (`<<include>>`)

| Campo | Contenido |
| --- | --- |
| **Identificador y nombre** | `CU-INC-01` Cargar y validar archivo privado |
| **Relación UML** | Incluido (`<<include>>`) obligatoriamente por [CU-01](#cu-01) (STL), [CU-04](#cu-04) (evidencia foto/video), [CU-09](#cu-09) (portfolio) y [CU-EXT-02](#cu-ext-02) (adjuntos). |
| **Actores** | Cliente o Maker propietario del recurso; Almacenamiento de Archivos. |
| **Requisitos relacionados** | [F23](/3daltoque-docs/analisis/funcionalidades/#f23), [RF-02.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-1), [RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2), [RF-06.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1), [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2), [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3), [RNF-04](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-04), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16). |
| **Precondición** | Usuario autenticado con permiso sobre el recurso destino. |
| **Postcondición** | Archivo transferido, validado en tamaño real, formato e integridad y marcado como `HABILITADO` con referencia privada única. |

| Nro | Ejecutor | Paso o Actividad (`CU-INC-01`) |
| --- | --- | --- |
| 1 | Actor | Solicita iniciar la carga de un archivo indicando recurso destino, finalidad, nombre y tamaño. |
| 2 | Sistema | Verifica permisos del actor sobre el recurso y comprueba los límites iniciales de tamaño y tipo (`RF-10.1`). |
| 3 | Sistema | Autoriza la transferencia hacia el almacenamiento privado y recibe el archivo. |
| 4 | Sistema | Comprueba existencia física, tamaño real, contenido/formato real (sin confiar solo en la extensión del nombre) e integridad estructural (`RF-02.2`, `RF-10.2`). |
| 5 | Sistema | Habilita el archivo y retorna su referencia identificable al caso de uso base. |
| **4a** | Sistema | **Alternativa — Archivo corrupto, truncado o no admitido:** Rechaza el archivo, no lo habilita para ningún proceso y explica el motivo al usuario. |

---

<a id="cu-inc-02"></a>
### CU-INC-02 Ejecutar matching compatible (`<<include>>`)

| Campo | Contenido |
| --- | --- |
| **Identificador y nombre** | `CU-INC-02` Ejecutar matching compatible |
| **Relación UML** | Incluido (`<<include>>`) obligatoriamente por [CU-01](#cu-01) al confirmar la publicación de una solicitud. |
| **Actores** | Sistema; Servicio de Mapas; Makers elegibles (notificados). |
| **Requisitos relacionados** | [F07](/3daltoque-docs/analisis/funcionalidades/#f07), [F08](/3daltoque-docs/analisis/funcionalidades/#f08), [F14](/3daltoque-docs/analisis/funcionalidades/#f14), [RF-01.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2), [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RF-03.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-2), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RNF-02](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-02). |
| **Precondición** | Solicitud `ABIERTA` con archivo STL habilitado, parámetros técnicos y ubicación de referencia confirmada. |
| **Postcondición** | Lote acotado de makers invitados persistido y notificaciones de invitación registradas. |

| Nro | Ejecutor | Paso o Actividad (`CU-INC-02`) |
| --- | --- | --- |
| 1 | Sistema | Toma los requerimientos técnicos de la solicitud (material, dimensiones, urgencia) y la ubicación de referencia del Cliente. |
| 2 | Sistema | Filtra makers que cumplan simultáneamente: (a) perfil habilitado y disponible, (b) **membresía o beneficio gratuito vigente** según la hora del servidor (`RF-12.10`), (c) compatibilidad técnica de material y dimensiones (`RF-01.2`) y (d) presencia dentro del radio geográfico configurado (`PD-04`). |
| 3 | Sistema | Ordena los candidatos compatibles y selecciona un grupo reducido respetando el tope máximo de destinatarios por ronda (`PD-04`). |
| 4 | Sistema | Registra las invitaciones trazables y envía los avisos a cada Maker seleccionado (`RF-03.1`, `RF-07.1`). |
| **2a** | Sistema | **Alternativa — Sin candidatos compatibles:** Registra el resultado vacío e informa al caso base `CU-01` para ofrecer ajuste o ampliación de búsqueda. |

---

<a id="cu-inc-03"></a>
### CU-INC-03 Verificar notificación de pago (`<<include>>`)

| Campo | Contenido |
| --- | --- |
| **Identificador y nombre** | `CU-INC-03` Verificar notificación de pago |
| **Relación UML** | Incluido (`<<include>>`) obligatoriamente por [CU-11](#cu-11) para acreditar el período de membresía. |
| **Actores** | Mercado Pago (o adaptador simulado en entorno autorizado); Sistema. |
| **Requisitos relacionados** | [F11](/3daltoque-docs/analisis/funcionalidades/#f11), [RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.8](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8), [RF-12.14](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-14), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-09](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-09). |
| **Precondición** | Existencia de una compra de abono registrada y recepción de notificación webhook o consulta de conciliación al proveedor. |
| **Postcondición** | Notificación persistida y contrastada con el proveedor; concesión idempotente de como máximo un período mensual por compra pagada. |

| Nro | Ejecutor | Paso o Actividad (`CU-INC-03`) |
| --- | --- | --- |
| 1 | Mercado Pago | Envía la notificación webhook de pago al backend de 3DAltoque. |
| 2 | Sistema | Persiste el evento recibido, valida su autenticidad/contexto y consulta el estado real del pago en el proveedor (`RF-12.6`). |
| 3 | Sistema | Comprueba que el modo (`REAL` vs. `SIMULADO`), el importe, la moneda y la referencia coincidan con la `CompraMembresia` y que esta no haya concedido ya su período (`RF-12.8`, `RF-12.14`). |
| 4 | Sistema | En una transacción atómica e idempotente: marca el pago como `VERIFICADO`, la compra como `PAGADA` y crea un único `PeriodoAcceso` mensual para el Maker. |
| **2a / 3a** | Sistema | **Alternativa — Notificación inválida, pago no aprobado o evento repetido:** Si la verificación falla, rechaza la acreditación y registra el incidente; si el pago ya había sido procesado, responde de forma idempotente sin duplicar el período (`RNF-09`). |

---

<a id="cu-ext-01"></a>
### CU-EXT-01 Calcular estimación orientativa (`<<extend>>`)

| Campo | Contenido |
| --- | --- |
| **Identificador y nombre** | `CU-EXT-01` Calcular estimación orientativa |
| **Relación UML** | Extiende (`<<extend>>`) a [CU-01](#cu-01) en el paso 8 cuando el método adoptado en `PD-03` dispone de datos suficientes. |
| **Actores** | Sistema de análisis; Cliente. |
| **Requisitos relacionados** | [F06](/3daltoque-docs/analisis/funcionalidades/#f06), [RF-02.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-5), [RNF-16](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-16). |
| **Precondición** | Archivo STL habilitado por `CU-INC-01` y parámetros básicos cargados. |
| **Postcondición** | Importe o rango orientativo presentado con moneda y supuestos explícitos. |

| Nro | Ejecutor | Paso o Actividad (`CU-EXT-01`) |
| --- | --- | --- |
| 1 | Sistema | Analiza las magnitudes geométricas del archivo STL habilitado junto con material, escala y cantidad. |
| 2 | Sistema | Calcula el importe o rango orientativo y almacena los supuestos utilizados. |
| 3 | Sistema | Muestra la estimación al Cliente aclarando que es una referencia inicial y que cada Maker definirá el precio y plazo en su oferta (`RF-02.5`). |

---

<a id="cu-ext-02"></a>
### CU-EXT-02 Conversar en el pedido (`<<extend>>`)

| Campo | Contenido |
| --- | --- |
| **Identificador y nombre** | `CU-EXT-02` Conversar en el pedido |
| **Relación UML** | Extiende (`<<extend>>`) a [CU-04](#cu-04), [CU-05](#cu-05) y [CU-06](#cu-06) durante la vida de un pedido confirmado. |
| **Actores** | Cliente y Maker titulares del pedido. |
| **Requisitos relacionados** | [F13](/3daltoque-docs/analisis/funcionalidades/#f13), [F14](/3daltoque-docs/analisis/funcionalidades/#f14), [F23](/3daltoque-docs/analisis/funcionalidades/#f23), [F24](/3daltoque-docs/analisis/funcionalidades/#f24), [RF-05.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-1), [RF-05.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2), [RF-11.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10). |
| **Precondición** | Pedido confirmado y usuario autenticado como Cliente o Maker titular del pedido. |
| **Postcondición** | Mensaje (y adjunto validado por `CU-INC-01`, si aplica) persistido sin duplicados y sincronizado entre ambos canales. |

| Nro | Ejecutor | Paso o Actividad (`CU-EXT-02`) |
| --- | --- | --- |
| 1 | Participante | Abre la conversación del pedido (`WEB-CHAT-01` / `MOB-CHAT-01`), escribe el mensaje (y opcionalmente adjunta un archivo validado mediante `CU-INC-01`) y lo envía. |
| 2 | Sistema | Valida que el emisor sea participante del pedido, controla la referencia de envío para evitar duplicados en reintentos, persiste el mensaje y confirma el estado `ENVIADO` (`RF-05.1`, `RF-05.2`). |
| 3 | Sistema | Sincroniza el mensaje hacia el destinatario (`RF-11.2`) y registra una notificación si corresponde (`RF-07.1`). |

---

<a id="cu-ext-03"></a>
### CU-EXT-03 Registrar observaciones (`<<extend>>`)

| Campo | Contenido |
| --- | --- |
| **Identificador y nombre** | `CU-EXT-03` Registrar observaciones |
| **Relación UML** | Extiende (`<<extend>>`) a [CU-05](#cu-05) en el paso 3a cuando el Cliente observa defectos en la evidencia de la revisión. |
| **Actores** | Cliente del pedido; Maker del pedido (notificado). |
| **Requisitos relacionados** | [F12](/3daltoque-docs/analisis/funcionalidades/#f12), [F14](/3daltoque-docs/analisis/funcionalidades/#f14), [F22](/3daltoque-docs/analisis/funcionalidades/#f22), [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3), [RNF-05](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-05), [RNF-06](/3daltoque-docs/analisis/requisitos/no-funcionales/#rnf-06). |
| **Precondición** | Revisión vigente en estado `PENDIENTE_REVISION`. |
| **Postcondición** | `DecisionRevision` registrada como `OBSERVADA` con detalle de observaciones; entrega mantenida inhabilitada y Maker notificado para corrección en `CU-04` o escalamiento según `PD-07`. |

| Nro | Ejecutor | Paso o Actividad (`CU-EXT-03`) |
| --- | --- | --- |
| 1 | Cliente | Selecciona "Registrar observaciones" sobre la revisión vigente e ingresa el detalle de los problemas detectados en la evidencia. |
| 2 | Sistema | Comprueba que el comentario de observación no esté vacío y registra la `DecisionRevision` con estado `OBSERVADA`, vinculada a la revisión, evidencia, actor y fecha (`RF-06.3`). |
| 3 | Sistema | Actualiza la revisión a `OBSERVADA` y el pedido a `CON_OBSERVACIONES`, manteniendo bloqueada la coordinación de entrega (`CU-06`) y notificando al Maker para presentar una nueva revisión en `CU-04` o dialogar por `CU-EXT-02`. |
