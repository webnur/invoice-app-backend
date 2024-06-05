import express from 'express';
import { CustomerController } from './customer.controller';

const router = express.Router();

router.post('/create', CustomerController.createCustomer);
router.get('/', CustomerController.getCustomers);
router.get('/:id', CustomerController.getSingleCustomer);

export const CustomerRoutes = router;
