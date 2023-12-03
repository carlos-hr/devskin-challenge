import { makeGetProductByIdUseCase } from '@/factories/make-get-product-by-id';
import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export async function getProductById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const getProductParamsSchema = z.object({
    id: z.string(),
  });

  try {
    const { id } = getProductParamsSchema.parse(req.params);

    const getProductByIdUseCase = makeGetProductByIdUseCase();
    const { product } = await getProductByIdUseCase.execute(id);

    return res.status(200).send({ product });
  } catch (error) {
    next(error);
  }
}
