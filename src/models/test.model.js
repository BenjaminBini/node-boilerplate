import Sequelize from 'sequelize';

export const schema = {
  name: {
    type: Sequelize.STRING,
    field: 'name',
  },
};

export const options = {
  freezeTableName: true,
};
