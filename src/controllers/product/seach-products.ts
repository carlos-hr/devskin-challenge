import { makeSearchProductUseCase } from '@/factories/make-search-products';
import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export async function searchProducts(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const searchProductsQuerySchema = z.object({
    page: z.coerce.number().default(1),
    minPrice: z.coerce.number().optional(),
    maxPrice: z.coerce.number().optional(),
    keyword: z.string().optional(),
  });

  try {
    const { page, ...rest } = searchProductsQuerySchema.parse(req.query);
    const searchProductUseCase = makeSearchProductUseCase();

    const { products } = await searchProductUseCase.execute({ page, ...rest });

    return res.status(200).send({ products });
  } catch (error) {
    next(error);
  }
}
