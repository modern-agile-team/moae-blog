import styled from "styled-components";
import EmailItem from "./EmailItem";

const EmailList = () => {
  return (
    <Wrapper>
      <EmailItem email="alstnsrl98@gmail.com" />
      <EmailItem email="alstnsrl97@gmail.com" />
      <EmailItem email="alstnsrl96@gmail.com" />
      <EmailItem email="alstnsrl95@gmail.com" />
      <EmailItem email="alstnsrl94@gmail.com" />
      <EmailItem email="alstnsrl93@gmail.com" />
      <EmailItem email="alstnsrl92@gmail.com" />
      <EmailItem email="alstnsrl91@gmail.com" />
      <EmailItem email="alstnsrl90@gmail.com" />
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
