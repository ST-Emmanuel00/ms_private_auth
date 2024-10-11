<p align="center">
  <img src="https://i.ibb.co/qgPfJtP/logobmg.png" width="200" alt="BMG logo" />
</p>

# 🍻 API Barmanager 

Este es el repositorio para el proyecto **Barmanager**, una aplicación backend desarrollada con Express.js y PostgreSQL.

## Stack utilizado

- Express.js
- PostgreSQL

## 1. Pasos para comenzar

Sigue estos pasos para clonar el repositorio, ejecutar el proyecto y configurar el entorno de desarrollo:

### 1.1. Clonar el repositorio

Abre tu terminal y ejecuta el siguiente comando para clonar este repositorio:


```bash
git clone https://github.com/Disruptive-IT/BMG-api.git
```

### 1.2. Instalar dependencias
Navega hasta el directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```
cd BMG
npm install
```

### 1.3. Instalar TypeScript de manera global
Asegúrate de tener TypeScript instalado globalmente. Si aún no lo has hecho, puedes instalarlo usando npm:

```
npm i -g typescript

// Verificar typescript
tsc --version
```

### 1.4. Instalar TypeScript en el proyecto
Instala TypeScript como una dependencia de desarrollo en tu proyecto:

```
npm install typescript --save-dev
```

## 2. Uso de docker

Puedes usar Docker para instanciar las bases de datos de desarrollo y pruebas y para crear la imagen del proyecto. Aquí te dejamos los pasos.

### 2.1. Instanciar base de datos de desarrollo

Para crear una instancia de la base de datos de desarrollo usando Docker, ejecuta:

```
docker compose up db-development
```

### 2.2. Instanciar base de datos de pruebas

Para crear una instancia de la base de datos de pruebas, ejecuta el siguiente comando:

```
docker compose up db-testing
```

## 3. Configura entornos

Variables de entorno necesarias para la ejecucion del proyecto:

### 3.1. Entorno template

```
PORT=

MAILER_SERVICE=
MAILER_EMAIL=

MAILER_SECRET_KEY=
WEB_SERVICE=

JWT_SEED=

DATABASE_URL=
POSTGRES_PASSWORD=
POSTGRES_USER=

NODE_ENV=
```

### 3.2 Entorno desarrollo - base de datos desarrollo

```
DATABASE_URL=postgresql://dev_barmanager:ditbmg@localhost:5434/postgres
```

### 3.3 Entorno pruebas - base de datos de pruebas

```
DATABASE_URL=postgresql://test_barmanager:testditbmg@localhost:5436/postgres
```

## 4. Ejecutar las migraciones de la base de datos

Para configurar la base de datos, debes ejecutar las migraciones. Dependiendo del entorno, usa el siguiente comando:

### 4.1. Desarrollo
```
npm run migrate:dev
```
### 4.2. Pruebas
```
npm run migrate:test
```
## 5. Llenar base de datos con datos

Una vez que hayas configurado la base de datos, puedes poblarla con datos de prueba. Usa el siguiente comando según el entorno:

### 5.1. Desarrollo
```
npm run seed:dev
```
### 5.2. Pruebas
```
npm run sedd:test
```

## 6. Ejecutar en modo desarrollo
Inicia el servidor Express.js con TypeScript en modo desarollo ejecutando el siguiente comando:

```
npm run dev
```

## 7. Ejecutar pruebas
Este proyecto incluye varias pruebas automatizadas que puedes ejecutar. Aquí te dejamos los comandos para los distintos tipos de pruebas:

### 7.1. Pruebas E2E (End-to-End):
```
npm run test:e2e
```

### 7.2. Pruebas de integración:
```
npm run test:integrations
```

### 7.3. Todas las pruebas:
```
npm run test
```
### 7.4. Pruebas en modo observador:
```
npm run test:watch
```
### 7.5. Cobertura de pruebas:
```
npm run test:coverage
```

## 8 Desplegar proyecto

### 8.1. Generar la imagen del proyecto

Para generar la imagen Docker de tu proyecto, asegúrate de que tu Dockerfile esté correctamente configurado y ejecuta:

Asegurate de definir la version

```
docker build . -t bmg-api:version
```

### 8.2. Ejecutar la imagen del proyecto

Una vez que la imagen haya sido generada, puedes ejecutar el proyecto con:

```
docker compose up api
```

## 9 Probar el API
Una vez que el servidor esté en funcionamiento, puedes probar el API utilizando cualquier herramienta de postman. El host para acceder al API es http://localhost:8000/api. Asegúrate de usar las rutas correctas definidas en tu aplicación para interactuar con los endpoints correspondientes y el puerto definido