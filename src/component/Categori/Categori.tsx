import React, { useState } from "react";
import styled from "styled-components";
import theme from "@styles/theme";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";

const Categori = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };
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
                      <span>FE</span>
                    </li>
                  );
                } else if (i % 5 === 0) {
                  return (
                    <li>
                      <span>javascript</span>
                    </li>
                  );
                } else if (i % 3 === 0) {
                  return (
                    <li>
                      <span>BackEnd</span>
                    </li>
                  );
                } else if (i % 9 === 0) {
                  return (
                    <li>
                      <span>Computer Science</span>
                    </li>
                  );
                } else {
                  return (
                    <li>
                      <span>Server</span>
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

export default React.memo(Categori);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  margin-bottom: 5px;
  font-weight: bold;
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
  li {
    padding: 2px 14px;
    border-radius: 16px;
    border: 1px solid #e6e6e6;
    background-color: #e6e6e6;
    color: #2a2a2a;
    cursor: pointer;
    &:hover {
      border: 1px solid ${theme.COLORS.MAIN};
      background-color: ${theme.COLORS.BG1};
      color: ${theme.COLORS.MAIN};
    }
  }
`;
