import styled from "styled-components";

export const Path = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;

  span {
    display: flex;
    align-items: center;
    line-height: 1.3;
    height: max-content;

    a {
      position: relative;
    }

    a::first-letter {
      text-transform: capitalize;
    }

    &.search_path-step {
      display: flex;
      align-items: center;

      pre {
        font-family: inherit;
      }
    }
  }

  span:not(:last-child) a::after {
    content: ">";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -2rem;
    width: 1rem;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sale-path {
    width: 100%;
    display: inline-block;
    text-align: center;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.blue};
  }

  .title-path {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    -webkit-line-clamp: 1;
  }
`;
