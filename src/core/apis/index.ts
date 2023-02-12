import * as T from "@type/index";
import { AxiosResponse } from "axios";
import instance from "./instance";

export const USER = {
  path: "/auth",
  async login(data: T.API.Request.Login) {
    const result = await instance.post(`${USER.path}/sign-in`, data);
    return result;
  },
  async checkAuth() {
    const result = await instance.get(`${USER.path}/existence`);
    return result;
  },
  async refresh() {
    const result: AxiosResponse<{ accessToken: string; refreshToken: string }> = await instance.post(
      `${USER.path}/refresh`
    );
    return result;
  },
};

export const BOARDS = {
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

export const COMMENT = {
  path: "/comment",
  async getComments(postId: string) {
    const result: AxiosResponse<any> = await instance.get(`${BOARDS.path}/${postId}/comments`);
    return result;
  },
  async createComment(postId: string) {
    const result: AxiosResponse<any> = await instance.post(`${BOARDS.path}/${postId}/comments`);
    return result;
  },
  async modifyComment(postId: string, commentId: string) {
    const result: AxiosResponse<any> = await instance.put(`${BOARDS.path}/${postId}/comments/${commentId}`);
    return result;
  },
  async deleteComment(postId: string, commentId: string) {
    const result: AxiosResponse<any> = await instance.delete(`${BOARDS.path}/${postId}/comments/${commentId}`);
    return result;
  },
};

export const CATEGORY = {
  path: "/category",
  async getAll() {
    const result: AxiosResponse<any> = await instance.get(`${CATEGORY.path}`);
    return result;
  },
  async getBoardByCategory(categoryId: string) {
    const result: AxiosResponse<T.POST.PostType[]> = await instance.get(`${CATEGORY.path}/${categoryId}`);
    return result;
  },
};

export default {
  USER,
  BOARDS,
  COMMENT,
  CATEGORY,
};
