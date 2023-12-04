import {
  IProductDocument,
  IProductRequest,
  ISearchProductRequest,
  IUpdateProductRequest,
} from '@/@types/IProduct';
import { Product } from '@/models/product';
import { ProductRepository } from '../product';

interface Query {
  price?: {
    $gte?: number;
    $lte?: number;
  };
  $or?: Array<{ [key: string]: { $regex: RegExp } }>;
}

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

  async updateProduct(id: string, data: IUpdateProductRequest) {
    const product = (await Product.findOneAndUpdate(
      {
        _id: id,
      },
      data
    )) as unknown as IProductDocument;

    return product;
  }

  async searchProducts({
    page,
    minPrice,
    maxPrice,
    keyword,
  }: ISearchProductRequest) {
    const query: Query = {};

    if (minPrice !== undefined) {
      query.price = { $gte: minPrice };
    }

    if (maxPrice !== undefined) {
      query.price = { ...query.price, $lte: maxPrice };
    }

    if (keyword) {
      query.$or = [
        { name: { $regex: new RegExp(keyword, 'i') } },
        { description: { $regex: new RegExp(keyword, 'i') } },
      ];
    }

    const products = await Product.find(query)
      .limit(10)
      .skip((page - 1) * 10);

    return products;
  }
}
