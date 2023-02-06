import { useEffect } from "react";

import { useDevice } from "@hooks/index";
import setToken from "@utils/setToken";

const BackgroundSetting = ({ children }: { children: React.ReactNode }) => {
  useDevice();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setToken(token || "");
  }, []);

  return <>{children}</>;
};

export default BackgroundSetting;
