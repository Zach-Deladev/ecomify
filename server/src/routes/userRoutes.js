import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  signIn,
  signUp,
  getProfile,
  updateProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.route("/profile").get(protect, getProfile).put(protect, updateProfile);

export default router;
