import theme from "@styles/theme";
import styled, { css } from "styled-components";
import { ScrollType } from "./type";

export const Container = styled.div<{
  pageY: ScrollType;
}>`
  background-color: ${theme.COLORS.BG1};
  z-index: 99;
  width: 100%;
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
`;
