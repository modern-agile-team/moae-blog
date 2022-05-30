import styled from "styled-components";
import theme from "../../styles/theme";

const Submit = () => {
  return <StyledButton type="submit">등록</StyledButton>;
};

export default Submit;

const StyledButton = styled.button`
  padding: 0.5rem;
  background-color: ${theme.COLORS.MAIN};
  color: #fff;
  border-radius: 6px;
  &:hover {
    opacity: 0.9;
  }
  cursor: pointer;
`;
