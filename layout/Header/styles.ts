import styled from "styled-components";
import { black2, white } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${black2};
  align-items: center;
  color: ${white};
  gap: 16px;

  w3m-connect-button {
    margin-left: auto;
  }

  border-radius: 60px;
  padding: 0px 16px;
  height: 72px;
`;

export const Address = styled.pre`
  margin-left: auto;
  font-size: 18px;
`;

export const Gobble = styled.pre`
  font-size: 18px;
`;
