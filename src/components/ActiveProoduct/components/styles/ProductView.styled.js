import styled from "styled-components";

export const ProductView = styled.div`
  flex: 1;
  display: flex;
  gap: 0.5rem;

  .editor-fig {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .editor-fig img {
    width: 100%;
    aspect-ratio: 1/1;
    object-position: center;
  }
`;
