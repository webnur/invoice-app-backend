import { ISeller } from './seller.interface';
import { Seller } from './seller.model';

const createSeller = async (payload: ISeller): Promise<ISeller> => {
  const result = await Seller.create(payload);

  return result;
};

const getSellers = async () => {
  const result = await Seller.find();
  return result;
};

const getSingleSeller = async (id: string) => {
  const result = await Seller.findById({ _id: id });

  return result;
};

export const SellerService = {
  createSeller,
  getSellers,
  getSingleSeller,
};
