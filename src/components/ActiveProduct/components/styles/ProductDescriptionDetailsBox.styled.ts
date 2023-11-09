import styled from "styled-components";

export const ProductDescriptionDetailsBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};

  span:first-child {
    text-transform: capitalize;
  }

  .product-description__info-devider {
    width: 9rem;
    margin: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.text};
  }

  .details_list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    li {
      &:after {
        content: " / ";
      }
      &:before {
        content: "-";
        opacity: 0;
      }

      &:last-child::after {
        content: none;
      }
    }
  }

  @media (${({ theme }) => theme.media.mobile}) {
    .product-description__box {
      display: grid;
      grid-template: repeat(1, max-content) / repeat(
          1,
          max-content max-content 1fr
        );
      align-items: start;
      margin-top: 1rem;
    }

    .product-description__info-devider {
      width: 4rem;
      transform: translateY(1rem);
    }
  }
`;
