import IQueryParams from "../common/interfaces/IQueryParams";
import ProductDto from "../dto/ProductDto";
import HttpException from "../exceptions/HttpException";
import Product from "../models/Product";

interface ProductServiceImp {
  createProduct(data: ProductDto): void;
  updateProduct(id: String, data: ProductDto): Promise<void>;
  deleteProduct(id: String): Promise<void>;
  getProduct(id: String): Promise<Object>;
  getProducts(queryParams: IQueryParams): void;
}

class ProductService implements ProductServiceImp {
  async getProduct(id: String): Promise<Object> {
    const product = await Product.findOne({ _id: id });
    if (!product) {
      throw new HttpException(404, "Product not found");
    }

    return product;
  }

  async getProducts(queryParams: IQueryParams) {
    const limit = queryParams.perPage;
    const page = queryParams.page;

    let sortObject = {};
    const sortBy = queryParams.sortBy;
    sortObject[sortBy] = queryParams.sort;

    const products = await Product.find({ status: true })
      .sort(sortObject)
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();

    const totalProducts = await Product.find({ status: true }).count();

    return {
      products,
      totalProducts,
    };
  }

  async createProduct(data: ProductDto) {
    const product = await Product.create(data);
    return product;
  }

  async updateProduct(id: String, data: ProductDto): Promise<void> {
    const productExists = await this.checkProductExists(id);
    if (!productExists) {
      throw new Error("Product not found");
    }

    const productUpdated = await Product.updateOne({ _id: id }, data);
    if (!productUpdated.modifiedCount) {
      throw new HttpException(400, "Error update product");
    }
  }

  async deleteProduct(id: String): Promise<void> {
    const productExists = await this.checkProductExists(id);
    if (!productExists) {
      throw new Error("Product not found");
    }

    const deletedProduct = await Product.deleteOne({ _id: id });
    if (deletedProduct.deletedCount === 0) {
      throw new Error("Product not found");
    }
  }

  private async checkProductExists(id: String): Promise<boolean> {
    const productExists = await Product.findById({ _id: id });
    if (productExists) {
      return true;
    }

    return false;
  }
}

export default ProductService;
