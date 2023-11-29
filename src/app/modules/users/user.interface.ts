import { Model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type IUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
