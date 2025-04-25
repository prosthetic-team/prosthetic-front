FROM node:18-alpine AS build-stage

WORKDIR /app
COPY package*.json ./
# limpiar caché de npm y reinstalar dependencias
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

#COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
