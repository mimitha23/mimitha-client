import styled from "styled-components";

export const AuthPopup = styled.div`
  position: fixed;
  z-index: 1000;
  background: transparent;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  [data-spinner] {
    position: absolute;
    inset: 0;
    width: auto;
    height: auto;
    background: ${({ theme }) => theme.colors.black_tr_02};
  }

  @media (${({ theme }) => theme.media.tablet_sm}) {
    align-items: flex-start;
  }
`;
