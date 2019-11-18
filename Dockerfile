FROM node:10.17.0-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8080
CMD [ "yarn", "server" ]