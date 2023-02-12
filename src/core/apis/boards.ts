import * as T from "@type/index";
import { AxiosResponse } from "axios";
import instance from "./instance";

const BOARDS = {
  path: "/boards",
  async getAll() {
    const result: AxiosResponse<T.POST.PostType[]> = await instance.get(`${BOARDS.path}`);
    return result;
  },
  async create(params: T.POST.CreatePostType) {
    const result: AxiosResponse<T.POST.PostType[]> = await instance.post(`${BOARDS.path}`, params);
    return result;
  },
  async getPost(postId: string) {
    const result: AxiosResponse<T.POST.PostType> = await instance.get(`${BOARDS.path}/${postId}`);
    return result;
  },
  async modifyPost(postId: string, params: T.POST.CreatePostType) {
    const result: AxiosResponse<T.POST.PostType> = await instance.patch(`${BOARDS.path}/${postId}`, params);
    return result;
  },
  async deletePost(postId: string) {
    const result: AxiosResponse<T.POST.PostType> = await instance.delete(`${BOARDS.path}/${postId}`);
    return result;
  },
};

export default BOARDS;
