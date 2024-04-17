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
// Get a list of all products with their data
export const getAllProducts = async (req, res) => {
  try {
    const products = await stripe.products.list({
      expand: ["data"],
    });
    res.status(200).json(products.data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Function to get all prices
export const getAllPrices = async (req, res) => {
  try {
    // Fetch all prices from Stripe
    const prices = await stripe.prices.list({
      limit: 100, // Adjust the limit as needed
    });

    // Extract relevant data and send it in the response
    const pricesData = prices.data.map((price) => ({
      id: price.id,
      unit_amount: price.unit_amount,
      currency: price.currency,
      product: price.product,
      active: price.active,
      // Add any other fields you need
    }));

    res.status(200).json(pricesData);
  } catch (error) {
    console.error("Error fetching prices:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category; // Get the category from request parameters

    // Fetch all products from Stripe API
    const productsResponse = await stripe.products.list();

    console.log("Products Response:", productsResponse);
    const products = productsResponse.data; // Extract the products from the response

    // Filter products by category
    const productsByCategory = products.filter((product) => {
      // Check if the product has metadata and if the category matches the requested category
      return product.metadata && product.metadata.category === category;
    });

    // If there are products in the category, return them
    if (productsByCategory.length > 0) {
      res.status(200).json(productsByCategory);
    } else {
      // If no products found for the category, return a not found message
      res.status(404).json({ message: "No products found for the category" });
    }
  } catch (error) {
    // If there's an error, return an error message
    res.status(500).json({ message: error.message });
  }
};

// Get a single product by id
export const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await stripe.products.retrieve(productId);
    const prices = await stripe.prices.list({ product: productId });

    const productWithPrices = { data: {} };
    productWithPrices.data.product = product;
    productWithPrices.data.prices = prices.data;

    res.status(200).json(productWithPrices);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// Get all prices for a product by product id
export const getAllPricesForProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await stripe.products.retrieve(productId);
    const prices = await stripe.prices.list({ product: productId });

    const productWithPrices = { data: {} };
    productWithPrices.data.product = product;
    productWithPrices.data.prices = prices.data;

    res.status(200).json(productWithPrices);
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
