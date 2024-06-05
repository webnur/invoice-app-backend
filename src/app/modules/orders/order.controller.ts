import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { OrderService } from './order.service';

const createOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await OrderService.createOrder(data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  },
);

const getOrders: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await OrderService.getOrders();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Orders get successfully!',
      data: result,
    });
  },
);
const getSingleOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await OrderService.getSingleOrder(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Order gets successfully!',
      data: result,
    });
  },
);

export const OrderController = {
  createOrder,
  getOrders,
  getSingleOrder,
};
