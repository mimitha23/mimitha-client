import styled from "styled-components";
import { buttonPrimary } from "styles/helpers";

export const FitButtonsContainer = styled.div`
  margin-bottom: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  .fit-btn {
    ${buttonPrimary};
    text-transform: capitalize;
  }

  @media (${({ theme }) => theme.media.mobile}) {
    justify-content: space-between;
    gap: 1rem;
  }
`;
