import { IProductDocument, IProductRequest } from '@/@types/IProduct';
import { Product } from '@/models/product';
import { ProductRepository } from '../product';
import { productFormatter } from '@/utils/productFormatter';

export class MongoProductRepository implements ProductRepository {
  constructor() {}

  async create(data: IProductRequest) {
    const product: IProductDocument = await Product.create(data);
    const formatedProduct = productFormatter(product);

    return formatedProduct;
  }

  async findMany(page: number) {
    const products = await Product.find()
      .limit(10)
      .skip((page - 1) * 10);

    const formatedProductsList = products.map((product) =>
      productFormatter(product)
    );

    return formatedProductsList;
  }

  async searchMany() {}

  async deleteById(id: string) {}

  async updateById(id: string) {}

  async findProductById(id: string) {}
}
