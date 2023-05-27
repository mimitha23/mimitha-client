import styled from "styled-components";
import { scrollBar } from "styles/helpers";

export const CartBodyContainer = styled.main`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: auto;
  ${scrollBar};
  padding-right: 2rem;
  scroll-behavior: smooth;

  @media (${({ theme }) => theme.media.tablet}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
    grid-template-rows: auto;
  }
`;
