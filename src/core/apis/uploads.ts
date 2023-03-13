import { AxiosResponse } from "axios";
import instance from "./instance";

const UPLOADS = {
  path: "/uploads",
  async createImage(FormData: FormData): Promise<AxiosResponse<{ names: string[] }>> {
    const response = await instance.post(`${UPLOADS.path}`, FormData);
    return response;
  },
};

export default UPLOADS;
