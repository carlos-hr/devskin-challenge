import express from 'express';
import cors from 'cors';
import { mongooseClient } from './db/mongoose';

async function startServer() {
  const app = express();
  await mongooseClient();

  app.use(cors);
  app.listen(3333, () => {
    console.log('server is running on http://localhost:3333');
  });
}

startServer();
