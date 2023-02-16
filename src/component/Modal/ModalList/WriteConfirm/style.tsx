import theme from "@styles/theme";
import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
`;

export const Body = styled.div``;

export const Footer = styled.footer``;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 6px;
  border-radius: 50%;
  transition: 0.5s;
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
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.src});
`;
