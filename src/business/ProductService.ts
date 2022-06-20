import { CreateProductDto } from "../dto/product/CreateProductDto";
import UpdateProductDto from "../dto/product/UpdateProductDto";
import Product from "../models/Product";

interface IProductService {
    createProduct(data: Object): Promise<Object>;
    updateProduct(id: String, data: Object): Promise<void>;
    deleteProduct(id: String): Promise<void>;
    getProduct(id: String): Promise<Object>;
    getProducts(): Promise<Object>;
}

class ProductService implements IProductService {

    async getProduct(id: String): Promise<Object> {
        try {
            const product = await Product.findById(id);
            return product;
        } catch (error) {
            throw new Error('Internal Server Error');
        }
    }

    async getProducts(): Promise<Object> {
        try {
            const products = await Product.find({ status: true }).exec();
            return products;
        } catch (error) {
            throw new Error('Internal Server Error');
        }
    }

    async createProduct(data: CreateProductDto): Promise<Object> {
        try {
            const product = await Product.create(data);
            return product;
        } catch (error) {
            throw new Error('Internal Server Error');
        }
    }

    async updateProduct(id: String, data: UpdateProductDto): Promise<void> {

    }

    async deleteProduct(id: String): Promise<void> {

    }
}

export default new ProductService()