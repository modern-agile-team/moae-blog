import { throttle } from "lodash";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled, { css } from "styled-components";
import theme from "@styles/theme";

import { Header } from "../Header";
import { Category } from "@component/Category";

interface ScrollType {
  value: number;
  direction: "down" | "up";
  scrollUpTimes: number;
}

const TopBar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const topBarRef = useRef<HTMLDivElement>(null);

  const handleToggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const closeCategory = (e: MouseEvent) => {
    if (!topBarRef.current) return;
    if (isCategoryOpen && !topBarRef.current.contains(e.target as Node)) {
      setIsCategoryOpen(false);
    }
  };

  const [pageY, setPageY] = useState<ScrollType>({ value: 0, direction: "down", scrollUpTimes: 0 });
  const user = "";

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
  return (
    <Container pageY={pageY} ref={topBarRef}>
      <Header user={user} />
      <Category isOpen={isCategoryOpen} handleToggleOpen={handleToggleCategory} />
    </Container>
  );
};

export default React.memo(TopBar);

const Container = styled.div<{
  pageY: ScrollType;
}>`
  background-color: ${theme.COLORS.BG1};
  z-index: 99;
  width: 100%;
  padding: 0 6rem;
  position: sticky;

  ${(props) => {
    const MAX_SCROLL_COUNT = 6;
    const MAX_HIDE = 400;

    let top = -MAX_HIDE;
    if (top < 0) {
      top += (-top / MAX_SCROLL_COUNT) * props.pageY.scrollUpTimes;
      if (top < -MAX_HIDE) {
        props.pageY.scrollUpTimes = 0;
        top = -MAX_HIDE;
      } else if (top >= 0) {
        props.pageY.scrollUpTimes = MAX_SCROLL_COUNT;
        top = 0;
      }
    }
    if (props.pageY.value <= 0) {
      top = 0;
      props.pageY.scrollUpTimes = 0;
    }
    return css`
      padding-bottom: 10px;
      top: ${top > 0 ? 0 : top}px;
      border-bottom: ${props.pageY.value > 150 ? `1px solid ${theme.COLORS.MAIN}` : "none"};
    `;
  }};
  @media (max-width: 568px) {
    padding: 0 1rem;
  }
`;
