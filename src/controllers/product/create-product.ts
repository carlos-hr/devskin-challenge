import { makeCreateProductUseCase } from '@/factories/make-create-product';
import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export async function createProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const createProductBodySchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.coerce.number(),
  });

  try {
    const { description, name, price } = createProductBodySchema.parse(
      req.body
    );

    const createProductUseCase = await makeCreateProductUseCase();

    const { product } = await createProductUseCase.execute({
      name,
      description,
      price,
    });
    return res.status(201).send({ product });
  } catch (error) {
    next(error);
  }
}
