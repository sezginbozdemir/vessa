import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./api/auth";
import appointmentRoutes from "./api/appointmentRoutes";
import userRoutes from "./api/userRoutes";

import sendEmailRoute from "./api/send-email/route";
// Load environment variables from .env file
dotenv.config(); // Load environment variables
// Initialize Express app
const app = express();

// Apply CORS middleware to allow requests from different origins
app.use(
  cors({
    origin: [
      "http://demo.vessahospital.ro",
      "http://spital.vessahospital.ro",
      "https://spital.vessahospital.ro",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI; // Use the correct environment variable
if (!MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in environment variables!");
  process.exit(1); // Exit the process if MONGO_URI is missing
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");

    // Ensure that mongoose.connection.db is defined before accessing it
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

// Use the send-email route for the /api/send-email path
app.use("/api/send-email", sendEmailRoute);
console.log("✅ /api/send-email route registered");

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", appointmentRoutes);
app.use("/api", userRoutes);

// Error handling for unhandled routes
app.use((req, res) => {
  console.error(`❌ Route not found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ message: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🌐 Server running on port ${PORT}`);
});
