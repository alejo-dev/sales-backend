import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "auth/infrastructure";
import {
  CreateProductCommand,
  CreateProductCommandHandler,
  DeleteProductCommandHandler,
  FindAllProductsQueryHandler,
  UpdateProductCommand,
  UpdateProductCommandHandler,
} from "products/application";
import { productDto } from "../dto/products.dto";

@Controller("products")
export class ProductsController {
  constructor(
    private findAllProductsQueryHandler: FindAllProductsQueryHandler,
    private createProductCommandHandler: CreateProductCommandHandler,
    private updateProductCommandHandler: UpdateProductCommandHandler,
    private deleteProductCommandHandler: DeleteProductCommandHandler
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  async findAll(): Promise<any> {
    return this.findAllProductsQueryHandler.execute();
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() product: productDto): Promise<any> {
    const command = new CreateProductCommand(
      product.name,
      product.description,
      product.price
    );
    return this.createProductCommandHandler.execute(command);
  }

  @UseGuards(AuthGuard)
  @Put("/:id")
  async update(
    @Body() product: productDto,
    @Param("id") id: number
  ): Promise<any> {
    const command = new UpdateProductCommand(
      id,
      product.name,
      product.description,
      product.price
    );
    return this.updateProductCommandHandler.execute(command);
  }

  @UseGuards(AuthGuard)
  @Delete("/:id")
  async delete(@Param("id") id: number) {
    return this.deleteProductCommandHandler.execute(id);
  }
}
