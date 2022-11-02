import type { AppProps } from "next/app";
import { chains, providers } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import * as colors from "../styles/colors";
import { ContractsProvider } from "../contexts/Contracts";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;

    color: ${colors.black};
    background: ${colors.yellow}
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

const modalConfig = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  theme: "dark" as const,
  accentColor: "default" as const,
  ethereum: {
    appName: "Gobbler's Union",
    autoConnect: false,
    chains: [chains.mainnet],
    providers: [
      providers.walletConnectProvider({
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
      }),
    ],
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Web3Modal config={modalConfig} />
        <ContractsProvider>
          <Component {...pageProps} />
        </ContractsProvider>
      </ThemeProvider>
    </>
  );
}
