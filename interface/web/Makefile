
CLEAN := *~


src/lib/temperature/temperature.pb.js: 
	protoc \
	--plugin=protoc-gen-grpc-web=/usr/bin/protoc-gen-grpc-web \
	--js_out=import_style=commonjs:src/lib \
	--grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/lib \
	temperature/*.proto

	ls src/lib/temperature/*.js | xargs -L1 sed -i '' "1s/^/\/\* eslint-disable \*\//"

CLEAN += src/lib/temperature


clean:
	rm -rf $(CLEAN)