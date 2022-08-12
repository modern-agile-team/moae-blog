export default () => {
  if (typeof window === "undefined") return;
  return localStorage.getItem("token") || "";
};
