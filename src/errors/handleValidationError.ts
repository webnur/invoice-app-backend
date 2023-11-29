import mongoose from 'mongoose';
import { IGenericErrorMessages } from '../interfaces/error';
import { IGenericErrorResponse } from '../interfaces/common';

// const handleValidationError = (err: mongoose.Error.ValidationError) => {
//     const errors: IGenericErrorMessage[] = Object.values(err.errors).map(el: mongoose.Error.ValidationError | mongoose.Error.CastError) => {
//         return {
//             path: el?.path,
//             message: el?.message
//         }
//     }

// }

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  const errors: IGenericErrorMessages[] = Object.values(err.errors).map(
    (el: mongoose.Error.CastError | mongoose.Error.ValidatorError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    },
  );

  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handleValidationError;
