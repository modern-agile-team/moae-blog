import instance from "./instance";

export const login = async ({ email, password }: { email: string; password: string }) => {
  return await instance.post("/login", { email, password });
};
