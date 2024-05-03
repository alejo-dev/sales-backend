import { ProductMapper } from "products/infrastructure/mappers/product.mapper";
import { ProducRequestModelBuilder } from "../../builders/product-request.model.builder";
import { ProductEntityBuilder } from "../../builders/product.entity.builder";

describe("product.mapper.spec.ts", () => {
  describe("ProductMapper", () => {
    it("Should map Entity Array to Model Array", () => {
      const productEntityArray = [ProductEntityBuilder.builder().build()];

      const result =
        ProductMapper.fromEntityArrayToModelArray(productEntityArray);

      expect(result[0].id).toBe(1);
      expect(result[0].name).toBe("Celular");
      expect(result[0].description).toBe("Xiaomi");
      expect(result[0].price).toBe(500000);
    });
    it("Should map model to entity", () => {
      const productRequestModel = ProducRequestModelBuilder.builder().build();

      const result = ProductMapper.fromModelToEntity(productRequestModel);

      expect(result.name).toBe("Celular");
      expect(result.description).toBe("Xiaomi");
      expect(result.price).toBe(500000);
    });
    it("Should map Entity to model", () => {
      const productEntity = ProductEntityBuilder.builder().build();

      const result = ProductMapper.fromEntityToModelResponse(productEntity);

      expect(result.id).toBe(1);
      expect(result.name).toBe("Celular");
      expect(result.description).toBe("Xiaomi");
      expect(result.price).toBe(500000);
    });
  });
});
