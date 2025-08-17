import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });

        return res.status(201).json({ success: true, data: subscription });
    } catch (err) {
        next(err);
    }
};

export const getUserSubscriptions = async (req, res, next) => {
    try {
        // User may only get their own subscriptions
        if (req.user.id !== req.params.id) {
            const error = new Error(
                "You may only access your own subscriptions."
            );
            error.status = 401;
            throw error;
        }

        const subscriptions = await Subscription.find({ user: req.params.id });
        res.status(200).json({ success: true, data: subscriptions });
    } catch (err) {
        next(err);
    }
};
