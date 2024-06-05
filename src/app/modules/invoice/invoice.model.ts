import { Schema, model } from 'mongoose';
import { IInvoice, InvoiceModel, Item } from './invoice.interface';

const addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: Number, required: true },
});

const sellerDetailsSchema = new Schema({
  name: { type: String, required: true },
  address: addressSchema,
  panNo: { type: String, required: true },
  gstRegistrationNo: { type: String, required: true },
});

const billingDetailsSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: Number, required: true },
  stateUTCode: { type: String }, // Optional state code
});

const shippingDetailsSchema = new Schema({
  name: { type: String }, // Optional (can be omitted)
  address: { type: String, required: true },
  city: { type: String }, // Optional (can be omitted)
  state: { type: String }, // Optional (can be omitted)
  pincode: { type: Number }, // Optional (can be omitted)
  stateUTCode: { type: String }, // Optional state code
});

const orderDetailsSchema = new Schema({
  orderNo: { type: String, required: true },
  orderDate: { type: Date, required: true },
});

const invoiceDetailsSchema = new Schema({
  invoiceNo: { type: String, required: true },
  invoiceDate: { type: Date, required: true },
});

const itemSchema = new Schema({
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

const invoiceSchema = new Schema<IInvoice>({
  sellerDetails: { type: sellerDetailsSchema, required: true },
  placeOfSupply: { type: String, required: true },
  billingDetails: { type: billingDetailsSchema, required: true },
  shippingDetails: { type: shippingDetailsSchema },
  placeOfDelivery: { type: String, required: true },
  orderDetails: { type: orderDetailsSchema, required: true },
  invoiceDetails: { type: invoiceDetailsSchema, required: true },
  reverseCharge: { type: Boolean, required: true },
  items: { type: [itemSchema], required: true },
  signatureImagePath: { type: String },
  totalNetAmount: { type: Number, required: true },
  totalCGST: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  amountInWords: { type: String, required: true },
});
export const Ivoice = model<IInvoice, InvoiceModel>('Invoice', invoiceSchema);
