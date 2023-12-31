import { MongoProductRepository } from '@/repositories/mongo/product';
import { GetProductByIdUseCase } from '@/use-cases/get-product-by-id';

export function makeGetProductByIdUseCase() {
  const productRepository = new MongoProductRepository();
  const getProductByIdUseCase = new GetProductByIdUseCase(productRepository);

  return getProductByIdUseCase;
}
