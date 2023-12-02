import { IProductDocument } from '@/@types/IProduct';

export function productFormatter(product: IProductDocument) {
  return {
    id: product._id.toString(),
    name: product.name,
    description: product.description,
    price: product.price,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  };
}
