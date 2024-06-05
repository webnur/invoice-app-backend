import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { SellerService } from './seller.service';

const createSeller: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await SellerService.createSeller(data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Seller created successfully!',
      data: result,
    });
  },
);

const getSellers: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await SellerService.getSellers();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Sellers get successfully!',
      data: result,
    });
  },
);
const getSingleSeller: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await SellerService.getSingleSeller(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Seller gets successfully!',
      data: result,
    });
  },
);

export const SellerController = {
  createSeller,
  getSellers,
  getSingleSeller,
};
