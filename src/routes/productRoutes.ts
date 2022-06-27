import { Request, Response, Router } from 'express';
import ProductController from '../controllers/ProductController';

const productValidator = require('../middlewares/validators/ProductValidator');
const productRoutes = Router();

productRoutes.get('/', (req, res) => { ProductController.index(req, res) })
productRoutes.get('/:id', (req, res) => { ProductController.show(req, res) })
productRoutes.post('/', [productValidator], (req: Request, res: Response) => { ProductController.store(req, res) })
productRoutes.put('/:id', (req, res) => { ProductController.update(req, res) })
productRoutes.delete('/:id',(req, res) => { ProductController.destroy(req, res) })

export default productRoutes;