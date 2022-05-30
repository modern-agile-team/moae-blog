import styled from "styled-components";
import { AdminButton, EmailList } from ".";

const RightSide = () => {
  return (
    <Wrapper>
      <EmailList />
      <AdminButton />
    </Wrapper>
  );
};

export default RightSide;

const Wrapper = styled.div`
  padding: 1rem;
  width: 50%;
`;
