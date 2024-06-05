import express from 'express';
import { InvoiceController } from './invoice.controller';

const router = express.Router();

router.post('/create', InvoiceController.createInvoice);
router.get('/', InvoiceController.getAllInvoices);
router.get('/:id', InvoiceController.getSingleInvoice);

export const InvoiceRouter = router;
