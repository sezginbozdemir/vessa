import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User"; // No `.ts` extension in import

dotenv.config(); // Load environment variables

(async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("✅ MongoDB connected successfully");

    // Map of usernames to fullnames from user.ts
    const fullnames: { [key: string]: string } = {
      "Daniel-Costea": "Dr. Daniel Costea",
      "Sorin-Chiriac": "Dr. Sorin Chiriac",
      "Cristian-Ferdean": "Dr. Cristian Ferdean",
      "Adrian-Lupascu": "Dr. Adrian Lupascu",
      "Andreea-Albota": "Dr. Andreea Albota",
      "Liviu-Cirin": "Dr. Liviu Cirin",
      "Cristian-Banciu": "Dr. Cristian Banciu",
    };

    // Loop through and update users in the database
    for (const username in fullnames) {
      const fullname = fullnames[username];
      const result = await User.updateOne(
        { username }, // Find user by username
        { $set: { fullname } } // Set or update fullname field
      );

      if (result.matchedCount > 0) {
        console.log(`✅ Updated fullname for ${username}: ${fullname}`);
      } else {
        console.log(`⚠️ User ${username} not found.`);
      }
    }

    console.log("🎉 Fullname field updated for all users!");
    mongoose.disconnect();
  } catch (error) {
    console.error("❌ Error updating users:", error);
    mongoose.disconnect();
  }
})();
