import { CreateProductCommand } from "products/application/handlers/commands/create-product.command.handler";
import { CreateProductCommandHandler } from "products/application/handlers/commands/create-product.command.handler";
import { ProducRequestModelBuilder } from "../../../builders/product-request.model.builder";
import { ProducResponseModelBuilder } from "../../../builders/product-response.model.builder";
import { ProductsRepositoryMock } from "../../../mocks/products.repository.mock";

describe("CreateProductCommandHandler", () => {
  const repository = new ProductsRepositoryMock();
  const handler = new CreateProductCommandHandler(repository);
  const productRequest = ProducRequestModelBuilder.builder().build();
  const productResponse = ProducResponseModelBuilder.builder().build();
  const command = new CreateProductCommand(
    productRequest.name,
    productRequest.description,
    productRequest.price
  );

  describe("execute", () => {
    it("Should create new product", (doneFn) => {
      jest
        .spyOn(repository, "create")
        .mockReturnValue(Promise.resolve(productResponse));
      handler.execute(command).then((result) => {
        expect(repository.create).toHaveBeenCalled();
        doneFn();
      });
    });
  });
});
