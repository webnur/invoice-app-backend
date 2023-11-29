import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: String,
  },
  {
    timestamps: true,
  },
);

// 3. Create a Model.
export const User = model<IUser, UserModel>('User', userSchema);
