import { Request, Response } from "express";
import productService from "../business/ProductService";

class ProductController {

    public async index(req: Request, res: Response) {
        try {
            const products = await productService.getProducts();
            res.status(200).json({ products: products });
        } catch (error: any) {
            console.log(error);
            res.status(400).json({ error: error.message })
        }
    }

    public async show(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const product = await productService.getProduct(id);
            res.status(200).json(product);
        } catch (error: any) {
            res.status(400).json({ error: error.message })
        }
    }

    public async store(req: Request, res: Response) {
        const { name, price, status, description } = req.body;

        const data = {
            name,
            price,
            description,
            status
        }
        
        try {
            const products = await productService.createProduct(data);
            res.status(200).json(products);
        } catch (error: any) {
            console.log(error);
            res.status(400).json({ error: error.message })
        }
    }

    public async update(req: Request, res: Response) {

    }

    public async destroy(req: Request, res: Response) {

    }
}

export default new ProductController();