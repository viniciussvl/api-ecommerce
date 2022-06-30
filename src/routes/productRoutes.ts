import { Request, Response, Router } from 'express';
import ProductController from '../controllers/ProductController';
import Authentication from '../middlewares/Authentication';
import Authorization from '../middlewares/Authorization';
import QueryParams from '../middlewares/QueryParams';

const productValidator = require('../middlewares/validators/ProductValidator');
const productRoutes = Router();

productRoutes.get('/', [QueryParams.execute], (req: Request, res: Response) => { ProductController.index(req, res) })
productRoutes.get('/:id', (req, res) => { ProductController.show(req, res) })

productRoutes.post('/', [Authentication.check, productValidator, Authorization.check], (req: Request, res: Response) => { ProductController.store(req, res) })
productRoutes.put('/:id', [Authentication.check, productValidator, Authorization.check], (req: Request, res: Response) => { ProductController.update(req, res) })
productRoutes.delete('/:id', [Authentication.check, productValidator, Authorization.check], (req: Request, res: Response) => { ProductController.destroy(req, res) })

export default productRoutes;