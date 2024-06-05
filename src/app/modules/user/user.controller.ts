import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { UserService } from './user.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSeller: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { student, ...userData } = req.body;
    const result = await UserService.createSeller();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Seller created successfully!',
      data: result,
    });
  },
);

const createCustomer: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { student, ...userData } = req.body;
    const result = await UserService.createCustomer();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Customer created successfully!',
      data: result,
    });
  },
);

export const UserController = {
  createSeller,
  createCustomer,
};
