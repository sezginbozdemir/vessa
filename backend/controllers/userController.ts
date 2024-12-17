import { Request, Response } from "express";
import User from "../models/User";

export const createUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { username, password, role, fullname, specialization } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.error("User already exists");
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({
      username,
      password,
      role,
      fullname,
      specialization,
    });

    await newUser.save();

    return res.status(200).json({ message: "User created successfully!" });
  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).json({ message: "Error creating user.", error });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    return res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    console.error("Error deleting user.", error);
    res.status(500).json({ message: "Error deleting user.", error });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id;
    const body = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user", error);
    res.status(500).json({ message: "Error udpating user.", error });
  }
};

export const getUsers = async (req: Request, res: Response): Promise<any> => {
  try {
    const userData = await User.find();
    res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).json({ message: "Error fetching users.", error });
  }
};
