import styled, { keyframes } from "styled-components";

const animate_auth_popup = keyframes`
  0%{
    opacity: 0;
    transform: scale(1);
  } 100% {
    opacity: 1;
    transform: scale(50);
  }
`;

export const AnimateLayover = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  background: ${({ theme }) => theme.gradients.backdrop_gradient};
  animation: ${animate_auth_popup} 0.3s ease forwards;

  @media (${({ theme }) => theme.media.tablet_sm}) {
    width: auto;
    height: auto;
    border-radius: 0;
    background: transparent;
    animation: none;
  }
`;
