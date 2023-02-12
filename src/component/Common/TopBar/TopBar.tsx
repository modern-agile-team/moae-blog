import React, { useRef } from "react";
import { Header } from "../Header";
import Category from "./Category";
import useTopBar from "./hooks";
import { Container } from "./style";

const TopBar = ({ categoryList }: { categoryList?: string[] }) => {
  const topBarRef = useRef<HTMLDivElement>(null);
  const { pageY, isCategoryOpen, handleToggleCategory } = useTopBar(topBarRef);

  return (
    <Container pageY={pageY} ref={topBarRef}>
      <Header />
      {categoryList && categoryList.length !== 0 && (
        <Category isOpen={isCategoryOpen} handleToggleOpen={handleToggleCategory} categoryList={categoryList} />
      )}
    </Container>
  );
};

export default React.memo(TopBar);
