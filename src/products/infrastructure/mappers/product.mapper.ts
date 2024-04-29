import { ProductsRequest, ProductsResponse } from "products/domain";
import { ProductEntity } from "../persistence/entities/product.entity";

export class ProductMapper {
  public static fromEntityArrayToModelArray(
    products: ProductEntity[]
  ): ProductsResponse[] {
    return products.map(
      (product) =>
        new ProductsResponse(
          product.id,
          product.name,
          product.description,
          product.price
        )
    );
  }

  public static fromModelToEntity(product: ProductsRequest): ProductEntity {
    const productEntity = <ProductEntity>{
      name: product.name,
      description: product.description,
      price: product.price,
    };

    return productEntity;
  }

  public static fromEntityToModelResponse(
    product: ProductEntity
  ): ProductsResponse {
    const productResponse = <ProductsResponse>{
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
    };

    return productResponse;
  }
}
