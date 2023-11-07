import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  border-top: 2px solid ${({ theme }) => theme.colors.text};

  .footer__content-wrapper {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10rem;
    align-items: center;
    justify-content: flex-start;
    padding: 5rem 2rem;
  }

  .footer__learn-more {
    &__figure {
      cursor: pointer;
      height: 5rem;
      width: max-content;

      img {
        height: 100%;
        object-fit: contain;
      }
    }

    p {
      max-width: 25rem;
    }
  }

  .footer__extra-info {
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

  .footer__social-networks {
    justify-self: end;
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
    height: 4rem;
    border-top: 2px solid ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.bg};
    font-size: ${({ theme }) => theme.fontSize.sm};

    p {
      padding-left: 2rem;
      font-weight: 300;
    }
  }

  @media (${({ theme }) => theme.media.desktop}) {
    .footer__content-wrapper {
      column-gap: 6rem;
    }
  }

  @media (${({ theme }) => theme.media.tablet}) {
    .footer__content-wrapper {
      grid-template-columns: repeat(1, 1fr);
      column-gap: 5rem;
      row-gap: 5rem;
    }

    .footer__social-networks {
      justify-self: start;

      p {
        text-align: start;
      }
    }
  }

  @media (${({ theme }) => theme.media.mobile}) {
    .copyrightp {
      width: 100%;
      padding: 0;
      text-align: center;
    }
  }
`;
