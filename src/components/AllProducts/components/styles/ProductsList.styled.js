import styled from "styled-components";
import { animateMoveLeft } from "styles/helpers";

export const ProductsList = styled.div`
  margin-top: 4rem;
  padding: 0 3rem 3rem;
  display: grid;
  gap: 6rem 4rem;
  grid-template-columns: repeat(auto-fit, minmax(32rem, max-content));
  justify-content: start;
  ${animateMoveLeft({
    duration: ({ theme }) => theme.app.section_animation_duration,
  })};

  @media (${({ theme }) => theme.media.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    padding: 0 1rem 2rem;
  }
`;
