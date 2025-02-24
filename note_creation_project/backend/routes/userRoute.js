const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET_KEY;

// Register User API
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({
      status: true,
      message: "User registered successfully!",
    });
  } catch (error) {
    console.error("Error in /register route:", error);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
});

// Login User API
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({
        status: false,
        message: "Invalid credentials",
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      secretKey,
      { expiresIn: "10h" }
    );

    return res.status(200).json({
      status: true,
      message: "Login successful!",
      token,
    });
  } catch (error) {
    console.error("Error in login route:", error);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
});

module.exports = router;
