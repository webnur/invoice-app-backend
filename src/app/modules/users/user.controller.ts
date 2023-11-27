import { Request, Response } from 'express'
import { UserService } from './user.service'

const createUser = async (req: Request, res: Response) => {
  const userData = req.body

  try {
    const result = await UserService.createUser(userData)
    res.status(200).json({
      success: true,
      data: result,
      message: 'create user successfully',
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'fail to create user',
    })
    console.log(error)
  }
}

export const UserController = {
  createUser,
}
