import { IItem } from './inter.interface';
import { Item } from './item.model';

const createItem = async (payload: IItem): Promise<IItem> => {
  const result = await Item.create(payload);
  return result;
};

const getItems = async () => {
  const result = await Item.find();
  return result;
};

const getSingleItem = async (id: string) => {
  const result = await Item.findById({ _id: id });
  return result;
};

export const ItemService = {
  createItem,
  getItems,
  getSingleItem,
};
