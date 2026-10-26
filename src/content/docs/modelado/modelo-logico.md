---
title: "Modelo lógico y diccionario de datos"
---

# Modelo lógico y diccionario de datos

Versión 3.0. Fecha: 25 de octubre de 2026.

El [catálogo estructurado](/3daltoque-docs/documentos/b0342fb91680-catalogo.json) contiene 58 tablas y 548 columnas. El modelo cubre perfiles, capacidades, solicitudes personalizadas, catálogo del maker, negociación, pedidos, conversación, revisión, entrega, reputación y membresías. [ADR-002](/3daltoque-docs/decisiones/modelo-comercial/) define el cobro del abono; [ADR-003](/3daltoque-docs/decisiones/catalogo-y-cobertura/) incorpora productos y completa la cobertura funcional.

## Invariantes

- La oferta o publicación aceptada conserva las condiciones del pedido y sus referencias históricas.
- Un pedido de catálogo conserva configuración, cantidad, precio unitario, total y moneda de la versión vigente confirmada.
- La conversación pertenece a un pedido confirmado y a sus participantes autorizados.
- La revisión requiere aprobación expresa antes de acordar la entrega; el cliente confirma la recepción.
- La valoración requiere pedido completado y se registra una vez por autor y pedido.
- El cliente acuerda el pago de la impresión directamente con el maker.
- Cada compra de membresía conserva condiciones y concede como máximo un período de acceso verificado.
- El vencimiento comercial mantiene los pedidos existentes y sus conversaciones.

## Convenciones

PK identifica la clave primaria, UQ la unicidad y FK la referencia. Las columnas obligatorias se traducen a NOT NULL. Los importes conservan precisión decimal y moneda; las fechas se almacenan con zona y se presentan según el contexto del usuario. Las migraciones definen los CHECK de estado y las restricciones de pertenencia.

Las referencias marcadas como versión actual se comprueban al finalizar la transacción que crea el recurso y su primera versión, mediante la estrategia de restricciones diferidas documentada en la migración. Los servicios comprueban las reglas de actor, vigencia y estado que atraviesan varias tablas.

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
- [productos_maker](#productos-maker)
- [producto_versiones](#producto-versiones)
- [producto_archivos](#producto-archivos)
- [portfolio_trabajos](#portfolio-trabajos)
- [portfolio_archivos](#portfolio-archivos)
- [valoraciones](#valoraciones)
- [valoracion_criterios](#valoracion-criterios)
- [propuestas_cambio_oferta](#propuestas-cambio-oferta)
<a id="usuarios"></a>
### usuarios

Identidad y contacto común; la autorización depende de roles y del recurso.

Módulo: identidad. Concepto: Usuario.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Usuario. |
| `email` | Texto / text | Sí | Valor de email del recurso Usuario, validado con las reglas y el tipo indicados. |
| `email_normalizado` | Texto / text | Sí | Valor de email normalizado del recurso Usuario, validado con las reglas y el tipo indicados. |
| `password_hash` | Texto / text | Sí | Valor de password hash del recurso Usuario, validado con las reglas y el tipo indicados. |
| `nombre` | Texto / text | No | Nombre descriptivo del recurso según su finalidad y visibilidad. |
| `apellido` | Texto / text | No | Valor de apellido del recurso Usuario, validado con las reglas y el tipo indicados. |
| `telefono` | Texto / text | No | Valor de telefono del recurso Usuario, validado con las reglas y el tipo indicados. |
| `estado` | EstadoUsuario / text con CHECK de valores | Sí | Estado vigente de Usuario; sus cambios utilizan las transiciones autorizadas. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |
| `actualizado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento actualizado en, conservada con zona horaria. |

- PK: id.
- UQ: (email_normalizado).

- No se almacena contraseña en texto plano. La normalización del identificador debe documentarse.
- Nombre/apellido/contacto obligatorios por perfil se cierran en PD-01; la nulabilidad del borrador no habilita publicar un perfil incompleto.
- Bloquear o anonimizar no elimina por cascada acuerdos ni evidencias financieras.

Trazabilidad: [RF-01.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-1), [RF-01.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-4), RNF-04, RNF-11.

<a id="usuario-roles"></a>
### usuario_roles

Asignaciones autorizadas de cliente, maker o administrador.

Módulo: identidad. Concepto: RolUsuario.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `usuario_id` | UUID / uuid | Sí | Referencia a usuarios para posee rol. |
| `rol` | Rol / text con CHECK de valores | Sí | Valor de rol del recurso RolUsuario, validado con las reglas y el tipo indicados. |
| `otorgado_por` | UUID / uuid | No | Referencia a usuarios para autoriza. |
| `otorgado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento otorgado en, conservada con zona horaria. |
| `revocado_en` | FechaHora / timestamptz | No | Fecha del servidor del evento revocado en, conservada con zona horaria. |

- PK: usuario_id, rol.
- FK: (usuario_id) → usuarios (id). posee rol.
- FK: (otorgado_por) → usuarios (id). autoriza.

- La relación permite representar varios roles, pero no decide si se habilitan simultáneamente: PD-01.
- El registro público nunca otorga admin. No se elimina una asignación revocada si se necesita su historial.

Trazabilidad: [RF-01.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-1), RNF-04.

<a id="clientes"></a>
### clientes

Datos propios del perfil que solicita impresiones.

Módulo: identidad. Concepto: PerfilCliente.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `usuario_id` | UUID / uuid | Sí | Referencia a usuarios para tiene perfil cliente. |
| `ubicacion_id` | UUID / uuid | No | Referencia a ubicaciones para ubica cliente. |
| `perfil_completo` | Booleano / boolean | Sí | Valor de perfil completo del recurso PerfilCliente, validado con las reglas y el tipo indicados. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: usuario_id.
- FK: (usuario_id) → usuarios (id). tiene perfil cliente.
- FK: (ubicacion_id) → ubicaciones (id). ubica cliente.

- El usuario debe tener rol cliente vigente para operar. La ubicación referenciada pertenece a un contexto autorizado.

Trazabilidad: [RF-01.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-3), [RF-02.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-3).

<a id="makers"></a>
### makers

Perfil productivo vinculado a la identidad.

Módulo: identidad. Concepto: Maker.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Maker. |
| `usuario_id` | UUID / uuid | Sí | Referencia a usuarios para tiene perfil maker. |
| `ubicacion_id` | UUID / uuid | No | Referencia a ubicaciones para ubica maker. |
| `nombre_publico` | Texto / text | Sí | Nombre descriptivo del recurso según su finalidad y visibilidad. |
| `descripcion` | Texto / text | No | Texto de descripcion del recurso, sujeto a sus permisos y límites. |
| `disponible` | Booleano / boolean | Sí | Indicador vigente de disponible utilizado en la autorización o selección de Maker. |
| `estado` | EstadoPerfil / text con CHECK de valores | Sí | Estado vigente de Maker; sus cambios utilizan las transiciones autorizadas. |
| `horario_disponibilidad` | JSON / jsonb | No | Valor de horario disponibilidad del recurso Maker, validado con las reglas y el tipo indicados. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- UQ: (usuario_id).
- FK: (usuario_id) → usuarios (id). tiene perfil maker.
- FK: (ubicacion_id) → ubicaciones (id). ubica maker.

- Operar exige rol maker vigente, perfil habilitado y capacidades declaradas.
- La vista pública utiliza zona/precisión autorizada; el domicilio exacto no se envía a terceros.
- La habilitación comercial para trabajos nuevos se consulta en membresías; vencer no altera pedidos existentes.
- El perfil público integra zona autorizada, capacidades, productos publicados, portfolio y reputación; los originales privados se mantienen protegidos.

Trazabilidad: [RF-01.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2), [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2), [RF-13.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-3), [RF-14.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-2), [RF-15.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-2).

<a id="sesiones"></a>
### sesiones

Sesiones y renovación revocable según la estrategia de identidad.

Módulo: identidad. Concepto: Sesion.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Sesion. |
| `usuario_id` | UUID / uuid | Sí | Referencia a usuarios para inicia sesión. |
| `token_renovacion_hash` | Texto / text | No | Valor de token renovacion hash del recurso Sesion, validado con las reglas y el tipo indicados. |
| `expira_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento expira en, conservada con zona horaria. |
| `revocada_en` | FechaHora / timestamptz | No | Fecha del servidor del evento revocada en, conservada con zona horaria. |
| `cliente_tipo` | Texto / text | Sí | Valor de cliente tipo del recurso Sesion, validado con las reglas y el tipo indicados. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- UQ: (token_renovacion_hash).
- FK: (usuario_id) → usuarios (id). inicia sesión.

- El token bruto no se persiste ni se devuelve desde listados. Expiración/revocación se fijan en PD-01.
- La unicidad del hash aplica a valores presentes; cerrar una sesión no supone cierre global.

Trazabilidad: [RF-01.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-4), [RF-01.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-5), RNF-04.

<a id="ubicaciones"></a>
### ubicaciones

Referencia geográfica con origen, precisión y conservación explícitos.

Módulo: identidad. Concepto: Ubicacion.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Ubicacion. |
| `propietario_id` | UUID / uuid | Sí | Referencia a usuarios para registra ubicación. |
| `latitud` | Coordenada / numeric(10,7) | No | Valor de latitud del recurso Ubicacion, validado con las reglas y el tipo indicados. |
| `longitud` | Coordenada / numeric(10,7) | No | Valor de longitud del recurso Ubicacion, validado con las reglas y el tipo indicados. |
| `zona_publica` | Texto / text | No | Valor de zona publica del recurso Ubicacion, validado con las reglas y el tipo indicados. |
| `precision_publica` | Texto / text | No | Valor de precision publica del recurso Ubicacion, validado con las reglas y el tipo indicados. |
| `origen` | OrigenUbicacion / text con CHECK de valores | Sí | Valor de origen del recurso Ubicacion, validado con las reglas y el tipo indicados. |
| `proveedor` | Texto / text | No | Valor de proveedor del recurso Ubicacion, validado con las reglas y el tipo indicados. |
| `referencia_externa` | Texto / text | No | Valor de referencia externa del recurso Ubicacion, validado con las reglas y el tipo indicados. |
| `confirmada_en` | FechaHora / timestamptz | No | Fecha del servidor del evento confirmada en, conservada con zona horaria. |
| `valida_hasta` | FechaHora / timestamptz | No | Valor de valida hasta del recurso Ubicacion, validado con las reglas y el tipo indicados. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- FK: (propietario_id) → usuarios (id). registra ubicación.

- Latitud/longitud se guardan juntas y dentro de sus rangos; una referencia sin coordenadas válidas no sirve para matching.
- Las condiciones del proveedor determinan almacenamiento/renovación de datos externos; confirmar una ubicación no elimina esas condiciones.
- Cambios de posición generan otra referencia si una versión publicada necesita preservar su contexto. Borrado/retención se aplican según PD-12.

Trazabilidad: [RF-01.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-3), [RF-09.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-1), [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2), RNF-11, RNF-12.

<a id="impresoras"></a>
### impresoras

Equipos y dimensiones útiles para validar compatibilidad.

Módulo: identidad. Concepto: Impresora.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Impresora. |
| `maker_id` | UUID / uuid | Sí | Referencia a makers para declara impresora. |
| `nombre` | Texto / text | Sí | Nombre descriptivo del recurso según su finalidad y visibilidad. |
| `tecnologia` | Texto / text | Sí | Valor de tecnologia del recurso Impresora, validado con las reglas y el tipo indicados. |
| `dimension_x_mm` | Decimal / numeric(18,6) | Sí | Valor de dimension x mm del recurso Impresora, validado con las reglas y el tipo indicados. |
| `dimension_y_mm` | Decimal / numeric(18,6) | Sí | Valor de dimension y mm del recurso Impresora, validado con las reglas y el tipo indicados. |
| `dimension_z_mm` | Decimal / numeric(18,6) | Sí | Valor de dimension z mm del recurso Impresora, validado con las reglas y el tipo indicados. |
| `estado` | EstadoRecurso / text con CHECK de valores | Sí | Estado vigente de Impresora; sus cambios utilizan las transiciones autorizadas. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- FK: (maker_id) → makers (id). declara impresora.

- Las dimensiones son positivas. Milímetros son la unidad interna propuesta; conversión/rotación se define en PD-02 y PD-04.
- Estado/disponibilidad no prometen reserva de capacidad ni conexión con firmware.

Trazabilidad: [RF-01.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2), [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1).

<a id="materiales"></a>
### materiales

Catálogo de materiales declarados por makers y solicitudes.

Módulo: identidad. Concepto: Material.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Material. |
| `codigo` | Texto / text | Sí | Valor de codigo del recurso Material, validado con las reglas y el tipo indicados. |
| `nombre` | Texto / text | Sí | Nombre descriptivo del recurso según su finalidad y visibilidad. |
| `descripcion` | Texto / text | No | Texto de descripcion del recurso, sujeto a sus permisos y límites. |
| `activo` | Booleano / boolean | Sí | Indicador vigente de activo utilizado en la autorización o selección de Material. |

- PK: id.
- UQ: (codigo).

- No se borra un material utilizado por versiones históricas; se desactiva para nuevas selecciones.

Trazabilidad: [RF-01.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2), [RF-02.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-1).

<a id="capacidades-impresora"></a>
### capacidades_impresora

Materiales y colores admitidos por un equipo.

Módulo: identidad. Concepto: CapacidadImpresora.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de CapacidadImpresora. |
| `impresora_id` | UUID / uuid | Sí | Referencia a impresoras para admite capacidad. |
| `material_id` | UUID / uuid | Sí | Referencia a materiales para usa material. |
| `color` | Texto / text | No | Valor de color del recurso CapacidadImpresora, validado con las reglas y el tipo indicados. |
| `disponible` | Booleano / boolean | Sí | Indicador vigente de disponible utilizado en la autorización o selección de CapacidadImpresora. |
| `observaciones` | Texto / text | No | Texto de observaciones del recurso, sujeto a sus permisos y límites. |

- PK: id.
- UQ: (impresora_id, material_id, color).
- FK: (impresora_id) → impresoras (id). admite capacidad.
- FK: (material_id) → materiales (id). usa material.

- La unicidad lógica trata color no especificado como un único valor; la implementación de NULL se define con el motor.
- Maker se deriva de impresora, evitando un maker_id redundante que pueda contradecirla.
- La evaluación final de geometría y acabado corresponde al maker al cotizar la solicitud.

Trazabilidad: [RF-01.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-01-2), [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1).

<a id="archivos"></a>
### archivos

Metadatos privados de STL, fotos/videos y adjuntos.

Módulo: archivos. Concepto: Archivo.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Archivo. |
| `propietario_id` | UUID / uuid | Sí | Referencia a usuarios para posee archivo. |
| `finalidad` | FinalidadArchivo / text con CHECK de valores | Sí | Valor de finalidad del recurso Archivo, validado con las reglas y el tipo indicados. |
| `nombre_original` | Texto / text | Sí | Nombre descriptivo del recurso según su finalidad y visibilidad. |
| `mime_declarado` | Texto / text | Sí | Valor de mime declarado del recurso Archivo, validado con las reglas y el tipo indicados. |
| `mime_detectado` | Texto / text | No | Valor de mime detectado del recurso Archivo, validado con las reglas y el tipo indicados. |
| `tamano_bytes` | Entero / integer | No | Valor de tamano bytes del recurso Archivo, validado con las reglas y el tipo indicados. |
| `checksum` | Texto / text | No | Valor de checksum del recurso Archivo, validado con las reglas y el tipo indicados. |
| `proveedor_almacenamiento` | Texto / text | Sí | Valor de proveedor almacenamiento del recurso Archivo, validado con las reglas y el tipo indicados. |
| `storage_key` | Texto / text | Sí | Valor de storage key del recurso Archivo, validado con las reglas y el tipo indicados. |
| `version_objeto` | Texto / text | No | Valor de version objeto del recurso Archivo, validado con las reglas y el tipo indicados. |
| `estado` | EstadoArchivo / text con CHECK de valores | Sí | Estado vigente de Archivo; sus cambios utilizan las transiciones autorizadas. |
| `autorizacion_expira_en` | FechaHora / timestamptz | No | Fecha del servidor del evento autorizacion expira en, conservada con zona horaria. |
| `retirar_despues_de` | FechaHora / timestamptz | No | Valor de retirar despues de del recurso Archivo, validado con las reglas y el tipo indicados. |
| `retirado_en` | FechaHora / timestamptz | No | Fecha del servidor del evento retirado en, conservada con zona horaria. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- UQ: (proveedor_almacenamiento, storage_key, version_objeto).
- FK: (propietario_id) → usuarios (id). posee archivo.

- Durante la subida se conserva NULL para tamaño o integridad todavía desconocidos.
- Habilitar requiere comprobaciones completas. Storage_key es opaca y no una URL pública.
- Una referencia usada por oferta/evidencia publicada conserva sus bytes o versión; una URL de subida no puede alterar evidencia aprobada.
- Un retiro autorizado conserva los metadatos mínimos y el historial exigidos por política.

Trazabilidad: [RF-02.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-1), [RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2), [RF-06.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1), [RF-10.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-1), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2), [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3), [RF-10.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-4).

<a id="analisis-archivos"></a>
### analisis_archivos

Resultados versionados del análisis técnico de un archivo.

Módulo: archivos. Concepto: AnalisisArchivo.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de AnalisisArchivo. |
| `archivo_id` | UUID / uuid | Sí | Referencia a archivos para tiene análisis. |
| `analizador` | Texto / text | Sí | Valor de analizador del recurso AnalisisArchivo, validado con las reglas y el tipo indicados. |
| `version_analizador` | Texto / text | Sí | Valor de version analizador del recurso AnalisisArchivo, validado con las reglas y el tipo indicados. |
| `estado` | EstadoAnalisis / text con CHECK de valores | Sí | Estado vigente de AnalisisArchivo; sus cambios utilizan las transiciones autorizadas. |
| `unidad_declarada` | Texto / text | No | Valor de unidad declarada del recurso AnalisisArchivo, validado con las reglas y el tipo indicados. |
| `dimension_x_mm` | Decimal / numeric(18,6) | No | Valor de dimension x mm del recurso AnalisisArchivo, validado con las reglas y el tipo indicados. |
| `dimension_y_mm` | Decimal / numeric(18,6) | No | Valor de dimension y mm del recurso AnalisisArchivo, validado con las reglas y el tipo indicados. |
| `dimension_z_mm` | Decimal / numeric(18,6) | No | Valor de dimension z mm del recurso AnalisisArchivo, validado con las reglas y el tipo indicados. |
| `volumen_geometrico_mm3` | Decimal / numeric(18,6) | No | Valor de volumen geometrico mm3 del recurso AnalisisArchivo, validado con las reglas y el tipo indicados. |
| `advertencias` | JSON / jsonb | No | Valor de advertencias del recurso AnalisisArchivo, validado con las reglas y el tipo indicados. |
| `motivo_error` | Texto / text | No | Valor de motivo error del recurso AnalisisArchivo, validado con las reglas y el tipo indicados. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- FK: (archivo_id) → archivos (id). tiene análisis.

- Las dimensiones y el volumen desconocidos se conservan en NULL. La unidad debe confirmarse antes de interpretar la escala.
- El resultado refiere al objeto/checksum analizado y no se reescribe como si otro analizador hubiera producido el mismo informe.
- El análisis distingue volumen geométrico, consumo estimado de material e imprimibilidad, según el perfil y las condiciones de fabricación.

Trazabilidad: [RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2), [RF-02.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-5), RNF-16.

<a id="solicitudes"></a>
### solicitudes

Identidad estable de la necesidad del cliente.

Módulo: cotizaciones. Concepto: Solicitud.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Solicitud. |
| `cliente_id` | UUID / uuid | Sí | Referencia a clientes para crea solicitud. |
| `version_actual` | Entero / integer | Sí | Referencia a solicitud_versiones para selecciona versión actual. |
| `estado` | EstadoSolicitud / text con CHECK de valores | Sí | Estado vigente de Solicitud; sus cambios utilizan las transiciones autorizadas. |
| `expira_en` | FechaHora / timestamptz | No | Fecha del servidor del evento expira en, conservada con zona horaria. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |
| `tipo` | TipoSolicitud / text con CHECK de valores | Sí | Personalizada o catálogo; determina archivo, búsqueda y origen del acuerdo. |

- PK: id.
- UQ: (id, cliente_id).
- FK: (cliente_id) → clientes (usuario_id). crea solicitud.
- FK: (id, version_actual) → solicitud_versiones (solicitud_id, numero). selecciona versión actual. Comprobación diferida de la referencia actual.

- La versión actual pertenece a la solicitud; el alta inicial conserva solicitud y primera versión en una transacción.
- El vencimiento solo se utiliza si existe una política aprobada; no tiene valor de negocio por defecto.
- Cambios después de enviar requieren PD-05 y pueden invalidar invitaciones/ofertas, sin reescribir versiones.

Trazabilidad: [RF-02.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-3), [RF-02.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-4), [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RF-13.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-4).

<a id="solicitud-versiones"></a>
### solicitud_versiones

Especificación preservada para cotizar una versión concreta.

Módulo: cotizaciones. Concepto: VersionSolicitud.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `solicitud_id` | UUID / uuid | Sí | Referencia a solicitudes para conserva versión. |
| `numero` | Entero / integer | Sí | Número positivo de versión dentro del recurso. |
| `archivo_stl_id` | UUID / uuid | No | Referencia a archivos para aporta STL. |
| `material_id` | UUID / uuid | No | Referencia a materiales para requiere material. |
| `ubicacion_id` | UUID / uuid | No | Referencia a ubicaciones para orienta búsqueda. |
| `titulo` | Texto / text | Sí | Nombre descriptivo del recurso según su finalidad y visibilidad. |
| `descripcion` | Texto / text | No | Texto de descripcion del recurso, sujeto a sus permisos y límites. |
| `color` | Texto / text | No | Valor de color del recurso VersionSolicitud, validado con las reglas y el tipo indicados. |
| `cantidad` | Entero / integer | Sí | Cantidad validada según el contexto y las reglas de solicitud_versiones. |
| `unidad_declarada` | Texto / text | No | Valor de unidad declarada del recurso VersionSolicitud, validado con las reglas y el tipo indicados. |
| `urgencia` | Texto / text | No | Valor de urgencia del recurso VersionSolicitud, validado con las reglas y el tipo indicados. |
| `presupuesto_referencia` | Monto / numeric(18,2) | No | Valor de presupuesto referencia del recurso VersionSolicitud, validado con las reglas y el tipo indicados. |
| `moneda_referencia` | Moneda / char(3) | No | Valor de moneda referencia del recurso VersionSolicitud, validado con las reglas y el tipo indicados. |
| `publicada_en` | FechaHora / timestamptz | No | Fecha del servidor del evento publicada en, conservada con zona horaria. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |
| `producto_id` | UUID / uuid | No | Producto elegido para una solicitud de catálogo. |
| `producto_version_numero` | Entero / integer | No | Versión publicada del producto elegida por el cliente. |

- PK: solicitud_id, numero.
- FK: (solicitud_id) → solicitudes (id). conserva versión.
- FK: (archivo_stl_id) → archivos (id). aporta STL.
- FK: (material_id) → materiales (id). requiere material.
- FK: (ubicacion_id) → ubicaciones (id). orienta búsqueda.
- FK: (producto_id, producto_version_numero) → producto_versiones (producto_id, numero). elige versión de producto.

- Número y cantidad positivos. Campos incompletos solo se admiten en borrador; publicar exige los definidos en PD-02.
- Archivo, ubicación y características publicadas no se sustituyen en la misma versión; se crea otra.
- Presupuesto/moneda de referencia se informan juntos y nunca constituyen una oferta.
- Personalizada exige STL habilitado y unidad declarada; catálogo exige producto y versión y toma su configuración conservada.
- El pedido de catálogo utiliza un único maker y conserva la cantidad confirmada; el precio publicado se obtiene en el backend.

Trazabilidad: [RF-02.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-1), [RF-02.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-3), [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1), [RF-13.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-4).

<a id="rondas-busqueda"></a>
### rondas_busqueda

Búsqueda auditada sobre una especificación y parámetros determinados.

Módulo: cotizaciones. Concepto: RondaBusqueda.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de RondaBusqueda. |
| `solicitud_id` | UUID / uuid | Sí | Referencia a solicitud_versiones para busca para versión. |
| `solicitud_version_numero` | Entero / integer | Sí | Referencia a solicitud_versiones para busca para versión. |
| `numero` | Entero / integer | Sí | Número positivo de versión dentro del recurso. |
| `configuracion_version_id` | UUID / uuid | Sí | Referencia a configuraciones_versiones para fija reglas búsqueda. |
| `radio_metros` | Decimal / numeric(18,6) | Sí | Valor de radio metros del recurso RondaBusqueda, validado con las reglas y el tipo indicados. |
| `limite_makers` | Entero / integer | Sí | Valor de limite makers del recurso RondaBusqueda, validado con las reglas y el tipo indicados. |
| `criterios_orden` | JSON / jsonb | Sí | Valor de criterios orden del recurso RondaBusqueda, validado con las reglas y el tipo indicados. |
| `estado` | EstadoRonda / text con CHECK de valores | Sí | Estado vigente de RondaBusqueda; sus cambios utilizan las transiciones autorizadas. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- UQ: (solicitud_id, numero).
- UQ: (id, solicitud_id).
- FK: (solicitud_id, solicitud_version_numero) → solicitud_versiones (solicitud_id, numero). busca para versión.
- FK: (configuracion_version_id) → configuraciones_versiones (id). fija reglas búsqueda.

- Radio y límite positivos, definidos conforme a la política de búsqueda PD-04.
- Los parámetros aplicados son un snapshot de búsqueda, independiente de futuras activaciones.

Trazabilidad: [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RF-02.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-4), RNF-06.

<a id="invitaciones-maker"></a>
### invitaciones_maker

Destinatarios habilitados para responder una ronda.

Módulo: cotizaciones. Concepto: InvitacionMaker.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de InvitacionMaker. |
| `ronda_id` | UUID / uuid | Sí | Referencia a rondas_busqueda para invita destinatario. |
| `solicitud_id` | UUID / uuid | Sí | Referencia a rondas_busqueda para invita destinatario. |
| `maker_id` | UUID / uuid | Sí | Referencia a makers para recibe invitación. |
| `estado` | EstadoInvitacion / text con CHECK de valores | Sí | Estado vigente de InvitacionMaker; sus cambios utilizan las transiciones autorizadas. |
| `distancia_metros` | Decimal / numeric(18,6) | No | Valor de distancia metros del recurso InvitacionMaker, validado con las reglas y el tipo indicados. |
| `respondida_en` | FechaHora / timestamptz | No | Fecha del servidor del evento respondida en, conservada con zona horaria. |
| `motivo_rechazo` | Texto / text | No | Valor de motivo rechazo del recurso InvitacionMaker, validado con las reglas y el tipo indicados. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- UQ: (ronda_id, maker_id).
- UQ: (id, solicitud_id, maker_id).
- FK: (ronda_id, solicitud_id) → rondas_busqueda (id, solicitud_id). invita destinatario.
- FK: (maker_id) → makers (id). recibe invitación.

- Un maker aparece una vez por ronda. La solicitud redundante se conserva para verificar contexto mediante FK compuesta.
- La elegibilidad, los permisos de archivo y los plazos se comprueban al crear la invitación y nuevamente al responder.

Trazabilidad: [RF-03.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-1), [RF-03.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-03-2), [RF-04.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-5).

<a id="estimaciones"></a>
### estimaciones

Referencia de precio calculada bajo supuestos identificados.

Módulo: cotizaciones. Concepto: Estimacion.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Estimacion. |
| `solicitud_id` | UUID / uuid | Sí | Referencia a solicitud_versiones para estima referencia. |
| `solicitud_version_numero` | Entero / integer | Sí | Referencia a solicitud_versiones para estima referencia. |
| `analisis_archivo_id` | UUID / uuid | No | Referencia a analisis_archivos para aporta medidas. |
| `metodo` | Texto / text | Sí | Valor de metodo del recurso Estimacion, validado con las reglas y el tipo indicados. |
| `version_metodo` | Texto / text | Sí | Valor de version metodo del recurso Estimacion, validado con las reglas y el tipo indicados. |
| `parametros` | JSON / jsonb | Sí | Valor de parametros del recurso Estimacion, validado con las reglas y el tipo indicados. |
| `monto_desde` | Monto / numeric(18,2) | No | Importe decimal conservado con su moneda y el contexto de estimaciones. |
| `monto_hasta` | Monto / numeric(18,2) | No | Importe decimal conservado con su moneda y el contexto de estimaciones. |
| `moneda` | Moneda / char(3) | No | Código explícito de la moneda del importe conservado. |
| `estado` | EstadoEstimacion / text con CHECK de valores | Sí | Estado vigente de Estimacion; sus cambios utilizan las transiciones autorizadas. |
| `advertencias` | JSON / jsonb | No | Valor de advertencias del recurso Estimacion, validado con las reglas y el tipo indicados. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- FK: (solicitud_id, solicitud_version_numero) → solicitud_versiones (solicitud_id, numero). estima referencia.
- FK: (analisis_archivo_id) → analisis_archivos (id). aporta medidas.

- El rango disponible cumple desde <= hasta y moneda definida; un resultado no disponible no usa precio cero ficticio.
- Una estimación no modifica precio de oferta ni confirma pedido.

Trazabilidad: [RF-02.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-5).

<a id="ofertas"></a>
### ofertas

Identidad de la propuesta de un maker sobre una solicitud.

Módulo: cotizaciones. Concepto: Oferta.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Oferta. |
| `solicitud_id` | UUID / uuid | Sí | Referencia a solicitudes para recibe oferta. |
| `maker_id` | UUID / uuid | Sí | Referencia a makers para presenta oferta. |
| `version_actual` | Entero / integer | Sí | Referencia a oferta_versiones para selecciona versión actual. |
| `estado` | EstadoOferta / text con CHECK de valores | Sí | Estado vigente de Oferta; sus cambios utilizan las transiciones autorizadas. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- UQ: (solicitud_id, maker_id).
- UQ: (id, solicitud_id, maker_id).
- UQ: (id, solicitud_id).
- FK: (solicitud_id) → solicitudes (id). recibe oferta.
- FK: (maker_id) → makers (id). presenta oferta.
- FK: (id, version_actual) → oferta_versiones (oferta_id, numero). selecciona versión actual. Comprobación diferida de la referencia actual.

- Hay una oferta por maker/solicitud, con nuevas versiones cuando cambian condiciones.
- La versión actual existe en la misma oferta. Cambiarla no altera la versión que ya aceptó un pedido.
- Rechazar invitación no crea automáticamente una oferta.

Trazabilidad: [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1), [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2), [RF-13.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-4).

<a id="oferta-versiones"></a>
### oferta_versiones

Precio, vigencia y especificación cotizada preservados.

Módulo: cotizaciones. Concepto: VersionOferta.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `oferta_id` | UUID / uuid | Sí | Referencia a ofertas para conserva versión. |
| `numero` | Entero / integer | Sí | Número positivo de versión dentro del recurso. |
| `solicitud_id` | UUID / uuid | Sí | Referencia a ofertas para conserva versión. |
| `solicitud_version_numero` | Entero / integer | Sí | Referencia a solicitud_versiones para cotiza especificación. |
| `maker_id` | UUID / uuid | Sí | Referencia a ofertas para conserva versión. |
| `invitacion_id` | UUID / uuid | No | Referencia a invitaciones_maker para autoriza cotización. |
| `configuracion_contratacion_version_id` | UUID / uuid | Sí | Versión de las condiciones de contratación conservadas con la oferta. |
| `precio` | Monto / numeric(18,2) | Sí | Importe decimal conservado con su moneda y el contexto de oferta_versiones. |
| `moneda` | Moneda / char(3) | Sí | Código explícito de la moneda del importe conservado. |
| `plazo_cantidad` | Decimal / numeric(18,6) | Sí | Cantidad validada según el contexto y las reglas de oferta_versiones. |
| `plazo_unidad` | UnidadPlazo / text con CHECK de valores | Sí | Valor de plazo unidad del recurso VersionOferta, validado con las reglas y el tipo indicados. |
| `vence_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento vence en, conservada con zona horaria. |
| `condiciones` | Texto / text | Sí | Valor de condiciones del recurso VersionOferta, validado con las reglas y el tipo indicados. |
| `observaciones` | Texto / text | No | Texto de observaciones del recurso, sujeto a sus permisos y límites. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |
| `origen` | OrigenOferta / text con CHECK de valores | Sí | Cotización de solicitud o condiciones de producto de catálogo. |
| `producto_id` | UUID / uuid | No | Publicación de la oferta de catálogo. |
| `producto_version_numero` | Entero / integer | No | Versión de condiciones del catálogo. |
| `precio_unitario_catalogo` | Monto / numeric(18,2) | No | Importe unitario conservado para el producto. |
| `cantidad_catalogo` | Entero / integer | No | Cantidad de producto confirmada; positiva cuando el origen es catálogo. |

- PK: oferta_id, numero.
- FK: (oferta_id, solicitud_id, maker_id) → ofertas (id, solicitud_id, maker_id). conserva versión.
- FK: (solicitud_id, solicitud_version_numero) → solicitud_versiones (solicitud_id, numero). cotiza especificación.
- FK: (invitacion_id, solicitud_id, maker_id) → invitaciones_maker (id, solicitud_id, maker_id). autoriza cotización.
- FK: (configuracion_contratacion_version_id) → configuraciones_versiones (id). presenta política.
- FK: (producto_id, producto_version_numero, maker_id) → producto_versiones (producto_id, numero, maker_id). conserva condiciones del producto.

- La identidad de versión es (oferta_id, numero) y permanece inmutable después de su publicación.
- Precio no negativo, plazo positivo y vencimiento posterior a creación; PD-05 define duración y unidad del plazo.
- La cotización personalizada exige invitación del mismo maker y solicitud; el origen catálogo conserva una versión del producto del maker y admite invitacion_id NULL.
- El importe de oferta es el total del pedido. En catálogo se calcula a partir del precio unitario y la cantidad conservados.
- La configuración conservada identifica condiciones de contratación; el pago del abono corresponde a su propia compra de membresía.

Trazabilidad: [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1), [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2), [RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4), [RF-13.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-4).

<a id="pedidos"></a>
### pedidos

Acuerdo confirmado con una versión de oferta concreta.

Módulo: pedidos. Concepto: Pedido.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Pedido. |
| `solicitud_id` | UUID / uuid | Sí | Referencia a ofertas para contrata oferta. |
| `oferta_id` | UUID / uuid | Sí | Referencia a ofertas para contrata oferta. |
| `oferta_version_numero` | Entero / integer | Sí | Referencia a oferta_versiones para acepta versión. |
| `estado` | EstadoPedido / text con CHECK de valores | Sí | Estado vigente de Pedido; sus cambios utilizan las transiciones autorizadas. |
| `revision_actual_id` | UUID / uuid | No | Referencia a revisiones_resultado para presenta revisión actual. |
| `clave_aceptacion` | Texto / text | Sí | Identidad estable de la operación o referencia clave aceptacion. |
| `confirmado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento confirmado en, conservada con zona horaria. |
| `entrega_estimada_en` | FechaHora / timestamptz | No | Fecha del servidor del evento entrega estimada en, conservada con zona horaria. |
| `cliente_id` | UUID / uuid | Sí | Cliente titular, validado contra la solicitud. |
| `huella_aceptacion` | Texto / text | Sí | Huella del contenido para resolver reintentos de una misma intención. |

- PK: id.
- UQ: (solicitud_id).
- UQ: (oferta_id, oferta_version_numero).
- UQ: (id, solicitud_id).
- UQ: (cliente_id, clave_aceptacion).
- FK: (oferta_id, solicitud_id) → ofertas (id, solicitud_id). contrata oferta.
- FK: (oferta_id, oferta_version_numero) → oferta_versiones (oferta_id, numero). acepta versión.
- FK: (solicitud_id) → solicitudes (id). confirma pedido.
- FK: (id, revision_actual_id) → revisiones_resultado (pedido_id, id). presenta revisión actual. Comprobación diferida de la referencia actual.
- FK: (solicitud_id, cliente_id) → solicitudes (id, cliente_id). conserva titular del pedido.

- Restricciones propuestas: solicitud_id UNIQUE limita el modelo a un pedido por solicitud; las FK compuestas vinculan la versión aceptada con su oferta y solicitud.
- El cliente conservado coincide con la solicitud; el maker se deriva de la oferta aceptada.
- La aceptación, cierre de alternativas y condiciones de contratación se registran en una transacción. La unicidad no valida por sí sola vigencia ni autorización.
- Repetir una clave con otro contenido produce conflicto. La versión aceptada permanece fija aunque cambie la oferta actual.
- La clave y huella de aceptación identifican una intención del cliente. El mismo contenido recupera su pedido antes de revalidar una publicación que pudo cambiar.
- La confirmación directa de catálogo conserva solicitud, versión de condiciones, oferta de referencia, pedido y conversación en una transacción.

Trazabilidad: [RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4), [RF-06.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-5), RNF-05, [RF-13.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-4).

<a id="condiciones-pedido"></a>
### condiciones_pedido

Precio y moneda del acuerdo de impresión, cuyo pago se realiza directamente entre cliente y maker.

Módulo: pedidos. Concepto: CondicionesEconomicas.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `pedido_id` | UUID / uuid | Sí | Referencia a pedidos para fija condiciones. |
| `precio_pieza` | Monto / numeric(18,2) | Sí | Importe decimal conservado con su moneda y el contexto de condiciones_pedido. |
| `moneda` | Moneda / char(3) | Sí | Código explícito de la moneda del importe conservado. |
| `total_cliente_acordado` | Monto / numeric(18,2) | Sí | Valor de total cliente acordado del recurso CondicionesEconomicas, validado con las reglas y el tipo indicados. |
| `fijadas_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento fijadas en, conservada con zona horaria. |
| `producto_id` | UUID / uuid | No | Producto de origen cuando el pedido procede del catálogo. |
| `producto_version_numero` | Entero / integer | No | Versión de producto aceptada. |
| `cantidad_catalogo` | Entero / integer | No | Cantidad del producto aceptada. |
| `precio_unitario_catalogo` | Monto / numeric(18,2) | No | Precio unitario aceptado del producto. |

- PK: pedido_id.
- FK: (pedido_id) → pedidos (id). fija condiciones.
- FK: (producto_id, producto_version_numero) → producto_versiones (producto_id, numero). preserva configuración publicada.

- Se conservan la versión aceptada y el precio pactado para el pago directo entre cliente y maker.
- Estos importes documentan las condiciones de la oferta aceptada y el acuerdo de pago directo.
- Los campos de catálogo se informan juntos para ese origen y conservan el precio unitario y cantidad usados para calcular el total acordado.

Trazabilidad: [RF-04.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-4), [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RF-12.15](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-15), [RF-13.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-4).

<a id="historial-pedidos"></a>
### historial_pedidos

Transiciones productivas registradas con actor y causa.

Módulo: pedidos. Concepto: HistorialPedido.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de HistorialPedido. |
| `pedido_id` | UUID / uuid | Sí | Referencia a pedidos para registra transición. |
| `actor_id` | UUID / uuid | No | Referencia a usuarios para ejecuta transición. |
| `origen_proceso` | Texto / text | No | Valor de origen proceso del recurso HistorialPedido, validado con las reglas y el tipo indicados. |
| `estado_anterior` | EstadoPedido / text con CHECK de valores | No | Valor de estado anterior del recurso HistorialPedido, validado con las reglas y el tipo indicados. |
| `estado_nuevo` | EstadoPedido / text con CHECK de valores | Sí | Valor de estado nuevo del recurso HistorialPedido, validado con las reglas y el tipo indicados. |
| `motivo` | Texto / text | No | Texto de motivo del recurso, sujeto a sus permisos y límites. |
| `clave_operacion` | Texto / text | Sí | Identidad estable de la operación o referencia clave operacion. |
| `ocurrido_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento ocurrido en, conservada con zona horaria. |

- PK: id.
- UQ: (pedido_id, clave_operacion).
- FK: (pedido_id) → pedidos (id). registra transición.
- FK: (actor_id) → usuarios (id). ejecuta transición.

- Actor o proceso identifican el origen; la transición autorizada y el historial se conservan juntos.
- Cada decisión agrega un registro al historial y conserva las decisiones anteriores.

Trazabilidad: [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RF-06.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-5), RNF-06.

<a id="revisiones-resultado"></a>
### revisiones_resultado

Una presentación de resultado que conserva su conjunto de evidencias.

Módulo: pedidos. Concepto: RevisionResultado.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de RevisionResultado. |
| `pedido_id` | UUID / uuid | Sí | Referencia a pedidos para tiene revisión. |
| `numero` | Entero / integer | Sí | Número positivo de versión dentro del recurso. |
| `presentada_por` | UUID / uuid | Sí | Referencia a usuarios para presenta resultado. |
| `estado` | EstadoRevision / text con CHECK de valores | Sí | Estado vigente de RevisionResultado; sus cambios utilizan las transiciones autorizadas. |
| `comentario_maker` | Texto / text | No | Valor de comentario maker del recurso RevisionResultado, validado con las reglas y el tipo indicados. |
| `presentada_en` | FechaHora / timestamptz | No | Fecha del servidor del evento presentada en, conservada con zona horaria. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- UQ: (pedido_id, numero).
- UQ: (pedido_id, id).
- FK: (pedido_id) → pedidos (id). tiene revisión.
- FK: (presentada_por) → usuarios (id). presenta resultado.

- Presentar una revisión exige al maker del pedido y al menos una evidencia habilitada.
- Una revisión presentada fija sus evidencias; un resultado modificado genera otra revisión.
- La revisión actual del pedido pertenece al mismo pedido. No se aprueba por tiempo ni por recordatorio.

Trazabilidad: [RF-06.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1), [RF-06.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-2), [RF-06.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-4).

<a id="evidencias"></a>
### evidencias

Archivos que integran una revisión concreta.

Módulo: pedidos. Concepto: Evidencia.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Evidencia. |
| `revision_id` | UUID / uuid | Sí | Referencia a revisiones_resultado para contiene evidencia. |
| `archivo_id` | UUID / uuid | Sí | Referencia a archivos para muestra objeto. |
| `descripcion` | Texto / text | No | Texto de descripcion del recurso, sujeto a sus permisos y límites. |
| `orden` | Entero / integer | Sí | Valor de orden del recurso Evidencia, validado con las reglas y el tipo indicados. |

- PK: id.
- UQ: (revision_id, archivo_id).
- UQ: (revision_id, orden).
- FK: (revision_id) → revisiones_resultado (id). contiene evidencia.
- FK: (archivo_id) → archivos (id). muestra objeto.

- Solo archivos habilitados, de finalidad válida y propietario autorizado.
- Después de presentar/aprobar, ni el vínculo ni los bytes se reemplazan en esa revisión.

Trazabilidad: [RF-06.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-1), [RF-10.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-2).

<a id="decisiones-revision"></a>
### decisiones_revision

Historial de aprobación expresa u observación del cliente.

Módulo: pedidos. Concepto: DecisionRevision.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de DecisionRevision. |
| `revision_id` | UUID / uuid | Sí | Referencia a revisiones_resultado para recibe decisión. |
| `cliente_id` | UUID / uuid | Sí | Referencia a clientes para revisa resultado. |
| `decision` | DecisionRevision / text con CHECK de valores | Sí | Valor de decision del recurso DecisionRevision, validado con las reglas y el tipo indicados. |
| `observacion` | Texto / text | No | Valor de observacion del recurso DecisionRevision, validado con las reglas y el tipo indicados. |
| `clave_operacion` | Texto / text | Sí | Identidad estable de la operación o referencia clave operacion. |
| `decidida_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento decidida en, conservada con zona horaria. |

- PK: id.
- UQ: (revision_id, cliente_id, clave_operacion).
- FK: (revision_id) → revisiones_resultado (id). recibe decisión.
- FK: (cliente_id) → clientes (usuario_id). revisa resultado.

- El actor es el cliente propietario del pedido. La aprobación requiere acción explícita sobre la revisión vigente.
- El historial admite registrar eventos; las secuencias permitidas de observar/aprobar/corregir dependen de PD-07.
- Una repetición identificada conserva el mismo efecto y no crea aprobación adicional.

Trazabilidad: [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3), [RF-06.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-4).

<a id="puntos-encuentro"></a>
### puntos_encuentro

Lugar acordado para el encuentro personal entre cliente y maker.

Módulo: pedidos. Concepto: PuntoEncuentro.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de PuntoEncuentro. |
| `ubicacion_id` | UUID / uuid | Sí | Referencia a ubicaciones para localiza encuentro. |
| `creado_por` | UUID / uuid | Sí | Referencia a usuarios para propone punto. |
| `etiqueta` | Texto / text | Sí | Valor de etiqueta del recurso PuntoEncuentro, validado con las reglas y el tipo indicados. |
| `indicaciones` | Texto / text | No | Valor de indicaciones del recurso PuntoEncuentro, validado con las reglas y el tipo indicados. |
| `activo` | Booleano / boolean | Sí | Indicador vigente de activo utilizado en la autorización o selección de PuntoEncuentro. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- FK: (ubicacion_id) → ubicaciones (id). localiza encuentro.
- FK: (creado_por) → usuarios (id). propone punto.

- Lugar utilizado para encuentro personal. No hay actor comercio custodio ni estado de almacenaje en v1.
- La ubicación exacta del encuentro se comparte con sus participantes según permisos.

Trazabilidad: [RF-06.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-6), [RF-09.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-09-2).

<a id="entregas"></a>
### entregas

Coordinación y cierre físico de un pedido aprobado.

Módulo: pedidos. Concepto: Entrega.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Entrega. |
| `pedido_id` | UUID / uuid | Sí | Referencia a pedidos para coordina entrega. |
| `revision_aprobada_id` | UUID / uuid | Sí | Referencia a revisiones_resultado para sustenta entrega. |
| `punto_encuentro_id` | UUID / uuid | No | Referencia a puntos_encuentro para acuerda lugar. |
| `estado` | EstadoEntrega / text con CHECK de valores | Sí | Estado vigente de Entrega; sus cambios utilizan las transiciones autorizadas. |
| `fecha_hora_acordada` | FechaHora / timestamptz | No | Valor de fecha hora acordada del recurso Entrega, validado con las reglas y el tipo indicados. |
| `acordada_en` | FechaHora / timestamptz | No | Fecha del servidor del evento acordada en, conservada con zona horaria. |
| `completada_en` | FechaHora / timestamptz | No | Fecha del servidor del evento completada en, conservada con zona horaria. |
| `clave_operacion_cierre` | Texto / text | No | Identidad estable de la operación o referencia clave operacion cierre. |
| `version` | Entero / integer | Sí | Versión de la propuesta y acuerdo de encuentro. |
| `propuesta_por` | UUID / uuid | No | Participante que propone punto y horario. |
| `aceptada_por` | UUID / uuid | No | Contraparte que acepta esa versión de la propuesta. |

- PK: id.
- UQ: (pedido_id).
- FK: (pedido_id) → pedidos (id). coordina entrega.
- FK: (pedido_id, revision_aprobada_id) → revisiones_resultado (pedido_id, id). sustenta entrega.
- FK: (punto_encuentro_id) → puntos_encuentro (id). acuerda lugar.
- FK: (propuesta_por) → usuarios (id). propone encuentro.
- FK: (aceptada_por) → usuarios (id). acepta encuentro.

- La FK garantiza la revisión del mismo pedido; la aprobación vigente y actor se validan en la transición.
- Coordinar exige aprobación expresa. Cambiar resultado requiere tratar la aprobación/entrega conforme PD-07.
- La recepción se registra una vez como parte del seguimiento de la entrega. El acuerdo de pago directo se conserva en las condiciones del pedido.
- El acuerdo conserva propuesta, versión y aceptación de la contraparte; cambiar punto u horario exige otra aceptación.
- La recepción se completa por confirmación expresa del cliente titular sobre el acuerdo y revisión vigentes.

Trazabilidad: [RF-06.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-6), [RF-06.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-7), RNF-05.

<a id="confirmaciones-entrega"></a>
### confirmaciones_entrega

Acciones de validación de recepción según el mecanismo que se acuerde.

Módulo: pedidos. Concepto: ConfirmacionRecepcion.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de ConfirmacionRecepcion. |
| `entrega_id` | UUID / uuid | Sí | Referencia a entregas para registra recepción. |
| `actor_id` | UUID / uuid | Sí | Referencia a usuarios para confirma recepción. |
| `mecanismo` | Texto / text | Sí | Valor de mecanismo del recurso ConfirmacionRecepcion, validado con las reglas y el tipo indicados. |
| `verificacion_ref` | Texto / text | No | Valor de verificacion ref del recurso ConfirmacionRecepcion, validado con las reglas y el tipo indicados. |
| `resultado` | Texto / text | Sí | Valor de resultado del recurso ConfirmacionRecepcion, validado con las reglas y el tipo indicados. |
| `clave_operacion` | Texto / text | Sí | Identidad estable de la operación o referencia clave operacion. |
| `confirmada_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento confirmada en, conservada con zona horaria. |

- PK: id.
- UQ: (entrega_id, actor_id, clave_operacion).
- FK: (entrega_id) → entregas (id). registra recepción.
- FK: (actor_id) → usuarios (id). confirma recepción.

- El cierre de v1 utiliza confirmación autenticada del cliente titular. Se conserva pedido, entrega, actor, fecha, resultado y clave estable.
- El maker registra incidentes y consulta recepción; el silencio, la evidencia de fabricación y un actor ajeno conservan pendiente el cierre.

Trazabilidad: [RF-06.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-7).

<a id="cuentas-pago"></a>
### cuentas_pago

Cuenta receptora propia de la plataforma para cobrar abonos de membresía.

Módulo: pagos. Concepto: CuentaPago.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de CuentaPago. |
| `proveedor` | Texto / text | Sí | Valor de proveedor del recurso CuentaPago, validado con las reglas y el tipo indicados. |
| `ambiente_proveedor` | AmbienteProveedor / text con CHECK de valores | Sí | Valor de ambiente proveedor del recurso CuentaPago, validado con las reglas y el tipo indicados. |
| `cuenta_externa_id` | Texto / text | Sí | Valor de cuenta externa id del recurso CuentaPago, validado con las reglas y el tipo indicados. |
| `credenciales_ref` | Texto / text | No | Valor de credenciales ref del recurso CuentaPago, validado con las reglas y el tipo indicados. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |
| `estado` | Texto / text | Sí | Estado vigente de CuentaPago; sus cambios utilizan las transiciones autorizadas. |

- PK: id.
- UQ: (proveedor, ambiente_proveedor, cuenta_externa_id).

- La cuenta receptora pertenece a la plataforma y cobra su propio servicio de membresía.
- Las credenciales son referencias protegidas por entorno, nunca tokens expuestos.

Trazabilidad: [RF-12.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-5), [RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6), RNF-04.

<a id="pagos"></a>
### pagos

Obligación de pago correspondiente a una compra de membresía.

Módulo: pagos. Concepto: Pago.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Pago. |
| `compra_id` | UUID / uuid | Sí | Referencia a compras_membresia para tiene obligación de abono. |
| `modo` | ModoPago / text con CHECK de valores | Sí | Valor de modo del recurso Pago, validado con las reglas y el tipo indicados. |
| `entorno_aplicacion` | Texto / text | Sí | Valor de entorno aplicacion del recurso Pago, validado con las reglas y el tipo indicados. |
| `moneda` | Moneda / char(3) | Sí | Código explícito de la moneda del importe conservado. |
| `importe_debido` | Monto / numeric(18,2) | Sí | Importe decimal conservado con su moneda y el contexto de pagos. |
| `estado` | EstadoPago / text con CHECK de valores | Sí | Estado vigente de Pago; sus cambios utilizan las transiciones autorizadas. |
| `conciliacion_estado` | EstadoConciliacion / text con CHECK de valores | Sí | Valor de conciliacion estado del recurso Pago, validado con las reglas y el tipo indicados. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |
| `actualizado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento actualizado en, conservada con zona horaria. |

- PK: id.
- UQ: (compra_id).
- FK: (compra_id) → compras_membresia (id). tiene obligación de abono.

- Una compra tiene como máximo un agregado de pago; no hay FK a pedidos.
- Importe y moneda corresponden a la compra y al contexto; se preservan modo y entorno.
- Se concede acceso únicamente tras verificar el cobro elegible y con idempotencia por compra.

Trazabilidad: [RF-12.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-5), [RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.8](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8).

<a id="intentos-pago"></a>
### intentos_pago

Cada interacción de checkout con correlación e idempotencia local.

Módulo: pagos. Concepto: IntentoPago.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de IntentoPago. |
| `pago_id` | UUID / uuid | Sí | Referencia a pagos para incluye intento. |
| `cuenta_pago_id` | UUID / uuid | No | Referencia a cuentas_pago para utiliza cuenta. |
| `proveedor` | Texto / text | Sí | Valor de proveedor del recurso IntentoPago, validado con las reglas y el tipo indicados. |
| `ambiente_proveedor` | AmbienteProveedor / text con CHECK de valores | Sí | Valor de ambiente proveedor del recurso IntentoPago, validado con las reglas y el tipo indicados. |
| `modo` | ModoPago / text con CHECK de valores | Sí | Valor de modo del recurso IntentoPago, validado con las reglas y el tipo indicados. |
| `clave_operacion` | Texto / text | Sí | Identidad estable de la operación o referencia clave operacion. |
| `referencia_negocio` | Texto / text | Sí | Valor de referencia negocio del recurso IntentoPago, validado con las reglas y el tipo indicados. |
| `referencia_checkout` | Texto / text | No | Valor de referencia checkout del recurso IntentoPago, validado con las reglas y el tipo indicados. |
| `importe_solicitado` | Monto / numeric(18,2) | Sí | Importe decimal conservado con su moneda y el contexto de intentos_pago. |
| `moneda` | Moneda / char(3) | Sí | Código explícito de la moneda del importe conservado. |
| `estado` | EstadoIntento / text con CHECK de valores | Sí | Estado vigente de IntentoPago; sus cambios utilizan las transiciones autorizadas. |
| `ultimo_error` | Texto / text | No | Valor de ultimo error del recurso IntentoPago, validado con las reglas y el tipo indicados. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |
| `actualizado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento actualizado en, conservada con zona horaria. |

- PK: id.
- UQ: (pago_id, clave_operacion).
- UQ: (referencia_negocio).
- FK: (pago_id) → pagos (id). incluye intento.
- FK: (cuenta_pago_id) → cuentas_pago (id). utiliza cuenta.

- Cada intento corresponde a una obligación de una compra de membresía.
- Cuenta receptora, entorno, modo, importe y moneda deben coincidir con la compra autorizada.
- Resultado incierto se concilia antes de repetir un cargo; una referencia de checkout no se confunde con ID de pago.

Trazabilidad: [RF-12.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-5), [RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), RNF-09.

<a id="operaciones-pago"></a>
### operaciones_pago

Recursos y resultados externos del cobro de abonos, incluidos costos del proveedor y anomalías.

Módulo: pagos. Concepto: OperacionFinanciera.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de OperacionFinanciera. |
| `intento_id` | UUID / uuid | Sí | Referencia a intentos_pago para produce operación. |
| `cuenta_pago_id` | UUID / uuid | No | Referencia a cuentas_pago para contextualiza recurso. |
| `proveedor` | Texto / text | Sí | Valor de proveedor del recurso OperacionFinanciera, validado con las reglas y el tipo indicados. |
| `ambiente_proveedor` | AmbienteProveedor / text con CHECK de valores | Sí | Valor de ambiente proveedor del recurso OperacionFinanciera, validado con las reglas y el tipo indicados. |
| `tipo_recurso` | Texto / text | Sí | Valor de tipo recurso del recurso OperacionFinanciera, validado con las reglas y el tipo indicados. |
| `recurso_externo_id` | Texto / text | Sí | Valor de recurso externo id del recurso OperacionFinanciera, validado con las reglas y el tipo indicados. |
| `tipo_operacion` | TipoOperacion / text con CHECK de valores | Sí | Valor de tipo operacion del recurso OperacionFinanciera, validado con las reglas y el tipo indicados. |
| `estado_proveedor` | Texto / text | Sí | Valor de estado proveedor del recurso OperacionFinanciera, validado con las reglas y el tipo indicados. |
| `estado_local` | Texto / text | Sí | Valor de estado local del recurso OperacionFinanciera, validado con las reglas y el tipo indicados. |
| `importe_bruto` | Monto / numeric(18,2) | Sí | Importe decimal conservado con su moneda y el contexto de operaciones_pago. |
| `moneda` | Moneda / char(3) | Sí | Código explícito de la moneda del importe conservado. |
| `costo_proveedor_real` | Monto / numeric(18,2) | No | Valor de costo proveedor real del recurso OperacionFinanciera, validado con las reglas y el tipo indicados. |
| `ocurrida_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento ocurrida en, conservada con zona horaria. |
| `verificada_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento verificada en, conservada con zona horaria. |

- PK: id.
- UQ: (proveedor, ambiente_proveedor, recurso_externo_id, tipo_recurso, cuenta_pago_id).
- FK: (intento_id) → intentos_pago (id). produce operación.
- FK: (cuenta_pago_id) → cuentas_pago (id). contextualiza recurso.

- La cuenta receptora es propia de la plataforma y se conserva en el contexto de la operación.
- Cada cobro externo adicional se registra para conciliación; no concede por sí solo otro período.
- El costo de procesamiento permanece en NULL hasta obtener el dato del proveedor y corresponde al cobro del abono.

Trazabilidad: [RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12), RNF-09.

<a id="eventos-proveedor"></a>
### eventos_proveedor

Recepción durable y deduplicación de notificaciones autenticadas.

Módulo: pagos. Concepto: EventoProveedor.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de EventoProveedor. |
| `cuenta_pago_id` | UUID / uuid | Sí | Referencia a cuentas_pago para recibe evento. |
| `evento_externo_id` | Texto / text | Sí | Valor de evento externo id del recurso EventoProveedor, validado con las reglas y el tipo indicados. |
| `tipo_evento` | Texto / text | Sí | Valor de tipo evento del recurso EventoProveedor, validado con las reglas y el tipo indicados. |
| `recurso_externo_id` | Texto / text | Sí | Valor de recurso externo id del recurso EventoProveedor, validado con las reglas y el tipo indicados. |
| `operacion_pago_id` | UUID / uuid | No | Referencia a operaciones_pago para actualiza recurso. |
| `estado_procesamiento` | EstadoTrabajo / text con CHECK de valores | Sí | Valor de estado procesamiento del recurso EventoProveedor, validado con las reglas y el tipo indicados. |
| `payload_minimo` | JSON / jsonb | Sí | Valor de payload minimo del recurso EventoProveedor, validado con las reglas y el tipo indicados. |
| `recibido_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento recibido en, conservada con zona horaria. |
| `procesado_en` | FechaHora / timestamptz | No | Fecha del servidor del evento procesado en, conservada con zona horaria. |
| `error_procesamiento` | Texto / text | No | Valor de error procesamiento del recurso EventoProveedor, validado con las reglas y el tipo indicados. |

- PK: id.
- UQ: (cuenta_pago_id, tipo_evento, evento_externo_id).
- FK: (cuenta_pago_id) → cuentas_pago (id). recibe evento.
- FK: (operacion_pago_id) → operaciones_pago (id). actualiza recurso.

- La operación puede resolverse después de recibir el evento; su cuenta/contexto deben coincidir.
- Firma/protocolo se verifica antes de aplicar un resultado. Rechazos de seguridad pueden quedar en auditoría sin crear un evento financiero válido.
- Un evento repetido se conserva como recepción controlada sin duplicar efecto. Se limita el payload a datos necesarios, sin secretos.

Trazabilidad: [RF-12.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-6), RNF-04, RNF-09.

<a id="reembolsos"></a>
### reembolsos

Solicitud y resultado de devolución bajo política autorizada.

Módulo: pagos. Concepto: Reembolso.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Reembolso. |
| `pago_id` | UUID / uuid | Sí | Referencia a pagos para registra devolución. |
| `operacion_cobro_id` | UUID / uuid | Sí | Referencia a operaciones_pago para origina devolución. |
| `operacion_resultado_id` | UUID / uuid | No | Referencia a operaciones_pago para confirma resultado. |
| `solicitado_por` | UUID / uuid | Sí | Referencia a usuarios para solicita devolución. |
| `monto` | Monto / numeric(18,2) | Sí | Importe decimal conservado con su moneda y el contexto de reembolsos. |
| `moneda` | Moneda / char(3) | Sí | Código explícito de la moneda del importe conservado. |
| `motivo` | Texto / text | Sí | Texto de motivo del recurso, sujeto a sus permisos y límites. |
| `clave_operacion` | Texto / text | Sí | Identidad estable de la operación o referencia clave operacion. |
| `estado` | EstadoReembolso / text con CHECK de valores | Sí | Estado vigente de Reembolso; sus cambios utilizan las transiciones autorizadas. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- UQ: (pago_id, clave_operacion).
- FK: (pago_id) → pagos (id). registra devolución.
- FK: (operacion_cobro_id) → operaciones_pago (id). origina devolución.
- FK: (operacion_resultado_id) → operaciones_pago (id). confirma resultado.
- FK: (solicitado_por) → usuarios (id). solicita devolución.

- La devolución pertenece a un cobro de membresía elegible; no devuelve el precio de una impresión.
- Monto, moneda y concurrencia se controlan antes de llamar al proveedor. La devolución se confirma después de consultar su resultado.
- Política de devolución del abono y efecto sobre acceso futuro requieren PD-09; no impiden finalizar pedidos aceptados.

Trazabilidad: [RF-12.12](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-12), RNF-09.

<a id="conversaciones"></a>
### conversaciones

Conversación privada única de un pedido confirmado.

Módulo: comunicacion. Concepto: Conversacion.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Conversacion. |
| `pedido_id` | UUID / uuid | Sí | Referencia a pedidos para contextualiza chat. |
| `estado` | Texto / text | Sí | Estado vigente de Conversacion; sus cambios utilizan las transiciones autorizadas. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- UQ: (pedido_id).
- FK: (pedido_id) → pedidos (id). contextualiza chat.

- Todo registro pertenece a un pedido confirmado; la conversación se habilita al confirmar el acuerdo.
- Cliente y maker del pedido son sus participantes; las consultas y envíos revalidan acceso.
- El vencimiento comercial del maker mantiene la conversación de los pedidos existentes.

Trazabilidad: [RF-05.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-1), [RF-11.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2), [RF-05.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-4), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10).

<a id="participantes-conversacion"></a>
### participantes_conversacion

Autorizaciones por usuario y conversación.

Módulo: comunicacion. Concepto: ParticipanteConversacion.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `conversacion_id` | UUID / uuid | Sí | Referencia a conversaciones para habilita participante. |
| `usuario_id` | UUID / uuid | Sí | Referencia a usuarios para participa. |
| `tipo_participacion` | Texto / text | Sí | Valor de tipo participacion del recurso ParticipanteConversacion, validado con las reglas y el tipo indicados. |
| `puede_enviar` | Booleano / boolean | Sí | Valor de puede enviar del recurso ParticipanteConversacion, validado con las reglas y el tipo indicados. |
| `activo` | Booleano / boolean | Sí | Indicador vigente de activo utilizado en la autorización o selección de ParticipanteConversacion. |
| `autorizado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento autorizado en, conservada con zona horaria. |

- PK: conversacion_id, usuario_id.
- FK: (conversacion_id) → conversaciones (id). habilita participante.
- FK: (usuario_id) → usuarios (id). participa.

- Solo participantes coherentes con el pedido/invitación o intervención aprobada en PD-06/14.
- Revocar acceso no borra la autoría de mensajes existentes.

Trazabilidad: [RF-05.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-1), RNF-04.

<a id="mensajes"></a>
### mensajes

Contenido persistido e identificador de reenvío.

Módulo: comunicacion. Concepto: Mensaje.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Mensaje. |
| `conversacion_id` | UUID / uuid | Sí | Referencia a conversaciones para contiene mensaje. |
| `remitente_id` | UUID / uuid | Sí | Referencia a participantes_conversacion para autoriza autor. |
| `clave_cliente` | Texto / text | Sí | Identidad estable de la operación o referencia clave cliente. |
| `texto` | Texto / text | No | Valor de texto del recurso Mensaje, validado con las reglas y el tipo indicados. |
| `enviado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento enviado en, conservada con zona horaria. |

- PK: id.
- UQ: (conversacion_id, remitente_id, clave_cliente).
- FK: (conversacion_id) → conversaciones (id). contiene mensaje.
- FK: (conversacion_id, remitente_id) → participantes_conversacion (conversacion_id, usuario_id). autoriza autor.

- La FK comprueba pertenencia; activo/puede_enviar se validan al enviar.
- Debe existir texto o al menos un adjunto válido al confirmar la transacción.
- Se informa éxito después de persistir. La misma clave/contenido no duplica el mensaje.

Trazabilidad: [RF-05.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2), [RF-11.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2).

<a id="mensaje-archivos"></a>
### mensaje_archivos

Relación de mensajes con archivos privados.

Módulo: comunicacion. Concepto: AdjuntoMensaje.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `mensaje_id` | UUID / uuid | Sí | Referencia a mensajes para adjunta referencia. |
| `archivo_id` | UUID / uuid | Sí | Referencia a archivos para aporta adjunto. |

- PK: mensaje_id, archivo_id.
- FK: (mensaje_id) → mensajes (id). adjunta referencia.
- FK: (archivo_id) → archivos (id). aporta adjunto.

- Finalidad, propietario y habilitación se verifican para esa conversación.

Trazabilidad: [RF-05.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-2), [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3).

<a id="notificaciones"></a>
### notificaciones

Avisos internos por destinatario y evento persistido.

Módulo: comunicacion. Concepto: Notificacion.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Notificacion. |
| `evento_salida_id` | UUID / uuid | Sí | Referencia a eventos_salida para origina aviso. |
| `destinatario_id` | UUID / uuid | Sí | Referencia a usuarios para recibe aviso. |
| `tipo_aviso` | Texto / text | Sí | Valor de tipo aviso del recurso Notificacion, validado con las reglas y el tipo indicados. |
| `titulo` | Texto / text | Sí | Nombre descriptivo del recurso según su finalidad y visibilidad. |
| `texto` | Texto / text | Sí | Valor de texto del recurso Notificacion, validado con las reglas y el tipo indicados. |
| `recurso_tipo` | Texto / text | Sí | Valor de recurso tipo del recurso Notificacion, validado con las reglas y el tipo indicados. |
| `recurso_id` | UUID / uuid | Sí | Valor de recurso id del recurso Notificacion, validado con las reglas y el tipo indicados. |
| `leida_en` | FechaHora / timestamptz | No | Fecha del servidor del evento leida en, conservada con zona horaria. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- UQ: (evento_salida_id, destinatario_id, tipo_aviso).
- FK: (evento_salida_id) → eventos_salida (id). origina aviso.
- FK: (destinatario_id) → usuarios (id). recibe aviso.

- La aplicación valida recurso_tipo/id contra el tipo de evento, la entidad correspondiente y los permisos del destinatario.
- El aviso no cambia por sí mismo estado de pago, revisión o entrega.

Trazabilidad: [RF-07.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-1), [RF-07.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-4), RNF-06.

<a id="envios-notificacion"></a>
### envios_notificacion

Estado del envío externo, diferente de su entrega efectiva.

Módulo: comunicacion. Concepto: EnvioNotificacion.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de EnvioNotificacion. |
| `notificacion_id` | UUID / uuid | Sí | Referencia a notificaciones para se distribuye. |
| `canal` | Texto / text | Sí | Valor de canal del recurso EnvioNotificacion, validado con las reglas y el tipo indicados. |
| `destino_ref` | Texto / text | Sí | Valor de destino ref del recurso EnvioNotificacion, validado con las reglas y el tipo indicados. |
| `proveedor` | Texto / text | Sí | Valor de proveedor del recurso EnvioNotificacion, validado con las reglas y el tipo indicados. |
| `plantilla_version` | Texto / text | Sí | Valor de plantilla version del recurso EnvioNotificacion, validado con las reglas y el tipo indicados. |
| `referencia_externa` | Texto / text | No | Valor de referencia externa del recurso EnvioNotificacion, validado con las reglas y el tipo indicados. |
| `estado` | EstadoEnvio / text con CHECK de valores | Sí | Estado vigente de EnvioNotificacion; sus cambios utilizan las transiciones autorizadas. |
| `intentos` | Entero / integer | Sí | Valor de intentos del recurso EnvioNotificacion, validado con las reglas y el tipo indicados. |
| `proximo_intento_en` | FechaHora / timestamptz | No | Fecha del servidor del evento proximo intento en, conservada con zona horaria. |
| `aceptado_en` | FechaHora / timestamptz | No | Fecha del servidor del evento aceptado en, conservada con zona horaria. |
| `entregado_en` | FechaHora / timestamptz | No | Fecha del servidor del evento entregado en, conservada con zona horaria. |
| `ultimo_error` | Texto / text | No | Valor de ultimo error del recurso EnvioNotificacion, validado con las reglas y el tipo indicados. |

- PK: id.
- UQ: (notificacion_id, canal, destino_ref).
- FK: (notificacion_id) → notificaciones (id). se distribuye.

- Canal, destino y sus permisos se habilitan según PD-11. Si se elige push, debe detallarse el registro/expiración de dispositivos antes de cerrar esa integración.
- La aceptación del envío y su entrega se registran como estados separados. Los reintentos mantienen la misma identidad y verifican si el aviso todavía corresponde.
- El destino puede ser una referencia protegida; su trazabilidad no expone contacto o tokens en registros públicos.

Trazabilidad: [RF-07.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-3), [RF-07.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-4), RNF-15.

<a id="configuraciones-versiones"></a>
### configuraciones_versiones

Contenido versionado y validado por dominio de configuración.

Módulo: operacion. Concepto: ConfiguracionVersion.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de ConfiguracionVersion. |
| `dominio` | DominioConfig / text con CHECK de valores | Sí | Valor de dominio del recurso ConfiguracionVersion, validado con las reglas y el tipo indicados. |
| `numero` | Entero / integer | Sí | Número positivo de versión dentro del recurso. |
| `valores` | JSON / jsonb | Sí | Valor de valores del recurso ConfiguracionVersion, validado con las reglas y el tipo indicados. |
| `creada_por` | UUID / uuid | Sí | Referencia a usuarios para versiona configuración. |
| `motivo` | Texto / text | Sí | Texto de motivo del recurso, sujeto a sus permisos y límites. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

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

Módulo: operacion. Concepto: ActivacionConfiguracion.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de ActivacionConfiguracion. |
| `configuracion_version_id` | UUID / uuid | Sí | Referencia a configuraciones_versiones para entra en vigencia. |
| `dominio` | DominioConfig / text con CHECK de valores | Sí | Valor de dominio del recurso ActivacionConfiguracion, validado con las reglas y el tipo indicados. |
| `vigente_desde` | FechaHora / timestamptz | Sí | Valor de vigente desde del recurso ActivacionConfiguracion, validado con las reglas y el tipo indicados. |
| `vigente_hasta` | FechaHora / timestamptz | No | Valor de vigente hasta del recurso ActivacionConfiguracion, validado con las reglas y el tipo indicados. |
| `activada_por` | UUID / uuid | Sí | Referencia a usuarios para activa versión. |
| `cerrada_por` | UUID / uuid | No | Referencia a usuarios para cierra vigencia. |

- PK: id.
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

Módulo: operacion. Concepto: EventoDominio.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de EventoDominio. |
| `tipo` | Texto / text | Sí | Valor de tipo del recurso EventoDominio, validado con las reglas y el tipo indicados. |
| `version_contrato` | Entero / integer | Sí | Valor de version contrato del recurso EventoDominio, validado con las reglas y el tipo indicados. |
| `entidad_tipo` | Texto / text | Sí | Valor de entidad tipo del recurso EventoDominio, validado con las reglas y el tipo indicados. |
| `entidad_id` | UUID / uuid | Sí | Valor de entidad id del recurso EventoDominio, validado con las reglas y el tipo indicados. |
| `version_entidad` | Texto / text | No | Valor de version entidad del recurso EventoDominio, validado con las reglas y el tipo indicados. |
| `correlacion_id` | Texto / text | Sí | Valor de correlacion id del recurso EventoDominio, validado con las reglas y el tipo indicados. |
| `clave_evento` | Texto / text | Sí | Identidad estable de la operación o referencia clave evento. |
| `payload_minimo` | JSON / jsonb | Sí | Valor de payload minimo del recurso EventoDominio, validado con las reglas y el tipo indicados. |
| `ocurrido_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento ocurrido en, conservada con zona horaria. |
| `estado_publicacion` | EstadoTrabajo / text con CHECK de valores | Sí | Valor de estado publicacion del recurso EventoDominio, validado con las reglas y el tipo indicados. |

- PK: id.
- UQ: (clave_evento).

- Se registra con la transacción del hecho de negocio; identificador estable para consumidores idempotentes.
- La aplicación valida la referencia lógica entidad_tipo/id según el contrato del evento. El payload conserva los datos autorizados por ese contrato.

Trazabilidad: [RF-07.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-1), [RF-11.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-11-2), RNF-05.

<a id="trabajos"></a>
### trabajos

Ejecuciones recuperables de análisis, avisos, recordatorios y conciliación.

Módulo: operacion. Concepto: Trabajo.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Trabajo. |
| `evento_salida_id` | UUID / uuid | No | Referencia a eventos_salida para programa trabajo. |
| `tipo` | Texto / text | Sí | Valor de tipo del recurso Trabajo, validado con las reglas y el tipo indicados. |
| `clave_deduplicacion` | Texto / text | Sí | Identidad estable de la operación o referencia clave deduplicacion. |
| `payload` | JSON / jsonb | Sí | Valor de payload del recurso Trabajo, validado con las reglas y el tipo indicados. |
| `estado` | EstadoTrabajo / text con CHECK de valores | Sí | Estado vigente de Trabajo; sus cambios utilizan las transiciones autorizadas. |
| `intentos` | Entero / integer | Sí | Valor de intentos del recurso Trabajo, validado con las reglas y el tipo indicados. |
| `proxima_ejecucion_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento proxima ejecucion en, conservada con zona horaria. |
| `reservado_hasta` | FechaHora / timestamptz | No | Valor de reservado hasta del recurso Trabajo, validado con las reglas y el tipo indicados. |
| `reservado_por` | Texto / text | No | Valor de reservado por del recurso Trabajo, validado con las reglas y el tipo indicados. |
| `ultimo_error` | Texto / text | No | Valor de ultimo error del recurso Trabajo, validado con las reglas y el tipo indicados. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- UQ: (tipo, clave_deduplicacion).
- FK: (evento_salida_id) → eventos_salida (id). programa trabajo.

- Reserva con vencimiento; el worker recupera tareas sin suponer ejecución exactamente una vez.
- Cada tipo valida su payload y recursos antes de ejecutar. Recordatorios comprueban revisión todavía pendiente.
- Reintento financiero incierto sigue conciliación; no crea cobros a ciegas.

Trazabilidad: [RF-02.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-02-2), [RF-07.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-4), RNF-15.

<a id="auditoria"></a>
### auditoria

Registro transversal append-only de acciones y cambios pertinentes.

Módulo: operacion. Concepto: RegistroAuditoria.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de RegistroAuditoria. |
| `actor_usuario_id` | UUID / uuid | No | Referencia a usuarios para audita acción. |
| `origen_proceso` | Texto / text | No | Valor de origen proceso del recurso RegistroAuditoria, validado con las reglas y el tipo indicados. |
| `entidad_tipo` | Texto / text | Sí | Valor de entidad tipo del recurso RegistroAuditoria, validado con las reglas y el tipo indicados. |
| `entidad_id` | UUID / uuid | Sí | Valor de entidad id del recurso RegistroAuditoria, validado con las reglas y el tipo indicados. |
| `accion` | Texto / text | Sí | Valor de accion del recurso RegistroAuditoria, validado con las reglas y el tipo indicados. |
| `resultado` | Texto / text | Sí | Valor de resultado del recurso RegistroAuditoria, validado con las reglas y el tipo indicados. |
| `motivo` | Texto / text | No | Texto de motivo del recurso, sujeto a sus permisos y límites. |
| `correlacion_id` | Texto / text | Sí | Valor de correlacion id del recurso RegistroAuditoria, validado con las reglas y el tipo indicados. |
| `datos_pertinentes` | JSON / jsonb | No | Valor de datos pertinentes del recurso RegistroAuditoria, validado con las reglas y el tipo indicados. |
| `ocurrido_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento ocurrido en, conservada con zona horaria. |

- PK: id.
- FK: (actor_usuario_id) → usuarios (id). audita acción.

- Registro añadido con origen identificable. Identidad de entidades se resuelve con tipo/id; la referencia lógica no otorga acceso.
- Cambios de configuración, estados financieros y acciones administrativas preservan valor anterior/nuevo pertinente.
- Retención y anonimización no exponen secretos ni destruyen evidencia que deba conservarse.

Trazabilidad: [RF-05.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-05-3), [RF-07.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-2), RNF-06.

<a id="casos-soporte"></a>
### casos_soporte

Casos operativos y de moderación cuando se adopte ese alcance.

Módulo: operacion. Concepto: CasoSoporte.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de CasoSoporte. |
| `reportado_por` | UUID / uuid | Sí | Referencia a usuarios para reporta caso. |
| `pedido_id` | UUID / uuid | No | Referencia a pedidos para involucra pedido. |
| `solicitud_id` | UUID / uuid | No | Referencia a solicitudes para involucra solicitud. |
| `pago_id` | UUID / uuid | No | Referencia a pagos para involucra pago. |
| `asignado_a` | UUID / uuid | No | Referencia a usuarios para atiende caso. |
| `tipo` | Texto / text | Sí | Valor de tipo del recurso CasoSoporte, validado con las reglas y el tipo indicados. |
| `descripcion` | Texto / text | Sí | Texto de descripcion del recurso, sujeto a sus permisos y límites. |
| `estado` | EstadoCaso / text con CHECK de valores | Sí | Estado vigente de CasoSoporte; sus cambios utilizan las transiciones autorizadas. |
| `resolucion` | Texto / text | No | Valor de resolucion del recurso CasoSoporte, validado con las reglas y el tipo indicados. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |
| `cerrado_en` | FechaHora / timestamptz | No | Fecha del servidor del evento cerrado en, conservada con zona horaria. |

- PK: id.
- FK: (reportado_por) → usuarios (id). reporta caso.
- FK: (pedido_id) → pedidos (id). involucra pedido.
- FK: (solicitud_id) → solicitudes (id). involucra solicitud.
- FK: (pago_id) → pagos (id). involucra pago.
- FK: (asignado_a) → usuarios (id). atiende caso.

- Si hay varias referencias, describen el mismo contexto; la asignación requiere permisos de soporte.
- Cada resolución utiliza los casos de uso autorizados para devolver un abono, aprobar una pieza o completar una entrega, con sus respectivas precondiciones.
- Acciones y motivo se registran también en auditoría.

Trazabilidad: [RF-07.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-07-2), [RF-06.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-06-3).

<a id="aceptaciones-condiciones"></a>
### aceptaciones_condiciones

Evidencia de aceptación de una versión de condiciones cuando proceda.

Módulo: operacion. Concepto: AceptacionCondiciones.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de AceptacionCondiciones. |
| `usuario_id` | UUID / uuid | Sí | Referencia a usuarios para acepta condiciones. |
| `documento_tipo` | Texto / text | Sí | Valor de documento tipo del recurso AceptacionCondiciones, validado con las reglas y el tipo indicados. |
| `documento_version` | Texto / text | Sí | Valor de documento version del recurso AceptacionCondiciones, validado con las reglas y el tipo indicados. |
| `documento_hash` | Texto / text | Sí | Valor de documento hash del recurso AceptacionCondiciones, validado con las reglas y el tipo indicados. |
| `referencia_documento` | Texto / text | Sí | Valor de referencia documento del recurso AceptacionCondiciones, validado con las reglas y el tipo indicados. |
| `finalidad` | Texto / text | Sí | Valor de finalidad del recurso AceptacionCondiciones, validado con las reglas y el tipo indicados. |
| `aceptada_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento aceptada en, conservada con zona horaria. |

- PK: id.
- UQ: (usuario_id, documento_tipo, documento_version, finalidad).
- FK: (usuario_id) → usuarios (id). acepta condiciones.

- La versión y el hash identifican el documento conservado por el control documental. La revisión de términos y obligaciones se registra en PD-12.
- Al cambiar condiciones se registra otra aceptación cuando lo exija la política, sin sobrescribir la anterior.

Trazabilidad: RNF-12.

<a id="planes-membresia-versiones"></a>
### planes_membresia_versiones

Versiones del único plan mensual prepago; versiones no representan niveles distintos.

Módulo: pagos. Concepto: planes_membresia_versiones.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de planes_membresia_versiones. |
| `codigo_plan` | Texto / text | Sí | Un único plan comercial en v1. |
| `numero` | Entero / integer | Sí | Número positivo de versión dentro del recurso. |
| `importe` | Monto / numeric(18,2) | Sí | Importe decimal conservado con su moneda y el contexto de planes_membresia_versiones. |
| `moneda` | Moneda / char(3) | Sí | Código explícito de la moneda del importe conservado. |
| `periodo_unidad` | Texto / text | Sí | Valor de periodo unidad del recurso planes_membresia_versiones, validado con las reglas y el tipo indicados. |
| `periodo_cantidad` | Entero / integer | Sí | Cantidad validada según el contexto y las reglas de planes_membresia_versiones. |
| `condiciones` | JSON / jsonb | Sí | Valor de condiciones del recurso planes_membresia_versiones, validado con las reglas y el tipo indicados. |
| `configuracion_version_id` | UUID / uuid | Sí | Referencia a configuraciones_versiones para aplica configuración. |
| `creado_por` | UUID / uuid | Sí | Referencia a usuarios para publica versión. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- UQ: (codigo_plan, numero).
- FK: (configuracion_version_id) → configuraciones_versiones (id). aplica configuración.
- FK: (creado_por) → usuarios (id). publica versión.

- Precio, moneda y regla de calendario se acuerdan antes de publicar el plan.
- Una versión publicada no se reescribe para alterar compras anteriores.

Trazabilidad: [RF-12.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-1), RNF-13.

<a id="membresias-maker"></a>
### membresias_maker

Registro comercial de un maker y su beneficio inicial; la habilitación efectiva se deriva de períodos y permisos.

Módulo: pagos. Concepto: membresias_maker.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de membresias_maker. |
| `maker_id` | UUID / uuid | Sí | Referencia a makers para tiene membresía. |
| `habilitado_inicial_en` | FechaHora / timestamptz | No | Fecha de la primera habilitación del maker para recibir solicitudes; inicia el beneficio gratuito. |
| `es_fundador` | Booleano / boolean | Sí | Valor de es fundador del recurso membresias_maker, validado con las reglas y el tipo indicados. |
| `fundador_configuracion_id` | UUID / uuid | No | Referencia a configuraciones_versiones para registra programa. |
| `fundador_asignado_por` | UUID / uuid | No | Referencia a usuarios para asigna beneficio. |
| `fundador_asignado_en` | FechaHora / timestamptz | No | Fecha del servidor del evento fundador asignado en, conservada con zona horaria. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- UQ: (maker_id).
- FK: (maker_id) → makers (id). tiene membresía.
- FK: (fundador_configuracion_id) → configuraciones_versiones (id). registra programa.
- FK: (fundador_asignado_por) → usuarios (id). asigna beneficio.

- Una membresía por maker; editar el perfil no reinicia la antigüedad gratuita.
- La asignación de fundador y el consumo del cupo configurado se coordinan atómicamente.
- Cada maker recibe un único beneficio inicial: prueba general de 30 días o beneficio fundador de 90 días totales, como valores configurables.
- El distintivo no representa reputación, prioridad de matching ni participación societaria.

Trazabilidad: [RF-12.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2), [RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3), [RF-12.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-4), [RF-12.13](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-13).

<a id="compras-membresia"></a>
### compras_membresia

Compra del servicio de plataforma por el maker; conserva precio y duración del plan.

Módulo: pagos. Concepto: compras_membresia.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de compras_membresia. |
| `membresia_id` | UUID / uuid | Sí | Referencia a membresias_maker para registra compra. |
| `plan_version_id` | UUID / uuid | Sí | Referencia a planes_membresia_versiones para conserva plan. |
| `importe` | Monto / numeric(18,2) | Sí | Importe decimal conservado con su moneda y el contexto de compras_membresia. |
| `moneda` | Moneda / char(3) | Sí | Código explícito de la moneda del importe conservado. |
| `periodo_unidad` | Texto / text | Sí | Valor de periodo unidad del recurso compras_membresia, validado con las reglas y el tipo indicados. |
| `periodo_cantidad` | Entero / integer | Sí | Cantidad validada según el contexto y las reglas de compras_membresia. |
| `condiciones_aceptadas` | JSON / jsonb | Sí | Valor de condiciones aceptadas del recurso compras_membresia, validado con las reglas y el tipo indicados. |
| `clave_operacion` | Texto / text | Sí | Identidad estable de la operación o referencia clave operacion. |
| `modo` | ModoPago / text con CHECK de valores | Sí | Valor de modo del recurso compras_membresia, validado con las reglas y el tipo indicados. |
| `entorno_aplicacion` | Texto / text | Sí | Valor de entorno aplicacion del recurso compras_membresia, validado con las reglas y el tipo indicados. |
| `estado` | EstadoCompra / text con CHECK de valores | Sí | Estado vigente de compras_membresia; sus cambios utilizan las transiciones autorizadas. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

- PK: id.
- UQ: (membresia_id, clave_operacion).
- UQ: (id, membresia_id).
- FK: (membresia_id) → membresias_maker (id). registra compra.
- FK: (plan_version_id) → planes_membresia_versiones (id). conserva plan.

- El backend fija importe y moneda desde la versión elegible del plan.
- La renovación es manual y no crea mandatos de débito recurrente.
- Una compra pendiente, el retorno del navegador o un comprobante no conceden acceso.

Trazabilidad: [RF-12.5](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-5), [RF-12.7](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-7), [RF-12.8](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8), [RF-12.9](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-9).

<a id="periodos-membresia"></a>
### periodos_membresia

Concesiones temporales de acceso por prueba, beneficio fundador o compra confirmada.

Módulo: pagos. Concepto: periodos_membresia.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de periodos_membresia. |
| `membresia_id` | UUID / uuid | Sí | Referencia a membresias_maker para concede acceso. |
| `origen` | OrigenAcceso / text con CHECK de valores | Sí | Valor de origen del recurso periodos_membresia, validado con las reglas y el tipo indicados. |
| `clave_origen` | Texto / text | Sí | Identidad estable de la operación o referencia clave origen. |
| `compra_id` | UUID / uuid | No | Referencia a compras_membresia para origina período. |
| `configuracion_version_id` | UUID / uuid | Sí | Referencia a configuraciones_versiones para conserva condiciones. |
| `inicio_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento inicio en, conservada con zona horaria. |
| `fin_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento fin en, conservada con zona horaria. |
| `modo` | ModoPago / text con CHECK de valores | Sí | Valor de modo del recurso periodos_membresia, validado con las reglas y el tipo indicados. |
| `entorno_aplicacion` | Texto / text | Sí | Valor de entorno aplicacion del recurso periodos_membresia, validado con las reglas y el tipo indicados. |
| `estado` | EstadoPeriodo / text con CHECK de valores | Sí | Estado vigente de periodos_membresia; sus cambios utilizan las transiciones autorizadas. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor del evento creado en, conservada con zona horaria. |

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

Trazabilidad: [RF-12.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-2), [RF-12.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-3), [RF-12.8](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-8), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10), [RF-12.14](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-14).

<a id="productos-maker"></a>
### productos_maker

Publicación estable de un producto prediseñado del maker.

Módulo: catalogo. Concepto: ProductoMaker.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de ProductoMaker. |
| `maker_id` | UUID / uuid | Sí | Maker titular de la publicación. |
| `version_actual` | Entero / integer | Sí | Número de la versión de condiciones actual del producto. |
| `estado` | EstadoPublicacion / text con CHECK de valores | Sí | Borrador, publicado, pausado, retirado o moderado. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha del servidor al crear la publicación. |
| `actualizado_en` | FechaHora / timestamptz | Sí | Fecha del último cambio de estado o versión. |

- PK: id.
- UQ: (id, maker_id).
- FK: (maker_id) → makers (id). publica producto.
- FK: (id, version_actual) → producto_versiones (producto_id, numero). selecciona versión de producto. Comprobación diferida de la referencia actual.

- El alta conserva publicación y primera versión en una transacción.
- Publicar y admitir pedidos nuevos exige maker habilitado y acceso comercial vigente; pausar o retirar conserva los pedidos existentes.
- El catálogo contiene publicaciones de configuración fija; el maker puede publicar otro producto para otra configuración.

Trazabilidad: [RF-13.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-1), [RF-13.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-2), [RF-13.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-3), [RF-12.10](/3daltoque-docs/analisis/requisitos/funcionales/#rf-12-10).

<a id="producto-versiones"></a>
### producto_versiones

Condiciones conservadas de cada versión del producto.

Módulo: catalogo. Concepto: VersionProducto.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `producto_id` | UUID / uuid | Sí | Publicación a la que pertenece esta versión. |
| `numero` | Entero / integer | Sí | Número positivo e inmutable dentro del producto. |
| `maker_id` | UUID / uuid | Sí | Titular conservado para verificar pertenencia en referencias compuestas. |
| `titulo` | Texto / text | Sí | Nombre público del producto. |
| `descripcion` | Texto / text | Sí | Descripción de la pieza y configuración ofrecida. |
| `material_id` | UUID / uuid | Sí | Material de la configuración publicada. |
| `color` | Texto / text | Sí | Color de la configuración publicada. |
| `dimension_x_mm` | Decimal / numeric(18,6) | Sí | Ancho de la pieza en milímetros. |
| `dimension_y_mm` | Decimal / numeric(18,6) | Sí | Profundidad de la pieza en milímetros. |
| `dimension_z_mm` | Decimal / numeric(18,6) | Sí | Altura de la pieza en milímetros. |
| `precio_unitario` | Monto / numeric(18,2) | Sí | Importe unitario publicado, calculado y validado en el backend. |
| `moneda` | Moneda / char(3) | Sí | Moneda explícita de los importes publicados. |
| `cantidad_minima` | Entero / integer | Sí | Mínimo entero positivo por pedido. |
| `cantidad_maxima` | Entero / integer | No | Máximo configurado; NULL identifica ausencia de un máximo propio dentro de los límites del servicio. |
| `plazo_cantidad` | Decimal / numeric(18,6) | Sí | Duración de preparación publicada, positiva. |
| `plazo_unidad` | UnidadPlazo / text con CHECK de valores | Sí | Unidad temporal explícita de la preparación. |
| `condiciones` | Texto / text | Sí | Condiciones de fabricación, entrega y pago directo aceptables por el cliente. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha de conservación de la versión. |

- PK: producto_id, numero.
- UQ: (producto_id, numero, maker_id).
- FK: (producto_id, maker_id) → productos_maker (id, maker_id). conserva versión de producto.
- FK: (material_id) → materiales (id). ofrece material.

- Precio unitario positivo, dimensiones y plazo positivos y cantidad mínima mayor que cero. Un máximo existente es mayor o igual al mínimo.
- Cambios de precio, configuración o plazo generan una versión nueva y conservan las referencias de pedidos anteriores.
- El cliente confirma la versión actual; un cambio concurrente produce conflicto antes de crear el pedido.

Trazabilidad: [RF-13.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-1), [RF-13.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-3), [RF-13.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-4).

<a id="producto-archivos"></a>
### producto_archivos

Medios y recursos del producto asociados a su versión.

Módulo: catalogo. Concepto: ArchivoProducto.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `producto_id` | UUID / uuid | Sí | Producto de la versión asociada. |
| `producto_version_numero` | Entero / integer | Sí | Versión que conserva la referencia de archivo. |
| `archivo_id` | UUID / uuid | Sí | Archivo habilitado para la finalidad declarada. |
| `rol` | Texto / text | Sí | Presentación pública derivada o recurso de fabricación privado. |
| `orden` | Entero / integer | Sí | Posición no negativa de presentación. |

- PK: producto_id, producto_version_numero, archivo_id.
- FK: (producto_id, producto_version_numero) → producto_versiones (producto_id, numero). muestra archivo de versión.
- FK: (archivo_id) → archivos (id). aporta medio autorizado.

- La publicación pública utiliza derivados autorizados; los originales de fabricación y claves de almacenamiento permanecen privados.
- El cliente realiza un pedido de una pieza; la entrega de archivos digitales no forma parte de este circuito.
- Retirar un producto protege su presentación pública y conserva las referencias necesarias de sus pedidos.

Trazabilidad: [RF-13.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-1), [RF-13.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-13-3), [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3), [RF-10.4](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-4).

<a id="portfolio-trabajos"></a>
### portfolio_trabajos

Trabajo presentado por un maker en su perfil público.

Módulo: perfiles. Concepto: TrabajoPortfolio.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de TrabajoPortfolio. |
| `maker_id` | UUID / uuid | Sí | Maker autor y titular del trabajo. |
| `titulo` | Texto / text | Sí | Título del trabajo. |
| `descripcion` | Texto / text | Sí | Descripción del trabajo publicado. |
| `version` | Entero / integer | Sí | Versión para controlar ediciones concurrentes. |
| `estado` | EstadoPublicacion / text con CHECK de valores | Sí | Borrador, publicado, retirado o moderado. |
| `publicado_en` | FechaHora / timestamptz | No | Fecha de primera publicación autorizada. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha de creación del registro. |
| `actualizado_en` | FechaHora / timestamptz | Sí | Fecha del último cambio autorizado. |

- PK: id.
- FK: (maker_id) → makers (id). presenta trabajo.

- El trabajo conserva finalidad de presentación, autor y estado público.
- La titularidad del archivo y su autorización de publicación se verifican antes de publicar.
- Las intervenciones de moderación conservan motivo y auditoría.

Trazabilidad: [RF-14.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-1), [RF-14.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-2).

<a id="portfolio-archivos"></a>
### portfolio_archivos

Medios autorizados de los trabajos del portfolio.

Módulo: perfiles. Concepto: ArchivoPortfolio.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `trabajo_id` | UUID / uuid | Sí | Trabajo al que pertenece el medio. |
| `archivo_id` | UUID / uuid | Sí | Archivo habilitado y autorizado para presentación. |
| `orden` | Entero / integer | Sí | Posición no negativa dentro del trabajo. |
| `activo` | Booleano / boolean | Sí | Indica si el medio participa en la presentación vigente. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha de incorporación. |
| `retirado_en` | FechaHora / timestamptz | No | Fecha de retiro lógico de la presentación. |

- PK: trabajo_id, archivo_id.
- FK: (trabajo_id) → portfolio_trabajos (id). incluye medio.
- FK: (archivo_id) → archivos (id). presenta archivo autorizado.

- Se muestran medios activos de trabajos publicados.
- Una evidencia privada requiere autorización de publicación específica; el enlace al pedido no confiere permiso público.

Trazabilidad: [RF-14.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-1), [RF-14.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-14-2), [RF-10.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-10-3).

<a id="valoraciones"></a>
### valoraciones

Valoración de una contraparte por un pedido completado.

Módulo: reputacion. Concepto: Valoracion.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de Valoracion. |
| `pedido_id` | UUID / uuid | Sí | Pedido con recepción confirmada que habilita la valoración. |
| `autor_id` | UUID / uuid | Sí | Participante que emite la valoración. |
| `destinatario_id` | UUID / uuid | Sí | Contraparte valorada. |
| `rol_autor` | Rol / text con CHECK de valores | Sí | Rol de cliente o maker utilizado en el pedido. |
| `configuracion_version_id` | UUID / uuid | Sí | Configuración de escala y criterios conservada. |
| `puntaje_global` | Decimal / numeric(18,6) | Sí | Promedio de los criterios aplicables; se conserva la precisión y se redondea al presentar. |
| `comentario` | Texto / text | No | Comentario dentro de límites y reglas de contenido. |
| `estado` | EstadoValoracion / text con CHECK de valores | Sí | Publicado u oculto por moderación. |
| `clave_operacion` | Texto / text | Sí | Identidad estable de la publicación. |
| `creado_en` | FechaHora / timestamptz | Sí | Fecha de emisión conservada por el servidor. |

- PK: id.
- UQ: (pedido_id, autor_id).
- UQ: (autor_id, clave_operacion).
- FK: (pedido_id) → pedidos (id). habilita valoración.
- FK: (autor_id) → usuarios (id). emite valoración.
- FK: (destinatario_id) → usuarios (id). recibe valoración.
- FK: (configuracion_version_id) → configuraciones_versiones (id). conserva escala y criterios.

- El autor y destinatario son las contrapartes distintas del pedido; el servicio valida pertenencia y recepción confirmada dentro de la operación.
- Existe como máximo una valoración por autor y pedido. Una repetición con igual contenido recupera el registro.
- La moderación cambia la visibilidad con motivo y auditoría y conserva los puntajes emitidos.
- El resumen incluye únicamente valoraciones publicadas y compatibles con la escala informada; ausencia de datos produce promedio NULL.

Trazabilidad: [RF-15.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-1), [RF-15.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-2), [RF-15.3](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-3).

<a id="valoracion-criterios"></a>
### valoracion_criterios

Puntajes de los criterios de una valoración.

Módulo: reputacion. Concepto: PuntajeCriterio.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `valoracion_id` | UUID / uuid | Sí | Valoración a la que pertenece el criterio. |
| `criterio_codigo` | Texto / text | Sí | Código presente en la configuración conservada de la valoración. |
| `puntaje` | Decimal / numeric(18,6) | Sí | Valor dentro de la escala definida para ese criterio. |

- PK: valoracion_id, criterio_codigo.
- FK: (valoracion_id) → valoraciones (id). desglosa criterio.

- Los criterios requeridos se corresponden con el rol del autor y la configuración conservada.
- La media aritmética de los criterios determina el puntaje global; la consulta comunica escala y cantidad de valoraciones.

Trazabilidad: [RF-15.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-1), [RF-15.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-15-2).

<a id="propuestas-cambio-oferta"></a>
### propuestas_cambio_oferta

Contraoferta del cliente y resolución por el maker.

Módulo: cotizaciones. Concepto: PropuestaCambioOferta.

| Columna | Tipo lógico y SQL previsto | Obligatoria | Descripción |
| --- | --- | --- | --- |
| `id` | UUID / uuid | Sí | Identificador estable y opaco de PropuestaCambioOferta. |
| `oferta_id` | UUID / uuid | Sí | Oferta afectada. |
| `version_origen` | Entero / integer | Sí | Versión que el cliente consultó al proponer el cambio. |
| `cliente_id` | UUID / uuid | Sí | Cliente propietario de la solicitud. |
| `precio_total_propuesto` | Monto / numeric(18,2) | Sí | Importe total propuesto por el cliente. |
| `moneda` | Moneda / char(3) | Sí | Moneda explícita de la propuesta. |
| `plazo_cantidad` | Decimal / numeric(18,6) | Sí | Plazo positivo propuesto. |
| `plazo_unidad` | UnidadPlazo / text con CHECK de valores | Sí | Unidad explícita del plazo. |
| `observacion` | Texto / text | No | Descripción del cambio solicitado. |
| `estado` | EstadoPropuesta / text con CHECK de valores | Sí | Pendiente, aceptada, rechazada, cancelada u obsoleta. |
| `version_resultante` | Entero / integer | No | Nueva versión del maker si la propuesta se acepta. |
| `resuelta_por` | UUID / uuid | No | Usuario maker que responde la propuesta. |
| `creada_en` | FechaHora / timestamptz | Sí | Fecha de la propuesta. |
| `resuelta_en` | FechaHora / timestamptz | No | Fecha de la resolución. |

- PK: id.
- UQ: (oferta_id, version_resultante).
- FK: (oferta_id, version_origen) → oferta_versiones (oferta_id, numero). propone cambio de versión.
- FK: (cliente_id) → clientes (usuario_id). propone cambio.
- FK: (oferta_id, version_resultante) → oferta_versiones (oferta_id, numero). genera versión resultante.
- FK: (resuelta_por) → usuarios (id). resuelve propuesta.

- El cliente pertenece a la solicitud de la oferta y el usuario que responde pertenece al maker de la oferta.
- Resolver exige solicitud abierta y versión de origen vigente; los cambios concurrentes vuelven obsoleta la propuesta.
- Aceptar crea una nueva versión del maker y conserva su relación; el pedido se confirma mediante CU-03.

Trazabilidad: [RF-04.6](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-6), [RF-04.1](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-1), [RF-04.2](/3daltoque-docs/analisis/requisitos/funcionales/#rf-04-2).
