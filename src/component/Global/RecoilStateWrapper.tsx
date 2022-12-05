import deviceAtom from "@recoil/deviceAtom";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const GlobalRecoilStateWrapper = ({ children }: { children: React.ReactNode }) => {
  const setDevice = useSetRecoilState(deviceAtom);

  const changeDeviceSize = () => {
    setDevice(() => {
      if (window.innerWidth <= 568) return "mobile";
      else if (window.innerWidth <= 768) return "tablet";
      else return "desktop";
    });
  };

  useEffect(() => {
    window.addEventListener("resize", changeDeviceSize);
    return () => window.removeEventListener("resize", changeDeviceSize);
  }, []);

  return <div>{children}</div>;
};

export default GlobalRecoilStateWrapper;
