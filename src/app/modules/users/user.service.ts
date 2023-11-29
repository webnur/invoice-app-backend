import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import IUser from './user.interface';
import { User } from './user.model';
import { generateUserId } from './user.utils';

export const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generate incremental id
  const id = await generateUserId();
  //  set default id into the new user
  user.id = id;
  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }
  const createdUser = await User.create(user);
  if (!createdUser) {
    throw new ApiError(400, 'Failed to Create user');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
