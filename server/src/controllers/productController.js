import Product from "../models/productModel.js";
import { stripe } from "../server.js";

// Create a new product
export const createProduct = async (req, res) => {
  try {
    // const newProduct = new Product(req.body);
    // await newProduct.save();
    // res.status(201).json(newProduct);

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a list of all products
export const getAllProducts = async (req, res) => {
  try {
    const productPrice = await stripe.prices.list({
      expand: ["data.product"], // 🎉 Give me the product data too!
    });
    let productPriceData = productPrice.data;
    for (let productPriceDatum of productPriceData) {
      productPriceDatum.amount = productPriceDatum.unit_amount / 100;
      productPriceDatum.compare_at_amount = Math.ceil(
        productPriceDatum.amount + productPriceDatum.amount * 0.25
      );
    }
    res.status(200).json(productPriceData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get a single product by id
export const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await stripe.products.retrieve(productId);
    const price = await stripe.prices.retrieve(product.default_price);
    const productWithPrice = { data: {} };
    productWithPrice.data.product = product;
    productWithPrice.data.price = price;
    res.status(200).json(productWithPrice);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a product by id
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a product by id
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
