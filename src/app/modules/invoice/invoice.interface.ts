import { Model } from 'mongoose';

export interface Item {
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

export interface address {
  street: string;
  city: string;
  state: string;
  pincode: string;
}
export interface sellerDetails {
  name: string;
  address: address;
  panNo: string;
  gstRegistrationNo: string;
}

export interface billingDetails {
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  stateUTCode: string;
}

export interface shippingDetails {
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  stateUTCode: string;
}

export interface orderDetails {
  orderNo: string;
  orderDate: Date;
}

export interface invoiceDetails {
  invoiceNo: string;
  invoiceDate: Date;
}

export interface IInvoice {
  sellerDetails: sellerDetails;
  placeOfSupply: string;
  billingDetails: billingDetails;
  shippingDetails: shippingDetails;
  placeOfDelivery: string;
  orderDetails: orderDetails;
  invoiceDetails: invoiceDetails;
  reverseCharge: boolean;
  items: Item[];
  signatureImagePath: string;
  totalNetAmount: number;
  totalCGST: number;
  totalAmount: number;
  amountInWords: string;
}

export type InvoiceModel = Model<IInvoice, Record<string, unknown>>;
