import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { logger, errorlogger } from './shared/logger/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  errorlogger.error(error);
  process.exit(1);
});

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('database connect successfully');
    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`);
    });

    // Handle server close event to gracefully shut down the application
    // process.on('SIGINT', () => {
    //   console.log('Closing server...')
    //   server.close(() => {
    //     console.log('Server closed.')
    //     process.exit(0)
    //   })
    // })
  } catch (error) {
    errorlogger.error('failed to connect database', error);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorlogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main();

// process.on('SIGTERM', () => {
//   logger.info('SIGTERM is received');
//   if (server) {
//     server.close();
//   }
// });
