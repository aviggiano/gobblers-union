import Head, { description, title } from "../components/Head";
import styled from "styled-components";
import FAQ from "../layout/FAQ";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Header from "../layout/Header";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export default function Home() {
  return (
    <div>
      <Head />
      <main>
        <Content>
          <Header></Header>
          <Title>{title}</Title>
          <Subtitle>{description}</Subtitle>
          <h1>Statistics of the DAO</h1>
          <h2>$GOO: xxx</h2>
          <h2>Art Gobblers: xxx</h2>
          <h2>$GOBBLE: xxx</h2>
          <FAQ />
        </Content>
      </main>
    </div>
  );
}
