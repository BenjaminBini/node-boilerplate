import express from 'express';
import testController from '../controllers/test.controller';

/**
 * Initialize API routes
 */
const router = express.Router();
router.get('/test', testController.getAll);
router.post('/test', testController.create);

export default router;
