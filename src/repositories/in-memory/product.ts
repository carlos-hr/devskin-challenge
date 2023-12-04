// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import mongoose from 'mongoose';
import { IProductRequest, IProductResponse } from '@/@types/IProduct';
import { ProductRepository } from '../product';

export class InMemoryProductRepository implements ProductRepository {
  private products: IProductResponse[] = [];

  async create(data: IProductRequest) {
    const _id = new mongoose.Types.ObjectId();

    const product = {
      _id,
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.products.push(product);

    return product;
  }

  async findMany(page: number) {
    return this.products.slice((page - 1) * 10, page * 10 + 1);
  }
}
