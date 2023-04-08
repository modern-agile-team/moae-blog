import { AxiosResponse } from "axios";
import instance from "./instance";

const IMAGE = {
  path: "/uploads",
  async uploadsImage(FormData: FormData): Promise<AxiosResponse<{ names: string[] }>> {
    const response = await instance.post(`${IMAGE.path}`, FormData);
    return response;
  },
};

export default IMAGE;
