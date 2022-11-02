import { Web3Button } from "@web3modal/react";
import { useAccount } from "@web3modal/react";
import { Address, Container } from "./styles";

export default function FAQ() {
  const { account } = useAccount();
  return (
    <Container>
      <Address>{account.isConnected ? account.address : null}</Address>
      <Web3Button label="Connect wallet" icon="" />
    </Container>
  );
}
