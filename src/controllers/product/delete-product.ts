import { makeDeleteProductUseCase } from '@/factories/make-delete-product';
import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export async function deleteProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const deleteProductParamsSchema = z.object({
    id: z.string(),
  });

  try {
    const { id } = deleteProductParamsSchema.parse(req.params);
    const deleteProductUseCase = makeDeleteProductUseCase();

    await deleteProductUseCase.execute(id);

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
}
