import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { InvoiceRouter } from '../modules/invoice/invoice.route';
import { ItemRoutes } from '../modules/item/item.route';
import { CustomerRoutes } from '../modules/customer/customer.route';
import { SellerRoutes } from '../modules/seller/seller.route';
import { OrderRoutes } from '../modules/orders/order.route';
const router = express.Router();
const modulesRoutes = [
  {
    path: '/user',
    module: UserRoutes,
  },
  {
    path: '/customer',
    module: CustomerRoutes,
  },
  {
    path: '/seller',
    module: SellerRoutes,
  },
  {
    path: '/item',
    module: ItemRoutes,
  },
  {
    path: '/order',
    module: OrderRoutes,
  },
  {
    path: '/invoice',
    module: InvoiceRouter,
  },
];

modulesRoutes.forEach(route => router.use(route.path, route.module));
export default router;
