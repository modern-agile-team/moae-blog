const getToken = () => {
  if (typeof window === "undefined") return;
  const accessToken = sessionStorage.getItem("accessToken");
  const refreshToken = sessionStorage.getItem("refreshToken");

  return { accessToken, refreshToken };
};

export default getToken;
