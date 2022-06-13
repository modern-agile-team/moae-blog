import React, { useState } from "react";
import styled from "styled-components";
import { LeftSide, RightSide } from ".";

const AdminWrapper = () => {
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };

  return (
    <Wrapper>
      <LeftSide onChange={onChange} />
      <RightSide userEmail={userEmail} />
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
