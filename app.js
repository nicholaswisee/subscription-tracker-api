import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json()); // process JSON data
app.use(express.urlencoded({ extended: false })); // process form data from HTML forms
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
    res.send("Hellow this is the subscription tracker");
});

app.listen(PORT, async () => {
    console.log(`Subscription tracker is running on http://localhost:${PORT}`);
    await connectToDatabase();
});

export default app;
