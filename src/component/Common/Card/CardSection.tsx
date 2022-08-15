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
  padding: 0 6rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 1024px) {
    padding: 0 1rem;
    margin: 0;
  }
`;
