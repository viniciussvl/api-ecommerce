import Product from "../models/Product";
import Repository from "./Repository";

interface IProductRepository {
    getActiveProducts(): Promise<boolean>;
}

class ProductRepository extends Repository implements IProductRepository {
    getActiveProducts(): Promise<boolean> {
       return Product.find({ status: true });
   }    
}

export default ProductRepository
