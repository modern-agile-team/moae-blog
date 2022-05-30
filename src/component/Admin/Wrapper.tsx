import React from "react";
import styled from "styled-components";
import { LeftSide, RightSide } from ".";

const AdminWrapper = () => {
  return (
    <Wrapper>
      <LeftSide />
      <RightSide />
    </Wrapper>
  );
};

export default AdminWrapper;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin-top: 4rem;
`;
