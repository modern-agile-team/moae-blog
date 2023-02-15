import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import deviceAtom from "@recoil/deviceAtom";
import { DEVICE } from "@core/constant";

const useDevice = () => {
  const setDevice = useSetRecoilState(deviceAtom);

  const changeDeviceSize = () => {
    setDevice(() => {
      if (window.innerWidth <= 568) return DEVICE.MOBILE;
      else if (window.innerWidth <= 768) return DEVICE.TABLET;
      else if (window.innerWidth <= 1280) return DEVICE.LAP_TOP;
      else return DEVICE.DESK_TOP;
    });
  };

  useEffect(() => {
    changeDeviceSize();
    window.addEventListener("resize", changeDeviceSize);
    return () => {
      changeDeviceSize();
      window.removeEventListener("resize", changeDeviceSize);
    };
  }, []);
};

export default useDevice;
