import styled from "styled-components";

export const ProfileIcon = styled.div`
  width: 230px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  position: absolute;
  bottom: 5px;
  right: 0;

  img {
    flex: 1.5;
    height: 100%;
    border-radius: 50%;
  }

  .profileIcon--text {
    flex: 3;
    margin: 0 0 10px 10px;

    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }
  .darkMode--switch {
    width: fit-content;
    margin-top: 2px;

    color: ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.text};

    font-size: 0.75rem;

    border-radius: 5px;
    cursor: pointer;
  }
`;
