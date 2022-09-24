import React, { useState } from "react";
import styled from "styled-components";
import theme from "@styles/theme";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";

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
      {isOpen && (
        <CategoryWrapper>
          <Categories>
            {"1"
              .repeat(100)
              .split("")
              .map((el, i) => {
                if (i % 4 === 0) {
                  return (
                    <li>
                      <button>FE</button>
                    </li>
                  );
                } else if (i % 5 === 0) {
                  return (
                    <li>
                      <button>javascript</button>
                    </li>
                  );
                } else if (i % 3 === 0) {
                  return (
                    <li>
                      <button>BackEnd</button>
                    </li>
                  );
                } else if (i % 9 === 0) {
                  return (
                    <li>
                      <button>Computer Science</button>
                    </li>
                  );
                } else {
                  return (
                    <li>
                      <button>Server</button>
                    </li>
                  );
                }
              })}
          </Categories>
        </CategoryWrapper>
      )}
    </Wrapper>
  );
};

export default React.memo(Category);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
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
  cursor: pointer;
`;

const CategoryWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${theme.COLORS.BG1};
  padding: 1em 6em;
  box-shadow: 0 8px 2px -2px #3939396c;
  max-height: 250px;
  overflow-y: auto;
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
  button {
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
