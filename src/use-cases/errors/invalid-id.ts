import { CustomError } from '.';

export class InvalidIdError extends CustomError {
  constructor(message: string = 'Invalid ID format.') {
    super(message, 400);
  }
}
