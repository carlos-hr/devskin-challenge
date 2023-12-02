import mongoose from 'mongoose';
import { env } from '@/env';

export async function mongooseClient() {
  try {
    mongoose.set('strictQuery', true);
    await mongoose
      .connect(env.MONGODB_URI)
      .then(() => console.log('db runnig'));
  } catch (error) {
    throw Error('Not able to connect with database');
  }
}
