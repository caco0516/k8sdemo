FROM node:19-alpine

WORKDIR /src

EXPOSE 80

COPY package.json .

RUN npm i 

COPY . .

ENTRYPOINT ["node", "index.js"]