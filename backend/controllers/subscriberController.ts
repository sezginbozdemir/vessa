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
      return res.status(400).json({ message: "Email deja există." });
    }

    const newSubscriber = new Subscriber({
      email,
    });

    await newSubscriber.save();

    return res
      .status(200)
      .json({ message: "Abonatul a fost creat cu succes!" });
  } catch (error) {
    console.error("Error creating subscriber", error);
  }
};
