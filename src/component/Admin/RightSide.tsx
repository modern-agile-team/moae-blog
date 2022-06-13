import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { AdminButton, EmailList } from ".";
import userEmailSelector from "../../recoil/userEmailSelector";

interface IRightSide {
  userEmail?: string;
}

const RightSide = ({ userEmail }: IRightSide) => {
  const userEmailList = useRecoilValue(userEmailSelector);
  const filteredUserEmailList = userEmail ? userEmailList.filter((el) => el.includes(userEmail)) : userEmailList;

  return (
    <Wrapper>
      <EmailList userEmailList={filteredUserEmailList} />
      <AdminButton />
    </Wrapper>
  );
};

export default RightSide;

const Wrapper = styled.div`
  padding: 1rem;
  width: 50%;
`;
