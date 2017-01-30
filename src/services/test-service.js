import Test from './../models/test';

/**
 * 'Test' service
 */
export default class TestService {
  /**
   * Get all 'Test' objects
   */
  static async getAll() {
    const result = await Test.getModel().findAll();
    return result;
  }
}
