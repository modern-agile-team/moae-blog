import * as T from "@type/index";
import { AxiosResponse } from "axios";
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
  async refresh() {
    const result: AxiosResponse<{ accessToken: string; refreshToken: string }> = await instance.post(
      `${USER.path}/refresh`
    );
    return result;
  },
};

export default USER;
