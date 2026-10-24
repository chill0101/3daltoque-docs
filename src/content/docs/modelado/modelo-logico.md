---
title: "Modelo lógico y diccionario de datos"
---

# Modelo lógico y diccionario de datos

Versión 2.0-borrador. Fecha: 14 de octubre de 2026.

El catálogo estructurado `catalogo.json` contiene **50 tablas y 460 columnas**. Este diccionario desarrolla sus columnas, claves, relaciones y reglas. [ADR-002](../decisiones/ADR-002-modelo-comercial-membresias.md) separa los pedidos de impresión de las compras de membresía. PostgreSQL es la base prevista; PostGIS y el ORM requieren confirmación de implementación.

## Invariantes

- Un pedido conserva la oferta y sus condiciones aceptadas; no depende de un pago a 3DAltoque.
- El cliente paga la impresión directamente al maker, por fuera del procesamiento de la plataforma.
- Una compra de membresía conserva precio, moneda, duración y condiciones del plan versionado.
- Un pago del abono confirmado puede conceder como máximo un período de acceso por compra.
- Prueba general y prueba fundadora son alternativas: un único beneficio inicial de 30 o 90 días totales, según la política aplicable.
- El reloj del servidor y los períodos vigentes determinan acceso a trabajos nuevos; el vencimiento no impide terminar pedidos existentes.
- No se implementan saldos del maker, deuda por comisiones, split, custodia ni transferencias de pedidos.

## Convenciones

PK: clave primaria. UQ: restricción de unicidad. FK: clave foránea. Las columnas obligatorias se traducen a NOT NULL. Los tipos de estado requieren acordar valores, transiciones y restricciones con los flujos; la implementación debe conservar las reglas de transición documentadas. Fechas de eventos en UTC y presentación según zona del usuario. Los intervalos de acceso se interpretan como [inicio, fin). La renovación anticipada y el cálculo de meses/días se cierran antes de implementar.

Las claves compuestas de pertenencia deben impedir asociaciones cruzadas entre usuarios, solicitudes, ofertas, pedidos y compras. No se borran acuerdos o registros financieros por cascada sin política aprobada.

## Índice

- [usuarios](#usuarios)
- [usuario_roles](#usuario-roles)
- [clientes](#clientes)
- [makers](#makers)
- [sesiones](#sesiones)
- [ubicaciones](#ubicaciones)
- [impresoras](#impresoras)
- [materiales](#materiales)
- [capacidades_impresora](#capacidades-impresora)
- [archivos](#archivos)
- [analisis_archivos](#analisis-archivos)
- [solicitudes](#solicitudes)
- [solicitud_versiones](#solicitud-versiones)
- [rondas_busqueda](#rondas-busqueda)
- [invitaciones_maker](#invitaciones-maker)
- [estimaciones](#estimaciones)
- [ofertas](#ofertas)
- [oferta_versiones](#oferta-versiones)
- [pedidos](#pedidos)
- [condiciones_pedido](#condiciones-pedido)
- [historial_pedidos](#historial-pedidos)
- [revisiones_resultado](#revisiones-resultado)
- [evidencias](#evidencias)
- [decisiones_revision](#decisiones-revision)
- [puntos_encuentro](#puntos-encuentro)
- [entregas](#entregas)
- [confirmaciones_entrega](#confirmaciones-entrega)
- [cuentas_pago](#cuentas-pago)
- [pagos](#pagos)
- [intentos_pago](#intentos-pago)
- [operaciones_pago](#operaciones-pago)
- [eventos_proveedor](#eventos-proveedor)
- [reembolsos](#reembolsos)
- [conversaciones](#conversaciones)
- [participantes_conversacion](#participantes-conversacion)
- [mensajes](#mensajes)
- [mensaje_archivos](#mensaje-archivos)
- [notificaciones](#notificaciones)
- [envios_notificacion](#envios-notificacion)
- [configuraciones_versiones](#configuraciones-versiones)
- [activaciones_configuracion](#activaciones-configuracion)
- [eventos_salida](#eventos-salida)
- [trabajos](#trabajos)
- [auditoria](#auditoria)
- [casos_soporte](#casos-soporte)
- [aceptaciones_condiciones](#aceptaciones-condiciones)
- [planes_membresia_versiones](#planes-membresia-versiones)
- [membresias_maker](#membresias-maker)
- [compras_membresia](#compras-membresia)
- [periodos_membresia](#periodos-membresia)

## Tablas

<a id="usuarios"></a>
### usuarios

Identidad y contacto común; la autorización depende de roles y del recurso.

Módulo: identidad. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| email | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| email_normalizado | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| password_hash | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| nombre | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| apellido | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| telefono | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoUsuario / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| actualizado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (email_normalizado).
- Sin claves foráneas propuestas.

- No se almacena contraseña en texto plano. La normalización del identificador debe documentarse.
- Nombre/apellido/contacto obligatorios por perfil se cierran en PD-01; la nulabilidad del borrador no habilita publicar un perfil incompleto.
- Bloquear o anonimizar no elimina por cascada acuerdos ni evidencias financieras.

Trazabilidad: RF-01.1, RF-01.4, RNF-04, RNF-11.

<a id="usuario-roles"></a>
### usuario_roles

Asignaciones autorizadas de cliente, maker o administrador.

Módulo: identidad. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| usuario_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| rol | Rol / Rol | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| otorgado_por | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| otorgado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| revocado_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: usuario_id, rol.
- Sin unicidades adicionales propuestas.
- FK: (usuario_id) → usuarios (id). posee rol.
- FK: (otorgado_por) → usuarios (id). autoriza.

- La relación permite representar varios roles, pero no decide si se habilitan simultáneamente: PD-01.
- El registro público nunca otorga admin. No se elimina una asignación revocada si se necesita su historial.

Trazabilidad: RF-01.1, RNF-04.

<a id="clientes"></a>
### clientes

Datos propios del perfil que solicita impresiones.

Módulo: identidad. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| usuario_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| ubicacion_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| perfil_completo | Booleano / boolean | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: usuario_id.
- Sin unicidades adicionales propuestas.
- FK: (usuario_id) → usuarios (id). tiene perfil cliente.
- FK: (ubicacion_id) → ubicaciones (id). ubica cliente.

- El usuario debe tener rol cliente vigente para operar. La ubicación referenciada pertenece a un contexto autorizado.

Trazabilidad: RF-01.3, RF-02.3.

<a id="makers"></a>
### makers

Perfil productivo vinculado a la identidad.

Módulo: identidad. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| usuario_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| ubicacion_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| nombre_publico | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| descripcion | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| disponible | Booleano / boolean | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoPerfil / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| horario_disponibilidad | JSON / jsonb | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (usuario_id).
- FK: (usuario_id) → usuarios (id). tiene perfil maker.
- FK: (ubicacion_id) → ubicaciones (id). ubica maker.

- Operar exige rol maker vigente, perfil habilitado y capacidades declaradas.
- La vista pública utiliza zona/precisión autorizada; el domicilio exacto no se envía a terceros.
- Reputación/portfolio requieren sus reglas antes de incorporar tablas especializadas (PD-14).
- La habilitación comercial para trabajos nuevos se consulta en membresías; vencer no altera pedidos existentes.

Trazabilidad: RF-01.2, RF-03.1, RF-09.2.

<a id="sesiones"></a>
### sesiones

Sesiones y renovación revocable según la estrategia de identidad.

Módulo: identidad. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| usuario_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| token_renovacion_hash | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| expira_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| revocada_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| cliente_tipo | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (token_renovacion_hash).
- FK: (usuario_id) → usuarios (id). inicia sesión.

- El token bruto no se persiste ni se devuelve desde listados. Expiración/revocación se fijan en PD-01.
- La unicidad del hash aplica a valores presentes; cerrar una sesión no supone cierre global.

Trazabilidad: RF-01.4, RF-01.5, RNF-04.

<a id="ubicaciones"></a>
### ubicaciones

Referencia geográfica con origen, precisión y conservación explícitos.

Módulo: identidad. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| propietario_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| latitud | Coordenada / Coordenada | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| longitud | Coordenada / Coordenada | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| zona_publica | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| precision_publica | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| origen | OrigenUbicacion / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| proveedor | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| referencia_externa | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| confirmada_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| valida_hasta | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- Sin unicidades adicionales propuestas.
- FK: (propietario_id) → usuarios (id). registra ubicación.

- Latitud/longitud se guardan juntas y dentro de sus rangos; una referencia sin coordenadas válidas no sirve para matching.
- Las condiciones del proveedor determinan almacenamiento/renovación de datos externos; confirmar una ubicación no elimina esas condiciones.
- Cambios de posición generan otra referencia si una versión publicada necesita preservar su contexto. Borrado/retención se aplican según PD-12.

Trazabilidad: RF-01.3, RF-09.1, RF-09.2, RNF-11, RNF-12.

<a id="impresoras"></a>
### impresoras

Equipos y dimensiones útiles para validar compatibilidad.

Módulo: identidad. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| maker_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| nombre | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| tecnologia | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| dimension_x_mm | Decimal / numeric (precisión por definir) | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| dimension_y_mm | Decimal / numeric (precisión por definir) | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| dimension_z_mm | Decimal / numeric (precisión por definir) | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoRecurso / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- Sin unicidades adicionales propuestas.
- FK: (maker_id) → makers (id). declara impresora.

- Las dimensiones son positivas. Milímetros son la unidad interna propuesta; conversión/rotación se define en PD-02 y PD-04.
- Estado/disponibilidad no prometen reserva de capacidad ni conexión con firmware.

Trazabilidad: RF-01.2, RF-03.1.

<a id="materiales"></a>
### materiales

Catálogo de materiales declarados por makers y solicitudes.

Módulo: identidad. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| codigo | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| nombre | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| descripcion | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| activo | Booleano / boolean | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (codigo).
- Sin claves foráneas propuestas.

- No se borra un material utilizado por versiones históricas; se desactiva para nuevas selecciones.

Trazabilidad: RF-01.2, RF-02.1.

<a id="capacidades-impresora"></a>
### capacidades_impresora

Materiales y colores admitidos por un equipo.

Módulo: identidad. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| impresora_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| material_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| color | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| disponible | Booleano / boolean | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| observaciones | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (impresora_id, material_id, color).
- FK: (impresora_id) → impresoras (id). admite capacidad.
- FK: (material_id) → materiales (id). usa material.

- La unicidad lógica trata color no especificado como un único valor; la implementación de NULL se define con el motor.
- Maker se deriva de impresora, evitando un maker_id redundante que pueda contradecirla.
- La evaluación final de geometría y acabado corresponde al maker al cotizar la solicitud.

Trazabilidad: RF-01.2, RF-03.1.

<a id="archivos"></a>
### archivos

Metadatos privados de STL, fotos/videos y adjuntos.

Módulo: archivos. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| propietario_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| finalidad | FinalidadArchivo / FinalidadArchivo | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| nombre_original | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| mime_declarado | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| mime_detectado | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| tamano_bytes | Entero / integer | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| checksum | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| proveedor_almacenamiento | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| storage_key | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| version_objeto | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoArchivo / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| autorizacion_expira_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| retirar_despues_de | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| retirado_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (proveedor_almacenamiento, storage_key, version_objeto).
- FK: (propietario_id) → usuarios (id). posee archivo.

- Durante la subida se conserva NULL para tamaño o integridad todavía desconocidos.
- Habilitar requiere comprobaciones completas. Storage_key es opaca y no una URL pública.
- Una referencia usada por oferta/evidencia publicada conserva sus bytes o versión; una URL de subida no puede alterar evidencia aprobada.
- Un retiro autorizado conserva los metadatos mínimos y el historial exigidos por política.

Trazabilidad: RF-02.1, RF-02.2, RF-06.1, RF-10.1, RF-10.2, RF-10.3, RF-10.4.

<a id="analisis-archivos"></a>
### analisis_archivos

Resultados versionados del análisis técnico de un archivo.

Módulo: archivos. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| archivo_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| analizador | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| version_analizador | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoAnalisis / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| unidad_declarada | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| dimension_x_mm | Decimal / numeric (precisión por definir) | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| dimension_y_mm | Decimal / numeric (precisión por definir) | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| dimension_z_mm | Decimal / numeric (precisión por definir) | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| volumen_geometrico_mm3 | Decimal / numeric (precisión por definir) | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| advertencias | JSON / jsonb | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| motivo_error | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- Sin unicidades adicionales propuestas.
- FK: (archivo_id) → archivos (id). tiene análisis.

- Las dimensiones y el volumen desconocidos se conservan en NULL. La unidad debe confirmarse antes de interpretar la escala.
- El resultado refiere al objeto/checksum analizado y no se reescribe como si otro analizador hubiera producido el mismo informe.
- El análisis distingue volumen geométrico, consumo estimado de material e imprimibilidad, según el perfil y las condiciones de fabricación.

Trazabilidad: RF-02.2, RF-02.5, RNF-16.

<a id="solicitudes"></a>
### solicitudes

Identidad estable de la necesidad del cliente.

Módulo: cotizaciones. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| cliente_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| version_actual | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoSolicitud / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| expira_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- Sin unicidades adicionales propuestas.
- FK: (cliente_id) → clientes (usuario_id). crea solicitud.
- FK: (id, version_actual) → solicitud_versiones (solicitud_id, numero). selecciona versión actual.

- La versión actual pertenece a la solicitud; el alta inicial conserva solicitud y primera versión en una transacción.
- El vencimiento solo se utiliza si existe una política aprobada; no tiene valor de negocio por defecto.
- Cambios después de enviar requieren PD-05 y pueden invalidar invitaciones/ofertas, sin reescribir versiones.

Trazabilidad: RF-02.3, RF-02.4, RF-03.1.

<a id="solicitud-versiones"></a>
### solicitud_versiones

Especificación preservada para cotizar una versión concreta.

Módulo: cotizaciones. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| solicitud_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| numero | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| archivo_stl_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| material_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| ubicacion_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| titulo | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| descripcion | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| color | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| cantidad | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| unidad_declarada | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| urgencia | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| presupuesto_referencia | Monto / Monto | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| moneda_referencia | Moneda / Moneda | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| publicada_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: solicitud_id, numero.
- Sin unicidades adicionales propuestas.
- FK: (solicitud_id) → solicitudes (id). conserva versión.
- FK: (archivo_stl_id) → archivos (id). aporta STL.
- FK: (material_id) → materiales (id). requiere material.
- FK: (ubicacion_id) → ubicaciones (id). orienta búsqueda.

- Número y cantidad positivos. Campos incompletos solo se admiten en borrador; publicar exige los definidos en PD-02.
- Archivo, ubicación y características publicadas no se sustituyen en la misma versión; se crea otra.
- Presupuesto/moneda de referencia se informan juntos y nunca constituyen una oferta.

Trazabilidad: RF-02.1, RF-02.3, RF-04.1.

<a id="rondas-busqueda"></a>
### rondas_busqueda

Búsqueda auditada sobre una especificación y parámetros determinados.

Módulo: cotizaciones. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| solicitud_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| solicitud_version_numero | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| numero | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| configuracion_version_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| radio_metros | Decimal / numeric (precisión por definir) | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| limite_makers | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| criterios_orden | JSON / jsonb | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoRonda / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (solicitud_id, numero).
- UQ: (id, solicitud_id).
- FK: (solicitud_id, solicitud_version_numero) → solicitud_versiones (solicitud_id, numero). busca para versión.
- FK: (configuracion_version_id) → configuraciones_versiones (id). fija reglas búsqueda.

- Radio y límite positivos, definidos conforme a la política de búsqueda PD-04.
- Los parámetros aplicados son un snapshot de búsqueda, independiente de futuras activaciones.

Trazabilidad: RF-03.1, RF-02.4, RNF-06.

<a id="invitaciones-maker"></a>
### invitaciones_maker

Destinatarios habilitados para responder una ronda.

Módulo: cotizaciones. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| ronda_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| solicitud_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| maker_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoInvitacion / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| distancia_metros | Decimal / numeric (precisión por definir) | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| respondida_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| motivo_rechazo | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (ronda_id, maker_id).
- UQ: (id, solicitud_id, maker_id).
- FK: (ronda_id, solicitud_id) → rondas_busqueda (id, solicitud_id). invita destinatario.
- FK: (maker_id) → makers (id). recibe invitación.

- Un maker aparece una vez por ronda. La solicitud redundante se conserva para verificar contexto mediante FK compuesta.
- La elegibilidad, los permisos de archivo y los plazos se comprueban al crear la invitación y nuevamente al responder.

Trazabilidad: RF-03.1, RF-03.2, RF-04.5.

<a id="estimaciones"></a>
### estimaciones

Referencia de precio calculada bajo supuestos identificados.

Módulo: cotizaciones. Estado: Condicional PD-03.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| solicitud_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| solicitud_version_numero | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| analisis_archivo_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| metodo | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| version_metodo | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| parametros | JSON / jsonb | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| monto_desde | Monto / Monto | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| monto_hasta | Monto / Monto | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| moneda | Moneda / Moneda | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoEstimacion / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| advertencias | JSON / jsonb | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- Sin unicidades adicionales propuestas.
- FK: (solicitud_id, solicitud_version_numero) → solicitud_versiones (solicitud_id, numero). estima referencia.
- FK: (analisis_archivo_id) → analisis_archivos (id). aporta medidas.

- El rango disponible cumple desde <= hasta y moneda definida; un resultado no disponible no usa precio cero ficticio.
- Una estimación no modifica precio de oferta ni confirma pedido.

Trazabilidad: RF-02.5.

<a id="ofertas"></a>
### ofertas

Identidad de la propuesta de un maker sobre una solicitud.

Módulo: cotizaciones. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| solicitud_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| maker_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| version_actual | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoOferta / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (solicitud_id, maker_id).
- UQ: (id, solicitud_id, maker_id).
- UQ: (id, solicitud_id).
- FK: (solicitud_id) → solicitudes (id). recibe oferta.
- FK: (maker_id) → makers (id). presenta oferta.
- FK: (id, version_actual) → oferta_versiones (oferta_id, numero). selecciona versión actual.

- Hay una oferta por maker/solicitud, con nuevas versiones cuando cambian condiciones.
- La versión actual existe en la misma oferta. Cambiarla no altera la versión que ya aceptó un pedido.
- Rechazar invitación no crea automáticamente una oferta.

Trazabilidad: RF-04.1, RF-04.2.

<a id="oferta-versiones"></a>
### oferta_versiones

Precio, vigencia y especificación cotizada preservados.

Módulo: cotizaciones. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| oferta_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| numero | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| solicitud_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| solicitud_version_numero | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| maker_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| invitacion_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| configuracion_financiera_version_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| precio | Monto / Monto | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| moneda | Moneda / Moneda | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| plazo_cantidad | Decimal / numeric (precisión por definir) | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| plazo_unidad | UnidadPlazo / UnidadPlazo | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| vence_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| condiciones | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| observaciones | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: oferta_id, numero.
- Sin unicidades adicionales propuestas.
- FK: (oferta_id, solicitud_id, maker_id) → ofertas (id, solicitud_id, maker_id). conserva versión.
- FK: (solicitud_id, solicitud_version_numero) → solicitud_versiones (solicitud_id, numero). cotiza especificación.
- FK: (invitacion_id, solicitud_id, maker_id) → invitaciones_maker (id, solicitud_id, maker_id). autoriza cotización.
- FK: (configuracion_financiera_version_id) → configuraciones_versiones (id). presenta política.

- La identidad de versión es (oferta_id, numero) y permanece inmutable después de su publicación.
- La invitación y oferta corresponden al mismo maker/solicitud; además se comprueba que la ronda habilite la versión cotizada.
- Precio no negativo, plazo positivo y vencimiento posterior a creación; PD-05 define duración y unidad del plazo.
- La configuración financiera referenciada pertenece al dominio pagos y respalda las condiciones mostradas. Fijar política en oferta/aceptación es la propuesta técnica, pendiente de validar PD-10.

Trazabilidad: RF-04.1, RF-04.2, RF-04.4.

<a id="pedidos"></a>
### pedidos

Acuerdo confirmado con una versión de oferta concreta.

Módulo: pedidos. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| solicitud_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| oferta_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| oferta_version_numero | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoPedido / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| revision_actual_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| clave_aceptacion | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| confirmado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| entrega_estimada_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (solicitud_id).
- UQ: (oferta_id, oferta_version_numero).
- UQ: (id, solicitud_id).
- FK: (oferta_id, solicitud_id) → ofertas (id, solicitud_id). contrata oferta.
- FK: (oferta_id, oferta_version_numero) → oferta_versiones (oferta_id, numero). acepta versión.
- FK: (solicitud_id) → solicitudes (id). confirma pedido.
- FK: (id, revision_actual_id) → revisiones_resultado (pedido_id, id). presenta revisión actual.

- Restricciones propuestas: solicitud_id UNIQUE limita el modelo a un pedido por solicitud; las FK compuestas vinculan la versión aceptada con su oferta y solicitud.
- Cliente y maker se derivan de la solicitud y de la oferta aceptada, respectivamente.
- La aceptación, cierre de alternativas y condiciones financieras se registran en una transacción. La unicidad no valida por sí sola vigencia ni autorización.
- Repetir una clave con otro contenido produce conflicto. La versión aceptada permanece fija aunque cambie la oferta actual.

Trazabilidad: RF-04.4, RF-06.5, RNF-05.

<a id="condiciones-pedido"></a>
### condiciones_pedido

Precio y moneda del acuerdo de impresión, cuyo pago se realiza directamente entre cliente y maker.

Módulo: pedidos. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| pedido_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| precio_pieza | Monto / Monto | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| moneda | Moneda / Moneda | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| total_cliente_acordado | Monto / Monto | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| fijadas_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: pedido_id.
- Sin unicidades adicionales propuestas.
- FK: (pedido_id) → pedidos (id). fija condiciones.

- Se conservan la versión aceptada y el precio pactado para el pago directo entre cliente y maker.
- Estos importes documentan las condiciones de la oferta aceptada y el acuerdo de pago directo.

Trazabilidad: RF-04.4, RF-05.3, RF-12.15.

<a id="historial-pedidos"></a>
### historial_pedidos

Transiciones productivas registradas con actor y causa.

Módulo: pedidos. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| pedido_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| actor_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| origen_proceso | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado_anterior | EstadoPedido / text con CHECK o enum por definir | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado_nuevo | EstadoPedido / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| motivo | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| clave_operacion | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| ocurrido_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (pedido_id, clave_operacion).
- FK: (pedido_id) → pedidos (id). registra transición.
- FK: (actor_id) → usuarios (id). ejecuta transición.

- Actor o proceso identifican el origen; la transición autorizada y el historial se conservan juntos.
- Cada decisión agrega un registro al historial y conserva las decisiones anteriores.

Trazabilidad: RF-05.3, RF-06.5, RNF-06.

<a id="revisiones-resultado"></a>
### revisiones_resultado

Una presentación de resultado que conserva su conjunto de evidencias.

Módulo: pedidos. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| pedido_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| numero | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| presentada_por | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoRevision / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| comentario_maker | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| presentada_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (pedido_id, numero).
- UQ: (pedido_id, id).
- FK: (pedido_id) → pedidos (id). tiene revisión.
- FK: (presentada_por) → usuarios (id). presenta resultado.

- Presentar una revisión exige al maker del pedido y al menos una evidencia habilitada.
- Una revisión presentada fija sus evidencias; un resultado modificado genera otra revisión.
- La revisión actual del pedido pertenece al mismo pedido. No se aprueba por tiempo ni por recordatorio.

Trazabilidad: RF-06.1, RF-06.2, RF-06.4.

<a id="evidencias"></a>
### evidencias

Archivos que integran una revisión concreta.

Módulo: pedidos. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| revision_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| archivo_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| descripcion | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| orden | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (revision_id, archivo_id).
- UQ: (revision_id, orden).
- FK: (revision_id) → revisiones_resultado (id). contiene evidencia.
- FK: (archivo_id) → archivos (id). muestra objeto.

- Solo archivos habilitados, de finalidad válida y propietario autorizado.
- Después de presentar/aprobar, ni el vínculo ni los bytes se reemplazan en esa revisión.

Trazabilidad: RF-06.1, RF-10.2.

<a id="decisiones-revision"></a>
### decisiones_revision

Historial de aprobación expresa u observación del cliente.

Módulo: pedidos. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| revision_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| cliente_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| decision | DecisionRevision / DecisionRevision | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| observacion | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| clave_operacion | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| decidida_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (revision_id, cliente_id, clave_operacion).
- FK: (revision_id) → revisiones_resultado (id). recibe decisión.
- FK: (cliente_id) → clientes (usuario_id). revisa resultado.

- El actor es el cliente propietario del pedido. La aprobación requiere acción explícita sobre la revisión vigente.
- El historial admite registrar eventos; las secuencias permitidas de observar/aprobar/corregir dependen de PD-07.
- Una repetición identificada conserva el mismo efecto y no crea aprobación adicional.

Trazabilidad: RF-06.3, RF-06.4.

<a id="puntos-encuentro"></a>
### puntos_encuentro

Lugar acordado para el encuentro personal entre cliente y maker.

Módulo: pedidos. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| ubicacion_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_por | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| etiqueta | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| indicaciones | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| activo | Booleano / boolean | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- Sin unicidades adicionales propuestas.
- FK: (ubicacion_id) → ubicaciones (id). localiza encuentro.
- FK: (creado_por) → usuarios (id). propone punto.

- Lugar utilizado para encuentro personal. No hay actor comercio custodio ni estado de almacenaje en v1.
- La ubicación exacta del encuentro se comparte con sus participantes según permisos.

Trazabilidad: RF-06.6, RF-09.2.

<a id="entregas"></a>
### entregas

Coordinación y cierre físico de un pedido aprobado.

Módulo: pedidos. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| pedido_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| revision_aprobada_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| punto_encuentro_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoEntrega / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| fecha_hora_acordada | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| acordada_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| completada_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| clave_operacion_cierre | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (pedido_id).
- FK: (pedido_id) → pedidos (id). coordina entrega.
- FK: (pedido_id, revision_aprobada_id) → revisiones_resultado (pedido_id, id). sustenta entrega.
- FK: (punto_encuentro_id) → puntos_encuentro (id). acuerda lugar.

- La FK garantiza la revisión del mismo pedido; la aprobación vigente y actor se validan en la transición.
- Coordinar exige aprobación expresa. Cambiar resultado requiere tratar la aprobación/entrega conforme PD-07.
- Completar exige el mecanismo de recepción que se acuerde en PD-08.
- La recepción se registra una vez como parte del seguimiento de la entrega. El acuerdo de pago directo se conserva en las condiciones del pedido.

Trazabilidad: RF-06.6, RF-06.7, RNF-05.

<a id="confirmaciones-entrega"></a>
### confirmaciones_entrega

Acciones de validación de recepción según el mecanismo que se acuerde.

Módulo: pedidos. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| entrega_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| actor_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| mecanismo | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| verificacion_ref | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| resultado | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| clave_operacion | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| confirmada_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (entrega_id, actor_id, clave_operacion).
- FK: (entrega_id) → entregas (id). registra recepción.
- FK: (actor_id) → usuarios (id). confirma recepción.

- Los actores y el número de acciones necesarias se fijan en PD-08; la tabla no habilita cualquier mecanismo.
- Si se elige un código, su verificador se protege y no se guarda como texto público.

Trazabilidad: RF-06.7.

<a id="cuentas-pago"></a>
### cuentas_pago

Cuenta receptora propia de la plataforma para cobrar abonos de membresía.

Módulo: pagos. Estado: Modelo de fondos PD-09.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| proveedor | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| ambiente_proveedor | AmbienteProveedor / AmbienteProveedor | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| cuenta_externa_id | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| credenciales_ref | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (proveedor, ambiente_proveedor, cuenta_externa_id).
- Sin claves foráneas propuestas.

- La cuenta receptora pertenece a la plataforma y cobra su propio servicio de membresía.
- Las credenciales son referencias protegidas por entorno, nunca tokens expuestos.

Trazabilidad: RF-12.5, RF-12.6, RNF-04.

<a id="pagos"></a>
### pagos

Obligación de pago correspondiente a una compra de membresía.

Módulo: pagos. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| compra_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| modo | ModoPago / ModoPago | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| entorno_aplicacion | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| moneda | Moneda / Moneda | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| importe_debido | Monto / Monto | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoPago / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| conciliacion_estado | EstadoConciliacion / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| actualizado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (compra_id).
- FK: (compra_id) → compras_membresia (id). tiene obligación de abono.

- Una compra tiene como máximo un agregado de pago; no hay FK a pedidos.
- Importe y moneda corresponden a la compra y al contexto; se preservan modo y entorno.
- Se concede acceso únicamente tras verificar el cobro elegible y con idempotencia por compra.

Trazabilidad: RF-12.5, RF-12.6, RF-12.7, RF-12.8.

<a id="intentos-pago"></a>
### intentos_pago

Cada interacción de checkout con correlación e idempotencia local.

Módulo: pagos. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| pago_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| cuenta_pago_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| proveedor | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| ambiente_proveedor | AmbienteProveedor / AmbienteProveedor | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| modo | ModoPago / ModoPago | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| clave_operacion | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| referencia_negocio | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| referencia_checkout | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| importe_solicitado | Monto / Monto | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| moneda | Moneda / Moneda | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoIntento / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| ultimo_error | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| actualizado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (pago_id, clave_operacion).
- UQ: (referencia_negocio).
- FK: (pago_id) → pagos (id). incluye intento.
- FK: (cuenta_pago_id) → cuentas_pago (id). utiliza cuenta.

- Cada intento corresponde a una obligación de una compra de membresía.
- Cuenta receptora, entorno, modo, importe y moneda deben coincidir con la compra autorizada.
- Resultado incierto se concilia antes de repetir un cargo; una referencia de checkout no se confunde con ID de pago.

Trazabilidad: RF-12.5, RF-12.6, RF-12.7, RNF-09.

<a id="operaciones-pago"></a>
### operaciones_pago

Recursos y resultados externos del cobro de abonos, incluidos costos del proveedor y anomalías.

Módulo: pagos. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| intento_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| cuenta_pago_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| proveedor | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| ambiente_proveedor | AmbienteProveedor / AmbienteProveedor | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| tipo_recurso | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| recurso_externo_id | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| tipo_operacion | TipoOperacion / TipoOperacion | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado_proveedor | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado_local | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| importe_bruto | Monto / Monto | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| moneda | Moneda / Moneda | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| costo_proveedor_real | Monto / Monto | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| ocurrida_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| verificada_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (proveedor, ambiente_proveedor, recurso_externo_id, tipo_recurso, cuenta_pago_id).
- FK: (intento_id) → intentos_pago (id). produce operación.
- FK: (cuenta_pago_id) → cuentas_pago (id). contextualiza recurso.

- La cuenta receptora es propia de la plataforma y se conserva en el contexto de la operación.
- Cada cobro externo adicional se registra para conciliación; no concede por sí solo otro período.
- El costo de procesamiento permanece en NULL hasta obtener el dato del proveedor y corresponde al cobro del abono.

Trazabilidad: RF-12.6, RF-12.7, RF-12.12, RNF-09.

<a id="eventos-proveedor"></a>
### eventos_proveedor

Recepción durable y deduplicación de notificaciones autenticadas.

Módulo: pagos. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| cuenta_pago_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| evento_externo_id | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| tipo_evento | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| recurso_externo_id | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| operacion_pago_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado_procesamiento | EstadoTrabajo / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| payload_minimo | JSON / jsonb | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| recibido_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| procesado_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| error_procesamiento | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (cuenta_pago_id, tipo_evento, evento_externo_id).
- FK: (cuenta_pago_id) → cuentas_pago (id). recibe evento.
- FK: (operacion_pago_id) → operaciones_pago (id). actualiza recurso.

- La operación puede resolverse después de recibir el evento; su cuenta/contexto deben coincidir.
- Firma/protocolo se verifica antes de aplicar un resultado. Rechazos de seguridad pueden quedar en auditoría sin crear un evento financiero válido.
- Un evento repetido se conserva como recepción controlada sin duplicar efecto. Se limita el payload a datos necesarios, sin secretos.

Trazabilidad: RF-12.6, RNF-04, RNF-09.

<a id="reembolsos"></a>
### reembolsos

Solicitud y resultado de devolución bajo política autorizada.

Módulo: pagos. Estado: Condicional PD-07/09/10.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| pago_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| operacion_cobro_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| operacion_resultado_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| solicitado_por | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| monto | Monto / Monto | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| moneda | Moneda / Moneda | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| motivo | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| clave_operacion | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoReembolso / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (pago_id, clave_operacion).
- FK: (pago_id) → pagos (id). registra devolución.
- FK: (operacion_cobro_id) → operaciones_pago (id). origina devolución.
- FK: (operacion_resultado_id) → operaciones_pago (id). confirma resultado.
- FK: (solicitado_por) → usuarios (id). solicita devolución.

- La devolución pertenece a un cobro de membresía elegible; no devuelve el precio de una impresión.
- Monto, moneda y concurrencia se controlan antes de llamar al proveedor. La devolución se confirma después de consultar su resultado.
- Política de devolución del abono y efecto sobre acceso futuro requieren PD-09; no impiden finalizar pedidos aceptados.

Trazabilidad: RF-12.12, RNF-09.

<a id="conversaciones"></a>
### conversaciones

Contexto privado de pedido o de invitación si se adopta chat previo.

Módulo: comunicacion. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| pedido_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| invitacion_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (pedido_id).
- UQ: (invitacion_id).
- FK: (pedido_id) → pedidos (id). contextualiza chat.
- FK: (invitacion_id) → invitaciones_maker (id). contextualiza consulta.

- Exactamente un origen: pedido_id XOR invitacion_id. Pedido es el circuito base.
- Chat previo por invitación se habilita solo si se acuerda PD-06; la estructura no lo aprueba automáticamente.
- Un nuevo pedido no expone conversaciones con makers descartados.

Trazabilidad: RF-05.1, RF-11.2.

<a id="participantes-conversacion"></a>
### participantes_conversacion

Autorizaciones por usuario y conversación.

Módulo: comunicacion. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| conversacion_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| usuario_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| tipo_participacion | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| puede_enviar | Booleano / boolean | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| activo | Booleano / boolean | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| autorizado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: conversacion_id, usuario_id.
- Sin unicidades adicionales propuestas.
- FK: (conversacion_id) → conversaciones (id). habilita participante.
- FK: (usuario_id) → usuarios (id). participa.

- Solo participantes coherentes con el pedido/invitación o intervención aprobada en PD-06/14.
- Revocar acceso no borra la autoría de mensajes existentes.

Trazabilidad: RF-05.1, RNF-04.

<a id="mensajes"></a>
### mensajes

Contenido persistido e identificador de reenvío.

Módulo: comunicacion. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| conversacion_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| remitente_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| clave_cliente | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| texto | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| enviado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (conversacion_id, remitente_id, clave_cliente).
- FK: (conversacion_id) → conversaciones (id). contiene mensaje.
- FK: (conversacion_id, remitente_id) → participantes_conversacion (conversacion_id, usuario_id). autoriza autor.

- La FK comprueba pertenencia; activo/puede_enviar se validan al enviar.
- Debe existir texto o al menos un adjunto válido al confirmar la transacción.
- Se informa éxito después de persistir. La misma clave/contenido no duplica el mensaje.

Trazabilidad: RF-05.2, RF-11.2.

<a id="mensaje-archivos"></a>
### mensaje_archivos

Relación de mensajes con archivos privados.

Módulo: comunicacion. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| mensaje_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| archivo_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: mensaje_id, archivo_id.
- Sin unicidades adicionales propuestas.
- FK: (mensaje_id) → mensajes (id). adjunta referencia.
- FK: (archivo_id) → archivos (id). aporta adjunto.

- Finalidad, propietario y habilitación se verifican para esa conversación.

Trazabilidad: RF-05.2, RF-10.3.

<a id="notificaciones"></a>
### notificaciones

Avisos internos por destinatario y evento persistido.

Módulo: comunicacion. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| evento_salida_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| destinatario_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| tipo_aviso | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| titulo | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| texto | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| recurso_tipo | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| recurso_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| leida_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (evento_salida_id, destinatario_id, tipo_aviso).
- FK: (evento_salida_id) → eventos_salida (id). origina aviso.
- FK: (destinatario_id) → usuarios (id). recibe aviso.

- La aplicación valida recurso_tipo/id contra el tipo de evento, la entidad correspondiente y los permisos del destinatario.
- El aviso no cambia por sí mismo estado de pago, revisión o entrega.

Trazabilidad: RF-07.1, RF-07.4, RNF-06.

<a id="envios-notificacion"></a>
### envios_notificacion

Estado del envío externo, diferente de su entrega efectiva.

Módulo: comunicacion. Estado: Canal externo PD-11.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| notificacion_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| canal | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| destino_ref | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| proveedor | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| plantilla_version | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| referencia_externa | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoEnvio / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| intentos | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| proximo_intento_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| aceptado_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| entregado_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| ultimo_error | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (notificacion_id, canal, destino_ref).
- FK: (notificacion_id) → notificaciones (id). se distribuye.

- Canal, destino y sus permisos se habilitan según PD-11. Si se elige push, debe detallarse el registro/expiración de dispositivos antes de cerrar esa integración.
- La aceptación del envío y su entrega se registran como estados separados. Los reintentos mantienen la misma identidad y verifican si el aviso todavía corresponde.
- El destino puede ser una referencia protegida; su trazabilidad no expone contacto o tokens en registros públicos.

Trazabilidad: RF-07.3, RF-07.4, RNF-15.

<a id="configuraciones-versiones"></a>
### configuraciones_versiones

Contenido versionado y validado por dominio de configuración.

Módulo: operacion. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| dominio | DominioConfig / DominioConfig | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| numero | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| valores | JSON / jsonb | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creada_por | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| motivo | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (dominio, numero).
- FK: (creada_por) → usuarios (id). versiona configuración.

- Dominio+numero único. El contenido se valida con un esquema tipado por dominio, y es inmutable.
- Membresía admite parámetros de precio, moneda, calendario, duración de prueba y cupo fundador; búsqueda, radios y grupos; archivos, límites y conservación; avisos, canales y frecuencias.
- No se almacenan credenciales privadas en valores ni se configura una tarifa externa como si fuera controlada por la plataforma.

Trazabilidad: RNF-13.

<a id="activaciones-configuracion"></a>
### activaciones_configuracion

Vigencia auditada separada del contenido inmutable.

Módulo: operacion. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| configuracion_version_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| dominio | DominioConfig / DominioConfig | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| vigente_desde | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| vigente_hasta | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| activada_por | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| cerrada_por | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- Sin unicidades adicionales propuestas.
- FK: (configuracion_version_id) → configuraciones_versiones (id). entra en vigencia.
- FK: (activada_por) → usuarios (id). activa versión.
- FK: (cerrada_por) → usuarios (id). cierra vigencia.

- La versión pertenece al mismo dominio y el intervalo no se solapa con otro efectivo para ese dominio.
- Cerrar una vigencia se audita; no cambia el contenido ni los snapshots de pedidos.
- La implementación de exclusión de intervalos depende del motor o una operación serializada equivalente.

Trazabilidad: RNF-06, RNF-13.

<a id="eventos-salida"></a>
### eventos_salida

Outbox de hechos de negocio para avisos/tareas.

Módulo: operacion. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| tipo | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| version_contrato | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| entidad_tipo | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| entidad_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| version_entidad | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| correlacion_id | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| clave_evento | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| payload_minimo | JSON / jsonb | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| ocurrido_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado_publicacion | EstadoTrabajo / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (clave_evento).
- Sin claves foráneas propuestas.

- Se registra con la transacción del hecho de negocio; identificador estable para consumidores idempotentes.
- La aplicación valida la referencia lógica entidad_tipo/id según el contrato del evento. El payload conserva los datos autorizados por ese contrato.

Trazabilidad: RF-07.1, RF-11.2, RNF-05.

<a id="trabajos"></a>
### trabajos

Ejecuciones recuperables de análisis, avisos, recordatorios y conciliación.

Módulo: operacion. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| evento_salida_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| tipo | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| clave_deduplicacion | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| payload | JSON / jsonb | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoTrabajo / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| intentos | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| proxima_ejecucion_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| reservado_hasta | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| reservado_por | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| ultimo_error | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (tipo, clave_deduplicacion).
- FK: (evento_salida_id) → eventos_salida (id). programa trabajo.

- Reserva con vencimiento; el worker recupera tareas sin suponer ejecución exactamente una vez.
- Cada tipo valida su payload y recursos antes de ejecutar. Recordatorios comprueban revisión todavía pendiente.
- Reintento financiero incierto sigue conciliación; no crea cobros a ciegas.

Trazabilidad: RF-02.2, RF-07.4, RNF-15.

<a id="auditoria"></a>
### auditoria

Registro transversal append-only de acciones y cambios pertinentes.

Módulo: operacion. Estado: Base.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| actor_usuario_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| origen_proceso | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| entidad_tipo | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| entidad_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| accion | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| resultado | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| motivo | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| correlacion_id | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| datos_pertinentes | JSON / jsonb | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| ocurrido_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- Sin unicidades adicionales propuestas.
- FK: (actor_usuario_id) → usuarios (id). audita acción.

- Registro añadido con origen identificable. Identidad de entidades se resuelve con tipo/id; la referencia lógica no otorga acceso.
- Cambios de configuración, estados financieros y acciones administrativas preservan valor anterior/nuevo pertinente.
- Retención y anonimización no exponen secretos ni destruyen evidencia que deba conservarse.

Trazabilidad: RF-05.3, RF-07.2, RNF-06.

<a id="casos-soporte"></a>
### casos_soporte

Casos operativos y de moderación cuando se adopte ese alcance.

Módulo: operacion. Estado: Soporte PD-07/14.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| reportado_por | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| pedido_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| solicitud_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| pago_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| asignado_a | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| tipo | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| descripcion | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoCaso / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| resolucion | Texto / text | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| cerrado_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- Sin unicidades adicionales propuestas.
- FK: (reportado_por) → usuarios (id). reporta caso.
- FK: (pedido_id) → pedidos (id). involucra pedido.
- FK: (solicitud_id) → solicitudes (id). involucra solicitud.
- FK: (pago_id) → pagos (id). involucra pago.
- FK: (asignado_a) → usuarios (id). atiende caso.

- Si hay varias referencias, describen el mismo contexto; la asignación requiere permisos de soporte.
- Cada resolución utiliza los casos de uso autorizados para devolver un abono, aprobar una pieza o completar una entrega, con sus respectivas precondiciones.
- Acciones y motivo se registran también en auditoría.

Trazabilidad: RF-07.2, RF-06.3.

<a id="aceptaciones-condiciones"></a>
### aceptaciones_condiciones

Evidencia de aceptación de una versión de condiciones cuando proceda.

Módulo: operacion. Estado: Datos reales/condiciones PD-12.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| usuario_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| documento_tipo | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| documento_version | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| documento_hash | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| referencia_documento | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| finalidad | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| aceptada_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (usuario_id, documento_tipo, documento_version, finalidad).
- FK: (usuario_id) → usuarios (id). acepta condiciones.

- La versión y el hash identifican el documento conservado por el control documental. La revisión de términos y obligaciones se registra en PD-12.
- Al cambiar condiciones se registra otra aceptación cuando lo exija la política, sin sobrescribir la anterior.

Trazabilidad: RNF-12.

<a id="planes-membresia-versiones"></a>
### planes_membresia_versiones

Versiones del único plan mensual prepago; versiones no representan niveles distintos.

Módulo: pagos. Estado: Base de membresía; diseño por revisar.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| codigo_plan | Texto / text | Sí | Un único plan comercial en v1. |
| numero | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| importe | Monto / Monto | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| moneda | Moneda / Moneda | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| periodo_unidad | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| periodo_cantidad | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| condiciones | JSON / jsonb | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| configuracion_version_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_por | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (codigo_plan, numero).
- FK: (configuracion_version_id) → configuraciones_versiones (id). aplica configuración.
- FK: (creado_por) → usuarios (id). publica versión.

- Precio, moneda y regla de calendario se acuerdan antes de publicar el plan.
- Una versión publicada no se reescribe para alterar compras anteriores.

Trazabilidad: RF-12.1, RNF-13.

<a id="membresias-maker"></a>
### membresias_maker

Registro comercial de un maker y su beneficio inicial; la habilitación efectiva se deriva de períodos y permisos.

Módulo: pagos. Estado: Base de membresía; diseño por revisar.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| maker_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| habilitado_inicial_en | FechaHora / timestamptz | No | Fecha de la primera habilitación del maker para recibir solicitudes; inicia el beneficio gratuito. |
| es_fundador | Booleano / boolean | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| fundador_configuracion_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| fundador_asignado_por | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| fundador_asignado_en | FechaHora / timestamptz | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (maker_id).
- FK: (maker_id) → makers (id). tiene membresía.
- FK: (fundador_configuracion_id) → configuraciones_versiones (id). registra programa.
- FK: (fundador_asignado_por) → usuarios (id). asigna beneficio.

- Una membresía por maker; editar el perfil no reinicia la antigüedad gratuita.
- La asignación de fundador y el consumo del cupo configurado se coordinan atómicamente.
- Cada maker recibe un único beneficio inicial: prueba general de 30 días o beneficio fundador de 90 días totales, como valores configurables.
- El distintivo no representa reputación, prioridad de matching ni participación societaria.

Trazabilidad: RF-12.2, RF-12.3, RF-12.4, RF-12.13.

<a id="compras-membresia"></a>
### compras_membresia

Compra del servicio de plataforma por el maker; conserva precio y duración del plan.

Módulo: pagos. Estado: Base de membresía; diseño por revisar.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| membresia_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| plan_version_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| importe | Monto / Monto | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| moneda | Moneda / Moneda | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| periodo_unidad | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| periodo_cantidad | Entero / integer | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| condiciones_aceptadas | JSON / jsonb | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| clave_operacion | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| modo | ModoPago / ModoPago | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| entorno_aplicacion | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoCompra / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (membresia_id, clave_operacion).
- UQ: (id, membresia_id).
- FK: (membresia_id) → membresias_maker (id). registra compra.
- FK: (plan_version_id) → planes_membresia_versiones (id). conserva plan.

- El backend fija importe y moneda desde la versión elegible del plan.
- La renovación es manual y no crea mandatos de débito recurrente.
- Una compra pendiente, el retorno del navegador o un comprobante no conceden acceso.

Trazabilidad: RF-12.5, RF-12.7, RF-12.8, RF-12.9.

<a id="periodos-membresia"></a>
### periodos_membresia

Concesiones temporales de acceso por prueba, beneficio fundador o compra confirmada.

Módulo: pagos. Estado: Base de membresía; diseño por revisar.

| Columna | Tipo lógico / SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| membresia_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| origen | OrigenAcceso / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| clave_origen | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| compra_id | UUID / uuid | No | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| configuracion_version_id | UUID / uuid | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| inicio_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| fin_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| modo | ModoPago / ModoPago | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| entorno_aplicacion | Texto / text | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| estado | EstadoPeriodo / text con CHECK o enum por definir | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |
| creado_en | FechaHora / timestamptz | Sí | Sin detalle adicional; aplicar las restricciones y reglas de esta tabla. |

- PK: id.
- UQ: (membresia_id, clave_origen).
- UQ: (compra_id).
- FK: (membresia_id) → membresias_maker (id). concede acceso.
- FK: (compra_id, membresia_id) → compras_membresia (id, membresia_id). origina período.
- FK: (configuracion_version_id) → configuraciones_versiones (id). conserva condiciones.

- inicio_en < fin_en; intervalos [inicio, fin) con reloj del servidor y fecha/hora inequívoca.
- Un único beneficio inicial general o fundador; cada compra pagada concede como máximo un período.
- Modo y entorno coinciden con el origen; una simulación nunca habilita acceso real en producción.
- La política propuesta agrega renovaciones anticipadas después del acceso vigente; la regla exacta de calendario requiere PD-10.
- El vencimiento no depende del worker de avisos y no bloquea la finalización de pedidos aceptados.

Trazabilidad: RF-12.2, RF-12.3, RF-12.8, RF-12.10, RF-12.14.

## Conceptos y persistencia

| Concepto | Tablas principales |
| --- | --- |
| Identidad y perfiles | usuarios, clientes, makers, usuario_roles |
| Capacidad productiva | impresoras, materiales, capacidades_impresora |
| Solicitud y negociación | solicitudes, solicitud_versiones, ofertas, oferta_versiones |
| Acuerdo de impresión | pedidos, condiciones_pedido, historial_pedidos |
| Resultado y recepción | revisiones_resultado, evidencias, decisiones_revision, entregas |
| Acceso comercial del maker | membresias_maker, periodos_membresia |
| Venta de la membresía | planes_membresia_versiones, compras_membresia, pagos |
| Integración de cobro | cuentas_pago (de la plataforma), intentos_pago, operaciones_pago, eventos_proveedor, reembolsos |

## Decisiones pendientes

Precio y moneda, cupo fundador, calendario de renovación, efectos de devolución del abono, elegibilidad de ofertas al vencer y perfiles habilitados: ver [pendientes](../10-pendientes.md). La implementación requiere seleccionar ORM, definir migraciones e índices físicos y comprobar las políticas de conservación y concurrencia. Las 50 tablas describen responsabilidades de persistencia dentro del monolito modular.
