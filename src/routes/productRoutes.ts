import { Request, Response, Router } from 'express';
import ProductController from '../controllers/ProductController';
import Authenticated from '../middlewares/Authenticated';
import QueryParams from '../middlewares/QueryParams';

const productValidator = require('../middlewares/validators/ProductValidator');
const productRoutes = Router();

productRoutes.get('/', [QueryParams.execute], (req: Request, res: Response) => { ProductController.index(req, res) })
productRoutes.get('/:id', (req, res) => { ProductController.show(req, res) })
productRoutes.post('/', [Authenticated.check, productValidator], (req: Request, res: Response) => { ProductController.store(req, res) })
productRoutes.put('/:id', (req, res) => { ProductController.update(req, res) })
productRoutes.delete('/:id',(req, res) => { ProductController.destroy(req, res) })

export default productRoutes;