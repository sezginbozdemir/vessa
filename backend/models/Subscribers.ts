import mongoose, { Schema } from "mongoose";

const SubscriberSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const Subscriber = mongoose.model(
  "Subscriber",
  SubscriberSchema,
  "Subscribers"
);
const logAll = async (): Promise<void> => {
  try {
    const users = await Subscriber.find({});
    console.log("All emails in the Database:");
    users.forEach((e) => {
      console.log(`Email: ${e.email}`);
    });
  } catch (error) {
    console.error("Error logging", error);
  }
};
//logAll();

export default Subscriber;
