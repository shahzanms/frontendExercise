import { notFound } from "next/navigation";
import { UserResponse, UsersResponse } from "../_models/user.model";

const API_KEY = process.env.API_KEY;

export const getUsers = async (page: number): Promise<UsersResponse> => {
  const response = await fetch(`https://reqres.in/api/users?page=${page}`, {
    headers: {
      "x-api-key": API_KEY!,
      Accept: "application/json",
    },
  });
  const data = response.json();
  return data;
};

export const getUserById = async (id: string): Promise<UserResponse> => {
  const response = await fetch(`https://reqres.in/api/users/${id}`, {
    headers: {
      "x-api-key": API_KEY!,
      Accept: "application/json",
    },
  });

  if (response.status === 404) {
    throw new Error(`Not found`);
  } else if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data = response.json();
  return data;
};
