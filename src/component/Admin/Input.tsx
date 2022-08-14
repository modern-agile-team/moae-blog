import styled from "styled-components";
import theme from "@styles/theme";

interface IInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ onChange }: IInput) => {
  return <StyledInput type="email" placeholder="이메일" onChange={onChange} />;
};

export default Input;

const StyledInput = styled.input`
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid ${theme.COLORS.MAIN};
  margin: 2rem 0;
  width: 300px;
`;
