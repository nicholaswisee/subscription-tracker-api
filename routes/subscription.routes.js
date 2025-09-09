import { Router } from "express";
import {
    createSubscription,
    getSubscriptions,
    getUserSubscriptions,
} from "../controllers/subscription.controller.js";
import authorize from "../middleware/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", getSubscriptions);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);


export default subscriptionRouter;
