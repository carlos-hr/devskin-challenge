import { MongoProductRepository } from '@/repositories/mongo/product';
import { ListProductsUseCase } from '@/use-cases/list-products';

export function makeListProductUseCase() {
  const productRepository = new MongoProductRepository();
  const listProductUseCase = new ListProductsUseCase(productRepository);

  return listProductUseCase;
}
