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

  .cta-link {
    background: ${({ theme }) => theme.colors.text};
    display: inline-block;
    width: 75rem;
    height: 7rem;
    padding: 1rem 0.8rem;
    border-radius: 1rem;
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.bg};
    font-weight: 500;
    letter-spacing: 2px;
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
      margin: 2.5px 0 2.5px 0;

      :nth-child(2) {
        font-size: ${({ theme }) => theme.fontSize.h3};
        letter-spacing: 1rem;
      }
    }
  }

  @media (${({ theme }) => theme.media.tablet}) {
    height: 55vw;

    .cta-link {
      width: 80%;
    }
  }

  @media (${({ theme }) => theme.media.mobile}) {
    height: 40vh;

    .cta-link {
      width: 90%;
      font-size: 1.8rem;

      .landingCTA span:nth-child(2) {
        font-size: 2.6rem;
      }
    }
  }
`;
