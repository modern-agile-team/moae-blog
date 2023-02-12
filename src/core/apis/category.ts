import * as T from "@type/index";
import { AxiosResponse } from "axios";
import instance from "./instance";

const CATEGORY = {
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

export default CATEGORY;
