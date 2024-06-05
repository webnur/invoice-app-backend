import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

router.post('/create', OrderController.createOrder);
router.get('/', OrderController.getOrders);
router.get('/:id', OrderController.getSingleOrder);

export const OrderRoutes = router;
