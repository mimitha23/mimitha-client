import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%;

  .filter-dropdowns__wrapper {
    display: flex;
    align-items: center;
    column-gap: 6rem;
    row-gap: 2rem;
    flex-wrap: wrap;
    width: calc(100% - 4rem);
  }

  @media (${({ theme }) => theme.media.tablet_sm}) {
    .filter__expand-box {
      display: flex;
    }

    .filter-dropdowns__wrapper {
      display: none !important;
    }

    &.visible_filter .filter-dropdowns__wrapper {
      display: flex !important;
    }

    &.visible_filter .filter__expand-box {
      padding-bottom: 2rem;
    }
  }
`;
