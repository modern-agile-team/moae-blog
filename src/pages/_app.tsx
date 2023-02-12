import React from "react";
import { RecoilRoot } from "recoil";
//@ts-ignore
import safeJsonStringify from "safe-json-stringify";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider, useQuery, dehydrate } from "react-query";
import { ThemeProvider } from "styled-components";
import { SessionProvider, useSession } from "next-auth/react";

import GlobalStyle from "@styles/globalStyle";
import theme from "@styles/theme";
import * as APIS from "@core/apis";
import { TopBar } from "@component/Common";

const BackgroundSettingProvider = dynamic(() => import("@component/Global/BackgroundSetting"), {
  ssr: false,
  suspense: false,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SessionProvider session={pageProps.session}>
          <RecoilRoot>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <Settings {...pageProps} Component={Component} />
              </Hydrate>
            </QueryClientProvider>
          </RecoilRoot>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

const Settings = ({ Component, pageProps }: AppProps) => {
  const session = useSession();
  const { data: categoryList } = useQuery("getAllCategory", APIS.CATEGORY.getAll);

  if (session.status === "loading") return null;
  return (
    <BackgroundSettingProvider>
      <TopBar categoryList={categoryList?.data} />
      <Component {...pageProps} />
    </BackgroundSettingProvider>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("getAllCategory", APIS.CATEGORY.getAll);
  return { props: { dehydratedState: JSON.parse(safeJsonStringify(dehydrate(queryClient))) } };
}
