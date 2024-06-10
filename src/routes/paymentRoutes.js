import express from 'express';
import {
    createIntent,
    captureIntent,
    createRefund,
    getIntents
} from '../controllers/paymentController.js';

const router = express.Router();

/**
 * @swagger
 * /api/v1/create_intent:
 *   post:
 *     summary: Create and confirm a payment intent
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: integer
 *               currency:
 *                 type: string
 *               payment_method:
 *                 type: string
 *             required:
 *               - amount
 *               - currency
 *               - payment_method
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Internal Server Error
 */
router.post('/create_intent', createIntent);

/**
 * @swagger
 * /api/v1/capture_intent/{id}:
 *   post:
 *     summary: Capture a payment intent
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The payment intent ID
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Internal Server Error
 */
router.post('/capture_intent/:id', captureIntent);

/**
 * @swagger
 * /api/v1/create_refund/{id}:
 *   post:
 *     summary: Create a refund for a payment intent
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The payment intent ID
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Internal Server Error
 */
router.post('/create_refund/:id', createRefund);

/**
 * @swagger
 * /api/v1/get_intents:
 *   get:
 *     summary: Get a list of all payment intents
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Internal Server Error
 */
router.get('/get_intents', getIntents);

export default router;
