import styled from "styled-components";

export const Gallery = styled.div`
  padding: 0 1rem 2rem 1rem;
  padding-top: calc(${({ theme }) => theme.app.nav_h_full} + 2rem);
  min-height: calc(100vh - ${({ theme }) => theme.app.nav_h_full});

  .gallery-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-auto-flow: dense;
    grid-auto-rows: 10rem;
    gap: 0.5rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &.loaded-content .gallery-list {
    opacity: 1;
  }
`;
