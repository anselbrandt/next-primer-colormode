import { BaseStyles, ThemeProvider } from "@primer/react";
import cookie from "cookie";
import type { NextComponentType, NextPageContext } from "next";
import type { NextRouter } from "next/router";
import "../styles/globals.css";

declare type ColorMode = "day" | "night";
declare type ColorModeWithAuto = ColorMode | "auto";

export interface AppRenderProps {
  pageProps: object;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router: NextRouter;
  colorMode: string;
  dayScheme: string;
  nightScheme: string;
}

function App({
  Component,
  pageProps,
  colorMode,
  dayScheme,
  nightScheme,
}: AppRenderProps) {
  const props = { ...pageProps };
  return (
    <>
      <ThemeProvider
        colorMode={colorMode as ColorModeWithAuto}
        dayScheme={dayScheme}
        nightScheme={nightScheme}
        preventSSRMismatch
      >
        <BaseStyles>
          <Component {...props} />
        </BaseStyles>
      </ThemeProvider>
    </>
  );
}

App.getInitialProps = async ({ ctx }: any) => {
  const cookies = ctx.req?.headers.cookie;
  const colorMode =
    cookies && cookie.parse(cookies).colorMode
      ? cookie.parse(cookies).colorMode
      : "day";
  const dayScheme =
    cookies && cookie.parse(cookies).dayScheme
      ? cookie.parse(cookies).dayScheme
      : "light";
  const nightScheme =
    cookies && cookie.parse(cookies).nightScheme
      ? cookie.parse(cookies).nightScheme
      : "dark";
  return {
    pageProps: {},
    colorMode: colorMode,
    dayScheme: dayScheme,
    nightScheme: nightScheme,
  };
};

export default App;
