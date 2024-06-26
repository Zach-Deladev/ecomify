import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import checkoutSessionRoutes from "./routes/checkoutSessionRoutes.js";
import Stripe from "stripe";
dotenv.config();
const port = process.env.PORT || 3001;

export const stripe = new Stripe(
  "sk_test_51P2y0FBrCykgLipTicRCfpdO5q6IR0mZgg9V3iy1ePxGOySAIhT6p8tZBLacbda53B2MToBmZaU8HsqSrzJKDLbL00zRd3blKo"
);

connectDB();

const app = express();

app.use(
  cors({
    origin: "https://ecomify.onrender.com",
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/checkout-sessions", checkoutSessionRoutes);

app.get("/", (_, res) => {
  res.send("API is running....");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
