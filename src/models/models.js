import { getDatabase } from '../config/database';
import { scheme as testSchema, options as testOptions } from './test.model';

export function configureModels() {
  getDatabase().sequelize.define('test', testSchema, testOptions);
}

export default function getModels() {
  return {
    Test: getDatabase().sequelize.model('test'),
  };
}
