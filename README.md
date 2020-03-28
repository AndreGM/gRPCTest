# Testing gRPC implementations

Creating a simple calculator using gRPC (Unary API)

```
protoc -I=. ./protos/calculator.proto --js_out=import_style=commonjs,binary:./server --grpc_out=./server --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`
```