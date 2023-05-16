import styled from "styled-components";

export const ProductShippingInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  margin-top: -2rem;

  div {
    p {
      font-size: ${({ theme }) => theme.fontSize.sm};

      hr {
        display: inline-block;
        width: 2rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.text};
      }
    }
  }
`;
