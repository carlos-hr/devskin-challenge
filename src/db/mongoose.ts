import mongoose from 'mongoose';
import { env } from '@/env';

export async function mongooseClient() {
  try {
    await mongoose
      .connect(env.MONGODB_URI)
      .then(() => console.log('db runnig'));
  } catch (error) {
    throw Error('can not connect');
  }
}
