import { IProductDocument, IProductRequest } from '@/@types/IProduct';
import { Product } from '@/models/product';
import { ProductRepository } from '../product';
import { productFormatter } from '@/utils/productFormatter';

export class MongoProductRepository implements ProductRepository {
  constructor() {}

  async create(data: IProductRequest) {
    const product: IProductDocument = await Product.create(data);

    return product;
  }

  async findMany(page: number) {
    const products = await Product.find()
      .limit(10)
      .skip((page - 1) * 10);

    return products;
  }

  async findProductById(id: string) {
    const product = await Product.findById(id);
    console.log('prod', product);
    return product;
  }

  async searchMany() {}

  async deleteById(id: string) {}

  async updateById(id: string) {}
}
