import testService from '../services/test-service';

export default class TestController {
  static getAll(req, res) {
    res.send(testService.getAll());
  }
}
