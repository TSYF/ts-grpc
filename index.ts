//? NOTE: Bun 1.1.27 can't run this. I'm running it with tsx.
import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

import { type ProtoGrpcType } from "./types_pb/product"
import type { ProductItem } from './types_pb/productPackage/ProductItem'
import type { none } from './types_pb/productPackage/none'
import { type ProductItems } from './types_pb/productPackage/ProductItems';

const packageDefinition = protoLoader.loadSync("product.proto")
const grpcObject = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
const { productPackage } = grpcObject

const server = new grpc.Server();

server.bindAsync("localhost:8080", grpc.ServerCredentials.createInsecure(), (error, port) => {
    if (error !== null) {
        console.error(`FAILED TO LISTEN ON PORT: ${port}`);
        console.error(error.message);
        return
    }
    console.log("LISTENING!");
})
server.addService(productPackage.Product.service, {
    createProduct,
    readProducts,
    readProductStream
})

const items: ProductItems = {
    items: []
}

function createProduct(call: grpc.ServerUnaryCall<ProductItem, ProductItem>, callback: grpc.sendUnaryData<ProductItem>) {
    console.log(call);
    const requestPayload = call.request

    if (requestPayload == null) {
        callback(new Error("Error retrieving the Product from the request"), null)
        return
    }

    const item: ProductItem = {
        id: items.items!.length - 1,
        name: requestPayload.name,
        description: requestPayload.description,
        price: requestPayload.price,
        images: requestPayload.images
    }
    const itemsLength = items.items!.push(item)
    

    callback(null, items.items![itemsLength - 1])
}

function readProducts(call: grpc.ServerUnaryCall<none, ProductItems>, callback: grpc.sendUnaryData<ProductItems>) {
    callback(null, items)
}

function readProductStream(call: grpc.ServerWritableStream<none, ProductItem>, callback: grpc.sendUnaryData<ProductItem>) {
    items.items!.forEach(item => call.write(item))
}