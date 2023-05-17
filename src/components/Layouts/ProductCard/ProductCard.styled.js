import styled from "styled-components";

export const ProductCard = styled.div`
  width: 500px;
  height: 650px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-weight: 500;

  .imageContainer {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 500px;
    border: 1px solid ${({ theme }) => theme.colors.text};
    img {
      max-width: 100%;
      max-height: 95%;
    }
  }

  .productDescription {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */

    border-bottom: 2px solid ${({ theme }) => theme.colors.text};
    h2 {
      font-weight: 500;
    }

    div {
      height: 50px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 1.75rem;
        span {
          font-weight: 700;
          font-size: 2rem;
        }
      }
    }
    .add-to-cart {
      text-align: center;
    }

    .cart-ico {
      width: 60px;
      height: 40px;
    }
  }

  .last-line {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .currency {
      margin: 2px;

      width: 25px;
      height: 25px;

      border: 1px solid ${({ theme }) => theme.colors.text};
    }
  }

  .edit-btn {
    width: 100px;
    height: 30px;
    text-align: center;
    font-size: 1.5rem;

    border: 2px solid ${({ theme }) => theme.colors.text};
  }
`;
