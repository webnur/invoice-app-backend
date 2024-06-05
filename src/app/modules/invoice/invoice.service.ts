import { IInvoice } from './invoice.interface';
import { Ivoice } from './invoice.model';

const createInvoice = async (payload: IInvoice): Promise<IInvoice> => {
  console.log(payload);
  const result = await Ivoice.create(payload);

  return result;
};
const getAllInvoices = async () => {
  const result = await Ivoice.find();
  return result;
};
const getSingleInvoice = async (id: string) => {
  const result = await Ivoice.findById({ _id: id });
  return result;
};

export const InvoiceService = {
  createInvoice,
  getAllInvoices,
  getSingleInvoice,
};
