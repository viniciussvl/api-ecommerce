import { CreateProductDto } from "../dto/product/CreateProductDto";
import UpdateProductDto from "../dto/product/UpdateProductDto";
import HttpException from "../exceptions/HttpException";
import Product from "../models/Product";
import IProductService from "./interfaces/IProductService";

class ProductService implements IProductService {

    async getProduct(id: String): Promise<Object> {
        const product = await Product.findOne({ _id: id });
        if(!product) {
            throw new HttpException(404, 'Product not found');
        }

        return product;
    }

    async getActiveProducts(): Promise<Object> {
        const products = await Product.find({ status: true }).exec();
        return products;
    }

    async createProduct(data: CreateProductDto): Promise<Object> {
        const product = await Product.create(data);
        return product;
    }

    async updateProduct(id: String, data: UpdateProductDto): Promise<void> {
        
        await this.checkProductExists(id);

        const productUpdated = await Product.updateOne({ _id: id }, data);
        if(!productUpdated.modifiedCount) {
            throw new HttpException(400, 'Error update product');
        }
    }

    async deleteProduct(id: String): Promise<void> {

        await this.checkProductExists(id);

        const deletedProduct = await Product.deleteOne({ _id: id });
        if(deletedProduct.deletedCount === 0) {
            throw new Error('Product not found');
        }
    }

    private async checkProductExists(id: String) {
        const productExists = await Product.findById({ _id: id });
        if(!productExists) {
            throw new HttpException(404, 'Product not found');
        }
    }
}

export default new ProductService()