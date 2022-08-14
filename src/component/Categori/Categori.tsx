import React from "react";
import styled from "styled-components";
import theme from "@styles/theme";
import { CategoriesType } from "src/types/categories";

const Categori = ({ categories }: CategoriesType) => {
  return (
    <CategoriSection>
      <ul>
        {categories.map((categori) => {
          return (
            <li key={categori.id}>
              <h5>
                <a href={`${categori.link}`}>{categori.name}</a>
              </h5>
            </li>
          );
        })}
      </ul>
    </CategoriSection>
  );
};

export default React.memo(Categori);

const CategoriSection = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  margin-top: 1.5rem;
  ul {
    display: flex;
    margin-left: -10px;
  }
  li {
    padding: 0 10px;
  }
  a {
    position: relative;
    color: ${theme.COLORS.MAINDARK};
    &:hover {
      &::before {
        content: "";
        width: 100%;
        border: 1px solid;
        position: absolute;
        bottom: -10px;
      }
    }
  }
  h5 {
    margin: 0;
  }
  @media (max-width: 568px) {
    display: none;
  }
`;
