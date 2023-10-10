import styled from "styled-components";

export const CurrencySwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.25rem;
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 0.25rem;
  }
`;
