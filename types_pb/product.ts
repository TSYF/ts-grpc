import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ProductClient as _productPackage_ProductClient, ProductDefinition as _productPackage_ProductDefinition } from './productPackage/Product';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  productPackage: {
    Product: SubtypeConstructor<typeof grpc.Client, _productPackage_ProductClient> & { service: _productPackage_ProductDefinition }
    ProductItem: MessageTypeDefinition
    ProductItems: MessageTypeDefinition
    none: MessageTypeDefinition
  }
}

