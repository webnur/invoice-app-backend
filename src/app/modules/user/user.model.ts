import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

const sellerSchema = new Schema<IUser, UserModel>({
  id: { type: String, required: true, unique: true }, // Unique identifier (consider using ObjectId instead)
  role: { type: String, required: true },
  password: { type: String, required: true },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Seller', // Reference to the same model (for nested sellers)
  },
});

export default model<IUser, UserModel>('Seller', sellerSchema);
