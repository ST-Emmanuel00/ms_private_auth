# Stage 1: Dependencies - Instala las dependencias de desarrollo y producción
FROM node:22-alpine3.20 AS dependencies

WORKDIR /BMG

# Copiar los archivos package.json y package-lock.json para instalar dependencias
COPY package*.json ./


# Instalar todas las dependencias (producción + desarrollo)
RUN npm install


# Stage 2: Build - Construye la aplicación
FROM node:22-alpine3.20 AS build

WORKDIR /BMG

# Copiar node_modules y archivos de entorno desde la etapa de dependencies
COPY --from=dependencies /BMG/node_modules /BMG/node_modules
COPY package*.json ./

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build


# Stage 3: Production Dependencies - Instala solo dependencias de producción
FROM node:22-alpine3.20 AS production-dependencies

WORKDIR /BMG

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar solo las dependencias de producción
RUN npm install --production


# Stage 4: Runner - Configura el entorno de producción y ejecuta la aplicación
FROM node:22-alpine3.20 AS runner

WORKDIR /BMG

# Copiar node_modules con dependencias de producción desde la etapa production-dependencies
COPY --from=production-dependencies /BMG/node_modules /BMG/node_modules

# Copiar la carpeta dist y otros archivos necesarios para correr la aplicación desde la etapa build
COPY --from=build /BMG/dist /BMG/dist
COPY --from=build /BMG/prisma /BMG/prisma
COPY --from=build /BMG/package.json /BMG/package.json

# Establecer el entorno de producción
ENV NODE_ENV=production

# Exponer el puerto de la aplicación
EXPOSE 3000

# Generar Prisma y ejecutar migraciones para producción
RUN npx prisma generate

# Ejecuta las migraciones y seed solo en el momento de inicialización del contenedor
CMD ["sh", "-c", "npm run migrate:prod && npm run seed:prod && npm start"]
