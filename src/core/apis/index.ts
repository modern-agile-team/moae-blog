import instance from "./instance";

export const login = async ({ id, password }: { id: string; password: string }) => {
  return await instance.post("/login", { id, password });
};
