import express from 'express';
import { SellerController } from './seller.controller';

const router = express.Router();

router.post('/create', SellerController.createSeller);
router.get('/', SellerController.getSellers);
router.get('/:id', SellerController.getSingleSeller);

export const SellerRoutes = router;
