import styled from "styled-components";
import { animateMoveRight } from "styles/helpers";

export const ProductView = styled.div`
  width: 100%;
  height: 30vw;
  display: flex;
  gap: 2.5rem;
  flex: 1;
  ${animateMoveRight({
    duration: ({ theme }) => theme.app.section_animation_duration,
  })};

  @media (${({ theme }) => theme.media.desktop}) {
    flex-direction: column;
    height: 50rem;
    width: 100%;
  }

  @media (${({ theme }) => theme.media.mobile}) {
    height: 40rem;
  }
`;
