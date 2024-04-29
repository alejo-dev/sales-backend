import { Module } from "@nestjs/common";
import { AuthModule } from "auth/auth.module";
import {
  CreateProductCommandHandler,
  DeleteProductCommandHandler,
  FindAllProductsQueryHandler,
  UpdateProductCommandHandler,
} from "./application";
import {
  ProductsController,
  ProductsTypeormRepositoryProvider,
} from "./infrastructure";

@Module({
  imports: [AuthModule],
  controllers: [ProductsController],
  providers: [
    FindAllProductsQueryHandler,
    CreateProductCommandHandler,
    UpdateProductCommandHandler,
    DeleteProductCommandHandler,
    ProductsTypeormRepositoryProvider,
  ],
})
export class ProductsModule {}
