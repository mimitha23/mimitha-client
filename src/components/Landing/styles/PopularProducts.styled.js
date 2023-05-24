import styled from "styled-components";

export const PopularProducts = styled.div`
  margin: 8rem 0 4rem;
  width: 100%;
  .popular-products__container {
    margin: 8rem 0 4rem;
    display: grid;
    gap: 10rem;
    grid-template-columns: 50rem 50rem;
    grid-template-rows: 65rem 65rem;
    justify-content: space-between;
    align-items: center;
  }

  .popular-products-header {
    width: 30rem;
    height: 10rem;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;
    p {
      width: 100%;
      text-align: center;
    }
  }
`;
