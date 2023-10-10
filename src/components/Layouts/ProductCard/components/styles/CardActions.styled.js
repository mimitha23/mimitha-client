import styled from "styled-components";
import { buttonPrimary } from "styles/helpers/components";

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  max-width: 100%;

  .edit-btn {
    ${buttonPrimary};
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.5rem;
    width: 100%;
    text-transform: uppercase;
    box-shadow: ${({ theme }) => theme.shadow.bottom_right_md_dark};
    margin-bottom: 0.5rem;

    a {
      display: inline-block;
      padding: 0.5rem 0.5rem;
    }
  }
`;
