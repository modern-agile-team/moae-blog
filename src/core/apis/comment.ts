import { AxiosResponse } from "axios";

import instance from "./instance";

const COMMENT = {
  path: "/board",
  async getComments(postId: string) {
    const result: AxiosResponse<any> = await instance.get(`${COMMENT.path}/${postId}/comments`);
    return result;
  },
  async createComment({ postId, context }: { postId: string; context: string }) {
    const result: AxiosResponse<any> = await instance.post(`${COMMENT.path}/${postId}/comments`, { context });
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
