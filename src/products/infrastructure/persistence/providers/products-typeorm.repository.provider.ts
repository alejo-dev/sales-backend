import { Provider } from "@nestjs/common";
import { ProductsRepository } from "products/domain";
import { ProductsTypeormRepository } from "../repository/products-typeorm.repository";

export const ProductsTypeormRepositoryProvider: Provider = {
  provide: ProductsRepository,
  useClass: ProductsTypeormRepository,
};
