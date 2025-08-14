import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, res);

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit())
                return res.status(409).json({ error: "Rate limit exceeded" });
            if (decision.reason.isBot())
                return res
                    .status(403)
                    .json({ error: "Access denied for bots" });

            return res.status(403).json({ error: "Access denied" });
        }

        next();
    } catch (err) {
        console.log(`Arcjet Middleware error: ${err}`);
        next();
    }
};

export default arcjetMiddleware;
