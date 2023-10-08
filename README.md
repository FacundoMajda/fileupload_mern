# fileupload_mern

## MongoDB, Express, React y Node.js

Este es un proyecto de ejemplo de una aplicación MERN que te permite cargar archivos y almacenarlos en un servidor.

## Funcionalidades

- Subir archivos individuales o múltiples.
- Validación del tamaño y tipo de archivo.
- Visualización de archivos cargados.
- Almacenamiento de archivos en el servidor.
- Integración con MongoDB para almacenar metadatos de archivos.

# Instalación

?. Configuración del archivo .env:

Crea un archivo llamado '.env' en la raíz de tu proyecto (tanto en la carpeta server como en la carpeta client) si aún no existe.

Agrega las variables de entorno necesarias en el archivo .env de tu servidor para la conexión a la base de datos. Tu archivo .env para el servidor debe verse así:

```bash
PORT=
DB_URL=mongodb://url_puerto/
DB_NAME=tu_base_de_datos
```