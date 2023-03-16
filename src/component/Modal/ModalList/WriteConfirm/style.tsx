import styled from "styled-components";

import theme from "@styles/theme";
import * as C from "@component/Common";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  h1 {
    margin: 0;
    font-size: ${theme.FONT.HEAD3};
    color: ${theme.COLORS.MAIN};
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: 0.5s;
  cursor: pointer;
  svg {
    color: ${theme.COLORS.MAIN_BRIGHT};
  }
  &:hover {
    background-color: #a4a4a486;
  }
`;

export const ThumbnailImage = styled.div<{ src: string }>`
  width: 100%;
  padding-top: 52%;
  border-radius: 6px 6px 0 0;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.src});
`;

export const SubmitButton = styled(C.Button)`
  padding: 3px 10px;
`;
