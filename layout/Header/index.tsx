import { Web3Button } from "@web3modal/react";
import { useAccount } from "@web3modal/react";
import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import ContractsContext from "../../contexts/Contracts";
import { Address, Gobble, Container } from "./styles";

export default function FAQ() {
  const { account } = useAccount();
  const [gobbleValue, setGobbleValue] = useState("");
  const { gobble } = useContext(ContractsContext);

  useEffect(() => {
    if (account.address) {
      gobble
        ?.balanceOf(account.address)
        .then((amount) => setGobbleValue(amount.toString()));
    }
  }, [gobble, gobbleValue, setGobbleValue, account.address]);

  return (
    <Container>
      <Address>{account.isConnected ? account.address : null}</Address>
      <Gobble>
        {gobbleValue
          ? `(${ethers.utils.formatEther(gobbleValue)} $GOBBLE)`
          : null}
      </Gobble>
      <Web3Button label="Connect wallet" icon="" />
    </Container>
  );
}
