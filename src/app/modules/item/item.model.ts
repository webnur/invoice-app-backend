import { Schema, model } from 'mongoose';
import { IItem, ItemModel } from './inter.interface';

const itemSchema = new Schema<IItem, ItemModel>({
  description: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  discount: { type: Number },
  netAmount: { type: Number, required: true },
  taxRate: { type: Number, required: true },
  cgst: { type: Number },
  sgst: { type: Number },
  igst: { type: Number },
  totalAmount: { type: Number, required: true },
});

export const Item = model<IItem, ItemModel>('Item', itemSchema);
