import styled from "styled-components";
import { animateMoveLeft } from "styles/helpers";

export const ProductInfo = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${animateMoveLeft({
    duration: ({ theme }) => theme.app.section_animation_duration,
  })};

  @media (${({ theme }) => theme.media.desktop}) {
    max-width: 100%;
    width: 100%;
  }
`;
