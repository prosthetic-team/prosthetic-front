FROM node:18-alpine AS build-stage

WORKDIR /app

# Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm ci

# Copiar el resto del código
COPY . .


ARG ENV_FILE=.env
ENV ENV_FILE=${ENV_FILE}

RUN if [ "$ENV_FILE" != ".env" ] && [ -f "$ENV_FILE" ]; then cp "$ENV_FILE" .env; fi

RUN npm run build


FROM nginx:alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
