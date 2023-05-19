import styled from "styled-components";

export const FitListContainer = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(4, minmax(20rem, 1fr));
  grid-auto-rows: 30rem;
  gap: 2rem;
  padding: 0.5rem;

  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FitListCardContainer = styled.div`
  box-shadow: ${({ theme }) =>
    theme.mode === "light"
      ? theme.shadow.radial_sm_dark
      : theme.shadow.radial_sm_light};

  .fit-list--card__fig {
    overflow: hidden;

    &,
    & img {
      width: 100%;
      height: 100%;
    }

    img {
      object-fit: contain;
    }
  }
`;
