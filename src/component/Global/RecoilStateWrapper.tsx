import deviceAtom from "@recoil/deviceAtom";
import { useSetRecoilState } from "recoil";

const GlobalRecoilStateWrapper = ({ children }: { children: React.ReactNode }) => {
  const setDevice = useSetRecoilState(deviceAtom);

  setDevice(() => {
    if (window.innerWidth <= 568) return "mobile";
    else if (window.innerWidth <= 768) return "tablet";
    else return "desktop";
  });

  return <div>{children}</div>;
};

export default GlobalRecoilStateWrapper;
