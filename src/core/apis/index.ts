import * as T from "@type/index";
import { AxiosResponse } from "axios";
import instance from "./instance";

export const login = async (data: T.API.Request.Login) => {
  const result = await instance.post("/auth/sign-in", data);
  return result;
};
interface PostType {
  context: string;
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
}

export const BOARDS = {
  async getAll() {
    const result: AxiosResponse<PostType[]> = await instance.get("/board/all");
    return result;
  },
};
