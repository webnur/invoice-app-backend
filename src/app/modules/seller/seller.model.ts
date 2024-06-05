import { Schema, model } from 'mongoose';
import { ISeller, SellerModel } from './seller.interface';

const sellerSchema = new Schema<ISeller, SellerModel>({
  name: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },
  },
  pan: { type: String, required: true },
  gstRegistrationNumber: { type: String, sparse: true }, // Optional for non-GST registered sellers
  placeOfSupply: { type: String, required: true },
});

export const Seller = model<ISeller, SellerModel>('Seller', sellerSchema);
