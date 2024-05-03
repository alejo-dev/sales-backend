import { ProductEntity } from "products/infrastructure/persistence/entities/product.entity";

export const BaseBuilder = <T>(builderInstance: T, f?: (b: T) => void): T => {
  if (f) f(builderInstance);

  return builderInstance;
};

export class ProductEntityBuilder {
  id!: number;
  name!: string;
  description!: string;
  price!: number;
  private constructor() {
    this.id = 1;
    this.name = "Celular";
    this.description = "Xiaomi";
    this.price = 500000;
  }

  static builder(f?: (b: ProductEntityBuilder) => void): ProductEntityBuilder {
    return BaseBuilder(new ProductEntityBuilder(), f);
  }

  build(): ProductEntity {
    return <ProductEntity>{
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
    };
  }
}
