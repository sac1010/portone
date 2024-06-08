import stripe from '../config/stripe.js';

// Create and Confirm a PaymentIntent
export const createIntent = async (req, res) => {
    const { amount, currency, payment_method } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method,
            confirm: true,
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: 'never',
            },
        });
        res.status(201).json(paymentIntent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Capture the PaymentIntent
export const captureIntent = async (req, res) => {
    const { id } = req.params;

    try {
        const paymentIntent = await stripe.paymentIntents.capture(id);
        res.status(200).json(paymentIntent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a refund for a PaymentIntent
export const createRefund = async (req, res) => {
    const { id } = req.params;

    try {
        const refund = await stripe.refunds.create({ payment_intent: id });
        res.status(201).json(refund);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a list of all PaymentIntents
export const getIntents = async (req, res) => {
    try {
        const paymentIntents = await stripe.paymentIntents.list();
        res.status(200).json(paymentIntents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
