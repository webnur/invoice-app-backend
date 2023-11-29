import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorResponse } from '../interfaces/common';
import { IGenericErrorMessages } from '../interfaces/error';
const zodErrorHandler = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessages[] = Object.values(error.issues).map(
    (issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue?.message,
      };
    },
  );
  const statusCode = 400;
  return {
    statusCode,
    message: 'Zod Validation Error',
    errorMessages: errors,
  };
};

export default zodErrorHandler;
