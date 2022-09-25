import { throttle } from "lodash";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ScrollType } from "./type";

const useTopBar = (ref: React.RefObject<HTMLElement>) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [pageY, setPageY] = useState<ScrollType>({ value: 0, direction: "down", scrollUpTimes: 0 });

  const handleToggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const closeCategory = (e: MouseEvent) => {
    if (!ref.current) return;
    if (isCategoryOpen && !ref.current.contains(e.target as Node)) {
      setIsCategoryOpen(false);
    }
  };

  const detectScroll = useCallback(() => {
    setPageY(({ value, scrollUpTimes }) => {
      if (value > window.scrollY) return { value: window.scrollY, direction: "up", scrollUpTimes: scrollUpTimes + 1 };
      else return { value: window.scrollY, direction: "down", scrollUpTimes: scrollUpTimes - 1 };
    });
  }, [pageY]);

  const throttleScroll = useMemo(() => throttle(detectScroll, 10), [detectScroll]);

  useEffect(() => {
    window.addEventListener("scroll", throttleScroll);
    return () => window.removeEventListener("scroll", throttleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("click", closeCategory);
    return () => window.removeEventListener("click", closeCategory);
  }, [isCategoryOpen]);

  return { pageY, isCategoryOpen, handleToggleCategory };
};

export default useTopBar;
