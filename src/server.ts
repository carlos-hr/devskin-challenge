import express from 'express';
import { mongooseClient } from './db/mongoose';

async function startServer() {
  const app = express();
  await mongooseClient();

  app.listen(3333, () => {
    console.log('server is running on http://localhost:3333');
  });
}

startServer();
