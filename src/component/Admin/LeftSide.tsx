import styled from "styled-components";
import { AdminInput } from ".";

const LeftSide = () => {
  return (
    <Wrapper>
      <AdminInput />
    </Wrapper>
  );
};

export default LeftSide;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
