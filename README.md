# ReviewHub — Plataforma Full Stack de Reseñas

Aplicación web Full Stack desarrollada con **Angular, TypeScript, Node.js, Express y MongoDB**, orientada a la gestión de reseñas de usuarios.

El proyecto implementa autenticación mediante **JWT**, cifrado de contraseñas con **bcryptjs** y control de acceso para gestionar las reseñas asociadas a cada usuario.

## Características

* Registro de usuarios.
* Inicio de sesión.
* Autenticación mediante JWT.
* Cifrado de contraseñas con bcryptjs.
* Consulta de reseñas.
* Consulta de una reseña específica.
* Creación de reseñas.
* Edición de reseñas propias.
* Eliminación de reseñas propias.
* Calificación de reseñas de 1 a 5.
* Protección de rutas mediante autenticación.
* Separación entre frontend y backend.
* API REST desarrollada con Express.

## Tecnologías

### Frontend

* Angular 21
* TypeScript
* HTML5
* CSS3
* Angular Router
* Guards
* Interceptors
* Services

### Backend

* Node.js
* Express 5
* JavaScript
* API REST
* Middleware

### Base de datos

* MongoDB
* Mongoose

### Autenticación

* JSON Web Token (JWT)
* bcryptjs

### Herramientas

* Git
* GitHub
* npm
* Nodemon
* Visual Studio Code

## Arquitectura

El proyecto está dividido en dos aplicaciones principales:

```text
ReviewHub/
│
├── frontend/
│   └── Angular + TypeScript
│       └── src/
│           └── app/
│               ├── guards/
│               ├── interceptors/
│               ├── pages/
│               └── services/
│
└── backend/
    ├── config/
    ├── controllers/
    ├── middlewares/
    ├── models/
    └── routes/
```

### Backend

El backend utiliza una estructura organizada por responsabilidades:

* `controllers/` — lógica de las operaciones.
* `models/` — modelos de MongoDB mediante Mongoose.
* `routes/` — definición de endpoints.
* `middlewares/` — middleware de autenticación.
* `config/` — configuración de la aplicación.

### Frontend

El frontend está desarrollado con Angular y utiliza:

* `pages/` para las vistas de la aplicación.
* `services/` para la comunicación con el backend.
* `guards/` para protección de rutas.
* `interceptors/` para interceptar solicitudes HTTP.

## Autenticación

El sistema utiliza JWT para autenticar a los usuarios.

Flujo general:

```text
Usuario
   │
   ▼
Registro / Login
   │
   ▼
Backend
   │
   ├── bcryptjs → protección de contraseña
   │
   └── JWT → generación del token
             │
             ▼
          Frontend
             │
             ▼
       Rutas protegidas
```

Los usuarios pueden gestionar únicamente las reseñas asociadas a su propia cuenta.

## Gestión de reseñas

Cada reseña contiene:

* Título
* Descripción
* Calificación de 1 a 5
* Usuario propietario
* Fecha de creación
* Fecha de actualización

Las operaciones principales son:

```text
GET     /reseñas
GET     /reseñas/:id
POST    /reseñas
PUT     /reseñas/:id
DELETE  /reseñas/:id
```

> Los nombres exactos de los endpoints deben verificarse con `reviewRoutes.js` antes de considerar esta sección definitiva.

## Configuración del proyecto

### Requisitos

Antes de ejecutar el proyecto necesitas:

* Node.js
* npm
* MongoDB

### Backend

Entrar en la carpeta:

```bash
cd backend
```

Instalar dependencias:

```bash
npm install
```

Crear un archivo `.env` basado en `.env.example`:

```env
PORT=5000
MONGODB_URI=tu_conexion_mongodb
JWT_SECRET=tu_clave_secreta
```

Iniciar el servidor:

```bash
npm run dev
```

### Frontend

En otra terminal:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

Ejecutar Angular:

```bash
npm start
```

## Estructura del proyecto

```text
FINALDW/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── .gitignore
│   ├── index.js
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── app/
    │   │   ├── guards/
    │   │   ├── interceptors/
    │   │   ├── pages/
    │   │   └── services/
    │   ├── environments/
    │   ├── index.html
    │   ├── main.ts
    │   └── styles.css
    ├── angular.json
    └── package.json
```

## Proyecto académico

Este proyecto fue desarrollado como parte del proceso académico de formación en desarrollo de software.

Actualmente se utiliza como proyecto demostrativo para documentar conocimientos en desarrollo Full Stack, APIs, autenticación, bases de datos y desarrollo frontend con Angular.

## Autor

**Luis Angel Mesa Cuervo**

Estudiante de Ingeniería Informática.

[LinkedIn](https://www.linkedin.com/in/luis-angel-mesa-cuervo/)
