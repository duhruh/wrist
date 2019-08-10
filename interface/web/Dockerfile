FROM node:11.11.0 as base

RUN npm i -g yarn 

ADD . /web

WORKDIR /web

# RUN yarn install

FROM base as dev

CMD ["yarn", "start"]

FROM base as builder

RUN yarn build

FROM nginx

COPY --from=builder /web/build /app

COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf