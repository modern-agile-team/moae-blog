import React from "react";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";
import Link from "next/link";
import { uuid } from "uuidv4";

import * as S from "./style";

interface ICategoryProps {
  isOpen: boolean;
  handleToggleOpen: () => void;
}
const Category = (props: ICategoryProps) => {
  const { isOpen, handleToggleOpen } = props;

  return (
    <S.CategoryWrapper>
      <S.CategoryButton onClick={handleToggleOpen}>
        <span>전체 카테고리</span>
        <div>{isOpen ? <BiCaretUp /> : <BiCaretDown />}</div>
      </S.CategoryButton>
      <S.CategoryListWrapper isOpen={isOpen}>
        <S.Categories>
          {"1"
            .repeat(100)
            .split("")
            .map((el, i) => {
              if (i % 4 === 0) {
                return (
                  <li onClick={handleToggleOpen} key={uuid()}>
                    <Link href="/category/FE">FE</Link>
                  </li>
                );
              } else if (i % 5 === 0) {
                return (
                  <li onClick={handleToggleOpen} key={uuid()}>
                    <Link href="/category/javascript">javascript</Link>
                  </li>
                );
              } else if (i % 3 === 0) {
                return (
                  <li onClick={handleToggleOpen} key={uuid()}>
                    <Link href="/category/BackEnd">BackEnd</Link>
                  </li>
                );
              } else if (i % 9 === 0) {
                return (
                  <li onClick={handleToggleOpen} key={uuid()}>
                    <Link href="/category/Computer">Computer Science</Link>
                  </li>
                );
              } else {
                return (
                  <li onClick={handleToggleOpen} key={uuid()}>
                    <Link href="/category/Server">Server</Link>
                  </li>
                );
              }
            })}
        </S.Categories>
      </S.CategoryListWrapper>
    </S.CategoryWrapper>
  );
};

export default React.memo(Category);
