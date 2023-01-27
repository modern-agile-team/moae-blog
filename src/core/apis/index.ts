import * as T from "@type/index";
import instance from "./instance";

export const login = async (data: T.API.Request.Login) => {
  const result = await instance.post("/auth/sign-in", data);
  return result;
};
