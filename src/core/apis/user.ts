import * as T from "@core/types/index";
import instance from "./instance";

const USER = {
  path: "/auth",
  async login(data: T.API.Request.Login) {
    const result = await instance.post(`${USER.path}/sign-in`, data);
    return result;
  },
  async checkAuth() {
    const result = await instance.get(`${USER.path}/existence`);
    return result;
  },
};

export default USER;
