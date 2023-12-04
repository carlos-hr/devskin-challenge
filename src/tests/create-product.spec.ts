// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { CreateProductUseCase } from '../use-cases/create-product';
import { InMemoryProductRepository } from '../repositories/in-memory/product';

let productRepository;
let createProductUseCase;

describe('Create product use case', () => {
  beforeEach(() => {
    productRepository = new InMemoryProductRepository();
    createProductUseCase = new CreateProductUseCase(productRepository);
  });

  it('should be able to create a valid product', async () => {
    const newProduct = {
      name: 'laptop',
      description: 'laptop 256gb',
      price: 2000,
    };

    const { product } = await createProductUseCase.execute(newProduct);

    expect(product).toHaveProperty('id');
  });
});
