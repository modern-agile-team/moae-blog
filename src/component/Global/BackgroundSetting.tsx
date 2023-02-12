import { useDevice } from "@hooks/index";

const BackgroundSetting = ({ children }: { children: React.ReactNode }) => {
  useDevice();

  return <>{children}</>;
};

export default BackgroundSetting;
