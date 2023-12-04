import {
  IProductRequest,
  IProductDocument,
  IUpdateProductRequest,
  ISearchProductRequest,
} from '@/@types/IProduct';

export interface ProductRepository {
  create: (data: IProductRequest) => Promise<IProductDocument>;
  findMany: (page: number) => Promise<IProductDocument[]>;
  findProductById: (id: string) => Promise<IProductDocument | null>;
  deleteProduct: (id: string) => Promise<IProductDocument>;
  updateProduct: (
    id: string,
    data: IUpdateProductRequest
  ) => Promise<IProductDocument>;
  searchProducts: (data: ISearchProductRequest) => Promise<IProductDocument[]>;
}
