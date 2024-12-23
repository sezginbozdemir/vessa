import { Request, Response } from "express";
import Subscriber from "../models/Subscribers";

export const createSubscriber = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { email } = req.body;
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      console.error("Subscriber already exists");
      return res.status(400).json({ message: "Subscriber already exists" });
    }

    const newSubscriber = new Subscriber({
      email,
    });

    await newSubscriber.save();

    return res
      .status(200)
      .json({ message: "Subscriber created successfully!" });
  } catch (error) {
    console.error("Error creating subscriber", error);
  }
};
