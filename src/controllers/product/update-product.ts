import { makeUpdateProductUseCase } from '@/factories/make-update-product';
import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export async function updateProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const UpdateProductParamsSchema = z.object({
    id: z.string(),
  });

  const updateProductBodySchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.coerce.number().optional(),
  });

  try {
    const { id } = UpdateProductParamsSchema.parse(req.params);
    const data = updateProductBodySchema.parse(req.body);
    const updateProductUseCase = makeUpdateProductUseCase();

    const product = await updateProductUseCase.execute(id, data);

    return res.status(200).send(product);
  } catch (error) {
    next(error);
  }
}
