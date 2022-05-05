FROM node:16

USER root

RUN apt-get update

ENV PORT=8080

WORKDIR /app

COPY . .

RUN yarn

CMD ["yarn", "run", "dev"]