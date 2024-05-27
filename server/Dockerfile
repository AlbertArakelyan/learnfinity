FROM node:20.10.0

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . ./server/

# For security purposes
USER node

EXPOSE 5000

CMD ["yarn", "start"]