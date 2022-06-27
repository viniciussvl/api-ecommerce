import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productRoutes = Router();

productRoutes.get('/', (req, res) => { ProductController.index(req, res) })
productRoutes.get('/:id', (req, res) =>{ ProductController.show(req, res) })
productRoutes.post('/', (req, res) =>{ ProductController.store(req, res) })
productRoutes.put('/:id', (req, res) =>{ ProductController.update(req, res) })
productRoutes.delete('/:id',(req, res) => { ProductController.destroy(req, res) })

export default productRoutes;