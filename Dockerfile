FROM node:16.16.0-alpine3.16

WORKDIR /app

ARG API_PORT
ENV API_PORT=${API_PORT}

# rootのpackage.jsonをdockerにコピー
COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "watch"]