import { ProductRepository } from '@/repositories/product';
import { isValidObjectId } from 'mongoose';
import { InvalidIdError } from './errors/invalid-id';
import { productFormatter } from '@/utils/productFormatter';
import { ResourceNotFoundError } from './errors/resource-not-found';

export class DeleteProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(productId: string) {
    const isIdValid = isValidObjectId(productId);

    if (!isIdValid) {
      throw new InvalidIdError();
    }

    const product = await this.productRepository.deleteProduct(productId);
    const formatedProduct = productFormatter(product);

    if (!formatedProduct.id) {
      throw new ResourceNotFoundError();
    }

    return { product: formatedProduct };
  }
}
