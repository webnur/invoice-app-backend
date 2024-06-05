import mongoose, { model } from 'mongoose';
import { CustomerModel, ICustomer } from './customer.interface';

const billingDetailsSchema = new mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  stateUTCode: { type: String, required: true },
});

const shippingDetailsSchema = new mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  stateUTCode: { type: String, required: true },
});

const paymentDetailsSchema = new mongoose.Schema({
  cardNumber: { type: String },
  cvv: { type: String },
  expiryDate: { type: String },
});

// Define the main schema (consider using a separate collection for security)
const customerSchema = new mongoose.Schema<ICustomer, CustomerModel>({
  billingDetails: billingDetailsSchema,
  shippingDetails: shippingDetailsSchema,
  paymentDetails: paymentDetailsSchema,
  // Add other user-related fields here
});
export const Customer = model<ICustomer, CustomerModel>(
  'Customer',
  customerSchema,
);
