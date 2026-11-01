---
title: "Instalación y puesta en marcha"
---

# Manual de instalación y puesta en marcha

Versión 1.0. Fecha: 1 de noviembre de 2026.

## Componentes y versiones

| Componente | Procedencia de su versión | Configuración necesaria |
| --- | --- | --- |
| Portal documental | Node.js 24, npm 11, Astro 7.3.8 y Starlight 0.42.6; package-lock.json del repositorio. | site y base de Astro; GitHub Pages. |
| Backend y worker | Tag del release, manifiesto de dependencias Python y archivo de bloqueo del backend. | Base, sesiones, almacenamiento, adaptadores, configuración y reloj. |
| Web | Tag del frontend, package.json y archivo de bloqueo. | URL pública de la API y retorno del checkout. |
| Mobile | Tag del proyecto React Native y dependencias bloqueadas. | URL accesible de API, identificador de aplicación y retorno autorizado. |
| PostgreSQL/PostGIS | Versión fijada en el manifiesto del entorno y migraciones del release. | Base, usuario de mínimo privilegio, conexión y respaldo. |
| Almacenamiento | Adaptador del release y versión del servicio. | Endpoint, bucket privado, credenciales, CORS y TTL. |

La ficha del release reúne commits de los tres clientes/servidor, versiones de runtime, esquema de base y comandos de arranque. Esa ficha acompaña cada instalación para reproducir la combinación evaluada.

## Instalar el portal de documentación

Requisitos: Git, Node.js 24 y npm 11.

```powershell
git clone https://github.com/chill0101/3daltoque-docs.git
Set-Location 3daltoque-docs
npm ci
npm run dev -- --host 127.0.0.1
```

Abrí la URL informada por Astro, incluyendo /3daltoque-docs/. Para construir y comprobar la versión estática:

```powershell
npm run build
npm run preview -- --host 127.0.0.1
```

GitHub Actions construye el portal y lo despliega desde main. Después de integrar un cambio, verificá la ejecución y la página afectada.

## Preparar un entorno de la aplicación

1. Seleccioná el release y registrá los commits de backend, frontend y Mobile.
2. Cloná cada repositorio indicado en la [lista de repositorios](/3daltoque-docs/proyecto/repositorios/).
3. Instalá las versiones de Python, Node y herramientas Mobile fijadas por ese release.
4. Prepará PostgreSQL/PostGIS y un almacén de objetos privado exclusivos del entorno.
5. Copiá los ejemplos de configuración del release a archivos locales protegidos y completá sus valores.
6. Instalá dependencias utilizando los archivos de bloqueo. Conservá la salida y las versiones de herramientas en el registro de instalación.

El backend publica en su manifiesto los comandos de instalación, migración, carga de datos, API y worker. El frontend y Mobile publican sus scripts en package.json. El responsable de la instalación transcribe esos comandos al registro del release y comprueba cada salida antes de continuar.

## Variables del entorno

| Grupo | Variables o valores requeridos | Comprobación |
| --- | --- | --- |
| Identidad | Entorno, origen Web permitido, parámetros de sesión y clave de protección correspondiente. | Inicio/cierre de sesión, revocación y permisos por recurso. |
| Base | DATABASE_URL y configuración de conexiones. | Conexión, extensión PostGIS y migración vigente. |
| Objetos | Endpoint, bucket privado, acceso del servicio y TTL. | Carga autorizada y descarga temporal; objeto inaccesible públicamente. |
| Mapas | Proveedor, claves si aplica, atribución, límites y precisión pública. | Búsqueda y alternativa textual ante falla. |
| Avisos | Canal, remitente autorizado, credenciales y política de reintento. | Notificación interna y resultado del envío externo. |
| Abono | Modo, credencial de la cuenta receptora, secreto de webhook y URLs HTTPS por entorno. | Checkout, firma, consulta del pago y concesión única. |
| Clientes | URL base /api/v1 y retornos Web/Mobile autorizados. | Dispositivo alcanza la API y recupera una compra al volver del proveedor. |
| Operación | Zona horaria de presentación, límites, intervalos del worker, retención y respaldo. | Configuración versionada y tareas recuperables. |

Las credenciales se proporcionan desde el gestor del entorno. Los repositorios conservan ejemplos con nombres de variables y valores ficticios. El entorno comercial requiere precio, moneda, cuenta receptora y política del plan aprobados por sus responsables.

## Migraciones y datos iniciales

Aplicá las migraciones del release sobre una base exclusiva. Comprobá la versión del esquema y la existencia de las 58 tablas del modelo. La primera configuración crea catálogos, plan y capacidades administrativas mediante el procedimiento autorizado. La carga de datos sintéticos se restringe a prueba o demo.

Los [fixtures funcionales](/3daltoque-docs/documentos/8a0c5389371a-datos-funcionales.json) identifican usuarios, producto, plan, escala y archivos de prueba. La carga conserva un namespace para poder restablecerlos sin afectar otro entorno. Las cuentas de demostración obtienen sus contraseñas durante la preparación y se comunican mediante el canal privado del equipo.

## Arranque y comprobación

1. Iniciá base y almacén; comprobá conectividad y permisos.
2. Ejecutá la API y el worker con los comandos del release.
3. Consultá /health/live y /health/ready; registrá estado y request_id ante un error.
4. Iniciá Web y abrí la dirección informada por su servidor.
5. Iniciá Mobile con la URL de API accesible desde el emulador o dispositivo. La dirección loopback del equipo requiere el encaminamiento propio del dispositivo.
6. Ejecutá un acceso de cliente y maker, consultá un perfil y cargá un archivo privado.
7. Confirmá un pedido de prueba, enviá un mensaje y verificá que el worker procese su aviso.
8. Consultá compra del abono en demo o sandbox y verificá la separación de entornos.

## Actualización y reversión

Conservá release anterior, respaldo y compatibilidad de migraciones antes de actualizar. Detené la admisión de nuevas operaciones durante una migración que requiera exclusión. Aplicá el release, comprobá salud y recorridos críticos, y habilitá tráfico. Una reversión de aplicación requiere un esquema compatible; una restauración de base se realiza en destino aislado y se valida antes del cambio de conexión.

## Respaldo y recuperación

Generá una copia consistente de base y el manifiesto de objetos, con hora, esquema y hashes. Restaurá mediante las herramientas de PostgreSQL en una base separada; recuperá los objetos y verificá referencias, cantidades y permisos. Ejecutá PNF-008 y los accesos críticos después de restaurar. PERF-01 establece los objetivos del piloto.

## Diagnóstico

| Síntoma | Revisión y recuperación |
| --- | --- |
| Readiness 503 | Revisar conexión y configuración indispensable; correlacionar el control fallido con logs. |
| Mobile no conecta | Verificar URL alcanzable, HTTPS y configuración de red del dispositivo. |
| Archivo inaccesible | Revisar pertenencia, estado, bucket y vencimiento; emitir otra autorización desde la API. |
| Abono pendiente | Consultar compra y evento persistido; conciliar antes de repetir una intención. |
| Worker atrasado | Revisar trabajos y eventos_salida, error y próximo intento; preservar las claves de deduplicación. |
| Error de versión | Recuperar recurso vigente antes de reenviar una mutación. |
| Portal sin estilos o enlaces | Verificar base /3daltoque-docs/, versión compilada y resultado de Actions. |

## Registro de instalación

Registrar fecha, responsable, entorno, commits, versiones, migración, configuración sin secretos, comandos ejecutados, controles de salud, resultados de humo, respaldo y ubicación de evidencia. Ese registro permite verificar el manual sobre una versión concreta del producto.

Referencias: [arquitectura](/3daltoque-docs/diseno/implementacion/), [contratos operativos](/3daltoque-docs/diseno/contratos-operativos/), [seguridad](/3daltoque-docs/diseno/seguridad/) y [PERF-01](/3daltoque-docs/planificacion/perfil-perf-01/).
