import styled from "styled-components";
import { scrollBar } from "styles/helpers";

export const CartBodyContainer = styled.main`
  margin: 2rem 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: auto;
  ${scrollBar};
  padding-right: 2rem;
  scroll-behavior: smooth;

  .no-products__message {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    opacity: 0.5;
  }

  @media (${({ theme }) => theme.media.tablet}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
    grid-template-rows: auto;
  }
`;
