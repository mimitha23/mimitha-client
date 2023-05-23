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
    gap: 20rem;
    padding: 2rem;
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
