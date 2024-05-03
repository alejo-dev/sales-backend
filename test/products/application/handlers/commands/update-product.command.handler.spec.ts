import {
  UpdateProductCommand,
  UpdateProductCommandHandler,
} from "products/application";
import { ProducRequestModelBuilder } from "../../../builders/product-request.model.builder";
import { ProducResponseModelBuilder } from "../../../builders/product-response.model.builder";
import { ProductsRepositoryMock } from "../../../mocks/products.repository.mock";

describe("UpdateProductCommandHandler", () => {
  const repository = new ProductsRepositoryMock();
  const handler = new UpdateProductCommandHandler(repository);
  const productRequest = ProducRequestModelBuilder.builder().build();
  const productResponse = ProducResponseModelBuilder.builder().build();
  const command = new UpdateProductCommand(
    productResponse.id,
    productResponse.name,
    productResponse.description,
    productResponse.price
  );

  describe("execute", () => {
    it("Should update a product", (doneFn) => {
      jest
        .spyOn(repository, "update")
        .mockReturnValue(Promise.resolve(productResponse));
      handler.execute(command).then((result) => {
        expect(repository.update).toHaveBeenCalled();
        doneFn();
      });
    });
  });
});
