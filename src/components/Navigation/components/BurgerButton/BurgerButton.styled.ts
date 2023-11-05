import styled from "styled-components";

export const BurgerButton = styled.button`
  font-size: 3rem;
  display: none;
  margin-top: -4px;

  @media (${({ theme }) => theme.media.desktop}) {
    display: flex;
  }
`;
