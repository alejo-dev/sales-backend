import { Injectable } from "@nestjs/common";
import {
  ProductsRepository,
  ProductsRequest,
  ProductsResponse,
} from "products/domain";
import { ProductMapper } from "products/infrastructure/mappers/product.mapper";
import { ProductEntity } from "../entities/product.entity";

@Injectable()
export class ProductsTypeormRepository extends ProductsRepository {
  public async findAll(): Promise<ProductsResponse[]> {
    const products = await ProductEntity.find();
    return ProductMapper.fromEntityArrayToModelArray(products);
  }

  public async create(product: ProductsRequest): Promise<ProductsResponse> {
    const productEntity = new ProductEntity();
    productEntity.name = product.name;
    productEntity.description = product.description;
    productEntity.price = product.price;

    const newEntity = await productEntity.save();

    return ProductMapper.fromEntityToModelResponse(newEntity);
  }

  public async update(
    id: number,
    product: ProductsRequest
  ): Promise<ProductsResponse> {
    const productEntty = await ProductEntity.findOne({ where: { id: id } });
    productEntty.name = product.name;
    productEntty.description = product.description;
    productEntty.price = product.price;
    const updatedEntity = await productEntty.save();
    return ProductMapper.fromEntityToModelResponse(updatedEntity);
  }

  public async delete(id: number): Promise<ProductsResponse> {
    const productEntty = await ProductEntity.findOne({ where: { id: id } });
    const updatedEntity = await productEntty.remove();
    return ProductMapper.fromEntityToModelResponse(updatedEntity);
  }
}
