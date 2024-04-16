import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import restrictTo from "../middleware/restrictTo.js";
import {
  createProduct,
  getAllProducts,
  getProductById,
  getProductsByCategory,
  updateProduct,
  deleteProduct,
  getAllPrices, // Add this import
} from "../controllers/productController.js";

const router = express.Router();

router.post("/", protect, restrictTo("admin"), createProduct);
router.get("/", getAllProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/prices", getAllPrices); // Add this route
router.get("/:id", getProductById);
router.put("/:id", protect, restrictTo("admin"), updateProduct);
router.delete("/:id", protect, restrictTo("admin"), deleteProduct);

export default router;
