import styled from "styled-components";

export const LoginButton = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  height: 4rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-out;

  @media (${({ theme }) => theme.media.tablet_sm}) {
    width: ${({ theme }) => theme.app.form_field_w_tablet};
  }

  @media (hover: hover) {
    &:hover {
      filter: brightness(110%);
    }
  }
`;
