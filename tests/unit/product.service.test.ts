import productService from "../../src/services/ProductService";

describe("ProductService Class", () => {
  describe("Get active products", () => {
    test("should return a list of products", async () => {
      const products = await productService.getActiveProducts();
      console.log(products);
    });
  });
});
