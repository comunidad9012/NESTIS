# Stage 0, install dependencies 
FROM node:20 AS dependency-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

# Stage 1, "build-stage", based on Node.js, to build and compile the frontend
FROM dependency-stage AS build-stage

WORKDIR /app

COPY ./ /app/

ARG NESTIS_API_URL=${NESTIS_API_URL}

RUN npm run build


# Stage 2, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1

COPY --from=build-stage /app/dist/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx-backend-not-found.conf /etc/nginx/extra-conf.d/backend-not-found.conf
