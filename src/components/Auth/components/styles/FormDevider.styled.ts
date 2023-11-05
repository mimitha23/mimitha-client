import styled from "styled-components";

export const FormDevider = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (${({ theme }) => theme.media.tablet_sm}) {
    width: ${({ theme }) => theme.app.form_field_w_tablet};
  }

  hr {
    width: 100%;
    height: 1px;
  }

  span {
    transform: translateY(-20%);
  }
`;
