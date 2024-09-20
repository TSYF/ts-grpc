// Original file: product.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ProductItem as _productPackage_ProductItem, ProductItem__Output as _productPackage_ProductItem__Output } from '../productPackage/ProductItem';
import type { ProductItems as _productPackage_ProductItems, ProductItems__Output as _productPackage_ProductItems__Output } from '../productPackage/ProductItems';
import type { none as _productPackage_none, none__Output as _productPackage_none__Output } from '../productPackage/none';

export interface ProductClient extends grpc.Client {
  createProduct(argument: _productPackage_ProductItem, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_productPackage_ProductItem__Output>): grpc.ClientUnaryCall;
  createProduct(argument: _productPackage_ProductItem, metadata: grpc.Metadata, callback: grpc.requestCallback<_productPackage_ProductItem__Output>): grpc.ClientUnaryCall;
  createProduct(argument: _productPackage_ProductItem, options: grpc.CallOptions, callback: grpc.requestCallback<_productPackage_ProductItem__Output>): grpc.ClientUnaryCall;
  createProduct(argument: _productPackage_ProductItem, callback: grpc.requestCallback<_productPackage_ProductItem__Output>): grpc.ClientUnaryCall;
  
  readProductStream(argument: _productPackage_none, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_productPackage_ProductItem__Output>;
  readProductStream(argument: _productPackage_none, options?: grpc.CallOptions): grpc.ClientReadableStream<_productPackage_ProductItem__Output>;
  
  readProducts(argument: _productPackage_none, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_productPackage_ProductItems__Output>): grpc.ClientUnaryCall;
  readProducts(argument: _productPackage_none, metadata: grpc.Metadata, callback: grpc.requestCallback<_productPackage_ProductItems__Output>): grpc.ClientUnaryCall;
  readProducts(argument: _productPackage_none, options: grpc.CallOptions, callback: grpc.requestCallback<_productPackage_ProductItems__Output>): grpc.ClientUnaryCall;
  readProducts(argument: _productPackage_none, callback: grpc.requestCallback<_productPackage_ProductItems__Output>): grpc.ClientUnaryCall;
  
}

export interface ProductHandlers extends grpc.UntypedServiceImplementation {
  createProduct: grpc.handleUnaryCall<_productPackage_ProductItem__Output, _productPackage_ProductItem>;
  
  readProductStream: grpc.handleServerStreamingCall<_productPackage_none__Output, _productPackage_ProductItem>;
  
  readProducts: grpc.handleUnaryCall<_productPackage_none__Output, _productPackage_ProductItems>;
  
}

export interface ProductDefinition extends grpc.ServiceDefinition {
  createProduct: MethodDefinition<_productPackage_ProductItem, _productPackage_ProductItem, _productPackage_ProductItem__Output, _productPackage_ProductItem__Output>
  readProductStream: MethodDefinition<_productPackage_none, _productPackage_ProductItem, _productPackage_none__Output, _productPackage_ProductItem__Output>
  readProducts: MethodDefinition<_productPackage_none, _productPackage_ProductItems, _productPackage_none__Output, _productPackage_ProductItems__Output>
}
