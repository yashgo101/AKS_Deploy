FROM node:18.16.0-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build


FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
