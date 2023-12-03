import { env } from '@/env';
import { CustomError } from '@/use-cases/errors';
import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

export function errorHandler(
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction
) {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof ZodError) {
    return res.status(400).send({
      message: 'Validation error',
      issues: err.format(),
    });
  }

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  if (env.NODE_ENV !== 'prod') {
    console.error(err);
  }

  return res.status(500).send({ message: 'Internal server error.' });
}
