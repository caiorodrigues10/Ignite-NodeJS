import 'reflect-metadata';

import express, { NextFunction, Response, Request } from 'express';
import 'express-async-errors';
import swaggerUI from 'swagger-ui-express';

import { AppError } from './errors/AppError';
import { router } from './routes';
import swaggerFile from './swagger.json';
import './shared/container';
import './database';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    staus: 'erro',
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(3333, () => console.log('Server on 🏎'));
