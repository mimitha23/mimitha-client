import styled from "styled-components";

export const RelatedProductsContainer = styled.div`
  padding-top: 4rem;

  .related-products__section-title {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 500;
    text-transform: capitalize;
  }

  [data-multiple-slider] {
    margin-top: 5rem;

    .related-products__slider-item {
      max-width: 100%;
      height: 40rem;
      border: 1px solid ${({ theme }) => theme.colors.gray_tint};
      border-radius: 0.5rem;
      box-shadow: ${({ theme }) =>
        theme.mode === "light"
          ? theme.shadow.radial_sm_dark_fade
          : theme.shadow.radial_sm_light_fade};
      margin: 0 1rem;

      .related-products__slider-item--fig {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
`;
