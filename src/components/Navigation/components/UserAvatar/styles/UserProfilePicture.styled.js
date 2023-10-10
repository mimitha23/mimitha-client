import styled from "styled-components";

export const UserProfilePicture = styled.figure`
  width: 4rem;
  height: 4rem;
  overflow: hidden;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray_shade};
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
