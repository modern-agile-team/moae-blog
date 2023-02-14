const setToken = ({ accessToken, refreshToken }: { accessToken?: string; refreshToken?: string }) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }
  if (refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
  }
};

export default setToken;
