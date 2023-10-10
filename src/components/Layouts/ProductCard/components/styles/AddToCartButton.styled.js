import styled from "styled-components";
import { buttonPrimary } from "styles/helpers/components";

export const AddToCartButton = styled.button`
  ${buttonPrimary};
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.5rem;
  gap: 1.5rem;
  text-transform: capitalize;
  margin-top: auto;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadow.bottom_right_md_dark};
  margin-top: 0;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
