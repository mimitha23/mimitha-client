import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 25rem;
  .footer__container-full {
    height: 100%;

    border-top: 2px solid ${({ theme }) => theme.colors.text};
    padding: 0;
    min-height: unset;
  }
  .footer-upper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20rem;
    padding: 10rem;
  }

  .footer-upper-left-panel {
    display: flex;
    align-items: center;
    gap: 20rem;
  }

  .footer-learn-more {
    &__figure {
      cursor: pointer;
      width: 15rem;
      height: 5rem;

      img {
        width: 100%;
        height: 100%;
        /* object-fit: contain; */
      }
    }
    p {
      width: 25rem;
    }
  }

  .footer-support-list {
    h2 {
      margin-bottom: 2rem;
      font-size: ${({ theme }) => theme.fontSize.lg};
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .footer-social-container {
    justify-self: flex-end;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p {
      text-align: center;
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.xl};
    }

    .icons-container {
      display: flex;
      gap: 1.5rem;
    }

    &__icons {
      width: 5rem;
      height: 5rem;
    }
  }

  .copyright {
    display: flex;
    align-items: center;
    height: 40px;
    border-top: 2px solid ${({ theme }) => theme.colors.text};

    p {
      font-weight: 300;
      padding-left: 2rem;
    }
  }
`;
