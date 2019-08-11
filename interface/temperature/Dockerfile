FROM golang as base

RUN apt-get update && apt-get install -y unzip

RUN mkdir -p /opt/protoc cd /opt/protoc && \ 
    curl https://github.com/google/protobuf/releases/download/v3.9.1/protoc-3.9.1-linux-x86_64.zip -o protoc.zip -L && \ 
    unzip protoc.zip -d . && \
    mv bin/protoc /usr/bin/ && \
    cd /opt && \
    rm -rf protoc

RUN go get -u github.com/golang/protobuf/protoc-gen-go

FROM base

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

COPY --from=builder /app/tempreature /app/tempreature

CMD ["/app/tempreature"]