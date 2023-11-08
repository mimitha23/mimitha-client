import styled from "styled-components";

export const AllProductsHeader = styled.header`
  width: 100%;
  position: sticky;
  z-index: 9;
  top: ${({ theme }) => theme.app.nav_h};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 3rem 2rem 3rem;
  background: ${({ theme }) => theme.colors.bg};
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
  transition: all 0.2s linear;

  @media (${({ theme }) => theme.media.mobile}) {
    padding: 1rem;
  }

  [data-filter-container] {
    column-gap: 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-template-rows: auto;

    [data-filter-dropdown],
    [data-filter-dropdown] > * {
      width: 100%;
    }
  }
`;
