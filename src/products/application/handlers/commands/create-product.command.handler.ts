import { Injectable } from "@nestjs/common";
import { ProductsRepository, ProductsRequest } from "products/domain";

export class CreateProductCommand {
  constructor(
    public readonly name,
    public readonly description,
    public readonly price
  ) {}
}

@Injectable()
export class CreateProductCommandHandler {
  constructor(private productRepository: ProductsRepository) {}
  async execute(command: CreateProductCommand) {
    return await this.productRepository.create(
      new ProductsRequest(command.name, command.description, command.price)
    );
  }
}
