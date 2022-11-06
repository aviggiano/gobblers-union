import Head, { description, title } from "../components/Head";
import styled from "styled-components";
import FAQ from "../layout/FAQ";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Header from "../layout/Header";
import { useContext, useEffect, useState } from "react";
import ContractsContext from "../contexts/Contracts";
import config from "../config";
import { useAccount } from "@web3modal/react";
import { ethers } from "ethers";
import { Stats, StatsContainer } from "../layout/Stats";
import pageWidth from "../styles/pageWidth";

const Container = styled.div`
  main {
    display: flex;
    justify-content: center;

    @media (max-width: ${pageWidth.phone}px) {
      display: unset;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 1440px;

  h1 {
    @media (max-width: ${pageWidth.phone}px) {
      text-align: center;
    }
  }
`;

export default function Home() {
  const [gooValue, setGooValue] = useState("");
  const [artGobblersValue, setArtGobblersValue] = useState("");
  const [pagesValue, setPagesValue] = useState("");
  const [daoShareValue, setDaoShareValue] = useState("");
  const [ethValue, setEthValue] = useState("");
  const { pages, artGobblers, gobble } = useContext(ContractsContext);
  const { account } = useAccount();

  useEffect(() => {
    artGobblers
      ?.gooBalance(config.contracts.union)
      .then((amount) => setGooValue(ethers.utils.formatEther(amount)));
  }, [artGobblers, gooValue, setGooValue]);

  useEffect(() => {
    artGobblers
      ?.balanceOf(config.contracts.union)
      .then((amount) => setArtGobblersValue(amount.toString()));
  }, [artGobblers, gooValue, setGooValue]);

  useEffect(() => {
    pages
      ?.balanceOf(config.contracts.union)
      .then((amount) => setPagesValue(amount.toString()));
  }, [pages, pagesValue, setPagesValue]);

  useEffect(() => {
    const provider = ethers.getDefaultProvider();
    provider
      .getBalance(config.contracts.union)
      .then((amount) =>
        setEthValue(ethers.utils.formatEther(amount.toString()))
      );
  }, [ethValue, setEthValue]);

  useEffect(() => {
    if (account.address) {
      (async () => {
        const totalSupply = await gobble?.totalSupply();
        const balance = await gobble?.balanceOf(account.address);
        const BASE = 100_000;
        const share = totalSupply
          ? (
              balance?.mul(BASE).div(totalSupply.div(100)).toNumber()! / BASE ||
              ""
            ).toString()
          : "";
        setDaoShareValue(share);
      })();
    }
  }, [gobble, account.address, setDaoShareValue]);

  return (
    <Container>
      <Head />
      <main>
        <Content>
          <Header></Header>
          <Title>{title}</Title>
          <Subtitle>{description}</Subtitle>
          <h1>Statistics of the DAO</h1>
          <StatsContainer>
            <Stats title="$GOO" subtitle={gooValue} />
            <Stats title="Art Gobblers" subtitle={artGobblersValue} />
            <Stats title="ETH balance" subtitle={ethValue} />
            <Stats
              title="Your share of the DAO"
              secondary
              subtitle={daoShareValue ? `${daoShareValue}%` : ""}
            />
            <Stats
              title="Your equivalent $GOO balance"
              secondary
              subtitle={
                daoShareValue && gooValue
                  ? `${(Number(daoShareValue) * Number(gooValue)) / 100}`
                  : ""
              }
            />
          </StatsContainer>
          <FAQ />
        </Content>
      </main>
    </Container>
  );
}
