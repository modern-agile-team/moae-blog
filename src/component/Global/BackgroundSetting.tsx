import { useEffect } from "react";

import { useDevice } from "@hooks/index";
import { setAxiosAuthHeader, getToken } from "@utils/index";

const BackgroundSetting = ({ children }: { children: React.ReactNode }) => {
  const token = getToken();

  useDevice();

  useEffect(() => {
    setAxiosAuthHeader(token?.accessToken || "");
  }, [token]);

  return <>{children}</>;
};

export default BackgroundSetting;
