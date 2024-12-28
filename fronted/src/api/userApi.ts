import axios from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

interface Availability {
  date: string;
  timeSlots: string[];
}

export interface User {
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
      const res = await axios.post<User>(`${backendUrl}/api/create-user`, user);
      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error("Error creating user", errorMessage);
      return null;
    }
  };

  const getUsers = async (): Promise<User[]> => {
    try {
      const res = await axios.get<User[]>(`${backendUrl}/api/get`);
      return res.data;
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      console.error("Error fetching users", errorMessage);
      return [];
    }
  };

  const updateUser = async (
    id: string,
    updatedUser: User
  ): Promise<User | null> => {
    try {
      const res = await axios.put<User>(
        `${backendUrl}/api/update-user/${id}`,
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
        `${backendUrl}/api/delete-user/${id}`
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
  return { createUser, getUsers, updateUser, deleteUser };
};
