import { DeleteProductCommandHandler } from "products/application";
import { ProducResponseModelBuilder } from "../../../builders/product-response.model.builder";
import { ProductsRepositoryMock } from "../../../mocks/products.repository.mock";

describe("DeleteProductCommandHandler", () => {
  const repository = new ProductsRepositoryMock();
  const handler = new DeleteProductCommandHandler(repository);
  const idProduct = 1;
  const productResponse = ProducResponseModelBuilder.builder().build();

  describe("execute", () => {
    it("Should delete a product", (done) => {
      jest
        .spyOn(repository, "delete")
        .mockReturnValue(Promise.resolve(productResponse));
      handler.execute(idProduct).then((result) => {
        expect(repository.delete).toHaveBeenCalled();
        done();
      });
    });
  });
});
