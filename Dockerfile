FROM node:14 

RUN npm install pm2@latest -g

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

FROM base as test
RUN npm ci
COPY . .
CMD ["npm", "test"]

FROM base as prod
RUN npm ci --production
COPY . .

CMD ["pm2-runtime", "app.js"]
