import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/globalStyle";
import theme from "@styles/theme";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { TopBar } from "@component/Common";
import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "react-query";

const BackgroundSettingProvider = dynamic(() => import("@component/Global/BackgroundSetting"), {
  ssr: false,
  suspense: false,
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SessionProvider session={pageProps.session}>
          <RecoilRoot>
            <QueryClientProvider client={queryClient}>
              <BackgroundSettingProvider>
                <TopBar />
                <Component {...pageProps} />
              </BackgroundSettingProvider>
            </QueryClientProvider>
          </RecoilRoot>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
