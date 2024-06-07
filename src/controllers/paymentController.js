import stripe from '../config/stripe.js';

export const createIntent = async (req, res) => {
    const { amount, currency } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });
        res.status(201).json(paymentIntent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const captureIntent = async (req, res) => {
    const { id } = req.params;

    try {
        const paymentIntent = await stripe.paymentIntents.capture(id);
        res.status(200).json(paymentIntent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createRefund = async (req, res) => {
    const { id } = req.params;

    try {
        const refund = await stripe.refunds.create({ payment_intent: id });
        res.status(201).json(refund);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getIntents = async (req, res) => {
    try {
        const paymentIntents = await stripe.paymentIntents.list();
        res.status(200).json(paymentIntents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
