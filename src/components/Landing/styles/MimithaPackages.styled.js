import styled, { css } from "styled-components";

export const MimithaPackagesContainer = styled.div`
  margin-top: 4rem;
  padding: 4rem 0;
  border-top: 2px solid ${({ theme }) => theme.colors.text};
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};

  .packages-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 300px);
    justify-content: space-between;
    gap: 200px;
  }
`;

export const PackageBox = styled.div`
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  border: 2px solid ${({ theme }) => theme.colors.text};

  ${({ position }) =>
    position === "bottom-right"
      ? css`
          background-image: url("/assets/images/new-collection.jpg");

          p {
            right: 0;
            bottom: 0;
            text-align: end;
          }
        `
      : position === "bottom-left"
      ? css`
          background-image: url("/assets/images/choose-your-style.jpg");

          p {
            left: 0;
            bottom: 0;
          }
        `
      : position === "top-right"
      ? css`
          background-image: url("/assets/images/on-what.jpg");

          p {
            right: 0;
            top: 0;
            text-align: right;
          }
        `
      : position === "top-left"
      ? css`
          background-image: url("/assets/images/more-then-design.jpg");

          p {
            left: 0;
            top: 0;
          }
        `
      : ""}

  p {
    position: absolute;
    width: 400px;
    padding: 0.5rem;
    height: max-content;
    font-size: 1.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.text};

    small {
      font-size: 0.8rem;
    }
  }
`;
