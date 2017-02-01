import Sequelize from 'sequelize';

export default {
  name: 'test',
  schema: {
    name: Sequelize.STRING,
  },
  options: {
    freezeTableName: true,
  },
};
