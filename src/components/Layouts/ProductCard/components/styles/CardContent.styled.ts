import styled from "styled-components";

export const CardContent =
  styled.div <
  { cardType: "withActions" | "descriptive" } >
  `
  width: 100%;
  height: 100%;
  /* height: 22rem; */
  max-height: 26rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`;
