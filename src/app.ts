import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import httpStatus from 'http-status';
const app: Application = express();

app.use(cors());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// all routes of this application
app.use('/api/v1', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// app.get('/', (req: Request, res: Response) => {
//   throw new ApiError(400, 'ore baba error')
// })

// const testId = async () => {
//   const testId = await generateUserId()
//   console.log(testId)
// }
// testId()

// global error handler
app.use(globalErrorHandler);

//handle not found Api
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
