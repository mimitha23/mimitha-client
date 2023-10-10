import styled from "styled-components";
import { animateMoveBottom } from "styles/helpers/animations";

export const SearchBarResultsHeader = styled.div`
  position: absolute;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.bg};
  box-shadow: 0 0.8rem 0.5rem ${({ theme }) => theme.colors.black_tr_02};
  ${animateMoveBottom};

  .search-results__header {
    color: royalblue;

    @media (hover: hover) {
      :hover {
        text-decoration: underline;
      }
    }

    @media (hover: none) {
      text-decoration: underline;
    }
  }
`;
