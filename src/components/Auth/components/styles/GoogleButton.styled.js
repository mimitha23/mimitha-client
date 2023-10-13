import styled from "styled-components";
import { LoginButton } from "./LoginButton.styled";

export const GoogleButton = styled(LoginButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  span:last-child {
    transform: translateY(0.2rem);
  }
`;
