import { ProductsResponse } from "products/domain/models/products-respose.model";

export const BaseBuilder = <T>(builderInstance: T, f?: (b: T) => void): T => {
  if (f) f(builderInstance);

  return builderInstance;
};

export class ProducResponseModelBuilder {
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

  static builder(
    f?: (b: ProducResponseModelBuilder) => void
  ): ProducResponseModelBuilder {
    return BaseBuilder(new ProducResponseModelBuilder(), f);
  }

  build(): ProductsResponse {
    return <ProductsResponse>{
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
    };
  }
}
