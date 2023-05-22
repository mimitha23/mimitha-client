import styled from "styled-components";

export const LandingCTAPhoto = styled.div`
  margin-top: ${({ theme }) => theme.app.nav_h_full};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vw;
  background-image: url("/assets/images/make-your-style.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  a {
    background: ${({ theme }) => theme.colors.text};
    display: inline-block;
    width: 75rem;
    height: 7rem;
    padding: 1rem 0.8rem;
    border-radius: 1rem;
  }

  .landingCTA {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0.5rem 2rem;
    border-radius: inherit;
    border: 1px solid ${({ theme }) => theme.colors.bg};

    span {
      color: ${({ theme }) => theme.colors.bg};
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: 500;
      margin: 2.5px 0 2.5px 0;
      letter-spacing: 2px;

      :nth-child(2) {
        font-size: ${({ theme }) => theme.fontSize.h3};
        letter-spacing: 1rem;
      }
    }
  }
`;
