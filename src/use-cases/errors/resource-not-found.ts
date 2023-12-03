import { CustomError } from '.';

export class ResourceNotFoundError extends CustomError {
  constructor(message: string = 'Resource not found.') {
    super(message, 404);
  }
}
