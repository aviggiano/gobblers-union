import type { AppProps } from "next/app";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import * as colors from "../styles/colors";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;

    color: ${colors.black1};
    background: ${colors.green}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

interface ThemeInterface {
  colors: Record<string, string>;
}

const theme: ThemeInterface = {
  colors,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
