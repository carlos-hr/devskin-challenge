import { Router } from 'express';
import { createProduct } from './create-product';
import { listProducts } from './list-products';
import { getProductById } from './get-product-by-id';
import { deleteProduct } from './delete-product';

const router = Router();

router.post('/create', createProduct);
router.get('/', listProducts);
router.get('/:id', getProductById);
router.delete('/delete/:id', deleteProduct);

export { router as productRoutes };
