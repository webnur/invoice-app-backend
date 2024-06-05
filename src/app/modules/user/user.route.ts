import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/seller', UserController.createSeller);
router.post('/customer', UserController.createCustomer);

export const UserRoutes = router;
