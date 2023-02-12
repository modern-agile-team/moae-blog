import * as T from "@type/index";
import { AxiosResponse } from "axios";
import instance from "./instance";

const COMMENT = {
  path: "/board",
  async getComments(postId: string) {
    const result: AxiosResponse<any> = await instance.get(`${COMMENT.path}/${postId}/comments`);
    return result;
  },
  async createComment(postId: string) {
    const result: AxiosResponse<any> = await instance.post(`${COMMENT.path}/${postId}/comments`);
    return result;
  },
  async modifyComment(postId: string, commentId: string) {
    const result: AxiosResponse<any> = await instance.put(`${COMMENT.path}/${postId}/comments/${commentId}`);
    return result;
  },
  async deleteComment(postId: string, commentId: string) {
    const result: AxiosResponse<any> = await instance.delete(`${COMMENT.path}/${postId}/comments/${commentId}`);
    return result;
  },
};

export default COMMENT;
