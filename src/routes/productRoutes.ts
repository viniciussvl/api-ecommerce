import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productRoutes = Router();

productRoutes.get('/', ProductController.index)
productRoutes.get('/:id', ProductController.show)
productRoutes.post('/', ProductController.store)
productRoutes.put('/:id', ProductController.update)
productRoutes.delete('/:id', ProductController.destroy)

export default productRoutes;