import { Request, Response } from "express";
import ProductService from "../business/ProductService";

class ProductController {
    constructor(
        private productService: ProductService
    ) {}


    async index(req: Request, res: Response) {
        try {
            const products = await this.productService.getProducts();
            res.status(201).json(products);
        } catch (error: any) {
            res.status(404).json({ error: error.message })
        }
    }

    public static async show(req: Request, res: Response) {

    }

    async store(req: Request, res: Response) {
        
    }

    async update(req: Request, res: Response) {

    }

    async destroy(req: Request, res: Response) {

    }
}

export default new ProductController();