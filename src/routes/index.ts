import { Router } from 'express';
import categoryRoutes from './categoryRoutes';
import productRoutes from './productRoutes';
import authRoutes from './authRoutes';

const router = Router();

router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
router.use('/auth', authRoutes);

export default router;
