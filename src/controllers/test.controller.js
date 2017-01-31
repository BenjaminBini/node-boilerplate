import TestService from '../services/test.service';

/**
 * 'Test' controller
 */
export default class TestController {
  /**
   * Get all 'Test' objects
   */
  static async getAll(req, res, next) {
    try {
      // Use the service to retrieve the results
      const result = await TestService.getAll();

      // Send the response
      res.send(result);
    } catch (e) {
      next(e);
    }
  }

  /**
   * Create a new 'Test' object
   */
  static async create(req, res, next) {
    try {
      const result = await TestService.create(req.body);
      res.send(result);
    } catch (e) {
      next(e);
    }
  }
}
