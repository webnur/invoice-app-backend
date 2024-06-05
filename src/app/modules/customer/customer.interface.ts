import { Model } from 'mongoose';

export interface billingDetails {
  address: string;
  city: string;
  state: string;
  pincode: string;
  stateUTCode: string;
}

export interface shippingDetails {
  address: string;
  city: string;
  state: string;
  pincode: string;
  stateUTCode: string;
}

export interface paymentDetails {
  cardNumber: string;
  cvv: string;
  expiryDate: string;
}
export interface ICustomer {
  name: string;
  phone: number;
  email: string;
  billingDetails: billingDetails;
  shippingDetails: shippingDetails;
  paymentDetails?: paymentDetails;
}

export type CustomerModel = Model<ICustomer, Record<string, unknown>>;
