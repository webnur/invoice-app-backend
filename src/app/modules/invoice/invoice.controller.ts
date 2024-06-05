import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { InvoiceService } from './invoice.service';

const createInvoice: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const result = await InvoiceService.createInvoice(data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Invoice created successfully!',
      data: result,
    });
  },
);

const getAllInvoices: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await InvoiceService.getAllInvoices();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'get All Invoice successfully!',
      data: result,
    });
  },
);

const getSingleInvoice: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await InvoiceService.getSingleInvoice(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'get single invoice successfully!',
      data: result,
    });
  },
);

export const InvoiceController = {
  createInvoice,
  getAllInvoices,
  getSingleInvoice,
};
