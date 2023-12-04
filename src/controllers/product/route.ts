import { Router } from 'express';
import { createProduct } from './create-product';
import { listProducts } from './list-products';
import { getProductById } from './get-product-by-id';
import { deleteProduct } from './delete-product';
import { updateProduct } from './update-product';
import { searchProducts } from './seach-products';

const router = Router();

router.post('/create', createProduct);

router.get('/', listProducts);
router.get('/find/:id', getProductById);
router.get('/search', searchProducts);

router.put('/update/:id', updateProduct);

router.delete('/delete/:id', deleteProduct);

export { router as productRoutes };
