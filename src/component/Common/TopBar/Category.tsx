import React from "react";
import styled, { css } from "styled-components";
import theme from "@styles/theme";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";
import Link from "next/link";

interface ICategoryProps {
  isOpen: boolean;
  handleToggleOpen: () => void;
}
const Category = (props: ICategoryProps) => {
  const { isOpen, handleToggleOpen } = props;

  return (
    <Wrapper>
      <ButtonWrapper onClick={handleToggleOpen}>
        <span>전체 카테고리</span>
        <div>{isOpen ? <BiCaretUp /> : <BiCaretDown />}</div>
      </ButtonWrapper>
      <CategoryWrapper isOpen={isOpen}>
        <Categories>
          {"1"
            .repeat(100)
            .split("")
            .map((el, i) => {
              if (i % 4 === 0) {
                return (
                  <li onClick={handleToggleOpen}>
                    <Link href="/category/FE">FE</Link>
                  </li>
                );
              } else if (i % 5 === 0) {
                return (
                  <li onClick={handleToggleOpen}>
                    <Link href="/category/javascript">javascript</Link>
                  </li>
                );
              } else if (i % 3 === 0) {
                return (
                  <li onClick={handleToggleOpen}>
                    <Link href="/category/BackEnd">BackEnd</Link>
                  </li>
                );
              } else if (i % 9 === 0) {
                return (
                  <li onClick={handleToggleOpen}>
                    <Link href="/category/Computer">Computer Science</Link>
                  </li>
                );
              } else {
                return (
                  <li onClick={handleToggleOpen}>
                    <Link href="/category/Server">Server</Link>
                  </li>
                );
              }
            })}
        </Categories>
      </CategoryWrapper>
    </Wrapper>
  );
};

export default React.memo(Category);

const Wrapper = styled.div`
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

const ButtonWrapper = styled.button`
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

const CategoryWrapper = styled.div<{ isOpen: boolean }>`
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

const Categories = styled.ul`
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
