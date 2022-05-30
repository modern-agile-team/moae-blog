import styled from "styled-components";
import theme from "../../styles/theme";

const Submit = () => {
  return <StyledButton type="submit">등록</StyledButton>;
};

export default Submit;

const StyledButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${theme.COLORS.MAIN};
  color: #fff;
  border: none;
  &:hover {
    opacity: 0.9;
  }
  cursor: pointer;
`;
