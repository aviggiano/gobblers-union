import styled from "styled-components";
import { Container, StatsSubtitle, StatsTitle } from "./styles";

interface Props {
  title: string;
  subtitle: string;
  primary?: boolean;
  secondary?: boolean;
}

export function Stats({ title, subtitle, primary, secondary }: Props) {
  return (
    <Container primary={primary ? primary : secondary ? false : true}>
      <StatsTitle>{title}</StatsTitle>
      <StatsSubtitle>{subtitle}</StatsSubtitle>
    </Container>
  );
}

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
