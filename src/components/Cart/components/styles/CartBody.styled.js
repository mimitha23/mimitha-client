import styled from "styled-components";
import { scrollBar } from "styles/helpers/components";

export const CartBodyContainer = styled.main`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: auto;
  ${scrollBar};
  padding-right: 2rem;
  scroll-behavior: smooth;
`;
