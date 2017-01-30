import express from 'express';
import testController from '../controllers/test-controller';

/**
 * Initialize API routes
 */
const router = express.Router();
router.get('/test', testController.getAll);

export default router;
