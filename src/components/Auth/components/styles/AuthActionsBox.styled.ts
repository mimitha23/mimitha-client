import styled from "styled-components";

export const AuthActionsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (${({ theme }) => theme.media.tablet_sm}) {
    width: ${({ theme }) => theme.app.form_field_w_tablet};
  }
`;
