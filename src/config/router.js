import express from 'express';
import testController from '../controllers/test.controller';

/**
 * Initialize API routes
 */
const router = express.Router();
router.get('/test', testController.find);
router.get('/test/:id', testController.getById);
router.post('/test', testController.create);
router.delete('/test/:id', testController.deleteById);

export default router;
