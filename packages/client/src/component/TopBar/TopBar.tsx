import { throttle } from "lodash";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import theme from "../../styles/theme";
import { CategoriesType } from "../../types/categories";
import { Categori } from "../Categori";
import { Header } from "../Header";

interface Props extends CategoriesType {
  type?: "scrollHeader";
  location?: "post";
  user?: string;
}

interface ScrollType {
  value: number;
  direction: "down" | "up";
  scrollUpTimes: number;
}

const TopBar = ({ type, location, user, categories }: Props) => {
  const [pageY, setPageY] = useState<ScrollType>({ value: 0, direction: "down", scrollUpTimes: 0 });

  const detectScroll = useCallback(() => {
    setPageY(({ value, scrollUpTimes }) => {
      if (value > window.scrollY)
        return { value: window.scrollY, direction: "up", scrollUpTimes: scrollUpTimes + 1 };
      else return { value: window.scrollY, direction: "down", scrollUpTimes: scrollUpTimes - 1 };
    });
  }, [pageY]);

  const throttleScroll = useMemo(() => throttle(detectScroll, 10), [detectScroll]);

  useEffect(() => {
    window.addEventListener("scroll", throttleScroll);
    return () => window.removeEventListener("scroll", throttleScroll);
  }, []);

  return (
    <Container type={type} pageY={pageY}>
      <Header user={user} />
      {location !== "post" && location !== "write" && <Categori categories={categories} />}
    </Container>
  );
};

export default React.memo(TopBar);

const Container = styled.div<{
  type?: "scrollHeader";
  pageY: ScrollType;
}>`
  background-color: ${theme.COLORS.BG1};
  z-index: 99;
  width: 100%;
  padding: 0 6rem;
  ${(props) => {
    if (props.type === "scrollHeader") {
      let marginTop = -200;
      if (marginTop < 0) {
        marginTop += 25 * props.pageY.scrollUpTimes;
        {
          if (marginTop < -200) {
            props.pageY.scrollUpTimes = 0;
            marginTop = -200;
          } else if (marginTop > 0) {
            props.pageY.scrollUpTimes = 8;
            marginTop = 0;
          }
        }
      }
      if (props.pageY.value <= 50) props.pageY.scrollUpTimes = 0;
      return css`
        padding-bottom: 10px;
        position: fixed;
        top: 0px;
        margin-top: ${marginTop > 0 ? 0 : marginTop}px;
        opacity: ${props.pageY.value > 50 ? 1 : 0};
        border-bottom: 1px solid ${theme.COLORS.MAIN};
      `;
    }
  }};
  @media (max-width: 568px) {
    padding: 0 1rem;
  }
`;
