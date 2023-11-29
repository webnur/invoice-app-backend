/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler } from 'express';
import config from '../../config';

import handleValidationError from '../../errors/handleValidationError';
import { IGenericErrorMessages } from '../../interfaces/error';
import ApiError from '../../errors/ApiError';
import { errorlogger } from '../../shared/logger/logger';
import { ZodError } from 'zod';
import zodErrorHandler from '../../errors/zodErrorHandler';
import castErrorHandler from '../../errors/castErrorHandler';

const globalErrorHandler: ErrorRequestHandler = async (error, req, res) => {
  config.env === 'development'
    ? console.log(`🐱‍🏍 globalErrorHandler ~~`, { error })
    : errorlogger.error(`🐱‍🏍 globalErrorHandler ~~`, error);
  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorMessages: IGenericErrorMessages[] = [];

  if (error?.name === 'ValidatorError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ZodError) {
    const simplifiedError = zodErrorHandler(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error?.name === 'CastError') {
    const simplifiedError = castErrorHandler(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorMessages = error.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });
  // next()
};

export default globalErrorHandler;
