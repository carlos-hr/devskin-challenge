import { MongoProductRepository } from '@/repositories/mongo/product';
import { SearchProductsUseCase } from '@/use-cases/search-products';

export function makeSearchProductUseCase() {
  const productRepository = new MongoProductRepository();
  const searchProductUseCase = new SearchProductsUseCase(productRepository);

  return searchProductUseCase;
}
