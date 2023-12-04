import { MongoProductRepository } from '@/repositories/mongo/product';
import { UpdateProductUseCase } from '@/use-cases/update-product';

export function makeUpdateProductUseCase() {
  const productRepository = new MongoProductRepository();
  const updateProductUseCase = new UpdateProductUseCase(productRepository);

  return updateProductUseCase;
}
