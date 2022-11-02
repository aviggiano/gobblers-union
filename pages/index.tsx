import Head from "../components/Head";
import styled from "styled-components";

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
          <h1>{"Gobbler's Union"}</h1>
        </Content>
      </main>
    </div>
  );
}
