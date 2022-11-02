import styled from "styled-components";
import { black1, black2, gray, green, white } from "../../styles/colors";

export const Container = styled.div<{ primary: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${black1};
  box-shadow: rgb(255 255 255 / 20%) 0px 1.49px 4.0375px,
    rgb(0 0 0 / 25%) 0px 8px 12px inset;
  border: 2px solid ${black2};
  border-radius: 100px;
  align-items: center;
  justify-content: center;

  padding: 0px 16px;
  height: 84px;
  width: 340px;

  h2 {
    color: ${(props) => (props.primary ? white : green)};
  }
`;

export const StatsTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
`;

export const StatsSubtitle = styled.h4`
  color: ${gray};
  margin-top: 0;
  margin-bottom: 0;
`;
