FROM node:16.15.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install --silent

COPY . ./

CMD ["npm","start"]


