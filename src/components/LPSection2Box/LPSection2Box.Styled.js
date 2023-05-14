import styled from "styled-components";

export const StyledLPSection2Box = styled.div`
  background-color: red;
  width: 700px;
  height: 300px;
  position: relative;

  background-image: url("./images/image-not-uploaded.png");
  background-repeat: repeat;

  border: 2px solid ${({ theme }) => theme.colors.text};

  div {
    width: 400px;
    height: 50px;

    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.bg};

    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    font-size: 1.75rem;
    font-weight: 400;
  }
`;
