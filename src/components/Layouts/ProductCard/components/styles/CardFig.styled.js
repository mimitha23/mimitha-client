import styled from "styled-components";

export const CardFig = styled.figure`
  width: 100%;
  height: 100%;
  min-height: 20rem;
  max-height: 20rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.radial_sm_dark};

  .card-fig__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
