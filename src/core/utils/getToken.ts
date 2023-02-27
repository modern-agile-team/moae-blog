import { parseCookies } from "nookies";

const getToken = () => {
  const { accessToken, refreshToken } = parseCookies();

  return { accessToken, refreshToken };
};

export default getToken;
