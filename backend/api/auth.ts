import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { findUserByUsername } from "../controllers/authController";
import User from "../models/User";
import jwt from "jsonwebtoken";

const router = express.Router();

// POST /login route handler
router.post("/login", async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    // Fetch the user from the database
    const user = await findUserByUsername(username);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    // Generate JWT
    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
        fullname: user.fullname || "", // Include fullname or default to an empty string
      },
      process.env.JWT_SECRET!, // Secret key for signing the token
      { expiresIn: "1h" } // Token expiration time
    );

    // Send success response
    res.status(200).json({
      message: "Login successful",
      token: token,
      fullname: user.fullname || "", // Include fullname in response
      role: user.role,
      username: user.username,
    });
  } catch (error) {
    console.error("Error during login:", error); // Log the actual error for debugging
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET /add-user route handler (for adding test users)
router.get("/add-user", async (req: Request, res: Response): Promise<void> => {
  try {
    const hashedPassword = await bcrypt.hash("1234", 10);
    const newUser = new User({
      username: "admin",
      password: hashedPassword,
      role: "admin",
      fullname: "Administrator",
    });

    await newUser.save();
    res.status(200).send("User added successfully");
  } catch (error) {
    console.error("Error adding user:", error); // Log any errors during user creation
    res.status(500).send("Failed to add user");
  }
});

export default router;
