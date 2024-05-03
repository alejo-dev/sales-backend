import { ProductsRequest } from "products/domain/models/products-request.model";

export const BaseBuilder = <T>(builderInstance: T, f?: (b: T) => void): T => {
  if (f) f(builderInstance);

  return builderInstance;
};

export class ProducRequestModelBuilder {
  name!: string;
  description!: string;
  price!: number;
  private constructor() {
    this.name = "Celular";
    this.description = "Xiaomi";
    this.price = 500000;
  }

  static builder(
    f?: (b: ProducRequestModelBuilder) => void
  ): ProducRequestModelBuilder {
    return BaseBuilder(new ProducRequestModelBuilder(), f);
  }

  build(): ProductsRequest {
    return <ProductsRequest>{
      name: this.name,
      description: this.description,
      price: this.price,
    };
  }
}
