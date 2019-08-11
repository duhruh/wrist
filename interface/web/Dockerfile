FROM node:11.11.0 as base


RUN mkdir -p /opt/protoc cd /opt/protoc && \ 
    curl https://github.com/google/protobuf/releases/download/v3.9.1/protoc-3.9.1-linux-x86_64.zip -o protoc.zip -L && \ 
    unzip protoc.zip -d . && \
    mv bin/protoc /usr/bin/ && \
    cd /opt && \
    rm -rf protoc

RUN mkdir -p /opt/protoc-gen-grpc-web cd /opt/protoc-gen-grpc-web && \ 
	curl https://github.com/grpc/grpc-web/releases/download/1.0.6/protoc-gen-grpc-web-1.0.6-linux-x86_64 -o protoc-gen-grpc-web -L && \
	chmod +x protoc-gen-grpc-web && \
    mv protoc-gen-grpc-web /usr/bin/ && \
    cd /opt && rm -rf protoc-gen-grpc-web

RUN npm i -g yarn 

ADD . /web

WORKDIR /web

RUN yarn install

FROM base as dev

CMD ["yarn", "start"]

FROM base as builder

RUN yarn build

FROM nginx

COPY --from=builder /web/build /app

COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf