import { MongoProductRepository } from '@/repositories/mongo/product';
import { DeleteProductUseCase } from '@/use-cases/delete-product';

export function makeDeleteProductUseCase() {
  const productRepository = new MongoProductRepository();
  const deleteProductUseCase = new DeleteProductUseCase(productRepository);

  return deleteProductUseCase;
}
