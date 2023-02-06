const getToken = () => {
  if (typeof window === "undefined") return;
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  return { accessToken, refreshToken };
};

export default getToken;
