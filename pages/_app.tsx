import { BaseStyles, ThemeProvider } from "@primer/react";
import type { NextComponentType, NextPageContext } from "next";
import "../styles/globals.css";

export interface AppRenderProps {
  pageProps: object;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
}

function App({ Component, pageProps }: AppRenderProps) {
  const props = { ...pageProps };
  return (
    <ThemeProvider>
      <BaseStyles />
      <Component {...props} />
    </ThemeProvider>
  );
}

export default App;
