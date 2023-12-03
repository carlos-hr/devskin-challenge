/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProductRequest, IProductDocument } from '@/@types/IProduct';

export interface ProductRepository {
  create: (data: IProductRequest) => Promise<IProductDocument>;
  findMany: (page: number) => Promise<IProductDocument[]>;
  findProductById: (id: string) => Promise<IProductDocument | null>;
  deleteById: (id: string) => Promise<any>;
  searchMany: () => Promise<any>;
  updateById: (id: string) => Promise<any>;
}
