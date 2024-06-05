import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { CustomerService } from './customer.service';

const createCustomer: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await CustomerService.createCustomer(data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Customer created successfully!',
      data: result,
    });
  },
);

const getCustomers: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CustomerService.getCustomers();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Customer gets successfully!',
      data: result,
    });
  },
);
const getSingleCustomer: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await CustomerService.getSingleCustomer(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'customer gets successfully!',
      data: result,
    });
  },
);

export const CustomerController = {
  createCustomer,
  getCustomers,
  getSingleCustomer,
};
