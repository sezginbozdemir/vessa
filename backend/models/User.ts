import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const AvailabilitySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  timeSlots: [{ type: String, required: true }],
});

// Define the schema with the fullname field
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    default: "", // Optional field with a default value
  },
  specialization: [{ type: String, required: true }],
  availability: [AvailabilitySchema],
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema, "Users");

// Seed users with explicit fullnames
const seedUsers = async () => {
  try {
    await User.create([
      {
        username: "Mihai-Hurmuz",
        password: 1299,
        role: "medic",
        specialization: ["Ortopedie"],
        fullname: "Dr. Mihai Hurmuz",
      },
    ]);

    console.log("Users seeded successfully");
  } catch (error) {
    console.error("Error seeding users:", error);
  }
};

const deleteUserByFullname = async (fullname: string): Promise<void> => {
  try {
    const result = await User.deleteOne({ fullname });

    if (result.deletedCount > 0) {
      console.log(`User with full name "${fullname}" has been deleted.`);
    } else {
      console.log(`No user found with full name "${fullname}".`);
    }
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

const logAllUsers = async (): Promise<void> => {
  try {
    const users = await User.find({});
    console.log("All Users in the Database:");
    users.forEach((user) => {
      console.log(
        `Full Name: ${user.fullname}, Specialization: ${user.specialization}`
      );
    });
  } catch (error) {
    console.error("Error logging users:", error);
  }
};
const changeUserPassword = async (username: string, newPassword: string) => {
  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const result = await User.findOneAndUpdate(
      { username },
      { password: hashedPassword },
      { new: true }
    );

    if (result) {
      console.log(`Password updated for user: ${username}`);
    } else {
      console.log(`User "${username}" not found.`);
    }
  } catch (error) {
    console.error("Error updating password:", error);
  }
};

////changeUserPassword("Daniel-Costea", "429467");
///deleteUserByFullname("Dr. Vitalie Slobozian");
//seedUsers();
///logAllUsers();

export default User;
