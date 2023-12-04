import express from 'express';
import cors from 'cors';
import { productRoutes } from './controllers/product/route';

import { mongooseClient } from './db/mongoose';
import { errorHandler } from './middlewares/error';
import { env } from './env';

async function initServer() {
  await mongooseClient();

  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/products', productRoutes);

  app.use(errorHandler);

  app.listen(env.PORT, () => {
    console.log(`server is running on http://localhost:${env.PORT}`);
  });
}

initServer();
