FROM node:16.16.0-alpine3.16

WORKDIR /app

ARG API_PORT \
    DB_HOST \
    DB_USER \
    DB_PASSWORD \
    DB_DATABASE
ENV API_PORT=${API_PORT}

# rootのpackage.jsonをdockerにコピー
COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "watch"]