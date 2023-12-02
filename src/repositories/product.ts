/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProductRequest, IProductResponse } from '@/@types/IProduct';

export interface ProductRepository {
  create: (data: IProductRequest) => Promise<IProductResponse>;
  findMany: (page: number) => Promise<any>;
  searchMany: () => Promise<any>;
  deleteById: (id: string) => Promise<any>;
  updateById: (id: string) => Promise<any>;
  findProductById: (id: string) => Promise<any>;
}
