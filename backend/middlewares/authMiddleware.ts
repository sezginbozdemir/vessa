import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Middleware to authenticate users based on JWT
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verify the JWT token and attach the decoded payload to the `req.user`
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next(); // Proceed to the next middleware
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};
