import styled from "styled-components";
import { animatePopUpAndScale } from "styles/helpers/animations";

export const CartContainer = styled.div`
  padding-top: ${({ theme }) => theme.app.nav_h_full};
  height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${animatePopUpAndScale};

  .cart {
    width: min(120rem, 100%);
    height: 35vw;
    box-shadow: ${({ theme }) => theme.shadow.radial_sm_dark};
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }

  .cart__banking-modal {
    width: 40rem;
    height: 35vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
