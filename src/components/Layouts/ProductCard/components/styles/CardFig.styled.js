import styled from "styled-components";

export const CardFig = styled.figure`
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: white;

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
