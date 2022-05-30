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
`;

export default GlobalStyle;
