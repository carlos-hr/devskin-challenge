import express from 'express';
import cors from 'cors';
import { productRoutes } from './controllers/product/route';

import { mongooseClient } from './db/mongoose';
import { errorHandler } from './middlewares/error';

async function initServer() {
  await mongooseClient();

  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/products', productRoutes);

  app.use(errorHandler);

  app.listen(3333, () => {
    console.log('server is running on http://localhost:3333');
  });
}

initServer();
