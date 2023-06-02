import styled from "styled-components";

export const Path = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;

  span {
    display: flex;
    align-items: center;
    line-height: 1;

    a {
      position: relative;
    }

    a::first-letter {
      text-transform: capitalize;
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
`;
