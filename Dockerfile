FROM node:14
RUN npm install -g nodemon 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "nodemon", "app.js" ]
