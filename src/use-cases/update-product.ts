import { IUpdateProductRequest } from '@/@types/IProduct';
import { ProductRepository } from '@/repositories/product';
import { productFormatter } from '@/utils/productFormatter';
import { isValidObjectId } from 'mongoose';
import { InvalidIdError } from './errors/invalid-id';
import { ResourceNotFoundError } from './errors/resource-not-found';

export class UpdateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(id: string, data: IUpdateProductRequest) {
    const isIdValid = isValidObjectId(id);

    if (!isIdValid) {
      throw new InvalidIdError();
    }

    const product = await this.productRepository.updateProduct(id, data);

    if (!product) {
      throw new ResourceNotFoundError();
    }

    const formatedProduct = productFormatter(product);

    return { product: formatedProduct };
  }
}
