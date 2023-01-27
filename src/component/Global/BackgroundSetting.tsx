import useDevice from "@hooks/useDevice";

const BackgroundSetting = ({ children }: { children: React.ReactNode }) => {
  useDevice();

  return <>{children}</>;
};

export default BackgroundSetting;
