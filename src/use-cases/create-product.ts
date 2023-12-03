import { IProductRequest } from '@/@types/IProduct';
import { ProductRepository } from '@/repositories/product';
import { productFormatter } from '@/utils/productFormatter';

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(data: IProductRequest) {
    const product = await this.productRepository.create(data);
    const formatedProduct = productFormatter(product);

    return { product: formatedProduct };
  }
}
