# Centro de Apoyo Campus - Gestión de Incidencias Técnicas

Este es un proyecto Node.js con Express que permite llevar la gestión de incidencias técnicas en cada una de las salas de entrenamiento y review del Centro de Apoyo Tecnológico del Campus. Los trainers podrán reportar las incidencias, clasificándolas en las categorías de HARDWARE y SOFTWARE.

## Requisitos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- Node.js (versión 14 o superior)
- MySQL Server (con una base de datos vacía creada para este proyecto)

## Instalación

1. Clona este repositorio o descarga el código fuente.
2. Ejecuta el siguiente comando para instalar las dependencias:

```
bashCopy code
npm install
```

1. Crea un archivo `.env` en la raíz del proyecto y agrega la configuración para la conexión a la base de datos y el archivo de configuración:

```
envCopy codeDB_HOST=nombre_del_host_de_la_base_de_datos
DB_USER=nombre_de_usuario_de_mysql
DB_PASSWORD=contraseña_de_usuario_de_mysql
DB_NAME=nombre_de_la_base_de_datos
MY_CONFIG={"hostname":"127.233.06", "port":3000}
```

## Configuración de la Base de Datos

Antes de iniciar el servidor, asegúrate de haber creado la base de datos en MySQL y que los datos de conexión se encuentren en el archivo `.env` correctamente.

Ejecuta el siguiente comando para crear las tablas en la base de datos:

```
bashCopy code
npm run db:migrate
```

## Ejecución

Una vez que hayas realizado la instalación y configuración, puedes iniciar el servidor con el siguiente comando:

```
bashCopy code
npm start
```

El servidor se ejecutará en `http://localhost:3000` de forma predeterminada.

## Endpoints Disponibles

### Incidencias

- **GET** `/incidencias`: Obtiene la lista de todas las incidencias registradas.
- **POST** `/incidencias`: Crea una nueva incidencia. Se debe proporcionar la información necesaria en el cuerpo de la solicitud.
- **PUT** `/incidencias/:id`: Actualiza una incidencia existente con el ID proporcionado en la URL. Se debe proporcionar la información actualizada en el cuerpo de la solicitud.
- **DELETE** `/incidencias/:id`: Elimina una incidencia con el ID proporcionado en la URL.

### Trainers

- **GET** `/trainers`: Obtiene la lista de todos los trainers registrados.
- **POST** `/trainers`: Crea un nuevo trainer. Se debe proporcionar la información necesaria en el cuerpo de la solicitud.
- **PUT** `/trainers/:id`: Actualiza un trainer existente con el ID proporcionado en la URL. Se debe proporcionar la información actualizada en el cuerpo de la solicitud.
- **DELETE** `/trainers/:id`: Elimina un trainer con el ID proporcionado en la URL.

### Áreas Training

- **GET** `/areas_training`: Obtiene la lista de áreas de entrenamiento junto con la disponibilidad de equipos.
- **POST** `/areas_training`: Crea una nueva área de entrenamiento o actualiza una existente si ya tiene el mismo nombre. Se debe proporcionar la información necesaria en el cuerpo de la solicitud.

### Áreas Review

- **GET** `/areas_review`: Obtiene la lista de áreas de review junto con la disponibilidad de equipos.
- **POST** `/areas_review`: Crea una nueva área de review o actualiza una existente si ya tiene el mismo nombre. Se debe proporcionar la información necesaria en el cuerpo de la solicitud.

## Contribuciones

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Crea un fork del repositorio.
2. Realiza tus cambios y mejoras en tu fork.
3. Envía un pull request a la rama principal de este repositorio.

## Agradecimientos

Este proyecto ha sido posible gracias a las siguientes dependencias:

- class-transformer
- dotenv
- express
- mysql2
- nodemon
- reflect-metadata
- typescript

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.