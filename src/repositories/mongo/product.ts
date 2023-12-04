import { IProductDocument, IProductRequest } from '@/@types/IProduct';
import { Product } from '@/models/product';
import { ProductRepository } from '../product';

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

    return product;
  }

  async deleteProduct(id: string) {
    const product = (await Product.findOneAndDelete({
      _id: id,
    })) as unknown as IProductDocument;

    return product;
  }

  async searchMany() {}

  async updateProduct(id: string) {}
}
