FROM node:20.10.0

WORKDIR /usr/src/app

COPY package.json ./ yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build:docker

VOLUME /usr/src/app/build