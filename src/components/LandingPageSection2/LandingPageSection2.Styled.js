import styled from "styled-components";

export const StyledLandingPageSection2 = styled.div`
  width: 1920px;
  height: 900px;
  padding: 0 150px 0 150px;
  margin: 10px 0 10px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 2px solid ${({ theme }) => theme.colors.text};
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
`;

export const StyledLPSection2BoxesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 200px;

  .kid2 {
    div {
      left: 0;
      justify-content: flex-start;
    }
  }
  .kid3 {
    div {
      top: 0;
    }
  }
  .kid4 {
    div {
      justify-content: flex-start;
      top: 0;
      left: 0;

      span {
        font-size: 1rem;
      }
    }
  }
`;
