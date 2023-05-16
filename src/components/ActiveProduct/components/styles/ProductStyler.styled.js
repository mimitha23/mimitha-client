import styled from "styled-components";
import { buttonPrimary } from "styles/helpers";

export const ProductStyler = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border: 2px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.light_grey};

  .product-styler__box-title {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }

  .product-styler__colorizer-box__colors-container {
    display: flex;
    gap: 1rem;
    margin: 10px 10px 10px 0;
    position: relative;
    z-index: 10;
  }

  .product-styler__style-box__styles-container {
    display: flex;
    gap: 1rem;
    margin: 10px 10px 10px 0;
    position: relative;
    z-index: 10;
  }

  .product-styler__size-box__sizes-container {
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.sm};
    text-transform: uppercase;

    .size {
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text};
      border-right: 2px solid ${({ theme }) => theme.colors.text};
      cursor: pointer;
      transition: all 0.2s ease;

      &.active-size {
        color: ${({ theme }) => theme.colors.bg};
        background-color: ${({ theme }) => theme.colors.text};
      }

      :last-child {
        border: 0;
      }

      :not(.active-size):hover {
        color: ${({ theme }) => theme.colors.bg};
        background-color: ${({ theme }) => theme.colors.text};
      }
    }
  }

  .fit-and-questions__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    p {
      cursor: pointer;
      letter-spacing: 0.6px;
      font-size: 1.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .fit-btn {
    ${buttonPrimary};
    margin: 20px;
    font-weight: 900;

    :hover {
      color: ${({ theme }) => theme.colors.text};
      background-color: ${({ theme }) => theme.colors.bg};
    }
  }
`;

export const ColorPicker = styled.span`
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
  cursor: pointer;
  background: ${({ color }) => color || ""};
  transition: all 0.2s ease;

  &:not(.active-color):hover {
    border-radius: 0.2rem;
  }

  &.active-color {
    ::after {
      content: "";
      position: absolute;
      z-index: -2;
      left: -0.3rem;
      top: -0.3rem;
      border-radius: inherit;
      background: inherit;
      width: 4.1rem;
      height: 4.1rem;
      box-sizing: content-box;
      border: 2px solid inherit;
    }

    ::before {
      content: "";
      position: absolute;
      z-index: -1;
      left: -0.2rem;
      top: -0.2rem;
      border-radius: inherit;
      background: ${({ theme }) => theme.colors.bg};
      width: 3.9rem;
      height: 3.9rem;
    }
  }
`;
