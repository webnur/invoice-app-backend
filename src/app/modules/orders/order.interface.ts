import { Model } from 'mongoose';

export interface Item {
  product_id: string;
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

export interface IOrder {
  orderNo: string;
  orderDate: Date;
  items: Item[];
  totalAmount: number;
  totalDiscount: number;
  totalTax?: number;
  totalCGST?: number;
}

export type OrderModel = Model<IOrder, Record<string, unknown>>;
