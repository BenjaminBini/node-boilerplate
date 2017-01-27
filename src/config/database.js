import Sequelize from 'sequelize';
import logger from 'winston';

/**
 * We need only one instance of the database
 */
let instance = null;

export function getDatabase() {
  return instance;
}

export default class Database {
  constructor() {
    if (!this.instance) { // Singleton instanciation
      instance = this;
    }
    // Instanciate Sequelize object
    this.sequelize = new Sequelize(process.env.DB_URI);
    return instance;
  }

  /**
   * Authenticate to the database
   */
  async authenticate() {
    try {
      await this.sequelize.authenticate();
      logger.info('Connection to the database established');
      return true;
    } catch (err) {
      logger.error(err);
      return false;
    }
  }
}
