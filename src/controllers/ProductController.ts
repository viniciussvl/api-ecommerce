import { Request, Response } from "express";
import productService from "../services/ProductService";

class ProductController {

    public async index(req: Request, res: Response) {
        try {
            const products = await productService.getActiveProducts();
            res.status(200).json({ products: products });

        } catch (error: any) {
            res.status(error.status).json({ error: error.message })
        }
    }

    public async show(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const product = await productService.getProduct(id);
            res.status(200).json(product);

        } catch (error: any) {
            res.status(error.status).json({ error: error.message })
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
            const product = await productService.createProduct(data);
            res.status(200).json({ message: 'Product created successfully', product: product });

        } catch (error: any) {
            res.status(error.status).json({ error: error.message })
        }
    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const { name, price, status, description } = req.body;

        const data = {
            name,
            price,
            description,
            status
        }

        try {
            await productService.updateProduct(id, data);
            res.status(201).json({ message: 'Product updated', product: data });

        } catch(error: any) {
            res.status(error.status).json({ error: error.message });
        }
    }

    public async destroy(req: Request, res: Response) {
        const id = req.params.id;
        
        try {
            await productService.deleteProduct(id);
            res.status(200).json({ message: `Product ${id} deleted` });

        } catch (error: any) {
            res.status(error.status).json({ error: error.message });
        }
    }
}

export default new ProductController();