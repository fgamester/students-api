# API de Listado de Estudiantes Básica

Api desarrollada a modo de test, útil también para aprender NestJS y TypeORM.

La api se conecta a una base de datos SQL (en mi caso PostgreSQL) y permite realizar operaciones CRUD sobre tablas de estudiantes y asignaturas. Algunas de estas operaciones son:
- Crear un estudiante
- Actualizar un estudiante
- Eliminar un estudiante (borrado lógico)
- Listar estudiantes (ya sea solo los activos o todos)
- Consultar un estudiante por id

Las tablas constan de los siguientes campos:
- Estudiantes:
  - id (PK)
  - nombre (obligatorio)
  - apellido (obligatorio)
  - email (obligatorio y único)
  - descripción (opcional)
  - telefono (opcional)
  - dirección (opcional)
  - active (booleano utilizado para un borrado lógico).

- Asignaturas:
  - id (PK)
  - nombre (obligatorio y único)
  - descripcion (opcional)
  - active (booleano utilizado para un borrado lógico).


## Tecnologías utilizadas

- **TypeScript:** Lenguaje de programación que es un superconjunto de JavaScript.
- **NestJS:** Framework de Node.js para construir aplicaciones del lado del servidor.
- **TypeORM:** ORM para TypeScript y JavaScript que permite interactuar con bases de datos SQL.
- **PostgreSQL:** Sistema de gestión de bases de datos relacional.

## Guías y más

### Creación de la base de datos (PostgreSQL) con Docker

1. Primero deberás descargar la imagen de PostgreSQL:
```bash
docker pull postgres
```

2. Crearemos y ejecutaremos directamente el contenedor de PostgreSQL:
```bash
docker run --name <nombre-container> -e POSTGRES_USER=<usuario-postgres> -e POSTGRES_PASSWORD=<contraseña-postgres> -p 5432:5432 -d postgres
```

#### ¿Que puedes cambiar aquí?
- `<nombre-container>`: Nombre del contenedor de PostgreSQL. Puedes ponerle el nombre que desees.
- `<usuario-postgres>`: Nombre del usuario de PostgreSQL. Puedes ponerle el nombre que desees (requerido para el siguiente paso y para la conexión desde la API).
- `<contraseña-postgres>`: Contraseña del usuario especificado anteriormente. Puedes ponerle la contraseña que desees (la requeriremos más tarde para crear la conexión desde la API).

3. Acceder al contenedor de PostgreSQL:
```bash
docker exec -it <nombre-container> psql -U <usuario-postgres>
```

Ahora podremos crear una database para conectarnos con nuestra API. (TypeORM no crea una database en caso de que no exista, por lo que es necesario crearla con anterioridad).

4. Con el comando anterior nuestro prompt cambiará a `postgres=#`, lo que significa que estamos dentro del contenedor de PostgreSQL. Ahora podemos crear una base de datos con el siguiente comando:
```sql
CREATE DATABASE <nombre_base_datos>;
```
Recordar terminar el comando con `;`, en caso contrario postgres lo detectará como una instrucción incompleta y deberás cancelarla con `\cancel` y volver a intentarlo.

Puedes ver las bases de datos creadas con el comando `\l`.

5. Para salir del contenedor de PostgreSQL, puedes usar el comando `\q` o `exit`.

Ahora tenemos lista nuestra base de datos para conectarnos desde la API.

### Instalación y configuración de la API por Clonación de repositorio

1. Clonar el repositorio:
```bash
git clone 
```

2. Instalar las dependencias:
```bash
npm install
```

3. Crear un archivo `.env` en la raíz del proyecto y configurar las variables de entorno necesarias. Puedes usar el archivo `.env.example` como referencia.
```bash
DATABASE_URL=postgres://<usuario>:<contraseña>@localhost:5432/<nombre_db>
```
Debes reemplazar `<usuario>`, `<contraseña>` y `<nombre_db>` por los valores que hayas utilizado al crear la base de datos en la sección anterior. [Ir a creación de la database](#creación-de-la-base-de-datos-postgresql-con-docker)

4. Inicia la aplicación:
```bash
npm run start:dev
```

Esto iniciará la aplicación en modo desarrollo. Puedes acceder a la API en `http://localhost:3000`. Puedes acceder a los endpoints de la API a través de Postman o cualquier otro cliente HTTP. Adicionalmente puedes utilizar el frontend que se encuentra en el siguiente repositorio:

### Utilizar container de Docker

Primero deberemos realizar un pull de la imagen de Docker:
```bash
docker pull fgamester/student-api
```

Luego ejecutamos el contenedor:
```bash
docker run --name <nombre-container> -d -e DATABASE_URL=postgres://<usuario>:<contraseña>@host.docker.internal:<5432>/<database> -p <3000>:3000 fgamester/student-api
```

#### ¿Que puedes cambiar aquí?
- `<nombre-container>`: Nombre del contenedor de la API. Puedes ponerle el nombre que desees.
- `<3000>`: Puerto en el que se ejecutará el contenedor. Puedes cambiarlo por el puerto que desees (recuerda utilizar un puerto disponible).
- `<usuario>`: Nombre del usuario de PostgreSQL (fue el nombre que definimos anteriormente al crear el contenedor de postgres).
- `<contraseña>`: Contraseña del usuario especificado anteriormente (fue la contraseña que definimos junto con el usuario).
- `<5432>`: Puerto de PostgreSQL. Puedes cambiarlo por el puerto que hayas expuesto tu contenedor de postgres anteriormente.
- `<database>`: Nombre de la base de datos que creamos anteriormente (la que utilizaremos para conectarnos desde la API).
- `host.docker.internal`: Este es un host especial que Docker proporciona para acceder a la red del host desde el contenedor. Esto es útil para conectarse a servicios que se ejecutan en el host, como PostgreSQL.

Si todo ha ido bien, la terminal responderá con el ID del contenedor y podrás acceder a la api en `http://localhost:3000` o el puerto que hayas especificado.

#### Comandos adicionales

Para detener el contenedor puedes usar el siguiente comando:
```bash
docker stop <nombre-container>
```
Para iniciar el contenedor nuevamente puedes usar el siguiente comando:
```bash
docker start <nombre-container>
```
Para eliminar el contenedor puedes usar el siguiente comando:
```bash
docker rm <nombre-container>
```
Para eliminar la imagen puedes usar el siguiente comando:
```bash
docker rmi <nombre-imagen>
```