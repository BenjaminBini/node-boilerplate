import Sequelize from 'sequelize';
import { getDatabase } from '../config/database';

/**
 * 'Test' model
 */
export default class Test {
  constructor(name) {
    this.name = name; // Model attribute
  }

  /**
   * Initialize Sequelize model
   */
  static getModel() {
    // If the model already exists we return it
    if (getDatabase().sequelize.isDefined('test')) {
      return getDatabase().sequelize.model('test');
    }
    // If not, we define it and then return it
    return getDatabase().sequelize.define('test', {
      name: {
        type: Sequelize.STRING,
        field: 'name',
      },
    }, {
      freezeTableName: true,
    });
  }
}
