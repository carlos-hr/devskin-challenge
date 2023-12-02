import { IProductRequest } from '@/@types/IProduct';
import { ProductRepository } from '@/repositories/product';

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(data: IProductRequest) {
    const product = await this.productRepository.create(data);

    return { product };
  }
}
