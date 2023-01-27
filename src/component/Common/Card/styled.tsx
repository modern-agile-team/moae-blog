import styled from "styled-components";

import theme from "@styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  margin: 1rem;
  border-radius: 6px;
  box-shadow: 0 3px 3px #c4c4c4;
  transition: 0.3s;
  background-color: ${theme.COLORS.BG1};
  cursor: pointer;
  &:hover {
    transform: translateY(-6px);
  }
`;
