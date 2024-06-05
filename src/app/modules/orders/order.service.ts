import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const result = await Order.create(payload);

  return result;
};

const getOrders = async () => {
  const result = await Order.find();
  return result;
};

const getSingleOrder = async (id: string) => {
  const result = await Order.findById({ _id: id });

  return result;
};

export const OrderService = {
  createOrder,
  getOrders,
  getSingleOrder,
};
