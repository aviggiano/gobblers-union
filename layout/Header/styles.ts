import styled from "styled-components";
import { black2, white } from "../../styles/colors";
import pageWidth from "../../styles/pageWidth";

export const Container = styled.div<{ isConnected: boolean }>`
  display: flex;
  flex-direction: row;
  background-color: ${black2};
  align-items: center;
  color: ${white};
  gap: 16px;

  w3m-core-button {
    margin-left: ${(props) => (props.isConnected ? "" : "auto")};
    @media (max-width: ${pageWidth.phone}px) {
      margin-left: unset;
    }
  }

  border-radius: 60px;
  padding: 0px 16px;
  height: 72px;

  @media (max-width: ${pageWidth.phone}px) {
    height: ${(props) => (props.isConnected ? "144px" : "72px")};
    flex-direction: column;
    justify-content: center;
    transition: all 0.5s ease-in-out;
  }
`;

export const Address = styled.pre`
  margin-left: auto;
  font-size: 18px;
  @media (max-width: ${pageWidth.phone}px) {
    margin-left: unset;
    width: 160px;
    margin-top: 0px;
    margin-bottom: 0px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const Gobble = styled.pre`
  font-size: 18px;

  @media (max-width: ${pageWidth.phone}px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;
