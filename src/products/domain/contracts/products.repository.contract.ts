import { ProductsRequest } from "../models/products-request.model";
import { ProductsResponse } from "../models/products-respose.model";

export abstract class ProductsRepository {
  abstract findAll(): Promise<ProductsResponse[]>;
  abstract create(product: ProductsRequest): Promise<ProductsResponse>;
  abstract update(
    id: number,
    product: ProductsRequest
  ): Promise<ProductsResponse>;
  abstract delete(id: number): Promise<ProductsResponse>;
}
