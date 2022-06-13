import styled from "styled-components";
import EmailItem from "./EmailItem";

interface IEmailList {
  userEmailList: string[];
}

const EmailList = ({ userEmailList }: IEmailList) => {
  return (
    <Wrapper>
      {userEmailList.map((email) => {
        return <EmailItem email={email} key={email} />;
      })}
    </Wrapper>
  );
};

export default EmailList;

const Wrapper = styled.ul`
  padding: 1rem;
  border-radius: 3px;
  max-height: 350px;
  border: 1px solid;
  overflow-y: auto;
`;
