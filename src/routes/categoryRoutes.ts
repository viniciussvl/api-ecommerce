import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';

const categoryRoutes = Router();

categoryRoutes.get('/', (req, res) => { CategoryController.index(req, res) })
categoryRoutes.get('/:id', (req, res) => { CategoryController.show(req, res) })
categoryRoutes.post('/', (req, res) => { CategoryController.store(req, res) })
categoryRoutes.put('/:id', (req, res) => { CategoryController.update(req, res) })
categoryRoutes.delete('/:id', (req, res) => { CategoryController.destroy(req, res) })

export default categoryRoutes;