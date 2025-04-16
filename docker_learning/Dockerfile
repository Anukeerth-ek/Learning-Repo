FROM node:16 alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine

npm install package -g serve

WORKDIR /app

EXPOSE 3000

CMD ["node.js", "-s", "dist"]