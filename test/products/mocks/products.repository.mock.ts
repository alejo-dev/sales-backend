import { ProductsRepository } from "products/domain/contracts/products.repository.contract";
import { ProductsRequest } from "products/domain/models/products-request.model";
import { ProductsResponse } from "products/domain/models/products-respose.model";

export class ProductsRepositoryMock extends ProductsRepository {
  findAll(): Promise<ProductsResponse[]> {
    throw new Error("Method not implemented.");
  }
  create(product: ProductsRequest): Promise<ProductsResponse> {
    throw new Error("Method not implemented.");
  }
  update(id: number, product: ProductsRequest): Promise<ProductsResponse> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<ProductsResponse> {
    throw new Error("Method not implemented.");
  }
}
