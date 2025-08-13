import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js"; 

const authRouter = Router();

// POST /api/v1/sign-up
authRouter.post("/sign-up", signUp);

// POST /api/v1/sign-in
authRouter.post("/sign-in", signIn);

// POST /api/v1/sign-out
authRouter.post("/sign-out", signOut);

export default authRouter;
