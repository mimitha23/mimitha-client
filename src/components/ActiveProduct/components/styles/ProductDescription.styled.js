import styled from "styled-components";

export const EditorDescription = styled.div`
  letter-spacing: 0.5px;

  .product-description__title {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.25rem;
    font-weight: 500;
  }

  .product-description__box {
    display: flex;
    align-items: flex-end;
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }

  .product-description__info-devider {
    width: 90px;
    margin: 5px;

    border: 1px solid ${({ theme }) => theme.colors.text};
  }

  .product-description__sold {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;

    span {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 6rem;
      color: ${({ theme }) => theme.colors.bg};
      background-color: ${({ theme }) => theme.colors.text};
    }
  }
`;
