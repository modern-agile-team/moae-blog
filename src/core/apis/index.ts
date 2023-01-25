import instance from "./instance";

interface LoginType {
  email: string;
  name: string;
  baseUrl: string;
}

export const login = async (data: LoginType) => {
  const result = await instance.post("/auth/sign-in", data);
  return result;
};
