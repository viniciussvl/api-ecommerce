interface IProductData {
    name: string,
    description: string,
    price: string,
    status: boolean
}

interface IProductService {
    createProduct(data: IProductData): Promise<void>;
    updateProduct(id: String, data: IProductData): Promise<void>;
    deleteProduct(id: String): Promise<void>;
    getProduct(id: String): Promise<void>;
    getProducts(): Promise<void>;
}

class ProductService implements IProductService {
    async createProduct(data: IProductData): Promise<void> {

    }

    async updateProduct(id: String, data: IProductData): Promise<void> {

    }

    async deleteProduct(id: String): Promise<void> {

    }

    async getProduct(id: String): Promise<void> {

    }

    async getProducts(): Promise<void> {

    }
}

export default ProductService