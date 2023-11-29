import { Request, RequestHandler, Response } from 'express';
import { UserService } from './user.service';

const createUser: RequestHandler = async (
  req: Request,
  res: Response,
  next,
) => {
  const userData = req.body;

  try {
    const result = await UserService.createUser(userData);
    res.status(200).json({
      success: true,
      data: result,
      message: 'create user successfully',
    });
  } catch (error) {
    res.status(400).json({
      // success: false,
      // message: 'fail to create user',
      // error: error,
    });
    next(error);
  }
};

export const UserController = {
  createUser,
};
