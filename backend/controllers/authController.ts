import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const findUserByUsername = async (username: string) => {
  try {
    const user = await User.findOne({ username });
    return user;
  } catch (error) {
    console.error("Error finding user:", error);
    throw error;
  }
};

// Controller function for login
export const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await findUserByUsername(username);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET!, // Secret key for signing the token
      { expiresIn: "1h" } // Token expiration time
    );

    // Return token and user information
    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
