FROM node:14
RUN npm install pm2@latest -g
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["pm2-runtime", "app.js"]
