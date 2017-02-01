import TestService from '../services/test.service';
import NotFoundError from '../errors/not-found.error';

/**
 * 'Test' controller
 */
export default {
  async find(req, res, next) {
    try {
      const name = req.query.name;
      if (name) {
        res.send(await TestService.findByName(name)).end();
      } else {
        res.send(await TestService.getAll()).end();
      }
    } catch (e) {
      next(e);
    }
  },
  async getById(req, res, next) {
    try {
      const id = req.params.id;
      const result = await TestService.getById(id);
      if (!result) {
        throw new NotFoundError();
      } else {
        res.send(result).end();
      }
    } catch (e) {
      next(e);
    }
  },
  async create(req, res, next) {
    try {
      const data = req.body;
      res.send(await TestService.create(data)).end();
    } catch (e) {
      next(e);
    }
  },
  async deleteById(req, res, next) {
    try {
      const id = req.params.id;
      const result = await TestService.deleteById(id);
      if (!result) {
        throw new NotFoundError();
      } else {
        res.send({
          success: true,
        }).end();
      }
    } catch (e) {
      next(e);
    }
  },
};
