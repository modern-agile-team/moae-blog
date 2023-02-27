import { setCookie } from "nookies";

const setToken = ({ accessToken, refreshToken }: { accessToken?: string; refreshToken?: string }) => {
  // 7d / 24h / 60m / 60s
  const maxAge = 7 * 24 * 60 * 60;

  if (accessToken) {
    setCookie(null, "accessToken", accessToken, {
      maxAge,
    });
  }
  if (refreshToken) {
    setCookie(null, "refreshToken", refreshToken, {
      maxAge,
    });
  }
};

export default setToken;
