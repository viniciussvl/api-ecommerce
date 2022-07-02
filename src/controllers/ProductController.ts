import { Request, Response } from 'express';
import IQueryParams from '../common/interfaces/IQueryParams';
import ProductDto from '../dto/ProductDto';
import ProductService from '../services/ProductService';
import logger from '../config/logger';

class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public async index(req: Request, res: Response) {
    const queryParams = req.body.queryParams;

    try {
      const products = await this.productService.getProducts(queryParams);
      logger.info('Listando produtos via API');
      res.status(200).json(products);
    } catch (error: any) {
      logger.error(error);
      res.status(error.status).json({ error: error.message });
    }
  }

  public async show(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const product = await this.productService.getProduct(id);
      res.status(200).json(product);
    } catch (error: any) {
      res.status(error.status).json({ error: error.message });
    }
  }

  public async store(req: Request, res: Response) {
    const data = req.body as ProductDto;

    try {
      const product = await this.productService.createProduct(data);
      res
        .status(200)
        .json({ message: 'Product created successfully', product: product });
    } catch (error: any) {
      res.status(error.status).json({ error: error.message });
    }
  }

  public async update(req: Request, res: Response) {
    const id = req.params.id;
    const data = req.body as ProductDto;

    try {
      await this.productService.updateProduct(id, data);
      res.status(201).json({ message: 'Product updated', product: data });
    } catch (error: any) {
      res.status(error.status).json({ error: error.message });
    }
  }

  public async destroy(req: Request, res: Response) {
    const id = req.params.id;

    try {
      await this.productService.deleteProduct(id);
      res.status(200).json({ message: `Product ${id} deleted` });
    } catch (error: any) {
      res.status(error.status).json({ error: error.message });
    }
  }
}

export default new ProductController();
