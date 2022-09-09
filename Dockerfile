FROM node:16.17-alpine3.15

ARG TAG="0.0.0"

# RUN apk add xdg-utils

WORKDIR /usr/local/noah-custody-front

ADD . .

RUN npm cache clean --force

RUN npm install pm2 yarn --location=global --force

RUN yarn --legacy-peer-deps

RUN if [ $(echo $TAG | grep "v") != '' ] ; then yarn run build:noah; else yarn run build:dev; fi
