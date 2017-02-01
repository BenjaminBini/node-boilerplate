import express from 'express';
import bodyParser from 'body-parser';
import logger from 'winston';
import router from './router';

/**
 * This class is used to configure the express server
 */
export default class Server {
  constructor(port) {
    this.port = port; // Application port
    this.app = express(); // Instanciate express
    this._configure();
  }

/**
 * Configure middlewares
 */
  _configure() {
    // Body parsers
    this.app.use(bodyParser.urlencoded({
      extended: true,
    }));
    this.app.use(bodyParser.json());

    // API
    this.app.use('/api/v0.0.1/', router);


    // Errors
    function errorMiddleware(err, req, res, next) {
      if (!err.httpStatus) {
        logger.error(err);
      }
      res.status(err.httpStatus ? err.httpStatus : 500);
      res.send({
        reason: err.message,
      });
      next();
    }
    this.app.use(errorMiddleware);
  }

  /**
   * Start the server
   */
  serve() {
    this.app.listen(this.port, () => {
      logger.info(`Server running on port ${this.port}`);
    });
  }
}
