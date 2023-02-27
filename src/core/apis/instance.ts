import axios from "axios";

import { getToken } from "@core/utils";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${(typeof window !== "undefined" && getToken().accessToken) || ""}`,
  },
});

export default instance;
