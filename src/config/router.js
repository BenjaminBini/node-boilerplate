import express from 'express';
import testController from '../controllers/test-controller';

const router = express.Router();
router.get('/tests', testController.getAll);

export default router;
