import express from 'express';
import bodyParser from 'body-parser';
import logger from 'winston';
import router from './router';

/**
 * This class is used to serve public resources
 */
export default class Server {
  constructor(port) {
    this.port = port;
    this.app = express();
    this._configure();
  }

  _configure() {
    // Body parsers
    this.app.use(bodyParser.urlencoded({
      extended: true,
    }));
    this.app.use(bodyParser.json());

    this.app.use('/api/v0.0.1/', router);
  }

  serve() {
    this.app.listen(this.port, () => {
      logger.info(`Server running on port ${this.port}`);
    });
  }
}
