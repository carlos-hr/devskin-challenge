import { Router } from 'express';
import { createProduct } from './create-product';
import { listProducts } from './list-products';

const router = Router();

router.post('/create', createProduct);
router.get('/', listProducts);

export { router as productRoutes };
