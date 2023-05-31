import { parseCookies } from "nookies";

const getToken = () => {
  const { accessToken } = parseCookies();

  return { accessToken };
};

export default getToken;
