import { MongoProductRepository } from '@/repositories/mongo/product';
import { CreateProductUseCase } from '@/use-cases/create-product';

export function makeCreateProductUseCase() {
  const productRepository = new MongoProductRepository();

  const createProductUseCase = new CreateProductUseCase(productRepository);

  return createProductUseCase;
}
