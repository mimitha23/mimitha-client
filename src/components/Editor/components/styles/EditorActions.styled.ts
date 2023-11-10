import styled from "styled-components";

export const EditorActionsContainer = styled.div`
  flex: 1;
  min-height: 100%;
  align-self: stretch;
  position: relative;

  @media (${({ theme }) => theme.media.tablet}) {
    flex: unset;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
