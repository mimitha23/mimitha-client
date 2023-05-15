import styled from "styled-components";

export const ProfileIcon = styled.div`
  width: 230px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .user-fig {
    height: 100%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .profileIcon--text {
    flex: 3;
    margin: 0 0 1rem 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }

  .darkMode--switch {
    margin-top: 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.sm};
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.bg};
    width: fit-content;
    border-radius: 0.5rem;

    button {
      padding: 0.3rem 0.75rem;
      border-radius: inherit;
    }
  }
`;
