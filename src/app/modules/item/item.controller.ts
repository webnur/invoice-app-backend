import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ItemService } from './item.service';

const createItem: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await ItemService.createItem(data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Item created successfully!',
      data: result,
    });
  },
);

const getItems: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ItemService.getItems();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Item gets successfully!',
      data: result,
    });
  },
);
const getSingleItem: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await ItemService.getSingleItem(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Item gets successfully!',
      data: result,
    });
  },
);

export const ItemController = {
  createItem,
  getItems,
  getSingleItem,
};
