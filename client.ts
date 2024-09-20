import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

import { type ProtoGrpcType } from "./types_pb/product"

const packageDefinition = protoLoader.loadSync("product.proto")
const grpcObject = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType
const { productPackage } = grpcObject

const client = new productPackage.Product("localhost:8080", grpc.credentials.createInsecure())

type FunctionExpression = () => void
const actions = new Map<string, FunctionExpression>()

actions.set("createProduct", () => client.createProduct({
    name: "Café Mediano",
    description: "Café Marley mediano. Se puede echar azucar en la cafetería.",
    price: 1800,
    images: []
}, (err, item) => {
    if (err !== null) {
        console.error(`Failed procedure call for createProduct`);
        console.error(err.message);
        return
    }

    console.log(`Successful procedure call! Received: ${JSON.stringify(item, null, 2)}`);
}))

actions.set("readProducts", () => client.readProducts({}, (err, item) => {
    if (err !== null) {
        console.error(`Failed procedure call for readProducts`);
        console.error(err.message);
        return
    }

    console.log(`Successful procedure call! Received: ${JSON.stringify(item, null, 2)}`);
}))

actions.set("readProductStream", () => {
    const call = client.readProductStream({})
    call.on("data", item => {
        console.log(`Successfully receiving stream! Received: ${JSON.stringify(item, null, 2)}`);
    })
    call.on("end", () => console.log("Stream ended!"))
})

actions.get(process.argv[2])!()