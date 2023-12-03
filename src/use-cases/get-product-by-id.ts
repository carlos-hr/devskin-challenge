import { ProductRepository } from '@/repositories/product';
import { ResourceNotFoundError } from './errors/resource-not-found';
import { isValidObjectId } from 'mongoose';
import { InvalidIdError } from './errors/invalid-id';
import { productFormatter } from '@/utils/productFormatter';

export class GetProductByIdUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(productId: string) {
    const isIdValid = isValidObjectId(productId);

    if (!isIdValid) {
      throw new InvalidIdError();
    }

    const product = await this.productRepository.findProductById(productId);

    if (!product) {
      throw new ResourceNotFoundError();
    }

    const formatedProduct = productFormatter(product);

    return { product: formatedProduct };
  }
}
