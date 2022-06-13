import React from "react";
import styled from "styled-components";
import { AdminInput } from ".";

interface ILeftSide {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LeftSide = ({ onChange }: ILeftSide) => {
  return (
    <Wrapper>
      <AdminInput onChange={onChange} />
    </Wrapper>
  );
};

export default LeftSide;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
