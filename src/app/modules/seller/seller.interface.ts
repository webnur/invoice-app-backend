import { Model } from 'mongoose';

export interface ISeller {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: number;
  };
  pan: string;
  gstRegistrationNumber?: string; // Optional for sellers who are not GST registered
  placeOfSupply: string;
}

export type SellerModel = Model<ISeller, Record<string, unknown>>;
