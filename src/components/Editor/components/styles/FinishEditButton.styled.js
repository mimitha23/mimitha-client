import styled from "styled-components";
import { buttonPrimary, animateMoveTop } from "styles/helpers";

export const FinishEditButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  text-transform: capitalize;
  ${animateMoveTop({
    duration: ({ theme }) => theme.app.section_animation_duration,
  })}

  a {
    ${buttonPrimary};
  }

  @media (${({ theme }) => theme.media.tablet}) {
    position: relative;
    bottom: 0;
    right: 0;
    display: inline-block;
    margin-top: 4rem;
    align-self: flex-end;
  }
`;
