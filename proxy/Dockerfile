FROM arm32v6/golang:alpine as builder

RUN apk update & apk add git

RUN go get -u github.com/golang/dep/cmd/dep
RUN git clone https://github.com/improbable-eng/grpc-web.git $GOPATH/src/github.com/improbable-eng/grpc-web
WORKDIR $GOPATH/src/github.com/improbable-eng/grpc-web

RUN dep ensure # after installing dep

RUN go install ./go/grpcwebproxy # installs into $GOPATH/bin/grpcwebproxy



FROM alpine


COPY --from=builder /go/bin/grpcwebproxy /bin/grpcwebproxy


ENTRYPOINT [ "/bin/grpcwebproxy" ]