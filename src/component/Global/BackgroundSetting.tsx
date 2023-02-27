import { useDevice, useCheckAuth } from "@hooks/index";

const BackgroundSetting = ({ children }: { children: React.ReactNode }) => {
  useDevice();
  useCheckAuth();

  return <>{children}</>;
};

export default BackgroundSetting;
