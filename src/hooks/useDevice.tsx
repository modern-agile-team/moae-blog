import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import deviceAtom from "@recoil/deviceAtom";
import CONST from "@constant/index";

const useDevice = () => {
  const setDevice = useSetRecoilState(deviceAtom);

  const changeDeviceSize = () => {
    setDevice(() => {
      if (window.innerWidth <= 568) return CONST.DEVICE.MOBILE;
      else if (window.innerWidth <= 768) return CONST.DEVICE.TABLET;
      else return CONST.DEVICE.DESK_TOP;
    });
  };

  useEffect(() => {
    window.addEventListener("resize", changeDeviceSize);
    return () => {
      window.removeEventListener("resize", changeDeviceSize);
    };
  }, []);
};

export default useDevice;
