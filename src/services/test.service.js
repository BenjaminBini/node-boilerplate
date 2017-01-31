import getModels from '../models/models';

/**
 * 'Test' service
 */
export default class TestService {
  /**
   * Get all 'Test' objects
   */
  static async getAll() {
    const result = await getModels().Test.findAll();
    return result;
  }

  /**
   * Create a new 'Test' object
   */
  static async create(data) {
    const name = data.name;
    const result = await getModels().Test.create({
      name,
    });
    return result;
  }
}
