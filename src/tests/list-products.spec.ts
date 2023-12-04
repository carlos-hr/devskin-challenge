// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { ListProductsUseCase } from '../use-cases/list-products';
import { InMemoryProductRepository } from '../repositories/in-memory/product';
import { CreateProductUseCase } from '../use-cases/create-product';

let productRepository;
let listProductsUseCase;
let createProductUseCase;

describe('List products use case', () => {
  beforeEach(async () => {
    productRepository = new InMemoryProductRepository();
    listProductsUseCase = new ListProductsUseCase(productRepository);
    createProductUseCase = new CreateProductUseCase(productRepository);

    const newProduct = {
      name: 'laptop',
      description: 'laptop 256gb',
      price: 2000,
    };

    await createProductUseCase.execute(newProduct);
    await createProductUseCase.execute(newProduct);
    await createProductUseCase.execute(newProduct);
  });

  it('should be able to create a valid product', async () => {
    const { products } = await listProductsUseCase.execute(newProduct);

    expect(products).toHaveLength(3);
  });
});
