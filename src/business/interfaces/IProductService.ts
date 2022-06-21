export default interface IProductService {
    createProduct(data: Object): Promise<Object>;
    updateProduct(id: String, data: Object): Promise<void>;
    deleteProduct(id: String): Promise<void>;
    getProduct(id: String): Promise<Object>;
    getActiveProducts(): Promise<Object>;
}