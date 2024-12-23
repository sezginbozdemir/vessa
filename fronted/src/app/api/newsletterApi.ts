import axios from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export interface Subscriber {
  email: string;
}

export const newsletterApi = () => {
  const createSubscriber = async (
    subscriber: Subscriber
  ): Promise<Subscriber | null> => {
    try {
      const res = await axios.post<Subscriber>(
        `${backendUrl}/api/subscribers/new-subscriber`,
        subscriber
      );
      return res.data;
    } catch (error) {
      console.error("Error creating subscriber", error);
      return null;
    }
  };

  return { createSubscriber };
};
