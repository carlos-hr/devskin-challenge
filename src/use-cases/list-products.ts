import { ProductRepository } from '@/repositories/product';

export class ListProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(page: number) {
    const products = await this.productRepository.findMany(page);

    return { products };
  }
}
