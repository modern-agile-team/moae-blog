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

interface CreatePost {
  title: string;
  context: string;
  categories: string[];
}

export const USER = {
  defaultPath: "/auth",
  async login(data: T.API.Request.Login) {
    const result = await instance.post(`${USER.defaultPath}/sign-in`, data);
    return result;
  },
  async checkAuth() {
    const result = await instance.get(`${USER.defaultPath}/existence`);
    return result;
  },
};

export const BOARDS = {
  async getAll() {
    const result: AxiosResponse<PostType[]> = await instance.get("/board/all");
    return result;
  },
  async create(params: CreatePost) {
    const result: AxiosResponse<PostType[]> = await instance.post("/board", params);
    return result;
  },
};
