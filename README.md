# ReviewHub — Plataforma Full Stack de Reseñas

Aplicación web **Full Stack** desarrollada con **Angular, TypeScript, Node.js, Express y MongoDB**, orientada a la gestión de reseñas de usuarios.

El proyecto implementa autenticación mediante **JWT**, protección de contraseñas con **bcryptjs** y control de acceso para que cada usuario pueda gestionar sus propias reseñas.

## Objetivo del proyecto

El objetivo de ReviewHub es desarrollar una aplicación web completa que integre un frontend desarrollado con Angular, un backend basado en una API REST y una base de datos MongoDB.

El proyecto permite aplicar conceptos de:

* Desarrollo Full Stack.
* Arquitectura cliente-servidor.
* APIs REST.
* Autenticación y autorización.
* Gestión de bases de datos.
* Protección de rutas.
* Desarrollo de interfaces web.

## Características

* Registro de usuarios.
* Inicio de sesión.
* Autenticación mediante JWT.
* Protección de contraseñas con bcryptjs.
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
FINALDW/
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
* `guards/` para la protección de rutas.
* `interceptors/` para interceptar solicitudes HTTP.

## Autenticación

El sistema utiliza **bcryptjs** para proteger las contraseñas y **JWT** para gestionar la autenticación de los usuarios.

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

Cada reseña contiene información relacionada con:

* Título.
* Descripción.
* Calificación de 1 a 5.
* Usuario propietario.
* Fecha de creación.
* Fecha de actualización.

### Principales endpoints

```text
POST    /api/auth/register
POST    /api/auth/login

GET     /api/reviews
GET     /api/reviews/:id
POST    /api/reviews
PUT     /api/reviews/:id
DELETE  /api/reviews/:id
```

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

Actualmente se utiliza como proyecto demostrativo para documentar conocimientos en:

* Desarrollo Full Stack.
* Desarrollo de APIs REST.
* Autenticación y autorización.
* Bases de datos.
* Desarrollo frontend con Angular.
* Arquitectura cliente-servidor.

## Estado

🟢 **Proyecto académico — funcional como proyecto demostrativo.**

## Autor

**Luis Angel Mesa Cuervo**

Estudiante de Ingeniería Informática.

[LinkedIn](https://www.linkedin.com/in/luis-angel-mesa-cuervo/)
