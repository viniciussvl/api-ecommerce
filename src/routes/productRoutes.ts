import { Router } from 'express';
import { productController }  from '../controllers/ProductController';

const productRoutes = Router();

productRoutes.get('/', (req, res) => { productController.index(req, res) })
productRoutes.get('/:id', (req, res) =>{ productController.show(req, res) })
productRoutes.post('/', (req, res) =>{ productController.store(req, res) })
productRoutes.put('/:id', (req, res) =>{ productController.update(req, res) })
productRoutes.delete('/:id',(req, res) => { productController.destroy(req, res) })

export default productRoutes;