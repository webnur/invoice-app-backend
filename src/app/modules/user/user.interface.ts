import { Model, Types } from 'mongoose';
import { ISeller } from '../seller/seller.interface';

export interface IUser {
  id: string;
  role: string;
  password: string;
  seller?: Types.ObjectId | ISeller;
}

export type UserModel = Model<IUser, Record<string, unknown>>;
