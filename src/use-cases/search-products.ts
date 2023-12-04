import { ISearchProductRequest } from '@/@types/IProduct';
import { ProductRepository } from '@/repositories/product';
import { productFormatter } from '@/utils/productFormatter';

export class SearchProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(data: ISearchProductRequest) {
    const { page, ...rest } = data;

    const products = await this.productRepository.searchProducts({
      page,
      ...rest,
    });

    const formatedProductsList = products.map((product) =>
      productFormatter(product)
    );

    return { products: formatedProductsList };
  }
}
