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

export const CardImage = styled.div<{
  src: string;
}>`
  width: 100%;
  padding-top: 52%;
  border-radius: 6px 6px 0 0;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.src});
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  padding-top: 0;
  background-color: ${theme.COLORS.BG1};
  #writer {
    display: flex;
    align-items: center;
    font-size: ${theme.FONT.SMALL.fontSize};
    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }
`;

export const Description = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: ${theme.COLORS.BG1};
  #title {
    h6 {
      height: 20px;
      overflow-wrap: break-word;
      word-break: break-word;
      overflow: hidden;
      margin: 0;
    }
  }
  #description {
    p {
      overflow-wrap: break-word;
      word-break: break-word;
      height: calc(${theme.FONT.SMALL.fontSize} * 1.5 * 3);
      font-size: ${theme.FONT.SMALL.fontSize};
      line-height: 1.5;
      overflow: hidden;
    }
    span {
      font-size: ${theme.FONT.SMALL.fontSize};
    }
  }
`;
