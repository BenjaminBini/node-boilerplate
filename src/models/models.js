import { getDatabase } from '../config/database';
import TestModel from './test.model';

export default {
  configureModels() {
    getDatabase().sequelize.define(TestModel.name, TestModel.schema, TestModel.options);
  },
  getModels() {
    return {
      Test: getDatabase().sequelize.model(TestModel.name),
    };
  },
};
