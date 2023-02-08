import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
html,
body {
  min-height: 100vh;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: ${theme.COLORS.BG1};
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1 {
  font-size: ${theme.FONT.HEAD1.fontSize};
  font-weight: ${theme.FONT.HEAD1.fontWeight};
  line-height: ${theme.FONT.HEAD1.lineHeight};
}
h2 {
  font-size: ${theme.FONT.HEAD2.fontSize};
  font-weight: ${theme.FONT.HEAD2.fontWeight};
  line-height: ${theme.FONT.HEAD2.lineHeight};
}
h3 {
  font-size: ${theme.FONT.HEAD3.fontSize};
  font-weight: ${theme.FONT.HEAD3.fontWeight};
  line-height: ${theme.FONT.HEAD3.lineHeight};
}
h4 {
  font-size: ${theme.FONT.HEAD4.fontSize};
  font-weight: ${theme.FONT.HEAD4.fontWeight};
  line-height: ${theme.FONT.HEAD4.lineHeight};
}
h5 {
  font-size: ${theme.FONT.HEAD5.fontSize};
  font-weight: ${theme.FONT.HEAD5.fontWeight};
  line-height: ${theme.FONT.HEAD5.lineHeight};
}
h6 {
  font-size: ${theme.FONT.HEAD6.fontSize};
  font-weight: ${theme.FONT.HEAD6.fontWeight};
  line-height: ${theme.FONT.HEAD6.lineHeight};
}
&::-webkit-scrollbar {
    width: 10px;
    height: 100%;
    background-color: ${theme.COLORS.BG1};
    border-radius: 16px;
  }
  &::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: #a6a6a6;
    border-radius: 16px;
  } 


.toastui-editor-contents h1 {
  font-size: calc(24px + 4px) !important;
  line-height: 28px;
  border-bottom: 3px double #999;
  margin: 52px 0 15px 0;
  padding-bottom: 7px;
}

.toastui-editor-contents h2 {
  font-size: calc(22px + 4px) !important;
  line-height: 23px;
  border-bottom: 1px solid #dbdbdb;
  margin: 20px 0 13px 0;
  padding-bottom: 7px;
}

.toastui-editor-contents h3 {
  font-size: calc(20px + 4px) !important;
  margin: 18px 0 2px;
}

.toastui-editor-contents h4 {
  font-size: calc(18px + 4px) !important;
  margin: 10px 0 2px;
}

.toastui-editor-contents h3,
.toastui-editor-contents h4 {
  line-height: 18px;
}

.toastui-editor-contents h5 {
  font-size: calc(16px + 4px) !important;
}

.toastui-editor-contents h6 {
  font-size: calc(14px + 4px) !important;
}

.toastui-editor-contents {
  margin: 0;
  padding: 0;
  font-size: calc(13px + 4px) !important;
  font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', '나눔바른고딕',
    'Nanum Barun Gothic', '맑은고딕', 'Malgun Gothic', sans-serif;
  z-index: 20;
}

`;

export default GlobalStyle;
