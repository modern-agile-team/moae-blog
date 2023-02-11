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
  transition: 0.5s;
  ${(props) => {
    const MAX_SCROLL_COUNT = 1;
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

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 15px 6rem;
  padding-bottom: 0;
  background-color: ${theme.COLORS.BG1};
  @media (max-width: 568px) {
    padding: 15px 1rem;
    padding-bottom: 0;
  }
`;

export const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  width: max-content;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
  padding: 0;
  border: none;
  background-color: ${theme.COLORS.BG1};
  cursor: pointer;
`;

export const CategoryListWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        transform: translateY(0);
        opacity: 1;
      `;
    } else {
      return css`
        transform: translateY(calc(-100%));
        opacity: 0;
      `;
    }
  }}
  z-index: -1;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${theme.COLORS.BG1};
  padding: 1em 6em;
  box-shadow: 0 8px 2px -2px #3939396c;
  max-height: 250px;
  overflow-y: auto;
  transition: 1s;
  &::-webkit-scrollbar {
    width: 10px;
    height: 100%;
    background-color: ${theme.COLORS.BG1};
    border-radius: 16px;
  }
  &::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: ${theme.COLORS.MAIN};
    border-radius: 16px;
  }
  @media (max-width: 568px) {
    padding: 0 1rem;
  }
`;

export const Categories = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  li {
    border-radius: 16px;
    border: 1px solid #e6e6e6;
    background-color: #e6e6e6;
    color: #2a2a2a;
    font-size: 16px;
    padding: 2px 14px;
    cursor: pointer;
    &:hover {
      border: 1px solid ${theme.COLORS.MAIN};
      background-color: ${theme.COLORS.BG1};
      color: ${theme.COLORS.MAIN};
    }
  }
`;
