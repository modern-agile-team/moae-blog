import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const AdminWrapper = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AdminWrapper;

const Wrapper = styled.div`
  margin: 0 auto;
  position: fixed;
  top: calc(50% - 152px);
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  max-width: 700px;
`;
