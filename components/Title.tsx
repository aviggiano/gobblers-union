import { PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    align-self: center;
    font-size: 72px;
  }
`;

export default function Title({ children }: PropsWithChildren) {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
}
