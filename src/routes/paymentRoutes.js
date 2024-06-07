import { Router } from 'express';
import { createIntent, captureIntent, createRefund, getIntents } from '../controllers/paymentController.js';

const router = Router();

router.post('/create_intent', createIntent);
router.post('/capture_intent/:id', captureIntent);
router.post('/create_refund/:id', createRefund);
router.get('/get_intents', getIntents);

export default router;
