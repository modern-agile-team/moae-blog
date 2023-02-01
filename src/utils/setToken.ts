import instance from "@core/apis/instance";

const setToken = (token: string) => {
  instance.interceptors.request.use((config) => {
    if (!config.headers) config.headers = { Authorization: "" };
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default setToken;
