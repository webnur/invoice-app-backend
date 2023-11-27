import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { logger, errorlogger } from './shared/logger/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('database connect successfully')
    const server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })

    // Handle server close event to gracefully shut down the application
    process.on('SIGINT', () => {
      console.log('Closing server...')
      server.close(() => {
        console.log('Server closed.')
        process.exit(0)
      })
    })
  } catch (error) {
    errorlogger.error('failed to connect database', error)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main()

// import mongoose from "mongoose";
// import app from "./app";
// import config from './config/index';

// main().catch(err => console.error(err));

// async function main() {
//   try {
//     await mongoose.connect(config.database_url as string, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       // Add other Mongoose connection options if needed
//     });
//     console.log('Database connected successfully');

//     const server = app.listen(config.port, () => {
//       console.log(`Server is running on port ${config.port}`);
//     });

//     // Handle server close event to gracefully shut down the application
//     process.on('SIGINT', () => {
//       console.log('Closing server...');
//       server.close(() => {
//         console.log('Server closed.');
//         process.exit(0);
//       });
//     });
//   } catch (error) {
//     console.error('Failed to connect to the database', error);
//   }
// }
