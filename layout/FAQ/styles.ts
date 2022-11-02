import styled from "styled-components";
import pageWidth from "../../styles/pageWidth";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Entries = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Entry = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Question = styled.h3`
  display: flex;
`;

export const Answer = styled.span`
  display: flex;
  @media (max-width: ${pageWidth.phone}px) {
    display: inline-block;
    word-wrap: break-word;
  }
`;
