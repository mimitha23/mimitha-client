import styled from "styled-components";

export const BookmarksList = styled.ul`
  padding: 3rem;
  display: grid;
  gap: 6rem 4rem;
  grid-template-columns: repeat(auto-fit, minmax(32rem, max-content));

  @media (${({ theme }) => theme.media.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    padding: 3rem 1rem;
  }
`;
