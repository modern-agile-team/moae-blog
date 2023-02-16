import theme from "@styles/theme";
import styled, { keyframes } from "styled-components";

const toTop = keyframes`
  from {
    top: 100%
  }to {
    top: 50%;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: #2f2f2f98;
`;

export const ModalLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.COLORS.BG1};
  border-radius: 6px;
  padding: 20px 40px;
  box-shadow: 3px 4px 5px 2px ${theme.COLORS.MAIN_BRIGHT};
  animation: ${toTop} forwards 0.5s;
`;
