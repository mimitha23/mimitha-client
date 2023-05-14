import styled from "styled-components";

export const StyledLandingCTAPhoto = styled.div`
  width: 1920px;
  margin-top: 180px;
  height: 900px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  a {
    text-decoration: none;
  }
  background-image: url("/images/image-not-uploaded.png");
`;
export const LandingCTAContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.text};
  width: 750px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
`;

export const LandingCTA = styled.div`
  width: 730px;
  height: 55px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  border: 1px solid ${({ theme }) => theme.colors.bg};
  border-radius: 10px;

  span {
    color: ${({ theme }) => theme.colors.bg};
    font-size: 2rem;
    font-weight: 500;
    margin: 2.5px 0 2.5px 0;
    letter-spacing: 2px;

    :nth-child(2) {
      font-size: 3rem;
      letter-spacing: 10px;
    }
  }
`;
