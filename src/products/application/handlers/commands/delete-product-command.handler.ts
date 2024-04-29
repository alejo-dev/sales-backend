import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "products/domain";

@Injectable()
export class DeleteProductCommandHandler {
  constructor(private productRepository: ProductsRepository) {}
  async execute(id: number) {
    return await this.productRepository.delete(id);
  }
}
