import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

interface Availability {
  date: Date;
  timeSlots: string[];
}

export interface User {
  _id: string;
  username: string;
  password: string;
  role: string;
  fullname: string;
  specialization: string[];
  availability?: Availability[];
}

export const UserApi = () => {
  let errorMessage = "";

  const createUser = async (user: User): Promise<User | null> => {
    try {
      const res = await axios.post<User>(
        `${backendUrl}/api/users/create-user`,
        user
      );
      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error("Error creating user", errorMessage);
      return null;
    }
  };

  const getUsers = useCallback(async (): Promise<User[]> => {
    try {
      const res = await axios.get<User[]>(`${backendUrl}/api/users/get`);
      return res.data;
    } catch (error) {
      console.error(
        "Error fetching users",
        error instanceof Error ? error.message : error
      );
      return [];
    }
  }, []);

  const updateUser = async (
    id: string,
    updatedUser: User
  ): Promise<User | null> => {
    try {
      const res = await axios.put<User>(
        `${backendUrl}/api/users/update-user/${id}`,
        updatedUser
      );
      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error("Error updating user", errorMessage);
      return null;
    }
  };

  const deleteUser = async (id: string) => {
    try {
      const res = await axios.delete<void>(
        `${backendUrl}/api/users/delete-user/${id}`
      );
      return res.status === 200;
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error("Error deleting user", errorMessage);
      return null;
    }
  };

  const appointmentCheck = async (
    doctorName: string,
    date: string
  ): Promise<AxiosResponse<string[]> | undefined> => {
    const url = `${backendUrl}/api/appointments/booked-slots?doctor=${doctorName}&date=${date}`;

    try {
      const response = await axios.get<string[]>(url); // Use axios to fetch the data
      return response; // Return the full AxiosResponse
    } catch (error) {
      console.error("Error fetching booked slots:", error);
      return undefined;
    }
  };
  return { createUser, getUsers, updateUser, deleteUser, appointmentCheck };
};
