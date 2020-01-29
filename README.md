# Projecto ejemplo usando docker-compose

Este proyecto contiene lo basico para poder ejecutar una solución con `docker-compose`.
como API REST. 

`docker-compose.yml`

```docker
version: "3"

services:
  express: #nombre del contenedor 
    image: node:12 #nombre de la imagen
    working_dir: /app 
    volumes: 
      - ./:/app # ubicación almacenamiento local del proyecto : working_dir
    ports: 
      - 3000:8000 # host : contenedor
    command: sh -c "npm install && npm run dev"
```

## Unit test

Para realizar pruebas unitarias, este proyecto tiene configurado `Jest` con `supertest` para poder realizar pruebas a enpoints de ` API REST `.