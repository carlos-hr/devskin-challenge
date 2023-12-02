import { makeListProductUseCase } from '@/factories/make-list-products';
import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export async function listProducts(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const listProductsQuerySchema = z.object({
    page: z.coerce.number().default(1),
  });

  try {
    const { page } = listProductsQuerySchema.parse(req.query);
    const listProductUseCase = await makeListProductUseCase();

    const { products } = await listProductUseCase.execute(page);

    return res.status(200).send({ products });
  } catch (error) {
    next(error);
  }
}
