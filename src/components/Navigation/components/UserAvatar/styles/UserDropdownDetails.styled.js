import styled from "styled-components";

export const UserDropdownDetails = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_shade};

  .mutable-fig {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 100%;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .user__email-and-username {
    display: flex;
    flex-direction: column;

    .user__email {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }

  .camera-label {
    margin-left: auto;
    font-size: 2.5rem;
    cursor: pointer;
  }
`;
