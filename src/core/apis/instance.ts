import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${(typeof window !== "undefined" && localStorage.getItem("accessToken")) || ""}`,
  },
});

export default instance;
