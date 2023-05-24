import styled from "styled-components";
import { media } from "styles/helpers/media";

export const ProductShippingInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  margin-top: -2rem;

  div {
    margin: 1rem 0 1rem 0;

    p {
      font-size: ${({ theme }) => theme.fontSize.base};

      span {
        display: inline-block;
        width: 2rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.text};
      }
    }
  }

  ${media.mobileLarge`
    flex-direction:column;
  `}
`;
