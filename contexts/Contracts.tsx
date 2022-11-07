import React, { createContext, PropsWithChildren, useState } from "react";
import {
  Goo,
  Goo__factory,
  Pages,
  Pages__factory,
  ArtGobblers,
  ArtGobblers__factory,
  ERC20,
  ERC20__factory,
} from "../types/ethers-contracts";
import config from "../config";
import { useProvider } from "@web3modal/react";

interface Contracts {
  goo?: Goo;
  pages?: Pages;
  artGobblers?: ArtGobblers;
  gobble?: ERC20;
  weth?: ERC20;
}

const ContractsContext = createContext<Contracts>({} as Contracts);

export const ContractsProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { provider } = useProvider();
  const goo = provider
    ? Goo__factory.connect(config.contracts.GOO, provider)
    : undefined;
  const pages = provider
    ? Pages__factory.connect(config.contracts.PAGE, provider)
    : undefined;
  const artGobblers = provider
    ? ArtGobblers__factory.connect(config.contracts.GOBBLER, provider)
    : undefined;
  const gobble = provider
    ? ERC20__factory.connect(config.contracts.GOBBLE, provider)
    : undefined;
  const weth = provider
    ? ERC20__factory.connect(config.contracts.WETH, provider)
    : undefined;

  return (
    <ContractsContext.Provider
      value={{ goo, pages, artGobblers, gobble, weth }}
    >
      {children}
    </ContractsContext.Provider>
  );
};

export default ContractsContext;
