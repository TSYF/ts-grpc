// Original file: product.proto

import type { Long } from '@grpc/proto-loader';

export interface ProductItem {
  'id'?: (number | string | Long);
  'name'?: (string);
  'description'?: (string);
  'price'?: (number);
  'images'?: (string)[];
  '_id'?: "id";
}

export interface ProductItem__Output {
  'id'?: (string);
  'name': (string);
  'description': (string);
  'price': (number);
  'images': (string)[];
  '_id': "id";
}
