import { UserResponse, UsersResponse } from "../_models/user.model";

const API_KEY = process.env.API_KEY;

export const getUsers = async (page: number): Promise<UsersResponse> => {
  const response = await fetch(`https://reqres.in/api/users?page=${page}`, {
    headers: {
      "x-api-key": "API_KEY"!,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error(`Invalid API key`);
    } else {
      throw new Error(response.statusText);
    }
  }
  const data = await response.json();
  return data;
};

export const getUserById = async (id: string): Promise<UserResponse> => {
  const response = await fetch(`https://reqres.in/api/users/${id}`, {
    headers: {
      "x-api-key": API_KEY!,
      Accept: "application/json",
    },
  });
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Not found`);
    } else {
      throw new Error(response.statusText);
    }
  }
  const data = await response.json();
  return data;
};
