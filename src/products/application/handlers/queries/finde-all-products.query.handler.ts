import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "products/domain";

@Injectable()
export class FindAllProductsQueryHandler {
  constructor(private productsRepository: ProductsRepository) {}
  async execute() {
    return await this.productsRepository.findAll();
  }
}
