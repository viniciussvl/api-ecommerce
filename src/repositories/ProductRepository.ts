import Product from "../models/Product";
import BaseRepository from "./BaseRepository";

interface IProductRepository {

}

class ProductRepository implements IProductRepository {
    async find(filter: Object) {
        const products = await Product.find(filter).exec();
        return products;
    }

    async findById() {

    }

    
}

export default ProductRepository;