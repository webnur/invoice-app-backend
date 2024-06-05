import { Model } from 'mongoose';

export interface IItem {
  description: string;
  unitPrice: number;
  quantity: number;
  discount?: number;
  netAmount: number;
  taxRate: number;
  cgst?: number;
  sgst?: number;
  igst?: number;
  totalAmount: number;
}

export type ItemModel = Model<IItem, Record<string, unknown>>;
