import * as T from "@type/index";
import { AxiosResponse } from "axios";
import instance from "./instance";

export const login = async (data: T.API.Request.Login) => {
  const result = await instance.post("/auth/sign-in", data);
  return result;
};

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
    const result: AxiosResponse<T.POST.PostType[]> = await instance.get("/board/all");
    return result;
  },
  async create(params: T.POST.CreatePostType) {
    const result: AxiosResponse<T.POST.PostType[]> = await instance.post("/board", params);
    return result;
  },
  async getPost(postId: string) {
    const result: AxiosResponse<T.POST.PostType> = await instance.get(`/board/${postId}`);
    return result;
  },
};
