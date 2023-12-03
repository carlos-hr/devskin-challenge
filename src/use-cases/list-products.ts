import { ProductRepository } from '@/repositories/product';
import { productFormatter } from '@/utils/productFormatter';

export class ListProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(page: number) {
    const products = await this.productRepository.findMany(page);
    const formatedProductsList = products.map((product) =>
      productFormatter(product)
    );

    return { products: formatedProductsList };
  }
}
