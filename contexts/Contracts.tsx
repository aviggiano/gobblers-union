import React, { createContext, PropsWithChildren, useState } from "react";
import {
  Goo,
  Goo__factory,
  Pages,
  Pages__factory,
  ArtGobblers,
  ArtGobblers__factory,
  ERC20 as Gobble,
  ERC20__factory as Gobble__factory,
} from "../types/ethers-contracts";
import config from "../config";
import { useProvider } from "@web3modal/react";

interface Contracts {
  goo?: Goo;
  pages?: Pages;
  artGobblers?: ArtGobblers;
  gobble?: Gobble;
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
    ? Gobble__factory.connect(config.contracts.GOBBLE, provider)
    : undefined;

  return (
    <ContractsContext.Provider value={{ goo, pages, artGobblers, gobble }}>
      {children}
    </ContractsContext.Provider>
  );
};

export default ContractsContext;
