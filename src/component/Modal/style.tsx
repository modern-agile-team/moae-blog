import theme from "@styles/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: #5e5e5e2f;
`;

export const ModalLayout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.COLORS.BG1};
  border: 1px solid;
  border-radius: 6px;
  padding: 20px 40px;
`;
