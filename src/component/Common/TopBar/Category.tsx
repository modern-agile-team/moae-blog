import React from "react";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";
import Link from "next/link";

import * as S from "./style";

interface ICategoryProps {
  isOpen: boolean;
  handleToggleOpen: () => void;
  categoryList: string[];
}
const Category = (props: ICategoryProps) => {
  const { isOpen, handleToggleOpen, categoryList } = props;

  return (
    <S.CategoryWrapper>
      <S.CategoryButton onClick={handleToggleOpen}>
        <span>전체 카테고리</span>
        <div>{isOpen ? <BiCaretUp /> : <BiCaretDown />}</div>
      </S.CategoryButton>
      <S.CategoryListWrapper isOpen={isOpen}>
        <S.Categories>
          {categoryList.length > 0 &&
            categoryList.map((category, index) => {
              return (
                <li onClick={handleToggleOpen} key={index}>
                  <Link href={`/category/${category}`}>{category}</Link>
                </li>
              );
            })}
        </S.Categories>
      </S.CategoryListWrapper>
    </S.CategoryWrapper>
  );
};

export default React.memo(Category);
