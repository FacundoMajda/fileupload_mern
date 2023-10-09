# Biblioteca MERN

## fileupload_mern

## MongoDB, Express, React y Node.js

Este proyecto es una aplicación de ejemplo que utiliza el stack MERN (MongoDB, Express, React, Node.js) para gestionar una biblioteca de libros y autores. Proporciona una interfaz de usuario donde los usuarios pueden agregar nuevos libros y autores, ver la lista de libros y autores existentes y cargar imágenes de portada para los libros.

### Requisitos previos

- Node.js y npm instalados en tu sistema.
- MongoDB instalado y en funcionamiento.

### Uso
*Navega a la página principal para ver la lista de libros y autores.

*Haz clic en "Agregar Libro" para agregar un nuevo libro.

*Haz clic en "Agregar Autor" para agregar un nuevo autor.

*Haz clic en "Ver Autores" para abrir un slider con la lista de autores.


# Instalación

?. Configuración del archivo .env:

Crea un archivo llamado '.env' en la raíz de tu proyecto (tanto en la carpeta server como en la carpeta client) si aún no existe.

Agrega las variables de entorno necesarias en el archivo .env de tu servidor para la conexión a la base de datos. Tu archivo .env para el servidor debe verse así:

```bash
PORT=
URL=
DB_URL=
DB_PORT=
DB_NAME=
```

?. Instala las dependencias del servidor y del cliente:

```bash
cd server
npm install
cd ../client
npm install
```

?. Inicia el servidor

```bash
cd server
npm run dev
```

?. Inicia el cliente

```bash
cd ../client
npm run dev
```

?. Accede a la aplicacion a traves del localhost
La aplicación estará disponible en http://localhost:{PUERTO}.