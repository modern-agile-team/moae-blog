import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalStyle";
import theme from "../styles/theme";
import { SessionProvider } from "next-auth/react";
import React, { useEffect } from "react";
import { RecoilRoot, useSetRecoilState } from "recoil";
import deviceAtom from "../recoil/deviceAtom";
import TopBar from "../component/TopBar/TopBar";

const GlobalRecoilStateWrapper = ({ children }: { children: React.ReactNode }) => {
  const setDevice = useSetRecoilState(deviceAtom);

  useEffect(() => {
    if (window.document.documentElement.clientWidth <= 568) setDevice("mobile");
    else setDevice("desktop");
  }, []);

  return <div>{children}</div>;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SessionProvider session={pageProps.session}>
          <RecoilRoot>
            <GlobalRecoilStateWrapper>
              <TopBar />
              <Component {...pageProps} />
            </GlobalRecoilStateWrapper>
          </RecoilRoot>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
