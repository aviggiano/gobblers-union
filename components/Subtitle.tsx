import { PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    align-self: center;
    text-align: center;
    width: 960px;
  }
`;

export default function Subtitle({ children }: PropsWithChildren) {
  return (
    <Container>
      <h2>{children}</h2>
    </Container>
  );
}
