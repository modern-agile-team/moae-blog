import styled from "styled-components";
import { AdminButton, AdminInput } from ".";

const LeftSide = () => {
  return (
    <Wrapper>
      <AdminInput />
      <AdminButton />
    </Wrapper>
  );
};

export default LeftSide;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
