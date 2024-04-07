import express from "express";
import { createCheckoutSession } from "../controllers/checkoutSessionController.js";

const router = express.Router();

router.post("/create/:priceId", createCheckoutSession);

export default router;
