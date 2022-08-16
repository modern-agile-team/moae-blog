import { throttle } from "lodash";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import theme from "@styles/theme";
import { Categori } from "@component/Categori";
import { Header } from "../Header";

interface ScrollType {
  value: number;
  direction: "down" | "up";
  scrollUpTimes: number;
}

const TopBar = () => {
  const [pageY, setPageY] = useState<ScrollType>({ value: 0, direction: "down", scrollUpTimes: 0 });
  const user = "";
  const router = useRouter();

  const location = router.pathname;
  const categories = [
    {
      id: "1283078as",
      name: "Front-End",
      link: "/categori/frontend",
    },
    {
      id: "1237uyxzc",
      name: "Back-End",
      link: "/categori/backend",
    },
    {
      id: "123213uyxzc",
      name: "Design",
      link: "/categori/design",
    },
    {
      id: "1237asdyxzc",
      name: "Computer Science",
      link: "/categori/computerscience",
    },
  ];

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

  return (
    <Container pageY={pageY}>
      <Header user={user} />
      {location !== "/post" && location !== "/write" && <Categori categories={categories} />}
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
    let top = -200;
    if (top < 0) {
      top += 25 * props.pageY.scrollUpTimes;
      if (top < -200) {
        props.pageY.scrollUpTimes = 0;
        top = -200;
      } else if (top > 0) {
        props.pageY.scrollUpTimes = 8;
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