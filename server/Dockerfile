FROM node:20.10.0

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . /usr/src/app/

# For security purposes
USER node

EXPOSE 8000

CMD ["yarn", "start"]
