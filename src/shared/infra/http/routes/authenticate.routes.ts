import { AuthenticateUserController } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController';
import { Router } from 'express';

const authenticateRoutes = Router();

const authenticateController = new AuthenticateUserController();

authenticateRoutes.post('/sessions', authenticateController.handle);

export { authenticateRoutes };
