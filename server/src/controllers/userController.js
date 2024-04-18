import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    Auth user & get token
// @route   POST /api/users/sign-in
// @access  Public

const signIn = async (req, res) => {
  const { email, password } = req.body; // Removed name and role as they're not used here

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    // Generate the token with user's role
    const token = generateToken(user._id, user.role);

    // Set the token as an HTTP-only cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    });

    // Send response
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role, // Include role in the response for clarity
      token: token,
    });
  } else {
    res.status(401).json({ error: "Invalid email or password" });
  }
};

// @desc    Register a new user
// @route   POST /api/users/sign-up
// @access  Public

const signUp = async (req, res) => {
  const { name, email, password, role } = req.body; // Ensure role is captured from the request body

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    res.json("User already exists")
    console.log("User already exists");
    return
  }

  const user = await User.create({
    name,
    email,
    password,
    role: role ? role : "customer", // Default to "customer" if no role is provided
  });

  if (user) {
    const token = generateToken(user._id, user.role); // Generate token with role

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role, // Include role in the response
      token: token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  console.log(req.user);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role, // Include the role here
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};
export {
  signIn,
  signUp,
  getProfile,
  updateProfile,
};
