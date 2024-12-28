import axios, { AxiosResponse, AxiosError } from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export interface Subscriber {
  email: string;
}

export interface SubscriberResponse {
  subscriber?: Subscriber;
  status: number;
  statusText: string;
  message?: string;
}

export const newsletterApi = () => {
  const createSubscriber = async (
    subscriber: Subscriber
  ): Promise<SubscriberResponse | undefined> => {
    try {
      const res: AxiosResponse<Subscriber> = await axios.post<Subscriber>(
        `${backendUrl}/api/subscribers/new-subscriber`,
        subscriber
      );

      return {
        subscriber: res.data,
        status: res.status,
        statusText: res.statusText,
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error("Error creating subscriber:", error);

        if (error.response) {
          return {
            message: error.response.data.message,
            status: error.response.status,
            statusText: error.response.statusText,
          };
        } else if (error.request) {
          console.error("Request made but no response:", error.request);
        } else {
          console.error("Error setting up request:", error.message);
        }
      } else {
        console.error("General error:", error);
      }

      return undefined;
    }
  };

  return { createSubscriber };
};
