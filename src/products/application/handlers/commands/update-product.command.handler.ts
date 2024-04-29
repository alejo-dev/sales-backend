import { Injectable } from "@nestjs/common";
import { ProductsRepository, ProductsRequest } from "products/domain";

export class UpdateProductCommand {
  constructor(
    public readonly id,
    public readonly name,
    public readonly description,
    public readonly price
  ) {}
}

@Injectable()
export class UpdateProductCommandHandler {
  constructor(private productRepository: ProductsRepository) {}
  async execute(command: UpdateProductCommand) {
    return await this.productRepository.update(
      command.id,
      new ProductsRequest(command.name, command.description, command.price)
    );
  }
}
