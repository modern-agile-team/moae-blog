import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const SectionWrapper = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default SectionWrapper;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
