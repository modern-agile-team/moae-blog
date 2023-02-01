import useDevice from "@hooks/useDevice";
import setToken from "@utils/setToken";
import { useEffect } from "react";

const BackgroundSetting = ({ children }: { children: React.ReactNode }) => {
  useDevice();

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    setToken(token || "");
  }, []);

  return <>{children}</>;
};

export default BackgroundSetting;
