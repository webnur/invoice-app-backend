import { Schema, model } from 'mongoose';
import { IOrder, OrderModel } from './order.interface';

const itemSchema = new Schema({
  product_id: { type: String, required: true },
  description: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  discount: { type: Number }, // Optional discount per item
  netAmount: { type: Number, required: true },
  taxRate: { type: Number, required: true },
  cgst: { type: Number }, // Optional CGST if applicable
  sgst: { type: Number }, // Optional SGST if applicable
  igst: { type: Number }, // Optional IGST if applicable
  totalAmount: { type: Number, required: true },
});

const orderSchema = new Schema<IOrder, OrderModel>({
  orderNo: { type: String, required: true },
  orderDate: { type: Date, required: true },
  items: { type: [itemSchema], required: true },
  totalAmount: { type: Number, required: true },
  totalDiscount: { type: Number, required: true },
  totalTax: { type: Number }, // Optional total tax (can be calculated)
  totalCGST: { type: Number }, // Optional total CGST (can be calculated)
});

export const Order = model<IOrder, OrderModel>('Order', orderSchema);
