import { ICustomer } from './customer.interface';
import { Customer } from './customer.model';

const createCustomer = async (payload: ICustomer): Promise<ICustomer> => {
  const result = await Customer.create(payload);
  return result;
};

const getCustomers = async () => {
  const result = await Customer.find();
  return result;
};

const getSingleCustomer = async (id: string) => {
  const result = await Customer.findById({ _id: id });
  return result;
};

export const CustomerService = {
  createCustomer,
  getCustomers,
  getSingleCustomer,
};
