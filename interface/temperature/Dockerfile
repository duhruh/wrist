FROM arm32v6/golang:1.12-alpine as base

RUN apk update && apk add unzip git curl

RUN mkdir -p /opt/protoc cd /opt/protoc && \ 
    curl https://github.com/google/protobuf/releases/download/v3.9.1/protoc-3.9.1-linux-x86_64.zip -o protoc.zip -L && \ 
    unzip protoc.zip -d . && \
    mv bin/protoc /usr/bin/ && \
    cd /opt && \
    rm -rf protoc

RUN go get -u github.com/golang/protobuf/protoc-gen-go

COPY . /app

WORKDIR /app

FROM base as dev

CMD go run main.go

FROM base as builder 

RUN go build \ 
        -i .

FROM alpine

RUN apk add --no-cache \
        ca-certificates

COPY --from=builder /app/temperature /app/temperature

CMD ["/app/temperature"]