import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const CardSection = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CardSection;

const Wrapper = styled.section`
  padding: 0 30px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  width: 100%;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
