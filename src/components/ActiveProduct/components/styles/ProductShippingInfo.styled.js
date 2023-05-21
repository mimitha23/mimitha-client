import styled from "styled-components";

export const ProductShippingInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  margin-top: -2rem;

  div {
    margin: 10px 0 10px 0;
    p {
      font-size: ${({ theme }) => theme.fontSize.base};

      span {
        display: inline-block;
        width: 2rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.text};
      }
    }
  }
`;
