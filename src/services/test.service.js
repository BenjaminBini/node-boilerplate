import Models from '../models/models';

function getTestModel() {
  return Models.getModels().Test;
}

/**
 * 'Test' service
 */
export default {
  /**
   * Get all 'Test'
   */
  async getAll() {
    return getTestModel().findAll();
  },

  /**
   * Get a 'Test' by its id
   */
  async getById(id) {
    return getTestModel().findById(id);
  },

  async findByName(name) {
    return getTestModel().findAll({
      where: {
        name,
      },
    });
  },

  /**
   * Create a new 'Test'
   */
  async create(data) {
    const name = data.name;
    return getTestModel().create({
      name,
    });
  },

  /**
   * Delete a 'Test' by its id
   */
  async deleteById(id) {
    const entity = await this.getById(id);
    if (entity) {
      return (await entity.destroy());
    }
  }
};
