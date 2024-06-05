import express from 'express';
import { ItemController } from './item.controller';

const router = express.Router();

router.post('/create', ItemController.createItem);
router.get('/', ItemController.getItems);
router.get('/:id', ItemController.getSingleItem);

export const ItemRoutes = router;
